// Slick slider
$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 8,

    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 4,
        }
      },
    ]
  });
});

// Save selector option in localStorage
$(function () {
  $(".select").change(function () {
    localStorage.setItem("todoData", this.value);
  });
  if (localStorage.getItem("todoData")) {
    $(".select").val(localStorage.getItem("todoData"));
  }
});


//filter for events
$(function () {
  let filter = $("[data-filter]");
  filter.on("click", function (categor) {
    categor.preventDefault();
    let cat = $(this).data('filter');
    if (cat == 'all') {
      $("[data-event]").removeClass("hide");
      $("[data-filter]").removeClass("active")
      $(this).addClass("active");
    } else {
      $("[data-event]").each(function () {
        let viewCategor = $(this).data('event');
        if (viewCategor != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      $("[data-filter]").each(function() {
        let activeFilter = $(this).data('filter');
        if (activeFilter == cat) {
          $(this).addClass("active")
        } else {
          $(this).removeClass("active")
        }
      })
      });
    }
  });
});

//Toast
$(".event__btn").click(function() {
  $.toast({
    heading: 'Information!',
    text: 'Ваша ссылка скопирована',
    showHideTransition: 'slide',
    icon: 'success'
  })
});



