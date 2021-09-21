// jquery 
$(document).ready(function (){

    // form validation
    $('form#contact').submit(function(event) {
        const name = $('input#name').val();
        const email = $('input#email').val();
        const message = $('textarea#message').val();

        // popping a message to alert the user after filling the form
        if($("input#name").val() && $("input#email").val()) {
            alert(' Hi ' + name + 'We have received your message. Thank you for reaching out to us.')
        }
        else {
            alert('Please fill in the form')
        }
        event.preventDefault();
    })
})