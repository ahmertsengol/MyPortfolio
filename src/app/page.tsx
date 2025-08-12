import ProfileCard from "@/components/ProfileCard";
import RepoList from "@/components/RepoList";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Timeline from "@/components/Timeline";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import { getUser, getTopRepos } from "@/lib/github";

export default async function Home() {
  const [user, repos] = await Promise.all([getUser(), getTopRepos(6)]);
  return (
    <main>
      <Hero />
      <ProfileCard user={user} />
      <RepoList repos={repos} />
      <Timeline />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
