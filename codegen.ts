import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.LYRICS_DB_API_URL,
  documents: ['src/queries/*.{ts,tsx}'],
  generates: {
    './src/types/__generated_schemas__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
