// ========== СМЕНА ТЕМЫ ==========
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

// Проверяем сохраненную тему
const savedTheme = localStorage.getItem('theme') || 'light';

// Применяем тему при загрузке
if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    if (themeIcon) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
} else {
    document.documentElement.classList.remove('dark');
    if (themeIcon) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Обработчик клика по кнопке смены темы
if (themeToggle && themeIcon) {
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        
        if (isDark) {
            document.documentElement.classList.remove('dark');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
            console.log('Тема изменена на светлую');
        } else {
            document.documentElement.classList.add('dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
            console.log('Тема изменена на темную');
        }
    });
}

// ========== МОБИЛЬНОЕ МЕНЮ ==========
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        });
    });
}

// Закрытие мобильного меню при клике вне его
document.addEventListener('click', (e) => {
    if (navLinks && mobileMenuBtn && 
        !navLinks.contains(e.target) && 
        !mobileMenuBtn.contains(e.target) && 
        navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
    }
});

// ========== ГЛАДКАЯ ПРОКРУТКА ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ========== ФИЛЬТРАЦИЯ ПОРТФОЛИО ==========
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

if (filterBtns.length > 0 && portfolioItems.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Удаляем активный класс со всех кнопок
            filterBtns.forEach(b => b.classList.remove('active'));
            // Добавляем активный класс нажатую кнопку
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ========== ФОРМА КОНТАКТОВ ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Анимация отправки
        submitBtn.textContent = 'Отправка...';
        submitBtn.disabled = true;
        
        // Имитация отправки
        setTimeout(() => {
            alert(`Спасибо, ${name}! Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.`);
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// ========== ЭФФЕКТ ПРИ ПРОКРУТКЕ ХЕДЕРА ==========
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
});

// ========== МОДАЛЬНЫЕ ОКНА ==========
const modals = document.querySelectorAll('.modal');

// Функция открытия модального окна
function openModal(modalId) {
    console.log('Попытка открыть модальное окно:', modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('Модальное окно открыто:', modalId);
    } else {
        console.error('Модальное окно не найдено:', modalId);
    }
}

// Функция закрытия модального окна
function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Обработчики для всех модальных окон
modals.forEach(modal => {
    // Закрытие по кнопке
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            closeModal(modal);
        });
    }
    
    // Закрытие по клику вне модального окна
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
});

// Закрытие по клавише ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modals.forEach(modal => {
            if (modal.classList.contains('active')) {
                closeModal(modal);
            }
        });
    }
});

// ========== ОБРАБОТЧИКИ ДЛЯ КАРТОЧЕК ОБРАЗОВАНИЯ ==========
document.querySelectorAll('.education-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Проверяем, не кликнули ли на кнопку внутри карточки
        if (!e.target.classList.contains('btn-view-doc') && 
            !e.target.closest('.btn-view-doc')) {
            const modalId = card.getAttribute('data-modal');
            console.log('Клик по карточке образования, modalId:', modalId);
            if (modalId) {
                openModal(modalId);
            }
        }
    });
});

// Обработчики для кнопок в карточках образования
document.querySelectorAll('.btn-view-doc').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // Останавливаем всплытие
        const card = button.closest('.education-card');
        const modalId = card.getAttribute('data-modal');
        console.log('Клик по кнопке в карточке, modalId:', modalId);
        if (modalId) {
            openModal(modalId);
        }
    });
});

// ========== ОБРАБОТЧИКИ ДЛЯ КАРТОЧЕК СЕРТИФИКАТОВ ==========
document.querySelectorAll('.certificate-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Проверяем, не кликнули ли на кнопку внутри карточки
        if (!e.target.classList.contains('btn-view-cert') && 
            !e.target.closest('.btn-view-cert')) {
            const modalId = card.getAttribute('data-modal');
            console.log('Клик по карточке сертификата, modalId:', modalId);
            if (modalId) {
                openModal(modalId);
            }
        }
    });
});

// Обработчики для кнопок в карточках сертификатов
document.querySelectorAll('.btn-view-cert').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // Останавливаем всплытие
        const card = button.closest('.certificate-card');
        const modalId = card.getAttribute('data-modal');
        console.log('Клик по кнопке в сертификате, modalId:', modalId);
        if (modalId) {
            openModal(modalId);
        }
    });
});

// ========== АНИМАЦИИ ПРИ ПРОКРУТКЕ ==========
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.education-card, .certificate-card, .portfolio-item, .experience-card, .skill-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Устанавливаем начальное состояние для анимированных элементов
document.querySelectorAll('.education-card, .certificate-card, .portfolio-item, .experience-card, .skill-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Инициализация анимаций
window.addEventListener('load', () => {
    setTimeout(() => {
        animateOnScroll();
    }, 300);
});

window.addEventListener('scroll', () => {
    animateOnScroll();
});

// ========== ОБНОВЛЕНИЕ ГОДА В ФУТЕРЕ ==========
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('footer p');
    if (yearElement && yearElement.textContent.includes('2025')) {
        yearElement.textContent = yearElement.textContent.replace('2025', currentYear);
    }
});

// ========== ЛОГИРОВАНИЕ ДЛЯ ОТЛАДКИ ==========
console.log('Скрипт загружен успешно!');
console.log('Кнопка смены темы:', themeToggle ? 'найдена' : 'не найдена');
console.log('Карточки образования:', document.querySelectorAll('.education-card').length);
console.log('Карточки сертификатов:', document.querySelectorAll('.certificate-card').length);
console.log('Модальные окна:', document.querySelectorAll('.modal').length);

// ========== ФИКСИРОВАННАЯ ШАПКА ПРИ СКРОЛЛЕ ==========
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    
    if (header) {
        if (scrollPosition > 100) {
            header.classList.add('header-scrolled');
            // Добавляем отступ для body, чтобы контент не заезжал под фиксированную шапку
            document.body.style.paddingTop = header.offsetHeight + 'px';
        } else {
            header.classList.remove('header-scrolled');
            document.body.style.paddingTop = '0';
        }
    }
});

// ========== ГЛАДКАЯ ПРОКРУТКА ДЛЯ НАВИГАЦИИ ==========
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Закрываем мобильное меню, если оно открыто
            const navLinks = document.getElementById('navLinks');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (mobileMenuBtn) {
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
            
            // Рассчитываем позицию с учетом шапки
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});