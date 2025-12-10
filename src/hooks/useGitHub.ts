import { useQuery } from "@tanstack/react-query";

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
  fork: boolean;
}

const USERNAME = "ahmertsengol";

// Fetch User Data
const fetchUser = async (): Promise<GitHubUser> => {
  const res = await fetch(`https://api.github.com/users/${USERNAME}`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
};

// Fetch Repos
const fetchRepos = async (): Promise<GitHubRepo[]> => {
  const res = await fetch(
    `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`
  );
  if (!res.ok) throw new Error("Failed to fetch repos");
  return res.json();
};

export const useGitHubUser = () => {
  return useQuery({
    queryKey: ["githubUser", USERNAME],
    queryFn: fetchUser,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};

export const useGitHubRepos = () => {
  return useQuery({
    queryKey: ["githubRepos", USERNAME],
    queryFn: fetchRepos,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};
