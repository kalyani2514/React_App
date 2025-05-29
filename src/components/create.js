import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

export default function Create() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    if (data) {
      axios.post(`https://6412e841b1ea7443031c82b8.mockapi.io/fakeapi1`, {
        firstName: data.firstName,
        lastName: data.lastName,
        emailId: data.emailId,
        number: data.number,
        password: data.password,
        checkbox: data.checkbox
      }).then(() => {
        alert("Submitted Succesful!");
        navigate('/read');
      }).catch((error) => {
        alert(error);
      })
    }

  }


  return (
    <div>
      <Form className="create-form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          
          <label>First Name</label>
          <input placeholder='First Name' type="text"
            {...register("firstName", { required: true, maxLength: 10 })} />
        </Form.Field>
        {errors.firstName && <p>Please check the First Name</p>}
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' type="text"
            {...register("lastName", { required: true, maxLength: 10 })} />
        </Form.Field>
        {errors.lastName && <p>Please check the Last Name</p>}
        <Form.Field>
          <label>Email ID</label>
          <input type="email" placeholder='Email-ID'
            {...register("email",
              {
                required: true,
                pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
              })} />
        </Form.Field>
        {errors.emailId && <p>Please check the Email-ID</p>}
        <Form.Field>
          <label>Number</label>
          <input type="number" placeholder='Number' />
        </Form.Field>
        {errors.number && <p>Please check the Number</p>}
        <Form.Field>
          <label>Password</label>
          <input
            placeholder='Password'
            type="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
            })} />
        </Form.Field>
        {errors.password && <p>Please check the Password</p>}
        <Form.Field>
          <input type="checkbox" Checkbox label='I agree T&C'/>
          <label>I agree T&C</label>
        </Form.Field>
        {errors.checkbox && <p>Please check the Checkbox</p>}
        <Button type='submit'>Submit</Button>
      </Form>
    </div>

  )


}