// ========== DeveloperFolio-Inspired Portfolio JavaScript ==========

// Load portfolio data and populate the page
async function loadPortfolioData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        // Apply theme colors
        applyTheme(data.theme);

        // Populate all sections
        populateHero(data.greeting, data.personal, data.social);
        populateAbout(data.about);
        populateSkills(data.skills);
        populateProjects(data.projects);
        populateExperience(data.experience);
        populateEducation(data.education);
        populateAchievements(data.achievements);
        populateLinkedInEvents(data.linkedInEvents);
        populateContact(data.personal);
        populateFooter(data.personal, data.social);

    } catch (error) {
        console.error('Error loading portfolio data:', error);
        showErrorMessage();
    }
}

// Apply theme colors
function applyTheme(theme) {
    if (theme) {
        document.documentElement.style.setProperty('--primary-color', theme.primaryColor);
        document.documentElement.style.setProperty('--accent-color', theme.accentColor);
        document.documentElement.style.setProperty('--background-color', theme.backgroundColor);
        document.documentElement.style.setProperty('--text-color', theme.textColor);
        document.documentElement.style.setProperty('--subtitle-color', theme.subtitleColor);
        document.documentElement.style.setProperty('--card-bg', theme.cardColor);
    }
}

// Populate Hero Section
function populateHero(greeting, personal, social) {
    // Update navigation brand
    document.getElementById('nav-brand').textContent = personal.name.split(' ')[0];

    // Update greeting
    document.getElementById('greeting-title').textContent = greeting.title;
    document.getElementById('hero-name').textContent = personal.name;
    document.getElementById('greeting-subtitle').textContent = greeting.subtitle;

    // Update avatar
    document.getElementById('hero-avatar').src = personal.avatar;
    document.getElementById('hero-avatar').alt = personal.name;

    // Update resume link
    const resumeLink = document.getElementById('resume-link');
    resumeLink.href = greeting.resumeLink;

    // Add social links
    const socialContainer = document.getElementById('hero-social');
    socialContainer.innerHTML = createSocialLinks(social);
}

// Create social links HTML
function createSocialLinks(social) {
    const socialIcons = {
        github: 'fab fa-github',
        linkedin: 'fab fa-linkedin',
        twitter: 'fab fa-twitter',
        portfolio: 'fas fa-globe',
        instagram: 'fab fa-instagram',
        medium: 'fab fa-medium',
        stackoverflow: 'fab fa-stack-overflow'
    };

    let html = '';
    for (const [platform, url] of Object.entries(social)) {
        if (url) {
            html += `<a href="${url}" target="_blank" rel="noopener noreferrer" class="social-link" title="${platform}">
                <i class="${socialIcons[platform] || 'fas fa-link'}"></i>
            </a>`;
        }
    }
    return html;
}

// Populate About Section
function populateAbout(about) {
    document.getElementById('about-description').textContent = about.description;

    const highlightsContainer = document.getElementById('about-highlights');
    highlightsContainer.innerHTML = about.highlights
        .map(highlight => `<div class="highlight-card">${highlight}</div>`)
        .join('');
}

// Populate Skills Section
function populateSkills(skills) {
    const container = document.getElementById('skills-container');
    container.innerHTML = skills.map(skillCategory => `
        <div class="skill-category">
            <h3>${skillCategory.category}</h3>
            <div class="skill-tags">
                ${skillCategory.items.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Populate Projects Section
function populateProjects(projects) {
    const container = document.getElementById('projects-container');
    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link github">
                        <i class="fab fa-github"></i> Code
                    </a>` : ''}
                    ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link demo">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Populate Experience Section
function populateExperience(experience) {
    const container = document.getElementById('experience-container');
    container.innerHTML = experience.map(exp => `
        <div class="timeline-item">
            <h3 class="experience-position">${exp.position}</h3>
            <div class="experience-company">${exp.company}</div>
            <div class="experience-duration">${exp.duration}</div>
            <p class="experience-description">${exp.description}</p>
            ${exp.achievements && exp.achievements.length > 0 ? `
                <ul class="experience-achievements">
                    ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            ` : ''}
        </div>
    `).join('');
}

// Populate Education Section
function populateEducation(education) {
    const container = document.getElementById('education-container');
    container.innerHTML = education.map(edu => `
        <div class="education-item">
            <h3 class="education-degree">${edu.degree}</h3>
            <div class="education-institution">${edu.institution}</div>
            <div class="education-year">${edu.year}</div>
            <p class="education-description">${edu.description}</p>
        </div>
    `).join('');
}

// Populate Achievements Section
function populateAchievements(achievements) {
    const container = document.getElementById('achievements-container');

    if (!achievements || achievements.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--subtitle-color);">No achievements added yet.</p>';
        return;
    }

    container.innerHTML = achievements.map(achievement => `
        <div class="achievement-card">
            <span class="achievement-icon">${achievement.icon || '🏆'}</span>
            <h3 class="achievement-title">${achievement.title}</h3>
            <p class="achievement-description">${achievement.description}</p>
            <div class="achievement-date">${achievement.date}</div>
        </div>
    `).join('');
}

// Populate LinkedIn Events Section
function populateLinkedInEvents(events) {
    const container = document.getElementById('events-container');

    if (!events || events.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--subtitle-color);">No events added yet. Add your LinkedIn events in data.json!</p>';
        return;
    }

    container.innerHTML = events.map(event => `
        <div class="linkedin-event-card">
            ${event.image ? `
                <div class="linkedin-event-image-wrapper">
                    <img src="${event.image}" alt="${event.title}" class="linkedin-event-image" loading="lazy">
                    <span class="linkedin-badge"><i class="fab fa-linkedin"></i></span>
                </div>
            ` : ''}
            <div class="linkedin-event-content">
                <div class="event-header">
                    <span class="event-type-badge ${(event.type || 'event').toLowerCase()}">${event.type || 'Event'}</span>
                    ${event.attendees ? `<span class="event-attendees"><i class="fas fa-users"></i> ${event.attendees}</span>` : ''}
                </div>
                <h3 class="linkedin-event-title">${event.title}</h3>
                <div class="linkedin-event-meta">
                    <div class="event-organization">
                        <i class="fas fa-building"></i> ${event.organization}
                    </div>
                    <div class="event-date">
                        <i class="far fa-calendar"></i> ${event.date}
                    </div>
                    ${event.location ? `
                        <div class="event-location">
                            <i class="fas fa-map-marker-alt"></i> ${event.location}
                        </div>
                    ` : ''}
                </div>
                <p class="linkedin-event-description">${event.description}</p>
                <div class="linkedin-event-actions">
                    ${event.linkedInUrl ? `
                        <a href="${event.linkedInUrl}" target="_blank" rel="noopener noreferrer" class="linkedin-event-link">
                            <i class="fab fa-linkedin"></i> View on LinkedIn
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Populate Contact Section
function populateContact(personal) {
    const container = document.getElementById('contact-info');
    container.innerHTML = `
        ${personal.email ? `
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-details">
                    <h3>Email</h3>
                    <a href="mailto:${personal.email}">${personal.email}</a>
                </div>
            </div>
        ` : ''}
        ${personal.phone ? `
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fas fa-phone"></i>
                </div>
                <div class="contact-details">
                    <h3>Phone</h3>
                    <a href="tel:${personal.phone}">${personal.phone}</a>
                </div>
            </div>
        ` : ''}
        ${personal.location ? `
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-details">
                    <h3>Location</h3>
                    <p>${personal.location}</p>
                </div>
            </div>
        ` : ''}
    `;
}

// Populate Footer
function populateFooter(personal, social) {
    document.getElementById('footer-text').textContent =
        `© ${new Date().getFullYear()} ${personal.name}. All rights reserved.`;

    const footerSocial = document.getElementById('footer-social');
    footerSocial.innerHTML = createSocialLinks(social);
}

// Show error message
function showErrorMessage() {
    document.body.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; text-align: center; padding: 20px;">
            <div>
                <h1 style="color: #dc2626; margin-bottom: 1rem; font-size: 2rem;">⚠️ Error Loading Portfolio</h1>
                <p style="color: #6b7280; font-size: 1.1rem;">Unable to load portfolio data. Please check your data.json file.</p>
                <p style="color: #9ca3af; margin-top: 1rem;">Make sure the file exists and contains valid JSON.</p>
            </div>
        </div>
    `;
}

// Mobile navigation toggle
function setupMobileNav() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Account for fixed navbar
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add scroll animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// Add navbar scroll effect
function setupNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });
}

// Add hover effects to cards
function setupCardEffects() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Initialize typing effect for hero subtitle
function setupTypingEffect() {
    const subtitle = document.getElementById('greeting-subtitle');
    if (!subtitle) return;

    const text = subtitle.textContent;
    subtitle.textContent = '';
    subtitle.style.opacity = '1';

    let index = 0;
    function type() {
        if (index < text.length) {
            subtitle.textContent += text.charAt(index);
            index++;
            setTimeout(type, 30);
        }
    }

    // Start typing effect after a short delay
    setTimeout(() => {
        type();
    }, 500);
}

// Lazy load images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        return;
    } else {
        // Fallback for browsers that don't support lazy loading
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolioData().then(() => {
        // Setup all interactive features after data is loaded
        setupMobileNav();
        setupSmoothScrolling();
        setupNavbarScrollEffect();
        setupCardEffects();

        // Setup animations with delay
        setTimeout(() => {
            setupScrollAnimations();
            setupTypingEffect();
            setupLazyLoading();
        }, 300);
    });
});

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // Refresh animations when page becomes visible
        setupScrollAnimations();
    }
});
