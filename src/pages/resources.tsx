import Image from "next/image";
import Link from "next/link";
import CardImg from "react-bootstrap/CardImg";

const ResourcesPage = () => {
  return (
    <div className="container">
      <h1 className="text-center pt-3 py-md-5">Resources</h1>
      <p className="text-center">
        Currently, we use the following venues for our events:
      </p>
      <section className="row pb-md-5">
        <div className="col-12 col-md-6 mb-3">
          <div className="card">
            <CardImg
              as={Image}
              src="/goc.jpeg"
              alt="Greek Orthodox Church image"
              width={200}
              height={200}
              layout="responsive"
            />
            <div className="card-body">
              <h5 className="card-title">
                Holy Trinity - St. Nicholas Greek Orthodox Church
              </h5>
              <address>7000 Winton Rd, Cincinnati, OH 45224</address>
              <Link href="https://goo.gl/maps/YTGbnvZZTb1jUb4RA" passHref>
                <a target="_blank" rel="noreferrer" className="btn btn-primary">
                  Directions
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <div className="card">
            <CardImg
              as={Image}
              src="/music_hall.jpg"
              alt="Music Hall image"
              width={200}
              height={200}
              layout="responsive"
            />
            <div className="card-body">
              <h5 className="card-title">Cincinnati Music Hall</h5>
              <address>1241 Elm St, Cincinnati, OH 45202</address>
              <Link href="https://goo.gl/maps/F8SbajhF6ayt58sf9" passHref>
                <a target="_blank" rel="noreferrer" className="btn btn-primary">
                  Directions
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
