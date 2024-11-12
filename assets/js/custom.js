
$( document ).ready(function() {

    $("#btn_submit").click(function () {
        let email = "dvdfabiani@gmail.com";
        let subject = $("#id_title").val();
        let message = $("#id_message").val();
        window.location.href = "mailto:"+email+"?Subject="+subject+"&body="+message;
    })

});