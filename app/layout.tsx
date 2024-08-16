import "@/app/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "@/utils/providers";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Providers>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: 12,
            }}
          >
            <ConnectButton />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
