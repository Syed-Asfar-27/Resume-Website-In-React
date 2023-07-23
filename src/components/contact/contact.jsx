import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Asfar_Website', 'template_zsij0se', form.current, 'UKNH39WyPpWGZDLtN')

    e.target.reset()
  };
  return (
    <section id='contact'>
    <h5>Get Into Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
          <MdOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          
          <a href="mailto:syedasfar27@gmail.com" target="blank">Send a message</a>
        </article>
        <article className="contact_option">
          <RiMessengerLine className='contact_option-icon'/>
          <h4>Messenger</h4>
          
          <a href="https://m.me/syedasfar786" target="blank">Send a message</a>
        </article>
        <article className="contact_option">
          <RiWhatsappLine className='contact_option-icon'/>
          <h4>WhatsApp</h4>
          
          <a href="https://wa.me/923184318539" target="blank">Send a message</a>
        </article> 
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="text" name='email' placeholder='Your Email' required/>
        <textarea name='message' rows="7" placeholder='Your Message' required/>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact