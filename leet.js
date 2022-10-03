const track=document.querySelector('.carousel');
const slides=Array.from(track.children);
const dot=document.querySelector('.but');
const dots=Array.from(dot.children);
const size=slides[0].getBoundingClientRect();
const width=size.width;
const setPosition=(slide,index)=>{
    slide.style.left=width*index+'px';
}
slides.forEach(setPosition);
const moveTo=(track,currslide,targetslide)=>{
    targetslide.style.left=0;
    currslide.style.left=width+'px';
    currslide.classList.remove('curr');
    targetslide.classList.add('curr');
}
dot.addEventListener('click',e=>{
    const targetdot=e.target;
    if(!targetdot) return;
    const currslide=track.querySelector('.curr');
    const currdot=dot.querySelector('.curr');
    const targetindex=dots.findIndex(dot=>dot===targetdot);
    const targetslide= slides[targetindex];
    console.log(currslide);
    console.log(targetslide);
    moveTo(track,currslide,targetslide);
})
