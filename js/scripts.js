function Cellar (){
  this.wines = [];
  this.currentId = 0;

}

Cellar.prototype.addWine = function(wine){
  wine.id = this.assignId();
  this.wines.push(wine)


}

Cellar.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}


Cellar.prototype.findWine = function (id) {
  for (var i= 0; i<this.wines.length; i++) {
    if (this.wines[i]) {
      if (this.wines[i].id === id) {
        return this.wines [i];
      }
    }
  };
  return false;
}



function Wine(type, winery, year, drinkBy, rating){
  this.type = type;
  this.winery = winery;
  this.year = year;
  this.drinkBy = [];
  this.rating = [];
}

Wine.prototype.wineEntry = function(){
  return this.type + " " + this.winery + " " + this.year

}
var cellar = new Cellar();

function displayWineDetails(cellarToDisplay) {
  var wineList = $("ul#wines");
  var htmlForWineInfo = "";
  cellarToDisplay.wines.forEach(function(wine) {
    htmlForWineInfo += "<li id=" + wine.id + ">" + wine.winery + " " + wine.type + "</li>";
  });
  wineList.html(htmlForWineInfo);
};
var drinkBy = function(year){

  var wineType = $('select#wine-type').val();



  if(wineType === "red"){
    return this.year += 10;
  }else if (wineType === "white"){
    return this.year += 5;
  }
console.log(wineType);
}



function showWine(wineId) {
  var wine = cellar.findWine(wineId);
  $("#show-wine").show();
  $(".type").html(wine.type);
  $(".winery").html(wine.winery);
  $(".year").html(wine.year);
  $(".drinkBy").html(contact.address);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + contact.id + ">Delete</button>");
}

$(document).ready(function(){
  $('form#wine-entry').submit(function(event){
    event.preventDefault();
    var wine = new Wine ();

    $('ul#wines').append('<li>' + wine + '</li>')
  });

});
