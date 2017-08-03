/*
 * Form Validation
 */

$('#form').validate({

    'blockSend': true,
    'liveValidation': true


}).on('valid', function(){

    $.ajax({
        url: 'ajax.php',
        type: 'POST',
        data: $(this).serialize(),

        success: function(data){
            $('#ajax').html(data);
        }
    });

});


/*
 * Tooltip
 */

$('.tt').tooltip({
    'message': ' Sit laboriosam distinctio omnis ratione omnis Earum et voluptatum aliquam sapiente porro Dolorem totam nemo iste hic dicta maiores Veritatis impedit quam dolores et eos Voluptate maiores alias odio corporis perferendis, explicabo Itaque fuga similique facere deleniti doloribus Recusandae consequatur quaerat cumque sapiente debitis Repellendus minima excepturi eveniet harum dignissimos ',
    'style': {
        'border-color': '#000',
        'font-size': '10px',
    }
});


/*
 * Cookies
 */

function setCookies(){

    // Read cookie if exists
    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    if (readCookie('cookieName') !== 'cookieValue') {
        //#code goes here
    }

    // Set cookie
    var date = new Date();
    date.setTime(date.getTime() + (60 * 60 * 1000) + (30 * 1000));
    document.cookie = "cookieName=cookieValue; expires=" + date.toGMTString();

}

//setCookies()

/*
 * Scroll Down On Click
 */

// TODO on VanillaJs
function scrollDown(){
    
    var scroll = document.querySelector('#scrollDown'),
        topHeight = document.querySelector('section:nth-of-type(2)').offsetHeight;

        scroll.addEventListener('click', function(e) {

        e.preventDefault();

        $('html, body').animate({
            scrollTop: $('section:nth-of-type(2)').offset().top
        }, topHeight);
    }, true);
}

// scrollDown();

