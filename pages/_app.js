import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
