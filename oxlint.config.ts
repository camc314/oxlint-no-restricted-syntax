import { defineConfig } from 'oxlint';

export default defineConfig({
    jsPlugins: [{ name: 'eslint-js', specifier: './plugin.ts' }],
    rules: {
        'eslint-js/no-restricted-syntax': [
            'error',
            {
                selector: 'FunctionExpression',
                message: 'Function expressions are not allowed.',
            },
            {
                selector: "CallExpression[callee.name='setTimeout'][arguments.length!=2]",
                message: 'setTimeout must always be invoked with two arguments.',
            },
        ],
    },
});
