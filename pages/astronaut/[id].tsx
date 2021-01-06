import Head from 'next/head'
import Link from 'next/link'

//Bootstrap imports
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export async function getServerSideProps(context) {
    const res = await fetch(process.env.BASE_URL + '/api/astronaut/' + context.params.id);
    const data = await res.json();
    const astronaut = await data.data;
    
    if (!astronaut) {
        return {
          notFound: true,
        }
      }

    return {
      props: {astronaut},
    }
}

function RenderBirthAndDeathDates(props) {
    const astronaut = props.astronaut;
    if(astronaut.date_of_death==null) {
      return(
        <b>Born: {astronaut.date_of_birth}<br/> </b> 
      )
    }
    else {
      return(
        <b>{astronaut.date_of_birth} - {astronaut.date_of_death} <br/> </b> 
      )
    }
}

export default function Astronaut({astronaut}) {
  return (
    <Container>
      <h1 className="text-center">{astronaut.name}</h1>
      <div style={{height: '20px'}}></div>
      <Row>
          <Col className="text-center">
            <Image style={{maxHeight: '400px'}} className="mx-auto d-block" src={astronaut.profile_image} />
            <RenderBirthAndDeathDates astronaut={astronaut} />
            <b>Nationality: {astronaut.nationality}</b> <br/>
            <b>Status: {astronaut.status.name}</b> <br/>
            <b>Type: {astronaut.type.name}</b> <br/>
          </Col>
          <Col>
            <p>{astronaut.bio}</p>
          </Col>
      </Row>
      <div style={{height:'10px'}}></div>
      <div style={{height: '50px'}}>
        <h5 className="text-center footer">Made with ❤️ and <a href='https://nextjs.org/' target="_blank"> Next.js </a> by <a target='_blank' href="https://github.com/arekminajj"> Arekminajj </a></h5>
      </div>
    </Container>
  )
}
