import type {Metadata} from "next";
import {Rubik} from "next/font/google";
import "./globals.scss";
import Providers from "@/app/providers";

const rubik = Rubik({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "900"],
    variable: "--font-rubik",
});
export const metadata: Metadata = {
    title: 'Lucy in the sky',
    description: 'The best store',
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={rubik.className}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
