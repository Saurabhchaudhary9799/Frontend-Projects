
let menu = document.querySelector('.menu');

let list = document.querySelectorAll('.icon-info');


menu.addEventListener("click", function(){
   for(let i=0;i<list.length;i++){
    list[i].classList.remove("hidden");
    
   }

})

let cross = document.querySelector('.crossSign');
cross.addEventListener("click",function(){
    for(let i=0;i<list.length;i++){
        list[i].classList.add("hidden");
         console.log(list[i]);
       }
})



