import Image from "next/image";
import Container from "@/components/Container";
import { GithubUser } from "@/lib/github";

type Props = {
  user: GithubUser;
};

export default function ProfileCard({ user }: Props) {
  return (
    <section className="pt-16 sm:pt-20" aria-labelledby="profile-heading">
      <Container>
        <div className="flex items-start gap-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur p-6">
          <div className="relative h-24 w-24 rounded-full overflow-hidden ring-1 ring-white/20">
            <Image src={user.avatar_url} alt={user.name ?? user.login} fill sizes="80px" className="object-cover" />
          </div>
          <div>
            <h1 id="profile-heading" className="text-3xl sm:text-4xl font-semibold tracking-tight">
              {user.name ?? user.login}
            </h1>
            <p className="mt-2 text-foreground/90 leading-relaxed">{user.bio ?? ""}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-foreground/80">
              {user.location && <span>📍 {user.location}</span>}
              <a href={user.html_url} target="_blank" rel="noreferrer" className="hover:underline">
                GitHub
              </a>
              {user.blog && (
                <a href={user.blog} target="_blank" rel="noreferrer" className="hover:underline">
                  Website
                </a>
              )}
              <span className="ml-auto text-foreground/70">★ {user.followers} · Repos {user.public_repos}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

