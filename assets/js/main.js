(function($) {
  "use strict";
  

  window.addEventListener('load', () => {
        
    // menu 
      $('.siteBar-btn').click( function (){ 
        $('.mobile-menu').toggleClass('siteBar');
        $('.siteBar-btn').toggleClass('animate');
      }); 

    
      // Sticky  Header
      function StickyHeader() {
        let header = document.querySelector('.header-area')
        window.addEventListener('scroll', (e) => {
          if (window.pageYOffset > 30) {
            header.style.background = '#000000';
            header.style.padding = '20px';
          }else{
            header.style.background = '#0000';
            header.style.padding = '30px';
          }
        })
      }
      StickyHeader()

 
      function vali() {
        const form = document.querySelector('form');
        const sendd = document.querySelector('.form-bottom-wrp button');
        sendd.addEventListener('click', (e) => {
          e.preventDefault()

          var msg     = document.querySelector('.msg');
          var timeSlot= document.querySelector('#time');
          var work    = document.querySelector('#work');
          var fname   = document.querySelector('#fname'); 
          var lname   = document.querySelector('#lname'); 
          var email   = document.querySelector('#email'); 
          var number  = document.querySelector('#number');
          var checkit = document.querySelector('#checkit'); 


          
          
          if (timeSlot.value.length > 0 && work.value.length > 0 && fname.value.length > 0 && lname.value.length > 0 && email.value.length > 0 && number.value.length > 0 && checkit.checked) {
            MailSending()
          }

          if (checkit.checked == false){
            checkit.parentElement.classList.add('empty')
          } else {
            checkit.parentElement.classList.remove('empty')
          } 
          if (timeSlot.value <= 0) {
            timeSlot.classList.add('empty')
          }else{
            timeSlot.classList.remove('empty')
          }
          if (work.value.length <= 0) {
            work.classList.add('empty')
          }else{
            work.classList.remove('empty')
          }
          if (fname.value.length <= 0) {
            fname.classList.add('empty')
          }else{
            fname.classList.remove('empty')
          }
          if (lname.value.length <= 0) {
            lname.classList.add('empty')
          }else{
            lname.classList.remove('empty')
          }
          if (email.value.length <= 0) {
            email.classList.add('empty')
          }else{
            email.classList.remove('empty')
          }
          if (number.value.length <= 0) {
            number.classList.add('empty')
          }else{
            number.classList.remove('empty')
          }  
 
          // Mail sending
          function MailSending() { 
            $.ajax({
                type: 'POST',
                url: 'phpmailer/mail.php',
                cache: false,
                data: {time: timeSlot.value,work: work.value,fname: fname.value,lname: lname.value,email: email.value,number: number.value,checkit: checkit.value},
                beforeSend: function () {
                  msg.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Sending...</strong></div>`  
                },
                success: function (data) {
                  msg.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                  <strong>Holy ${fname.value}!</strong> ${data}
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`
                  setTimeout(() => {
                    msg.innerHTML = " "
                  }, 5000);

                  timeSlot.value = ""
                  work.value = ""
                  fname.value = ""
                  lname.value = ""
                  email.value = ""
                  number.value = ""
                  checkit.value = ""

                },
                error: function(err) {
                  console.log(err)
                }
            })   
          } 
 

        })
      }
      vali()




      // owlCarousel
      $(".testimonials").owlCarousel({
        loop: true,
        margin:200,
        items: 1, 
        nav: false,
        dots: false,
        // autoplay: true,
      });


      /* magnificPopup img view */
      $(".mfg-popup").magnificPopup({
        type: "iframe"
      }); 
 
  })
 
})(jQuery);
