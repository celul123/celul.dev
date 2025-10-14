import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl leading-snug md:text-7xl font-bold pb-6 bg-gradient-to-r from-primary to-main-header bg-clip-text text-transparent leading-right">
            Hi again, I am Eylul!
          </h1>
          <p className="text-header text-lg">
            I am a girl who is trying to stay alive (optional) in the world of
            tech. Come and be part of my journey.
          </p>
          <p className="text-header text-lg mb-8">
            If you came here to check my cv it is{" "}
            <a
              className="underline"
              href="https://drive.google.com/file/d/14ehS9eRnZCep8yf0D24Wa1LNGD5tks1O/view?usp=sharing"
            >
              here
            </a>
            .
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="border border-primary/50 text-primary py-2 px-5 rounded-2xl font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-secondary hover:bg-primary/30"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-primary/50 text-primary py-2 px-5 rounded-2xl font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-secondary hover:bg-primary/30"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
