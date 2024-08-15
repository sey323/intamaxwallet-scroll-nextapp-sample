import "@/app/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "@/utils/providers";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export default RootLayout;
