import { useState } from 'react'
import { Container, Row, Col, Card, Button, Modal, Alert, Navbar, Nav } from 'react-bootstrap'

export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [showAlert, setShowAlert] = useState(true)

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" className="mb-4">
        <Container>
          <Navbar.Brand>React-Bootstrap Demo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#card">Card</Nav.Link>
              <Nav.Link href="#modal">Modal</Nav.Link>
              <Nav.Link href="#alert">Alert</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        {showAlert && (
          <Alert variant="success" dismissible onClose={() => setShowAlert(false)} className="mb-4">
            🎉 ברוך הבא! זו התראה (Alert) שאפשר לסגור — נשלטת ב־React state.
          </Alert>
        )}

        <Row className="g-4">
          <Col md={6} id="card">
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>React Bootstrap Card</Card.Title>
                <Card.Text>
                  קומפוננטת Card מודולרית, עם תתי קומפוננטות (Title, Body) — קוד נקי וקריא.
                </Card.Text>
                <Button variant="primary" onClick={() => setShowModal(true)}>פתח Modal</Button>
              </Card.Body>
              <Card.Footer className="text-muted">דוגמה בסיסית</Card.Footer>
            </Card>
          </Col>

          <Col md={6} id="modal">
            <Card>
              <Card.Body>
                <Card.Title>Modal נשלט ב־state</Card.Title>
                <Card.Text>
                  אין צורך ב־data-attributes או ב־jQuery — הכל דרך useState.
                </Card.Text>
                <Button variant="outline-secondary" onClick={() => setShowModal(true)}>הצג Modal</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>שלום מ־React Bootstrap</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ה־Modal הזה נשלט ע״י React state — זו הדגמה קלאסית ליתרון על Bootstrap רגיל.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              סגור
            </Button>
            <Button variant="primary" onClick={() => setShowModal(false)}>
              שמור
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  )
}
