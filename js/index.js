document.addEventListener("DOMContentLoaded", function() {
    var progressBar = document.getElementById("progressBar");
    var score = parseInt(progressBar.getAttribute("data-score"));
    var percentage = (score / 5) * 100;
    progressBar.style.width = percentage + "%";
  });

  function toggleSubMenu(event) {
    event.preventDefault();
    var parentListItem = event.target.parentNode;
    parentListItem.classList.toggle('active');
}

$(document).ready(function(){
  $('.testimonials__slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>'
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.getElementById('overlay');
  var images = document.querySelectorAll('.thumb-link img');
  
  images.forEach(function(image) {
      image.addEventListener('click', function() {
          var imgSrc = this.getAttribute('src');
          var imgAlt = this.getAttribute('alt');
          var img = new Image();
          img.src = imgSrc;
          img.alt = imgAlt;

          var overlayContent = document.createElement('div');
          overlayContent.appendChild(img);

          overlay.innerHTML = '';
          overlay.appendChild(overlayContent);

          overlay.style.display = 'block';
      });
  });

  overlay.addEventListener('click', function() {
      this.style.display = 'none';
  });
});
