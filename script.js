document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    const target=document.querySelector(this.getAttribute('href'));
    if(!target)return;
    e.preventDefault();
    window.scrollTo({
      top:target.offsetTop-110,
      behavior:'smooth'
    });
  });
});
