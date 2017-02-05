$(document).ready(function(){

    createGrid(5,5);

  /*$("#grid").mouseOver(); */
});

function createGrid(rows, columns){
  $("#grid").empty();
  var gridString = "";

  for(r = 0; r < rows; r++){
    gridString += "<div id='row" + (r+1) + "'>";

    for(c = 0; c < columns; c++){
      gridString += "<div id='column" + (c+1) + "' class='box'>Hello World " + (c+1) + "</div>";
    }
    gridString += "</div>";

  }
  $("#grid").append(gridString);
}
