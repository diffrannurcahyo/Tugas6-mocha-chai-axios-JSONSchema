export const productSchema = {
  title: "Product Schema",
  type: "object",
  required: ["id", "title", "price"],
  properties: {
    id: { type: "number" },
    title: { type: "string" },
    description: { type: "string", "default": "Tidak ada deskripsi" },
    category: { type: "string" },
    price: { type: "number" },
    tags: {
      type: "array",
      items: { type: "string" }
    },
    brand: { type: "string" },
    stock: { type: "number", "default": 0 },
    thumbnail: { type: "string" },
    images: {
      type: "array",
      items: { type: "string" }
    }
  }
};
