import React from 'react';

const About = () => {
  return (
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: '15px',
        borderRadius: '15px',
        marginBottom: '20px',
        border: '2px solid #000',
         }}>
      <h1 style={{ 
            padding: '30px',
            margin: '40px auto',
            maxWidth: '800px',
            color: '#9A48D0' }}>About Prompt Wallet</h1>
      
      <p style={{
            backgroundColor: '#9A48D0', // Ton violet Figma
            border: '4px solid #000',
            borderRadius: '25px',
            padding: '30px',
            margin: '40px auto',
            maxWidth: '800px',
            boxShadow: '8px 8px 0px #000',
            color: '#000', // Texte noir pour le contraste sur le vert
        }}>
        Prompt Wallet was born from EverydayLLM’s desire to simplify the daily workflow
        of developers working with artificial intelligences such as ChatGPT, Claude, or Mistral.
      </p>

      <div
        style={{
            backgroundColor: '#9A48D0', // Ton violet Figma
            border: '4px solid #000',
            borderRadius: '25px',
            padding: '30px',
            margin: '40px auto',
            maxWidth: '800px',
            boxShadow: '8px 8px 0px #000',
            color: '#000', // Texte noir pour le contraste sur le vert
        }}
      >
        <h3>Development Context</h3>
        <p>
          This project was developed as a team effort by Guinildo and Alicia,
          students at L’École Multimédia, in response to the growing need for
          managing personalized prompt libraries.
        </p>
      </div>
    </div>
  );
};

export default About;