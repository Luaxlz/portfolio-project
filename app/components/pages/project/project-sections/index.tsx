import Image from "next/image";

const sectionsMock = [
  {
    title: "Titulo",
    image: "https://placehold.co/1376x720/png",
  },
  {
    title: "Titulo 2",
    image: "https://placehold.co/1376x720/png",
  },
];

export const ProjectSections = () => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sectionsMock.map((section) => (
        <div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
            {section.title}
          </h2>
          <Image
            src={section.image}
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
            alt={`Imagem da sessão ${section.title}`}
            unoptimized
          />
        </div>
      ))}
    </section>
  );
};
