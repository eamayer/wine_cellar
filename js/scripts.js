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


Cellar.protype.findWine = function (id) {
  for (var i=0; i<this.wines.length; i++) {
    if (this.wines[i]) {
      if (this.wines[i].id === id) {
          return this.wines [i];
    }
  }
};
  return false;
}



function Wine(type, winery, year){
  this.type = type;
  this.winery = winery;
  this.year = year;
}

Wine.prototype.wineEntry = function(){
  return this.type + " " + this.winery + " " + this.year

}
$(document).ready(function(){

  var years = function (year) {


  if(redWine){
    this.redWine =+ 10
  }
});
