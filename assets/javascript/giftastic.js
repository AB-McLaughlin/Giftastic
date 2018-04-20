//Create an array of strings related to inspiration
var topic = ["quotes", "animals", "humor", "scenic", "family", "biblical"];

//URL to search Giphy for inspiration
var url = "https://api.giphy.com/v1/gifts/search?q=" + topic + "&api_key=FdmuOJSslqKU6gLafd20LU84NCHTjp9W" + "&fqmax= " + 10;

//Loop to append buttons for each string in var topic
function topicBtn(){
    var i;
    for(i = 0; i < topic.length; i++){
        $(".btn btn-info btn-lg").append[i];
    }
}

//Call function to create buttons in html
    topicBtn();

//Onclick, retrieve GIFs
    $(".btn btn-info btn-lg").click(function(){
        $.get("url");
})

// After the gifs return from the API
$.then(function(curTopic){
    var curTopic = response.data;

//curTopic = curImage to move data
    var curImage = curTopic;

// Create an image tag
    curImage = $("<img>");

//Append curImage to 
   
})

$.then(function(response) {
   // Store results in the newTopic variable
        var newTopic = response.data;

    // Create a button with the class "btn btn-info btn-lg"
        var newTopicBtn = $("button").add(document.getElementsByClassName("btn btn-info btn-lg"));

    //newTopic = gifImage to move data
        var gifImage = newTopic;

    // Create an image tag
        var gifImage = $("<img>");

    //Append gifImage to the "newTopicBtn" button so gifs appear when pressed         
        newTopicBtn.append(gifImage);

    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
        $("#gifs-appear-here").on("click", function(){prepend(gifImage);
    })
})

//When submit button is clicked, add new topic to array
$(".btn btn-success").on("click", function(){
    topic.push(event);

    //Create a new button for new topic from array
    $(".btn btn-info btn-lg").clone().add(this).appendTo(document.body.btn-group);

    //AJAX GET request
    $.get("url");

    // Create an image tag
    var gifImage = $("<img>");

    // Append gifImage to the "newTopicBtn" button so gifs appear when pressed         
       newTopicBtn.append(gifImage);

    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
        $("#gifs-appear-here").prepend(gifDiv);
    })