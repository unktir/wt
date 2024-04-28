// Получаем элементы слайдера
const carousel = document.querySelector('.carousel');
const prev_button = document.querySelector('.carousel__control-prev');
const next_button = document.querySelector('.carousel__control-next');
const carousel_items = Array.from(carousel.querySelectorAll('.carousel__item'));
const carousel_item_count = carousel_items.length;
let carousel_item_index = 0;

// Устанавливаем обработчики событий для кнопок
prev_button.addEventListener('click', showPreviousSlide);
next_button.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    carousel_item_index = (carousel_item_index - 1 + carousel_item_count) % carousel_item_count;
    updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
    carousel_item_index = (carousel_item_index + 1) % carousel_item_count;
    updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
    carousel_items.forEach((carousel_item, index) => {
        if (index === carousel_item_index) {
            carousel_item.style.display = 'block';
        } else {
            carousel_item.style.display = 'none';
        }
    });
    carousel.querySelector("#carousel_item_index").innerText = String(carousel_item_index + 1).padStart(2, '0');
    carousel.querySelector("#carousel_item_count").innerText = String(carousel_item_count).padStart(2, '0');;

}

// Инициализация слайдера
updateSlider();