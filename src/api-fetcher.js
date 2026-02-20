async function getFilmByTitle(searchTerm) {
  const response = await fetch(
    `https://imdb.iamidiotareyoutoo.com/search?q=${encodeURIComponent(
      searchTerm
    )}`
  );
  if (!response.ok) {
    throw new Error("Film Not Found");
  }
  const filmResult = await response.json();
  return filmResult;
}

export default getFilmByTitle;

// async function Test() {
//   const result = await getFilmByTitle("inception");
//   console.log(result);
// }

// Test();
