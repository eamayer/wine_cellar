function Cellar (){
  this.wines = [],
  this.currentId = 0

}

Cellar.prototype.addWine = function(wine){
  wine.id = this.assignId();
  this.wines.push(wine)


}

Cellar.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}


Cellar.prototype.findWine = function(id) {
  for (var i= 0; i< this.wines.length; i++) {
    if (this.wines[i].id == id) {
      return this.wines[i];
    }
  };
  return false;
}


Cellar.prototype.moveWine = function(id) {
  for (var i=0; i< this.wines.length; i++) {
    if (this.wines[i]) {
      if (this.wines[i].id == id) {
        this.wines[i].rating = parseInt(prompt("What did you think of the wine?"));
        this.wines.forEach(function(wine){
          $("#drankList").append("<li id=" + wine.id + ">" + wine.winery + " " + wine.type + " " + wine.rating + "</li>");
        });
        return true;
      }
    }
  };
  return false;
}


//business logic for wines ---------

function Wine(type, winery, year){
  this.type = type,
  this.winery = winery,
  this.year = year

}

Wine.prototype.wineEntry = function(){
  return this.type + " " + this.winery + " " + this.year;
}

Wine.prototype.drinkBy = function () {
  if(wineType === "red"){
    return this.year += 10;
  }else if (wineType === "white"){
    return this.year += 5;
  }
}



//User Cellar Logic
var cellar = new Cellar();

function displayWineDetails(cellarToDisplay) {
  var wineList = $("ul#wines");
  var htmlForWineInfo = "";
  cellarToDisplay.wines.forEach(function(wine) {
    htmlForWineInfo += "<li id=" + wine.id + ">" + wine.winery + " " + wine.type + "</li>";
  });
  wineList.html(htmlForWineInfo);
};

  var wineType = $('select#wine-type').val();

  function showWine(wineId) {
    var wine = cellar.findWine(wineId);
    $("#show-wine").show();
    $(".type").text(wine.type);
    $(".winery").text(wine.winery);
    $(".year").text(wine.year);
    $(".drinkBy").text(wine.drinkBy);
    var buttons = $("#buttons");
    buttons.empty();
    buttons.append("<button class='deleteButton' id=" + wine.id + ">Delete</button>");
  }

function attachWineListeners() {
  $("ul#wines").on("click", "li", function() {
    showWine(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    cellar.moveWine(this.id);
    $("#show-wine").hide();
    displayWineDetails(cellar);
  });
};


$(document).ready(function(){
  attachWineListeners();
  $('form#wine-entry').submit(function(event){
    event.preventDefault();
    var type = $("select#wine-type").val();
    var winery = $("input#winery").val();
    var year = $("input#year").val();
    var newWine = new Wine(type, winery, year);

    cellar.addWine(newWine);
    displayWineDetails(cellar);
  })
})
