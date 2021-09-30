import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const BaseFooter = () => {
  return (
    <Container>
      <Nav className="d-flex justify-content-around">
        <Nav.Link disabled>
          &copy;{new Date().getFullYear()} USA Dance #2006 (Cincinnati, OH)
        </Nav.Link>
      </Nav>
    </Container>
  );
};

export default BaseFooter;
