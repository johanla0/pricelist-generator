import _ from 'lodash';
import stringify from 'csv-stringify/lib/sync.js';

// Название, Код, Штрихкод, Цена, Ед. изм., Короткое наименование, Группа,
// НДС*, СНО**, Тип, Минимальная цена, Маркированный товар

export default (array) => {
  const records = _.sortBy(array, [
    function (o) {
      return o.category;
    },
  ]).map((elem) => [
    elem.name,
    elem.code,
    elem.barcode,
    elem.price,
    elem.unit,
    elem.shortName,
    elem.category,
    elem.vat,
    elem.taxSystem,
    elem.product,
    elem.minPrice,
    elem.markedItem,
  ]);
  return stringify(records, {
    quoted_string: true,
  });
};
