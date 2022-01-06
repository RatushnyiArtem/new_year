$(document).ready(function(){
    $(".mental:nth-child(1) .circle").click(function(event){
        $(".mental:nth-child(1)").toggleClass("active");
    });
 });
 
 $(document).ready(function(){
    $(".mental:nth-child(2) .circle").click(function(event){
        $(".mental:nth-child(2)").toggleClass("active");
    });
 });
 
 $(document).ready(function(){
    $(".mental:nth-child(3) .circle").click(function(event){
        $(".mental:nth-child(3)").toggleClass("active");
    });
 });
 
 $(document).ready(function(){
    $(".mental:nth-child(4) .circle").click(function(event){
        $(".mental:nth-child(4)").toggleClass("active");
    });
 });
 
 $(document).ready(function(){
    $(".mental:nth-child(5) .circle").click(function(event){
        $(".mental:nth-child(5)").toggleClass("active");
    });
 });
 
 $(document).ready(function(){
    $(".mental:nth-child(6) .circle").click(function(event){
        $(".mental:nth-child(6)").toggleClass("active");
    });
 });
 let i = 1;
 for(let li of carousel.querySelectorAll('li')) {
   li.style.position = 'relative';
   i++;
 }
 let width = 400; 
 let count = 1; 
 let list = carousel.querySelector('ul');
 let listElems = carousel.querySelectorAll('li');
 let position = -20; 
 carousel.querySelector('.prev').onclick = function() {
   position += width * count;
   position = Math.min(position, 0)
   list.style.marginLeft = position + 'px';
 };
 carousel.querySelector('.next').onclick = function() {
   position -= width * count;
   position = Math.max(position, -width*count);
   list.style.marginLeft = position + 'px';
 };