let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function initializeGame() {
  const cells = document.querySelectorAll('.game-cell');
  cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
  });

  document.getElementById('resetBtn').addEventListener('click', resetGame);
}

function handleCellClick(e) {
  const cell = e.target;
  const index = parseInt(cell.getAttribute('data-index'));

  if (gameBoard[index] !== '' || !gameActive) {
    return;
  }

  gameBoard[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add(currentPlayer.toLowerCase());

  checkGameStatus();
}

function checkGameStatus() {
  let gameWon = false;

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (gameBoard[a] === '' || gameBoard[b] === '' || gameBoard[c] === '') {
      continue;
    }
    if (gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
      gameWon = true;
      break;
    }
  }

  if (gameWon) {
    document.getElementById('status').textContent = `🎉 Player ${currentPlayer} Wins!`;
    document.getElementById('status').classList.add('winner');
    gameActive = false;
    return;
  }

  if (!gameBoard.includes('')) {
    document.getElementById('status').textContent = "It's a Draw!";
    document.getElementById('status').classList.add('draw');
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.getElementById('status').textContent = `Player ${currentPlayer}'s Turn`;
  document.getElementById('status').classList.remove('winner', 'draw');
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  document.getElementById('status').textContent = "Player X's Turn";
  document.getElementById('status').classList.remove('winner', 'draw');

  const cells = document.querySelectorAll('.game-cell');
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('x', 'o');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeGame);
} else {
  initializeGame();
}
