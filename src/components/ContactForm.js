import React from "react"
import styled from "styled-components"

const ContactForm = () => {
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
  `
    const Input = styled.input`
width: 50vw`
    
    const TextArea = styled.textarea`
      width: 50vw;
    `
    const SubmitButton = styled.button`
    width: 8rem;
    margin-top: 1rem;
    align-self: center`

  return (
    <Form name="form" action="">
    
      <label htmlFor="fullname">Full Name</label>
      <Input type="text" name="fullname" required />

      <label htmlFor="email">Email</label>
      <Input type="email" name="email" required/>

      <label htmlFor="message">Message</label>
      <TextArea name="message" rows="5" required/>

      <SubmitButton type="submit">Send</SubmitButton>
    </Form>
  )
}

export default ContactForm
