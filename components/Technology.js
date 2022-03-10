import Link from 'next/link';

const Technology = () => {
  return (
    <section className="section-technology">
      <div className="technology-wrapper">
        <div className="technology">
          <div action="#" className="technology__card">
            <h2 className="heading-secondary heading-secondary--main">Our Technologies</h2>
            <p className="technology__text">
              As a solution provider, we constantly ask ourselves the question: how can we innovate? The answer has always been
              there.
              <br />
              <br />
              By thinking ahead. Find out how we innovate today&apos;s biogas industry for a better future with our latest
              technology.
            </p>
            <Link href="/technologies">
              <a className="btn btn--primary">Read more &rarr;</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
