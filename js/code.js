var osszes=document.getElementsByClassName("reszek");
var adatok=document.getElementsByClassName("adatok");
for (let i = 0; i < osszes.length; i++) {
    adatok[i].classList.add("d-none");
    osszes[i].addEventListener('click',()=>{
        adatok[i].classList.add("d-none");
    });
    
    
}