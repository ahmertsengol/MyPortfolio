import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="py-8">
      <Container className="flex items-center justify-between text-sm text-foreground/70 rounded-t-xl border-x border-t border-[--glass-border] bg-[--glass-bg]">
        <p>© {new Date().getFullYear()} Ahmet Mert Sengöl</p>
        <p className="hidden sm:block">My Portfolio</p>
      </Container>
    </footer>
  );
}

