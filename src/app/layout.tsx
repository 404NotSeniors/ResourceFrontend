import "modern-normalize/modern-normalize.css";
import "@/styles/main.scss";

export const metadata = {
  title: "Resource App",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  description: "Connect with top companies and opportunities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
