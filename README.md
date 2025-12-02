Kayzen Izumi - Portfolio

<div align="center" style="font-family: Arial, sans-serif; max-width: 900px; margin: 0 auto;">

<!-- Header with Gradient Colors -->

<div style="
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 30px;
    border-radius: 15px;
    color: white;
    text-align: center;
    margin-bottom: 30px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
">
    <h1 style="font-size: 2.8em; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">👋 Kayzen Izumi</h1>
    <p style="font-size: 1.3em; opacity: 0.9;">Web Developer & Student | JavaScript & Node.js Enthusiast</p>
</div>

<!-- Navigation Menu -->

<div style="
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 25px 0;
    flex-wrap: wrap;
">
    <a href="#about" style="
        background: linear-gradient(45deg, #36D1DC, #5B86E5);
        color: white;
        padding: 10px 25px;
        border-radius: 50px;
        text-decoration: none;
        font-weight: bold;
        transition: transform 0.3s;
    " onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">🧑‍💻 About</a>

</div>

<!-- Language Selector -->

<div style="
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
    flex-wrap: wrap;
">
    <button onclick="showLanguage('en')" style="
        background: #3498db;
        color: white;
        border: none;
        padding: 8px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
    ">🇺🇸 English</button>

</div>

<!-- About Section -->

<div id="about" style="
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 30px;
    border-radius: 15px;
    margin: 25px 0;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
">
    <h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px;">🧑‍💻 About Me</h2>

</div>

<!-- Skills Section -->

<div id="skills" style="
    background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
    padding: 30px;
    border-radius: 15px;
    margin: 25px 0;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
">
    <h2 style="color: #2c3e50; border-bottom: 3px solid #2980b9; padding-bottom: 10px;">💪 Skills & Technologies</h2>

</div>

<!-- Projects Section -->

<div id="projects" style="
    background: linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%);
    padding: 30px;
    border-radius: 15px;
    margin: 25px 0;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
">
    <h2 style="color: #2c3e50; border-bottom: 3px solid #e74c3c; padding-bottom: 10px;">💡 Projects & Activities</h2>

</div>

<!-- Contact Section -->

<div id="contact" style="
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 30px;
    border-radius: 15px;
    margin: 25px 0;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    color: white;
">
    <h2 style="border-bottom: 3px solid rgba(255,255,255,0.3); padding-bottom: 10px;">📞 Contact Me</h2>

</div>

<!-- GitHub Stats -->

<div style="
    background: linear-gradient(135deg, #434343 0%, #000000 100%);
    padding: 30px;
    border-radius: 15px;
    margin: 25px 0;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    color: white;
">
    <h2 style="border-bottom: 3px solid #3498db; padding-bottom: 10px;">📊 GitHub Statistics</h2>

</div>

<!-- Footer -->

<div style="
    text-align: center;
    padding: 20px;
    margin-top: 30px;
    border-top: 2px solid #ecf0f1;
    color: #7f8c8d;
">
    <p>© 2024 Kayzen Izumi. All rights reserved.</p>
    <p style="font-size: 0.9em;">This portfolio is built with ❤️ using HTML & CSS in GitHub README</p>
</div>

</div>

<!-- JavaScript for Language Toggle -->

<script>
// Show default language (English)
document.getElementById('en-content').style.display = 'block';
document.getElementById('en-projects').style.display = 'block';

function showLanguage(lang) {
    // Hide all content
    document.getElementById('en-content').style.display = 'none';
    document.getElementById('id-content').style.display = 'none';
    document.getElementById('jp-content').style.display = 'none';
    
    document.getElementById('en-projects').style.display = 'none';
    document.getElementById('id-projects').style.display = 'none';
    document.getElementById('jp-projects').style.display = 'none';
    
    // Show selected language
    if (lang === 'en') {
        document.getElementById('en-content').style.display = 'block';
        document.getElementById('en-projects').style.display = 'block';
    } else if (lang === 'id') {
        document.getElementById('id-content').style.display = 'block';
        document.getElementById('id-projects').style.display = 'block';
    } else if (lang === 'jp') {
        document.getElementById('jp-content').style.display = 'block';
        document.getElementById('jp-projects').style.display = 'block';
    }
}
</script>

<!-- Schema.org Structured Data -->

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kayzen Izumi",
  "url": "https://github.com/Kayzen-dev-tech",
  "image": "https://via.placeholder.com/400x400/3498db/ffffff?text=KZ",
  "jobTitle": "Web Developer & Student",
  "sameAs": [
    "https://github.com/Kayzen-dev-tech"
  ],
  "knowsAbout": ["JavaScript", "Node.js", "Web Development", "WhatsApp Bots", "Automation"],
  "email": "kayzenxd96@gmail.com",
  "telephone": "+628152313006",
  "description": "Web Developer and Student passionate about web application development and automation. Skilled in JavaScript, Node.js, and modern web technologies."
}
</script>

<style>
/* Smooth scrolling for anchor links */
html {
    scroll-behavior: smooth;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .container {
        padding: 10px;
    }
    
    h1 {
        font-size: 2em !important;
    }
    
    .nav-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .nav-buttons a {
        width: 80%;
        margin-bottom: 10px;
    }
}
</style>
