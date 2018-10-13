(function() {

  //for handling hamburger clicks
  document.getElementById('hamburger')
    .addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();

      this.classList.toggle('active');

      document.getElementById('slideoutNav')
        .classList.toggle('slideoutActive');

      document.getElementById('fullscreen-trigger')
        .classList.toggle('active');

      document.getElementById('page-wrapper')
      .classList.toggle('active');

    })
})();
