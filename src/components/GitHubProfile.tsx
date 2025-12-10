import { Star, GitFork, ExternalLink, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useGitHubUser, useGitHubRepos } from "@/hooks/useGitHub";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const GitHubProfile = () => {
  const { data: user, isLoading: isUserLoading } = useGitHubUser();
  const { data: repos, isLoading: isReposLoading } = useGitHubRepos();
  const { t } = useTranslation();

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
        {/* Profile Card */}
        <Card className="bg-card/50 backdrop-blur-sm border-border p-8 mb-16 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            
            {/* Animated Avatar */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full opacity-70 group-hover:opacity-100 blur-md animate-spin-slow transition duration-1000"></div>
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500 to-teal-500 rounded-full opacity-30 animate-pulse blur-xl"></div>
              <img
                src={user.avatar_url}
                alt={user.name}
                className="relative w-36 h-36 rounded-full border-4 border-background shadow-2xl object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-background rounded-full z-10 animate-bounce"></div>
            </div>
            
            <div className="text-center md:text-left flex-1 space-y-4">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-1 tracking-tight">{user.name}</h2>
                <h3 className="text-xl text-primary font-medium flex items-center justify-center md:justify-start gap-2">
                  @{user.login}
                </h3>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {user.bio}
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-2">
                <span className="text-sm text-foreground/80 flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full border border-border/50">
                  📍 {user.location}
                </span>
                <span className="text-sm text-foreground/80 flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full border border-border/50">
                  <Star className="h-4 w-4 text-yellow-500" /> {stats.stars} {t('profile.stars')}
                </span>
                <span className="text-sm text-foreground/80 flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full border border-border/50">
                  📚 {user.public_repos} {t('profile.repos')}
                </span>
                <span className="text-sm text-foreground/80 flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full border border-border/50">
                  👥 {user.followers} {t('profile.followers')}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 min-w-[140px]">
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <ExternalLink className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={`https://linkedin.com/in/${user.login}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#0077b5] text-white font-medium rounded-lg hover:bg-[#006399] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <ExternalLink className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contribution Graph */}
          <div className="mt-12 border-t border-border/50 pt-8">
             <h4 className="text-lg font-semibold mb-4 text-foreground/90 flex items-center gap-2">
               <GitFork className="h-5 w-5 text-primary" />
               {t('profile.githubGraph')}
             </h4>
             <div className="w-full overflow-hidden rounded-xl border border-border/50 bg-background/50 p-4 shadow-inner">
               <img 
                 src={`https://ghchart.rshah.org/${user.login}`} 
                 alt="GitHub Contribution Graph"
                 className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
               />
               <p className="text-xs text-muted-foreground mt-2 text-center">
                 {t('profile.graphDesc')}
               </p>
             </div>
          </div>
        </Card>

        {/* Repositories Grid */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-foreground relative inline-block">
            {t('profile.featuredProjects')}
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
          </h3>
          <a 
            href={`${user.html_url}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            {t('profile.viewAll')} <ExternalLink className="h-3 w-3" />
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
