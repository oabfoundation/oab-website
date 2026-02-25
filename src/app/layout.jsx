import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:
      "OAB Foundation | Building a Better Bangladesh",
    template: "%s | OAB Foundation",
  },
  description:
    "OAB Foundation (Over All Bangladesh) is a non-profit organization dedicated to education, healthcare, and sustainable development since 2018.",
  keywords: [
    "OAB Foundation",
    "Over All Bangladesh Foundation",
    "NGO in Bangladesh",
    "Social Work Bangladesh",
    "Volunteer Opportunities Dhaka",
    "Sustainable Development Goals Bangladesh",
    "Education for underprivileged children",
    "Flood relief Bangladesh",
    "Charity organization Bangladesh",
  ],
  authors: [{ name: "OAB Foundation" }],
  creator: "OAB Foundation",
  publisher: "OAB Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "OAB Foundation | Building a Better Bangladesh",
    description:
      "OAB Foundation (Over All Bangladesh) is a non-profit organization dedicated to education, healthcare, and sustainable development since 2018.",
    url: "https://www.oabfoundation.org",
    siteName: "OAB Foundation",
    images: [
      {
        url: "/oabfoundation.png",
        width: 1200,
        height: 630,
        alt: "OAB Foundation Impact",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OAB Foundation | Building a Better Bangladesh",
    description:
      "OAB Foundation (Over All Bangladesh) is a non-profit organization dedicated to education, healthcare, and sustainable development since 2018.",
    images: ["/oabfoundation.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
