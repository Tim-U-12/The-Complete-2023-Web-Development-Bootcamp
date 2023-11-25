// when you want the script tag in the header
$(document).ready(function() {
    $("h1").addClass("big-title margin-50 ");
    $("a").attr("href", "https://au.yahoo.com/");
    $("h1").click(function() {
        $("h1").toggleClass("blue-background");
        console.log($("h1").attr("class"));
    });

    $("h1").on("mouseover", function(){
        $("h1").css("color", "pink")
    });

    $(".hide-title").click(function() {
        $("h1").toggle();
    });

    $(document).keypress(function(event){
        $("h1").text(event.key);
    });
});

