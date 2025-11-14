import Container from "@/components/Container";
import { ReactNode } from "react";

type Props = {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, title, children, className }: Props) {
  return (
    <section id={id} className={`py-12 sm:py-16 ${className ?? ""}`} aria-labelledby={title ? `${id}-heading` : undefined}>
      <Container>
        {title && (
          <h2 id={`${id}-heading`} className="text-xl sm:text-2xl font-semibold tracking-tight mb-6">
            {title}
          </h2>
        )}
        <div className="rounded-xl border border-[--card-border] bg-[--card-bg] backdrop-blur p-5">
          {children}
        </div>
      </Container>
    </section>
  );
}

