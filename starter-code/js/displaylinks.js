const list=document.querySelector(".links");
const down=document.querySelector(".open");



let isOpen=false;
down.addEventListener("click",()=>{
    console.log("down button clicked");
    
    if (!isOpen) {
        console.log("open");
        list.classList.add("active");
        down.src = 'assets/shared/icon-close.svg'; // Switch to close icon
    } else {
        list.classList.remove("active");
        console.log("close");
        down.src = 'assets/shared/icon-hamburger.svg'; // Switch back to menu icon
    }
    isOpen = !isOpen;
});