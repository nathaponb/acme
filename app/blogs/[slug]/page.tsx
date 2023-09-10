import React from 'react';
import { api, getPosts } from '../page';
import { notFound } from 'next/navigation';
import { PostOrPage } from '@tryghost/content-api';
// import ReactHtmlParser, { HTMLReactParserOptions } from 'html-react-parser';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import DOMPurify from 'isomorphic-dompurify';
import Blog from '../components/Blog';

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

  console.log('post');
  console.log(post);
  console.log('post');

  // get slug and make a request to cms
  if (!post) {
    return notFound();
  }

  // todo: grab slug and fetch specific post
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Blog post={post} />
    </div>
  );
}

// export async function generateStaticParams() {
//   console.log('generateStaticParams get called');
//   const posts = await getPosts();

//   console.log(posts);

//   if (!posts) {
//     return [
//       {
//         slug: null
//       }
//     ];
//   }

//   return posts.map((post: any) => ({
//     slug: post.slug
//   }));
// }
