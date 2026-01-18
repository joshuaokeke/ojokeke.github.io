document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Show more experience
    const moreExperience = [
        {
            title: "GIS/MEL Specialist",
            company: "Creative Associates International Abuja, Nigeria - USAID West Africa Trade and Investment Hub",
            date: "June 2022 - January 2023",
            responsibilities: [
                "Led the development of MEL systems, prioritizing data quality assurance procedures",
                "Optimized data entry processes within Creative's MEDAL platform to enhance MEL efficiency",
                "Innovatively crafted user-friendly dashboards for the Trade Hub, centred on data and GIS analysis"
            ]
        },
        {
            title: "Monitoring and Evaluation Officer",
            company: "Plan International Abuja, Nigeria - Nutrition International Funded programme",
            date: "January 2022 - June 2022",
            responsibilities: [
                "Played a key role in developing and executing the program M&E framework",
                "Utilized data-driven insights for monthly and quarterly reviews of project targets",
                "Established efficient data flows and analytics pipelines for timely reporting",
                "Supported building analytics capacity in local partners through training"
            ]
        },
        {
            title: "GIS Manager",
            company: "Propcom Mai-Karfi (PM), Palladium International Development, Abuja Nigeria",
            date: "August 2018 - July 2021",
            responsibilities: [
                "Developed data-driven Scope of Work for surveys and assessments",
                "Selected consultants for rigorous impact evaluations leveraging data science methodologies",
                "Maintained and updated Propcom's GIS database dashboard for geospatial analytics",
                "Provided data-focused support for Monitoring and Evaluation activities"
            ]
        }
    ];
    
    document.getElementById('showMoreExp').addEventListener('click', function() {
        const container = document.getElementById('moreExperience');
        
        if (container.classList.contains('hidden')) {
            moreExperience.forEach(exp => {
                const expHTML = `
                    <div class="timeline-item">
                        <h3>${exp.title}</h3>
                        <p class="company">${exp.company}</p>
                        <p class="date">${exp.date}</p>
                        <ul>
                            ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                        </ul>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', expHTML);
            });
            
            container.classList.remove('hidden');
            this.textContent = 'Show Less Experience';
        } else {
            container.innerHTML = '';
            container.classList.add('hidden');
            this.textContent = 'Show More Experience';
        }
    });
    
    // Show more projects
    const moreProjects = [
        {
            title: "Nigeria Agriculture Crop Produce Sales",
            description: "Federal Ministry of Agriculture and Rural Development",
            link: "https://www.arcgis.com/apps/dashboards/cba4cc860a394ba486b0bdbd2f2ffc72"
        },
        {
            title: "Oil Palm Growers' Association of Nigeria",
            description: "National farmers dashboard",
            link: "https://www.arcgis.com/apps/dashboards/a1a5e1383d71415abfc27d22060fe426"
        },
        {
            title: "Rural Electrification Project",
            description: "Nigerian Rural Electrification Agency (REA)",
            link: "https://okekegis.maps.arcgis.com/apps/dashboards/ce1c5059adcb45e882c44a05b0fd8398"
        },
        {
            title: "Wuye Ultra-Modern Market",
            description: "Federal Capital Development Administration",
            link: "https://okekegis.maps.arcgis.com/apps/dashboards/3260975652314aad99ca9991ac6c5d0a"
        }
    ];
    
    document.getElementById('showMoreProjects').addEventListener('click', function() {
        const container = document.getElementById('moreProjects');
        
        if (container.classList.contains('hidden')) {
            moreProjects.forEach(project => {
                const projectHTML = `
                    <div class="project-card">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="${project.link}" target="_blank" class="btn">View Project</a>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', projectHTML);
            });
            
            container.classList.remove('hidden');
            this.textContent = 'Show Less Projects';
        } else {
            container.innerHTML = '';
            container.classList.add('hidden');
            this.textContent = 'Show More Projects';
        }
    });
    
    // Show more publications
    const morePublications = [
        {
            title: "Landuse-Landcover Change and Gully Erosion Relationships: Study of Nanka South-Eastern Nigeria",
            journal: "Springer Books, 2017",
            link: "https://link.springer.com/chapter/10.1007/978-3-319-61297-3_22"
        },
        {
            title: "A 30-year appraisal of soil-gully erosion as a driver of plant extinction due to changed soil-lithological characterization in southern Nigeria",
            journal: "International Multidisciplinary Scientific GeoConference SGEM, 2017",
            link: "https://doi.org/10.5593/sgem2017/32/S13.001"
        },
        {
            title: "Detection of Land Use and Land Cover Change Around Eti-Osa Coastal Zone, Lagos State, Nigeria Using Remote Sensing and GIS",
            journal: "International Research Journal of Environment Sciences, 2016",
            link: "http://www.isca.in/IJENS/Archive/v5/i8/1.ISCA-IRJEvS-2016-044.pdf"
        },
        {
            title: "Mapping Flood Vulnerability Arising from Land Use/Land Covers Change Along River Kaduna, Kaduna State, Nigeria",
            journal: "IOSR Journal of Humanities and Social Science, 2014",
            link: "https://doi.org/10.9790/0837-1974155160"
        }
    ];
    
    document.getElementById('showMorePubs').addEventListener('click', function() {
        const container = document.getElementById('morePublications');
        
        if (container.classList.contains('hidden')) {
            morePublications.forEach(pub => {
                const pubHTML = `
                    <div class="publication">
                        <h3>${pub.title}</h3>
                        <p class="journal">${pub.journal}</p>
                        <a href="${pub.link}" target="_blank" class="btn">View Publication</a>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', pubHTML);
            });
            
            container.classList.remove('hidden');
            this.textContent = 'Show Less Publications';
        } else {
            container.innerHTML = '';
            container.classList.add('hidden');
            this.textContent = 'Show More Publications';
        }
    });
    
    // Simple form handling
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real implementation, you would send this data to a server
        console.log('Form submitted:', { name, email, message });
        
        alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
        this.reset();
    });
});