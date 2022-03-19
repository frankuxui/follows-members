import { useState, useEffect } from 'react'
import LoadingScreen from '../LoaderScreen'
import { Container } from 'react-bootstrap'
import Head from 'next/head'
import Footer from '../Footer'
import Nav from '../Navbar'

const index = ({ title, children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <div className='main'>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap' rel='stylesheet' />
      </Head>
      <Nav />
      {
        loading
          ? (<LoadingScreen />)
          : (<Container>{children}</Container>)
      }
      <Footer />
    </div>
  )
}

index.defaultProps = {
  title: 'Nex | tutorial'
}

export default index
