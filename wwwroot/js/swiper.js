//SwiperJS: effect Ds ảnh
window.callSwiperJSEffect = async () => {
    var swiper5 = new Swiper(".swiperJsEffect", {
        slidesPerView: "auto",
        loop: true,
        centeredSliders: true,
        speed: 2000,
        allowTouchMove: false,
        disableOnInteraction: false,
        autoplay: {
            delay: 2500
        },
        grabCursor: false,
        effect: "creative",
        creativeEffect: {
            prev: {
                translate: ["130%", 0, -600],
            },
            next: {
                translate: ["-130%", 0, -600],
            },
        },
    });
}

//Gọi khi trang được tải lại hoặc khi có sự kiện cần khởi tạo: Gọi trong .razor
window.initScrollAnimations = () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.classList.remove("opacity-0");

                // Thêm class animate động
                if (el.classList.contains("fadeInLeft")) {
                    el.classList.add("animate-fadeInLeft");
                }
                if (el.classList.contains("fadeInRight")) {
                    el.classList.add("animate-fadeInRight");
                }
                if (el.classList.contains("fadeInTop")) {
                    el.classList.add("animate-fadeInTop");
                }
                if (el.classList.contains("fadeInBottom")) {
                    el.classList.add("animate-fadeInBottom");
                }

                observer.unobserve(el);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll(".animate-on-scroll").forEach(el => {
        observer.observe(el);
    });
};