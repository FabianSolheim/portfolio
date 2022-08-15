type Post = {
  slug: string;
  frontmatter: {
    title: string;
    excerpt: string;
    cover_image: string;
    date: string;
    socialImage: string;
  };
};

export { Post };