import { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      <section className="py-16 px-12 lg:h-screen snap-start relative isolate mt-16 ">
        {children}
      </section>
    </div>
  );
}
