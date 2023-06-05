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

const submit = document.getElementById('submit')
const popupAlert = document.getElementById('popupAlert')
const feedbackToUser = document.getElementById('feedbackToUser')
const nameInput = document.getElementById('nameInput')
const removePop = document.getElementById('removePop')
submit.addEventListener('click',function(e){
  

   popupAlert.classList.add('popupAlertactive')

   feedbackToUser.innerHTML=(`halo ${nameInput.value} pesan anda telah kami terima`)
})

removePop.addEventListener('click',function(e){
   popupAlert.classList.remove('popupAlertactive')
})
