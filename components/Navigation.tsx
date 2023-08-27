'use client';

import Link from 'next/link';
import React from 'react';

export default function Navigation() {
  return (
    <div className="border-2 border-teal-500 h-16 sticky top-0 z-40 w-full backdrop-blur">
      <div className="h-full w-3/5 m-auto flex justify-between">
        <ul className="h-full flex justify-center items-center gap-3">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <li>Projects</li>
          <Link href="/blogs" className="hover:underline">
            Blogs
          </Link>
        </ul>
        <div className="h-full flex justify-center items-center">
          <p>icons</p>
        </div>
      </div>
    </div>
  );
}
