export const NAME_APP = "JRM store";
export async function getData(categorias) {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${categorias}`
  );
  const data = await response.json();
  return data;
}
export async function getItem(id) {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = await response.json();
  return data;
}

export const waitForData = async (id) => {
  try {
    const data = await getData(id);
    const aux = data.results.map((element) => {
      return {
        title: element.title,
        id: element.id,
        thumbnail: element.thumbnail,
        price: element.price,
      };
    });
    return aux;
  } catch (error) {
    throw error;
  }
};
