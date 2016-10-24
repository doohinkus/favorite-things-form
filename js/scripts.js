$(document).ready(function (){
  $("form#favoriteThings").submit(function (event){
     var name = $("#name").val();
     var food = $("#food").val();
     var hobby = $("#hobby").val();
     var movie = $("#movie").val();
     var favoriteThings = [name, food, hobby, movie];
     var newArray = [];
     newArray.push(favoriteThings[0], favoriteThings[1], favoriteThings[3]);
      // console.log(newArray);
      $("#responses").empty().append("<li>"+newArray[0]+"</li>"+
    "<li>"+newArray[1]+"</li>"+"<li>"+newArray[2]+"</li>");
     event.preventDefault();

    });

});
