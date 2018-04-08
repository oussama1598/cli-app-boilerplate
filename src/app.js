import program from 'commander';
import { version } from '../package.json';

program
  .version(version)
  .usage('[options] <name>')
  .parse(process.argv);

(async function main() {
  if (!program.args.length) return program.outputHelp();

  return null;
})();
