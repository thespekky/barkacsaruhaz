var osszes=document.getElementsByClassName("reszek");
var adatok=document.getElementsByClassName("adatok");
var buttonok=document.getElementsByClassName("button");
for (let i = 0; i < osszes.length; i++) {
    adatok[i].classList.add("d-none");
    buttonok[i].addEventListener('click',()=>{
        adatok[i].classList.add("d-none");
        switch (buttonok[i].value) {
            case "Bükk":
                adatok[i].classList.remove("d-none");
                for (let j = 0; j < osszes.length; j++) {
                    if (adatok[i]!=adatok[j]) {
                        adatok[j].classList.add("d-none");
                    }
                    
                }
                break;
            case "Cseresznye":
                adatok[i].classList.remove("d-none");
                for (let j = 0; j < osszes.length; j++) {
                    if (adatok[i]!=adatok[j]) {
                        adatok[j].classList.add("d-none");
                    }
                    
                }
                break;
            
            case "Dió":
                adatok[i].classList.remove("d-none");
                for (let j = 0; j < osszes.length; j++) {
                    if (adatok[i]!=adatok[j]) {
                        adatok[j].classList.add("d-none");
                    }
                    
                }
                break;
            case "Mahagóni":
                adatok[i].classList.remove("d-none");
                for (let j = 0; j < osszes.length; j++) {
                    if (adatok[i]!=adatok[j]) {
                        adatok[j].classList.add("d-none");
                    }
                    
                }
                break;
            case "Tölgy":
                adatok[i].classList.remove("d-none");
                for (let j = 0; j < osszes.length; j++) {
                    if (adatok[i]!=adatok[j]) {
                        adatok[j].classList.add("d-none");
                    }
                    
                }
                break;
            
            default:
                break;
        }
       
    });
   
    
    
}