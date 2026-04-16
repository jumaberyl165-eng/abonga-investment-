import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, this just alerts. Later, you can link this to an email service.
    alert(`Thank you ${formData.name}, Abonga Investment will contact you soon!`);
  };

  return (
    <section id="contact" style={{ padding: '50px 20px', backgroundColor: '#f4f4f4' }}>
      <h2 style={{ textAlign: 'center', color: '#0056b3' }}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="text" 
          placeholder="Your Name" 
          required 
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          required 
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <textarea 
          placeholder="How can we help you?" 
          rows="5" 
          required 
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        ></textarea>
        <button type="submit" style={{ padding: '12px', backgroundColor: '#0056b3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;