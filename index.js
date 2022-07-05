//Это из урока 14.6

// let podcastsMore = document.querySelector('.podcasts__more');
// let podcasts = document.querySelectorAll('.podcasts__item');

// podcastsMore.addEventListener('click',

//   function(){

//   podcasts.forEach(function(el){
//     el.classList('podcasts__item-visible')
//   });

//   podcastsMore.closest('.podcasts__btn').classList.add('podcasts__btn-hidden');

// })


/// Этот код я нашла, немного изменила. С ним не работают плагины.
// let data = Array.from(document.querySelectorAll('.podcasts__list .podcasts__item')),
//     step = 8,
//     item = 0;

// data.slice(step).forEach(e => e.style.display = 'none');
// item += step;

// document.querySelector('.podcasts__btn').addEventListener('click', function(e){
//   let tmp = data.slice(item, item + step);
//   tmp.forEach(e => e.style.display = 'block');
//   item += step;
  
//   if(tmp.length <= 8)
//     this.remove();
// });


// let x = window.matchMedia("(max-width: 320px)")

// function myFunction(x){
//   if(x.matches) {
//     let data = Array.from(document.querySelectorAll('.podcasts__list .podcasts__item')),
//       step = 4,
//       item = 0;

//     data.slice(step).forEach(e => e.style.display = 'none');
//     item += step;

//     document.querySelector('.podcasts__btn').addEventListener('click', function(e){
//       let tmp = data.slice(item, item + step);
//       tmp.forEach(e => e.style.display = 'block');
//       item += step;
  
//     if(tmp.length < 4)
//       this.remove();
// });

//   }else{
//     let data = Array.from(document.querySelectorAll('.podcasts__list .podcasts__item')),
//       step = 8,
//       item = 0;

//     data.slice(step).forEach(e => e.style.display = 'none');
//     item += step;

//     document.querySelector('.podcasts__btn').addEventListener('click', function(e){
//       let tmp = data.slice(item, item + step);
//       tmp.forEach(e => e.style.display = 'block');
//       item += step;
  
//     if(tmp.length <= 8)
//       this.remove();
// });

//   }
// }

// myFunction(x)
// x.addEventListener(myFunction)



const element = document.querySelector('.choices');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  classNames: {
    containerOuter: 'choices header_choices',
  },
});



new Accordion('.guests__list', {
  elementClass: 'guests__item',
  triggerClass: 'guests__btn',
  panelClass: 'guests__content',
  activeClass: 'guests-active'
});


let swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 30,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const validation = new JustValidate('#form');
validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'ошибка',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'ошибка',
    },
    {
      rule: 'email',
      errorMessage: 'ошибка',
    },
  ]);