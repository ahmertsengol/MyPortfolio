import { Star, GitFork, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

const GitHubProfile = () => {
  const profile = {
    name: "Ahmet Mert Şengöl",
    username: "ahmertsengol",
    avatar: "https://avatars.githubusercontent.com/u/118382440?v=4",
    bio: "Fırat University Software Engineering",
    location: "Turkey",
    stats: { stars: 66, repos: 18 }
  };

  const repositories = [
    {
      name: "SortingAlgorithms",
      description: "Sıralama algoritmalarının görselleştirilmesi ve karşılaştırılması",
      stars: 7,
      language: "Python",
      languageColor: "hsl(var(--chart-2))"
    },
    {
      name: "Youtube-comment-RAG",
      description: "YouTube videolarını tarayıp, Gemini API ile AI destekli sohbet yapan RAG aracı",
      stars: 5,
      language: "Python",
      languageColor: "hsl(var(--chart-2))"
    },
    {
      name: "mediapipe-facemesh-to-obj-blender",
      description: "2D fotoğrafları 3D yüz modeline dönüştüren MediaPipe Face Mesh aracı",
      stars: 5,
      language: "Python",
      languageColor: "hsl(var(--chart-2))"
    },
    {
      name: "face-auth-opencv",
      description: "OpenCV ile derin öğrenme modeli kullanarak yüz tanıma sistemi",
      stars: 4,
      language: "Python",
      languageColor: "hsl(var(--chart-2))"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Profile Card */}
        <Card className="bg-card border-border p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-24 h-24 rounded-full border-2 border-border"
            />
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-1">{profile.name}</h2>
              <p className="text-muted-foreground mb-2">{profile.bio}</p>
              <p className="text-sm text-muted-foreground mb-4">📍 {profile.location}</p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <a
                  href={`https://github.com/${profile.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={`https://linkedin.com/in/${profile.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Star className="h-4 w-4" /> {profile.stats.stars} · Repos {profile.stats.repos}
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Repositories */}
        <h3 className="text-xl font-semibold text-foreground mb-6">Öne Çıkan Projeler</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repositories.map((repo) => (
            <a
              key={repo.name}
              href={`https://github.com/${profile.username}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-card border-border p-5 h-full hover:border-muted-foreground/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-medium text-foreground group-hover:text-accent transition-colors">
                    {repo.name}
                  </h4>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {repo.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5" />
                    {repo.stars}
                  </span>
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
