import Blogs from '../components/Blogs/Blogs';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const blogs = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Blogs />
      </div>
      <Footer />
    </>
  );
};
export default blogs;
