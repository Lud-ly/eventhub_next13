import { Footer } from "~/src/components/Footer/Footer";
import "./globals.css";
import { Header } from "~/src/components/Header/Header";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head />
      <body className="bg-gray-900 text-gray-50">
        <Header />
        <div className=" bg-gray-700 p-4">{children}</div>
        <Footer />
        <Providers />
      </body>
    </html>
  );
}
