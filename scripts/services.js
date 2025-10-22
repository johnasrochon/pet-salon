tsParticles.load({
  id: "pet-salon-particles",
  options: {
    particles: {
      number: { value: 30 },
      color: { value: "#e8d2c2" }, // A soft, warm beige
      shape: {
        type: "image",
        image: {
          src: "paw-print-icon.svg", // Use an SVG for crispness
        },
      },
      size: {
        value: 8,
        random: true,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "bottom", // Particles float upwards
        random: true,
        straight: false,
        out_mode: "out",
      },
      opacity: {
        value: 0.5,
        random: true,
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse", // Paw prints move away from the mouse
        },
      },
    },
  },
});