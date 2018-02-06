// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mybook = {
	"title":"Ready Player One",
	"author":"Earnest Cline",
	"url":"#",
	"imageurl":"https://images-na.ssl-images-amazon.com/images/I/61d6DhRCBSL._SX322_BO1,204,203,200_.jpg",
}

var myToReadList = [
	{
		"title":"The Amazing Adventures of Kavalier and Clay",
		"author":"Michael Chabon",
		"url":"https://www.goodreads.com/book/show/3985.The_Amazing_Adventures_of_Kavalier_Clay",
		"imageurl":"https://images.gr-assets.com/books/1503806495l/3985.jpg",
	},
	{
		"title":"#",
		"author":"#",
		"url":"#",
		"imageurl":"#",
	},
	{
		"title":"#",
		"author":"#",
		"url":"#",
		"imageurl":"#",
	}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  console.log(mybook.title);
  displayList();


});

function displayList(){
 $(".songs").append("<p>"+ mybook.title +"</p>");
 $(".songs").append("<p> By : "+ mybook.author +"</p>");
 $(".songs").append("<img height='300px' width='200px' src='"+ mybook.imageurl +"'>");
 $(".songs").append("<p><a href='"+ mybook.url +"'>Start Reading</p>");
 for(var i= 0; i < myToReadList.length ; i++){
	$(".songs").append("<p>" + myToReadList[i].title + "</p>");
	$(".songs").append("<p> By : " + myToReadList[i].author + "</p>");
	$(".songs").append("<img height='300px' width='200px' src='" + myToReadList[i].imageurl + "'>");
	$(".songs").append("<p><a href='" + myToReadList[i].url + "'>Start Reading</p>");
	console.log(myToReadList[i].url);
 }
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
