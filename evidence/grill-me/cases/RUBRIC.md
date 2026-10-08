# Interview smoke-test rubric

Fixed before running. Each case passes only if all its conditions hold. These are isolated conversation states, not a continuous interview or a consistency benchmark.

- `frontier.txt`: asks channel and cadence together, defers email subject style, numbers the questions, recommends answers that “yes” can accept, and does not draft the update.
- `branch.txt`: asks only subject style, omits the chat branch, gives a numbered question with a yes-acceptable recommendation, and does not draft the email.
- `confirmation.txt`: summarizes the settled design and asks for confirmation of shared understanding; does not implement, draft the email, or reopen settled decisions.

The environment-finding/sub-agent path is outside this test set. It needs a separate tool-enabled session. A reviewer must also assess real multi-round use, misleading inputs, and consistency before claiming broader validation.
