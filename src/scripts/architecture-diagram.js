class ArchitectureDiagram {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.nodes = [];
    this.animationId = null;
    this.init();
  }

  init() {
    const container = document.querySelector('.hero-architecture');
    if (!container) return;

    this.canvas = document.createElement('canvas');
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.borderRadius = '16px';
    container.appendChild(this.canvas);

    this.ctx = this.canvas.getContext('2d');
    this.nodes = [];
    this.animationId = null;

    this.resize();
    this.createArchitecture();
    this.animate();

    new ResizeObserver(() => this.resize()).observe(container);
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width * window.devicePixelRatio;
    this.canvas.height = rect.height * window.devicePixelRatio;
    this.canvas.style.width = rect.width + 'px';
    this.canvas.style.height = rect.height + 'px';
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  createArchitecture() {
    const width = this.canvas.width / window.devicePixelRatio;
    const height = this.canvas.height / window.devicePixelRatio;
    const centerX = width / 2;
    const centerY = height / 2;

    this.nodes.push({
      x: centerX, y: centerY,
      label: 'Agent\nCore',
      type: 'core',
      radius: 50,
      angle: 0,
      orbitRadius: 0,
      speed: 0,
      pulse: 0,
      connections: []
    });

    const tools = [
      { label: 'Vector DB\n(ChromaDB)', type: 'tool', color: '#8B9BFF' },
      { label: 'Local LLM\n(Ollama)', type: 'tool', color: '#A78BFA' },
      { label: 'Data Lake\n(Delta Lake)', type: 'tool', color: '#F472B6' },
      { label: 'Orchestration\n(Airflow)', type: 'tool', color: '#34D399' },
      { label: 'Query Engine\n(DuckDB)', type: 'tool', color: '#FBBF24' },
      { label: 'API Layer\n(FastAPI)', type: 'tool', color: '#60A5FA' },
    ];

    tools.forEach((tool, i) => {
      const angle = (i / tools.length) * Math.PI * 2 - Math.PI / 2;
      const orbitRadius = Math.min(width, height) * 0.35;
      this.nodes.push({
        x: centerX + Math.cos(angle) * orbitRadius,
        y: centerY + Math.sin(angle) * orbitRadius,
        label: tool.label,
        type: 'tool',
        radius: 35,
        angle,
        orbitRadius,
        speed: 0.0005 + Math.random() * 0.0003,
        pulse: Math.random() * Math.PI * 2,
        color: tool.color,
        connections: [0]
      });
    });

    for (let i = 0; i < 20; i++) {
      this.nodes.push({
        x: centerX,
        y: centerY,
        type: 'particle',
        radius: 3,
        angle: Math.random() * Math.PI * 2,
        orbitRadius: 0,
        speed: 0.02 + Math.random() * 0.02,
        pulse: 0,
        targetIndex: 1 + Math.floor(Math.random() * tools.length),
        progress: Math.random(),
        color: tools[Math.floor(Math.random() * tools.length)].color
      });
    }
  }

  getPrimaryColor() {
    return getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#8B9BFF';
  }

  getAccentColor() {
    return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#A78BFA';
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const width = this.canvas.width / window.devicePixelRatio;
    const height = this.canvas.height / window.devicePixelRatio;
    const centerX = width / 2;
    const centerY = height / 2;

    this.nodes.forEach((node) => {
      if (node.type === 'core') {
        node.pulse += 0.02;
      } else if (node.type === 'tool') {
        node.angle += node.speed;
        node.x = centerX + Math.cos(node.angle) * node.orbitRadius;
        node.y = centerY + Math.sin(node.angle) * node.orbitRadius;
        node.pulse += 0.03;
      } else if (node.type === 'particle') {
        node.progress += node.speed;
        if (node.progress >= 1) {
          node.progress = 0;
          node.targetIndex = 1 + Math.floor(Math.random() * (this.nodes.length - 20 - 1));
        }

        const target = this.nodes[node.targetIndex];
        if (target) {
          node.x = centerX + (target.x - centerX) * node.progress;
          node.y = centerY + (target.y - centerY) * node.progress;
        }
      }
    });

    const core = this.nodes[0];
    this.ctx.strokeStyle = this.getPrimaryColor();
    this.ctx.lineWidth = 1;
    this.ctx.setLineDash([5, 5]);

    this.nodes.slice(1, 7).forEach((tool) => {
      const alpha = 0.15 + Math.sin(tool.pulse) * 0.05;
      this.ctx.globalAlpha = alpha;
      this.ctx.beginPath();
      this.ctx.moveTo(core.x, core.y);
      this.ctx.lineTo(tool.x, tool.y);
      this.ctx.stroke();
    });

    this.ctx.setLineDash([]);

    this.nodes.slice(20).forEach((particle) => {
      if (particle.progress < 0.9) {
        this.ctx.globalAlpha = 0.6 * (1 - particle.progress);
        this.ctx.strokeStyle = particle.color;
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(centerX, centerY);
        this.ctx.lineTo(particle.x, particle.y);
        this.ctx.stroke();
      }
    });

    this.nodes.slice(1, 7).forEach((tool) => {
      const pulseRadius = tool.radius + Math.sin(tool.pulse) * 3;

      const gradient = this.ctx.createRadialGradient(tool.x, tool.y, 0, tool.x, tool.y, pulseRadius * 1.5);
      gradient.addColorStop(0, tool.color + '40');
      gradient.addColorStop(1, tool.color + '00');
      this.ctx.globalAlpha = 0.5;
      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(tool.x, tool.y, pulseRadius * 1.5, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.globalAlpha = 0.9;
      const nodeGradient = this.ctx.createLinearGradient(
        tool.x - pulseRadius, tool.y - pulseRadius,
        tool.x + pulseRadius, tool.y + pulseRadius
      );
      nodeGradient.addColorStop(0, tool.color);
      nodeGradient.addColorStop(1, tool.color + 'CC');
      this.ctx.fillStyle = nodeGradient;
      this.ctx.beginPath();
      this.ctx.arc(tool.x, tool.y, pulseRadius, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.globalAlpha = 1;
      this.ctx.fillStyle = '#fff';
      this.ctx.font = '500 11px Inter, sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      tool.label.split('\n').forEach((line, li) => {
        this.ctx.fillText(line, tool.x, tool.y + (li - 0.5) * 14);
      });
    });

    const corePulse = core.radius + Math.sin(core.pulse) * 5;

    const coreGlow = this.ctx.createRadialGradient(core.x, core.y, 0, core.x, core.y, corePulse * 2);
    coreGlow.addColorStop(0, this.getPrimaryColor() + '60');
    coreGlow.addColorStop(0.5, this.getAccentColor() + '30');
    coreGlow.addColorStop(1, 'transparent');
    this.ctx.globalAlpha = 0.6;
    this.ctx.fillStyle = coreGlow;
    this.ctx.beginPath();
    this.ctx.arc(core.x, core.y, corePulse * 2, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.globalAlpha = 1;
    this.ctx.strokeStyle = this.getPrimaryColor();
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.arc(core.x, core.y, corePulse, 0, Math.PI * 2);
    this.ctx.stroke();

    const coreGradient = this.ctx.createLinearGradient(
      core.x - corePulse, core.y - corePulse,
      core.x + corePulse, core.y + corePulse
    );
    coreGradient.addColorStop(0, this.getPrimaryColor());
    coreGradient.addColorStop(1, this.getAccentColor());
    this.ctx.fillStyle = coreGradient;
    this.ctx.beginPath();
    this.ctx.arc(core.x, core.y, corePulse * 0.6, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.globalAlpha = 1;
    this.ctx.fillStyle = '#fff';
    this.ctx.font = '700 13px Inter, sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    core.label.split('\n').forEach((line, li) => {
      this.ctx.fillText(line, core.x, core.y + (li - 0.5) * 18);
    });

    this.nodes.slice(20).forEach((particle) => {
      this.ctx.globalAlpha = 0.8 * (1 - particle.progress * 0.5);
      this.ctx.fillStyle = particle.color;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.ctx.fill();
    });

    this.ctx.globalAlpha = 1;
    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

const archObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (!window.architectureDiagram) {
        window.architectureDiagram = new ArchitectureDiagram();
      }
      archObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '100px' });

const archContainer = document.querySelector('.hero-architecture');
if (archContainer) {
  archObserver.observe(archContainer);
}