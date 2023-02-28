const initApp=()=>{
    const hamBtn=document.getElementById('hamburger-button')
    const mobileMenu=document.getElementById("hamburger-menu")
    const toggle=()=>{
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamBtn.classList.toggle('toggle-btn')
    }
    hamBtn.addEventListener('click',toggle)
    mobileMenu.addEventListener('click',toggle)
}
document.addEventListener('DOMContentLoaded',initApp)