import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch : "master",

  // Get this from tina.io
  clientId: "6597cfc6-ab64-4732-9a63-16d64864d846",
  // Get this from tina.io
  token: "a709489c98c614d05dae83f28bf68733bdd4ab90",

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },

          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
          },
          
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            description: 'Tags for this post',
            // list: true,
            ui: {
              component: 'tags',
            }
        
          },

          {
            name: 'tranding',
            label: 'tranding',
            type: 'boolean',
          },

          {
            type: "string",
            name: "readTime",
            label: "readTime",
          },
        
          {
            type: 'image',
            label: 'thumbnail',
            name: 'thumbnail',
          },

          {
            type: 'image',
            label: 'featureImage',
            name: 'featureImage',
          },

          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },


          
        ],
      },
    ],
  },
});
