import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render(){
        return(
            <Html>
                <Head lang="pt-br">
                    <meta charSet="utf-8"></meta>
                    <title>Login Sell-Telecom | Time Sheet</title>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}
export default MyDocument