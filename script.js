

// Global variable
let moveCount = 0;

// Function to calculate new move distance (demonstrates parameters & return)
function calculateMove(distance, multiplier) {
    return distance * multiplier;
}

// Function to move the box (demonstrates DOM manipulation & scope)
function moveBox() {
    const box = document.querySelector('.box');
    moveCount++;
    const distance = calculateMove(50, moveCount); // parameter + return usage
    box.style.transform = `translateX(${distance}px)`;
    console.log(`Box moved ${distance}px`);
}

// Event listener to trigger moveBox function
document.getElementById('moveBtn').addEventListener('click', moveBox);

// Function to toggle card flip (demonstrates local vs global scope)
function flipCard() {
    const card = document.getElementById('card'); // local variable
    card.classList.toggle('flip');
}

// Event listener to flip card on click
document.getElementById('card').addEventListener('click', flipCard);
