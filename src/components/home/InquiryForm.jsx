import { useState } from 'react';
import { FiSend, FiLoader } from 'react-icons/fi';
import { submitInquiry } from '../../services/api';
import './Sections.css';

const InquiryForm = () => {
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
    <section className="section inquiry-section">
      <div className="container">
        <div className="inquiry-wrapper">
          <div className="inquiry-header">
            <h2>Send Us An Inquiry</h2>
            <p>Have any questions or need a quote? Fill the form and our team will get back to you shortly.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text" id="name" name="name"
                  placeholder="Your full name"
                  value={formData.name} onChange={handleChange} required
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text" id="company" name="company"
                  placeholder="Your company"
                  value={formData.company} onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel" id="phone" name="phone"
                  placeholder="Your phone number"
                  value={formData.phone} onChange={handleChange} required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email" id="email" name="email"
                  placeholder="Your email address"
                  value={formData.email} onChange={handleChange} required
                />
              </div>
              <div className="form-group">
                <label htmlFor="product">Product Interested In</label>
                <select id="product" name="product" value={formData.product} onChange={handleChange}>
                  <option value="">Select a product</option>
                  <option value="pos-systems">POS Systems</option>
                  <option value="receipt-printers">Receipt Printers</option>
                  <option value="barcode-scanners">Barcode Scanners</option>
                  <option value="cash-drawers">Cash Drawers</option>
                  <option value="label-printers">Label Printers</option>
                  <option value="software">POS Software</option>
                  <option value="networking">Networking</option>
                  <option value="cctv">CCTV</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message"
                  placeholder="Write your message..."
                  value={formData.message} onChange={handleChange}
                  rows="4"
                />
              </div>
              <div className="full-width">
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
                <button type="submit" className="btn btn-primary btn-lg" disabled={submitting} style={{ opacity: submitting ? 0.7 : 1 }}>
                  {submitting ? <><FiLoader size={16} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</> : <><FiSend size={16} /> Submit Inquiry</>}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
