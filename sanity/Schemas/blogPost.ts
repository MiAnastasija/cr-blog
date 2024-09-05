export const blogPost = {
    name: "blogPost",
    title: "Blog Post",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "description",
        title: "Description",
        type: "string",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true, 
        },
        fields: [
          {
            name: "alt",
            title: "Alt Text",
            type: "string",
            description: "Alternative text for the image",
          },
        ],
      },
      {
        name: "createdDate",
        title: "Created Date",
        type: "datetime",
      },
      {
        name: "metaTitle",
        title: "Meta Title",
        type: "string",
      },
      {
        name: "metaDescription",
        title: "Meta Description",
        type: "text",
      },
    ],
  };
  