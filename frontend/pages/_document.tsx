import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { ui, env } from '@/config/index'
// import { themeColor, company, prod, gtm } from '@/config/index'
// import { MetaIcons, MetaOg, MetaTwitter } from '@/components/meta'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
          />

          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          {/* <meta name='format-detection' content='telephone=no' /> */}
          <meta name='mobile-web-app-capable' content='yes' />
          {/* <meta
        name='msapplication-config'
        content='/assets/imgs/icons/browserconfig.xml'
      /> */}
          <meta name='msapplication-TileColor' content={ui.colors.theme} />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content={ui.colors.theme} />

          {/* <MetaIcons /> */}

          <link rel='manifest' href='/manifest.json' />

          {/* <MetaTwitter />
          <MetaOg /> */}
        </Head>
        <body>
          {env.prod && (
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${env.googleTagManagerId}`}
                height='0'
                width='0'
                style={{ display: 'none', visibility: 'hidden' }}></iframe>
            </noscript>
          )}

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
