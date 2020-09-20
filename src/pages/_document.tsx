import React from 'react'
import Document, {
    DocumentInitialProps,
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript
} from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render(): JSX.Element {
        return (
            <Html>
                <Head />
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}
