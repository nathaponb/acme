import React from 'react';
import { getPosts } from '../page';

export default function page({ params }: { params: { slug: string } }) {
  // todo: grab slug and fetch specific post
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="h-full w-3/5">
        <h1 className="text-xl">Post slug {params.slug}</h1>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  console.log('generateStaticParams get called');
  const posts = await getPosts();

  if (!posts) {
    return;
  }

  return posts.map((post: any) => ({
    slug: post.slug
  }));
}
