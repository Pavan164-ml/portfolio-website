function initTechOrbs() {
  document.querySelectorAll('.tech-orb').forEach(function(orb) {
    orb.addEventListener('mousemove', function(e) {
      const rect = orb.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      orb.style.transform = 'scale(1.05) translate(' + (x * 0.1) + 'px, ' + (y * 0.1) + 'px) translateY(-2px)';
    });

    orb.addEventListener('mouseleave', function() {
      orb.style.transform = '';
    });
  });
}

document.addEventListener('DOMContentLoaded', initTechOrbs);
document.addEventListener('astro:after-swap', initTechOrbs);