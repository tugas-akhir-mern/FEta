import {Container, Nav, Navbar } from "react-bootstrap";
import {useContext} from "react";
import {ContextApplication} from "../config/contexts.js";
import useJWT from "../hooks/useJWT.jsx";
import useHTTP from "../hooks/useHTTP.jsx";

const LibComponentNavbar = () => {
  const jwt = useJWT()

  const applcation = useContext(ContextApplication);

  const signOut = () => {
    jwt.signOut();
    applcation.setIsAuthenticated(false);
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary d-print-none">
      <Container>
        <Navbar.Brand href="#">Loundry Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {applcation.isAuthenticated && (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#/">Barang</Nav.Link>
              <Nav.Link href="#terima">Terima</Nav.Link>
              <Nav.Link href="#kas">Kas</Nav.Link> */}
              <Nav.Link onClick={signOut}>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  )
}

export default LibComponentNavbar;