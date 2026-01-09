import "@/styles/globals.css";
import "@fontsource/inter/index.css";
import type { AppProps } from "next/app";
import { CursorProvider } from "@/context/CursorContext";
import CustomCursor from "@/components/cursor/CustomCursor";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CursorProvider>
      <Component {...pageProps} />
      <CustomCursor />
    </CursorProvider>
  );
}
