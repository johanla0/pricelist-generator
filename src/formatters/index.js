import _ from 'lodash';
import modulkassa from './modulkassa.js';
import yandex from './yandex.js';

const styles = {
  modulkassa,
  yandex,
};

const render = (tree, format) => {
  if (!_.has(styles, format)) {
    throw new Error(`Format ${format} is not supported`);
  }
  return styles[format](tree);
};

export default render;
