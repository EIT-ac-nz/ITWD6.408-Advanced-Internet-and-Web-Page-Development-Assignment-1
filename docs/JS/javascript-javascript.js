
function dog(){
	alert("This doesn't want to work so...");
	dog=document.getElementById("colours").value;
	if (dog=== 'blue'){
	document.getElementById("fish").style.backgroundColor="blue";}

}






function changeFont(){

	dog2=document.getElementById("fsize").value;
	if (dog2=== 'small'){
	document.getElementById("fish").style.fontSize="small";}

	dog2=document.getElementById("fsize").value;
	if (dog2=== 'medium'){
	document.getElementById("fish").style.fontSize="medium";}

	dog2=document.getElementById("fsize").value;
	if (dog2=== 'large'){
	document.getElementById("fish").style.fontSize="large";}

	
}



function validateAccount() {
	//Get entered data
	let enteredUser = document.getElementById("login_username").value;
	let enteredPass = document.getElementById("login_password").value;
	
	//Loop through all users and check if any matching?
	let valid = false;
	for (var i=0; i < allAccounts.length; i++) {
		if (enteredUser == allAccounts[i].user && enteredPass == allAccounts[i].pass) {
			alert("CONGRATS! YOU ARE LOGED IN!");			
			valid = true;
			break;//quit
		} 
	}
	//Until the end, no user matching.
	if (valid == false) {
		alert("SORRY! WRONG ACCOUNT");	
	}	
}	

//Data: assume we have a list of top 5 movies
let topMovies = [{id: 0, title: "Hellmann's Real Mayonnaise, 400 g", year: "$6.30", image_url: "MEDIA/mayo0.jpg"},
{id: 1, title: "BEST FOODS MAYONNAISE REAL 405G", year: "$6.90", image_url: "MEDIA/mayo1.jpg"},
{id: 2, title: "HEINZ SERIOUSLY GOOD MAYONNAISE ORIGINAL 470G", year: "$6.00", image_url: "MEDIA/mayo2.jpg"},
{id: 3, title: "Mayonnaise", year: "$13.90", image_url: "MEDIA/mayo3.jpg"},
{id: 4, title: " Kewpie Mayonnaise 500g", year: "$9.80", image_url: "MEDIA/mayo4.jpg"},
];

//------------------------------------------------------------------------------------------------------
//SLIDE SHOWS
//Slideshow: Manual
let slideIndex = 0;//Initial slide = 0
function nextSlide() {
//Change the slide_index
if (slideIndex < topMovies.length - 1) {
slideIndex++;
} else {
slideIndex = 0;
}
//Change the image source for the img
document.getElementById("manual-slide-title").innerHTML = topMovies[slideIndex].title;
document.getElementById("manual-slide-image").src = topMovies[slideIndex].image_url;
}
function previousSlide() {
//Change the slide_index
if (slideIndex > 0) {
slideIndex--;
} else {
slideIndex = topMovies.length - 1;
}
//Change the image source for the img
document.getElementById("manual-slide-title").innerHTML = topMovies[slideIndex].title;
document.getElementById("manual-slide-image").src = topMovies[slideIndex].image_url;
}

let autoIndex=0;
autoSlideShow();
function autoSlideShow() {
    if (autoIndex<topMovies.length-1){
        autoIndex++;
    }
    
    else {
        autoIndex=0;
    }
    
    document.getElementById("auto-slide-title").innerHTML=topMovies[autoIndex].title;
    document.getElementById("auto-slide-image").src=topMovies[autoIndex].image_url;
    setTimeout(autoSlideShow, 1000);
}


//------------------------------------------------------------------------------------------------------
//DROPDOWN MENU TO SELECT MOVIE
//Populate the select "options" with all the movies in the array when the page is loaded
function loadMyMovies() {
let movieSelect = document.getElementById("my-movieList");
for(var i=0; i < topMovies.length; i++) {
//Create a new child HTML node/element as "<option>" (as a child node)
let node = document.createElement("option");
//Assign option "text content" and "value" to this new node
node.value = topMovies[i].id.toString();
node.textContent = topMovies[i].title.toString();
//Append the above HTML node (option) to the parent node "movieList"
movieSelect.appendChild(node);
}
3
//Set the first movie as selected option in drop-down list
movieSelect.selectedIndex= "0";
}
//call to execute this function when loading the webpage
loadMyMovies();
//When user select an option in the dropdown menu (select), display that option
function displayMyMovie() {
//Get the selected movie "option value"
let selectedMovieIndex = document.getElementById("my-movieList").value;
document.getElementById("my-movieTitle").innerHTML = topMovies[selectedMovieIndex].title;
document.getElementById("my-movieYear").innerHTML = topMovies[selectedMovieIndex].year;
document.getElementById("my-movieImageURL").src = topMovies[selectedMovieIndex].image_url;
}

//------------------------------------------------------------------------------------------------------
//ADD NEW MOVIE TO THE LIST
//Add a new movie to the existing list
function AddItemToList() {
//Get entered item data
let newItemTitle = document.getElementById("my-movie-title").value;
let newItemYear = document.getElementById("my-movie-year").value;
let newItemUrl = document.getElementById("my-movie-image-url").value;
let newId = topMovies.length;
//Validate input before adding new item
if ((newItemTitle == "") || (newItemYear == "") || (newItemUrl == "")) {
alert("ERROR. DATA IS INCOMPLETE!");
} else {
//Add a new item
topMovies.push({id: newId, title: newItemTitle, year: parseInt(newItemYear), image_url: newItemUrl});
//document.write(allAccounts[1].user + "," + allAccounts[1].pass);
alert("NEW ITEM ADDED SUCCESSFULLY!");
//Reload the drop-down list
//Remove all current options
document.getElementById("my-movieList").options.length = 0;
//Load updated options
loadMyMovies();
//Empty the inputs
document.getElementById("my-movie-title").value = "";
document.getElementById("my-movie-year").value = "";
document.getElementById("my-movie-image-url").value = "";
}
}

//------------------------------------------------------------------------------------------------------
//ADD NEW COMMENT
//Data: Assume we have a list of existing comments stored in an array "allComments"
let allComments = [{name: "Ian", comment: "Recommended, good one"},
{name: "Aman", comment: "I don't like this product"},
{name: "John", comment: "Love it"},
];
//----------
//Load all existing comments and display them on HTML
function loadComments() {
//Loop through all comments in the array "allComments"
for (var i=0; i < allComments.length; i++) {
let name = allComments[i].name;
let comment = allComments[i].comment;
//
//Create a new HTML node/element <P> to display this comment
let node = document.createElement("P");
let textnode = document.createTextNode(name + ": " + comment);
node.appendChild(textnode);//Append the content (created TextNode) to the HTML Node (child)
let parrent_node = document.getElementById("comment-list");//Get the id of parent node "comment-list"
parrent_node.appendChild(node);//Append the above child HTML node to the parent node
}
}
5
//Call to run this loadComments function when the webpage is loaded.
loadComments();
//----------
//Add a new comment
function addComment() {
//Get entered value/data by user
let enteredCommentName = document.getElementById("comment_name").value;
let enteredCommentText = document.getElementById("comment_text").value;
//Add this new comment to the array
allComments.push({name: enteredCommentName, comment: enteredCommentText});
alert("Thank you for your comment!");
//Display this new comment on HTML page
//Create a new child HTML node/element as "<p>" (paragraph) (as a child node)
let node = document.createElement("P");
//Create a new TextNode
let textnode = document.createTextNode(enteredCommentName + ": " + enteredCommentText);
//Append the content (created TextNode) to the HTML Node (child)
node.appendChild(textnode);
//Get the id of parent node "comment-list"
let parrent_node = document.getElementById("comment-list");
//Append the above child HTML node to the parent node
parrent_node.appendChild(node);
//Clear comment box
document.getElementById("comment_name").value = "";
document.getElementById("comment_text").value = "";
}

//------------------------------------------------------------------------------------------------------
//VOTE: LIKE / DISLIKE
//Assume the current Votes are: 20 likes and 5 dislikes
let currentVotes = {like: 20, dislike: 5};
//Load the current votes to HTML page
document.getElementById("likeNumber").innerHTML = currentVotes.like;
document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
//Variables to track the clicking status
6
//RULE: Allow to vote only one: UP or DOWN
let voteStatus = {like: false, dislike: false};
//Click Like button
function like() {
//Check current status of "like" button (has been clicked or not)
if (voteStatus.like == false) {
//Increase a "Like": Increase the like number by 1
document.getElementById("likeNumber").innerHTML = currentVotes.like + 1;
//Change the background color of Like button to GREEN
document.getElementById("likeButton").style.backgroundColor = "green";
//Change the current status of "like" button: has been clicked
voteStatus.like = true;//
//Check "dislike" status - if dislike has been voted, down it by one & change status to False & change background color to white
if (voteStatus.dislike == true) {
document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
voteStatus.dislike = false;//
document.getElementById("dislikeButton").style.backgroundColor = "white";
}
} else {
//Keep the current number of like
document.getElementById("likeNumber").innerHTML = currentVotes.like;
//Change the background color of Like button to WHITE
document.getElementById("likeButton").style.backgroundColor = "white";
//Change the current status of "like" button
voteStatus.like = false;//has been clicked
}
}
//Click Dislike button
function dislike() {
//Check current status of "dislike" button (has been clicked or not)
if (voteStatus.dislike == false) {
//Increase a "disLike" by 1
document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike + 1;
//Change the background color of Like button to GREEN
document.getElementById("dislikeButton").style.backgroundColor = "green";
//Change the current status of "dislike" button
voteStatus.dislike = true;//has been clicked
//Check "like" status - if like has been voted, down it by one & change status to False & change background color to white
if (voteStatus.like == true) {
document.getElementById("likeNumber").innerHTML = currentVotes.like;
voteStatus.like = false;//
document.getElementById("likeButton").style.backgroundColor = "white";
}
} else {
//Keep the current number of of "dislike"
document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
//Change the background color of disLike button to WHITE
document.getElementById("dislikeButton").style.backgroundColor = "white";
//Change the current status of "dislike" button
voteStatus.dislike = false;//has been clicked
}

//Authentication
//Data: assume we have a list of existing users stored in an array "allAccounts"
let allAccounts = [{user: "admin", pass: "1234"}];	

function createAccount() {
	//Get entered data
	let enteredUser = document.getElementById("signup_user").value;
	let enteredPass = document.getElementById("signup_password").value;
	
	//Loop through all users and check if this user exists or not?
	let existing = false;
	for (var i=0; i < allAccounts.length; i++) {
		if (enteredUser == allAccounts[i].user) {
			alert("SORRY! THIS USER ALREADY EXIST!");			
			existing = true;
			break;//quit
		} 
	}
	//Until the end, no existing user
	if (existing == false) {
		//Add a new user
		allAccounts.push({user: enteredUser, pass: enteredPass});	
		alert("CONGRATS! YOUR ACCOUNT IS CREATED");		
	}	
}

}