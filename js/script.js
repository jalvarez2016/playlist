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

// Books
var mybook = {
	"title":"Ready Player One",
	"author":"Earnest Cline",
	"url":"https://books.google.com/books/about/Ready_Player_One.html?id=TQtFDwAAQBAJ&printsec=frontcover&source=kp_read_button#v=onepage&q&f=false",
	"imageurl":"https://images-na.ssl-images-amazon.com/images/I/61d6DhRCBSL._SX322_BO1,204,203,200_.jpg",
}

var myToReadList = [
	{
		"title":"The Amazing Adventures of Kavalier and Clay",
		"author":"Michael Chabon",
		"url":"https://books.google.com/books/about/The_Amazing_Adventures_of_Kavalier_Clay.html?id=n2HeSbw10IUC&printsec=frontcover&source=kp_read_button#v=onepage&q&f=false",
		"imageurl":"https://images.gr-assets.com/books/1503806495l/3985.jpg",
	},
	{
		"title":"Subtle Art of Not Giving a Fuck",
		"author":"Mark Mason",
		"url":"https://books.google.com/books?id=yng_CwAAQBAJ&printsec=frontcover&dq=subtle+art+of+not+giving+a+f&hl=en&sa=X&ved=0ahUKEwi0l7j61pTZAhWwm-AKHQyWAfsQuwUILDAA#v=onepage&q=subtle%20art%20of%20not%20giving%20a%20f&f=false",
		"imageurl":"https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL.jpg",
	},
	{
		"title":"John Dies at the End",
		"author":"David Wong",
		"url":"https://books.google.com/books/about/John_Dies_at_the_End.html?id=Yu3SuiqituMC&printsec=frontcover&source=kp_read_button#v=onepage&q&f=false",
		"imageurl":"https://images-na.ssl-images-amazon.com/images/I/51ut%2BQ3tjKL._SX332_BO1,204,203,200_.jpg",
	},
	{
		"title":"The talent code",
		"author":"Daniel coyle",
		"url":"https://books.google.com/books/about/The_Talent_Code.html?id=gIHSN-ht0xQC&printsec=frontcover&source=kp_read_button#v=onepage&q&f=false",
		"imageurl":"https://i0.wp.com/www.kevinrandom.com/wp-content/uploads/2013/06/talent-code-cover.jpg?resize=225%2C300",
	}
];
//Issuu is a free reading app


// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  console.log(mybook.title);
  displayList();
   $("#save").click(function(){
 	addBook();
 });

});

function displayList(){
 $(".books").append("<p>"+ mybook.title +"</p>");
 $(".books").append("<p> By : "+ mybook.author +"</p>");
 $(".books").append("<img height='300px' width='200px' src='"+ mybook.imageurl +"'>");
 $(".books").append("<p><a href='"+ mybook.url +"'>Start Reading</p>");
 $(".books").append("<hr style='border-color: #ffffff'>");
 for(var i= 0; i < myToReadList.length ; i++){
	$(".books").append("<p>" + myToReadList[i].title + "</p>");
	$(".books").append("<p> By : " + myToReadList[i].author + "</p>");
	$(".books").append("<img height='300px' width='200px' src='" + myToReadList[i].imageurl + "'>");
	$(".books").append("<p><a href='" + myToReadList[i].url + "'>Start Reading</p>");
	$(".books").append("<hr style='border-color: #ffffff' border-width='10px'>");
	console.log(myToReadList[i].url);
 }
}

function clearList(){
  
  
  
}

function addBook(){
	var title = $("#title").val();
	var author = $("#author").val();
	var url = $("#url").val();
	var img = $("#image").val();
	
	$(".books").append("<p>" + title + "</p>");
	$(".books").append("<p> By : " + author + "</p>");
	$(".books").append("<img height='300px' width='200px' src='" + url + "'>");
	$(".books").append("<p><a href='" + img + "'>Start Reading</p>");
	$(".books").append("<hr style=' border-color: #ffffff' borer-width='10px'>");
}
