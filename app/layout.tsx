import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { FooterHome } from "./components/FooterHome";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CapitalRevo.com",
  description:
    "CapitalRevo.com aims to provide a user-friendly, professional trading platform for both novice and experienced traders. Utilizing the Match-Trader white label solution, the platform will offer seamless integration of trading tools, news feeds, and calculators to enhance the user experience. This proposal outlines a comprehensive mobile-first wireframe and content plan to create an engaging, informative, and conversion-focused website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/cr.ico" />
        <meta property="og:image" content="/Capitalrevo.png" />
        <meta name="google-site-verification" content="LacVDWR8EcIov_giDxPejNwywj5UFL4DwWeTU4IYU1c" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7ZV9VZB4PK"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7ZV9VZB4PK');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <FooterHome />
      </body>
    </html>
  );
}
