import type { Metadata } from "next";
import CustomCursor from "@/components/CustomCursor";
import SplashCursor from "@/components/SplashCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Developer",
  description:
    "Professional portfolio showcasing full-stack development, UI/UX design, and cloud architecture projects.",
  keywords: [
    "Portfolio",
    "Full-Stack Developer",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
  ],
  openGraph: {
    title: "Portfolio | Full-Stack Developer",
    description:
      "Professional portfolio showcasing full-stack development, UI/UX design, and cloud architecture projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var localTheme = window.localStorage.getItem('theme');
                  var theme = localTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <CustomCursor />
        <SplashCursor />
        {children}
      </body>
    </html>
  );
}
