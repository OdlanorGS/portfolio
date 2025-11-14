# Dynamic Portfolio

A beautiful, responsive, and easy-to-edit portfolio website that you can customize and host on GitHub Pages.

## Features

- **Easy to Edit**: All content is managed through a single `data.json` file
- **Fully Responsive**: Looks great on desktop, tablet, and mobile devices
- **Modern Design**: Clean and professional design with smooth animations
- **Dynamic Content**: All sections load automatically from your data file
- **GitHub Pages Ready**: Deploy in minutes with GitHub Pages
- **No Build Process**: Pure HTML, CSS, and JavaScript - no complex setup required

## Quick Start

### 1. Edit Your Portfolio Content

Open `data.json` and update it with your information:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Professional Title",
    "email": "your.email@example.com",
    ...
  }
}
```

### 2. Customize Each Section

The `data.json` file contains all your portfolio content organized into sections:

#### Personal Information
```json
"personal": {
  "name": "Your Name",
  "title": "Software Developer | Designer | Creator",
  "email": "your.email@example.com",
  "phone": "+1 (123) 456-7890",
  "location": "Your City, Country",
  "bio": "Your bio text here",
  "avatar": "URL to your profile picture"
}
```

#### Social Media Links
```json
"social": {
  "github": "https://github.com/yourusername",
  "linkedin": "https://linkedin.com/in/yourusername",
  "twitter": "https://twitter.com/yourusername",
  "portfolio": "https://yourwebsite.com"
}
```

#### About Section
```json
"about": {
  "description": "Tell visitors about yourself...",
  "highlights": [
    "Highlight 1",
    "Highlight 2",
    "Highlight 3"
  ]
}
```

#### Skills
```json
"skills": [
  {
    "category": "Frontend",
    "items": ["HTML5", "CSS3", "JavaScript", "React"]
  },
  {
    "category": "Backend",
    "items": ["Node.js", "Python", "Express"]
  }
]
```

#### Projects
```json
"projects": [
  {
    "title": "Project Name",
    "description": "Project description...",
    "technologies": ["React", "Node.js"],
    "image": "URL to project image",
    "github": "GitHub repo URL",
    "demo": "Live demo URL",
    "featured": true
  }
]
```

#### Experience
```json
"experience": [
  {
    "position": "Job Title",
    "company": "Company Name",
    "duration": "2022 - Present",
    "description": "Job description...",
    "achievements": [
      "Achievement 1",
      "Achievement 2"
    ]
  }
]
```

#### Education
```json
"education": [
  {
    "degree": "Bachelor of Science in Computer Science",
    "institution": "University Name",
    "year": "2020",
    "description": "Details about your education..."
  }
]
```

#### Theme Colors
```json
"theme": {
  "primaryColor": "#2563eb",
  "accentColor": "#7c3aed",
  "backgroundColor": "#ffffff",
  "textColor": "#1f2937"
}
```

### 3. Deploy to GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select your branch (usually `main` or `master`)
5. Click **Save**
6. Your portfolio will be live at `https://yourusername.github.io/repository-name/`

## Local Development

To preview your portfolio locally:

1. Open `index.html` in your web browser, or
2. Use a local server (recommended):

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have npx)
npx serve
```

Then visit `http://localhost:8000` in your browser.

## Customization Tips

### Changing Colors
Edit the `theme` section in `data.json` to change the color scheme:
- `primaryColor`: Main brand color
- `accentColor`: Secondary accent color
- `backgroundColor`: Page background
- `textColor`: Main text color

### Adding Profile Picture
1. Add your image to the repository, or
2. Use a URL to an image hosted elsewhere (like GitHub, Imgur, etc.)
3. Update `personal.avatar` in `data.json`

### Adding Project Images
Same as profile pictures - either add images to your repository or use external URLs.

### Removing Sections
If you don't want to display a section (like Education), simply:
1. Remove or empty the corresponding array in `data.json`, or
2. Comment out the section in `index.html`

## File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling
├── script.js           # Dynamic content loading
├── data.json           # YOUR PORTFOLIO CONTENT (edit this!)
└── README.md           # This file
```

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Need Help?

If you encounter any issues:
1. Make sure your `data.json` is valid JSON (use a JSON validator online)
2. Check the browser console for errors (F12 → Console tab)
3. Ensure all URLs are correct and accessible

## License

Feel free to use this template for your personal portfolio!

---

Made with ❤️ for easy portfolio creation