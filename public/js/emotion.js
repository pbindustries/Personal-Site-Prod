Vue.component("child", {
  props: {
    highest: { type: String },
    color: { type: String },
    noFace: { type: Boolean }
  },
  data() {
    return {
      renderCache: undefined
    };
  },
  methods: {
    initEmotion(renderer, emotion, color) {
      let scene, camera, control, camControl, particleSystem;
      const canvas = this.$refs.canvas;

      function init() {
        const container = canvas.getBoundingClientRect();
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(
          45,
          container.width / container.height,
          0.1,
          4000
        );

        // create a render, sets the background color and the size
        if (renderer === undefined) {
          renderer = new THREE.WebGLRenderer();
        } else {
          renderer.clear();
        }
        renderer.setClearColor(color, 1.0);
        renderer.setSize(container.width, container.height);

        // let there be light(s)!
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.125);
        dirLight.position.set(0, 0, 1).normalize();
        scene.add(dirLight);

        const pointLight = new THREE.PointLight(0xffffff, 1.5);
        pointLight.position.set(0, 100, 90);
        scene.add(pointLight);

        const ambientLight = new THREE.AmbientLight(0x111111);
        scene.add(ambientLight);

        // position and point the camera to the center of the scene
        camera.position.x = 0;
        camera.position.y = 200;
        camera.position.z = 600;
        camera.lookAt(scene.position);

        // add the output of the renderer to the html element
        canvas.appendChild(renderer.domElement);

        createText();
        createParticles();
        return renderer;
      }

      function createText() {
        const params = {
          material: 0,
          extrudeMaterial: 1,
          bevelEnabled: true,
          bevelThickness: 10,
          bevelSize: 5,
          font: "helvetiker",
          weight: "normal",
          style: "normal",
          height: 36,
          size: 80,
          curveSegments: 4,
          text: emotion
        };

        addText(params.text, params);
      }

      function createParticles() {
        THREE.ImageUtils.crossOrigin = "";

        // create the particle variables
        var particleCount = 500,
          particles = new THREE.Geometry(),
          pMaterial = new THREE.PointCloudMaterial({
            color: 0xffffff,
            size: 25,
            map: THREE.ImageUtils.loadTexture(
              `https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/${emotion}.png`
            ),
            transparent: true
          });

        // create individual particles
        for (let p = 0; p < particleCount; p++) {
          const wl = 1000,
            hl = wl / 2;

          // random positions for the particles, plus velocity
          const pX = Math.random() * wl - hl,
            pY = Math.random() * wl - hl,
            pZ = Math.random() * wl - hl,
            particle = new THREE.Vector3(pX, pY, pZ);
          particle.velocity = new THREE.Vector3(0, 0, 0);

          // add to the geometry
          particles.vertices.push(particle);
        }

        // create the particle system, add it to the scene
        particleSystem = new THREE.PointCloud(particles, pMaterial);
        particleSystem.sortParticles = true;
        scene.add(particleSystem);

        camControl = new THREE.OrbitControls(camera, renderer.domElement);

        // Dance, emojis, dance!
        render();

        /*--- animation part ----*/
        TweenMax.to(particleSystem.rotation, 1000, {
          y: 100,
          repeat: -1
        });

        var pCount = particleCount;
        while (pCount--) {
          // get the particle
          var particle = particles.vertices[pCount];

          TweenMax.to(particle, 5, {
            y: "+=100",
            repeat: -1,
            yoyo: true,
            ease: Back.easeInOut
          });
        }

        particleSystem.geometry.__dirtyVertices = true;
      }

      function addText(text, params) {
        const textGeo = new THREE.TextGeometry(text, params);
        textGeo.computeBoundingBox();
        textGeo.computeVertexNormals();

        const material = new THREE.MeshFaceMaterial([
          new THREE.MeshNormalMaterial({
            color: 0xffffff,
            lights: true
          }), // front
          new THREE.MeshNormalMaterial({
            color: 0xddffcc,
            shading: THREE.SmoothShading,
            lights: true
          }) // side
        ]);

        var textMesh = new THREE.Mesh(textGeo, material);
        textMesh.position.x = -textGeo.boundingBox.max.x / 2;
        textMesh.position.y = 0;
        textMesh.name = "text";
        scene.add(textMesh);
      }

      function render() {
        renderer.render(scene, camera);
        requestAnimationFrame(render);
      }

      // time for magic!
      return init();
    }
  },
  watch: {
    highest() {
      if (this.highest.length && this.noFace === false) {
        this.renderCache = this.initEmotion(
          this.renderCache,
          this.highest,
          this.color
        );
      }
    }
  },
  template: "#child"
});

new Vue({
  el: "#app",
  data() {
    return {
      thing: {},
      image: "",
      noFace: false
    };
  },
  computed: {
    highest() {
      //in this situation, functional would have been a lot more convulted and less legible
      //if you don't agree, there's a fork button ;)
      let max = 0;
      let maxkey = "";
      for (var key in this.thing) {
        if (this.thing[key] > max) {
          max = this.thing[key];
          maxkey = key;
        }
      }
      return maxkey;
    },
    color() {
      let high = this.highest;
      switch (high) {
        case "anger":
          return "rgb(130, 11, 132)";
          break;
        case "contempt":
          return "rgb(188, 123, 11)";
          break;
        case "disgust":
          return "rgb(25, 104, 52)";
          break;
        case "fear":
          return "rgb(145, 8, 29)";
          break;
        case "happiness":
          return "rgb(130, 11, 132)";
          break;
        case "neutral":
          return "rgb(119, 119, 119)";
          break;
        case "sadness":
          return "rgb(11, 100, 130)";
          break;
        case "surprise":
          return "rgb(16, 138, 232)";
          break;
        default:
          return "";
      }
    }
  },
  methods: {
    emotionReq() {
      let data, contentType;
      if (typeof this.image === "string") {
        data = { url: this.image };
        contentType = "application/json";
      } else {
        data = this.image;
        contentType = "application/octet-stream";
      }
      axios({
        method: "post",
        url:
          "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize",
        data: data,
        headers: {
          "Content-Type": contentType,
          "Ocp-Apim-Subscription-Key": "dfe3651266fd465ca5a3436d217faf6b"
        }
      }).then(response => {
        if (response.data.length > 0) {
          this.thing = response.data[0].scores;
        } else {
          this.noFace = true;
        }
      });
    },
    fileUpload(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      console.log(files[0]);
      this.image = files[0];
      this.createImage();
      this.emotionReq();
    },
    useMine() {
      this.image =
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/happiness.jpg";
      this.emotionReq();
    },
    createImage() {
      var image = new Image();
      var reader = new FileReader();

      reader.onload = e => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(this.image);
    },
    removeImage: function(e) {
      this.image = "";
      this.noFace = false;
      this.thing = {};
    }
  }
});
