// Название, Код, Штрихкод, Цена, Ед. изм., Короткое наименование,
// Группа, НДС*, СНО**, Тип, Минимальная цена, Маркированный товар

export default (arrayWithCategories, arrayWithRetailPrices) => {
  const unit = 'шт';
  const shortName = '';
  const vat = 0;
  const taxSystem = 'УСН-ДР';
  const product = 'Услуга';
  const markedItem = 'Нет';
  let barcode = 100000;
  const result = arrayWithCategories.map(([code, name, minPrice, category]) => {
    // eslint-disable-next-line no-unused-vars
    const [_, price] = arrayWithRetailPrices.filter(
      ([codeRetail]) => codeRetail === code,
    )[0];
    barcode += 1;
    return {
      name,
      code,
      barcode: barcode.toString(),
      price,
      unit,
      shortName,
      category,
      vat: vat.toString(),
      taxSystem,
      product,
      minPrice,
      markedItem,
    };
  });
  return result;
};
