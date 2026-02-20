// renames the keys of the film objects returned by the API
// it also builds the trailer URL

function buildFullImdbDetails(apiResult) {
  return {
    runTime: apiResult.top.runtime.displayableProperty.value.plainText,
    plot: apiResult.top.plot.plotText.plainText,
    director: apiResult.top.principalCreditsV2[0].credits[0].name.nameText.text,
    ageRating: apiResult.top.certificate.rating,
    posterURL: apiResult.short.image,
  };
}
export default buildFullImdbDetails;
