import {Container, Nav, Navbar } from "react-bootstrap";
import {useContext} from "react";
import {ContextApplication} from "../config/contexts.js";
import useJWT from "../hooks/useJWT.jsx";
import useHTTP from "../hooks/useHTTP.jsx";

const LibComponentNavbar = () => {
  const jwt = useJWT()

  const application = useContext(ContextApplication);

  const signOut = () => {
    jwt.signOut();
    application.setIsAuthenticated(false);
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary d-print-none">
      <Container>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {application.isAuthenticated && (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#/">Apotik</Nav.Link>              
              <Nav.Link href="#terima">Pasien</Nav.Link>
              <Nav.Link href="#kas">Kamar</Nav.Link>
              <Nav.Link href="#kas">Staff</Nav.Link>
              <Nav.Link onClick={signOut}>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  )
}

export default LibComponentNavbar;