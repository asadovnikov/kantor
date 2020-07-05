const jumioScanUri = 'https://cg8f5ppwv3.execute-api.us-east-1.amazonaws.com/dev/jumiodata';
const appName = 'Cryptomine';
const appNameDescription = 'Exchange';

export const RetrieveJumioDataURI = (scanRef) => `${jumioScanUri}/${scanRef}`;
export const RetrieveJumioScanDocuments = (scanRef) => `${jumioScanUri}/${scanRef}`;
export const JumioToken = '665a4231-b257-4c05-95a8-0a5fbc5c6e0c';
export const JumioSecret = 'HCrEE23pJJDO1rY2kNwK43PDtCALyJKj';
export const JumioUserAgent = `${appName} BackOffice/v1.0`;
