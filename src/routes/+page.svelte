<script>
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

  let canvas;
  let status = 'Preparing Sapphire Cove…';
  let showDebug = false;
  let worldMotion = 1;
  let exposure = 1.08;
  let controls = null;

  onMount(() => {
    controls = createLab(canvas, (message) => (status = message), {
      motion: worldMotion,
      exposure
    });

    showDebug = new URLSearchParams(location.search).has('debug');

    const onKey = (event) => {
      if (event.key === 'r' || event.key === 'R') controls?.replay();
      if (event.key === 'a' || event.key === 'A') controls?.archive();
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        controls?.flip();
      }
      if (event.key === '`') showDebug = !showDebug;
    };

    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      controls?.destroy();
      controls = null;
    };
  });

  function roundedPath(ctx, x, y, width, height, radius) {
    const r = Math.min(radius, width / 2, height / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + width - r, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + r);
    ctx.lineTo(x + width, y + height - r);
    ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
    ctx.lineTo(x + r, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  function makeTexture(renderer, width, height, draw) {
    const output = document.createElement('canvas');
    output.width = width;
    output.height = height;
    const ctx = output.getContext('2d');
    if (!ctx) throw new Error('Unable to create a texture canvas.');
    ctx.imageSmoothingEnabled = false;
    draw(ctx, width, height);
    const texture = new THREE.CanvasTexture(output);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    return texture;
  }

  function drawShip(ctx, x, y, scale, sail = '#e0d3a6', hull = '#4e2b17') {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.fillStyle = hull;
    ctx.beginPath();
    ctx.moveTo(-80, 29);
    ctx.lineTo(84, 25);
    ctx.lineTo(57, 60);
    ctx.lineTo(-55, 54);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#a36a2d';
    ctx.fillRect(-50, 32, 104, 6);
    ctx.fillStyle = '#5b371d';
    ctx.fillRect(0, -81, 5, 116);
    ctx.fillRect(-58, -28, 121, 5);
    ctx.fillStyle = sail;
    ctx.beginPath();
    ctx.moveTo(-5, -76);
    ctx.lineTo(-53, -29);
    ctx.lineTo(-5, -33);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(10, -75);
    ctx.lineTo(58, -28);
    ctx.lineTo(10, -32);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#3478c5';
    ctx.fillRect(6, -89, 28, 6);
    ctx.restore();
  }

  function makeCardFront(renderer) {
    return makeTexture(renderer, 900, 1260, (ctx, width, height) => {
      roundedPath(ctx, 8, 8, width - 16, height - 16, 38);
      const paper = ctx.createLinearGradient(0, 0, 0, height);
      paper.addColorStop(0, '#f0dfb2');
      paper.addColorStop(0.55, '#dec793');
      paper.addColorStop(1, '#b89760');
      ctx.fillStyle = paper;
      ctx.fill();
      ctx.lineWidth = 14;
      ctx.strokeStyle = '#684214';
      ctx.stroke();
      roundedPath(ctx, 23, 23, width - 46, height - 46, 29);
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#dda94c';
      ctx.stroke();

      ctx.fillStyle = '#09273a';
      ctx.beginPath();
      ctx.arc(122, 121, 80, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ca9438';
      ctx.lineWidth = 8;
      ctx.stroke();
      ctx.fillStyle = '#efc869';
      ctx.textAlign = 'center';
      ctx.font = 'bold 68px Georgia';
      ctx.fillText('07', 122, 123);
      ctx.font = '22px Georgia';
      ctx.fillText('VESSEL', 122, 165);

      ctx.fillStyle = '#27170d';
      ctx.font = 'bold 52px Georgia';
      ctx.fillText('BERMUDA SLOOP', 474, 105);
      ctx.font = '29px Georgia';
      ctx.fillText('Moonlit Voyager', 474, 148);

      ctx.save();
      ctx.translate(798, 119);
      ctx.rotate(Math.PI / 4);
      const gem = ctx.createLinearGradient(-50, -50, 50, 50);
      gem.addColorStop(0, '#8df5ff');
      gem.addColorStop(0.38, '#277eff');
      gem.addColorStop(0.7, '#7a42ff');
      gem.addColorStop(1, '#e2b0ff');
      ctx.fillStyle = gem;
      ctx.fillRect(-49, -49, 98, 98);
      ctx.strokeStyle = '#684216';
      ctx.lineWidth = 7;
      ctx.strokeRect(-49, -49, 98, 98);
      ctx.restore();

      roundedPath(ctx, 56, 225, 788, 542, 20);
      const art = ctx.createLinearGradient(0, 225, 0, 767);
      art.addColorStop(0, '#06162b');
      art.addColorStop(0.56, '#123c58');
      art.addColorStop(0.57, '#0c5066');
      art.addColorStop(1, '#05293b');
      ctx.fillStyle = art;
      ctx.fill();
      ctx.strokeStyle = '#744b1a';
      ctx.lineWidth = 9;
      ctx.stroke();
      ctx.fillStyle = '#ddd7a7';
      ctx.beginPath();
      ctx.arc(246, 354, 73, 0, Math.PI * 2);
      ctx.fill();
      drawShip(ctx, 472, 585, 1.55);

      for (let y = 665; y < 755; y += 16) {
        ctx.fillStyle = y % 32 === 0 ? '#49a5b4' : '#1d6d81';
        for (let x = 66 + (y % 5) * 10; x < 834; x += 80) ctx.fillRect(x, y, 42, 4);
      }

      ctx.fillStyle = '#0a1c25';
      ctx.fillRect(54, 790, 792, 170);
      ctx.strokeStyle = '#986a2a';
      ctx.lineWidth = 5;
      ctx.strokeRect(54, 790, 792, 170);

      const labels = ['SPEED', 'HULL', 'FIREPOWER', 'WIND', 'CREW'];
      const values = ['72', '84', '46', '66', '10'];
      labels.forEach((label, index) => {
        const x = 133 + index * 158;
        ctx.fillStyle = '#e2bf67';
        ctx.font = '20px Georgia';
        ctx.fillText(label, x, 854);
        ctx.fillStyle = '#f0ddb0';
        ctx.font = 'bold 46px Georgia';
        ctx.fillText(values[index], x, 922);
      });

      ctx.fillStyle = '#2a1a0e';
      ctx.font = 'italic 26px Georgia';
      ctx.fillText('Light of build and quick of sail, the sloop is favoured by', 450, 1033);
      ctx.fillText('smugglers, scouts and those who value freedom above all else.', 450, 1072);

      ctx.fillStyle = '#0a2433';
      ctx.fillRect(51, 1143, 798, 72);
      ctx.fillStyle = '#e2bf67';
      ctx.font = '21px Georgia';
      ctx.textAlign = 'left';
      ctx.fillText('⚓  SAPPHIRE COVE · SET 1 · 2026', 75, 1189);
      ctx.textAlign = 'right';
      ctx.fillText('114 / 150  ◆', 826, 1189);
    });
  }

  function makeCardBack(renderer) {
    return makeTexture(renderer, 900, 1260, (ctx, width, height) => {
      roundedPath(ctx, 8, 8, width - 16, height - 16, 38);
      const gradient = ctx.createRadialGradient(450, 525, 80, 450, 525, 620);
      gradient.addColorStop(0, '#18556d');
      gradient.addColorStop(0.52, '#082837');
      gradient.addColorStop(1, '#020c13');
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.strokeStyle = '#a97427';
      ctx.lineWidth = 14;
      ctx.stroke();
      ctx.fillStyle = '#e7c36a';
      ctx.textAlign = 'center';
      ctx.font = 'bold 58px Georgia';
      ctx.fillText('CAPTAIN’S ARCHIVE', 450, 125);
      ctx.font = '172px Georgia';
      ctx.fillText('⚓', 450, 408);
      ctx.font = 'bold 43px Georgia';
      ctx.fillText('THE BERMUDA SLOOP', 450, 530);

      const lines = [
        'Fast, weatherly and shallow-drafted, the vessel could work',
        'island channels and reef waters that frustrated heavier ships.',
        '',
        'Its handling made it valuable to merchants and dispatch riders—',
        'and equally attractive to privateers, smugglers and pirates.',
        '',
        'MYSTERY CLUE',
        'An uncharted passage lies east of the Caicos Bank.'
      ];
      let y = 650;
      lines.forEach((line) => {
        ctx.fillStyle = line === 'MYSTERY CLUE' ? '#55caef' : '#cbb98a';
        ctx.font = line === 'MYSTERY CLUE' ? 'bold 29px Georgia' : '27px Georgia';
        ctx.fillText(line, 450, y);
        y += 48;
      });
    });
  }

  function createLab(canvas, onStatus, initial) {
    const DESIGN_W = 1600;
    const DESIGN_H = 1000;
    const CARD_THICKNESS = 0.014;
    const FULL_SPINS = 4;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = initial.exposure;
    renderer.autoClear = false;

    const backgroundScene = new THREE.Scene();
    const cardScene = new THREE.Scene();
    const uiScene = new THREE.Scene();
    const backgroundCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10);
    const cardCamera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    cardCamera.position.set(0, 0, 8.7);
    const uiCamera = new THREE.OrthographicCamera(-800, 800, 500, -500, -100, 100);
    uiCamera.position.z = 20;
    const uiRoot = new THREE.Group();
    uiScene.add(uiRoot);

    const clock = new THREE.Clock();
    const pointer = new THREE.Vector2();
    const uiRaycaster = new THREE.Raycaster();
    const cardRaycaster = new THREE.Raycaster();
    const interactiveUi = [];
    const cardTargets = [];

    let frame = 0;
    let destroyed = false;
    let revealActive = false;
    let revealStartedAt = 0;
    let archiveActive = false;
    let archiveStartedAt = 0;
    let archived = false;
    let calm = false;
    let dragging = false;
    let dragged = false;
    let pressedUi = null;
    let hoveredUi = null;
    let previousX = 0;
    let previousY = 0;
    let velocityX = 0;
    let velocityY = 0;
    let baseScale = 1;
    let zoom = 1;
    let pediaPulse = 0;

    const backgroundMaterial = new THREE.ShaderMaterial({
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uDim: { value: 0 },
        uMotion: { value: initial.motion }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform float uDim;
        uniform float uMotion;

        float hash(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
            mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
            f.y
          );
        }

        void main() {
          vec2 uv = vUv;
          float aspect = uResolution.x / max(1.0, uResolution.y);
          float horizon = 0.485;
          float time = uTime * uMotion;
          vec3 color;

          if (uv.y > horizon) {
            float skyDepth = (uv.y - horizon) / (1.0 - horizon);
            color = mix(vec3(0.022, 0.105, 0.16), vec3(0.003, 0.011, 0.03), skyDepth);
            float star = step(0.996, hash(floor(uv * vec2(680.0, 390.0))));
            color += star * vec3(0.74, 0.82, 0.80) * smoothstep(0.57, 0.91, uv.y);
            vec2 moonPoint = vec2((uv.x - 0.35) * aspect, uv.y - 0.755);
            float moonDistance = length(moonPoint);
            float moon = smoothstep(0.067, 0.054, moonDistance);
            float halo = smoothstep(0.18, 0.055, moonDistance) * 0.23;
            color = mix(color, vec3(0.88, 0.84, 0.64), moon);
            color += halo * vec3(0.32, 0.35, 0.30);
            float clouds = noise(uv * vec2(7.2, 15.0) + vec2(time * 0.012, 0.0));
            color += smoothstep(0.58, 0.80, clouds) * vec3(0.045, 0.060, 0.078) * smoothstep(0.55, 0.88, uv.y);
            float coastBand = smoothstep(0.545, 0.505, uv.y) * smoothstep(0.45, 0.487, uv.y);
            float coastNoise = noise(vec2(uv.x * 33.0, 8.0));
            color = mix(color, vec3(0.003, 0.011, 0.017), coastBand * (0.68 + coastNoise * 0.32));
            float portLight = step(0.981, hash(floor(vec2(uv.x * 190.0, uv.y * 290.0)))) * coastBand;
            color += portLight * vec3(0.98, 0.56, 0.15);
          } else {
            float depth = (horizon - uv.y) / horizon;
            vec2 wavePoint = vec2(uv.x * mix(5.5, 2.0, depth), depth * 15.0);
            float wave = sin(wavePoint.y * 8.0 + wavePoint.x * 13.0 - time * 1.2) * 0.5;
            wave += sin(wavePoint.y * 17.0 - wavePoint.x * 7.0 + time * 0.73) * 0.5;
            color = mix(vec3(0.034, 0.29, 0.345), vec3(0.005, 0.067, 0.108), depth);
            color += smoothstep(0.72, 0.96, wave) * vec3(0.04, 0.15, 0.17) * (1.0 - depth);
            float moonPath = exp(-pow((uv.x - 0.35) * (8.0 + depth * 28.0), 2.0));
            float glitter = step(0.79, noise(vec2(uv.x * 120.0, depth * 92.0 - time * 2.0)));
            color += moonPath * glitter * vec3(0.44, 0.42, 0.27) * (1.0 - depth * 0.38);
            float wakeLine = exp(-pow((uv.x - 0.41 - depth * 0.11) * 35.0, 2.0));
            color += wakeLine * 0.055 * vec3(0.35, 0.84, 0.91);
          }

          float vignette = smoothstep(0.90, 0.23, distance(uv, vec2(0.5)));
          color *= 0.65 + vignette * 0.47;
          color = mix(color, color * 0.42, uDim);
          gl_FragColor = vec4(color, 1.0);
        }
      `
    });
    backgroundScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), backgroundMaterial));

    const cardAnchor = new THREE.Group();
    const cardTilt = new THREE.Group();
    const revealSpin = new THREE.Group();
    cardAnchor.add(cardTilt);
    cardTilt.add(revealSpin);
    cardScene.add(cardAnchor);

    function paperGeometry(width, height, radius, thickness) {
      const shape = new THREE.Shape();
      const x = -width / 2;
      const y = -height / 2;
      shape.moveTo(x + radius, y);
      shape.lineTo(x + width - radius, y);
      shape.quadraticCurveTo(x + width, y, x + width, y + radius);
      shape.lineTo(x + width, y + height - radius);
      shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      shape.lineTo(x + radius, y + height);
      shape.quadraticCurveTo(x, y + height, x, y + height - radius);
      shape.lineTo(x, y + radius);
      shape.quadraticCurveTo(x, y, x + radius, y);
      const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: thickness,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 1,
        bevelSize: 0.007,
        bevelThickness: 0.004,
        curveSegments: 10
      });
      geometry.translate(0, 0, -thickness / 2);
      return geometry;
    }

    const edge = new THREE.Mesh(
      paperGeometry(3.64, 5.1, 0.18, CARD_THICKNESS),
      new THREE.MeshPhysicalMaterial({
        color: 0xc7b47f,
        metalness: 0.03,
        roughness: 0.48,
        clearcoat: 0.58,
        clearcoatRoughness: 0.24,
        side: THREE.DoubleSide
      })
    );
    revealSpin.add(edge);
    cardTargets.push(edge);

    const faceOffset = CARD_THICKNESS / 2 + 0.006;
    const front = new THREE.Mesh(
      new THREE.PlaneGeometry(3.53, 4.99),
      new THREE.MeshPhysicalMaterial({
        map: makeCardFront(renderer),
        roughness: 0.37,
        metalness: 0.01,
        clearcoat: 0.9,
        clearcoatRoughness: 0.14,
        iridescence: 0.32,
        iridescenceIOR: 1.35,
        side: THREE.FrontSide
      })
    );
    front.position.z = faceOffset;
    revealSpin.add(front);
    cardTargets.push(front);

    const back = new THREE.Mesh(
      new THREE.PlaneGeometry(3.53, 4.99),
      new THREE.MeshPhysicalMaterial({
        map: makeCardBack(renderer),
        roughness: 0.39,
        metalness: 0.01,
        clearcoat: 0.84,
        clearcoatRoughness: 0.16,
        iridescence: 0.22,
        side: THREE.FrontSide
      })
    );
    back.rotation.y = Math.PI;
    back.position.z = -faceOffset;
    revealSpin.add(back);
    cardTargets.push(back);

    const gem = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.18),
      new THREE.MeshPhysicalMaterial({
        color: 0x3aa7ff,
        roughness: 0.04,
        transmission: 0.3,
        clearcoat: 1,
        iridescence: 1
      })
    );
    gem.position.set(1.37, 2.03, faceOffset + 0.08);
    gem.rotation.z = Math.PI / 4;
    revealSpin.add(gem);

    const sparklePositions = [];
    for (let i = 0; i < 110; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 2.05 + Math.random() * 1.75;
      sparklePositions.push(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.82, (Math.random() - 0.5) * 0.35);
    }
    const sparkleGeometry = new THREE.BufferGeometry();
    sparkleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(sparklePositions, 3));
    const sparkleMaterial = new THREE.PointsMaterial({
      color: 0x8ee2ff,
      size: 0.032,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const sparkles = new THREE.Points(sparkleGeometry, sparkleMaterial);
    revealSpin.add(sparkles);

    cardScene.add(new THREE.HemisphereLight(0xa7d4e7, 0x140804, 1.5));
    const moonLight = new THREE.DirectionalLight(0xcbe2ff, 2.05);
    moonLight.position.set(-4.5, 5, 7);
    cardScene.add(moonLight);
    const foilLight = new THREE.PointLight(0x4ddcff, 22, 13, 1.7);
    foilLight.position.set(-2.6, 2.2, 5);
    cardScene.add(foilLight);
    const warmLight = new THREE.PointLight(0xffa94f, 12, 10, 2);
    warmLight.position.set(3.1, -2.1, 4.3);
    cardScene.add(warmLight);

    function panelTexture(width, height, title = '') {
      return makeTexture(renderer, width, height, (ctx) => {
        roundedPath(ctx, 3, 3, width - 6, height - 6, 8);
        ctx.fillStyle = 'rgba(3,14,22,.95)';
        ctx.fill();
        ctx.strokeStyle = '#976728';
        ctx.lineWidth = 3;
        ctx.stroke();
        roundedPath(ctx, 10, 10, width - 20, height - 20, 4);
        ctx.strokeStyle = 'rgba(229,194,104,.22)';
        ctx.lineWidth = 1;
        ctx.stroke();
        if (title) {
          ctx.fillStyle = '#ddb960';
          ctx.font = 'bold 25px Georgia';
          ctx.textAlign = 'left';
          ctx.fillText(title, 24, 43);
        }
      });
    }

    function uiPlane(texture, width, height, x, y, z = 0) {
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(width, height),
        new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          depthTest: false,
          depthWrite: false,
          toneMapped: false
        })
      );
      mesh.position.set(x, y, z);
      uiRoot.add(mesh);
      return mesh;
    }

    function button(label, width, height, x, y, action, primary = false) {
      const group = new THREE.Group();
      group.position.set(x, y, 5);
      const backing = new THREE.Mesh(
        new RoundedBoxGeometry(width, height, 10, 4, 5),
        new THREE.MeshPhysicalMaterial({
          color: primary ? 0x0b4157 : 0x092431,
          metalness: primary ? 0.5 : 0.3,
          roughness: 0.28,
          clearcoat: 1,
          clearcoatRoughness: 0.16,
          emissive: primary ? 0x082c3a : 0x02090d,
          emissiveIntensity: 0.55
        })
      );
      const face = new THREE.Mesh(
        new THREE.PlaneGeometry(width - 7, height - 7),
        new THREE.MeshBasicMaterial({
          map: makeTexture(renderer, width, height, (ctx) => {
            roundedPath(ctx, 3, 3, width - 6, height - 6, 8);
            ctx.fillStyle = primary ? 'rgba(7,54,72,.97)' : 'rgba(4,22,31,.97)';
            ctx.fill();
            ctx.strokeStyle = primary ? '#d2a64c' : '#916629';
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.fillStyle = '#e7c66f';
            ctx.font = `${primary ? 'bold 25px' : 'bold 18px'} Georgia`;
            ctx.textAlign = 'center';
            ctx.fillText(label, width / 2, height / 2 + 7);
          }),
          transparent: true,
          depthTest: false,
          toneMapped: false
        })
      );
      face.position.z = 8;
      group.add(backing, face);
      uiRoot.add(group);
      backing.userData = { group, action, hover: 0, targetHover: 0 };
      interactiveUi.push(backing);
      return backing;
    }

    uiPlane(panelTexture(220, 630), 220, 630, -680, 22, 1);

    const nav = [['✦', 'PORT'], ['☼', 'FLEET'], ['▱', 'CHARTS'], ['▣', 'TREASURES'], ['◇', 'COLLECTION']];
    nav.forEach(([icon, title], index) => {
      const active = title === 'COLLECTION';
      const mesh = uiPlane(makeTexture(renderer, 188, 88, (ctx) => {
        if (active) {
          roundedPath(ctx, 2, 2, 184, 84, 4);
          ctx.fillStyle = 'rgba(35,103,128,.66)';
          ctx.fill();
          ctx.strokeStyle = '#9b6f2e';
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.fillStyle = '#42c7f4';
          ctx.fillRect(3, 12, 4, 64);
        }
        ctx.fillStyle = active ? '#f2dca7' : '#a79269';
        ctx.font = '22px Georgia';
        ctx.textAlign = 'left';
        ctx.fillText(icon, 21, 55);
        ctx.font = active ? 'bold 18px Georgia' : '17px Georgia';
        ctx.fillText(title, 63, 54);
      }), 188, 88, -680, 229 - index * 99, 3);
      mesh.userData.action = () => onStatus(active ? 'Collection already open.' : `${title} is outside this prototype.`);
      interactiveUi.push(mesh);
    });

    uiPlane(panelTexture(340, 720, '⚓  PIRATE-O-PEDIA'), 340, 720, 612, 26, 1);

    function pediaTexture(isNew = false) {
      return makeTexture(renderer, 300, 116, (ctx) => {
        roundedPath(ctx, 2, 2, 296, 112, 5);
        ctx.fillStyle = isNew ? 'rgba(19,53,68,.96)' : 'rgba(3,14,21,.93)';
        ctx.fill();
        ctx.strokeStyle = isNew ? '#cf983c' : '#44351d';
        ctx.lineWidth = 2;
        ctx.stroke();
        roundedPath(ctx, 11, 13, 80, 88, 3);
        ctx.fillStyle = '#0b3b51';
        ctx.fill();
        ctx.strokeStyle = '#9b6b29';
        ctx.lineWidth = 3;
        ctx.stroke();
        drawShip(ctx, 52, 72, 0.35);
        ctx.fillStyle = '#d7ae59';
        ctx.font = 'bold 17px Georgia';
        ctx.textAlign = 'left';
        ctx.fillText('Bermuda Sloop', 105, 38);
        ctx.fillStyle = '#91866c';
        ctx.font = '14px Georgia';
        ctx.fillText('Moonlit Voyager', 105, 63);
        ctx.fillStyle = '#46caff';
        ctx.font = '13px Georgia';
        ctx.fillText('◆ SAPPHIRE', 105, 89);
        if (isNew) {
          ctx.fillStyle = '#f0cd79';
          ctx.font = 'bold 12px Georgia';
          ctx.fillText('NEW!', 247, 59);
        }
      });
    }

    const pediaEntry = uiPlane(pediaTexture(false), 300, 116, 612, 228, 3);
    pediaEntry.userData.action = () => onStatus('Bermuda Sloop · Moonlit Voyager');
    interactiveUi.push(pediaEntry);

    uiPlane(makeTexture(renderer, 380, 116, (ctx, width) => {
      ctx.fillStyle = '#e1bd67';
      ctx.font = 'bold 53px Georgia';
      ctx.textAlign = 'center';
      ctx.fillText('PIXELBOATS', width / 2, 57);
      ctx.fillStyle = '#49b8da';
      ctx.font = '15px Georgia';
      ctx.fillText('◆  SAPPHIRE COVE  ◆', width / 2, 88);
    }), 380, 116, -602, 438, 2);

    const resourceData = [['◉', '128,450', false], ['◆', '2,860', true], ['▣', '14', false], ['☰', '', false]];
    resourceData.forEach(([icon, value, cool], index) => {
      uiPlane(makeTexture(renderer, 138, 50, (ctx, width, height) => {
        roundedPath(ctx, 3, 3, width - 6, height - 6, 6);
        ctx.fillStyle = 'rgba(2,10,16,.95)';
        ctx.fill();
        ctx.strokeStyle = '#8f6428';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = cool ? '#40c9fb' : '#e2ba60';
        ctx.font = '24px Georgia';
        ctx.textAlign = 'left';
        ctx.fillText(icon, 16, 33);
        ctx.fillStyle = '#ebca71';
        ctx.font = '19px Georgia';
        ctx.fillText(value, 49, 32);
      }), 138, 50, 500 + index * 146, 458, 2);
    });

    uiPlane(makeTexture(renderer, 390, 126, (ctx, width, height) => {
      roundedPath(ctx, 3, 3, width - 6, height - 6, 7);
      ctx.fillStyle = 'rgba(3,14,22,.96)';
      ctx.fill();
      ctx.strokeStyle = '#976728';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.fillStyle = '#d9b865';
      ctx.font = 'bold 22px Georgia';
      ctx.textAlign = 'left';
      ctx.fillText('CAPTAIN REED', 25, 42);
      ctx.fillStyle = '#aa9870';
      ctx.font = '15px Georgia';
      ctx.fillText('LEGEND OF THE TIDES', 25, 68);
      ctx.fillStyle = '#e2bd61';
      ctx.font = 'bold 18px Georgia';
      ctx.fillText('LEVEL 42', 25, 101);
      ctx.fillStyle = '#8c6a2e';
      ctx.fillRect(145, 91, 200, 8);
      ctx.fillStyle = '#d1a849';
      ctx.fillRect(145, 91, 126, 8);
    }), 390, 126, -580, -428, 2);

    button('↻  SPIN REVEAL', 220, 60, -205, -370, replay);
    button('↶  TURN OVER', 195, 60, 18, -370, flip);
    button('≈  CALM WATERS', 215, 60, 230, -370, toggleCalm);
    button('▣  ARCHIVE', 292, 86, 612, -443, archive, true);

    uiScene.add(new THREE.HemisphereLight(0x9bc9d7, 0x120703, 1.35));
    const uiLight = new THREE.PointLight(0x53d5ff, 1.7, 1200, 1.6);
    uiLight.position.set(250, 160, 340);
    uiScene.add(uiLight);
    const uiWarmLight = new THREE.PointLight(0xf0b75b, 1.3, 1300, 1.8);
    uiWarmLight.position.set(-500, -250, 380);
    uiScene.add(uiWarmLight);

    const responsiveLanding = new THREE.Vector3(-0.14, 0.08, 0);
    const canonicalEuler = new THREE.Euler(-0.045, 0.12, -0.022, 'XYZ');
    const landingPosition = new THREE.Vector3();
    const landingQuaternion = new THREE.Quaternion();
    let landingScale = 1;
    const targetPosition = new THREE.Vector3();
    const targetEuler = canonicalEuler.clone();
    let targetScale = 1;

    const revealStartPosition = new THREE.Vector3(-1.82, -1.52, -3.9);
    const revealLift = new THREE.Vector3(-1.42, -0.62, -2.48);
    const revealControl = new THREE.Vector3(-0.92, 1.08, -0.7);
    const revealStartQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.68, -2.92, 0.52, 'XYZ'));

    const archiveFromPosition = new THREE.Vector3();
    const archiveFromQuaternion = new THREE.Quaternion();
    let archiveFromScale = 1;

    function clamp01(value) { return Math.max(0, Math.min(1, value)); }
    function easeOutCubic(value) { return 1 - Math.pow(1 - value, 3); }
    function easeInOutCubic(value) { return value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2; }
    function bezier(a, b, c, value) {
      const first = a.clone().lerp(b, value);
      const second = b.clone().lerp(c, value);
      return first.lerp(second, value);
    }

    function snapshotLanding() {
      landingPosition.copy(responsiveLanding);
      landingQuaternion.setFromEuler(canonicalEuler);
      landingScale = baseScale;
    }

    function applyLanding() {
      cardAnchor.position.copy(landingPosition);
      cardAnchor.scale.setScalar(landingScale);
      cardTilt.quaternion.copy(landingQuaternion);
      revealSpin.rotation.set(0, 0, 0);
      targetPosition.copy(landingPosition);
      targetEuler.copy(canonicalEuler);
      targetScale = landingScale;
      zoom = 1;
      velocityX = 0;
      velocityY = 0;
    }

    function replay() {
      archived = false;
      archiveActive = false;
      snapshotLanding();
      revealActive = true;
      revealStartedAt = clock.getElapsedTime();
      cardAnchor.visible = true;
      cardAnchor.position.copy(revealStartPosition);
      cardAnchor.scale.setScalar(0.045);
      cardTilt.quaternion.copy(revealStartQuaternion);
      revealSpin.rotation.set(0, 0, 0);
      sparkleMaterial.opacity = 0;
      backgroundMaterial.uniforms.uDim.value = 0;
      onStatus('Blackfin recovers the drifting lore card.');
    }

    function updateReveal(elapsed) {
      const progress = clamp01((elapsed - revealStartedAt) / 1.72);
      let position;
      let scale;
      if (progress < 0.16) {
        const phase = easeOutCubic(progress / 0.16);
        position = revealStartPosition.clone().lerp(revealLift, phase);
        scale = THREE.MathUtils.lerp(0.045, 0.18, phase);
      } else {
        const phase = easeInOutCubic((progress - 0.16) / 0.84);
        position = bezier(revealLift, revealControl, landingPosition, phase);
        scale = THREE.MathUtils.lerp(0.18, landingScale, phase);
      }
      cardAnchor.position.copy(position);
      cardAnchor.scale.setScalar(scale);
      const orientation = easeOutCubic(progress);
      cardTilt.quaternion.slerpQuaternions(revealStartQuaternion, landingQuaternion, orientation);
      revealSpin.rotation.y = FULL_SPINS * Math.PI * 2 * orientation;
      backgroundMaterial.uniforms.uDim.value = THREE.MathUtils.lerp(0, 0.43, progress);
      const sparkleProgress = clamp01((progress - 0.48) / 0.52);
      sparkleMaterial.opacity = Math.sin(sparkleProgress * Math.PI) * 0.72;
      if (progress >= 1) {
        revealActive = false;
        applyLanding();
        sparkleMaterial.opacity = 0.34;
        onStatus('Card recovered. Drag to inspect.');
      }
    }

    function flip() {
      if (archived || revealActive || archiveActive) return;
      targetEuler.y += Math.PI;
      onStatus('Card turned over.');
    }

    function archive() {
      if (archived || revealActive || archiveActive) return;
      archiveActive = true;
      archiveStartedAt = clock.getElapsedTime();
      archiveFromPosition.copy(cardAnchor.position);
      archiveFromQuaternion.copy(cardTilt.quaternion);
      archiveFromScale = cardAnchor.scale.x;
      velocityX = 0;
      velocityY = 0;
      onStatus('Archiving in Pirate-o-pedia.');
    }

    function updateArchive(elapsed) {
      const progress = clamp01((elapsed - archiveStartedAt) / 0.9);
      const eased = easeInOutCubic(progress);
      cardAnchor.position.copy(bezier(archiveFromPosition, new THREE.Vector3(2.05, 1.25, -0.7), new THREE.Vector3(4.55, 0.9, -4.2), eased));
      cardAnchor.scale.setScalar(THREE.MathUtils.lerp(archiveFromScale, 0.055, eased));
      cardTilt.quaternion.copy(archiveFromQuaternion);
      revealSpin.rotation.y = Math.PI * 2 * eased;
      backgroundMaterial.uniforms.uDim.value = THREE.MathUtils.lerp(0.43, 0, eased);
      if (progress >= 1) {
        archiveActive = false;
        archived = true;
        cardAnchor.visible = false;
        const material = pediaEntry.material;
        material.map?.dispose();
        material.map = pediaTexture(true);
        material.needsUpdate = true;
        pediaPulse = 1;
        onStatus('Archived in Pirate-o-pedia.');
      }
    }

    function toggleCalm() {
      calm = !calm;
      backgroundMaterial.uniforms.uMotion.value = calm ? 0.2 : 1;
      onStatus(calm ? 'Calm Waters enabled.' : 'Full Seas enabled.');
    }

    function updatePointer(event) {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
    }

    function hitUi() {
      uiRaycaster.setFromCamera(pointer, uiCamera);
      return uiRaycaster.intersectObjects(interactiveUi, false)[0]?.object ?? null;
    }

    function hitCard() {
      cardRaycaster.setFromCamera(pointer, cardCamera);
      return cardRaycaster.intersectObjects(cardTargets, false).length > 0;
    }

    function setHovered(next) {
      if (hoveredUi === next) return;
      if (hoveredUi?.userData.group) hoveredUi.userData.targetHover = 0;
      else if (hoveredUi?.material?.color) {
        hoveredUi.material.color.setHex(0xffffff);
        hoveredUi.scale.setScalar(1);
      }
      hoveredUi = next;
      if (hoveredUi?.userData.group) hoveredUi.userData.targetHover = 1;
      else if (hoveredUi?.material?.color) {
        hoveredUi.material.color.setHex(0xd9f4ff);
        hoveredUi.scale.setScalar(1.02);
      }
    }

    function onPointerMove(event) {
      updatePointer(event);
      if (dragging) {
        const dx = event.clientX - previousX;
        const dy = event.clientY - previousY;
        if (Math.abs(dx) + Math.abs(dy) > 2) dragged = true;
        targetEuler.y += dx * 0.008;
        targetEuler.x = THREE.MathUtils.clamp(targetEuler.x + dy * 0.0068, -1.05, 1.05);
        velocityX = dx * 0.007;
        velocityY = dy * 0.0058;
        previousX = event.clientX;
        previousY = event.clientY;
        canvas.style.cursor = 'grabbing';
        return;
      }
      const uiHit = hitUi();
      setHovered(uiHit);
      const overCard = !uiHit && !archived && !revealActive && !archiveActive && hitCard();
      canvas.style.cursor = uiHit || overCard ? 'pointer' : 'default';
    }

    function onPointerDown(event) {
      updatePointer(event);
      pressedUi = hitUi();
      if (pressedUi || revealActive || archiveActive) return;
      if (!archived && hitCard()) {
        dragging = true;
        dragged = false;
        previousX = event.clientX;
        previousY = event.clientY;
        velocityX = 0;
        velocityY = 0;
        canvas.setPointerCapture(event.pointerId);
      }
    }

    function onPointerUp(event) {
      updatePointer(event);
      const releasedUi = hitUi();
      if (pressedUi && releasedUi === pressedUi) pressedUi.userData.action?.();
      else if (dragging && !dragged) flip();
      pressedUi = null;
      dragging = false;
      if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    }

    function onWheel(event) {
      updatePointer(event);
      if (archived || revealActive || archiveActive || !hitCard()) return;
      event.preventDefault();
      zoom = THREE.MathUtils.clamp(zoom - event.deltaY * 0.00075, 0.72, 1.28);
      targetScale = landingScale * zoom;
    }

    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointercancel', onPointerUp);
    canvas.addEventListener('wheel', onWheel, { passive: false });

    function resize() {
      const bounds = canvas.getBoundingClientRect();
      const width = Math.max(1, bounds.width);
      const height = Math.max(1, bounds.height);
      renderer.setSize(width, height, false);
      backgroundMaterial.uniforms.uResolution.value.set(width * renderer.getPixelRatio(), height * renderer.getPixelRatio());
      cardCamera.aspect = width / height;
      cardCamera.updateProjectionMatrix();
      uiCamera.left = -width / 2;
      uiCamera.right = width / 2;
      uiCamera.top = height / 2;
      uiCamera.bottom = -height / 2;
      uiCamera.updateProjectionMatrix();
      const uiScale = Math.min(width / DESIGN_W, height / DESIGN_H);
      uiRoot.scale.set(uiScale, uiScale, 1);
      baseScale = width < 560 ? 0.69 : width < 850 ? 0.8 : width < 1120 ? 0.91 : 1;
      responsiveLanding.x = width < 760 ? 0 : -0.14;
      if (!revealActive && !archiveActive && !archived) {
        landingPosition.copy(responsiveLanding);
        landingScale = baseScale;
        cardAnchor.position.copy(landingPosition);
        cardAnchor.scale.setScalar(landingScale * zoom);
        targetPosition.copy(landingPosition);
        targetScale = landingScale * zoom;
      }
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    function animateButtons() {
      interactiveUi.forEach((object) => {
        if (!object.userData.group) return;
        object.userData.hover = THREE.MathUtils.lerp(object.userData.hover ?? 0, object.userData.targetHover ?? 0, 0.16);
        const hover = object.userData.hover ?? 0;
        const scale = 1 + hover * 0.025;
        object.userData.group.scale.set(scale, scale, scale);
        object.userData.group.position.z = 5 + hover * 4;
        object.material.emissiveIntensity = 0.55 + hover * 0.8;
      });
    }

    function render() {
      if (destroyed) return;
      const elapsed = clock.getElapsedTime();
      backgroundMaterial.uniforms.uTime.value = elapsed;
      foilLight.position.x = Math.sin(elapsed * 0.72) * 3.45;
      foilLight.position.y = 1.8 + Math.cos(elapsed * 0.61) * 1.75;
      warmLight.position.x = 2.8 + Math.sin(elapsed * 0.31) * 1.15;
      uiLight.position.x = 250 + Math.sin(elapsed * 0.4) * 180;
      gem.rotation.y += calm ? 0.0015 : 0.008;

      if (revealActive) updateReveal(elapsed);
      else if (archiveActive) updateArchive(elapsed);
      else if (!archived) {
        if (!dragging) {
          targetEuler.y += velocityX;
          targetEuler.x += velocityY;
          velocityX *= calm ? 0.8 : 0.93;
          velocityY *= calm ? 0.8 : 0.93;
        }
        const easing = calm ? 0.2 : 0.095;
        cardAnchor.position.lerp(targetPosition, easing);
        cardTilt.rotation.x = THREE.MathUtils.lerp(cardTilt.rotation.x, targetEuler.x, easing);
        cardTilt.rotation.y = THREE.MathUtils.lerp(cardTilt.rotation.y, targetEuler.y, easing);
        cardTilt.rotation.z = THREE.MathUtils.lerp(cardTilt.rotation.z, targetEuler.z, easing);
        const scale = THREE.MathUtils.lerp(cardAnchor.scale.x, targetScale, easing);
        cardAnchor.scale.setScalar(scale);
        backgroundMaterial.uniforms.uDim.value = THREE.MathUtils.lerp(backgroundMaterial.uniforms.uDim.value, 0.43, 0.08);
        sparkleMaterial.opacity = calm ? 0.15 : 0.3 + Math.sin(elapsed * 1.8) * 0.06;
      }

      if (pediaPulse > 0) {
        pediaPulse *= 0.93;
        pediaEntry.scale.setScalar(1 + Math.sin(elapsed * 12) * pediaPulse * 0.025);
      }

      animateButtons();
      renderer.clear();
      renderer.render(backgroundScene, backgroundCamera);
      renderer.clearDepth();
      renderer.render(cardScene, cardCamera);
      renderer.clearDepth();
      renderer.render(uiScene, uiCamera);
      frame = requestAnimationFrame(render);
    }

    replay();
    render();

    return {
      replay,
      flip,
      archive,
      setMotion(value) { backgroundMaterial.uniforms.uMotion.value = THREE.MathUtils.clamp(value, 0, 2); },
      setExposure(value) { renderer.toneMappingExposure = THREE.MathUtils.clamp(value, 0.5, 2); },
      destroy() {
        if (destroyed) return;
        destroyed = true;
        cancelAnimationFrame(frame);
        resizeObserver.disconnect();
        canvas.removeEventListener('pointermove', onPointerMove);
        canvas.removeEventListener('pointerdown', onPointerDown);
        canvas.removeEventListener('pointerup', onPointerUp);
        canvas.removeEventListener('pointercancel', onPointerUp);
        canvas.removeEventListener('wheel', onWheel);
        renderer.dispose();
      }
    };
  }
</script>

<svelte:head>
  <title>PixelBoats · Card Recovery Lab</title>
  <meta name="description" content="GPU-rendered PixelBoats collectible recovery lab" />
</svelte:head>

<main class="lab-shell">
  <canvas bind:this={canvas} aria-label="PixelBoats GPU collection screen. Drag the lore card, click it to turn it over, or use the rendered controls."></canvas>
  <p class="sr-only" aria-live="polite">{status}</p>

  {#if showDebug}
    <aside class="lab-controls" aria-label="PixelBoats lab controls">
      <header>
        <div>
          <strong>Card Recovery Lab</strong>
          <span>v0.4.0</span>
        </div>
        <button type="button" aria-label="Close lab controls" onclick={() => (showDebug = false)}>×</button>
      </header>

      <label>
        <span>World motion</span>
        <output>{worldMotion.toFixed(2)}</output>
        <input
          type="range"
          min="0"
          max="2"
          step="0.05"
          value={worldMotion}
          oninput={(event) => {
            worldMotion = Number(event.currentTarget.value);
            controls?.setMotion(worldMotion);
          }}
        />
      </label>

      <label>
        <span>GPU exposure</span>
        <output>{exposure.toFixed(2)}</output>
        <input
          type="range"
          min="0.5"
          max="1.8"
          step="0.02"
          value={exposure}
          oninput={(event) => {
            exposure = Number(event.currentTarget.value);
            controls?.setExposure(exposure);
          }}
        />
      </label>

      <div class="actions">
        <button type="button" onclick={() => controls?.replay()}>Replay</button>
        <button type="button" onclick={() => controls?.flip()}>Flip</button>
        <button type="button" onclick={() => controls?.archive()}>Archive</button>
      </div>

      <p>{status}</p>
      <small>Toggle this panel with the backtick key.</small>
    </aside>
  {/if}

  <button class="debug-toggle" type="button" aria-label="Toggle lab controls" onclick={() => (showDebug = !showDebug)}>LAB</button>
</main>

<style>
  :global(*) { box-sizing: border-box; }
  :global(html), :global(body) { width: 100%; min-height: 100%; margin: 0; overflow: hidden; background: #02070c; }
  :global(body) { font-family: Georgia, 'Times New Roman', serif; }
  .lab-shell { position: fixed; inset: 0; overflow: hidden; background: #02070c; }
  canvas { display: block; width: 100%; height: 100%; touch-action: none; outline: none; }
  .lab-controls {
    position: absolute; top: 18px; right: 18px; z-index: 10;
    width: min(320px, calc(100vw - 36px)); padding: 14px;
    border: 1px solid rgba(216, 172, 78, 0.72); border-radius: 8px;
    color: #ead59a; background: linear-gradient(180deg, rgba(8, 28, 39, 0.96), rgba(2, 12, 18, 0.96));
    box-shadow: 0 20px 50px rgba(0,0,0,.55), inset 0 0 0 1px rgba(255,236,177,.08);
    backdrop-filter: blur(12px);
  }
  header { display: flex; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
  header div { display: grid; gap: 3px; }
  header strong { color: #f0d68c; font-size: 15px; letter-spacing: .04em; }
  header span, small { color: #8f9da0; font-size: 11px; }
  header button, .actions button, .debug-toggle { border: 1px solid #85612d; color: #e8ca78; background: #0a2632; cursor: pointer; }
  header button { width: 30px; height: 30px; border-radius: 4px; font-size: 18px; }
  label { display: grid; grid-template-columns: 1fr auto; gap: 6px 12px; margin: 14px 0; font-size: 12px; }
  label output { color: #68d5f4; font-variant-numeric: tabular-nums; }
  label input { grid-column: 1 / -1; width: 100%; }
  .actions { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 16px; }
  .actions button { min-height: 34px; border-radius: 4px; font: inherit; }
  .lab-controls p { min-height: 34px; margin: 14px 0 8px; color: #a7c7cd; font-size: 12px; line-height: 1.45; }
  .debug-toggle { position: absolute; right: 12px; bottom: 12px; z-index: 9; min-width: 52px; min-height: 28px; border-radius: 4px; opacity: .62; font: 700 10px/1 sans-serif; letter-spacing: .14em; }
  .debug-toggle:hover, .debug-toggle:focus-visible { opacity: 1; }
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
</style>
