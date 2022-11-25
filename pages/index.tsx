import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import Layout from '../components/Layout';

export default function Home() {
  return (

      <Layout title={"home"} description="home" home>
        <section
        //className={utilStyles.headingMd}
        >
          <p>[Your Self Introduction]</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </Layout>
  )
}
