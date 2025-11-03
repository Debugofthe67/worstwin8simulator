document.addEventListener('DOMContentLoaded', () => {
    const tiles = document.querySelectorAll('.tile');

    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            alert(`You clicked the ${tile.classList[1]} tile!`);
        });
    });
});
