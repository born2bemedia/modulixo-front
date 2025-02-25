const createMetadata = ({ title, description, imageUrl }) => {
  return {
    title: `${title}`,
    description: description || "",
    openGraph: {
      title: `${title}`,
      description: description || "",
      images: imageUrl ? [{ url: imageUrl, width: 800, height: 600 }] : [],
    },
  };
};

export default createMetadata;
