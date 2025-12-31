document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.getElementById('cursor');
    const browserContent = document.getElementById('browser-content');
    
    // Custom cursor movement
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Load home page by default
    loadPage('home');
    
    // Navigation functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('nav-item')) {
            e.preventDefault();
            const page = e.target.getAttribute('href').substring(1);
            loadPage(page);
            
            // Update active nav item
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            e.target.classList.add('active');
        }
        
        // Handle form submission
        if (e.target.classList.contains('form-button')) {
            e.preventDefault();
            alert('Message sent! (This is a demo, so no actual message was sent)');
        }
    });
    
    // Load different pages
    function loadPage(page) {
        let content = '';
        
        switch(page) {
            case 'home':
                content = `
                    <div class="portfolio-header">
                        <h1>Your Name</h1>
                        <p>Software Engineer</p>
                    </div>
                    
                    <div class="nav-menu">
                        <a href="#about" class="nav-item">ABOUT</a>
                        <a href="#experience" class="nav-item">EXPERIENCE</a>
                        <a href="#projects" class="nav-item">PROJECTS</a>
                        <a href="#contact" class="nav-item">CONTACT</a>
                    </div>
                    
                    <div class="portfolio-section">
                        <h2>Welcome</h2>
                        <p>I'm Your Name, a passionate software engineer with expertise in modern web technologies.</p>
                        <p>I graduated from University Name with a degree in Computer Science in Year. Since then, I've been working at Company Name as a Software Engineer.</p>
                        <p>My journey into programming started when I was young, fueled by curiosity about how things work. This led me to participate in robotics competitions and eventually pursue a career in software development.</p>
                    </div>
                    
                    <div class="portfolio-section">
                        <h2>Skills</h2>
                        <ul>
                            <li>Programming Languages: JavaScript, Python, Java, C++</li>
                            <li>Web Technologies: HTML, CSS, React, Node.js</li>
                            <li>Database: MySQL, MongoDB</li>
                            <li>Tools: Git, Docker, AWS</li>
                        </ul>
                    </div>
                    
                    <div class="copyright">
                        © Copyright ${new Date().getFullYear()} Your Name
                    </div>
                `;
                break;
                
            case 'about':
                content = `
                    <div class="portfolio-header">
                        <h1>About Me</h1>
                    </div>
                    
                    <div class="nav-menu">
                        <a href="#home" class="nav-item">HOME</a>
                        <a href="#experience" class="nav-item">EXPERIENCE</a>
                        <a href="#projects" class="nav-item">PROJECTS</a>
                        <a href="#contact" class="nav-item">CONTACT</a>
                    </div>
                    
                    <div class="portfolio-section">
                        <h2>Background</h2>
                        <p>I attended University Name from Year to Year, where I earned my Bachelor's degree in Computer Science.</p>
                        <p>During my time at university, I was actively involved in various activities including the robotics club and programming competitions.</p>
                    </div>
                    
                    <div class="portfolio-section">
                        <h2>Interests</h2>
                        <p>Outside of programming, I enjoy:</p>
                        <ul>
                            <li>Music production</li>
                            <li>Digital art</li>
                            <li>Hiking and outdoor activities</li>
                            <li>Reading science fiction</li>
                        </ul>
                    </div>
                    
                    <div class="portfolio-section">
                        <h2>Personal</h2>
                        <p>I'm a member of various communities and enjoy collaborating with others on interesting projects.</p>
                        <p>Feel free to reach out to me if you share similar interests or would like to work together on a project.</p>
                    </div>
                    
                    <div class="copyright">
                        © Copyright ${new Date().getFullYear()} Your Name
                    </div>
                `;
                break;
                
            case 'experience':
                content = `
                    <div class="portfolio-header">
                        <h1>Experience</h1>
                    </div>
                    
                    <div class="nav-menu">
                        <a href="#home" class="nav-item">HOME</a>
                        <a href="#about" class="nav-item">ABOUT</a>
                        <a href="#projects" class="nav-item">PROJECTS</a>
                        <a href="#contact" class="nav-item">CONTACT</a>
                    </div>
                    
                    <div class="portfolio-section">
                        <h2>Work Experience</h2>
                        
                        <div class="project-card">
                            <h3>Software Engineer - Company Name</h3>
                            <p><strong>Year - Present</strong></p>
                            <p>Responsible for developing and maintaining web applications using modern technologies.</p>
                            <ul>
                                <li>Developed features for company's main product</li>
                                <li>Collaborated with cross-functional teams</li>
                                <li>Participated in code reviews and improved code quality</li>
                            </ul>
                        </div>
                        
                        <div class="project-card">
                            <h3>Software Intern - Company Name</h3>
                            <p><strong>Year - Year</strong></p>
                            <p>Assisted in the development of software solutions and gained hands-on experience in a professional environment.</p>
                            <ul>
                                <li>Contributed to various projects</li>
                                <li>Learned industry best practices</li>
                                <li>Developed skills in teamwork and communication</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="portfolio-section">
                        <h2>Education</h2>
                        
                        <div class="project-card">
                            <h3>University Name</h3>
                            <p><strong>Year - Year</strong></p>
                            <p>Bachelor of Science in Computer Science</p>
                            <ul>
                                <li>Relevant coursework: Data Structures, Algorithms, Web Development</li>
                                <li>Activities: Robotics Club, Programming Team</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="copyright">
                        © Copyright ${new Date().getFullYear()} Your Name
                    </div>
                `;
                break;
                
            case 'projects':
                content = `
                    <div class="portfolio-header">
                        <h1>Projects & Hobbies</h1>
                    </div>
                    
                    <div class="nav-menu">
                        <a href="#home" class="nav-item">HOME</a>
                        <a href="#about" class="nav-item">ABOUT</a>
                        <a href="#experience" class="nav-item">EXPERIENCE</a>
                        <a href="#contact" class="nav-item">CONTACT</a>
                    </div>
                    
                    <div class="portfolio-section">
                        <h2><span class="project-icon">💻</span>Software Projects</h2>
                        
                        <div class="project-card">
                            <h3>Project Name 1</h3>
                            <p>A web application that helps users track their habits and achieve their goals.</p>
                            <p>Built with React, Node.js, and MongoDB.</p>
                        </div>
                        
                        <div class="project-card">
                            <h3>Project Name 2</h3>
                            <p>A mobile app that provides real-time weather updates and forecasts.</p>
                            <p>Built with React Native and integrated with a weather API.</p>
                        </div>
                    </div>
                    
                    <div class="portfolio-section">
                        <h2><span class="project-icon">🎵</span>Music Ventures</h2>
                        
                        <div class="project-card">
                            <h3>Music Production</h3>
                            <p>I create electronic music as a hobby, experimenting with different genres and styles.</p>
                            <p>Tools: Ableton Live, various synthesizers and digital audio workstations.</p>
                        </div>
                    </div>
                    
                    <div class="portfolio-section">
                        <h2><span class="project-icon">🎨</span>Art Endeavors</h2>
                        
                        <div class="project-card">
                            <h3>Digital Art</h3>
                            <p>I enjoy creating digital art using various software and tools.</p>
                            <p>Tools: Adobe Photoshop, Illustrator, Procreate.</p>
                        </div>
                    </div>
                    
                    <div class="copyright">
                        © Copyright ${new Date().getFullYear()} Your Name
                    </div>
                `;
                break;
                
            case 'contact':
                content = `
                    <div class="portfolio-header">
                        <h1>Contact</h1>
                    </div>
                    
                    <div class="nav-menu">
                        <a href="#home" class="nav-item">HOME</a>
                        <a href="#about" class="nav-item">ABOUT</a>
                        <a href="#experience" class="nav-item">EXPERIENCE</a>
                        <a href="#projects" class="nav-item">PROJECTS</a>
                    </div>
                    
                    <div class="portfolio-section">
                        <h2>Get In Touch</h2>
                        <p>If you'd like to contact me, feel free to send me a message using the form below or email me directly at your.email@example.com.</p>
                        <p>All messages get forwarded straight to my personal email.</p>
                    </div>
                    
                    <div class="portfolio-section">
                        <form class="contact-form">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="email">Email *</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="company">Company</label>
                                <input type="text" id="company" name="company">
                            </div>
                            
                            <div class="form-group">
                                <label for="message">Message *</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                            
                            <button type="submit" class="form-button">Send Message</button>
                        </form>
                    </div>
                    
                    <div class="copyright">
                        © Copyright ${new Date().getFullYear()} Your Name
                    </div>
                `;
                break;
        }
        
        browserContent.innerHTML = content;
    }
});