---
layout: default
title: Home
---

<section class="hero">
    <h1>Data Analysis & Power BI Specialist</h1>
    <p>Transforming complex data into actionable insights through powerful visualizations and analysis</p>
</section>

<section class="featured-projects">
    <h2>Featured Projects</h2>
    <div class="projects-grid">
        {% for project in site.projects limit:6 %}
        <a href="{{ project.url | relative_url }}" class="project-card">
            <div class="project-card-content">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
            </div>
        </a>
        {% endfor %}
    </div>
</section>
