import { SectionTitle } from '@/app/components/section-title';
import { TechCard } from './tech-card';
import { TbBrandNextjs } from 'react-icons/tb';

export const KnowTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subtitle="competências" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <TechCard
            key={index}
            tech={{
              icon: <TbBrandNextjs />,
              name: 'Next.JS',
              startDate: '2022-10-22'
            }}
          />
        ))}
      </div>
    </section>
  );
};
