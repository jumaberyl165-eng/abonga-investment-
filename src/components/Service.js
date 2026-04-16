import React from 'react';

function Services() {
  const servicesList = [
    "Residential Wiring & Lighting",
    "Commercial Electrical Maintenance",
    "Fault Finding & System Repairs",
    "Solar Power & Inverter Installation",
    "Generator Servicing"
  ];

  return (
    <section id="services" style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#f4f7f6' }}>
      <h2 style={{ color: '#004a99', marginBottom: '40px', fontFamily: 'Tahoma', fontSize: '2.2rem' }}>
        Our Professional Services
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px' }}>
        {servicesList.map((service, index) => (
          <div 
            key={index} 
            // 1. THIS IS THE HOVER LOGIC
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-15px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,74,153,0.2)';
              e.currentTarget.style.borderColor = '#004a99';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = '#ddd';
            }}
            // 2. THIS IS THE BOX DESIGN
            style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '15px',
              width: '220px',
              boxShadow: '0 8px 15px rgba(0,0,0,0.1)',
              fontWeight: 'bold',
              border: '2px solid #ddd',
              textAlign: 'center',
              fontFamily: 'Tahoma, Verdana, sans-serif',
              minHeight: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease-out',
              cursor: 'pointer',
              color: '#333'
            }}
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
