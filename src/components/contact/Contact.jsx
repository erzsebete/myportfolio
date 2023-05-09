import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_2uqkwpj",
      "template_wrlwsqe",
      form.current,
      "9wD_vmXv_l7DqHOSh"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>beta.dev@outlook.pt</h5>
            <a
              href="mailto:beta.dev@outlook.pt"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          {/* <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>meufacebookmessenger</h5>
            <a href="https://m.me/meuprofile" target="_blank" rel="noreferrer">
              Send a Message
            </a>
          </article> */}

          <article className="contact__option">
            <TbBrandTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@omeuusername</h5>
            <a href="https://t.me/yourusername" target="macaco">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+3511234567</h5>
            <a
              //href="https://api.whatsapp.com/send?phone=+3511234567" - antigo
              //href="https://web.whatsapp.com/send?phone=+3511234567" - só browser
              href="https://wa.me/3511234567"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* END CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
