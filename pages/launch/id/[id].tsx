import Head from 'next/head'
import Link from 'next/link'

//Bootstrap imports
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export async function getServerSideProps(context) {
    const res = await fetch(process.env.BASE_URL + '/api/launch/id/' + context.params.id);
    const data = await res.json();
    const launch = await data.data;
    
    const date = new Date(launch.window_start)
    launch.window_start = date.getMonth() + '-' + date.getDay() + '-' + date.getFullYear();

    if (!launch) {
        return {
          notFound: true,
        }
      }

    return {
      props: {launch},
    }
}

// Mission details data is sometimes null,
// so rendering separately to avoid 'property is null' error
function RenderMissionDetails(props) {
  const launch = props.launch;
  if(launch.mission) {
    return (
      <div>
        <h1 className="text-center">Mission</h1>
        <h3>{launch.mission.name}</h3>
        <h5>{launch.mission.description}</h5>
        <h6>{launch.mission.type}</h6>
        <h6>{launch.mission.orbit.name}</h6>
      </div>
    )
  }
  else {
    return null;
  }
}

export default function Launch({launch}) {
  return (
    <Container>
        <h1 style={{textAlign: "center"}}>{launch.name}</h1>
        <h5>Window start: {launch.window_start}</h5>
        <Link href={"/agency/id/" + launch.launch_service_provider.id}>
          <h5 style={{textAlign: "right"}}>{launch.launch_service_provider.name}</h5>
        </Link>
        <h5 style={{textAlign: "right"}}>{launch.launch_service_provider.type}</h5>
        <Row>
          <Col>
            <Image style={{maxHeight: "1000px" }} src={launch.image} fluid />
          </Col>
          <Col>
          <h1 className="text-center">Rocket</h1>
          <h2>{launch.rocket.configuration.name}</h2>
          <h5>{launch.rocket.configuration.description}</h5>
          <a href={launch.rocket.configuration.manufacturer.info_url || launch.rocket.configuration.manufacturer.wiki_url } target="_blank">
            <h4>{launch.rocket.configuration.manufacturer.name}</h4>
          </a>
          <h5>Country: {launch.rocket.configuration.manufacturer.country_code}</h5>
          <br/>
          <RenderMissionDetails launch={launch} />
          <h1 className="text-center">Pad</h1>
          <h5>{launch.pad.name}</h5>
          <Image style={{maxHeight: '500px'}} src={launch.pad.location.map_image} thumbnail />
          </Col>
        </Row>
        <div style={{height:'10px'}}></div>
        <div style={{height: '50px'}}>
          <h5 className="text-center">Made with ❤️ and <a href='https://nextjs.org/' target="_blank"> Next.js </a> by <a target='_blank' href="https://github.com/arekminajj"> Arekminajj. </a></h5>
        </div>
    </Container>
  )
}
