'use client';

import React from 'react';
import ReactHtmlParser, {
  HTMLReactParserOptions,
  Element,
  domToReact
} from 'html-react-parser';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import DOMPurify from 'isomorphic-dompurify';
import { Blog } from '../page';
import { PostOrPage } from '@tryghost/content-api';

interface Post {
  post: PostOrPage;
}

export default function Blog(post: Post) {
  console.log('hellllooooo');
  console.log(post);

  return (
    <div className="h-full w-3/5">
      <h1 className="text-xl">Post slug {post.post.slug}</h1>
      {post.post.html ? (
        // <p dangerouslySetInnerHTML={{ __html: post.html }}></p>
        <div>{HTMLContent(DOMPurify.sanitize(post.post.html))}</div>
      ) : null}
    </div>
  );
}

const CodeBlock = ({ code, language }: { code: any; language: string }) => {
  return (
    <SyntaxHighlighter language={language} style={docco}>
      {code}
    </SyntaxHighlighter>
  );
};

const HTMLContent = (content: string) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.type === 'tag' && domNode.name === 'code') {
          const language = domNode.attribs.class.match(/language-(\w+)/);

          if (language) {
            return (
              <CodeBlock
                code={domToReact(domNode.children)}
                language={language[1]}
                key={1}
              />
            );
          }
        }
      }
    }
  };

  return <div>{ReactHtmlParser(content, options)}</div>;
};
