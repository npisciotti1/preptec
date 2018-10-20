//logic for handling nav items

(function() {
	//showing which nav item is 'active' i.e. highlighted
	let navItems = Array.prototype.slice.call(document.querySelectorAll('.nav-item'));

  for (var i = 0; i < navItems.length; i++) {
    var node = navItems[i];

    node.addEventListener('click',function() {
      resetClasses(navItems);
      this.className += ' active';
    })
  }

	function resetClasses(arr) {
		for(var i = 0; i < arr.length; i++) {
			var node = arr[i];
			node.classList.remove('active');
		}
	}
})();
