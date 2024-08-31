import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <p>© 2024 Giraffas. Todos os direitos reservados.</p>
          </Col>
          <Col md={6} className="text-md-right">
            <p>Política de Privacidade | Termos de Uso</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
