// script.js

// Function to create the grid
function createGrid(size) {
    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear any existing squares
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Calculate the size of each square based on the container width
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Change color on hover
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "#333";
        });

        container.appendChild(square);
    }
}

// Initial grid creation with default size
createGrid(16);

// Function to reset grid size
function resetGrid() {
    let newSize = prompt("Enter new grid size (max 100):");

    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
            createGrid(newSize);
        } else {
            alert("Please enter a valid number between 1 and 100.");
        }
    }
}

// Add event listener to reset button
document.getElementById("reset-button").addEventListener("click", resetGrid);