// ===== Internationalization (i18n) =====
const translations = {
    ru: {
        "page.title": "AI для БП - Интеллектуальная автоматизация бизнес-процессов",
        "nav.features": "Возможности",
        "nav.results": "Результаты",
        "nav.pricing": "Тарифы",
        "nav.start": "Начать",
        "hero.label": "Автоматизация управления бизнес-процессами",
        "hero.title": "Интеллект на <span class=\"accent\">службе процессов</span>",
        "hero.description": "Тратите много времени на рутину? Ошибки в аналитике замедляют решения? Расходы на персонал растут?",
        "hero.pain1": "Ручная обработка заявок и документов съедает часы команды",
        "hero.pain2": "Потери из-за ошибок и нестыковок в процессах",
        "hero.pain3": "Дорогой операционный контур без масштабирования",
        "hero.solution": "AI for BP берет рутину на себя: анализирует данные, выявляет узкие места и формирует регламенты, чтобы команда занималась ростом, а не ручными задачами.",
        "hero.demo": "Попробовать демо",
        "hero.consult": "Записаться на аудит",
        "pillars.title": "Четыре столпа платформы",
        "pillars.subtitle": "Полный цикл управления бизнес-процессами",
        "pillar1.title": "Анализ и формализация",
        "pillar1.desc": "Загрузите документы, схемы, аудиозаписи или видео. ИИ анализирует все источники и автоматически формализует процесс, выявив проблемы и неясности.",
        "pillar1.f1": "Поддержка всех форматов файлов",
        "pillar1.f2": "Автоматическое выявление проблем",
        "pillar1.f3": "Анализ логических разрывов и дублирования",
        "pillar1.f4": "GAP анализ",
        "pillar2.title": "Интерактивный диалог",
        "pillar2.desc": "Обсуждайте процесс с ИИ-помощником. Отвечайте на вопросы, уточняйте детали, рассматривайте предложения по оптимизации в режиме реального времени.",
        "pillar2.f1": "Текстовый и голосовой интерфейс",
        "pillar2.f2": "Итеративное уточнение процесса",
        "pillar2.f3": "Рекомендации по оптимизации",
        "pillar3.title": "Автогенерация документации",
        "pillar3.desc": "Система автоматически создает все необходимые документы: схемы BPMN, регламенты, инструкции, шаблоны, RACI-матрицы и многое другое.",
        "pillar3.f1": "BPMN 2.0 диаграммы",
        "pillar3.f2": "Текстовые регламенты и инструкции",
        "pillar3.f3": "Матрицы ответственности",
        "pillar3.f4": "Поддержка консистентности",
        "pillar4.title": "Управление версиями",
        "pillar4.desc": "Храните все версии процессов со статусами: в разработке, рабочий, архивный. Отслеживайте историю изменений и возвращайтесь к любой версии.",
        "pillar4.f1": "Полная история изменений",
        "pillar4.f2": "Управление статусами версий",
        "pillar4.f3": "Сравнение и откат версий",
        "metrics.title": "Результаты внедрения",
        "metric1.label": "Сокращение времени на формализацию",
        "metric1.desc": "Было: согласование процесса неделями → Стало: формализация за 2–3 дня",
        "metric2.label": "Снижение ошибок в процессах",
        "metric2.desc": "Было: скрытые ошибки в регламентах → Стало: автоматическая проверка противоречий",
        "metric3.label": "Ускорение адаптации сотрудников",
        "metric3.desc": "Было: долгий онбординг → Стало: сотрудники входят в процессы в 3 раза быстрее",
        "metric4.label": "Экономия vs. традиционных BPM",
        "metric4.desc": "Было: высокие затраты на ручной контур → Стало: до 60% экономии на операционных расходах",
        "why.title": "Почему именно мы",
        "why.subtitle": "Сравнение подходов",
        "table.criteria": "Критерий",
        "table.without": "Без системы",
        "table.traditional": "Традиционные BPM",
        "table.aibp": "AI для БП",
        "table.r1": "Затраты на внедрение",
        "table.r2": "Ежемесячные затраты",
        "table.r3": "Срок внедрения",
        "table.r4": "ИИ-анализ и оптимизация",
        "table.r5": "Поддержка разных форматов",
        "table.r6": "Интерактивный диалог",
        "table.r6val": "Чат + Голос",
        "table.r7": "Необходимость консультантов",
        "yes": "Да",
        "no": "Нет",
        "table.any": "Любые",
        "pricing.title": "Тарифные планы",
        "pricing.subtitle": "Прозрачное ценообразование. Нет скрытых платежей.",
        "pricing.starter": "Стартовый",
        "pricing.starter-desc": "Для малого бизнеса (до 10 процессов)",
        "pricing.s1": "✅ До 10 бизнес-процессов",
        "pricing.s2": "✅ До 5 активных пользователей",
        "pricing.s3": "✅ ИИ-анализ и формализация",
        "pricing.s4": "✅ Управление версиями",
        "pricing.s5": "❌ Интеграции с системами",
        "pricing.choose": "Выбрать",
        "pricing.popular": "Популярный",
        "pricing.pro": "Профессиональный",
        "pricing.pro-desc": "Для среднего бизнеса (до 50 процессов)",
        "pricing.p1": "✅ До 50 бизнес-процессов",
        "pricing.p2": "✅ До 25 активных пользователей",
        "pricing.p3": "✅ Все из тарифа \"Стартовый\"",
        "pricing.p4": "✅ Интеграция с 1С, CRM, ERP",
        "pricing.p5": "✅ API для внешних систем",
        "pricing.start": "Начать",
        "pricing.enterprise": "Корпоративный",
        "pricing.onrequest": "По запросу",
        "pricing.ent-desc": "Для крупного бизнеса (неограниченно)",
        "pricing.e1": "✅ Неограниченные процессы",
        "pricing.e2": "✅ Неограниченные пользователи",
        "pricing.e3": "✅ Все из тарифа \"Профессиональный\"",
        "pricing.e4": "✅ Выделенная инфраструктура",
        "pricing.e5": "✅ On-premise установка",
        "pricing.consult": "Консультация",
        "demo.title": "Готовы попробовать?",
        "demo.subtitle": "Выберите удобный следующий шаг",
        "demo.lead.title": "Скачайте чек-лист: 10 процессов, которые можно делегировать ИИ уже завтра",
        "demo.lead.desc": "Полезный материал для быстрой оценки точек автоматизации в вашей компании.",
        "demo.lead.button": "Получить чек-лист",
        "demo.audit.title": "Запишитесь на бесплатный 15-минутный аудит ваших процессов",
        "demo.audit.desc": "Определим точки роста и приоритетные сценарии внедрения AI под ваш контур.",
        "demo.audit.button": "Записаться на аудит",
        "demo.quiz.title": "Узнайте, сколько ресурсов сэкономит внедрение нейросетей в ваш отдел",
        "demo.quiz.desc": "Для отделов продаж, маркетинга, HR и операционных команд.",
        "demo.quiz.button": "Рассчитать экономию",
        "contact.title": "Обратитесь к нам",
        "contact.info": "Контактные данные",
        "contact.email": "Email:",
        "contact.phone": "Телефон:",
        "contact.telegram": "Telegram:",
        "form.name": "Имя",
        "form.email": "Email",
        "form.phone": "Телефон",
        "form.company": "Компания",
        "form.message": "Сообщение",
        "form.send": "Отправить",
        "footer.desc": "Интеллектуальная платформа для автоматизации бизнес-процессов",
        "footer.product": "Продукт",
        "footer.features": "Возможности",
        "footer.pricing": "Тарифы",
        "footer.demo": "Демо",
        "footer.company": "Компания",
        "footer.contact": "Контакты",
        "footer.blog": "Блог",
        "footer.about": "О проекте",
        "footer.docs": "Документы",
        "footer.terms": "Условия использования",
        "footer.privacy": "Политика конфиденциальности",
        "footer.copyright": "&copy; 2026 AI для БП. Все права защищены."
    },
    en: {
        "page.title": "AI for BP - Intelligent Business Process Automation",
        "nav.features": "Features",
        "nav.results": "Results",
        "nav.pricing": "Pricing",
        "nav.start": "Start",
        "hero.label": "Business Process Management Automation",
        "hero.title": "Intelligence at the <span class=\"accent\">service of processes</span>",
        "hero.description": "Spending too much time on routine tasks? Analytics errors slowing decisions? Staffing costs rising?",
        "hero.pain1": "Manual handling of requests and documents consumes team hours",
        "hero.pain2": "Losses caused by process errors and mismatches",
        "hero.pain3": "Expensive operations without scalable output",
        "hero.solution": "AI for BP takes routine work off your team: analyzes data, detects bottlenecks, and generates documentation so people can focus on growth.",
        "hero.demo": "Try Demo",
        "hero.consult": "Book an Audit",
        "pillars.title": "Four Pillars of the Platform",
        "pillars.subtitle": "Complete business process management cycle",
        "pillar1.title": "Analysis and Formalization",
        "pillar1.desc": "Upload documents, diagrams, audio or video. AI analyzes all sources and automatically formalizes the process, identifying problems and ambiguities.",
        "pillar1.f1": "Support for all file formats",
        "pillar1.f2": "Automatic problem detection",
        "pillar1.f3": "Analysis of logical breaks and duplication",
        "pillar1.f4": "GAP analysis",
        "pillar2.title": "Interactive Dialog",
        "pillar2.desc": "Discuss the process with an AI assistant. Answer questions, clarify details, consider optimization suggestions in real time.",
        "pillar2.f1": "Text and voice interface",
        "pillar2.f2": "Iterative process refinement",
        "pillar2.f3": "Optimization recommendations",
        "pillar3.title": "Auto-Documentation Generation",
        "pillar3.desc": "The system automatically generates all necessary documents: BPMN diagrams, regulations, instructions, templates, RACI matrices and much more.",
        "pillar3.f1": "BPMN 2.0 diagrams",
        "pillar3.f2": "Text regulations and instructions",
        "pillar3.f3": "Responsibility matrices",
        "pillar3.f4": "Consistency support",
        "pillar4.title": "Version Management",
        "pillar4.desc": "Store all process versions with statuses: in development, production, archived. Track change history and revert to any version.",
        "pillar4.f1": "Complete change history",
        "pillar4.f2": "Version status management",
        "pillar4.f3": "Version comparison and rollback",
        "metrics.title": "Implementation Results",
        "metric1.label": "Reduction in formalization time",
        "metric1.desc": "Before: process approvals took weeks → After: formalization in 2–3 days",
        "metric2.label": "Error reduction in processes",
        "metric2.desc": "Before: hidden policy errors → After: automated contradiction checks",
        "metric3.label": "Employee adaptation acceleration",
        "metric3.desc": "Before: long onboarding cycles → After: teams ramp up 3x faster",
        "metric4.label": "Savings vs. traditional BPM",
        "metric4.desc": "Before: high manual operations cost → After: up to 60% OPEX savings",
        "why.title": "Why Choose Us",
        "why.subtitle": "Comparison of approaches",
        "table.criteria": "Criteria",
        "table.without": "Without system",
        "table.traditional": "Traditional BPM",
        "table.aibp": "AI for BP",
        "table.r1": "Implementation costs",
        "table.r2": "Monthly costs",
        "table.r3": "Implementation timeline",
        "table.r4": "AI analysis and optimization",
        "table.r5": "Support for different formats",
        "table.r6": "Interactive dialog",
        "table.r6val": "Chat + Voice",
        "table.r7": "Need for consultants",
        "yes": "Yes",
        "no": "No",
        "table.any": "Any",
        "pricing.title": "Pricing Plans",
        "pricing.subtitle": "Transparent pricing. No hidden fees.",
        "pricing.starter": "Starter",
        "pricing.starter-desc": "For small business (up to 10 processes)",
        "pricing.s1": "✅ Up to 10 business processes",
        "pricing.s2": "✅ Up to 5 active users",
        "pricing.s3": "✅ AI analysis and formalization",
        "pricing.s4": "✅ Version management",
        "pricing.s5": "❌ System integrations",
        "pricing.choose": "Choose",
        "pricing.popular": "Popular",
        "pricing.pro": "Professional",
        "pricing.pro-desc": "For medium business (up to 50 processes)",
        "pricing.p1": "✅ Up to 50 business processes",
        "pricing.p2": "✅ Up to 25 active users",
        "pricing.p3": "✅ Everything from Starter plan",
        "pricing.p4": "✅ Integration with 1C, CRM, ERP",
        "pricing.p5": "✅ API for external systems",
        "pricing.start": "Start",
        "pricing.enterprise": "Enterprise",
        "pricing.onrequest": "Request pricing",
        "pricing.ent-desc": "For large business (unlimited)",
        "pricing.e1": "✅ Unlimited processes",
        "pricing.e2": "✅ Unlimited users",
        "pricing.e3": "✅ Everything from Professional plan",
        "pricing.e4": "✅ Dedicated infrastructure",
        "pricing.e5": "✅ On-premise installation",
        "pricing.consult": "Consultation",
        "demo.title": "Ready to get started?",
        "demo.subtitle": "Choose the next step that fits you",
        "demo.lead.title": "Download the checklist: 10 processes you can delegate to AI tomorrow",
        "demo.lead.desc": "A practical asset to quickly spot automation opportunities in your company.",
        "demo.lead.button": "Get Checklist",
        "demo.audit.title": "Book a free 15-minute audit of your processes",
        "demo.audit.desc": "We identify priority use-cases and the highest-impact AI rollout points.",
        "demo.audit.button": "Book Audit",
        "demo.quiz.title": "See how many resources AI can save in your department",
        "demo.quiz.desc": "For Sales, Marketing, HR, and Operations teams.",
        "demo.quiz.button": "Calculate Savings",
        "contact.title": "Contact Us",
        "contact.info": "Contact Information",
        "contact.email": "Email:",
        "contact.phone": "Phone:",
        "contact.telegram": "Telegram:",
        "form.name": "Name",
        "form.email": "Email",
        "form.phone": "Phone",
        "form.company": "Company",
        "form.message": "Message",
        "form.send": "Send",
        "footer.desc": "Intelligent platform for business process automation",
        "footer.product": "Product",
        "footer.features": "Features",
        "footer.pricing": "Pricing",
        "footer.demo": "Demo",
        "footer.company": "Company",
        "footer.contact": "Contacts",
        "footer.blog": "Blog",
        "footer.about": "About",
        "footer.docs": "Documents",
        "footer.terms": "Terms of Use",
        "footer.privacy": "Privacy Policy",
        "footer.copyright": "&copy; 2026 AI for BP. All rights reserved."
    }
};

let currentLang = localStorage.getItem('lang') || 'ru';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.getElementById('htmlRoot').lang = lang;
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang][key];
        if (translation) {
            if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
                element.placeholder = translation;
            } else if (element.tagName.toLowerCase() === 'title') {
                document.title = translation;
            } else {
                element.innerHTML = translation;
            }
        }
    });
    
    // Update language switch button
    const langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        langSwitch.textContent = lang === 'ru' ? 'EN' : 'RU';
    }
}

// Initialize language on page load
window.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});

// ===== Navigation links smooth scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== Language Switch Button =====
document.getElementById('langSwitch')?.addEventListener('click', () => {
    const newLang = currentLang === 'ru' ? 'en' : 'ru';
    setLanguage(newLang);
});

// ===== Lead CTA helpers =====
document.querySelectorAll('[data-lead]').forEach(button => {
    button.addEventListener('click', () => {
        const leadType = button.getAttribute('data-lead');
        const messageField = document.querySelector('textarea[name="message"]');
        if (!messageField) {
            return;
        }

        const templates = {
            ru: {
                checklist: 'Хочу получить чек-лист по процессам для делегирования ИИ.',
                audit: 'Хочу записаться на бесплатный 15-минутный аудит процессов.',
                quiz: 'Хочу рассчитать экономию от внедрения AI в моем отделе.'
            },
            en: {
                checklist: 'I want to receive the checklist of processes to delegate to AI.',
                audit: 'I want to book a free 15-minute process audit.',
                quiz: 'I want to calculate potential savings from AI in my department.'
            }
        };

        const byLang = templates[currentLang] || templates.ru;
        if (leadType && byLang[leadType]) {
            messageField.value = byLang[leadType];
            setTimeout(() => messageField.focus(), 250);
        }
    });
});

// ===== Form submission =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        console.log('Form data:', data);
        const message = currentLang === 'ru' 
            ? 'Спасибо за заявку! Мы свяжемся с вами в ближайшее время.'
            : 'Thank you for your request! We will contact you soon.';
        alert(message);
        contactForm.reset();
    });
}

// ===== Hamburger menu =====
const hamburger = document.getElementById('hamburger');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// ===== Intersection Observer for fade-in animations =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.pillar-title-card, .pillar-detail-card, .metric-card, .pricing-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// ===== Pillar videos: play on hover only =====
document.querySelectorAll('.pillar-detail-card').forEach(card => {
    const video = card.querySelector('.pillar-video');
    if (!video) {
        return;
    }

    video.addEventListener('loadeddata', () => {
        if (video.readyState >= 2) {
            video.currentTime = Math.min(0.1, video.duration || 0.1);
            video.pause();
        }
    }, { once: true });

    const playVideo = () => {
        video.play().catch(() => {});
    };

    const pauseVideo = () => {
        video.pause();
    };

    card.addEventListener('mouseenter', playVideo);
    card.addEventListener('mouseleave', pauseVideo);
    video.addEventListener('mouseenter', playVideo);
    video.addEventListener('mouseleave', pauseVideo);
});

// ===== Track analytics =====
function trackEvent(category, action, label) {
    console.log('Event:', category, action, label);
}

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('Button', 'Click', btn.textContent.trim());
    });
});

