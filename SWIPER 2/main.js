const swiperContent = document.querySelector("#swiper-content"); // Контейнер слайдов
const loaderSlide = document.querySelector("#loader-slide");    // Слайд с лоадером
let loading = true;                                             // Переменная состояния загрузки
let backendData = null;                                         // Данные с сервера

// Функция проверки загрузки
const checkLoad = () => {
    loaderSlide.style.display = loading ? "flex" : "none";
};

// Изначальная проверка загрузки
checkLoad();

// Функция запроса данных
const requestData = async () => {
    try {
        const request = await fetch("https://fakestoreapi.com/products?limit=30");
        const data = await request.json();
        backendData = data; // Сохраняем данные
    } catch (e) {
        console.error("Error fetching data:", e);
    } finally {
        loading = false;      // Завершаем загрузку
        checkLoad();          // Скрываем лоадер
        renderSlides(backendData); // Рендерим данные в слайды
    }
};

// Функция рендера данных в слайды
const renderSlides = (data) => {
    swiperContent.innerHTML = ""; // Очищаем контейнер

    // Для каждого товара создаем отдельный слайд
    data.forEach((item) => {
        const slide = document.createElement("div");  // Создаем слайд
        slide.className = "swiper-slide flex items-center justify-center"; // Оформление слайда

        // Создаем карточку с товаром
        const card = `
            <div class="bg-white w-80 p-6 shadow-md rounded-lg">
                <img src="${item.image}" class="h-44 mx-auto" alt="${item.title}">
                <div class="card-body mt-4">
                    <h5 class="font-bold text-lg text-center">${item.title}</h5>
                    <p class="text-sm text-gray-600 text-center mt-2">${item.description.slice(0, 100)}...</p>
                    <div class="flex items-center justify-between mt-4">
                        <p class="font-bold text-emerald-500">$${item.price}</p>
                        <button class="btn btn-accent">Купить</button>
                    </div>
                </div>
            </div>
        `;

        // Вставляем карточку внутрь слайда
        slide.innerHTML = card;
        swiperContent.appendChild(slide); // Добавляем слайд в контейнер
    });

    // Инициализируем Swiper
    new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
    });
};

// Запрашиваем данные
requestData();
