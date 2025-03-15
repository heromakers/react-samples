import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BlogPage = () => {
  return (
    <>
      <div className="header-margin"></div>
      <Header />
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Blog articles</h2>
              </div>
            </div>
          </div>
          <div>Blog Page</div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPage;
