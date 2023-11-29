import React from "react";
import {DATOS} from '../../valores/constantes'
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';
import './SocialLinks.css'; // Asegúrate de crear este archivo CSS

const {number, email, twitter, linkedin, instagram, youtube} = DATOS;

function SocialLinks() {
  return (
    <div className="social-links-container">
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-icon linkedin"><FaLinkedin /></a>
      <a href={twitter} target="_blank" rel="noopener noreferrer" className="social-icon twitter"><FaTwitter /></a>
      <a href={instagram} target="_blank" rel="noopener noreferrer" className="social-icon instagram"><FaInstagram /></a>
      <a href={youtube} target="_blank" rel="noopener noreferrer" className="social-icon youtube"><FaYoutube /></a>
      <a href={`mailto:${email}`} className="social-icon email"><FaEnvelope /></a>
      <a href={`tel:${number}`} className="social-icon phone"><FaPhone /></a>
    </div>
  );
}

export default SocialLinks;
