let myAct = document.querySelectorAll('.ac');
myAct.forEach(function(elem) {
    elem.addEventListener("click",function(e){
        console.log(elem)
        if(e.target.classList.contains('ac')){
            e.target.classList.toggle('rotat');
            e.target.previousElementSibling.classList.toggle('redd');
            e.target.nextElementSibling.classList.toggle('off');
        }
    });
});
