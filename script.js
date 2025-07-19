// گرفتن المنت‌ها
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const categorySelect = document.getElementById('categorySelect');
const maddahSelect = document.getElementById('maddahSelect');

// تابع فیلتر کردن نوحه‌ها
function filterNohe() {
  const category = categorySelect.value;
  const maddah = maddahSelect.value;
  const searchText = searchInput.value.toLowerCase();

  const noheList = document.querySelectorAll('.nohe');

  noheList.forEach(nohe => {
    const noheCategory = nohe.getAttribute('data-category');
    const noheMaddah = nohe.getAttribute('data-maddah');
    const noheTitle = nohe.textContent.toLowerCase();

    const matchCategory = (category === 'all' || noheCategory === category);
    const matchMaddah = (maddah === 'all' || noheMaddah === maddah);
    const matchSearch = noheTitle.includes(searchText);

    if (matchCategory && matchMaddah && matchSearch) {
      nohe.style.display = 'block';
    } else {
      nohe.style.display = 'none';
    }
  });
}

// رویدادهای تغییر دسته‌بندی و مداح
categorySelect.addEventListener('change', filterNohe);
maddahSelect.addEventListener('change', filterNohe);

// نمایش دادن select مربوط به مداح در صورت انتخاب محرم
categorySelect.addEventListener('change', () => {
  if (categorySelect.value === 'moharram') {
    maddahSelect.style.display = 'inline-block';
  } else {
    maddahSelect.style.display = 'none';
    maddahSelect.value = 'all'; // ریست
  }
});

// رویداد کلیک دکمه‌ی جستجو
searchButton.addEventListener('click', filterNohe);
