// jquery 
$(document).ready(function (){

    // form validation
    $('form#contact').submit(function(event) {
        const name = $('input#name').val();
        const email = $('input#email').val();
        const message = $('textarea#message').val();
    })
})