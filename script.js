

let mouseDown = false

window.onload = function() {

    makeGrid(16,16);
    let clearButton = document.getElementById("clear");
    let sizeButton = document.getElementById("size");

    clearButton.onclick = function(){
        console.log("clear");
        const gridItems = document.querySelectorAll("#grid-container #grid-item");
        gridItems.forEach(function(item){
            item.style.backgroundColor = "white"; // Fix here
        });

        sizeButton.onclick = function(){
            let grid = document.getElementById("grid-container");
            newSize =parseInt(prompt("Choose a number between 1 and 100"));
            if (newSize >= 1 && newSize <=100){
                grid.innerHTML = "";
                makeGrid(newSize, newSize);

            }else{
                alert("please choose a number between 1 and 100");
            }
            
            

         
        }


}


    

};


function makeGrid(rows,cols){
    console.log("MakeGrid");
    const grid = document.getElementById("grid-container");

    grid.style.setProperty("--grid-rows",rows);
    grid.style.setProperty("--grid-cols",cols);
    for (let i = 0; i<(rows*cols);i++){
        console.log(`made grid ${i}`);
        let newDiv = document.createElement('div');
        grid.appendChild(newDiv);
        newDiv.id = "grid-item";

        newDiv.onmousedown = function() {
            mouseDown = true;
            changeColor(newDiv);
        }
        newDiv.onmouseup = function(){
            mouseDown = false;
        }
        newDiv.onmousemove = function(){
            if (mouseDown) {
                changeColor(newDiv);

            }
        }
         
        
        


        

    }

}

function changeColor(div){
    
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        div.style.backgroundColor = `rgb(${r},${g},${b})`;
    
   
}


