import path from 'path';
import fs from 'fs';
import mime from 'mime-types';
import parse from './parsers.js';
import compose from './composer.js';
import render from './formatters/index.js';

const getMimeType = (filepath) => mime.lookup(filepath);
const readFile = (filepath) => fs.readFileSync(path.resolve(filepath), 'utf-8');
const writeFile = (filepath, data) => fs.writeFileSync(path.resolve(filepath), data);
const getData = (filepath) => parse(readFile(filepath), getMimeType(filepath));

const genpricelist = (filepath1, filepath2, format = 'modulkassa') => {
  const arrayWithCategories = getData(filepath1);
  const arrayWithRetailPrices = getData(filepath2);
  console.info(`Imported with offer prices: ${arrayWithCategories.length}`);
  console.info(`Imported with retail prices: ${arrayWithRetailPrices.length}`);
  const arrayToExport = compose(arrayWithCategories, arrayWithRetailPrices);
  const data = render(arrayToExport, format);
  writeFile(`./pricelist-${format}.csv`, data);
  return data;
};

export default genpricelist;
