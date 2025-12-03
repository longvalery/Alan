function setHandle(){
    const items = document.querySelectorAll('section');
    items.forEach(item => {
        item.addEventListener(
            'click', 
            function(event) {
              event.stopPropagation();  
              alert(event.target.nodeName);
                            }
                             );
                          });

                    }  
setHandle();