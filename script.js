$(function () {

    let opened = false;

    $("#envelope").click(function () {

        if (!opened) {

            $(this).addClass("open");

            setTimeout(() => {
                $(this).addClass("hide-envelope");
            }, 900);

            opened = true;

        } else {

            $(this).removeClass("open hide-envelope");

            opened = false;

        }

    });

});