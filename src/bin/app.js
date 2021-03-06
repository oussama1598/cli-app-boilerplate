import program from 'commander';
import loggerService from '../services/logger';
import config from '../config';
import { version } from '../../package.json';

program.version(version).usage('[options] <name>');

/* 
  TODO: For commands add this
  program
    .command('command <params>')
    .description('Descr')
    .action(params => {});
*/

(async function main() {
  // if (!program.args.length) return program.outputHelp();

  const logger = loggerService(false);

  logger.info(config);
  return null;
})();

program.parse(process.argv);
