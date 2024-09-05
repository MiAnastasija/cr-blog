export const paketi = {
    name: "paketi",
    title: "Paketi",
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
        name: "listItems",
        title: "List Items",
        type: "array",
        of: [{ type: "string" }],
      },
    ],
  };
  