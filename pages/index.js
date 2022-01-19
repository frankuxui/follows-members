import { Card } from "./components/card"

const index = () => {
  
  return (
    <div>
      <h1>Home</h1>

      <Card>
        <Card.Header>Hola</Card.Header>
        <Card.Body>Hola body</Card.Body>
        <Card.Footer>Card footer</Card.Footer>
      </Card>
    </div>
  )
}

export default index
