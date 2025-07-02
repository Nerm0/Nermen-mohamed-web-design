
  var listItems = document.querySelectorAll('#List .list-group-item');

  listItems.forEach(item => {
    item.addEventListener('click', function () {
     
      listItems.forEach(el => el.classList.remove('active'));
    
      this.classList.add('active');
    });
  });

