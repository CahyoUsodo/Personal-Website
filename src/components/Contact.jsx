import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // form.current.value = '';
    emailjs.sendForm('service_1xs53ot', 'template_dxcl5p8', form.current, 'IDtvwC72VUmHB8DHH')
      .then((result) => {
        console.log('SUCCESS!', result.text);
        form.current.from_name.value = '';
        form.current.from_email.value = '';
        form.current.message.value = '';
        alert('Your message has been sent successfully');
      }, (error) => {
        console.log('FAILED...', error.text);
      });
  };

  return (
    <section id='contact' class='contact pt-5'>
      <div className='container'>
      <h2 class="text-center">Contact</h2>
      <p class="text-center">Fill out the form and I will get back to you as soon as possible!</p>
      <div class='row pb-4'>
        <div class='row justify-content-center card border border-dark contact-card'>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="from_name" placeholder='Your name' required />
            <label>Email</label>
            <input type="email" name="from_email" placeholder='example@gmail.com' required />
            <label>Message</label>
            <textarea name="message" placeholder='Hello! . . .' required />
            <button type='submit' color='green'>Submit</button>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
};