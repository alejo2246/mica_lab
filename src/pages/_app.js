import { GifProvider } from "@/context/GifContext";
import "@/styles/globals.css";
import "@/styles/ImageMixer.css";
import "@/styles/ImageMixerHizqa.css";
export default function App({ Component, pageProps }) {
  return (
    <GifProvider>
      <Component {...pageProps} />
    </GifProvider>
  );
}
