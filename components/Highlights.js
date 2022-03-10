import Image from 'next/image';

const Highlights = () => {
  return (
    <section className="section-highlights">
      <div style={{ textAlign: 'center', padding: '0 0 4rem 0' }}>
        <h2 className="heading-secondary heading-secondary--dark">Why AstraPRIME</h2>
      </div>

      <div className="highlights-grid">
        <div className="highlights">
          <div className="highlights__icon">
            <Image src={'/icons/power.svg'} alt="image" width="80px" height="80px" />
          </div>
          <p className="highlights__text">Low energy consumption</p>
        </div>

        <div className="highlights">
          <div className="highlights__icon">
            <Image src={'/icons/aux.svg'} alt="image" width="80px" height="80px" />
          </div>
          <p className="highlights__text">No auxiliary materials such as water or sorbents required</p>
        </div>

        <div className="highlights">
          <div className="highlights__icon">
            <Image src={'/icons/emissions.svg'} alt="image" width="80px" height="80px" />
          </div>
          <p className="highlights__text">No emissions into the environment</p>
        </div>

        <div className="highlights">
          <div className="highlights__icon">
            <Image src={'/icons/separation.svg'} alt="image" width="80px" height="80px" />
          </div>
          <p className="highlights__text">Separation at ambient temperature is possible</p>
        </div>

        <div className="highlights">
          <div className="highlights__icon">
            <Image src={'/icons/space.svg'} alt="image" width="80px" height="80px" />
          </div>
          <p className="highlights__text">Low space requirements</p>
        </div>

        <div className="highlights">
          <div className="highlights__icon">
            <Image src={'/icons/selectivity.svg'} alt="image" width="80px" height="80px" />
          </div>
          <p className="highlights__text">Very high selectivity</p>
        </div>

        <div className="highlights">
          <div className="highlights__icon">
            <Image src={'/icons/continuous.svg'} alt="image" width="80px" height="80px" />
          </div>
          <p className="highlights__text">Continuous separation process</p>
        </div>

        <div className="highlights">
          <div className="highlights__icon">
            <Image src={'/icons/modular.svg'} alt="image" width="80px" height="80px" />
          </div>
          <p className="highlights__text">Simple, modular setup</p>
        </div>

        <div className="highlights">
          <div className="highlights__icon">
            <Image src={'/icons/flexible.svg'} alt="image" width="80px" height="80px" />
          </div>
          <p className="highlights__text">Flexible and easily expanded</p>
        </div>

        <div className="highlights">
          <div className="highlights__icon">
            <Image src={'/icons/yield.svg'} alt="image" width="80px" height="80px" />
          </div>
          <p className="highlights__text">High yield and purity</p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
