import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'mt89jdwr',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: "skmls4CP9YSGKoLy4NOWvyqtmqV6a5NA5S9bWp5X3UasY8lscXltngsMW1ldMvubbjJK9ackXFakiljLnhJaPn9TaPr41egrn8lWJVEACB2ZqspCWRxYaEGuZQpz1kSdEJJBg2tvywh8ViBblJlXXWqjkYqf1hfiMHyINDELi6IPdDFnEbcp"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);