import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A responsive and interactive portfolio website built to showcase my skills, education, and real-time web design capabilities. Built using modern technologies with smooth animations and mobile-first design.",
      image: "/images/b.jpg", 
      tags: ["React", "TailwindCSS", "Framer Motion", "Vite"],
      demoUrl: "https://port-folio-gtjqdvbvr-balachandars-projects-dff9538e.vercel.app/#hero", 
      gitHubUrl: "https://github.com/Balaempire007/PortFolio/edit/main/src/components/ProjectsSection.jsx", 
    },
  ];

  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>

        <h1 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Featured <span className='text-primary'>Projects</span>
        </h1>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Below is a featured project that demonstrates my capabilities in front-end development, animation, and responsive design using modern JavaScript frameworks.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div key={project.id} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
              <div className='h-48 overflow-hidden bg-muted flex items-center justify-center'>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                ) : (
                  <span className='text-muted-foreground text-sm'>[No image provided]</span>
                )}
              </div>

              <div className='p-6'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>

                <div className='flex justify-between items-center'>
                  <div className='flex space-x-3'>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='text-foreground/80 hover:text-primary transition-colors duration-300'
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='text-foreground/80 hover:text-primary transition-colors duration-300'
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <a
            className='cosmic-button w-fit flex items-center mx-auto gap-2'
            target='_blank'
            rel="noopener noreferrer"
            href='https://github.com/Balaempire007/PortFolio/edit/main/src/components/ProjectsSection.jsx'
          >
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
