

// to target an element by attribute
$('[data-trigger="dropdown"]').on('click', function (){
    var submenu = $(this).parent().find('.submenu');
    submenu.addClass('active');
    
    submenu.fadeIn(300);


    submenu.on('mouseleave', function() {
      submenu.removeClass('active');
      submenu.fadeOut(100);

    });
  });

