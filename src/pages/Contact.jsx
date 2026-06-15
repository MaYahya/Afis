import { useState } from 'react';
import SEO from '../components/SEO';
import { FiMapPin, FiPhone, FiMail, FiSend, FiLoader } from 'react-icons/fi';
import { siteConfig } from '../data/siteData';
import { submitInquiry } from '../services/api';
import GoogleMap from '../components/home/GoogleMap';
import './Pages.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '', product: '', message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);
    try {
      await submitInquiry(formData);
      setFeedback({ type: 'success', message: 'Thank you! Your inquiry has been submitted. We will contact you shortly.' });
      setFormData({ name: '', company: '', phone: '', email: '', product: '', message: '' });
    } catch {
      setFeedback({ type: 'error', message: 'Failed to send. Please try again or email us directly at helpdesk@afis.qa' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page-wrapper" style={{ paddingBottom: 0 }}>
      <SEO
        title="Contact Us"
        description="Contact AFIS IT & POS Solutions in Doha, Qatar. Call +974 7476 1025 or email helpdesk@afis.qa for POS systems, IT hardware, and technical support."
        keywords="contact AFIS Qatar, POS support Doha, IT help Qatar, POS repair Qatar, Doha Qatar POS contact"
        keywordsAr="اتصل بافيس قطر, دعم نقاط البيع الدوحة, مساعدة تقنية قطر, صيانة نقاط البيع قطر, اتصل بنا قطر"
        canonical="https://www.afis.qa/contact"
      />
      {/* Contact Hero */}
      <div className="contact-hero">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1>Get in Touch</h1>
          <p style={{ color: 'var(--text-sub)', fontSize: '18px', lineHeight: '1.6' }}>
            Have a question about our POS systems or need technical support? 
            Our team is standing by to help you streamline your operations.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="contact-layout">
          
          {/* Form Section */}
          <div className="contact-card">
            <h2>Send a Request</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" className="form-control" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" className="form-control" placeholder="john@company.com" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" className="form-control" placeholder="+974 0000 0000" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>How can we help?</label>
                <textarea name="message" className="form-control" placeholder="Tell us about your hardware requirements..." value={formData.message} onChange={handleChange}></textarea>
              </div>
              {feedback && (
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '12px',
                  marginBottom: '16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  background: feedback.type === 'success' ? '#ecfdf5' : '#fef2f2',
                  color: feedback.type === 'success' ? '#065f46' : '#991b1b',
                  border: feedback.type === 'success' ? '1px solid #a7f3d0' : '1px solid #fecaca'
                }}>
                  {feedback.message}
                </div>
              )}
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={submitting}>
                {submitting ? <><FiLoader size={16} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</> : <><FiSend size={16} /> Submit Message</>}
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '24px' }}>Contact Information</h2>
            <p style={{ color: 'var(--text-sub)', lineHeight: '1.6', marginBottom: '40px' }}>
              We operate exclusively out of Doha to provide ultra-fast fulfillment 
              and localized support algorithms engineered for Qatar's business ecosystem.
            </p>

            <div className="contact-info-list" style={{ marginBottom: '48px' }}>
              <div className="contact-info-item">
                <div className="contact-info-icon"><FiMapPin /></div>
                <div className="contact-info-text">
                  <h4>Headquarters</h4>
                  <p>{siteConfig.address}</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><FiPhone /></div>
                <div className="contact-info-text">
                  <h4>Sales & Support</h4>
                  <p>{siteConfig.phone}</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><FiMail /></div>
                <div className="contact-info-text">
                  <h4>Email Address</h4>
                  <p>{siteConfig.email}</p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', height: '280px' }}>
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
