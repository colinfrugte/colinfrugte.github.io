import Container from "@/components/Container";
import Image from "next/image";

export default function Introduction() {
  return (
    <Container className="relative isolate  bg-white dark:bg-black">
      <section id="introduction" className="max-w-3xl pt-16 mx-auto">
        <div className="flex flex-col gap-4 h-64 items-center">
          <div className="relative aspect-square w-40 sm:w-64 ">
            <Image
              src="/profilepicture.jpeg"
              alt="Profilbild"
              fill
              className="object-cover rounded-full border-8 border-white hover:border-black transition-colors duration-300 ease-in-out"
            />
          </div>
          <div className="flex flex-col">
            <p className="mt-4 text-6xl text-black dark:text-white">
              Building and learning, one step at a time.
            </p>
            <p className=" text-2xl text-gray-800 dark:text-white pt-5">
              Trying to live life in my own pace ❤️
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
