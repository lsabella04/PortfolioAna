import React from 'react';
import type { Language, ClientBrand } from '../types';
import { clientBrandsData } from '../i18n/translations';

interface ProjectLogosGridProps {
  lang: Language;
  onNavigateToProjectPage: (brand: ClientBrand) => void;
}

export const ProjectLogosGrid: React.FC<ProjectLogosGridProps> = ({
  lang,
  onNavigateToProjectPage,
}) => {
  const brands = clientBrandsData[lang];

  // Map uploaded logo images to brand IDs
  const logoImageMap: Record<string, string> = {
    nissan: '/assets/logos/Nissan-logo.png',
    uber: '/assets/logos/Uber-Logo.png',
    iuv: '/assets/logos/IUV-logo.png',
    'coa-dental': '/assets/logos/COA-logo.png',
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
      {brands.map((brand) => {
        const logoImg = logoImageMap[brand.id];

        return (
          <div
            key={brand.id}
            onClick={() => onNavigateToProjectPage(brand)}
            className="light-card light-card-hover p-8 rounded-3xl bg-[#fafafa] border border-neutral-200 cursor-pointer flex flex-col justify-between items-center text-center group h-48 transition-all"
          >
            {/* Centered Logo Container with Uniform Sizing */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-2 w-full">
              {logoImg ? (
                <img
                  src={logoImg}
                  alt={brand.name}
                  className="max-h-14 w-auto object-contain transition-transform group-hover:scale-110"
                />
              ) : (
                <span className="text-xl sm:text-2xl font-extrabold font-display tracking-wider text-black group-hover:text-[#c93b8d] transition-colors">
                  {brand.logoText === 'POP MAG' ? 'NIEBLAMAGAZINE' : brand.logoText}
                </span>
              )}
              <span className="text-xs text-neutral-500 font-mono">
                {brand.category}
              </span>
            </div>

            {/* Subtitle / CTA hint */}
            <div className="w-full pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
              <span className="font-bold">{brand.name === 'Revista Cultura Pop' ? 'NieblaMagazine' : brand.name}</span>
              <span className="text-[#c93b8d] font-bold group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
