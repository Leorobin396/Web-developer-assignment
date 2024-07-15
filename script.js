$(document).ready(function () {
    $('#contact-us').on('click', function () {
        $('#contact-form').css('display', 'flex');
    });

    $('.close').on('click', function () {
        $('#contact-form').css('display', 'none');
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('#contact-form')) {
            $('#contact-form').css('display', 'none');
        }
    });

    // Handling the "READ MORE" button click
    $('#readMoreBtn').on('click', function () {
        window.open('https://www.fylehq.com/', '_blank');
    });

    // Existing dots and service items functionality
    let dots = document.querySelectorAll('.dot');
    let services = document.querySelectorAll('.service-item');
    let currentIndex = 0;

    function showService(index) {
        services.forEach((service, i) => {
            service.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showService(i);
            currentIndex = i;
        });
    });

    showService(currentIndex);
});

$(document).ready(function () {
    $('#contact-us').on('click', function () {
        $('#contact-form').css('display', 'flex');
    });

    $('.close').on('click', function () {
        $('#contact-form').css('display', 'none');
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('#contact-form')) {
            $('#contact-form').css('display', 'none');
        }
    });

    // Handling the "READ MORE" button click
    $('#readMoreBtn').on('click', function () {
        window.open('https://www.fylehq.com/', '_blank');
    });

    // Existing dots and service items functionality
    let dots = document.querySelectorAll('.dot');
    let services = document.querySelectorAll('.service-item');
    let currentIndex = 0;

    function showService(index) {
        services.forEach((service, i) => {
            service.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showService(i);
            currentIndex = i;
        });
    });

    services.forEach((service, i) => {
        service.addEventListener('mouseenter', () => {
            showService(i);
            currentIndex = i;
        });
    });

    showService(currentIndex);
});

$(document).ready(function () {
    $('#contact-us').on('click', function () {
        $('#contact-form').css('display', 'flex');
    });

    $('.close').on('click', function () {
        $('#contact-form').css('display', 'none');
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('#contact-form')) {
            $('#contact-form').css('display', 'none');
        }
    });
});