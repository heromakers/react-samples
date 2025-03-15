import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const IndexPage = () => {
  return (
    <>
      <div className="header-margin"></div>
      <Header />
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Main page</h2>
              </div>
            </div>
          </div>
          <div>Index Page</div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default IndexPage;
