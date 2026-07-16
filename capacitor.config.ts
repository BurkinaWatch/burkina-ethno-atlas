import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.burkinafaso.ethnies",
  appName: "Ethnies du Burkina Faso",
  webDir: "dist",
  android: {
    buildOptions: {
      releaseType: "APK",
    },
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#009A44",
      showSpinner: false,
    },
  },
};

export default config;
