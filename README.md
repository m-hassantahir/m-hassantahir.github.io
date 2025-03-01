# Data Analysis & Power BI Portfolio

This is a modern portfolio website built with Jekyll for GitHub Pages, showcasing data analysis and Power BI projects.

## 🚀 Quick Start

1. Clone this repository
2. Install Jekyll (if not already installed):
   ```bash
   gem install jekyll bundler
   ```
3. Run locally:
   ```bash
   bundle exec jekyll serve
   ```
4. Visit `http://localhost:4000`

## 📁 Adding a New Project

1. Create a new `.md` file in the `_projects` folder
2. Use this template:
   ```markdown
   ---
   layout: project
   title: Your Project Title
   description: Brief project description
   date: YYYY-MM-DD
   powerbi_embed: Your-PowerBI-Embed-Code-Here
   ---

   Your detailed project description here in Markdown format.
   ```
3. Add any images to the `assets/images/projects` folder
4. Your project will automatically appear in the projects list

## 🗂️ File Structure

```
.
├── _config.yml          # Site configuration
├── _layouts/            # Page templates
├── _projects/           # Project markdown files
├── _includes/           # Reusable components
├── assets/             # Static files (CSS, images, etc.)
└── index.md            # Homepage
```

## 💡 Tips

- Use Markdown for all content
- Store PowerBI embed codes in the front matter
- Images should be optimized before uploading
- Keep project descriptions focused and professional
