import { useCallback } from 'react';

const toRad = (deg: number) => deg * (Math.PI / 180.0);

export const useBlob = () => {
  return useCallback(
    ({
      width,
      height,
      growth,
      pointCount,
    }: {
      width: number;
      height: number;
      growth: number;
      pointCount: number;
    }) => {
      const centerX = width / 2;
      const centerY = height / 2;
      const step = 360 / pointCount;
      const slices = Array(pointCount)
        .fill(undefined)
        .map((_, i) => i * step);

      const points = slices.map((degrees) => {
        const radians = toRad(degrees);
        const maxRadius = Math.min(
          Math.abs(width / 2 / Math.cos(radians)),
          Math.abs(height / 2 / Math.sin(radians))
        );
        const minRadius = growth * maxRadius;
        const radius = Math.random() * (maxRadius - minRadius) + minRadius;
        const x = centerX + radius * Math.cos(radians);
        const y = centerY + radius * Math.sin(radians);
        return {
          x,
          y,
        };
      });
      let result = 'M';
      let mid = {
        x: (points[0].x + points[1].x) / 2,
        y: (points[0].y + points[1].y) / 2,
      };
      result += `${mid.x},${mid.y}`;
      points.forEach((_, i) => {
        const p1 = points[(i + 1) % points.length];
        const p2 = points[(i + 2) % points.length];
        mid = {
          x: (p1.x + p2.x) / 2,
          y: (p1.y + p2.y) / 2,
        };
        result += `Q${p1.x},${p1.y},${mid.x},${mid.y}`;
      });
      result += 'Z';
      return result;
    },
    []
  );
};
