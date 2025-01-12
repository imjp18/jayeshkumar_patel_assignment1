import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';

const Account = ({ user, updateUser }) => {
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    alert('Account updated!');
  };

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 56px)' }}>
      <div>
        <h2>Account</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="address">Shipping Address</Label>
            <Input
              type="text"
              name="address"
              value={formData.address || ''}
              onChange={handleChange}
            />
          </FormGroup>
          <Button type="submit">Update Account</Button>
        </Form>
      </div>
    </Container>
  );
};

export default Account;
