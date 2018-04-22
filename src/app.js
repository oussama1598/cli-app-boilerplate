import program from 'commander';
import config from 'config';
import { version } from '../package.json';

program
  .version(version)
  .usage('[options] <name>')
  .parse(process.argv);

(async function main() {
  if (!program.args.length) return program.outputHelp();

  console.log(config);
  return null;
})();
