// فتح وغلق قائمة الهواتف
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// فتح وغلق نموذج طلب الخدمة (مودال)
const openFormBtn = document.getElementById('openFormBtn');
const closeFormBtn = document.getElementById('closeFormBtn');
const requestFormModal = document.getElementById('requestFormModal');

openFormBtn.addEventListener('click', (e) => {
  e.preventDefault();
  requestFormModal.style.display = 'block';
});
closeFormBtn.addEventListener('click', () => {
  requestFormModal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === requestFormModal) {
    requestFormModal.style.display = 'none';
  }
});

// ارسال نموذج طلب الخدمة (تجريبي بدون سيرفر)
const requestForm = document.getElementById('requestForm');
const formMessage = document.getElementById('formMessage');

requestForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // هنا ممكن تضيف إرسال البيانات عبر AJAX او API
  formMessage.style.color = 'lightgreen';
  formMessage.textContent = 'تم استلام طلبك بنجاح، شكراً لك!';

  requestForm.reset();

  setTimeout(() => {
    requestFormModal.style.display = 'none';
    formMessage.textContent = '';
  }, 3000);
});
