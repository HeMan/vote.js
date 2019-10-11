const lambda = require('../lambdas/voteEvent.js');

test('VoteEvent', async () => {
	const response = await lambda.handler();
	expect(response.statusCode).toBe(200);
	expect(response.body).toBe("\"Hello from Lambda!\"");
});
