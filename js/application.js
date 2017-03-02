(function($) {
    $(document).ready(function() {

        $('span#typed').typed({
            strings: ["the milen", "the millenia", "the millennialist."],
            typeSpeed: 50,
            loop: true,
            backSpeed: 20,
            startDelay: 500
        });

        // $(".scroll").click(function(event){     
        //     event.preventDefault();
        //     $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
        // });

    });

})(jQuery)