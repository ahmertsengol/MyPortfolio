import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GitHubProfile from "@/components/GitHubProfile";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ahmet Mert Şengöl | Full-Stack Developer & AI Enthusiast</title>
        <meta 
          name="description" 
          content="Ahmet Mert Şengöl - Full-Stack Developer. AI destekli web teknolojileri, Python, JavaScript, C# ve daha fazlası ile ölçeklenebilir uygulamalar geliştiriyorum." 
        />
        <meta name="keywords" content="Full-Stack Developer, AI, Machine Learning, Python, JavaScript, React, Türkiye" />
        <link rel="canonical" href="https://ahmertsengol.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <GitHubProfile />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
