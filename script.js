document.addEventListener('DOMContentLoaded', function() {
    // Sample project data for beginner-level projects
    const projects = [
        {
            title: 'Basic HTML Page',
            description: 'Simple HTML webpage with headings and paragraphs',
            image: 'images/placeholder.png'
        },
        {
            title: 'JavaScript Alert Box',
            description: 'A web page that shows an alert message when a button is clicked',
            image: 'images/placeholder.png'
        },
        {
            title: 'CSS Styled Button',
            description: 'Create a button with custom colors and hover effects using CSS',
            image: 'images/placeholder.png'
        }
    ];

    // Dynamically add projects to the page
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'col-md-4 mb-3';
        projectElement.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${project.image}" class="card-img-top" alt="${project.title}" style="height: 100px; object-fit: cover;">
                <div class="card-body p-2">
                    <h6 class="card-title mb-0">${project.title}</h6>
                    <p class="card-text small text-muted">${project.description}</p>
                </div>
            </div>
        `;
        projectList.appendChild(projectElement);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
