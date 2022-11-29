import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';

const blog = (blog) => {
  return (
    <>
      <Head>
        <title>{blog.data.title} | WedKnox</title>
      </Head>
      <Header />
      <div className="container">
        <div className="blogFull">
          <img
            src={`${process.env.apiURl}uploads/allimgs/${blog.data.blogpic}`}
            className="img-fuild w-100"
          />
          <h1 className="mt-4">{blog.data.title}</h1>
          <div
            className="mt-3"
            dangerouslySetInnerHTML={{ __html: blog.data.content }}
          ></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch(
    `${process.env.apiURl}apicontroller/blog/${context.params.blogid}`
  );

  const data = await response.json();

  return {
    props: { data },
  };
}
export default blog;
