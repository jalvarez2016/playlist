// quick fix for Cloud9 warning:
/* global $ */
/* global localStorage*/
/* global Storage*/
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
var myToReadList = [
	{
	    "title":"Ready Player One",
	    "author":"Earnest Cline",
	    "url":"https://books.google.com/books/about/Ready_Player_One.html?id=TQtFDwAAQBAJ&printsec=frontcover&source=kp_read_button#v=onepage&q&f=false",
	    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/61d6DhRCBSL._SX322_BO1,204,203,200_.jpg",
    },
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



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  displayList();
  $("#save").click(function(){
 	addBook();
 });
 $("#empty").click(function(){
 	clearList();
 });

});

function displayList(){
 $(".books").empty();
 for(var i= 0; i < myToReadList.length ; i++){
	$(".books").append("<div id='"+ i +"'>" + "<button class='btn btn-primary' onclick='singleDelete(" + i + ")'>Delete</button>" + "<p>" + myToReadList[i].title + "</p>" + "<p> By : " + myToReadList[i].author + "</p>" + "<img height='300px' width='200px' src='" + myToReadList[i].imageurl + "'>" + "<p><a href='" + myToReadList[i].url + "'>Start Reading</p>" + "<hr style='border-color: #ffffff' border-width='10px'>" + "</div>");
	console.log(myToReadList[i].url);
 }
}
var counter = 0;
function singleDelete(i){
  var x = document.getElementById(i);
  if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
        console.log(myToReadList[i]);
        console.log(myToReadList);
    }
  if (i === counter) {
     myToReadList.splice(i,1);
     console.log(myToReadList[i]);
     console.log(myToReadList);
  } else {
      
  }
  counter++;
}

function clearList(){
  
  $(".books").empty();
  myToReadList.splice(0);
  displayList();
  
}

function addBook(){
	var name = $("#title").val();
	var person = $("#author").val();
	var place = $("#url").val();
	var img = $("#image").val();
	//document.getElementByClass("books").innerHTML = localStorage.list;
	//$(".books").append("<div id='delete'>" + "<button class='btn btn-primary' onclick='myFunction()'>Delete</button>" + "<p>" + title + "</p>" + "<p> By : " + author + "</p>" + "<img height='300px' width='200px' src='" + url + "'>" + "<p><a href='" + img + "'>Start Reading</p>" + "<hr style=' border-color: #ffffff' borer-width='10px'>" + "</div>");
	myToReadList.push({ title : name , author : person , url : place , imageurl : img ,});
	console.log(myToReadList);
	localStorage.list = myToReadList;
	displayList();
}