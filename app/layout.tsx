import '../styles/globals.css'
import {Metadata} from "next";

export const metadata: Metadata = {
  title: {
    default: 'Rever.sh',
    template: '%s | Rever.sh',
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
          </body>
      </html>
  );
}
