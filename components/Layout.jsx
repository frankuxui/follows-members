import { useState, useEffect} from 'react'
import LoadingScreen from '../components/LoaderScreen'
import {  Container } from "react-bootstrap";

const Layout = ({children}) => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  }, []);

  return (
    <div className="main">
      {loading ?
      <Container>{children}</Container>
      : 
      <LoadingScreen/>
    }
    </div>
  )
}

export default Layout
