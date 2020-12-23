import Head from 'next/head'

//Bootstrap imports
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export async function getStaticProps(context) {
    const res = await fetch(process.env.BASE_URL + '/api/event/upcoming');
    const events = await res.json();

    return {
      props: {events},
    }
  }

  function RenderDetailsButton(props) {
    const event = props.event;
    if(event.news_url || event.video_url) {
        return(
            <a target="_blank" href={event.news_url || event.video_url}>
                <Button variant="primary">Details</Button>
            </a>
        )
    }

    else {
        return null;
    } 
  }

export default function Upcoming({events}) {
  return (
    <Container>
        <h1 className="text-center">Events</h1>
        <Row>
        {events.data.results.map(function(d, idx) {
            return (
                <Col>
                 <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={d.feature_image} />
                            <Card.Body>
                              <Card.Title>{d.name}</Card.Title>
                              <Card.Text>
                              {d.description}
                              </Card.Text>
                              <RenderDetailsButton event={d} />
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
