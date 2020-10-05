$(function() {

    /*start the header and the navbar settings*/
    //make the header has the full height of the window once you open the page (very important)
    $('.header').height($(window).height());

    //make the header has the full height of the window on resizing the window
    $(window).resize(function() {
        $(".header").height($(window).height());
    });

    //open the contents of the menu once click the menu
    $(".fa-bars").click(function() {
        $(".contents").slideToggle(400);
    });

    //sync the sections of the page withe each option of the menu contents, by scrolling to the specified section
    $(".contents .option").each(function() {
        $(this).click(function() {
            $("html, body").animate({
                scrollTop: $("#" + $(this).data("scroll")).offset().top
            }, 1000);
        });
    });
    
    //sync the our works and hire us buttons in the header with their specified sections
    $("#header .buttons button").each(function() {
        $(this).click(function(){
            $("html, body").animate({
                scrollTop: $($(this).data("scroll")).offset().top
            }, 1000);
        });
    });

    //scrool to the categories section once you click on the chevron down arrow in the header
    $(".down i.fa-chevron-down").click(function() {
            $("html, body").animate({
                scrollTop: $("#" + $(this).data("scroll")).offset().top
            }, 1000);
    });
    /*end the header and the navbar settings*/

    /*start our-works section div*/
    //show the hidden-works div once you click on the show more button and fadeout the hidden-works div again once you click on the collapse button
    $("#our-works .show-more").on("click", function() {
        if(!$(this).hasClass("collapse")) {
            $(".hidden-works").css("display", "flex");
            $(this).text("Collapse").addClass("collapse");
        
        } else {
            $(".hidden-works").fadeOut(400);
            $(this).text("Show More").removeClass("collapse");
        };
    
    });
    /*end our-works section div*/
    
    /*start testimonials section settings*/
    let leftArrow  = $("#testimonials i.fa-chevron-left"),
        rightArrow = $("#testimonials i.fa-chevron-right");
    
    //check if the opinion div is the last or first child
    function check() {
        if ($("#testimonials .opinion.active").is(":first-child")) {
            leftArrow.hide();
        } else {
            leftArrow.show();
        }

        if ($("#testimonials .opinion.active").is(":last-child")) {
            rightArrow.hide();
        } else {
            rightArrow.show();
        }
    };

    check();

    //when click on the left arrow 
    leftArrow.click(function() {
        $("#testimonials .opinion.active").removeClass("active").fadeOut().prev().addClass("active").fadeIn()
        check();
    });

    //when click on the right arrow
    rightArrow.click(function() {
        $("#testimonials .opinion.active").removeClass("active").fadeOut().next().addClass("active").fadeIn()
        check();
    });
    /*end testimonials section settings*/

    /*start our team section settings*/
    //once you click the bullet
    $("#our-team .bullets .bullet").each(function() {
        $(this).click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            $(".team .person[data-person = '" + $(this).data('person') + "']").addClass("active").siblings().removeClass("active");
        });
    });

    //once you click on the person div
    $("#our-team .team .person").each(function() {
        $(this).click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            $("#our-team .bullets .bullet[data-person = '" + $(this).data('person') + "']").addClass("active").siblings().removeClass("active");
        });
    });
    /*end our team section settings*/

    // Trigger Nice Scroll Plugin
    $('html').niceScroll({
        cursorcolor: '#f7600e',
        cursorwidth: 15,
        cursorborderradius: 0,
        cursorborder: '1px solid #f7600e'
    
    });

});