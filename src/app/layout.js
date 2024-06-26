import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ExamNoodle",
  description: "Unlimited AI Generated Practice Materials",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <body className={inter.className}>
        {children}
      <Analytics />
      <SpeedInsights />
      </body>
    </html>
  );
}
