import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-lg border-white/10 shadow-lg bg-background/80">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 font-mono text-xl font-bold text-header">
          <div className="flex gap-5">
            <a href="#home"> celul.dev </a>

            <div className="flex gap-2">
              <a
                className="opacity-60 hover:opacity-100"
                href="https://www.linkedin.com/in/co%C5%9Fku-eyl%C3%BCl-co%C5%9Fkun-908141256/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-linkedin-icon lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <a className="opacity-60 hover:opacity-100" href="https://github.com/celul123">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-github-icon lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>

          <div
            className=" w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8 font-medium text-base">
            <a href="#home" className=" hover:text-white transition-colors">
              {" "}
              Home
            </a>
            <a href="#projects" className=" hover:text-white transition-colors">
              {" "}
              Projects
            </a>
            <a href="#contact" className=" hover:text-white transition-colors">
              {" "}
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
