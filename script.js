const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.querySelector('.theme-toggle');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

const rotatingRole = document.getElementById('rotating-role');
const roleNames = ['Data Analyst', 'BI Analyst', 'Healthcare Analytics Professional', 'Data Storyteller'];
if (rotatingRole && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let roleIndex = 0;
  let characterIndex = roleNames[0].length;
  let deleting = true;

  const typeRole = () => {
    const currentRole = roleNames[roleIndex];
    characterIndex += deleting ? -1 : 1;
    rotatingRole.textContent = currentRole.slice(0, Math.max(0, characterIndex));

    let delay = deleting ? 45 : 72;
    if (!deleting && characterIndex >= currentRole.length) {
      deleting = true;
      delay = 1700;
    } else if (deleting && characterIndex <= 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roleNames.length;
      delay = 230;
    }
    window.setTimeout(typeRole, delay);
  };

  window.setTimeout(typeRole, 1800);
}

const setMenuState = (open) => {
  if (!menuButton || !navLinks) return;
  navLinks.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
};

menuButton?.addEventListener('click', () => setMenuState(!navLinks?.classList.contains('open')));
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  setMenuState(false);
}));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navLinks?.classList.contains('open')) {
    setMenuState(false);
    menuButton?.focus();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 980) setMenuState(false);
});

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach(el => observer.observe(el));
} else {
  revealElements.forEach(el => el.classList.add('visible'));
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

let savedTheme = null;
try {
  savedTheme = localStorage.getItem('portfolio-theme');
} catch (_) {
  savedTheme = null;
}
if (savedTheme === 'light') {
  document.body.classList.add('light-theme');
  themeToggle?.setAttribute('aria-pressed', 'true');
  themeToggle?.setAttribute('aria-label', 'Switch to dark theme');
  themeColorMeta?.setAttribute('content', '#f7f9fc');
} else {
  themeToggle?.setAttribute('aria-label', 'Switch to light theme');
  themeColorMeta?.setAttribute('content', '#07111f');
}

themeToggle?.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-theme');
  themeToggle.setAttribute('aria-pressed', String(isLight));
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
  themeColorMeta?.setAttribute('content', isLight ? '#f7f9fc' : '#07111f');
  try {
    localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
  } catch (_) {
    // The selected theme still applies for the current session.
  }
});

const filterButtons = document.querySelectorAll('button.filter-chip[data-filter]');
const projectCards = document.querySelectorAll('.project-card[data-category]');
const projectFilterStatus = document.getElementById('project-filter-status');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;
    filterButtons.forEach(chip => {
      const active = chip === button;
      chip.classList.toggle('active', active);
      chip.setAttribute('aria-pressed', String(active));
    });
    projectCards.forEach(card => {
      const categories = (card.dataset.category || '').split(' ');
      const show = filter === 'all' || categories.includes(filter);
      card.classList.toggle('is-hidden', !show);
      card.hidden = !show;
      if (show) visibleCount += 1;
    });
    if (projectFilterStatus) {
      const statusLabels = { all: 'projects', dashboard: 'dashboard projects', ml: 'machine learning projects' };
      projectFilterStatus.textContent = `Showing ${visibleCount} ${statusLabels[filter] || 'projects'}.`;
    }
  });
});

const sectionLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const sections = sectionLinks
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);
if ('IntersectionObserver' in window && sections.length) {
  const activeNavObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
  sections.forEach(section => activeNavObserver.observe(section));
}

const backToTop = document.getElementById('back-to-top');
backToTop?.addEventListener('click', (event) => {
  event.preventDefault();
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const forceTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  };
  document.getElementById('top')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  window.scrollTo({ top: 0, left: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  [350, 900, 1400].forEach(delay => window.setTimeout(() => {
    if (window.scrollY > 2) {
      const previousBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      forceTop();
      document.documentElement.style.scrollBehavior = previousBehavior;
    }
  }, delay));
});
