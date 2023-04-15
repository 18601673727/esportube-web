require('dotenv').config();

module.exports = {
    schema: [
        {
            [process.env.GRAPHQL_ENDPOINT]: {
                headers: {
                    "content-type": "application/json",
                    "x-hasura-admin-secret": process.env.AUTH_TOKEN,
                },
            },
        },
    ],
    documents: ['./queries/source/*.tsx', './queries/source/*.ts'],
    overwrite: true,
    generates: {
        './queries/generated/graphql.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
            },
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};