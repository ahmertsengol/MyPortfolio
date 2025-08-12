import Container from "@/components/Container";
import { GithubRepo } from "@/lib/github";
import { IconExternal, IconFork, IconStar } from "@/components/Icons";

type Props = {
  repos: GithubRepo[];
};

export default function RepoList({ repos }: Props) {
  return (
    <section id="projects" className="py-12 sm:py-16" aria-labelledby="repos-heading">
      <Container>
        <h2 id="repos-heading" className="text-xl font-semibold tracking-tight">Featured Repositories</h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {repos.map((r) => (
            <li key={r.id} className="group rounded-xl border border-white/10 bg-black/30 backdrop-blur p-5 transition-all hover:bg-black/40 hover:-translate-y-0.5">
              <a href={r.html_url} target="_blank" rel="noreferrer" className="block">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base font-medium truncate flex items-center gap-2">
                    {r.name}
                    <IconExternal className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </h3>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm">→</span>
                </div>
                {r.description && (
                  <p className="mt-2 text-sm text-foreground/80 line-clamp-2">{r.description}</p>
                )}
                <div className="mt-3 flex items-center gap-3 text-xs text-foreground/70">
                  {typeof r.stargazers_count === "number" && (
                    <span className="inline-flex items-center gap-1"><IconStar /> {r.stargazers_count}</span>
                  )}
                  {typeof r.forks_count === "number" && (
                    <span className="inline-flex items-center gap-1"><IconFork /> {r.forks_count}</span>
                  )}
                  {r.language && <span className="ml-auto rounded-full border border-white/15 bg-white/5 px-2 py-0.5">{r.language}</span>}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

