import _ from 'lodash';
import parse from 'csv/lib/sync.js';

const types = {
  'text/csv': parse,
};

export default (data, type) => {
  if (!_.has(types, type)) {
    throw new Error(`File ${type} is not supported`);
  }
  return types[type](data);
};
