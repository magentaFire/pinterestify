(($) => {
    $.fn.pinterestify = function (options) {
      console.log( "plugin!!!", options);
      for (const option of options.data) {
        const container = `<div class="container"><div class="container-inside btn" data-popup-open="popup-1"></div></div>`;
        const image = `<img src="${option.image_url}">`;
        const title = `<h3> ${option.title} </h3>`;
        const description = `<h5> ${option.description} </h5>`;
        const user = `<p> user:${option.user} <br> username:${option.username} </p>`;
        const hashtag = `<p> #${option.hashtag} </p>`;
        $('#imagenes').append(container);
        $(".container-inside").append(title, description, hashtag, image, user);
      }  
      return this;
    },
    $.fn.modalify = function () {
      const containers = `
      <div class="popup" data-popup="popup-1">
      <div class="popup-inner"></div>
      </div>
      `;
      const modalTitle = '<h2 class="modal-title"></h2>';
      const modalImage = '<img src="" class="modal-image">'
      const textoCerrar = '<p><a data-popup-close="popup-1" href="#">Close</a></p>'
      const botonCerrar = '<a class="popup-close" data-popup-close="popup-1" href="#">x</a>'

      $('footer').append(containers);
      $('.popup-inner').append(modalTitle, textoCerrar, botonCerrar);

      $(function() {
        //----- OPEN
        $('[data-popup-open]').on('click', function(e)  {
          const targeted_popup_class = jQuery(this).attr('data-popup-open');
          $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
          console.log($(this).find('h3'));

    
          e.preventDefault();
        });
    
        //----- CLOSE
        $('[data-popup-close]').on('click', function(e)  {
          const targeted_popup_class = jQuery(this).attr('data-popup-close');
          $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
    
          e.preventDefault();
        });
      });
    }
})(jQuery);
