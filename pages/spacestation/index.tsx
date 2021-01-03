import Head from 'next/head'

//Bootstrap imports
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export async function getStaticProps(context) {
    const res = await fetch(process.env.BASE_URL + '/api/spacestation');
    const spacestations = await res.json();

    return {
      props: {spacestations},
    }
  }


export default function Upcoming({spacestations}) {
  return (
    <Container>
        <Row>
       {spacestations.data.results.map(function(d, idx) {
           return(
            <Col>
            <Card style={{ width: '18rem' }}>
                     <Card.Img variant="top" src={d.image_url} />
                       <Card.Body>
                         <Card.Title>{d.name}</Card.Title>
                         <Card.Text>
                         {d.description}
                         </Card.Text>
                       </Card.Body>
                     </Card>
                     <div style={{height: 15}}></div>
           </Col>
           )
       })}
       </Row>
    </Container>
  )
}
