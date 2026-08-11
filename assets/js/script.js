document.addEventListener('DOMContentLoaded', function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");
    if (menuToggle && nav) {


        menuToggle.addEventListener('click', function () {
            nav.classList.toggle("active");
            menuToggle.classList.toggle("active"); // <-- add this line
        });
    }
});

// Story Section

const panels = document.querySelectorAll('.panel');

const panelObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  {
    threshold: 0.4
  }
);

panels.forEach(panel => panelObserver.observe(panel));


// Expertise section

const stats = document.querySelectorAll('.stat');

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Only ADD class instead of forcing inline styles
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

stats.forEach(stat => {
  statsObserver.observe(stat);
});

// Forms
function openForm(type) {
  const formSection = document.getElementById('formSection');
  formSection.style.display = 'block';

  document.getElementById('seoForm').style.display = 'none';
  document.getElementById('adsForm').style.display = 'none';
  document.getElementById('contentForm').style.display = 'none';

  if (type === 'seo') {
    document.getElementById('seoForm').style.display = 'block';
    document.getElementById('formTitle').innerText = "Get Your SEO Growth Plan";
  } else if (type === 'ads') {
    document.getElementById('adsForm').style.display = 'block';
    document.getElementById('formTitle').innerText = "Get Your Paid Ads Strategy Plan";
  } else if (type === 'content') {
    document.getElementById('contentForm').style.display = 'block';
    document.getElementById('formTitle').innerText = "Get Your Content Marketing Roadmap";
  }

  formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closeForm() {
  document.getElementById('formSection').style.display = 'none';
}
['seoForm', 'adsForm', 'contentForm'].forEach(formClose => {
  document.getElementById(formClose).style.display = 'none';
});

// Services Page
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

/* ============================================
   Scroll-reveal for Industries cards and
   Built-for points. Pure vanilla JS, no deps.

   Fully namespaced under window.cosServicesReveal
   so it can't collide with any existing script,
   variable, or observer on the site. Safe to load
   alongside your current JS with no changes there.

   Respects prefers-reduced-motion by skipping the
   animation setup entirely (elements stay visible).
   ============================================ */
(function (ns) {
  // Guard against this script being included more than once
  if (ns.__initialized) return;
  ns.__initialized = true;

  var SELECTOR = '.industry-card, .built-for__point';

  function init() {
    var prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) return;

    var targets = document.querySelectorAll(SELECTOR);

    if (!targets.length || !('IntersectionObserver' in window)) return;

    targets.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var delay = (i % 3) * 80; // slight stagger within each grid
            setTimeout(function () {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  ns.init = init;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window.cosServicesReveal = window.cosServicesReveal || {});

