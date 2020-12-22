import Head from 'next/head'
import Link from 'next/link'

//Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export async function getStaticProps(context) {
    const res = await fetch(process.env.BASE_URL + '/api/agency');
    const agencies = await res.json();

    return {
      props: {agencies},
    }
  }

export default function Index({agencies}) {
  return (
    <Container>
        
        <div style={{height: 15}}></div>
        <h1 style={{textAlign: "center"}}>Agencies</h1>
        <Row>
        {agencies.data.results.map(function(d, idx) {
            return (
                <Col>
                    <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={d.image_url} />
                            <Card.Body>
                              <Card.Title>{d.name}</Card.Title>
                              <Card.Text>
                              {d.country_code} {d.founding_year} <br/>
                              {d.description}
                              </Card.Text>
                              <Link href={"agency/id/" + d.id}>
                                <Button variant="primary">Details</Button>
                              </Link>
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