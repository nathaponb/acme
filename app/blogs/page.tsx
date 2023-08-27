import React from 'react';
import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: 'f6cdaf35e6086d43cbb0d70cbb',
  version: 'v5.0'
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all'
    })
    .catch((err) => {
      console.error(err);
    });
}

export default async function page() {
  const data = await getPosts();

  console.log('blogs');
  console.log(data);

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="h-full w-3/5">
        <h1 className="text-xl">Blog post page</h1>
      </div>
    </div>
  );
}
