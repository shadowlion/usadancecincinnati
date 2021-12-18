import Nav from "react-bootstrap/Nav";

const BaseFooter = () => {
  const year = new Date().getFullYear();

  return (
    <div className="container">
      <Nav className="d-flex justify-content-around">
        <Nav.Link disabled>
          &copy;{year} USA Dance #2006 (Cincinnati, OH)
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default BaseFooter;
