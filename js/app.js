
$(document).ready(function () {
    $('.responsive').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button style="color:rgb(50 59 172); padding: 5px 10px; margin: auto 5px; border-radius: 1000px; border: 1px solid white; box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px 2px, rgba(0, 0, 0, 0.19) 0px 6px 6px 0px;"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button style="color:rgb(50 59 172); padding: 5px 10px; margin: auto 5px; border-radius: 1000px; border: 1px solid white; box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px 2px, rgba(0, 0, 0, 0.19) 0px 6px 6px 0px;"><i class="fa-solid fa-angle-right"></i></button>',

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});


const focusButton = document.getElementById("focus-button");
const inputContainer = document.getElementById("input-container");
const inputField = document.getElementById("input-field");

focusButton.addEventListener("focus", () => {
    inputContainer.style.display = "block";
    inputField.focus();
});

inputField.addEventListener("blur", () => {
    inputContainer.style.display = "none";
});


