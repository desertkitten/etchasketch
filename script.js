const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');

// Function to create the grid based on the specified size
function createGrid(size) {
    // Clear the container by setting innerHTML to an empty string
    container.innerHTML = '';

    // Calculate the size of each square
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Add hover effect to change color
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#333';
        });

        container.appendChild(square);
    }
}

// Initialize the grid with a default size of 16
createGrid(16);

// Add functionality to the reset button
resetButton.addEventListener('click', () => {
    let size = parseInt(prompt('Enter new grid size (maximum 100):'));

    if (!isNaN(size) && size > 0 && size <= 100) {
        createGrid(size); // Generate a new grid with the specified size
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
});