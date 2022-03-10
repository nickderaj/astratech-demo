import Link from 'next/link';
import React from 'react';

const AboutUs = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black',
      }}
    >
      <p style={{ color: 'white', fontSize: '4rem', padding: '1rem' }}>WIP</p>

      <Link href="/">
        <a className="btn btn--white">Home</a>
      </Link>
    </div>
  );
};

export default AboutUs;
