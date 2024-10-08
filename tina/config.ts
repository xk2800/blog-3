import { defineConfig } from "tinacms";
import { TinaCMS, Form } from 'tinacms'

type BeforeSubmitFunction = (args: {
  values: Record<string, unknown>
  cms: TinaCMS
  form: Form
}) => Promise<void | Record<string, unknown>>

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        ui: {
          beforeSubmit: async ({
            form,
            cms,
            values,
          }: {
            form: Form
            cms: TinaCMS
            values: Record<string, any>
          }) => {
            if (form.crudType === 'create') {
              return {
                ...values,
                pubDate: new Date().toISOString(),
              }
            } else {
              return {
                ...values,
                lastUpdated: new Date().toISOString(),
              }
            }
          },
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: true,
            // Example of using a custom slugify function
            slugify: (values) => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return `${values?.title?.toLowerCase().replace(/ /g, '-') || "Type your title above and this will update on it's own"}`
            },
          },
        },
        defaultItem: () => {
          return {
            layout: '../../layouts/MarkdownPostLayout.astro', // to set defaults on schema
            // TODO: Add tags default into schema
          }
        },
        name: "post",
        label: "Posts",
        path: "/src/pages/listings",
        fields: [
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
            ui: {
              component: null, // This disables editing for the field
            },
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,

          },
          {
            type: "string",
            name: "description",
            label: "Short Description",
            required: true,
          },
          {
            type: 'string',
            name: "author",
            label: "Author Name",
            options: ['Xavier', 'Guest Writer'],
            required: true,
          },
          {
            type: 'string',
            label: 'Tags',
            name: 'tags',
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Created At",
            required: true,
            ui: {
              component: null, // This disables editing for the field
            },
          },
          {
            type: "datetime",
            name: "lastUpdated",
            label: "Last Updated",
            required: true,
            ui: {
              component: null, // This disables editing for the field
            },
          },
        ],
      },
    ],
  },
});
