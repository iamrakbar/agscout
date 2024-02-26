import colors from 'tailwindcss/colors';

const mapColors = [
  colors.red[500],
  colors.orange[500],
  colors.white,
  colors.sky[500],
  colors.blue[500],
];

export function generateRandomCoordinates(
  centerLat,
  centerLng,
  radiusInMeters,
  numPoints
) {
  const coordinates = [];

  for (let i = 0; i < numPoints; i++) {
    // Convert radius from meters to degrees
    const radiusInDegrees = radiusInMeters / 111300;

    // Generate a random angle between 0 and 360 degrees
    const randomAngle = Math.random() * 360;

    // Calculate random coordinates within the given radius
    const randomRadius = Math.random() * radiusInDegrees;
    const latitude = centerLat + randomRadius * Math.cos(randomAngle);
    const longitude = centerLng + randomRadius * Math.sin(randomAngle);
    const colorIndex = Math.floor(Math.random() * mapColors.length);

    coordinates.push({
      lat: latitude,
      lng: longitude,
      color: mapColors[colorIndex],
    });
  }

  return coordinates;
}
