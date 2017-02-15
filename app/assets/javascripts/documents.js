$(document).ready(function() {
   const cards = document.querySelectorAll('.card');

   function highlight() {
       this.classList.add('highlight');
   }

    function unhighlight() {
        this.classList.remove('highlight');
    }

   cards.forEach(card => {
       card.addEventListener('mouseenter', highlight);
   });

   cards.forEach(card => {
       card.addEventListener('mouseout', unhighlight);
   })
});