import { experimental_evaluate as evaluate } from 'ai';

// Requires AI_GATEWAY_API_KEY (create with: vercel ai-gateway api-keys create --name my-api-key)
const result = await evaluate({
  model: 'typesafe-ai/jev',
  state: process.argv[2] ?? 'The support agent issued a full refund to the customer.',
  questions: {
    refunded: {
      type: 'boolean',
      instructions: 'Was a refund issued?',
    },
  },
});

console.log(JSON.stringify(result, null, 2));
