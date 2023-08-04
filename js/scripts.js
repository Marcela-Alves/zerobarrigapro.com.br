let visitorsSpan = document.querySelector('.visitors');

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setInitialVisitors() {
  let initialVisitors = randomIntFromInterval(500, 800);
  visitorsSpan.textContent = initialVisitors;
}

function updateVisitors() {
  let currentVisitors = parseInt(visitorsSpan.textContent);
  let randomDelta = randomIntFromInterval(-9, 9);
  let newVisitors = currentVisitors + randomDelta;
  if (newVisitors < 97) {
    newVisitors += randomIntFromInterval(1, 9);
  } else if (newVisitors > 600) {
    newVisitors -= randomIntFromInterval(1, 9);
  }
  visitorsSpan.textContent = newVisitors;
  
  setTimeout(() => {
    updateVisitors();
  }, 2700);
}

setInitialVisitors();

setTimeout(() => {
  updateVisitors();
}, 2700);