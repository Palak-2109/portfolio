const header = document.querySelector('.header');
const second=document.querySelector('.second');

window.onscroll=()=>{
    if(document.documentElement.scrollTop>25)
    {
        header.classList.add('colored_header');
        header.classList.remove('transparent_header');
        second.classList.remove('second');
    }
    else{
        header.classList.remove('colored_header');
        header.classList.add('transparent_header');
        second.classList.add('second');
    }
}