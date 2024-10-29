const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');

function createGrid(size) {
    container.innerHTML = ''; // Clear existing grid
    const squareSize = 960 / size; // Calculate size for new squares

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

// Initialize grid
createGrid(16);

// Reset button functionality
resetButton.addEventListener('click', () => {
    let size = parseInt(prompt('Enter new grid size (maximum 100):'));

    if (size > 100) size = 100; // Limit grid size to 100
    if (size && size > 0) createGrid(size);
    else alert('Please enter a valid number between 1 and 100.');
});