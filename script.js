const columns=7;
const rows=6;
let Grid =[];
let p1Color;
let p2Color;
let activePlayer1;
let gameState; //playing, winScreen
function setup (){
  gameState = "playing";
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
  switch(gameState){
    case "playing":
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
          if(Grid[i][j] ==3 && Math.floor(millis()/444)%2 == 0){
            fill(0);
            ellipse(i*width/columns, j*height/rows, width/columns, height/rows);
          }
        }
      }
      break;
    case "winScreen":

  }
}

function mousePressed(){
  let clickCol = Math.floor(mouseX/width*columns);
  drop(Math.floor(mouseX/width*columns));
  win();
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

function win(){
  let active=0;
  let consecutive=0;
    //check column wins
  for (let i=0; i<columns; i++){
    active=0;
    consecutive=0;
    for(let j=0; j< rows; j++){
      if(Grid[i][j]==active && Grid[i][j]!=0){
        consecutive++;
      }else{
        consecutive=0;
        active=Grid[i][j];
      }
      if(consecutive>=3){
        console.log("winnner! " + active);
        Grid[i][j] = 3;
        Grid[i][j-1] = 3;
        Grid[i][j-2] = 3;
        Grid[i][j-3] = 3;
      }
    }
  }
    //check row wins
  for (let i=0; i<rows; i++){
    active=0;
    consecutive=0;
    for(let j=0; j< columns; j++){
      if(Grid[j][i]==active && Grid[j][i]!=0){
        consecutive++;
      }else{
        consecutive=0;
        active=Grid[j][i];
      }
      if(consecutive>=3){
        console.log("horri winnner! " + active);
      }
    }
  }
  //check diagonaL wins
  for (let i=0; i<columns; i++){
    active=0;
    consecutive=0;
    for(let j=0; j< rows; j++){
      if(i+j < columns){
        // console.log("checking " + (i+j) + ", " + j);
        if(Grid[i+j][j]==active && Grid[i+j][j]!=0){
          consecutive++;
        }else{
          consecutive=0;
          active=Grid[i+j][j];
        }
        if(consecutive>=3){
          console.log("bbb winnner! " + active);

        }
      }
    }
  }
  for (let i=0; i<rows; i++){
    active=0;
    consecutive=0;
    for(let j=0; j< columns; j++){
      if(i+j < rows){
        // console.log("xxx checking " + (j) + ", " + (i+j));
        if(Grid[j][i+j]==active && Grid[j][i+j]!=0){
          consecutive++;
        }else{
          consecutive=0;
          active=Grid[j][i+j];
        }
        if(consecutive>=3){
          console.log("diagolan forward winnner! " + active);
        }
      }
    }
  }
  //check diagonaL wins xxx
  for (let i=0; i<columns; i++){
    active=0;
    consecutive=0;
    for(let j=0; j< rows; j++){
      if(i-j >= 0){
        // console.log("checking " + (i-j) + ", " + j);
        if(Grid[i-j][j]==active && Grid[i-j][j]!=0){
          consecutive++;
        }else{
          consecutive=0;
          active=Grid[i-j][j];
        }
        if(consecutive>=3){
          console.log("winnner! " + active);
        }
      }
    }
  }
  for (let i=0; i<rows; i++){
    active=0;
    consecutive=0;
    for(let j=0; j< columns; j++){
      if(i-j >= 0){
        // console.log("xxx checking " + (j) + ", " + (i-j));
        if(Grid[j][i-j]==active && Grid[j][i-j]!=0){
          consecutive++;
        }else{
          consecutive=0;
          active=Grid[j][i-j];
        }
        if(consecutive>=3){
          console.log("diagolan BACKKKKKK winnner! " + active);
        }
      }
    }
  }
}
