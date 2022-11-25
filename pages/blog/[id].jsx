import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/Layout';


export default function primerPost({data}) {
  return (
    <Layout title={data.title} description={"descripcion POST"}>
      <h1>
        {data.id}--
        {data.title}
      </h1>
      <p>{data.body}</p>
    </Layout>
  );
};

export async function getStaticPaths(){
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data.map(({id})=>({params: {id: `${id}`}}));
    return {
      paths,
    fallback: false}

  } catch (error) {
    console.error(error)
  }
}
export async function getStaticProps({params}){
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/"+ params.id);
    const data =await res.json();
    return{
      props:{data}
    }
  } catch (error) {
    console.error(error);
  }

};