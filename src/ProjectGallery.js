import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

const projects = [
  { id: 1, title: 'Portfolio Website', description: 'Personal portfolio built with React.', category: 'Web' },
  { id: 2, title: 'Mobile App', description: 'A sample mobile application.', category: 'Mobile' },
  { id: 3, title: 'Data Analysis', description: 'Data analysis project using Python.', category: 'Data' },
];

const categories = ['All', 'Web', 'Mobile', 'Data'];

function ProjectGallery() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <Container className="my-4">
      <Form className="mb-4">
        <Form.Group controlId="categoryFilter">
          <Form.Label>Filter by category</Form.Label>
          <Form.Select value={filter} onChange={e => setFilter(e.target.value)}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
      <Row>
        {filtered.map(project => (
          <Col key={project.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProjectGallery;
