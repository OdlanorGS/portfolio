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

#### LinkedIn Events
```json
"linkedInEvents": [
  {
    "title": "Event Title",
    "type": "Speaker | Participant | Organizer",
    "organization": "Organization Name",
    "date": "Event Date",
    "location": "Event Location",
    "description": "Detailed description of the event...",
    "linkedInUrl": "https://www.linkedin.com/events/YOUR-EVENT-ID/",
    "image": "URL to event image",
    "attendees": "100+"
  }
]
```

**How to add your LinkedIn events:**
1. Go to your LinkedIn event page
2. Copy the event URL (e.g., `https://www.linkedin.com/events/1234567890/`)
3. Add event details to `linkedInEvents` array in `data.json`
4. Add a screenshot or promotional image of the event
5. The event card will display with a LinkedIn badge and "View on LinkedIn" button

#### Achievements & Certifications
```json
"achievements": [
  {
    "title": "Achievement Title",
    "description": "Achievement description",
    "date": "Year",
    "icon": "🏆"
  }
]
```

#### Greeting (Hero Section)
```json
"greeting": {
  "title": "Hi, I'm",
  "subtitle": "Your introduction message",
  "resumeLink": "URL to your resume PDF"
}
```

#### Theme Colors
```json
"theme": {
  "primaryColor": "#55198b",
  "accentColor": "#8c43ce",
  "backgroundColor": "#ffffff",
  "textColor": "#000000",
  "subtitleColor": "#868e96",
  "cardColor": "#f5f2f4"
}
```

## Local Development & Maintenance

### Setting Up Your Local Environment

#### Prerequisites
- A web browser (Chrome, Firefox, Safari, or Edge)
- A text editor (VS Code, Sublime Text, Atom, etc.)
- Python (usually pre-installed on Mac/Linux) OR Node.js
- Git (for version control)

### Step-by-Step: Running Locally on Your PC

#### Option 1: Using Python (Recommended - Easiest)

**For Windows:**
1. Open Command Prompt or PowerShell
2. Navigate to your portfolio folder:
   ```cmd
   cd C:\Users\YourName\portfolio
   ```
3. Start the server:
   ```cmd
   python -m http.server 8000
   ```
   Or if you have Python 2:
   ```cmd
   python -m SimpleHTTPServer 8000
   ```
4. Open your browser and go to: `http://localhost:8000`

**For Mac/Linux:**
1. Open Terminal
2. Navigate to your portfolio folder:
   ```bash
   cd ~/portfolio
   ```
3. Start the server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open your browser and go to: `http://localhost:8000`

#### Option 2: Using Node.js

1. Install Node.js from [nodejs.org](https://nodejs.org/) if not installed
2. Open Terminal/Command Prompt
3. Navigate to your portfolio folder
4. Install a simple server globally:
   ```bash
   npm install -g http-server
   ```
5. Start the server:
   ```bash
   http-server -p 8000
   ```
6. Open your browser and go to: `http://localhost:8000`

#### Option 3: Using VS Code Live Server

1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Install the "Live Server" extension
3. Open your portfolio folder in VS Code
4. Right-click on `index.html` and select "Open with Live Server"
5. Your portfolio will automatically open in your browser

### Maintaining Your Portfolio from Your PC

#### Daily Workflow

1. **Edit Your Content:**
   ```bash
   # Open data.json in your text editor
   # Make your changes
   # Save the file
   ```

2. **Preview Changes Locally:**
   ```bash
   # Start local server (if not already running)
   python3 -m http.server 8000
   # Refresh browser to see changes
   ```

3. **Commit Changes to Git:**
   ```bash
   # Check what changed
   git status

   # Add your changes
   git add data.json

   # Commit with a message
   git commit -m "Updated LinkedIn events and skills"

   # Push to GitHub
   git push origin main
   ```

4. **Your changes will automatically deploy to GitHub Pages** (may take 1-2 minutes)

#### Common Maintenance Tasks

**Adding a New LinkedIn Event:**
1. Open `data.json` in your text editor
2. Go to the `linkedInEvents` array
3. Copy an existing event object
4. Paste it and update with your new event details:
   ```json
   {
     "title": "Your Event Name",
     "type": "Speaker",
     "organization": "Organization",
     "date": "Date",
     "location": "Location",
     "description": "Description...",
     "linkedInUrl": "https://www.linkedin.com/events/YOUR-EVENT-ID/",
     "image": "image-url",
     "attendees": "50+"
   }
   ```
5. Save the file
6. Refresh your browser to see the new event

**Adding Event Images:**

Option 1 - Using External Images:
- Upload your image to a service like [Imgur](https://imgur.com/) or [GitHub](https://github.com/)
- Copy the direct image URL
- Paste it in the `image` field

Option 2 - Hosting Images in Your Repository:
1. Create an `images` folder in your portfolio directory
2. Add your event image there (e.g., `images/event1.jpg`)
3. Reference it in data.json:
   ```json
   "image": "images/event1.jpg"
   ```
4. Commit and push the image with git:
   ```bash
   git add images/event1.jpg
   git commit -m "Add event image"
   git push
   ```

**Updating Your Skills:**
1. Open `data.json`
2. Find the `skills` array
3. Add or remove items from the categories
4. Save and refresh

**Changing Colors:**
1. Open `data.json`
2. Find the `theme` object
3. Update the color values (use hex codes like `#55198b`)
4. Save and refresh to see new colors

### Troubleshooting

**Problem: Changes not showing up**
- Solution: Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Check browser console for errors (F12)

**Problem: JSON errors**
- Solution: Validate your JSON at [jsonlint.com](https://jsonlint.com/)
- Make sure all quotes are matched
- Check for missing commas between objects

**Problem: Images not loading**
- Solution: Check image URLs are correct
- Ensure images are publicly accessible
- Check image file paths if hosting locally

**Problem: Local server won't start**
- Solution: Make sure port 8000 is not already in use
- Try a different port: `python3 -m http.server 3000`
- Check if Python/Node.js is properly installed

### Quick Reference Commands

```bash
# Start local server
python3 -m http.server 8000

# Check git status
git status

# Save changes to git
git add .
git commit -m "Your message"
git push

# Pull latest changes
git pull

# View git history
git log --oneline
```

### Deploying to GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select your branch (usually `main` or `master`)
5. Click **Save**
6. Your portfolio will be live at `https://yourusername.github.io/repository-name/`
7. Changes pushed to your main branch will automatically update your live site (may take 1-2 minutes)

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