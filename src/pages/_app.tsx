import "@/styles/globals.css";
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";
import type { AppProps } from "next/app";
import { useEffect } from "react";

const growthbook = new GrowthBook({
  apiHost: process.env.NEXT_PUBLIC_API_HOST,
  clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY,
  enableDevMode: true,
  trackingCallback: (experiment, result) => {
    // TODO: Use your real analytics tracking system
    console.log("Viewed Experiment", {
      experimentId: experiment.key,
      variationId: result.key,
    });
  },
});

export default function App({ Component, pageProps }: AppProps) {
  // Refresh features and targeting attributes on navigation
  useEffect(() => {
    growthbook.loadFeatures();
  }, []);

  return (
    <GrowthBookProvider growthbook={growthbook}>
      <Component {...pageProps} />
    </GrowthBookProvider>
  );
}
