import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="py-8">
      <Container className="flex items-center justify-between text-sm text-foreground/70 rounded-t-xl border-x border-t border-white/10 bg-black/20">
        <p>© {new Date().getFullYear()} Ahmet</p>
        <p className="hidden sm:block">My Portfolio</p>
      </Container>
    </footer>
  );
}

