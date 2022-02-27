//Etch-A-Sketch

//End goal is to take users input on a prompt for number of squares by number of squares
//Grid will be generated, when user puts mouse over the grid it will change from white to black

//need to determine how to use javascript to make a grid of boxes
//Abstract that into a function that takes user input to make different size boxes
//Use the hover feature to change the box colors

//more advanced features after this is done...



// const GRIDSIZE=16;

function insertGridBlocks(GRIDSIZE) {
    //Take in size of the grid, which is number of columns and rows
    //That number squared becomes the total amount of blocks in the grid
    
    const numOfBlocks=GRIDSIZE**2;
    const gridContainer=document.querySelector('.grid-container');
    //Create a grid item for each block
    for (let i=1; i<numOfBlocks+1; i++) {
        //create a div of class name grid-item with textContent of i
        let div=document.createElement('div');
        div.classList.add('grid-item');
        div.setAttribute('id', `grid-item${i}`)
        // div.textContent=i;
        gridContainer.appendChild(div);

        //append grid-item child to the grid-container parent
    }
    alignGrid(GRIDSIZE);

    colorIn();
}

function alignGrid(GRIDSIZE) {
    //Take in the grid size and modify the css style of the grid-container to have
    //same number of blocks on columns and row based on available size.
    const gridContainer=document.getElementsByClassName('grid-container')
    gridContainer[0].style.gridTemplateColumns =`repeat(${GRIDSIZE}, ${(88/GRIDSIZE)}vh)`;
}
let color=document.getElementById('colors');
let btn=document.getElementById('colorbtn');
btn.addEventListener('click', () => {
  colorIn(color.value);
});

function colorIn(color='black') {
    if (color==='random') {
        color=getRandomColor();
    }
    const gridBlocks=document.querySelectorAll('.grid-item');
    gridBlocks.forEach((block) => {
        block.addEventListener("mouseenter", () => {
            block.style.backgroundColor=color;
            block.style.border='none';
        });
    });
}
function resetPage() {
    const resetBtn=document.getElementById("#resetButton");
    resetBtn.addEventListener('click', ()=> {
       clearBlocks();
    //    getNewGridSize();
    });
}

//Accidentally made an eraser may add in later
// function Eraser() {
//     const gridBlocks=document.querySelectorAll('.grid-item');
//     gridBlocks.forEach((block) => {
//         block.addEventListener("mouseenter", () => {
//             block.style.backgroundColor="rgb(255, 235, 205, 0.8)";
//             block.style.border='1px solid rgba(0, 0, 0, 0.8)';
//         });
//     });
// }

function clearBlocks() {
    const gridBlocks=document.querySelectorAll('.grid-item');
    gridBlocks.forEach((block) => {
        block.style.backgroundColor="rgb(255, 235, 205, 0.8)";
        block.style.border='1px solid rgba(0, 0, 0, 0.8)';

    });
}
let GRIDSIZE=16;

let GridRange=document.getElementById('gridSize');
let changeSizeText=document.getElementsByClassName('changSizeText');

GridRange.addEventListener("input", ()=> {
    removeChildren();
    insertGridBlocks(parseInt(GridRange.value));

})
function removeChildren() {
    const gridContainer=document.querySelector('.grid-container')
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}
function getRandomColor() {
    return 'red';
}
insertGridBlocks(GRIDSIZE);


resetPage();

