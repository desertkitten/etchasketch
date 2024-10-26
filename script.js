// Function to create grid
function createGrid(size) {
    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear any existing squares
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

// Calculate the size of each square based on the container width
const squareSize = 960 / size;

for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
}

// Change color on hover
square.addEventListener("mousover", )