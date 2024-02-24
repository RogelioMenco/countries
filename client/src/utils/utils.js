export const subregions = {
  Caribbean: 'America',
  'Central America': 'America',
  'North America': 'America',
  'South America': 'America',
  'Southern Africa': 'Africa',
  'Eastern Africa': 'Africa',
  'Western Africa': 'Africa',
  'Northern Africa': 'Africa',
  'Middle Africa': 'Africa',
  'Australia and New Zealand': 'Oceania',
  Micronesia: 'Oceania',
  Polynesia: 'Oceania',
  Melanesia: 'Oceania',
  'Central Europe': 'Europe',
  'Eastern Europe': 'Europe',
  'Southeast Europe': 'Europe',
  'Southern Europe': 'Europe',
  'Western Europe': 'Europe',
  'Northern Europe': 'Europe',
  'Western Asia': 'Asia',
  'Southern Asia': 'Asia',
  'South-Eastern Asia': 'Asia',
  'Eastern Asia': 'Asia',
  'Central Asia': 'Asia',
  Antarctica: 'Antarctica',
};

export const difficulties = [
  'Begginer',
  'Amateur',
  'Normal',
  'Professional',
  'Expert',
];

export const labelsContinentes = {
  All: 'Todos',
  Africa: 'Africa',
  Antarctica: 'Antartica',
  Asia: 'Asia',
  Europe: 'Europa',
  'South America': 'Sur America',
  'North America': 'Norte America',
  Oceania: 'Oceania',
};

export const labelPoblacion = {
  Ascendent: 'Ascendente',
  Descendent: 'Descendiente',
};

export const getRegionLabel = (region) => {
  const label = labelsContinentes[region];
  return label ?? region;
};
