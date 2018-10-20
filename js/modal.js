(function() {
  var modalBody = document.getElementsByClassName('modal-body')[0];
  var contactForm = document.getElementById('contact').cloneNode('deep');

  //change some styling of the form for the modal
  contactForm.attributes.id.value = 'contactForm'
  contactForm.children[0].classList.remove('col-12','col-sm-10', 'col-md-8', 'col-lg-6')
  contactForm.children[0].children[0].remove();
  contactForm.children[0].children[0].remove();

  modalBody.innerHTML += contactForm.outerHTML;
})()
