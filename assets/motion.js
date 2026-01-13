// Easter Egg: Secret Menu
let secretMenuLoaded = false;

function initializeSecretMenu() {
  if (secretMenuLoaded) return;
  
  const secretMenuHTML = `<div id="secret-menu" class="secret-menu">
  <div class="secret-menu-header">
    <h1>Secret Menu</h1>
    <button class="secret-menu-close" aria-label="Close menu">&times;</button>
  </div>
  
  <div class="secret-menu-body">
    <div class="secret-menu-options">
      <a href="game.html" class="secret-menu-item">
        <div class="secret-menu-item-content">
          <span class="secret-menu-icon">🎮</span>
          <div class="secret-menu-text">
            <h2>Tic Tac Toe</h2>
            <p>Classic game</p>
          </div>
        </div>
        <span class="secret-menu-arrow">→</span>
      </a>
      
      <a href="rps.html" class="secret-menu-item">
        <div class="secret-menu-item-content">
          <span class="secret-menu-icon">🪨</span>
          <div class="secret-menu-text">
            <h2>Rock Paper Scissors</h2>
            <p>Beat the computer</p>
          </div>
        </div>
        <span class="secret-menu-arrow">→</span>
      </a>
      
      <a href="memory.html" class="secret-menu-item">
        <div class="secret-menu-item-content">
          <span class="secret-menu-icon">🧠</span>
          <div class="secret-menu-text">
            <h2>Memory Game</h2>
            <p>Match the pairs</p>
          </div>
        </div>
        <span class="secret-menu-arrow">→</span>
      </a>
      
      <a href="messages.html" class="secret-menu-item">
        <div class="secret-menu-item-content">
          <span class="secret-menu-icon">💬</span>
          <div class="secret-menu-text">
            <h2>Messages</h2>
            <p>Some thoughts for you</p>
          </div>
        </div>
        <span class="secret-menu-arrow">→</span>
      </a>
      
      <a href="appreciation.html" class="secret-menu-item">
        <div class="secret-menu-item-content">
          <span class="secret-menu-icon">💝</span>
          <div class="secret-menu-text">
            <h2>Appreciation</h2>
            <p>A special thank you</p>
          </div>
        </div>
        <span class="secret-menu-arrow">→</span>
      </a>
      
      <a href="guess.html" class="secret-menu-item">
        <div class="secret-menu-item-content">
          <span class="secret-menu-icon">🔢</span>
          <div class="secret-menu-text">
            <h2>Number Guesser</h2>
            <p>Guess my number</p>
          </div>
        </div>
        <span class="secret-menu-arrow">→</span>
      </a>
      
      <a href="dice.html" class="secret-menu-item">
        <div class="secret-menu-item-content">
          <span class="secret-menu-icon">🎲</span>
          <div class="secret-menu-text">
            <h2>Dice Roller</h2>
            <p>Roll the dice</p>
          </div>
        </div>
        <span class="secret-menu-arrow">→</span>
      </a>
      
      <a href="2048.html" class="secret-menu-item">
        <div class="secret-menu-item-content">
          <span class="secret-menu-icon">2️⃣</span>
          <div class="secret-menu-text">
            <h2>2048</h2>
            <p>Combine tiles to win</p>
          </div>
        </div>
        <span class="secret-menu-arrow">→</span>
      </a>
      
      <a href="simon.html" class="secret-menu-item">
        <div class="secret-menu-item-content">
          <span class="secret-menu-icon">🎯</span>
          <div class="secret-menu-text">
            <h2>Simon Says</h2>
            <p>Remember the sequence</p>
          </div>
        </div>
        <span class="secret-menu-arrow">→</span>
      </a>
      
      <a href="snake.html" class="secret-menu-item">
        <div class="secret-menu-item-content">
          <span class="secret-menu-icon">🐍</span>
          <div class="secret-menu-text">
            <h2>Snake</h2>
            <p>Classic arcade game</p>
          </div>
        </div>
        <span class="secret-menu-arrow">→</span>
      </a>
      
      <a href="hangman.html" class="secret-menu-item">
        <div class="secret-menu-item-content">
          <span class="secret-menu-icon">📝</span>
          <div class="secret-menu-text">
            <h2>Hangman</h2>
            <p>Guess the word</p>
          </div>
        </div>
        <span class="secret-menu-arrow">→</span>
      </a>
      
      <a href="pong.html" class="secret-menu-item">
        <div class="secret-menu-item-content">
          <span class="secret-menu-icon">🏓</span>
          <div class="secret-menu-text">
            <h2>Pong</h2>
            <p>Play vs computer</p>
          </div>
        </div>
        <span class="secret-menu-arrow">→</span>
      </a>
      
      <a href="rng.html" class="secret-menu-item">
        <div class="secret-menu-item-content">
          <span class="secret-menu-icon">🎲</span>
          <div class="secret-menu-text">
            <h2>Random Number Generator</h2>
            <p>Generate any range</p>
          </div>
        </div>
        <span class="secret-menu-arrow">→</span>
      </a>
      
      <a href="coin.html" class="secret-menu-item">
        <div class="secret-menu-item-content">
          <span class="secret-menu-icon">🪙</span>
          <div class="secret-menu-text">
            <h2>Coin Flipper</h2>
            <p>Heads or tails?</p>
          </div>
        </div>
        <span class="secret-menu-arrow">→</span>
      </a>
      
      <a href="whack.html" class="secret-menu-item">
        <div class="secret-menu-item-content">
          <span class="secret-menu-icon">🦡</span>
          <div class="secret-menu-text">
            <h2>Whack-a-Mole</h2>
            <p>Click fast!</p>
          </div>
        </div>
        <span class="secret-menu-arrow">→</span>
      </a>
      
      <a href="breakout.html" class="secret-menu-item">
        <div class="secret-menu-item-content">
          <span class="secret-menu-icon">🧱</span>
          <div class="secret-menu-text">
            <h2>Breakout</h2>
            <p>Break the bricks</p>
          </div>
        </div>
        <span class="secret-menu-arrow">→</span>
      </a>
      
      <a href="https://open.spotify.com/playlist/7kwg9GeqBKT8Sq1PXFR5Gx?si=86ccacd218eb453a" target="_blank" class="secret-menu-item">
        <div class="secret-menu-item-content">
          <span class="secret-menu-icon">🎵</span>
          <div class="secret-menu-text">
            <h2>Our Playlist</h2>
            <p>Listen together on Spotify</p>
          </div>
        </div>
        <span class="secret-menu-arrow">→</span>
      </a>
      
      <a href="https://www.instagram.com/beanandsushi1111/" target="_blank" class="secret-menu-item">
        <div class="secret-menu-item-content">
          <span class="secret-menu-icon">📸</span>
          <div class="secret-menu-text">
            <h2>Our Instagram</h2>
            <p>Check out our photos</p>
          </div>
        </div>
        <span class="secret-menu-arrow">→</span>
      </a>
    </div>
  </div>
  
  <div class="secret-menu-footer">
    <p>Press <kbd>\\</kbd> or <kbd>ESC</kbd> to close</p>
  </div>
</div>`;

  // Insert menu into body
  document.body.insertAdjacentHTML('beforeend', secretMenuHTML);
  
  setupSecretMenuListeners();
  secretMenuLoaded = true;
}

function setupSecretMenuListeners() {
  const secretMenu = document.getElementById('secret-menu');
  
  if (!secretMenu) {
    console.error('Secret menu element not found');
    return;
  }
  
  const closeBtn = secretMenu.querySelector('.secret-menu-close');
  
  // Close menu with animation
  function closeSecretMenu() {
    secretMenu.classList.add('closing');
    setTimeout(() => {
      secretMenu.classList.remove('active', 'closing');
    }, 300);
  }
  
  // Open/Close with backslash key
  document.addEventListener('keydown', (e) => {
    // Check for backslash key
    if ((e.key === '\\' || e.code === 'Backslash') && e.shiftKey === false) {
      e.preventDefault();
      if (secretMenu.classList.contains('active')) {
        closeSecretMenu();
      } else {
        secretMenu.classList.add('active');
      }
    }
    // Close with ESC
    if (e.key === 'Escape' && secretMenu.classList.contains('active')) {
      e.preventDefault();
      closeSecretMenu();
    }
  });
  
  // Close button click
  if (closeBtn) {
    closeBtn.addEventListener('click', closeSecretMenu);
  }
  
  // Close when clicking on the menu background (outside content)
  secretMenu.addEventListener('click', (e) => {
    if (e.target === secretMenu) {
      closeSecretMenu();
    }
  });
}

// Initialize secret menu on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSecretMenu);
} else {
  initializeSecretMenu();
}

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
updateStatusBar(theme);

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
      updateStatusBar(newTheme);
      document.body.style.opacity = '1';
    }, 150);
  });
  
  updateThemeIcon();
}

function updateStatusBar(themeMode) {
  const statusBarMeta = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
  if (statusBarMeta) {
    statusBarMeta.setAttribute('content', themeMode === 'dark' ? 'black-translucent' : 'black');
  }
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