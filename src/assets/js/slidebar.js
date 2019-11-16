(function() {
    var menuEl = document.getElementById('ml-menu'),
        mlmenu = new MLMenu(menuEl, {
            // breadcrumbsCtrl : true, // show breadcrumbs
            // initialBreadcrumb : 'all', // initial breadcrumb text
            backCtrl : false, // show back button
            // itemsDelayInterval : 60, // delay between each menu item sliding animation
           
        });
  
    // mobile menu toggle
    var openMenuCtrl = document.querySelector('#endregionaction--open'),
        closeMenuCtrl = document.querySelector('#action--close');
        
    if(openMenuCtrl){
    openMenuCtrl.addEventListener('click', openMenu);
    }

    if(closeMenuCtrl){
    closeMenuCtrl.addEventListener('click', closeMenu);
    }
  
    function openMenu() {
        classie.add(menuEl, 'menu--open');
        closeMenuCtrl.focus();
    }
  
    function closeMenu() {
        classie.remove(menuEl, 'menu--open');
        openMenuCtrl.focus();
    }
  
  })();