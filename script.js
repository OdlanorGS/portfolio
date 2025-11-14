// Load portfolio data and populate the page
async function loadPortfolioData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        // Apply theme colors
        applyTheme(data.theme);

        // Populate all sections
        populateHero(data.personal, data.social);
        populateAbout(data.about);
        populateSkills(data.skills);
        populateProjects(data.projects);
        populateExperience(data.experience);
        populateEducation(data.education);
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
    }
}

// Populate Hero Section
function populateHero(personal, social) {
    document.getElementById('nav-brand').textContent = personal.name;
    document.getElementById('hero-avatar').src = personal.avatar;
    document.getElementById('hero-avatar').alt = personal.name;
    document.getElementById('hero-name').textContent = personal.name;
    document.getElementById('hero-title').textContent = personal.title;
    document.getElementById('hero-bio').textContent = personal.bio;

    const socialContainer = document.getElementById('hero-social');
    socialContainer.innerHTML = createSocialLinks(social);
}

// Create social links HTML
function createSocialLinks(social) {
    const socialIcons = {
        github: 'fab fa-github',
        linkedin: 'fab fa-linkedin',
        twitter: 'fab fa-twitter',
        portfolio: 'fas fa-globe'
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

    const highlightsList = document.getElementById('about-highlights');
    highlightsList.innerHTML = about.highlights
        .map(highlight => `<li>${highlight}</li>`)
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
            <img src="${project.image}" alt="${project.title}" class="project-image">
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
                        <i class="fas fa-external-link-alt"></i> Demo
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
                <h1 style="color: #dc2626; margin-bottom: 1rem;">Error Loading Portfolio</h1>
                <p style="color: #6b7280;">Unable to load portfolio data. Please check your data.json file.</p>
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

// Add scroll animation
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolioData();
    setupMobileNav();
    setupSmoothScrolling();

    // Setup scroll animations after a short delay to ensure content is loaded
    setTimeout(setupScrollAnimations, 500);
});
