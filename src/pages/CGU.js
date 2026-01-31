import React from 'react';


const CGU = () => {
  const containerStyle = {
    backgroundColor: '#333333',
    minHeight: '100vh',
    fontFamily: 'Montserrat, sans-serif',
    color: 'white',
  };

  const cardStyle = {
    backgroundColor: '#9A48D0', // Ton violet Figma
    border: '4px solid #000',
    borderRadius: '25px',
    padding: '30px',
    margin: '40px auto',
    maxWidth: '800px',
    boxShadow: '8px 8px 0px #000',
    color: '#000', // Texte noir pour le contraste sur le vert
  };

  const sectionStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '15px',
    borderRadius: '15px',
    marginBottom: '20px',
    border: '2px solid #000',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ textAlign: 'center', textTransform: 'uppercase', marginBottom: '30px' }}>
          Terms & Conditions
        </h1>

        <div style={sectionStyle}>
          <h2 style={{ color: '#7BC950' }}>1. App Features</h2>
          <p>
            Prompt Wallet is a tool designed for developers to organize, edit, 
            and store prompt libraries for LLMs such as ChatGPT, Claude, and Mistral. 
            The service is provided free of charge.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={{ color: '#7BC950' }}>2. Development Team</h2>
          <p>
            This application is developed by <strong>EverydayLLM</strong>. 
            The core team consists of Albertine (Director), Joanne (Sales), 
            and the development squad.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={{ color: '#7BC950' }}>3. Data Management & Privacy</h2>
          <p>
            Prompts are stored locally on the user's device. 
            <strong>Note:</strong> Our business model is based on the resale of qualified 
            anonymized data to companies operating in the IT sector. 
            By using Prompt Wallet, you acknowledge this data structure.
          </p>
        </div>

        <p style={{ fontSize: '0.8rem', textAlign: 'center', marginTop: '20px' }}>
          EverydayLLM © 2026 - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default CGU;

