import _ from 'lodash';
import stringify from 'csv-stringify/lib/sync.js';

// Категория, Название, Описание, Цена, Фото, Популярный товар, В наличии

export default (array) => {
  const description = '';
  const picture = '';
  const popular = '';
  const inStock = 'Да';
  const records = _.sortBy(array, [function (o) { return o.category; }]).map((elem) => [
    elem.category,
    elem.name,
    description,
    elem.price,
    picture,
    popular,
    inStock,
  ]);
  return stringify(records, {
    quoted_string: true,
  });
};
