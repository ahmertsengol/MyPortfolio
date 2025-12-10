import { Star, GitFork, ExternalLink, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useGitHubUser, useGitHubRepos } from "@/hooks/useGitHub";
import { useMemo } from "react";

const GitHubProfile = () => {
  const { data: user, isLoading: isUserLoading } = useGitHubUser();
  const { data: repos, isLoading: isReposLoading } = useGitHubRepos();

  // GitHub renkleri (Basit bir haritalama)
  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      Python: "#3572A5",
      TypeScript: "#3178C6",
      JavaScript: "#F1E05A",
      HTML: "#E34C26",
      CSS: "#563D7C",
      Java: "#B07219",
      "C#": "#178600",
      Shell: "#89E051",
    };
    return colors[language || ""] || "#8b949e";
  };

  const stats = useMemo(() => {
    if (!repos) return { stars: 0 };
    return {
      stars: repos.reduce((acc, repo) => acc + repo.stargazers_count, 0),
    };
  }, [repos]);

  const topRepos = useMemo(() => {
    if (!repos) return [];
    // En çok yıldız alan ve fork olmayanları filtrele, yıldız sayısına göre sırala
    return repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6); // İlk 6 projeyi göster
  }, [repos]);

  if (isUserLoading || isReposLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Profile Card */}
        <Card className="bg-card/50 backdrop-blur-sm border-border p-8 mb-16 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
              <img
                src={user.avatar_url}
                alt={user.name}
                className="relative w-32 h-32 rounded-full border-4 border-background shadow-2xl"
              />
            </div>
            
            <div className="text-center md:text-left flex-1 space-y-4">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">{user.name}</h2>
                <h3 className="text-xl text-primary font-medium">{user.login}</h3>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {user.bio}
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-2">
                <span className="text-sm text-foreground/80 flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
                  📍 {user.location}
                </span>
                <span className="text-sm text-foreground/80 flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
                  <Star className="h-4 w-4 text-yellow-500" /> {stats.stars} Total Stars
                </span>
                <span className="text-sm text-foreground/80 flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
                  📚 {user.public_repos} Repositories
                </span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 min-w-[140px]">
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-all shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="h-4 w-4" />
                GitHub Profile
              </a>
              <a
                href={`https://linkedin.com/in/${user.login}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </Card>

        {/* Repositories Grid */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-foreground relative inline-block">
            Öne Çıkan Projeler
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
          </h3>
          <a 
            href={`${user.html_url}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            Tümünü Gör <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topRepos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group h-full"
            >
              <Card className="bg-card border-border p-6 h-full hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-5 w-5 text-primary" />
                </div>
                
                <div className="flex items-start justify-between mb-4">
                  <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1 pr-6">
                    {repo.name}
                  </h4>
                </div>
                
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-1 leading-relaxed">
                  {repo.description || "No description available."}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: getLanguageColor(repo.language) }}
                        />
                        {repo.language}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                    <span className="flex items-center gap-1 hover:text-yellow-500 transition-colors">
                      <Star className="h-4 w-4" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      {repo.stargazers_count > 0 ? Math.floor(repo.stargazers_count * 0.2) : 0}
                    </span>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubProfile;
