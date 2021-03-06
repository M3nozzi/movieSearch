import React from 'react';
import { AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai';


export default function Footer() {
    return (
    <footer>
      <h1>Developed by Fabio Menozzi</h1>
      <a href="https://www.linkedin.com/in/menozzi-fabio/" target="_blank" rel="noopener noreferrer">
        <AiOutlineLinkedin size={20} color="#fff" />
      </a>
      <a href="https://github.com/M3nozzi" target="_blank" rel="noopener noreferrer">
        <AiOutlineGithub size={20} color="#fff" />
      </a>
    </footer>
  );
}

