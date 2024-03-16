import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run ehr:serve',
        production: 'nx run ehr:preview',
      },
      ciWebServerCommand: 'nx run ehr:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
