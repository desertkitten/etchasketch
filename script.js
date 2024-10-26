// Function to create grid
function createGrid(size) {
    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear any existing squares
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}