
import { Container, Col, Row, Button } from 'react-bootstrap'
import React, { useRef, useState } from 'react';
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from '@emailjs/browser';
 

export const Contact = () => {
  const form = useRef();

 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cegx14m', 'template_ea06ixb', form.current, 'ELOpDhIKWVRENY1d6')
      .then((result) => {
        location.reload();

          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });

  };

  return (

<>

    <Container style={{ padding: '100px' }} id='contact' >
      <Row >
        <Col md={6} className="c-left" >
          <h1 className='fw-bold'>Get in Touch</h1>
          <h1 className="yellow fw-bold">Contact me</h1>
          <Container style={{ padding: '30px' }}>
            <Row>
              <Col md={12} className="contact-social text-center">

                <a
                  href="https://github.com/arularun-developer"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color text-black  contact-social-icons"
                >
                  <AiFillGithub />
                </a>


                <a
                  href="http://www.linkedin.com/in/arun-kumar-49613928b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  contact-social-icons "
                >
                  <FaLinkedinIn className='text-primary' />
                </a>

              </Col>
            </Row>
          </Container>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className='user' placeholder='Enter Your Name'  required/>
            <input type="email" name="user_email" className='user' placeholder='Enter Your Email' required />
            <textarea name="message" className='user' placeholder='Message' required  />
            <Button type="submit" className="button ">Send</Button>
          </form>
        </Col>

      </Row>


    </Container>

</>
  );
};



