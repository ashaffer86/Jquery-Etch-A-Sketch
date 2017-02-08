$(document).ready(function(){

    createGrid(5,5);
    $("#grid div > div").mouseover(function(){
      $(this).addClass("blue");
    });
});

function createGrid(rows, columns){
  $("#grid").empty();
  var gridString = "";

  for(r = 0; r < rows; r++){
    gridString += "<div id='row" + (r+1) + "'>";

    for(c = 0; c < columns; c++){
      gridString += "<div id='item" + (r+1) + "" + (c+1) + "'>Hello World " + (c+1) + "</div>";
    }
    gridString += "</div>";

  }
  $("#grid").append(gridString);
  $("#grid div > div").css({"width":"" + 50 + "px","height":"" + 50  + "px"});
  /*try next time : 80.0/rows */
}
