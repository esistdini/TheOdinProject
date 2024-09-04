const grid = document.querySelector('.grid');
const reset = document.querySelector('.reset');
const defaultColor = document.querySelector('.default');
const randomColor = document.querySelector('.color'); 
const resolutionInput = document.querySelector('#resolutionInput'); 
const resolutionLabel = document.querySelector('.resolutionLabel')
let numSquares = 8;  
resolutionInput.addEventListener('input', changeGrid); 

function changeGrid(e){
  numSquares = e.target.value; 
  resolutionLabel.textContent = `${numSquares}x${numSquares}`;
}
createGrid(numSquares);

function createGrid(resolutionInput){
  let gridSize = (resolutionInput * resolutionInput); 
    
  for (i = 0; i < gridSize; ++i){ 
      let gridDiv = document.createElement('div') 
      gridDiv.className = 'box' 
      gridDiv.addEventListener('mouseover', changeColor); 
    
      grid.appendChild(gridDiv)
  }

  grid.style.gridTemplateColumns =`repeat(${resolutionInput}, 1fr)` 
  grid.style.gridTemplateRows =`repeat(${resolutionInput}, 1fr)`
}

reset.addEventListener('click', resetGrid);
function resetGrid() {
  while (grid.firstChild) { 
    grid.removeChild(grid.firstChild);  
  }
  
  createGrid(numSquares); 
}

function changeColor(e) { 
  if (type === "randomColorMode") {  
    const randomR = Math.floor(Math.random() * 256) 
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (type === "defaultColorMode") {
    e.target.style.backgroundColor = 'lightpink' ;
  }
}; 

defaultColor.addEventListener("click", function() {
  type = "defaultColorMode";
  
  this.classList.add("active");
  randomColor.classList.remove("active");
});

randomColor.addEventListener("click", function() {
  type = "randomColorMode";
  
  this.classList.add("active");
  defaultColor.classList.remove("active");
});

