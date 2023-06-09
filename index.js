// Aos Animation//
AOS.init({
   // Global settings:
   disable: false,
   startEvent: 'DOMContentLoaded',
   initClassName: 'aos-init', 
   animatedClassName: 'aos-animate', 
   useClassNames: false, 
   disableMutationObserver: false, 
   debounceDelay: 50, 
   throttleDelay: 99, 
   

   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   offset: 120, 
   delay: 0, 
   duration: 1500, 
   easing: 'ease', 
   once: false, 
   mirror: false, 
   anchorPlacement: 'top-bottom',

});
//and Aos Animation//

let submit = document.getElementById('submit')
let popupAlert = document.getElementById('popupAlert')
let feedbackToUser = document.getElementById('feedbackToUser')
let removePop = document.getElementById('removePop')

 let nameInput = document.getElementById('nameInput')
 let emailInput = document.getElementById('emailInput')
 let masaggeInput = document.getElementById('masaggeInput')


submit.addEventListener('click',function(e){

   // form validation


   if(nameInput.value== ""){
      popupAlert.classList.add('popupAlertactive')
       feedbackToUser.innerHTML=(` nama tidak boleh kosong`)
       removePop.addEventListener('click', function() {
         popupAlert.classList.remove('popupAlertactive')
         
         this.focus();
         return false ;
       })

   }
   if(emailInput.value== ""){
      popupAlert.classList.add('popupAlertactive')
      feedbackToUser.innerHTML=(` email tidak boleh kosong`)
      removePop.addEventListener('click', function() {
        popupAlert.classList.remove('popupAlertactive')
        
        this.focus();
         return false ;
      })

   }
   if(masaggeInput.value == ""){
      popupAlert.classList.add('popupAlertactive')
      feedbackToUser.innerHTML=(` masagge tidak boleh kosong`)
      removePop.addEventListener('click', function() {
        popupAlert.classList.remove('popupAlertactive')
        
        this.focus();
         return false ;
      })
   }

   else
   {
      popupAlert.classList.add('popupAlertactive')
      feedbackToUser.innerHTML=(` halo ${nameInput.value} pesan anda telah kami terima dengan baik`)
      removePop.addEventListener('click', function() {
        popupAlert.classList.remove('popupAlertactive')
        
      })
   }  
})

