import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "3rem 0", textDecoration: "underline red" }}>
          GET IN TOUCH
        </h1>
        <ContactForm />
      </div>
    </Layout>
  )
}

export default Contact
