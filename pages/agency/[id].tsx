import Head from 'next/head'
import Link from 'next/link'

//Bootstrap imports
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export async function getServerSideProps(context) {
    const res = await fetch(process.env.BASE_URL + '/api/agency/' + context.params.id);
    const data = await res.json();
    const agency = await data.data;
    
    if (!agency) {
        return {
          notFound: true,
        }
      }

    return {
      props: {agency},
    }
}

export default function Agency({agency}) {
  return (
    <Container>
       <h1 className="text-center">{agency.name}</h1>
       <h4 className="text-left">{agency.founding_year}</h4>
        <div style={{height: '50px'}}></div>
        <Row>
        <Col>
        <Image style={{maxHeight:"200px"}} src={agency.logo_url || agency.image_url} fluid />
        <div style={{height: '20px'}}></div>
        <h4 className="text-left">
         <a target="_blank" href={agency.wiki_url}>Wikipedia</a>
        </h4>
        <h4 className="text-left">
         <a target="_blank" href={agency.info_url}>Info</a>
        </h4>
        </Col>
        <Col>
        <h5>{agency.description}</h5>
        </Col>
        </Row>
        <div style={{height:'10px'}}></div>
      <div style={{height: '50px'}}>
        <h5 className="text-center footer">Made with ❤️ and <a href='https://nextjs.org/' target="_blank"> Next.js </a> by <a target='_blank' href="https://github.com/arekminajj"> Arekminajj </a></h5>
      </div>
    </Container>
  )
}
