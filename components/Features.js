import Image from 'next/image';

const Features = () => {
  return (
    <section className="section-features" id="section-features">
      <div style={{ textAlign: 'center', padding: '0 0 4rem 0' }}>
        <h2 className="heading-secondary heading-secondary--sub">AstraPRIME</h2>
        <h3 className="heading-tertiary">Our Proven Systems</h3>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <div className="features">
            <div className="features__icon">
              <Image src={'/icons/cells.svg'} alt="image" width="60px" height="60px" />
            </div>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Stage 1: <br />
              Biogas Pre-Treatment
            </h3>
            <p className="features__text">
              Water content is removed by cooling biogas to approx. 5°C, while Hydrogen Sulfide and other contaminants are
              extracted using carbon filter.
            </p>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="features">
            <div className="features__icon">
              <Image src={'/icons/ideas.svg'} alt="image" width="60px" height="60px" />
            </div>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Stage 2:
              <br />
              Biogas Upgrading
            </h3>
            <p className="features__text">
              CO2 is separated using high-selectivity membrane technology, allowing the highest efficiency (More than 99.5%) and
              lowest methane loss (Less than 0.5%).
            </p>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="features">
            <div className="features__icon">
              <Image src={'/icons/power.svg'} alt="image" width="60px" height="60px" />
            </div>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Stage 3:
              <br />
              Bio-Methane Usage
            </h3>
            <p className="features__text">
              Bio-methane can be fed directly into the natural gas grid, used as biofuel or compressed for storage and
              transportation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
