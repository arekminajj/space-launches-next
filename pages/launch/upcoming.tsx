import Head from 'next/head'

export async function getStaticProps(context) {
    const res = await fetch(process.env.BASE_URL + '/api/launch/upcoming');
    const launches = await res.json();

    return {
      props: {launches},
    }
  }

export default function Upcoming({launches}) {
  return (
    <div>{launches.data.results[0].name}</div>
  )
}
