var res;
$(document).ready(function () {
    //берем значения формы складываем, из-за плавающей точки приводим типы, округляем
    $("#btnSum").click(function () {
        let one = $("#one").val();
        let two = $("#two").val();
        res = parseFloat(one) + parseFloat(two);
        if (isNaN(res)) {
            alert('Заполните поля');
        } else {
            let vid = res.toFixed(1);
            //проверяем есть ли остаток чтобы красиво вывести целое число
            if (vid%1 === 0) {
                alert('Результат: ' + parseInt(vid));
                $('#result').text(parseInt(vid));
            } else {
                alert('Результат: ' + vid);
                $('#result').text(vid);
            }

        }
    });
    $("#one").mask('9999.9999');
    $("#two").mask('9999.9999');
});
