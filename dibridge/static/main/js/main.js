
var w_height = $( window ).height();

$(document).ready(function(){
    $("#nav-icon").click(function(){
        $('.main-nav_collapsed').toggleClass("open");
    });
});

$(document).ready(function(){
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
    });
});

$(document).ready(function(){
    $('#portfolio').click(function(){
        $('.portfolio-items__display').toggleClass('open');
    });
});

$('.go-to').click( function(){
    console.log("go to");
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top - w_height/4}, 1000);
    }
    return false;
});

$(window).scroll(function (event) {
    if ($(this).scrollTop() > 100) {
        $('.main-nav').addClass('fixed-top');
    }
    else if ($(this).scrollTop() <= 100) {
        $('.main-nav').removeClass('fixed-top');
    }
});



$(document).ready(function() {

    $("#owl-carousel").owlCarousel({
        items : 1,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        animateOut: 'fadeOut',

        loop:false,
        autoplay:true,
        autoplayTimeout:15000

    });

});



$(document).ready(function() {


    $("#latter_btn").click(function (e) {


        if (!$('#feed-name').val()){
            $('#feed-name').attr("placeholder", "Enter name");
            $('#feed-name').css({"border-color": "#69d6cc"});
        }
        if (!$('#feed-email').val()){
            $('#feed-email').attr("placeholder", "Enter email");
            $('#feed-email').css({"border-color": "#69d6cc"});
        }
        if (!$('#feed-phone').val()){
            $('#feed-phone').attr("placeholder", "Enter phone");
            $('#feed-phone').css({"border-color": "#69d6cc"});
        }
        else {
            $('#latter_form').submit();
            e.preventDefault();
        }
    });

    $('#latter_form').submit(function (e) {

        e.preventDefault();
        var ref = $(this).find("[required]");

        if (document.getElementById("gptr-checkbox").checked){
            var data = $('#latter_form').serialize();
        }
        else {
            $('.read_gptr').css({"color": "#68d7cd"});
            alert("If you want to send us an email, you need to confirm the agreement for the processing of your personal data")
        }
        $.ajax({
            url: '/massgen/',
            type: 'POST',
            data: data,
            success: function (data) {
                var modal2 = document.getElementById('modal2');
                var span2 = document.getElementById("close2");
                modal2.style.display = "block";
                $('#info_text').text(data[0].text_data);
                span2.onclick = function() {
                    modal2.style.display = "none";
                };
                window.onclick = function(event) {
                    if (event.target == modal2) {
                        modal2.style.display = "none";
                    }
                };

            }
        });

    });
});





var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
};
span.onclick = function() {
    modal.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};



