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
let error = document.getElementById('error')
let feedbackToUser = document.getElementById('feedbackToUser')
let removePop = document.getElementById('removePop')

let nameInput = document.getElementById('nameInput')
let emailInput = document.getElementById('emailInput')
let masaggeInput = document.getElementById('masaggeInput')


submit.addEventListener('click', function (e) {


const nameValue =  nameInput.value;
const emailValue =  emailInput.value;
const masaggeValue =  masaggeInput.value;


if (nameValue=='') {

   error.classList.add('errorActive')
   error.innerHTML='nama tidak boleh kosong'
   focus;
   return false;
} if(emailValue=== ''){
  
   error.classList.add('errorActive')
   error.innerHTML='email tidak boleh kosong'
   focus;
   return false;
}if(masaggeValue=== ''){

   error.classList.add('errorActive')
   error.innerHTML='masagge tidak boleh kosong'
   focus;
   return false;
}

else {
   error.classList.add('errorActive')
   error.innerHTML=`terimakasih ${nameValue} pesan anda telah terkirim`
   error.style.color='green';
   error.style.border='none';
   setInterval(() => {
      error.classList.remove('errorActive')
   }, 10000);
}



      // form validation



      // if(nameValue == ""){
      //    popupAlert.classList.add('popupAlertactive')
      //     feedbackToUser.innerHTML=(` nama tidak boleh kosong`)
      //     removePop.addEventListener('click', function() {
      //       popupAlert.classList.remove('popupAlertactive')
      //       focus;
      //     return false;
      //     })

      // }
      // if(emailValue== ""){
      //    popupAlert.classList.add('popupAlertactive')
      //    feedbackToUser.innerHTML=(` email tidak boleh kosong`)
      //    removePop.addEventListener('click', function() {
      //      popupAlert.classList.remove('popupAlertactive')

         
      //      focus;
      //      return false;
      //    })

      // }
      // if(masaggeValue == ""){
      //    popupAlert.classList.add('popupAlertactive')
      //    feedbackToUser.innerHTML=(` masagge tidak boleh kosong`)
      //    removePop.addEventListener('click', function() {
      //      popupAlert.classList.remove('popupAlertactive')
      //      focus;
      //      return false;
      //    })
      // }

      // else
      // {
      //    popupAlert.classList.add('popupAlertactive')
      //    feedbackToUser.innerHTML=(` halo ${nameInput.value} pesan anda telah kami terima dengan baik`)
      //    removePop.addEventListener('click', function() {
      //      popupAlert.classList.remove('popupAlertactive')

      //    })
      // }  
   }
)

