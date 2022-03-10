import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__image">
            <Image src="/images/logo-white.png" alt="logo" width="250" height="90" />
          </li>
          <div style={{ padding: '2rem 0' }} />
          <li className="navigation__item">
            <Link href="/">
              <a className="navigation__link">Home</a>
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="/about">
              <a className="navigation__link">About Us</a>
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="/technologies">
              <a className="navigation__link">Technologies</a>
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="/contact">
              <a className="navigation__link">Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
