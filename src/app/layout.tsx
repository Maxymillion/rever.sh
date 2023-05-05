import '../styles/globals.css'
import {Metadata} from "next";
import Footer from "@/components/Footer";
import {Caveat, Racing_Sans_One} from 'next/font/google';
const handWriting = Caveat({ weight: "400", subsets: ["latin"], variable: '--font-write' });

const racingSansOne = Racing_Sans_One({ weight: "400", subsets: ["latin"], variable: '--font-rso' });
export const metadata: Metadata = {
  title: {
    default: 'Realm of Creativity',
    template: '%s | rever.sh',
  },
  description:
    'Soonish',
};

export default function RootLayout({children}: {
  children: React.ReactNode;

}) {
  return (
    <html lang="en" className={`${racingSansOne.variable} ${handWriting.variable}`}>
      <body>
      <div className="px-6">{children}</div>
      <Footer/>
      </body>
    </html>
  );
}
