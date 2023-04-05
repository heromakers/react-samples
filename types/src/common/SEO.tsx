import React from 'react'

const SEO:React.FC<Props> = ( {title} ) => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Hero Makers | {title}</title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="Hero Makers, Simple ReactJS" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </>
  );
}

interface Props {
    title: string
};

export default SEO;