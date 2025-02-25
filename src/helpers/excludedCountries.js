import countryList from "react-select-country-list";

const excludeCountries = [
    "IL", // Israel
    "US", // United States of America
    "AL", // Albania
    "BB", // Barbados
    "BA", // Bosnia and Herzegovina
    "GY", // Guyana
    "JM", // Jamaica
    "LA", // Laos (Lao)
    "MU", // Mauritius
    "MM", // Myanmar
    "NI", // Nicaragua
    "UG", // Uganda
    "VU", // Vanuatu
    "AF", // Afghanistan
    "BS", // Bahamas
    "BW", // Botswana
    "KH", // Cambodia
    "ET", // Ethiopia
    "GH", // Ghana
    "IS", // Iceland
    "IQ", // Iraq
    "MN", // Mongolia
    "PK", // Pakistan
    "PA", // Panama
    "LK", // Sri Lanka
    "TT", // Trinidad and Tobago
    "TN", // Tunisia
    "VI", // U.S. Virgin Islands
    "YE", // Yemen
    "ZW", // Zimbabwe
    "RU", // Russia
    "BY", // Belarus
    "CU", // Cuba
    "KP", // North Korea
    "SD", // Sudan
    "SY", // Syria
    "DZ", // Algeria
    "BD", // Bangladesh
    "BO", // Bolivia
    "CN", // China
    "KG", // Kyrgyzstan
    "MK", // North Macedonia
    "NP", // Nepal
    "NG", // Nigeria
    "TH", // Thailand
    "KR", // South Korea
    "SO", // Somalia
    "VN", // Vietnam
    "CO", // Colombia
    "EC", // Ecuador
    "ID", // Indonesia
    "JO", // Jordan
    "MA", // Morocco
    "SA", // Saudi Arabia
    "TW", // Taiwan
  ];
  
  const allCountries = countryList().getData();
  
  export const filteredCountries = allCountries.filter(
    (country) => !excludeCountries.includes(country.value)
  );