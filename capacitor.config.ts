import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.financeledger.app',
  appName: 'Ledger',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
