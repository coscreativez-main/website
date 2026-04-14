const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
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

