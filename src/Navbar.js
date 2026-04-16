function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 50px',
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      fontFamily: 'Tahoma'
    }}>
      <h3 style={{ color: '#004a99', margin: 0 }}>Abonga</h3>
      <div style={{ display: 'flex', gap: '30px' }}>
        <a href="#home" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Home</a>
        <a href="#services" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Services</a>
        <a href="#contact" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;