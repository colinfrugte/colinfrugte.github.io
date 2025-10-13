import Container from "@/components/Container";

export default function Contact() {
  return (
    <Container className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/bg1.jpg')] bg-cover bg-center opacity-10" />
      </div>
      <section id="contact">
        <div>Contact</div>
      </section>
    </Container>
  );
}
