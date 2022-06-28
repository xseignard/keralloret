import React from 'react';

import { CagnotteFragment, PalierFragment, ReglageFragment } from '~/generated/sdk';

import { Content } from '../Content';
import { SectionTitle } from '../SectionTitle';

const Palier = ({
  palier,
  objectif,
  top,
  last,
  color,
}: {
  palier: PalierFragment;
  objectif: CagnotteFragment['objectif'];
  top: boolean;
  last: boolean;
  color: string;
}) => {
  return (
    <div
      className={`absolute flex ${top ? '-top-[56px] flex-col-reverse' : 'flex-col'}`}
      style={{ left: `calc(${(palier.montant / objectif) * 100}% - ${last ? '24px' : '0px'})` }}
    >
      <div className="w-0.5 h-6" style={{ backgroundColor: color }} />
      <div className="flex flex-col transform -translate-x-1/2 text-center font-prose mt-1 font-bold">
        <span>{palier.montant}€</span>
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
    <div>
      <SectionTitle text={cagnotte.titre} color={reglage.couleur1.hex} />
      <div className="relative">
        <div
          className="absolute top-0 left-0 w-full h-14 border-2 rounded-full flex flex-row justify-end items-center"
          style={{ borderColor: reglage.couleur1.hex }}
        >
          <span className="font-other mr-4" style={{ color: reglage.couleur1.hex }}>
            Objectif: {cagnotte.objectif}€
          </span>
        </div>
        <div
          className="w-full top-0 left-0 h-14 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: reglage.couleur1.hex,
            width: `${(cagnotte.aujourdhui / cagnotte.objectif) * 100}%`,
          }}
        >
          <span className="text-white font-other">{cagnotte.aujourdhui}€</span>
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
                color={reglage.couleur1.hex}
              />
            );
          })}
        </div>
        <div className="mt-8 md:mt-16">
          <Content data={cagnotte.texte} />
        </div>
        <div className="prose mt-8 md:mt-16">
          <ul>
            {cagnotte.paliers.map((palier, index) => {
              return (
                <li key={index}>
                  <span className="font-other font-bold mr-1">{palier.montant}€:</span>
                  <span className="font-prose">{palier.description}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
