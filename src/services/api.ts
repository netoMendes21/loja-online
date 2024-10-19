const urlCategoria = 'https://api.mercadolibre.com/sites/MLB/categories';

// const urlCategoriaNome = 'https://api.mercadolibre.com/sites/MLB/search?category=';

export async function getCategories() {
  const response = await fetch(urlCategoria);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(
  categoryId: string,
  query: string,
) {
  const response = await fetch(`urlCategoriaNome${categoryId}&q=${query}`);
  const data = await response.json();
  return data;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
