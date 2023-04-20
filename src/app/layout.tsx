import '../styles/globals.css'
import {Metadata} from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: {
        default: 'rever.sh',
        template: '%s | rever.sh',
    },
    description:
        'Soonish',
};

export default function RootLayout({children}: {
    children: React.ReactNode;

}) {
    return (
        <html lang="en">
        <body>
        <div className="px-6">{children}</div>
        <Footer/>
        </body>

        </html>
    );
}
