// renames the keys of the film objects returned by the API
// it also builds the trailer URL

function filmListBuilder(apiResult) {
  return apiResult.map((item) => {
    return {
      title: item["#TITLE"],
      year: item["#YEAR"],
      imdb_ID: item["#IMDB_ID"],
      rank: item["#RANK"],
      actors: item["#ACTORS"],
      aka: item["#AKA"],
      imdb_URL: item["#IMDB_URL"],
      imdb_IV: item["#IMDB_IV"],
      imdb_JSON: `https://imdb.iamidiotareyoutoo.com/search?tt=${item["#IMDB_ID"]}`,
      poster: item["#IMG_POSTER"],
      poster_width: item.photo_width,
      poster_height: item.photo_height,
      trailer_URL: `https://imdb.iamidiotareyoutoo.com/media/${item["#IMDB_ID"]}`,
    };
  });
}

export default filmListBuilder;
