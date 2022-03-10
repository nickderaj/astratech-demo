import Link from 'next/link';

const About = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big" id="section-about">
        <h2 className="heading-secondary heading-secondary--main">Our AstraPRIME Biogas Upgrading Systems</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">Get to know us</h3>
          <p className="paragraph">
            Astra Tech is a renewable and environmental technology solutions provider. We focus on biogas upgrading; providing
            turnkey solutions to transform biogas produced by organic waste into clean, renewable energy.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">What we do best</h3>
          <p className="paragraph">
            Our strong focus on research and development of leading technologies in the market allow us to provide the best
            possible solutions to increase sustainability in the renewable energy market.
            <br /> <br />
            From planning to financing, commissioning to maintenance/support, our highly-skilled and experienced team offers
            comprehensive services and deliver quality products.
          </p>

          <Link href="/about">
            <a className="btn-text">Learn more &rarr;</a>
          </Link>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img alt="Photo 1" src="/images/tech-1.jpeg" className="composition__photo composition__photo--p1" />
            <img alt="Photo 2" src="/images/tech-2.jpeg" className="composition__photo composition__photo--p2" />
            <img alt="Photo 3" src="/images/tech-3.jpeg" className="composition__photo composition__photo--p3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
