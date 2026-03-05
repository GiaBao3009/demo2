document.addEventListener('DOMContentLoaded', function() {
    const settingsForm = document.getElementById('settingsForm');
    const saveBtn = document.querySelector('.btn-save-main');

    // 1. Hiệu ứng khi Submit Form
    settingsForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Thêm hiệu ứng loading cho nút bấm
        saveBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status"></span> Đang lưu...';
        saveBtn.disabled = true;

        // Giả lập gửi dữ liệu lên server (2 giây)
        setTimeout(() => {
            saveBtn.innerHTML = 'Lưu thay đổi';
            saveBtn.disabled = false;

            // Kích hoạt hiệu ứng thành công
            showSuccessToast();
            
            // Thêm hiệu ứng nhảy nhẹ cho card để báo hiệu đã xong
            const card = document.querySelector('.settings-card-main');
            card.classList.add('animate__animated', 'animate__pulse');
            card.addEventListener('animationend', () => {
                card.classList.remove('animate__pulse');
            });
        }, 1500);
    });

    // 2. Hàm hiển thị thông báo thành công (Toast)
    function showSuccessToast() {
        // Tạo element toast động
        const toastHTML = `
            <div class="toast align-items-center text-white bg-success border-0 show animate__animated animate__fadeInUp" 
                 style="position: fixed; bottom: 20px; right: 20px; z-index: 1050;">
                <div class="d-flex">
                    <div class="toast-body">
                        ✅ Cập nhật cài đặt thành công!
                    </div>
                </div>
            </div>`;
        
        document.body.insertAdjacentHTML('beforeend', toastHTML);
        
        // Tự động xóa toast sau 3 giây
        setTimeout(() => {
            const toast = document.querySelector('.toast');
            if(toast) {
                toast.classList.replace('animate__fadeInUp', 'animate__fadeOutDown');
                setTimeout(() => toast.remove(), 500);
            }
        }, 3000);
    }

    // 3. Hiệu ứng hover cho các item trong sidebar
    const menuItems = document.querySelectorAll('.list-group-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            if(!item.classList.contains('active')) {
                item.style.paddingLeft = '30px';
            }
        });
        item.addEventListener('mouseleave', () => {
            item.style.paddingLeft = '20px';
        });
    });
});