$(document).ready(function () {

    // Name validation
    $('#fname').on('blur', function () {
        var input = $(this);
        var nameLength = input.val().length;

        if (nameLength >= 3) {
            input.removeClass('invalid').addClass('valid');
            input.next('.comment').text('').removeClass('nok').addClass('ok');
        }
        else {
            input.removeClass('valid').addClass('invalid');
            input.next('.comment').text('Wprowadz poprawne dane.').removeClass('ok').addClass('nok');
        }
    });

    // Last name validation
    $('#lname').on('blur', function () {
        var input = $(this);
        var nameLength = input.val().length;

        if (nameLength >= 3) {
            input.removeClass('invalid').addClass('valid');
            input.next('.comment').text('').removeClass('nok').addClass('ok');
        }
        else {
            input.removeClass('valid').addClass('invalid');
            input.next('.comment').text('Wpisz poprawne dane.').removeClass('ok').addClass('nok');
        }
    });

    //E-mail validation
    $('#email').on('blur', function () {
        var input = $(this);
        var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        var isEmail = pattern.test(input.val());

        if (isEmail) {
            input.removeClass('invalid').addClass('valid');
            input.next('.comment').text('').removeClass('nok').addClass('ok');
        }
        else {
            input.removeClass('valid').addClass('invalid');
            input.next('.comment').text('Wprowadź poprawny email.').removeClass('ok').addClass('nok');
        }
    });

    // Phone number validation
    $('#phone').on('blur', function () {
        var input = $(this);
        var pattern = /^[0-9\-\+]+$/i;
        var isPhone = pattern.test(input.val());
        var phoneLength = input.val().length;

        if (isPhone && phoneLength >= 9) {
            input.removeClass('invalid').addClass('valid');
            input.next('.comment').text('').removeClass('nok').addClass('ok');
        }
        else {
            input.removeClass('valid').addClass('invalid');
            input.next('.comment').text('Wprowadź poprawny numer.').removeClass('ok').addClass('nok');
        }
    });

    // City validation
    $('#city').change(function () {
        $(this).addClass('valid');
    });



    //Person quantity validation
    $('#person').on('blur', function () {
        var input = $(this);
        var quantity = input.val();

        if (quantity > 0 && quantity <= 10) {
            input.removeClass('invalid').addClass('valid');
            input.next('.comment').text('').removeClass('nok').addClass('ok');
        }
        else {
            input.removeClass('valid').addClass('invalid');
            input.next('.comment').text('Możliwa liczba osób od 1 do 10.').removeClass('ok').addClass('nok');
        }

    });

    // Invoice input make textarea usable.
    $('#invoice').on('click', function () {
        var input = $(this);
        var isInvoice = input.val();

        if (isInvoice) {
            $('#invoice-data').prop('disabled', false);
        }
        else {
            $('#invoice-data').prop('disabled', true);
        }

    });

    // Invoice textarea validation
    $('#invoice-data').on('blur', function () {
        var textarea = $(this);
        var invoiceData = $(this).val();
        if (invoiceData) {
            textarea.removeClass('invalid').addClass('valid');
            textarea.next('.comment').text('').removeClass("nok").addClass("ok");
        }
        else {
            textarea.removeClass("valid").addClass("invalid");
            textarea.next('.comment').text("Wpisz dane do faktury.").removeClass("ok").addClass("nok");
        }
    });

    // Submit - validation of form
    $('#btn-submit').click(function (event) {
        var fname = $('#fname');
        var lname = $('#lname');
        var email = $('#email');
        var phone = $('#phone');
        var city = $('#city');
        var person = $('#person');
        var invoiceData = $('#invoice-data');

        if (fname.hasClass('valid') &&
            lname.hasClass('valid') &&
            email.hasClass('valid') &&
            phone.hasClass('valid') &&
            city.hasClass('valid') &&
            person.hasClass('valid') &&
            invoiceData.hasClass('valid')) {
            alert("Pomyślnie wypełniono formularz.");
        }
        else {
            event.preventDefault();
            alert("Uzupełnij wszystkie pola!");
        }
    });


});