/* global echo */
require('shelljs/global');
const execOrDie = require('./internal/execOrDie');

execOrDie('npm run -s clean', '--- Clean OK ---');
execOrDie('npm run -s build', '--- Build OK ---');
execOrDie('npm run -s test:coverage', '--- Tests OK ---');
execOrDie('npm run -s lint', '--- Lint OK ---');
