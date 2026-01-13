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

document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('popup');
  const btnPopup = document.getElementById('ceklebihlanjut');
  const closeBtn = document.getElementById('close');

  // Munculkan pop-up hanya saat tombol diklik
  btnPopup.addEventListener('click', function(e) {
    e.preventDefault();
    popup.style.display = 'block';
  });

  // Tutup pop-up saat klik "×"
  closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
  });

  // Tutup pop-up saat klik di luar konten
  window.addEventListener('click', function(e) {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
});
