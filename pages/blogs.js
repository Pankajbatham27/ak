import Blogs from '../components/Blogs/Blogs';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const blogs = (props) => {
  return (
    <>
      <Header />
      <div className="container">
        <Blogs data={props.data} />
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch(
    `${process.env.apiURl}apicontroller/blogs`
  );

  const data = await response.json();

  return {
    props: { data },
  };
}

export default blogs;
