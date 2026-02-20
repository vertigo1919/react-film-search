async function getFullImdbDetails(IMDBID) {
  const response = await fetch(
    `https://imdb.iamidiotareyoutoo.com/search?tt=${IMDBID}`
  );
  if (!response.ok) {
    throw new Error("Film Not Found");
  }
  const fullIMDBDetails = await response.json();
  return fullIMDBDetails;
}

export default getFullImdbDetails;

// async function Test() {
//   const result = await getFilmByTitle("inception");
//   console.log(result);
// }

// Test();
