import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { test, expect } from '@jest/globals';
import parse from 'csv-parse';
import genpricelist from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const modulkassaResult = readFile('expected_modulkassa.csv');
const yandexResult = readFile('expected_yandex.csv');

test('make pricelist for modulkassa', () => {
  const file1 = getFixturePath('file1.csv');
  const file2 = getFixturePath('file2.csv');
  expect(genpricelist(file1, file2, 'modulkassa')).toEqual(modulkassaResult);
});

test('make pricelist for yandex', () => {
  const file1 = getFixturePath('file1.csv');
  const file2 = getFixturePath('file2.csv');
  expect(genpricelist(file1, file2, 'yandex')).toEqual(yandexResult);
});

test('csv is correct', () => {
  const file1 = getFixturePath('file1.csv');
  const file2 = getFixturePath('file2.csv');
  const data = genpricelist(file1, file2, 'modulkassa');
  expect(() => parse(data)).not.toThrow();
});

test('parse throws unsupported error', () => {
  const file1 = getFixturePath('unsupported_file.ods');
  const file2 = getFixturePath('file2.csv');
  expect(() => {
    genpricelist(file1, file2);
  }).toThrowError('not supported');
});

test('render throws unsupported error', () => {
  const file1 = getFixturePath('file1.csv');
  const file2 = getFixturePath('file2.csv');
  expect(() => {
    genpricelist(file1, file2, 'unsupported_format');
  }).toThrowError('not supported');
});
