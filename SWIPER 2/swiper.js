// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: false,

//     // If we need pagination
//     // pagination: {
//     //   el: '.swiper-pagination',
//     // },

//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: { el: '.swiper-pagination' },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  scrollbar: { el: '.swiper-scrollbar' },
});
