import Image from 'next/image';

const Footer = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/mailing', {
      body: JSON.stringify({
        email: e.target.email.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
  };

  return (
    <footer className="footer">
      <div className="footer__element">
        <form onSubmit={handleSubmit}>
          <h4 className="footer__title">Join our mailing list</h4>
          <p className="footer__paragraph footer__paragraph-blue">
            Stay updated with the latest news in renewable and sustainable energy solutions
          </p>
          <input id="email" type="email" className="footer__form--field" placeholder="Your E-Mail Address" required />
          <button className="footer__btn footer__btn--primary footer__btn--inside uppercase">Submit</button>
        </form>
      </div>
      <div className="footer__element">
        <Image src="/images/logo-white.png" alt="Logo" width="166" height="60" />
        <p className="footer__paragraph">
          <b>Astra Tech Sdn Bhd</b>
          <br />
          No 2, Jalan Astana 1C, Bandar Bukit Raja,
          <br />
          41050 Klang, Selangor, Malaysia
          <br />
          Phone : +603 3344 7279
          <br />
          Email : info@astratechglobal.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
