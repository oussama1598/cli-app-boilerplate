import flavors from 'flavors';
import path from 'path';
import fs from 'fs';

const CWD = path.join(__dirname, '..');
const CONFIG_FILE = 'config.json';
const CONFIG_DIR = path.join(CWD, 'config');
const CONFIG_FULL_PATH = path.join(CONFIG_DIR, CONFIG_FILE);
const defaultOptions = {
  log: true
};

if (!fs.existsSync(CONFIG_FULL_PATH))
  fs.writeFileSync(
    CONFIG_FULL_PATH,
    JSON.stringify(defaultOptions, null, '  '),
    'utf8'
  );

export default flavors('config', {
  workingDir: CWD
});
