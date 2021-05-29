export default (arrayWithCategories, arrayWithRetailPrices) => {
  const unit = 'шт';
  const shortName = '';
  const vat = 0;
  const taxSystem = 'УСН-ДР';
  const product = 'Услуга';
  const markedItem = 'Нет';
  let barcode = 100000;
  let categoryCounter = 1;
  let categoryNumber = 1;
  const result = arrayWithCategories.map(([code, name, minPrice, category]) => {
    // eslint-disable-next-line no-unused-vars
    const retailItem = arrayWithRetailPrices.filter(
      ([codeRetail]) => codeRetail === code,
    );
    let price = 0;
    if (retailItem[0]?.length > 0) {
      // eslint-disable-next-line prefer-destructuring
      price = Number(retailItem[0][1]);
    }
    if (price <= Number(minPrice)) {
      price = minPrice * 2;
    }
    barcode += 1;
    categoryCounter += 1;
    if (categoryCounter === 30) {
      categoryCounter = 1;
      categoryNumber += 1;
    }
    return {
      name,
      code,
      barcode: barcode.toString(),
      price,
      unit,
      shortName,
      category: `${category} ${categoryNumber}`,
      vat: vat.toString(),
      taxSystem,
      product,
      minPrice,
      markedItem,
    };
  });
  return result;
};
