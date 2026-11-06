import React from 'react';

const WorkExperience = () => {
  return (
    <div className=" xl:h-screen xl:py-20 p-5">
      <div className="container h-full mx-auto max-w-screen-lg space-y-10 py-10 xl:py-20 tracking-wide">
        <h2 className=" text-red-600 text-xl xl:text-3xl">
          {'<Work Experience/>'}
          <span className="animate-blink-caret">_</span>
        </h2>
        <div className="flex flex-col">
          <div className="pb-4 space-y-2">
            <div className="flex flex-col xl:flex-row justify-between font-bold text-xs  xl:text-xl ">
              <p>Associate Front-End Software Engineer</p>
              <p className="pt-1 xl:pt-0">August 2022 - Present</p>
            </div>
            <div className="flex flex-col xl:flex-row justify-between text-xs xl:text-sm ">
              <p className="pt-2 xl:pt-0">Manulife IT Delivery Center</p>
              <p className="py-2 xl:pt-0">
                6th and 7th Floors NEX Tower, 6786 Ayala Avenue Makati City 1229
                Philippines
              </p>
            </div>
          </div>
          <ul className="space-y-3 xl:pt-10 text-xs xl:text-lg">
            <li>
              <div className="flex space-x-3">
                <span>•</span>
                <p>
                  Write and refactor web pages and web components using
                  technologies like HTML5, SCSS, JavaScript, Angular 11 to
                  Angular 20 (RXJS & NGRX).
                </p>
              </div>
            </li>
            <li>
              <div className="flex space-x-3">
                <span>•</span>
                <p>
                  Collaborated with backend teams working in Java (Spring Boot),
                  gaining hands-on exposure to API integration, debugging, and
                  deployment pipelines.
                </p>
              </div>
            </li>
            <li>
              <div className="flex space-x-3">
                <span>•</span>
                <p>
                  Ensured above 90% code quality/coverage in Sonar Qube and
                  Jasmine.
                </p>
              </div>
            </li>
            <li>
              <div className="flex space-x-3">
                <span>•</span>
                <p>
                  Mentored fellow developers in an Angular Best Practices
                  sessions via MS Teams.
                </p>
              </div>
            </li>
            <li>
              <div className="flex space-x-3">
                <span>•</span>
                <p>
                  Served a key role in bridging two projects and laying the
                  foundation for future micro frontend adoption across the
                  organization.
                </p>
              </div>
            </li>
            <li>
              <div className="flex space-x-3">
                <span>•</span>
                <p>
                  SME of internal dynamic form builder within the project, and
                  maintained UI internal library resulting in 20% more users
                  submitting digital insurance forms.
                </p>
              </div>
            </li>
            <li>
              <div className="flex space-x-3">
                <span>•</span>
                <p>
                  Leveraged GitHub Copilot and AI sub-agents as a tool for
                  developing application logic, APIs, and automation scripts,
                  increasing development speed and feature delivery by 20-30%.
                </p>
              </div>
            </li>
            <li>
              <div className="flex space-x-3">
                <span>•</span>
                <p>
                  Optimized asset loading and animation performance, reducing
                  LCP from 12 seconds down to 2 seconds and CLS metrics for
                  improved Lighthouse and Core Web Vitals scores
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
