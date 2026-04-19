<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<svg width="0" height="0" style="position:absolute">
  <defs>
    <clipPath id="arc-clip" clipPathUnits="objectBoundingBox">
      <path d="M 1 0 C 0.429 0.184, 0.095 0.743, 0 1 L 1 1 Z"/>
    </clipPath>
  </defs>
</svg>

<svg width="0" height="0" style="position:absolute">
  <defs>
    <clipPath id="arc-clip-2" clipPathUnits="objectBoundingBox">
      <path d="M 0 0 C 0.571 0.184, 0.905 0.743, 1 1 L 0 1 Z"/>
    </clipPath>
  </defs>
</svg>

<script>
  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('mercury:load', init);

  function init(){

    if($('#a-3').length){

      const svg = document.querySelector('#cogs'); // scope to your SVG
      const cog1 = svg.querySelector('#top'); // purple,  large
      const cog2 = svg.querySelector('#bottom'); // blue,    small
      const cog3 = svg.querySelector('#center'); // white,   middle (3rd element, centre position) 

      // Radii from path bounds
      const r1 = 255.2;
      const r2 = 194.7;
      const r3 = 216.5;

      // Speed ratios relative to cog1
      const speed1 = 1;
      const speed2 = 1; //  1.31 — opposite dir
      const speed3 = 1; //  1.18 — opposite dir

      window.addEventListener('scroll', () => {
        const s = window.scrollY * 0.15; // base scroll sensitivity

        cog1.style.transform = `rotate(${s + 45}deg)`;
        cog2.style.transform = `rotate(${s * speed2}deg)`;
        cog3.style.transform = `rotate(${-s * speed3}deg)`;
      });
    }
    //load ani
    // Delay body loaded class for preload effects
    setTimeout(function () {
      $('body').addClass('loaded');
    }, 800);

    

    if($('#t-3').length){
      $('#t-3 .sqs-gallery').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        swipeToSlide: false,
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,       // no delay between scrolls
        speed: 5000,            // duration of each scroll (longer = smoother)
        cssEase: 'linear',      // makes animation smooth
        variableWidth: false,
        focusOnSelect: false,
        pauseOnHover: false,    // optional: for marquee-like widths
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      });
    }
  }
</script>

<script>
(function () {
  var speedBefore = 0.12; // change this
  var speedAfter = -0.08; // optional, opposite direction example

  var ticking = false;

  function updateParallax() {
    var scrollY = window.pageYOffset || window.scrollY || 0;

    document.body.style.setProperty('--before-parallax', (scrollY * speedBefore) + 'px');
    document.body.style.setProperty('--after-parallax', (scrollY * speedAfter) + 'px');

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  updateParallax();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
</script>