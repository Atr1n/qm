const accordionHandler = document.querySelector('.quan__qu')
const accordionShow = document.querySelector('.quan__an')


accordionHandler.onclick = function(){
    accordionShow.classList.toggle('dn')
}