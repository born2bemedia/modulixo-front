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
    // Adding new countries
    "AB", // Abkhazia
    "PT", // Azores (part of Portugal)
    "BJ", // Benin
    "CM", // Cameroon
    "CF", // Central African Republic
    "TD", // Chad
    "CD", // Congo, Democratic Republic of
    "CI", // Côte d'Ivoire
    "UA", 
    "ER", // Eritrea
    "PS", // Gaza Strip
    "GN", // Guinea
    "GW", // Guinea-Bissau
    "HT", // Haiti
    "IR", // Iran
    "IN", // Kashmir (part of India)
    "UA", // Kherson (part of Ukraine)
    "XK", // Kosovo
    "KW", // Kuwait
    "LB", // Lebanon
    "LR", // Liberia
    "LY", // Libya
    "UA", // Luhansk (part of Ukraine)
    "ML", // Mali
    "AZ", // Nagorno Karabakh (part of Azerbaijan)
    "CY", // Northern Cyprus
    "QA", // Qatar
    "GE", // South Ossetia (part of Georgia)
    "SS", // South Sudan
    "TG", // Togo
    "VE", // Venezuela
    "PS", // West Bank
];

const allCountries = countryList().getData();

export const filteredCountries = allCountries.filter(
    (country) => !excludeCountries.includes(country.value)
);