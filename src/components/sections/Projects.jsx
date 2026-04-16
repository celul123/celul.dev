import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          <h2 className="text-4xl font-bold mb-8 text-header">Projects</h2>
          <div className="flex flex-col gap-8">
            <div className="w-full p-6 rounded-xl border border-normal/10 hover:-translate-y-1 hover:border-primary/30 hover:shadow-secondary/20 transition-all">
              <h3 className="text-xl font-bold mb-2">DART Team Website</h3>
              <p className="text-secondary mb-3">
                A simple website for the team DART with my teammate Buse.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Html", "Css", "Javascript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-primary/10 text-primary py-1 px-3 rounded-3xl text-sm hover:bg-primary/20 hover:shadow-secondary/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-end items-center">
                <a
                  className="text-primary hover:text-main-header/60 transition-colors"
                  href="https://github.com/celul123/D.A.R.T."
                >
                  {" "}
                  View Project ➜{" "}
                </a>
              </div>
            </div>

            <div className="w-full p-6 rounded-xl border border-normal/10 hover:-translate-y-1 hover:border-primary/30 hover:shadow-secondary/20 transition-all">
              <h3 className="text-xl font-bold mb-2">Ukiyo</h3>
              <p className="text-secondary mb-3">
                An e-commerce website to sell DIY stuff. For now only Figma
                design is available. I made with my friends:<br></br> - Filiz,
                Guler, Defne, Yasemin
              </p>
              <div className="flex flex-wrap gap-2">
                {["Figma"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-primary/10 text-primary py-1 px-3 rounded-3xl text-sm hover:bg-primary/20 hower-shaow-secondary/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-end items-center">
                <a
                  className="text-primary hover:text-main-header/60 transition-colors"
                  href="https://www.figma.com/proto/gjmHinnfhgBFAgBfPxQvS2/ukiyo?node-id=0-1&t=5fgvoolOcUUx9M3p-1"
                >
                  {" "}
                  View Project ➜{" "}
                </a>
              </div>
            </div>

            <div className="w-full p-6 rounded-xl border border-normal/10 hover:-translate-y-1 hover:border-primary/30 hover:shadow-secondary/20 transition-all">
              <h3 className="text-xl font-bold mb-2">Koli Koli</h3>
              <p className="text-secondary mb-3">
                A stock management web app for seling eggs and chicken products.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Shadcn"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-primary/10 text-primary py-1 px-3 rounded-3xl text-sm hover:bg-primary/20 hower-shaow-secondary/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-end items-center">
                <a
                  className="text-primary hover:text-main-header/60 transition-colors"
                  href="https://github.com/celul123/kolikoli"
                >
                  {" "}
                  View Project ➜{" "}
                </a>
              </div>
            </div>

            <div className="w-full p-6 rounded-xl border border-normal/10 hover:-translate-y-1 hover:border-primary/30 hover:shadow-secondary/20 transition-all">
              <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
              <p className="text-secondary mb-3">
                This is my portfolio website that you are currently viewing.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-primary/10 text-primary py-1 px-3 rounded-3xl text-sm hover:bg-primary/20 hower-shaow-secondary/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-end items-center">
                <a
                  className="text-primary hover:text-main-header/60 transition-colors"
                  href="https://github.com/celul123/celul.dev"
                >
                  {" "}
                  View Project ➜{" "}
                </a>
              </div>
            </div>

            <div className="w-full p-6 rounded-xl border border-normal/10 hover:-translate-y-1 hover:border-primary/30 hover:shadow-secondary/20 transition-all">
              <h3 className="text-xl font-bold mb-2">Cyber Risk Analyzer</h3>
              <p className="text-secondary mb-3">
                A cyber risk analysis tool using Python to evaluate vulnerabilities with CVSS scoring and risk modeling.
                Implemented interactive dashboards and automated reporting for risk visualization and prioritization.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "Html", "Css"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-primary/10 text-primary py-1 px-3 rounded-3xl text-sm hover:bg-primary/20 hower-shaow-secondary/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-end items-center">
                <a
                  className="text-primary hover:text-main-header/60 transition-colors"
                  href="https://celul123.github.io/cyber-risk-analyzer/"
                >
                  {" "}
                  View Project ➜{" "}
                </a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
