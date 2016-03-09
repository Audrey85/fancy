   // nav qui se déplie
   $(function() {
        $(".dropdown").hover(
            function(){ $(this).addClass('open') 
        },
            function(){ $(this).removeClass('open') }
        );
    });


// nav fixe
      var $logo = $('.text-intro2');
          $(document).scroll(function() {
              if($(this).scrollTop()> 1340)
              {   
               $('.text-intro2').css("display", "block");
              }else{
                   $('.text-intro2').css("display", "none");
              }

          });

