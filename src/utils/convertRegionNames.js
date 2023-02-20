const convertRegionNames = countryCode => {
  const regionNames = new Intl.DisplayNames('en', { type: 'region' });
  return regionNames.of(countryCode.toString());
};

export default convertRegionNames;
