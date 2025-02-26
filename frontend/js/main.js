// Simple Logger
function log(type, message, data = null) {
    const timestamp = new Date().toLocaleTimeString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    
    switch(type) {
        case 'info':
            console.log(logMessage);
            break;
        case 'success':
            console.log('%c' + logMessage, 'color: green');
            break;
        case 'warning':
            console.warn(logMessage);
            break;
        case 'error':
            console.error(logMessage);
            break;
        default:
            console.log(logMessage);
    }

    if (data) {
        console.log('Data:', data);
    }
}

// DOM Elements
let hamburger, navLinks, header, contactForm, filterButtons, themeToggle, 
    loadingOverlay, navLinksItems, contactButtons, contactSection, 
    contactToggle, notification;

// Initialize DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    log('info', 'Initializing DOM elements');
    
    // Initialize all DOM elements
    hamburger = document.querySelector('.hamburger');
    navLinks = document.querySelector('.nav-links');
    header = document.querySelector('.header');
    contactForm = document.getElementById('contactForm');
    filterButtons = document.querySelectorAll('.filter-btn');
    themeToggle = document.querySelector('.theme-toggle');
    loadingOverlay = document.getElementById('loading-overlay');
    navLinksItems = document.querySelectorAll('.nav-link');
    contactButtons = document.querySelectorAll('a[href="#contact"], .contact-toggle');
    contactSection = document.getElementById('contact');
    contactToggle = document.getElementById('contactToggle');
    notification = document.getElementById('notification');

    // Log initialization status
    log('info', 'DOM Elements initialized', {
        hamburger: !!hamburger,
        navLinks: !!navLinks,
        header: !!header,
        contactForm: !!contactForm,
        filterButtons: filterButtons?.length || 0,
        themeToggle: !!themeToggle,
        loadingOverlay: !!loadingOverlay,
        navLinksItems: navLinksItems?.length || 0,
        contactButtons: contactButtons?.length || 0,
        contactSection: !!contactSection,
        contactToggle: !!contactToggle,
        notification: !!notification
    });

    // Initialize event listeners only after DOM elements are initialized
    initializeEventListeners();
    
    // Initialize theme
    if (themeToggle) {
        theme.initialize();
    }
});

function initializeEventListeners() {
    // Mobile Navigation
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Theme Toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = theme.current === 'light' ? 'dark' : 'light';
            theme.current = newTheme;
            
            // Add animation effect
            document.body.style.transition = 'background-color 0.3s ease';
            requestAnimationFrame(() => {
                document.body.style.backgroundColor = getComputedStyle(document.documentElement)
                    .getPropertyValue('--bg-color');
            });
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (!target || !header) return;

            const headerOffset = header.offsetHeight;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navLinks?.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active');
            }
        });
    });

    // Header Scroll Effect
    if (header) {
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (setActiveNavLink) setActiveNavLink();
            
            if (currentScroll <= 0) {
                header.classList.remove('scroll-up');
                return;
            }
            
            if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
                header.classList.remove('scroll-up');
                header.classList.add('scroll-down');
            } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
                header.classList.remove('scroll-down');
                header.classList.add('scroll-up');
            }
            lastScroll = currentScroll;
        });
    }
}

// Theme Management
const theme = {
    get current() {
        return document.documentElement.getAttribute('data-theme') || 'dark';
    },
    set current(value) {
        log('info', `Changing theme to: ${value}`);
        document.documentElement.setAttribute('data-theme', value);
        localStorage.setItem('theme', value);
        this.updateToggleButton();
    },
    updateToggleButton() {
        if (!themeToggle) return;
        
        const isDark = this.current === 'dark';
        themeToggle.innerHTML = isDark 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
        themeToggle.setAttribute('aria-label', 
            isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'
        );
    },
    initialize() {
        log('info', 'Initializing theme');
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            this.current = savedTheme;
            log('info', `Using saved theme: ${savedTheme}`);
        } else if (prefersDark) {
            this.current = 'dark';
            log('info', 'Using system preference: dark');
        } else {
            this.current = 'light';
            log('info', 'Using system preference: light');
        }

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                this.current = e.matches ? 'dark' : 'light';
                log('info', `System theme changed to: ${this.current}`);
            }
        });

        // Add click event listener for theme toggle
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const newTheme = this.current === 'light' ? 'dark' : 'light';
                this.current = newTheme;
                log('success', `Theme changed to: ${newTheme}`);
            });
        }
    }
};

// Loading Management
const loading = {
    show() {
        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    },
    hide() {
        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
};

// Active Navigation Link
function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - header.offsetHeight;
        const sectionBottom = sectionTop + section.offsetHeight;
        const navLink = document.querySelector(`.nav-link[href="#${section.id}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinksItems.forEach(item => item.classList.remove('active'));
            navLink?.classList.add('active');
        }
    });
}

// Projects Data with Loading State
const projects = [
    {
        title: 'E-Ticaret Platformu',
        description: 'Modern ve ölçeklenebilir e-ticaret platformu. React ve Node.js ile geliştirildi.',
        image: 'ecommerce.jpg',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        category: 'web',
        link: '#'
    },
    {
        title: 'Mobil Fitness Uygulaması',
        description: 'Kişiselleştirilmiş fitness programları sunan mobil uygulama.',
        image: 'fitness.jpg',
        technologies: ['React Native', 'Firebase', 'Redux'],
        category: 'mobile',
        link: '#'
    },
    {
        title: 'Masaüstü Müzik Çalar',
        description: 'Electron.js ile geliştirilmiş modern müzik çalar uygulaması.',
        image: 'music.jpg',
        technologies: ['Electron', 'Vue.js', 'Node.js'],
        category: 'desktop',
        link: '#'
    }
];

// Project Filtering with Animation
async function filterProjects(category) {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    loading.show();

    try {
        // Clear existing projects with fade-out animation
        const existingProjects = projectsGrid.children;
        for (let project of existingProjects) {
            project.style.opacity = '0';
            project.style.transform = 'translateY(20px)';
        }

        await new Promise(resolve => setTimeout(resolve, 300));
        projectsGrid.innerHTML = '';

        const filteredProjects = category === 'all' 
            ? projects 
            : projects.filter(project => project.category === category);

        // Create and append new project cards
        filteredProjects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.style.opacity = '0';
            projectCard.style.transform = 'translateY(20px)';
            projectCard.style.transition = 'all 0.3s ease';
            
            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="public/images/${project.image}" alt="${project.title}" loading="lazy">
                    <div class="project-overlay">
                        <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="technologies">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                </div>
            `;

            projectsGrid.appendChild(projectCard);

            // Trigger fade-in animation
            setTimeout(() => {
                projectCard.style.opacity = '1';
                projectCard.style.transform = 'translateY(0)';
            }, index * 100);
        });

    } catch (error) {
        console.error('Error filtering projects:', error);
        showNotification('Projeler yüklenirken bir hata oluştu.', 'error');
    } finally {
        loading.hide();
    }
}

// Skills Data with Animation
const skills = {
    frontend: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'React', level: 88 },
        { name: 'Vue.js', level: 85 }
    ],
    backend: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQL', level: 78 }
    ],
    other: [
        { name: 'Git', level: 88 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Linux', level: 82 }
    ]
};

// Render Skills with Animation
function renderSkills() {
    log('info', 'Starting to render skills');
    try {
        Object.entries(skills).forEach(([category, skillsList], categoryIndex) => {
            const gridSelector = `.skills-category:nth-child(${categoryIndex + 1}) .skills-grid`;
            const skillsGrid = document.querySelector(gridSelector);
            
            if (!skillsGrid) {
                log('warning', `Skills grid not found for category: ${category}`);
                return;
            }

            log('info', `Rendering skills for category: ${category}`);
            skillsList.forEach((skill, index) => {
                const skillCard = document.createElement('div');
                skillCard.className = 'skill-card';
                skillCard.setAttribute('data-aos', 'fade-up');
                skillCard.setAttribute('data-aos-delay', `${index * 100}`);
                skillCard.innerHTML = `
                    <h3>${skill.name}</h3>
                    <div class="skill-level">
                        <div class="skill-progress" style="width: 0%"></div>
                    </div>
                    <span>${skill.level}%</span>
                `;
                skillsGrid.appendChild(skillCard);
            });
        });
        log('success', 'Skills rendered successfully');
        
        // Animate skill progress bars after a short delay
        setTimeout(animateSkills, 500);
    } catch (error) {
        log('error', 'Error rendering skills:', error);
    }
}

// Animate Skills Progress
function animateSkills() {
    log('info', 'Animating skill progress bars');
    try {
        const skillProgressBars = document.querySelectorAll('.skill-progress');
        skillProgressBars.forEach(progressBar => {
            const percentageText = progressBar.parentElement.nextElementSibling.textContent;
            const percentage = parseInt(percentageText);
            
            if (!isNaN(percentage)) {
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = `${percentage}%`;
                }, 100);
            }
        });
        log('success', 'Skill progress bars animated');
    } catch (error) {
        log('error', 'Error animating skill progress bars:', error);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    log('info', 'Application starting...');

    // Initialize DOM elements with null checks
    const elements = {
        contactButtons: document.querySelectorAll('a[href="#contact"], .contact-toggle'),
        contactSection: document.getElementById('contact'),
        contactForm: document.getElementById('contactForm'),
        contactToggle: document.getElementById('contactToggle'),
        notification: document.getElementById('notification'),
        themeToggle: document.querySelector('.theme-toggle'),
        hamburger: document.querySelector('.hamburger'),
        navLinks: document.querySelector('.nav-links'),
        header: document.querySelector('.header'),
        filterButtons: document.querySelectorAll('.filter-btn'),
        loadingOverlay: document.getElementById('loading-overlay'),
        navLinksItems: document.querySelectorAll('.nav-link'),
        projectsGrid: document.querySelector('.projects-grid')
    };

    // Log initialization status
    log('info', 'DOM Elements initialized', {
        contactButtons: elements.contactButtons?.length || 0,
        contactSection: !!elements.contactSection,
        contactForm: !!elements.contactForm,
        contactToggle: !!elements.contactToggle,
        notification: !!elements.notification,
        themeToggle: !!elements.themeToggle,
        hamburger: !!elements.hamburger,
        navLinks: !!elements.navLinks,
        header: !!elements.header,
        filterButtons: elements.filterButtons?.length || 0,
        loadingOverlay: !!elements.loadingOverlay,
        projectsGrid: !!elements.projectsGrid
    });

    try {
        // Initialize theme
        if (elements.themeToggle) {
            theme.initialize();
        }

        // Setup filter buttons
        if (elements.filterButtons && elements.filterButtons.length > 0) {
            log('info', 'Setting up filter buttons');
            elements.filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const category = button.dataset.filter;
                    if (!category) return;

                    // Update active state of filter buttons
                    elements.filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    // Animate button
                    button.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        button.style.transform = 'scale(1)';
                    }, 150);

                    filterProjects(category);
                });
            });

            // Initialize default filter
            const defaultFilter = Array.from(elements.filterButtons).find(btn => btn.dataset.filter === 'all');
            if (defaultFilter) {
                defaultFilter.classList.add('active');
                filterProjects('all');
            }
        }

        // Initialize contact form functionality
        initializeContactForm(elements);

        // Initialize event listeners
        initializeEventListeners(elements);

        if (elements.loadingOverlay) loading.show();
        
        // Only try to render skills if the necessary DOM elements exist
        const skillsContainer = document.querySelector('.skills');
        if (skillsContainer) {
            await renderSkills();
        } else {
            log('info', 'Skills container not found, skipping skills rendering');
        }

        // Only try to filter projects if the projects grid exists
        if (elements.projectsGrid) {
            await filterProjects('all');
        }

        if (typeof AOS !== 'undefined') {
            initAOS();
            document.querySelectorAll('section').forEach(section => {
                section.setAttribute('data-aos', 'fade-up');
            });
        }

    } catch (error) {
        log('error', 'Initialization error:', error);
        if (elements.notification) {
            showNotification('Sayfa yüklenirken bir hata oluştu.', 'error', elements);
        } else {
            log('error', 'Could not show notification - notification element not found');
        }
    } finally {
        if (elements.loadingOverlay) loading.hide();
    }
});

// Global error handling
window.addEventListener('error', (event) => {
    log('error', 'Global error caught', {
        message: event.message,
        filename: event.filename,
        lineNumber: event.lineno,
        columnNumber: event.colno
    });
});

window.addEventListener('unhandledrejection', (event) => {
    log('error', 'Unhandled Promise rejection', {
        reason: event.reason
    });
});

// Initialize AOS
function initAOS() {
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true
    });
}

// Notification Function
function showNotification(message, type = 'success', elements) {
    if (!elements.notification) {
        log('error', 'Notification element not found');
        return;
    }

    elements.notification.innerHTML = `
        <div class="notification-content ${type}">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    elements.notification.className = `notification ${type} show`;
    
    setTimeout(() => {
        elements.notification.classList.remove('show');
    }, 3000);
}

// Contact Form Functions
function openContactForm(elements) {
    log('info', 'Attempting to open contact form');
    if (elements.contactSection && elements.contactToggle) {
        elements.contactSection.classList.add('show');
        elements.contactToggle.classList.add('active');
        log('success', 'Contact form opened');
    } else {
        log('error', 'Failed to open contact form - Missing elements');
    }
}

function closeContactForm(elements) {
    log('info', 'Attempting to close contact form');
    if (elements.contactSection && elements.contactToggle) {
        elements.contactSection.classList.remove('show');
        elements.contactToggle.classList.remove('active');
        log('success', 'Contact form closed');
    } else {
        log('error', 'Failed to close contact form - Missing elements');
    }
}

// Setup Outside Click Handler
if (contactSection) {
    document.addEventListener('click', (e) => {
        if (contactSection.classList.contains('show')) {
            const isClickInside = contactSection.contains(e.target);
            const isToggleClick = contactToggle?.contains(e.target);
            const isContactLink = e.target.closest('a[href="#contact"]');

            log('info', 'Document click detected', {
                isClickInside,
                isToggleClick,
                isContactLink: !!isContactLink
            });

            if (!isClickInside && !isToggleClick && !isContactLink) {
                log('info', 'Closing form due to outside click');
                closeContactForm(elements);
            }
        }
    });
}

// Setup Form Submission
if (contactForm) {
    log('info', 'Setting up form submission handler');
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        log('info', 'Form submission started');

        const formData = new FormData(contactForm);
        log('info', 'Form data', {
            name: formData.get('name'),
            email: formData.get('email'),
            messageLength: formData.get('message')?.length
        });

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        if (!submitBtn) {
            log('error', 'Submit button not found');
            return;
        }

        const originalBtnText = submitBtn.innerHTML;
        
        try {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
            log('info', 'Processing form submission...');

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            log('success', 'Form submitted successfully');
            showNotification('Mesajınız başarıyla gönderildi!', 'success', elements);
            contactForm.reset();
            
            setTimeout(closeContactForm, 2000);
        } catch (error) {
            log('error', 'Form submission failed', error);
            showNotification('Bir hata oluştu. Lütfen tekrar deneyin.', 'error', elements);
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            log('info', 'Form submission process completed');
        }
    });
}

// Contact Form Functions
function initializeContactForm(elements) {
    // Setup Contact Buttons
    if (elements.contactButtons && elements.contactButtons.length > 0) {
        log('info', 'Setting up contact buttons', { count: elements.contactButtons.length });
        elements.contactButtons.forEach((button, index) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                log('info', 'Contact button clicked', { buttonIndex: index });
                openContactForm(elements);
            });
        });
    } else {
        log('warning', 'No contact buttons found');
    }

    // Setup Contact Toggle
    if (elements.contactToggle) {
        log('info', 'Setting up contact toggle button');
        elements.contactToggle.addEventListener('click', (e) => {
            e.preventDefault();
            log('info', 'Contact toggle clicked');
            openContactForm(elements);
        });
    }

    // Setup Outside Click Handler
    if (elements.contactSection) {
        document.addEventListener('click', (e) => {
            if (elements.contactSection.classList.contains('show')) {
                const isClickInside = elements.contactSection.contains(e.target);
                const isToggleClick = elements.contactToggle?.contains(e.target);
                const isContactLink = e.target.closest('a[href="#contact"]');

                log('info', 'Document click detected', {
                    isClickInside,
                    isToggleClick,
                    isContactLink: !!isContactLink
                });

                if (!isClickInside && !isToggleClick && !isContactLink) {
                    log('info', 'Closing form due to outside click');
                    closeContactForm(elements);
                }
            }
        });
    }

    // Setup Form Submission
    if (elements.contactForm) {
        log('info', 'Setting up form submission handler');
        elements.contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            log('info', 'Form submission started');

            const formData = new FormData(elements.contactForm);
            const data = Object.fromEntries(formData);
            log('info', 'Form data:', data);

            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                log('success', 'Form submission successful');
                showNotification('Message sent successfully!', 'success', elements);
                closeContactForm(elements);
                elements.contactForm.reset();
            } catch (error) {
                log('error', 'Form submission failed:', error);
                showNotification('Failed to send message. Please try again.', 'error', elements);
            }
        });
    }
}

// Initialize 3D Background Effects
function initializeParallaxBackground() {
    const body = document.body;
    
    // Create parallax container
    const parallaxBg = document.createElement('div');
    parallaxBg.className = 'parallax-background';
    
    // Create layers
    for (let i = 1; i <= 3; i++) {
        const layer = document.createElement('div');
        layer.className = `parallax-layer layer-${i}`;
        parallaxBg.appendChild(layer);
    }
    
    body.appendChild(parallaxBg);

    // Mouse move parallax effect
    document.addEventListener('mousemove', (e) => {
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 20;

        requestAnimationFrame(() => {
            parallaxBg.style.transform = `rotateY(${mouseX}deg) rotateX(${-mouseY}deg)`;
        });

        // Update card rotations
        document.querySelectorAll('.work-card, .skills-category').forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardX = rect.left + rect.width / 2;
            const cardY = rect.top + rect.height / 2;
            
            const angleX = (e.clientY - cardY) / 30;
            const angleY = (e.clientX - cardX) / 30;
            
            card.style.setProperty('--rotate-x', `${angleX}deg`);
            card.style.setProperty('--rotate-y', `${angleY}deg`);
        });
    });
}

// Initialize Particle Effects
function initializeParticles() {
    const particleField = document.createElement('div');
    particleField.className = 'particle-field';
    document.body.appendChild(particleField);

    const particleCount = 30;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
        createParticle(particleField, particles);
    }

    // Continuously create new particles
    setInterval(() => {
        particles.forEach((particle, index) => {
            if (particle.style.opacity === '0') {
                particleField.removeChild(particle);
                particles.splice(index, 1);
                createParticle(particleField, particles);
            }
        });
    }, 2000);
}

function createParticle(container, particles) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size between 2px and 6px
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random movement
    const moveX = (Math.random() - 0.5) * 200;
    const moveY = (Math.random() - 0.5) * 200;
    const moveZ = Math.random() * 100;
    
    particle.style.setProperty('--move-x', `${moveX}px`);
    particle.style.setProperty('--move-y', `${moveY}px`);
    particle.style.setProperty('--move-z', `${moveZ}px`);
    
    // Random animation delay
    particle.style.animationDelay = `${Math.random() * 2}s`;
    
    container.appendChild(particle);
    particles.push(particle);
}

// Initialize all effects
document.addEventListener('DOMContentLoaded', () => {
    log('info', 'Initializing background effects');
    initializeParallaxBackground();
    initializeParticles();
}); 