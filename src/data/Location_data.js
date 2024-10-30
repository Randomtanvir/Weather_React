const data = [
  {
    latitude: 51.5073219,
    longitude: -0.1276474,
    location: "London",
  },
  {
    location: "Kolkata",
    latitude: 22.5726723,
    longitude: 88.3638815,
  },
  {
    location: "Dhaka",
    latitude: 23.7948,
    longitude: 90.4143,
  },
  {
    location: "Singapore",
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: "New York",
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
  {
    location: "Toronto",
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
];

export function getLocations() {
  return data;
}
export const getLocationByName = (locatinName) => {
  if (!locatinName) return null;
  const filtered = data.filter((item) => item.location === locatinName);
  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocatin = {
      location: "0",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocatin;
  }
};
