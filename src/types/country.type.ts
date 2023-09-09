export interface Country {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: string;
  unMember: boolean;
  currencies?: Record<string, Currency>;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: string;
  subregion?: string;
  languages?: Record<string, string>;
  translations: Record<string, Translation>;
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms?: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: Gini;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: Record<string, CountryNativeName>;
}

export interface CountryNativeName {
  official: string;
  common: string;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Translation {
  official: string;
  common: string;
}

export interface Demonyms {
  eng: DemonymsData;
  fra?: DemonymsData;
}

export interface DemonymsData {
  f: string;
  m: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Gini {
  "2016"?: number;
  "2015"?: number;
  "2011"?: number;
  "2019"?: number;
  "2018"?: number;
  "2014"?: number;
  "2003"?: number;
  "2012"?: number;
  "1998"?: number;
  "2004"?: number;
  "2017"?: number;
  "2010"?: number;
  "2013"?: number;
  "1992"?: number;
  "2005"?: number;
  "2009"?: number;
  "2008"?: number;
  "1999"?: number;
  "2006"?: number;
}

export interface Car {
  signs?: string[];
  side: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface PostalCode {
  format: string;
  regex?: string;
}
