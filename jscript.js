// Grid Properties
let gridRowCount = 16;
let gridColumnCount = 16;
let grid = [];

let gridContainer = document.getElementById("grid-container");
gridContainer.addEventListener('mouseover', (Event) => {
    let target = Event.target;

    if(grid.includes(target)) {
        grid[grid.indexOf(target)].style["background-color"] = "purple";
    }
});

// Columns
for(i=0; i<256; i++){
    grid.push(document.createElement("div"));
    grid[i].setAttribute("id","grid-block");
    document.getElementById("grid-container").appendChild(grid[i]);
}

console.log(grid.length);
