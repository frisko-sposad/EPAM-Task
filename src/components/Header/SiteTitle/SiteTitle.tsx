import Link from 'next/link';
import React, { FC } from 'react';

const SiteTitle: FC = () => (
  <Link href="/" passHref>
    <a href="/">
      <h1>NetflixRoulette</h1>
    </a>
  </Link>
);

export default SiteTitle;
