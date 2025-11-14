import Container from "@/components/Container";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-12 sm:py-16 border-t border-[--card-border]">
      <Container>
        <h2 id="about-heading" className="text-xl font-semibold tracking-tight">About</h2>
        <div className="mt-4 max-w-2xl space-y-4 text-foreground/80">
          <p>
            Hello, I am a Full-Stack Developer with a passion for building innovative and smart digital solutions!
            I am currently continuing my education at Fırat University and at the same time expanding my expertise
            in AI-powered web technologies.
          </p>
          <p>
            I have experience working with C#, Java, JavaScript and Python to develop scalable and efficient applications.
            I enjoy building capable, robust, high-performance web solutions in .NET and Node.js.
          </p>
          <p>
            I&apos;m actively learning AWS services to improve my cloud computing knowledge. I use Git & GitHub every day
            for collaboration, version control, and project management.
          </p>
          <p>
            For me, software development is more than just writing code; it&apos;s about solving real-world problems,
            improving user experiences, and constantly learning new things. I&apos;m always looking for ways to push
            boundaries, integrate AI into projects and stay ahead of industry trends.
          </p>
        </div>
      </Container>
    </section>
  );
}

