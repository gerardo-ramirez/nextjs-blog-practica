import Link from 'next/link';
import React from 'react'
import Layout from '../../components/Layout'
export default function index({data}) {
  return (
    <Layout
    >
      <div>Lista de blogs</div>
      {data.map(({id, title, body})=>{
        return(
          <div key={id}>
          <h3>
          <Link href={`/blog/${id}`}>
            {id}- {title}
          </Link>
          </h3>
          <p>
            {body}
          </p>

          </div>
        )
      })}
    </Layout>
    
  )
}
export async function getStaticProps(){
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data =await res.json();
    return{
      props:{data}
    }
  } catch (error) {
    console.error(error);
  }

};
