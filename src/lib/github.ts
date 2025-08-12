import { cache } from "react";

export type GithubUser = {
  login: string;
  name: string | null;
  bio: string | null;
  location: string | null;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  html_url: string;
  blog: string | null;
};

export type GithubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics?: string[];
};

const USERNAME = "ahmertsengol";

export const getUser = cache(async (): Promise<GithubUser> => {
  const res = await fetch(`https://api.github.com/users/${USERNAME}`, {
    headers: { Accept: "application/vnd.github+json" },
    next: { revalidate: 60 * 60 },
    cache: "force-cache",
  });
  if (!res.ok) throw new Error("GitHub user fetch failed");
  return (await res.json()) as GithubUser;
});

export const getTopRepos = cache(async (limit = 6): Promise<GithubRepo[]> => {
  const res = await fetch(
    `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`,
    {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 60 * 60 },
      cache: "force-cache",
    }
  );
  if (!res.ok) throw new Error("GitHub repos fetch failed");
  const data = (await res.json()) as GithubRepo[];
  const sorted = [...data].sort(
    (a, b) => b.stargazers_count - a.stargazers_count
  );
  return sorted.slice(0, limit);
});

