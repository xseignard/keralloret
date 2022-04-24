import React from 'react';

import Map, { Marker } from 'react-map-gl';

import { PageDecouvrirFragment, ReglageFragment } from '~/generated/sdk';

import 'mapbox-gl/dist/mapbox-gl.css';

import { BlobWrapper } from '../BlobWrapper';

export const DecouvrirMap = ({
  pageDecouvrir,
  reglage,
}: {
  pageDecouvrir: PageDecouvrirFragment;
  reglage: ReglageFragment;
}) => {
  return (
    <BlobWrapper growth={0.99} pointCount={80}>
      <div className="h-[400px]">
        <Map
          initialViewState={{
            latitude: 47.17201859433297,
            longitude: 3.9027195476779752,
            zoom: 3.4,
          }}
          mapStyle="mapbox://styles/mapbox/satellite-v9"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        >
          <Marker
            longitude={pageDecouvrir.gpsLieu.longitude}
            latitude={pageDecouvrir.gpsLieu.latitude}
            anchor="bottom"
          >
            <svg viewBox="0 0 24 24" className="w-12 h-12">
              <path
                fill={reglage.couleur2.hex}
                d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
              />
            </svg>
          </Marker>
        </Map>
      </div>
    </BlobWrapper>
  );
};
