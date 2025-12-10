import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiAmazonwebservices, SiDocker, SiGit } from 'react-icons/si';

const logos = [
  { Icon: SiReact, label: "React" },
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiTailwindcss, label: "Tailwind CSS" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiPython, label: "Python" },
  { Icon: SiAmazonwebservices, label: "AWS" },
  { Icon: SiDocker, label: "Docker" },
  { Icon: SiGit, label: "Git" },
];

const LogoLoop = () => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] py-10">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {[...logos, ...logos].map((logo, index) => (
          <li key={index} className="mx-8">
             <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <logo.Icon className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors" />
             </div>
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {[...logos, ...logos].map((logo, index) => (
          <li key={index} className="mx-8">
             <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <logo.Icon className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors" />
             </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoLoop;
