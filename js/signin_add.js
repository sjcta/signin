window.onload = function(){

    var signinForm = function(){

    }

    $('form.signinForm').on("submit", function(e){

        _form = $(this);

        if(_form[0].checkValidity()===false) {
            e.preventDefault();
            e.stopPropagation();
        }
        if($("#userID").val() == "") {
            _form.addClass('invalid')
        }
        _form.addClass('was-validated');
    })
}