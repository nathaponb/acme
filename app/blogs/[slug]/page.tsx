import React from 'react';
import { api, getPosts } from '../page';
import { notFound } from 'next/navigation';
import { PostOrPage } from '@tryghost/content-api';

export async function getPost(slug: string): Promise<void | PostOrPage> {
  return await api.posts
    .read({
      slug: slug
    })
    .catch((err) => {
      console.error(err);
    });
}

export default async function page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  console.log('from getPost');
  console.log(post);

  // get slug and make a request to cms
  if (!post) {
    return notFound();
  }

  // todo: grab slug and fetch specific post
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="h-full w-3/5">
        <h1 className="text-xl">Post slug {params.slug}</h1>
        {post.html ? (
          <p dangerouslySetInnerHTML={{ __html: post.html }}></p>
        ) : null}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  console.log('generateStaticParams get called');
  const posts = await getPosts();

  console.log(posts);

  if (!posts) {
    return [
      {
        slug: null
      }
    ];
  }

  return posts.map((post: any) => ({
    slug: post.slug
  }));
}
