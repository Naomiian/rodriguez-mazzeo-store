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
