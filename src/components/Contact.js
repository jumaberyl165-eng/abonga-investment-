import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '80px 20px', backgroundColor: '#f4f4f4' }}>
      <div style={{ 
        maxWidth: '600px', 
        margin: '0 auto', 
        backgroundColor: 'white', 
        padding: '40px', 
        borderRadius: '12px', 
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)' 
      }}>
        <h2 style={{ textAlign: 'center', color: '#0056b3', marginBottom: '30px' }}>Contact Us</h2>
        
        {/* We removed the handleSubmit and added the direct Formspree action */}
        <form 
          action="https://formspree.io/f/mqewpkar" 
          method="POST" 
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontWeight: '600', color: '#333' }}>Your Name</label>
            <input type="text" name="name" required style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontWeight: '600', color: '#333' }}>Your Email</label>
            <input type="email" name="email" required style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontWeight: '600', color: '#333' }}>How can we help you?</label>
            <textarea name="message" rows="5" required style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}></textarea>
          </div>

          <button type="submit" style={{ 
            padding: '15px', 
            backgroundColor: '#0056b3', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px', 
            cursor: 'pointer', 
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;