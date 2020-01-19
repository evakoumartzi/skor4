const columns=7;
const rows=6;
let Grid =[];
let p1Color;
let p2Color;
let activePlayer1;

function setup (){
  p1Color = color(255,255,0);
  p2Color = color(255,0,0);
  activePlayer1=true;
  createCanvas (1000,700);

  for (let i=0; i<columns; i++){
    let col=[];
    for(let j=0; j< rows; j++){
      col.push(0);
    }
    Grid.push(col);

  }
}

function draw (){
  ellipseMode(CORNER);
  background(220);
  for (let i=0; i<columns; i++){
    for(let j=0; j< rows; j++){
      stroke(200,0,100);
      strokeWeight(5);
      fill(50,220,0);
      rect(i*width/columns, j*height/rows, width/columns, height/rows);
      if(Grid[i][j] ==1){
        fill(p1Color);
        ellipse(i*width/columns, j*height/rows, width/columns, height/rows);
      }
      if(Grid[i][j] ==2){
        fill(p2Color);
        ellipse(i*width/columns, j*height/rows, width/columns, height/rows);
      }
    }
  }
}

function mousePressed(){
  let clickCol = Math.floor(mouseX/width*columns);
  drop(Math.floor(mouseX/width*columns));
}

function drop(dropCol){
  for (let i=Grid[dropCol].length-1; i>=0; i--){
    if (Grid[dropCol][i]==0){
      if(activePlayer1==true){
        Grid[dropCol][i] = 1;
      }else{
        Grid[dropCol][i] = 2;
      }
      activePlayer1=!activePlayer1;
      return;
    }
  }
  console.log("all full");
}
