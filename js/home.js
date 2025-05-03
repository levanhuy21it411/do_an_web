document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.hero-slider img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const heading = document.querySelector('.hero-content h1');
    const paragraph = document.querySelector('.hero-content p');
  
    // Biến lưu trữ chỉ số ảnh hiện tại
    let currentIndex = 0;
  
    // Dữ liệu chứa nội dung chữ tương ứng với từng ảnh
    const slideText = [
      {
         title: "Tham gia các Giải Đấu Esports Hấp Dẫn",
        description: "Cùng nhau tranh tài trong những giải đấu esport lớn, với phần thưởng cực kỳ hấp dẫn."
      },
      {
        title: "Khám phá sản phẩm Gaming Mới Nhất!",
        description: "Các thiết bị gaming chuyên nghiệp dành cho mọi game thủ, sẵn sàng chiến mọi tựa game hot."
      },
      {
         title: "Chào mừng đến với TECHSHOP – Thế giới công nghệ & Esports",
        description: "Khám phá các thiết bị gaming chất lượng cao, tham gia các giải đấu hấp dẫn và kết nối cộng đồng game thủ"
      }
    ];
  
    // Hàm chuyển ảnh và thay đổi nội dung chữ
    function changeSlide() {
      // Ẩn tất cả các ảnh
      images.forEach((image) => {
        image.classList.remove('active');
      });
  
      // Hiển thị ảnh hiện tại
      images[currentIndex].classList.add('active');
  
      // Cập nhật tiêu đề và mô tả
      heading.textContent = slideText[currentIndex].title;
      paragraph.textContent = slideText[currentIndex].description;
    }
  
    // Hàm chuyển đến ảnh tiếp theo
    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length; // Nếu đến ảnh cuối thì quay lại ảnh đầu
      changeSlide();
    }
  
    // Hàm chuyển đến ảnh trước
    function prevSlide() {
      currentIndex = (currentIndex - 1 + images.length) % images.length; // Nếu đến ảnh đầu thì quay lại ảnh cuối
      changeSlide();
    }
  
    // Gán sự kiện click cho các nút điều hướng
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
  
    // Chuyển đổi ảnh tự động mỗi 5 giây
    setInterval(nextSlide, 5000);
  
    // Hiển thị ảnh đầu tiên khi trang được tải
    changeSlide();
  });
  