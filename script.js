// Guided Practice
$(".reply-yes").click(function() {  
    $(".homers-reply").text("Ugh! My stomach!!!!");
    $(".reply-yes").css("background-color", "orange");
    $("body").css("background-color", "brown");
    $(".homers-reply").css("color", "pink");
    $(".homers-reply").css("border", "green inset 10px");
    $(".homers-reply").css("padding", "10px");
    $(".health").slideUp();
    $(".ambulance").slideDown();
    $(".dinner").slideUp();
    $("h1").css("background-color", "red");
    $("h1").css("color", "black");
     $(".homers-reply").css("background-color", "green"); 
});

//Independent Practice (START YOUR CODE BELOW!)
	$(".reply-no").click(function() {  
    $(".homers-reply").text("Fine It's dinner time!!!");
    $(".reply-no").css("background-color", "red");
    $("body").css("background-color", "purple");
    $(".homers-reply").css("color", "white"); 
    $(".homers-reply").css("background-color", "orange"); 
    $(".homers-reply").css("border", "orange inset 10px"); 
    $(".homers-reply").css("padding", "10px"); 
    $(".dinner").slideDown();
    $(".health").slideUp();
    $(".ambulance").slideUp();
    $("h1").css("color", "red");
    $("h1").css("background-color", "purple");
});

