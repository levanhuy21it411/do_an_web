// Khi nội dung HTML tải xong thì bắt đầu chạy đoạn mã bên trong
document.addEventListener('DOMContentLoaded', function () {

  // Lấy tất cả các ảnh trong slider
  var images = document.querySelectorAll('.hero-slider img');

  // Lấy nút chuyển ảnh về trước và nút chuyển ảnh kế tiếp
  var prevBtn = document.querySelector('.prev-btn');
  var nextBtn = document.querySelector('.next-btn');

  // Lấy phần tiêu đề (h1) và đoạn mô tả (p) để thay đổi nội dung
  var heading = document.querySelector('.hero-content h1');
  var paragraph = document.querySelector('.hero-content p');

  // Vị trí ảnh hiện tại (bắt đầu từ ảnh đầu tiên: 0)
  var currentIndex = 0;

  // Mảng chứa tiêu đề và mô tả tương ứng với từng ảnh
  var slideText = [
    {
      title: "Join Exciting Esports Tournaments",
      description: "Compete together in major esports tournaments, with incredibly attractive prizes."
    },
    {
      title: "Discover the Latest Gaming Products!",
      description: "Professional gaming devices for all gamers, ready to conquer any hot game title."
    },
    {
      title: "Welcome to TECHSHOP – The World of Technology & Esports",
      description: "Explore high-quality gaming devices, participate in exciting tournaments, and connect with the gaming community."
    }
  ];

  // Hàm đổi ảnh và cập nhật nội dung chữ
  function changeSlide() {
    // Ẩn tất cả ảnh trước
    images.forEach(function(image) {
      image.classList.remove('active'); // Xóa class 'active' để ẩn ảnh
    });

    // Hiện ảnh đang chọn bằng cách thêm class 'active'
    images[currentIndex].classList.add('active');

    // Cập nhật tiêu đề và mô tả tương ứng với ảnh hiện tại
    heading.textContent = slideText[currentIndex].title;
    paragraph.textContent = slideText[currentIndex].description;
  }

  // Hàm chuyển sang ảnh kế tiếp
  function nextSlide() {
    // Tăng chỉ số ảnh lên 1, nếu vượt quá thì quay về ảnh đầu
    currentIndex = (currentIndex + 1) % images.length;
    changeSlide(); // Cập nhật lại hình ảnh và nội dung
  }

  // Hàm chuyển về ảnh trước đó
  function prevSlide() {
    // Giảm chỉ số ảnh, nếu nhỏ hơn 0 thì quay về ảnh cuối cùng
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeSlide(); // Cập nhật lại hình ảnh và nội dung
  }

  // Gắn sự kiện khi bấm nút '→' thì chuyển tới ảnh sau
  nextBtn.addEventListener('click', nextSlide);

  // Gắn sự kiện khi bấm nút '←' thì chuyển về ảnh trước
  prevBtn.addEventListener('click', prevSlide);

  // Tự động chuyển ảnh sau mỗi 5 giây
  setInterval(nextSlide, 5000);

  // Khi trang mới mở, hiển thị ảnh đầu tiên ngay
  changeSlide();
});
