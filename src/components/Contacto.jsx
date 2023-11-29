import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "@emailjs/browser";
import React from "react";
import SocialLinks from './SocialLinks/SocialLinks';


const FormularioContacto = () => {
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

    <section className="contact-page-wrap section-padding">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 col-md-6 col-12">
        <h2 style={{ textAlign: "center" }}>CONTACTA CON DESATASCOS POCITEN</h2>
      </div>
    </div>
    <SocialLinks />
    <br />
    <div className="row">
      <div className="col-12 col-lg-12">
        <div className="contact-map-wrap">
          <div id="map">
            <iframe
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Calle%20Lezo%208,%206%20D%2028041,Madrid+(Your%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              frameBorder={0}
              style={{ border: 0, width: "100%" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="row section-padding pb-0">
      <div className="col-12 text-center mb-20">
        <span>
          <i className="fal fa-pen" />
          Deja tu Mensaje
        </span>
        <h1>PIDE TU PRESUPUESTO</h1>
      </div>
    </div>
    <div className="col-12 col-lg-12">
      <div className="contact-form">
        <form onSubmit={handleSubmit} ref={form} className="row" id="contact-form">
          <div className="col-md-6 col-12">
            <div className="single-personal-info">
              <label htmlFor="fname">Nombre Completo</label>
              <input type="text" placeholder="Nombre Completo" name="nombre" required />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="single-personal-info">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email" name="email" required />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="single-personal-info">
              <label htmlFor="phone">Teléfono</label>
              <input name="phone" placeholder="Teléfono" required />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="single-personal-info">
              <label htmlFor="subject">Asunto</label>
              <input name="asunto" placeholder="Asunto" required />
            </div>
          </div>
          <div className="col-md-12 col-12">
            <div className="single-personal-info">
              <label htmlFor="message">Mensaje</label>
              <textarea name="mensaje" placeholder="Mensaje" required />
            </div>
          </div>
          <div className="col-md-12 col-12 text-center">
            <button className="submit-btn" type="submit" defaultValue="Enviar">
              Enviar
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  </div>
</section>

 
  );
};

export default FormularioContacto;
