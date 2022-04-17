import React from 'react';

import { CagnotteFragment, PalierFragment, ReglageFragment } from '~/generated/sdk';

const Palier = ({
  palier,
  objectif,
  top,
  last,
}: {
  palier: PalierFragment;
  objectif: CagnotteFragment['objectif'];
  top: boolean;
  last: boolean;
}) => {
  return (
    <div
      className={`absolute w-fit flex ${top ? '-top-[84px] flex-col-reverse' : 'flex-col'}`}
      style={{ left: `calc(${(palier.montant / objectif) * 100}% - ${last ? '24px' : '0px'})` }}
    >
      <div className="w-0.5 h-6 bg-gray-200" />
      <div className="flex flex-col transform -translate-x-1/2 text-center font-noto-sans mt-1">
        <span>{palier.montant}€</span>
        <span className="w-full">{palier.description}</span>
      </div>
    </div>
  );
};

export const HomeCagnotte = ({
  reglage,
  cagnotte,
}: {
  reglage: ReglageFragment;
  cagnotte: CagnotteFragment;
}) => {
  return (
    <div className="w-full px-5 md:max-w-screen-xl flex flex-col mb-4 md:mb-32">
      <h2
        className="text-xl md:text-2xl font-work-sans transform -rotate-3 mb-8 md:mb-16 mt-8 md:mt-0"
        style={{ color: reglage.couleur1.hex }}
      >
        La cagnotte en cours
      </h2>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-14 border-2 border-gray-200 rounded-full" />
        <div
          className="w-full top-0 left-0 h-14 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: reglage.couleur1.hex,
            width: `${(cagnotte.aujourdhui / cagnotte.objectif) * 100}%`,
          }}
        >
          <span className="text-white font-work-sans">{cagnotte.aujourdhui}€</span>
        </div>
        <div className="hidden md:block prose">
          {cagnotte.paliers.map((palier, index) => {
            const top = index % 2 === 0;
            const last = index === cagnotte.paliers.length - 1;
            return (
              <Palier
                key={index}
                palier={palier}
                objectif={cagnotte.objectif}
                top={top}
                last={last}
              />
            );
          })}
        </div>
        <div className="prose block md:hidden mt-4">
          <ul>
            {cagnotte.paliers.map((palier, index) => {
              return (
                <li key={index}>
                  <span className="font-work-sans font-bold mr-1">{palier.montant}€:</span>
                  <span className="font-noto-sans">{palier.description}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
