import React from 'react';
import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Layout({children, title, description, home}) {
    const name= "gerardweb"
  return (
    <div className={styles}>
      <Head>
        <link reL={"icon"} href={"/favicon.ico"} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {home ? (
        <>
          <Image
            priority
            src="/img/1.jpg"
            // className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          ></Image>
          <h1
          //className={utilStyles.heading2Xl}
          >
            {name}
          </h1>
        </>
      ) : (
        <>
          <Link href="/">
            <Image
              priority
              src="/img/1.jpg"
              //className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt={name}
            ></Image>
          </Link>
          <h2
          //className={utilStyles.headingLg}
          >
            <Link href="/">{name}</Link>
          </h2>
        </>
      )}
      <nav>
        {" "}
        <nav>
          <Link href="/">
            Inicio | 
          </Link>
          <Link href="/blog">
           Blog | 
          </Link>
          <Link href="/contact">
            Contacto |
          </Link>
          <Link href="/about">
            About  |
          </Link>
        </nav>
      </nav>
      <main>{children}</main>
      <footer>
        {" "}
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              ← Back to home
            </Link>
          </div>
        )}
      </footer>
    </div>
  );
}
Layout.defaultProps ={
    title:"Next.js mi sitio web",
    description: "Descripcion del sitio",
}