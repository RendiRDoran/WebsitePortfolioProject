$(document).ready(function() {
    $('#bt1').click(function() {
        $('#fr1').attr('action',
                       'mailto:rendirdoran@gmail.com?subject=' +
                       $('#tb1').val() + '&body=');
        $('#fr1').submit();
    });
});