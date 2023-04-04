export const getGift = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=KBb1xMNqNNCOy6cUd9fhB6NJDeJDOEOC&q=${category}&limit=9`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  const gift = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  console.log(gift);
  return gift;
};
