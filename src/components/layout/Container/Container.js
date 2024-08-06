import Head from 'next/head';

// TODO (enhancement & documentation) : PropTypes and JSDoc

export default function Container({ children, className, metaProp }) {
  const meta = {
    title: metaProp
      ? metaProp.title
      : "Wandr - India's most loved workation stays",
    name: metaProp ? metaProp.name : 'Wandr',
    description: metaProp
      ? metaProp.description
      : "India's most loved workation stays",
    keywords: metaProp ? metaProp.keywords : '',
    type: metaProp ? metaProp.type : '',
    og_image: metaProp ? metaProp.og_image : '',
  };
  return (
    <div className={className}>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.name} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.og_image} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:creator" content={meta.twitterHandle} />
        <meta name="twitter:site" content={meta.twitterHandle} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content={meta.twitter_image} />
      </Head>
      {children}
    </div>
  );
}
