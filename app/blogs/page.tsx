import React from 'react';
import GhostContentAPI, { PostsOrPages } from '@tryghost/content-api';
import Link from 'next/link';

export interface Blog {
  id: string;
  title: string;
  slug: string;
  feature_image: null | string;
  published_at: Date;
}

export const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: 'f6cdaf35e6086d43cbb0d70cbb',
  version: 'v5.0'
});

export async function getPosts(): Promise<void | PostsOrPages> {
  return await api.posts
    .browse({
      limit: 'all',
      fields: ['id', 'title', 'slug', 'feature_image', 'published_at']
    })
    .catch((err) => {
      console.error(err);
    });
}

export default async function page() {
  const data = await getPosts();

  if (!data) {
    return <p>render 404 page</p>;
  }

  // data.map((item) => {
  //   console.log('from item');
  //   console.log(item.title);
  // });

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="h-full w-3/5">
        <h1 className="text-xl">Blog post page</h1>

        <div className="flex flex-col mt-5">
          {data.map((item) => (
            <div className="mb-5">
              <Link className="hover:underline" href={'blogs/' + item.slug}>
                {item.title}
              </Link>
              <p>{item.id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
