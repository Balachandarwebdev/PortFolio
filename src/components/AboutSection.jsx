import React from "react";
import { Code, Server, Layers, Download } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background text-foreground">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Text Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">
              Passionate Web Developer
            </h3>
            <p className="text-muted-foreground">
              I'm a self-driven and creative Web Developer with solid experience in building dynamic and responsive web applications. I specialize in <strong>React.js</strong> for front-end development and <strong>Node.js, Express.js, and MongoDB</strong> for backend solutions.
            </p>
            <p className="text-muted-foreground">
              I have a strong grasp of modern web development standards and RESTful API integration. My goal is to build performant applications that provide great user experience and clean, maintainable code.
            </p>

            <div className="flex gap-4 pt-6">
              <a
                href="#contact"
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition"
              >
                Contact Me
              </a>
              <a
                href="https://raw.githubusercontent.com/Balaempire007/Resume/main/Balachandar.pdf"
                className="flex items-center gap-2 border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary/10 transition"
                download
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Skills Section */}
          <div className="grid gap-6">
            {/* Front-End */}
            <div className="p-5 border rounded-xl hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <Code className="text-primary" />
                <div>
                  <h4 className="text-lg font-semibold">Front-End Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Building responsive UI with React.js, HTML, CSS, and JavaScript.
                  </p>
                </div>
              </div>
            </div>

            {/* Back-End */}
            <div className="p-5 border rounded-xl hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <Server className="text-primary" />
                <div>
                  <h4 className="text-lg font-semibold">Back-End Development</h4>
                  <p className="text-sm text-muted-foreground">
                    RESTful API development using Node.js, Express.js, and MongoDB.
                  </p>
                </div>
              </div>
            </div>

            {/* Version Control */}
            <div className="p-5 border rounded-xl hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <Layers className="text-primary" />
                <div>
                  <h4 className="text-lg font-semibold">Version Control</h4>
                  <p className="text-sm text-muted-foreground">
                    Collaborating via Git and GitHub with clean and organized commits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
