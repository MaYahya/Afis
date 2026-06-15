import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { FiFileText } from 'react-icons/fi';
import './Pages.css';

const RequestQuote = () => {
  return (
    <div className="page-placeholder">
      <SEO
        title="Request a Quote"
        description="Request a customized quote for POS systems, IT hardware, and software solutions in Qatar. Our team will get back to you within 24 hours."
        keywords="POS quote Qatar, IT hardware quote Doha, request quote POS systems, custom POS quote Qatar"
        keywordsAr="عرض سعر نقاط البيع قطر, طلب عرض سعر أجهزة الدوحة, طلب عرض سعر أنظمة نقاط البيع قطر, عرض سعر مخصص قطر"
        canonical="https://www.afis.qa/request-quote"
      />
      <div className="page-icon"><FiFileText /></div>
      <h1>Request a Quote</h1>
      <p>Fill out the form below to receive a customized quote for your business requirements.</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
};

export default RequestQuote;
