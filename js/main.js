let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link)=>{
    link.addEventListener('click',()=>{
        changeActiveLink(link)
    })
})
function changeActiveLink(link){
    document.querySelector('.nav-item .active').classList.remove('active')
    link.classList.add('active')
}