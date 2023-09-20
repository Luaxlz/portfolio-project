import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
  TbBrandYoutube,
} from "react-icons/tb";

const MOCK_CONTACTS = [
  {
    url: "http://github.com.br",
    icon: <TbBrandGithub />,
  },
  {
    url: "http://linkedin.com.br",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "http://youtube.com.br",
    icon: <TbBrandYoutube />,
  },
  {
    url: "http://whatsapp.com.br",
    icon: <TbBrandWhatsapp />,
  },
];

export const HeroSection = () => {
  return (
    <section
      className="
        w-full
        lg:h-[755px]
        bg-hero-image
        bg-cover
        bg-center
        bg-no-repeat
        flex flex-col
        justify-end
        pb-10
        py-32
        sm:pb-32
        lg:pb-[110px]
    "
    >
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Lucas Angeli</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Olá, meu nome é Lucas Angeli e sou um desenvolvedor fullstack
            apaixonado por tecnologia. Com muita vontade e imaginação, meu
            objetivo é criar sistemas e plataformas bonitas e funcionais, além
            de participar em projetos desafiadores. Estou sempre aberto a novas
            oportunidades e desafios.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 7 }).map((_, index) => (
              <TechBadge name="Next.JS" />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button">
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="Foto de perfil do Lucas Angeli"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  );
};