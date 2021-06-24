export const NAME_APP = "JRM store";
export const NAME_CAT_1 = "Categoria 1";
export const NAME_CAT_2 = "Categoria 2";
export const NAME_CAT_3 = "Categoria 3";
export const NAME_CAT_4 = "Categoria 4";
export async function getData(categorias) {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${categorias}`
  );
  const data = await response.json();
  return data;
}
