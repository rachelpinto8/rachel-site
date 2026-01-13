const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));

// Dark/Light mode toggle with fade animation
const theme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', theme);

const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Add fade animation
    document.body.style.opacity = '0.7';
    
    setTimeout(() => {
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon();
      document.body.style.opacity = '1';
    }, 150);
  });
  
  updateThemeIcon();
}

function updateThemeIcon() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.innerHTML = currentTheme === 'dark' 
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
  }
}

// Body opacity transition
document.body.style.transition = 'opacity 0.3s ease';

// Modal functionality
function initializeModals() {
  const clickableItems = document.querySelectorAll('[data-modal]');
  const modalOverlay = document.querySelector('.modal-overlay');
  
  if (!modalOverlay) return;

  clickableItems.forEach(item => {
    item.addEventListener('click', (e) => {
      // Prevent default if it's a link
      if (item.tagName === 'A') {
        e.preventDefault();
      }
      
      const modalId = item.getAttribute('data-modal');
      const modalContent = document.getElementById(modalId);
      
      if (modalContent) {
        const clonedContent = modalContent.cloneNode(true);
        const overlay = document.querySelector('.modal-overlay');
        overlay.innerHTML = `
          <div class="modal-content">
            <button class="modal-close" aria-label="Close modal">&times;</button>
            ${clonedContent.innerHTML}
          </div>
        `;
        requestAnimationFrame(() => {
          overlay.classList.add('active');
        });
        
        overlay.querySelector('.modal-close').addEventListener('click', closeModal);
      }
    });
  });
  
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
}

function closeModal() {
  const modalOverlay = document.querySelector('.modal-overlay');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    setTimeout(() => { modalOverlay.innerHTML = ''; }, 250);
  }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Initialize modals when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeModals);
} else {
  initializeModals();
}
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

function closeMobileMenu() {
  if (navMenu && menuToggle) {
    navMenu.classList.remove('open');
    menuToggle.classList.remove('open');
    document.body.classList.remove('lock-scroll');
  }
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.classList.toggle('open', isOpen);
    document.body.classList.toggle('lock-scroll', isOpen);
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      closeMobileMenu();
    }
  });
}