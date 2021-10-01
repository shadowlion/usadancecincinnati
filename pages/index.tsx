import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div className="container">
      <h1 className="text-center py-5">
        Your connection to Ballroom Dancing in the Tri-State area.
      </h1>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-4">
          <h2>Current Board Members:</h2>
          <ul>
            <li>President - Carol Ward</li>
            <li>Vice President - Louise Buker</li>
            <li>Treasurer - Yasha Ogg</li>
            <li>Secretary - Justin Chiou</li>
            <li>Member at Large - Katie Jones</li>
            <li>Member at Large - Joy Ingram</li>
            <li>Member at Large - Brenda Karr</li>
            <li>Member at Large - Michelle Weber</li>
            <li>Member at Large - Jeff Greatorex</li>
            <li>Member at Large - Greg Howard</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
