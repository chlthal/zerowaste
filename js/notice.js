$(document).ready(function(){

    $(".text").hide();

    $(".title").click(function(){
        if ($(this).next(".text").css("display") === "block") {
            $(".text").slideUp(700)
        } else {
            $(".text").slideUp(700);
            $(this).next(".text").slideDown(700)
        }
        $(this).find("img").hide()

        
    });

}); //jquery end