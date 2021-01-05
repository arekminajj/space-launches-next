import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

//Bootstrap imports
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export async function getServerSideProps(context) {
    const search = context.query.search;
    let pageNumber = context.query.page;
    if(pageNumber<1) { pageNumber = 1;}
    const nextPage: number = parseInt(pageNumber) + 1;
    let previousPage: Number;
    if(pageNumber!='1') {
      previousPage = parseInt(pageNumber) - 1;
    }
    else{
       previousPage = 1;
    }
    const limit = 9;
    const offset = pageNumber * 9 - 9;
    
    const res = await fetch(process.env.BASE_URL
      + '/api/astronaut?limit=' + limit
      + '&offset=' + offset
      + '&search=' + search);
    const astronauts = await res.json();
    return {
      props: {
        astronauts,
        pageNumber,
        nextPage,
        previousPage },
    }
  }

function RenderBirthAndDeathDates(props) {
  const astronaut = props.astronaut;
  if(astronaut.date_of_death==null) {
    return(
      <b>{astronaut.date_of_birth} - present <br/> </b> 
    )
  }
  else {
    return(
      <b>{astronaut.date_of_birth} - {astronaut.date_of_death} <br/> </b> 
    )
  }
}

export default function Index({astronauts, pageNumber, nextPage, previousPage}) {
  const router = useRouter()
  const [search, setSearch] = useState('');

  return (
    <Container>
      <div style={{height: '10px'}}></div>
      <h1 className="text-center">Astronauts</h1>
      <div style={{height: '10px'}}></div>
      <div className="d-flex justify-content-center">
        <Link href={'?page=' + previousPage +'&search=' + search}>
          <Button style={{marginRight: '20px'}} variant="primary">Previous Page</Button>
        </Link>
        <h4>Page: {pageNumber}</h4>
        <Link href={'?page=' + nextPage +'&search=' + search}>
          <Button style={{marginLeft: '20px'}} variant="primary">Next Page</Button>
        </Link>
      </div>
      <div style={{height: '10px'}}></div>
      <Form.Group>
        <Form.Control onChange={
          event => {
            setSearch(event.target.value)
             if(search.length>3 || search=='') {
              router.push('?page=1&search=' + search)
             }
          }} size="lg" type="text" placeholder="Here type what you search for..." />
      </Form.Group>
      <div style={{height: '6px'}}></div>
      <Row>
       {astronauts.data.results.map(function(d, idx) {
           return(
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={d.profile_image} />
              <Card.Body>
                <Card.Title>{d.name}</Card.Title>
                <Card.Text>
                <RenderBirthAndDeathDates astronaut={d}/>
                {d.bio}
                </Card.Text>
              </Card.Body>
            </Card>
            <div style={{height: 15}}></div>
            </Col>         
           )
       })}
      </Row>
      <div style={{height:'10px'}}></div>
      <div style={{height: '50px'}}>
        <h5 className="text-center">Made with ❤️ and <a href='https://nextjs.org/' target="_blank"> Next.js </a> by <a target='_blank' href="https://github.com/arekminajj"> Arekminajj </a></h5>
      </div>
    </Container>
  )
}
