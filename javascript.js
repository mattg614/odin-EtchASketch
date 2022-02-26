//Etch-A-Sketch

//End goal is to take users input on a prompt for number of squares by number of squares
//Grid will be generated, when user puts mouse over the grid it will change from white to black

//need to determine how to use javascript to make a grid of boxes
//Abstract that into a function that takes user input to make different size boxes
//Use the hover feature to change the box colors

//more advanced features after this is done...



const GRIDSIZE=4;

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
        div.textContent=i;
        gridContainer.appendChild(div);

        //append grid-item child to the grid-container parent
    }
}

insertGridBlocks(GRIDSIZE);