$(document).ready(function(){


//Create an array of strings related to inspiration
    var topic = ["inspirational quotes", "inspirational humor", "inspiring nature", "inspirational family"];

//Function to display images
    function dispImg(){

        $("#gifs-here").empty();
        var input = $(this).attr("data-name");
        var limit = 10;
        var url = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=FdmuOJSslqKU6gLafd20LU84NCHTjp9W" + "&limit= " + limit;

//Ajax GET request; create div to hold images and ratings; add attributes to make animation run when called; send it to the HTML   
    $.ajax({
        url: url,
        method: "GET"
        })
        .done(function(response){
            for (var i = 0; i < limit; i++){
                var dispDiv = $("<div>");
                dispDiv.addClass("holder");

                var image = $("<img>");
                image.attr("src", response.data[i].images.original_still.url);
                image.attr("data-still", response.data[i].images.original_still.url);
                image.attr("data-animate", response.data[i].images.original.url);
                image.attr("data-state", "still");
                image.attr("class", "gif");
                dispDiv.append(image);

                var rating = response.data[i].rating;
                
                    if (rating !== "r" && rating !== "pg-13") {
                            
                        var pRating = $("<p>").text("Rating: " + rating);
                        dispDiv.append(pRating);

                        $("#gifs-here").prepend(dispDiv);
                    };
        }});
    }    

//Function to create new button for each already identified topic; create button for each added topic
    function createBtn(){
        $("#display-buttons").empty();

        for (var j = 0; j < topic.length; j++) {

            var newBtn = $("<button>");
            newBtn.attr("class", "btn btn-info btn-lg");
            newBtn.attr("id", "input");
            newBtn.attr("data-name", topic[j]);
            newBtn.text(topic[j]);
            $("#display-buttons").prepend(newBtn);
        };
    }

//Function to make animation/still work

    function animate(){

        var state = $(this).attr("data-state");
        var animatedImg = $(this).attr("data-animate");
        var stillImg = $(this).attr("data-still");

        if(state == "still"){
            $(this).attr("src", animatedImg);
            $(this).attr("data-state", "animate");
        }
        else if(state == "animate"){
            $(this).attr("src", stillImg);
            $(this).attr("data-state", "still"); 
        }
    }

    $("#submitPress").on("click",function(){

        var input = $("#user-input").val().trim();
        form.reset();
        topic.push(input);
        createBtn();
        return false;
    })

    createBtn();

    $(document).on("click", "#input", dispImg);
    $(document).on("click", ".gif", animate);
});  






    
    