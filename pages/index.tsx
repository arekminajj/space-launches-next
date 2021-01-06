import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

//bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home() {
  return (
    <Container>
      <div style={{ height: '15px' }}></div>
      <h1 className="text-center">Space launches</h1>
      <div style={{ height: '15px' }}></div>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/falcon2520heavy_image_20190224025007.jpeg" />
            <Card.Body>
              <Card.Title>Launches</Card.Title>
              <Card.Text>
                Check upcoming or previous launches!
              </Card.Text>
              <Link href={'/launch/upcoming'}>
                <Button style={{ marginRight: '20px' }} variant="primary">Upcoming</Button>
              </Link>
              <Link href={'/launch/previous'}>
                <Button variant="primary">Previous</Button>
              </Link>
            </Card.Body>
          </Card>
          <div style={{ height: '12px' }}></div>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/airbus2520defence2520and2520space_image_20190207032423.jpeg" />
            <Card.Body>
              <Card.Title>Agencies</Card.Title>
              <Card.Text>
                Browse through space agencies!
              </Card.Text>
              <Link href={'/agency'}>
                <Button style={{ marginRight: '20px' }} variant="primary">Details</Button>
              </Link>
            </Card.Body>
          </Card>
          <div style={{ height: '12px' }}></div>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/neil2520armstrong_image_20190426143653.jpeg" />
            <Card.Body>
              <Card.Title>Astronauts</Card.Title>
              <Card.Text>
                Browse astronauts!
              </Card.Text>
              <Link href={'/astronaut?page=1&search='}>
                <Button style={{ marginRight: '20px' }} variant="primary">Details</Button>
              </Link>
            </Card.Body>
          </Card>
          <div style={{ height: '12px' }}></div>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/nasa2520mars252020202520rover2520landing_image_20200214105503.jpg" />
            <Card.Body>
              <Card.Title>Events</Card.Title>
              <Card.Text>
                Get to know about upcoming events!
              </Card.Text>
              <Link href={'/event/upcoming'}>
                <Button style={{ marginRight: '20px' }} variant="primary">Details</Button>
              </Link>
            </Card.Body>
          </Card>
          <div style={{ height: '6px' }}></div>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/spacestation_images/international2520space2520station_image_20190220215716.jpeg" />
            <Card.Body>
              <Card.Title>Spacestaions</Card.Title>
              <Card.Text>
                Discover spacestations!
              </Card.Text>
              <Link href={'/spacestation'}>
                <Button style={{ marginRight: '20px' }} variant="primary">Details</Button>
              </Link>
            </Card.Body>
          </Card>
          <div style={{ height: '6px' }}></div>
        </Col>
      </Row>
      <div style={{ height: '10px' }}></div>
      <div style={{ height: '50px' }}>
        <h5 className="text-center">Made with ❤️ and <a href='https://nextjs.org/' target="_blank"> Next.js </a> by <a target='_blank' href="https://github.com/arekminajj"> Arekminajj </a></h5>
      </div>
    </Container>
  )
}
