import { defineType } from 'sanity';
import { blockContent } from './blockContent';

export const blogPost = defineType({
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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
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
          description: "Alternative text for the image (for accessibility and SEO)",
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

    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },

  ],
});
