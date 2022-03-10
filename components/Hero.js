import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero__logo-box">
        <Image src="/images/logo-white.png" alt="Logo" layout="fill" />
      </div>

      <div className="hero__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">AstraTech</span>
          <br />
          <span className="heading-primary--sub">Shape the future through sustainability</span>
        </h1>

        <Link href="#section-about">
          <a className="btn btn--white btn--animated">Read more</a>
        </Link>
      </div>
    </header>
  );
};

export default Hero;
