import React from 'react'
import { Link } from 'react-router-dom';
function Homepage() {
  
  const headerStyle = {
    background: 'linear-gradient(to right, rgba(0, 51, 102, 0.9), rgba(0, 102, 204, 0.118))',
    color: 'white',
    padding: '60px 10%',
    textAlign: 'center',
    
  };

  const headingStyle = {
    fontSize: '3rem',
    marginBottom: '0.5rem',
    letterSpacing: '1px',
  };

  const paragraphStyle = {
    fontSize: '1.3rem',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  };

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '600',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  const navLinkHoverStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  };

  const heroSectionStyle = {
    textAlign: 'center',
    padding: '70px 10%',
  };

  const heroHeadingStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#003366',
  };

  const heroParagraphStyle = {
    fontSize: '1.2rem',
    marginBottom: '30px',
  };

  const heroButtonStyle = {
    background: '#003366',
    color: 'white',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '25px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const heroButtonHoverStyle = {
    background: '#00509e',
    transform: 'scale(1.1)',
  };

  const featuresSectionStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    padding: '70px 10%',
    backgroundColor: 'white',
    
  };

  const featureStyle = {
    textAlign: 'center',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '15px',
    background: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const featureHoverStyle = {
    transform: 'translateY(-10px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  };

  

  const testimonialsSectionStyle = {
    padding: '70px 10%',
    background: '#f4f4f9',
    textAlign: 'center',
  };

  const testimonialStyle = {
    fontStyle: 'italic',
    fontSize: '1rem',
    color: '#555',
    maxWidth: '600px',
    margin: '20px auto',
    position: 'relative',
    
  };

  const testimonialBeforeStyle = {
    content: '"“"',
    fontSize: '4rem',
    color: '#003366',
    position: 'absolute',
    top: '-20px',
    left: '-20px',
  };

  const testimonialAfterStyle = {
    content: '"”"',
    fontSize: '4rem',
    color: '#003366',
    position: 'absolute',
    bottom: '-20px',
    right: '-20px',
  };

  const ctaSectionStyle = {
    background: 'linear-gradient(135deg, #003366, #00509e)',
    color: 'white',
    padding: '70px 10%',
    textAlign: 'center',
  };

  const ctaButtonStyle = {
    background: 'white',
    color: '#003366',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '25px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const footerStyle = {
    background: '#222',
    color: '#aaa',
    padding: '20px 10%',
    textAlign: 'center',
  };

  const footerLinkStyle = {
    color: '#00509e',
    textDecoration: 'none',
    margin: '0 10px',
  };

  const footerLinkHoverStyle = {
    textDecoration: 'underline',
  };

  return (
    <div >
       
     
      <header style={headerStyle} >
        <h1 style={headingStyle}>Welcome to ToDoify</h1>
        <p style={paragraphStyle}>Stay organized and manage your tasks effortlessly</p>
        <nav style={navStyle}>
          <a href="#features" style={navLinkStyle}>Features</a>
          <a href="#testimonials" style={navLinkStyle}>Testimonials</a>
          <a href="#contact" style={navLinkStyle}>Contact</a>
        </nav>
      </header>

      
      <section className="hero" style={heroSectionStyle}>
        <h2 style={heroHeadingStyle}>Boost Your Productivity</h2>
        <p style={heroParagraphStyle}>Organize your tasks, meet deadlines, and stay on top of your goals.</p>
        <Link style={heroButtonStyle} className='btn' to={"/login"}>Start Managing Tasks</Link>
      </section>

      
      <section id="features" className="features" style={featuresSectionStyle}>
        <div className="feature" style={featureStyle}>
          
          <h3>Ease of Scheduling</h3>
          <p>Users can quickly add tasks to specific dates, making it easier to plan .</p>
        </div>
        <div className="feature" style={featureStyle}>
         
          <h3>Better Task Management</h3>
          <p>Users can visualize their tasks alongside the dates they are due, helping them stay organized and on track with deadlines.</p>
        </div>
        <div className="feature" style={featureStyle}>
          
          <h3>Task Prioritization</h3>
          <p>It helps users see which tasks need immediate attention by sorting and filtering.</p>
        </div>
      </section>

      
      <section id="testimonials" className="testimonials" style={testimonialsSectionStyle}>
        <h2>What Our Users Say</h2>
        <div className="testimonial" style={testimonialStyle}>
          "ToDoify has revolutionized the way I manage my tasks. The app is intuitive and simple to use."
        </div>
        <div className="testimonial" style={testimonialStyle}>
          "I can finally stay on top of my deadlines with ToDoify. It's the perfect tool for productivity."
        </div>
      </section>

     
      <section className="cta" style={ctaSectionStyle}>
        <h2>Start Managing Your Tasks Today</h2><br />
        <Link  style={{background: 'white',color: '#003366',padding: '15px 30px',border: 'none',borderRadius: '25px',fontSize: '1.1rem',cursor: 'pointer',
     transition: 'all 0.3s ease',}} to={"/register"} className='btn'>Sign Up Now</Link>
      </section>

      
      <footer style={footerStyle}>
        <p>&copy; 2024 ToDoify. All rights reserved.</p>
        <p>
          <a href="#" style={footerLinkStyle}>Privacy Policy</a> | <a href="#" style={footerLinkStyle}>Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};



export default Homepage