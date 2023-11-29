import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import './ContactForm.css'; 

const ContactForm = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configura tu cuenta de EmailJS con los detalles de tu servicio, plantilla y usuario
    const SERVICE_ID = "service_t0c9lng";
    const TEMPLATE_ID = "template_geqj1pp";
    const USER_ID = "8Sj26Hr--rrpgCKTu";

    // Envía el formulario utilizando EmailJS
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((response) => {
        console.log(
          "¡El mensaje se ha enviado correctamente!",
          response.status,
          response.text
        );
        toast.success("Mensaje enviado correctamente");
        form.current.reset();
        // Aquí puedes realizar acciones adicionales después de enviar el formulario
      })
      .catch((error) => {
        console.error("Error al enviar el mensaje:", error);
        toast.error("Error al enviar el mensaje");
        // Maneja el error de envío del formulario
      });
    e.target.reset();
  };

  return (
    <div>
      <h2 className="contact-title">Contacta con Nosotros</h2>
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Teléfono"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="subject"
            className="form-control"
            placeholder="Asunto"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            className="form-control"
            placeholder="Mensaje"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Enviar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
