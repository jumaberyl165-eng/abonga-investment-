import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#003366',
      color: 'white',
      padding: '50px 20px',
      textAlign: 'center',
      marginTop: '50px',
      borderTop: '5px solid #ffcc00'
    }}>
      <h2 style={{ color: '#ffcc00' }}>Contact Abonga Investment</h2>
      
      <div style={{ margin: '20px 0' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
          <strong>Email us at:</strong>
        </p>
        <a 
          href="mailto:Abongainvestment@gmail.com" 
          style={{ 
            color: 'white', 
            fontSize: '1.4rem', 
            fontWeight: 'bold',
            textDecoration: 'underline' 
          }}
        >
          Abongainvestment@gmail.com
        </a>
      </div>

      <p style={{ marginTop: '20px', opacity: '0.8' }}>
        Based in Nairobi, Kenya | +254 723 707 748
      </p>
      <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
        &copy; 2026 Abonga Investment. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;