var res;
$(document).ready(function () {
    //берем значения формы складываем, из-за плавающей точки приводим типы, округляем
    $("#btnSum").click(function () {
        var one = $("#one").val();
        var two = $("#two").val();
        res = parseFloat(one) + parseFloat(two);
        if (isNaN(res)) {
            alert('Заполните поля');
        } else {
            alert('Результат: ' + res.toFixed(1));
            $('#result').text(res.toFixed(1));
        }
    });
    $("#one").mask('0.0');
    $("#two").mask('0.0');
});
