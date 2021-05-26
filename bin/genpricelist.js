#!/usr/bin/env node
import program from 'commander';
import genpricelist from '../src/index.js';

const run = () => {
  program
    .description(
      'Generates pricelist according to services import specification',
    )
    .version('0.0.1')
    .helpOption('-h, --help', 'render usage information')
    .option('-d, --debug', 'output extra debugging')
    .option(
      '-f, --format <type>',
      'export format: yandex / modulkassa',
      'modulkassa',
    )
    .arguments('<filepath1> <filepath2>')
    .action((filepath1, filepath2) => {
      try {
        genpricelist(filepath1, filepath2, program.opts().format);
      } catch (err) {
        console.error(err.message);
        process.exit(1);
      }
    });
  program.parse(process.argv);
  const options = program.opts();
  if (options.debug) console.log(options);
};

export default run();
