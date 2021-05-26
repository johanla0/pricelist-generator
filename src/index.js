import path from 'path';
import fs from 'fs';
import mime from 'mime-types';
import parse from './parsers.js';
// import render from './formatters/index.js';

const getMimeType = (filepath) => mime.lookup(filepath);
const readFile = (filepath) => fs.readFileSync(path.resolve(filepath), 'utf-8');
const getData = (filepath) => parse(readFile(filepath), getMimeType(filepath));

const genpricelist = (filepath1, filepath2, format = 'modulkassa') => {
  const objectWithCategories = getData(filepath1);
  const objectToExport = getData(filepath2);
  console.log(objectWithCategories);
  console.log('-----');
  console.log(objectToExport);
  // const tree = buildTree(oldObject, newObject);
  // return render(tree, format);
};

export default genpricelist;
