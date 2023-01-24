import Image from "next/image";
import Link from "next/link";
import GocImg from "../../public/goc.jpeg";
import MusicHallImg from "../../public/music_hall.jpg";

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
            <Image
              className="card-img-top"
              src={GocImg}
              alt="image of the greek orthodox church"
            />
            <div className="card-body">
              <h5 className="card-title">
                Holy Trinity - St. Nicholas Greek Orthodox Church
              </h5>
              <address>7000 Winton Rd, Cincinnati, OH 45224</address>
              <Link
                href="https://goo.gl/maps/YTGbnvZZTb1jUb4RA"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Directions
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <div className="card">
            <Image
              className="card-img-top"
              src={MusicHallImg}
              alt="image of the greek orthodox church"
            />
            <div className="card-body">
              <h5 className="card-title">Cincinnati Music Hall</h5>
              <address>1241 Elm St, Cincinnati, OH 45202</address>
              <Link
                href="https://goo.gl/maps/F8SbajhF6ayt58sf9"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
