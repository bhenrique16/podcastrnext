import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="https://fonts.googleapis.com/css2?family-Inter&family=Lexend:wght@500;600&display=swap" ref="stylesheet" />

                    <link rel="shortcut icon" href="/favicon.png" type="image/png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                </body>
            </Html>
        )
    }
}