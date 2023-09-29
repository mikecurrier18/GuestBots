import '@styles/globals.css'
import Nav from '@components/Nav';
import Provider from '@components/Provider'
import Footer from '@components/Footer'
export const metadata = {
    title: "Guestbots.com",
    description: "Short term property rentals have never been easier with Guestbots"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider>

            <div className='main'>
                <div className='gradient'/>
            </div>

            <main className='app'>
                <Nav />
                {children}
            </main>
                <Footer />
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout