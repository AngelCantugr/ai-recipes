# Common Prompt Engineering Pitfalls ⚠️

## Learning Objectives

Learn to recognize and avoid:
- Common prompt engineering mistakes
- Subtle issues that reduce effectiveness
- Anti-patterns that waste time and tokens
- Context and clarity problems
- Over-engineering traps

## Prerequisites
- Understanding of fundamentals and patterns
- Experience writing prompts

---

## Critical Pitfalls

### Pitfall 1: The Vague Request

**Problem**: Instructions too general to produce useful results.

```
❌ Bad:
"Help me with my code"

Why it fails:
- What aspect needs help?
- What language/framework?
- What's the problem?
- What's the desired outcome?

Result: Vague response or clarifying questions
```

```
✅ Good:
"Fix the memory leak in this Python data processing pipeline.
Current: 2GB → 8GB over 1 hour
Expected: Stable memory usage
[code]"

Why it works: Specific problem, context, expected outcome
```

**Fix**: Always specify WHAT, WHY, and desired outcome.

---

### Pitfall 2: Context Dumping

**Problem**: Providing too much irrelevant context.

```
❌ Bad:
"I'm working at a startup that's been around for 3 years. We have
25 employees and we're building a SaaS platform. Our tech stack
includes React, Node.js, PostgreSQL, Redis, and AWS. Last quarter
we had 10,000 users and this quarter we're aiming for 20,000. We
use Agile development with 2-week sprints. Our CTO prefers functional
programming. We recently migrated from MongoDB to PostgreSQL. Now,
should I use sessions or JWT for authentication?"

Problem: 90% of this context is irrelevant to the question

Result: Wasted tokens, potential confusion
```

```
✅ Good:
"Choose auth strategy for SaaS app:
- Current: 10K users, growing to 20K
- Stack: Node.js, PostgreSQL, Redis
- Options: Sessions vs JWT

Consider: Scalability, security, operational complexity"

Why it works: Only relevant context, clear focus
```

**Fix**: Include only context that affects the decision or approach.

---

### Pitfall 3: Assuming Context

**Problem**: Not providing necessary information.

```
❌ Bad:
"This function is slow, make it faster"
[shows function]

What's missing:
- How slow? (1ms? 1s? 1min?)
- What's acceptable?
- Where's the bottleneck?
- What's the scale/inputs?
- What can't change?

Result: Generic suggestions that may not help
```

```
✅ Good:
"Optimize this function:
- Current: 2.5s average
- Target: <100ms
- Context: Called 1000x per request
- Input size: Arrays of 10K elements
- Constraint: Must remain pure function
[function]"

Why it works: Performance context + constraints
```

**Fix**: Provide context that influences the solution.

---

### Pitfall 4: Buried Requirements

**Problem**: Critical requirements hidden in middle of prompt.

```
❌ Bad:
"Design a database schema for a blog platform with users, posts,
and comments. Users can follow other users and posts can have tags.
Comments can be nested up to 3 levels. Posts can have multiple
authors and by the way we need this to support 1 million posts per
day and sub-100ms query times and it needs to be sharded."

Problem: Critical requirements (1M posts/day, <100ms, sharding)
buried at the end

Result: Initial design may ignore critical constraints
```

```
✅ Good:
"Design database schema:
Scale requirements:
- 1M posts/day
- <100ms query time
- Must support sharding

Features:
- Users, posts, comments
- Followers, tags, multiple authors
- Nested comments (3 levels max)"

Why it works: Critical constraints upfront
```

**Fix**: Front-load critical requirements and constraints.

---

### Pitfall 5: No Output Format

**Problem**: Not specifying how you want the response.

```
❌ Bad:
"Analyze this API design"
[API spec]

What you might get:
- Essay-style analysis
- Bullet points
- Table
- Conversational feedback
- Any of the above at any length

Result: Unpredictable format, hard to use
```

```
✅ Good:
"Analyze this API design:
[API spec]

Provide:
1. Issues: [Issue] - [Severity: High/Med/Low] - [Impact]
2. Recommendations: [Specific improvement]
3. Priority: [Order of implementation]

Format as table."

Why it works: Clear structure, predictable output
```

**Fix**: Always specify output structure and format.

---

### Pitfall 6: Ambiguous Language

**Problem**: Words with multiple interpretations.

```
❌ Bad:
"Make this code more efficient"

Ambiguous:
- Time efficiency? (faster execution)
- Space efficiency? (less memory)
- Code efficiency? (fewer lines)
- Developer efficiency? (more maintainable)

Result: AI might optimize wrong dimension
```

```
✅ Good:
"Reduce memory usage in this code:
- Current: 500MB
- Target: <100MB
- Constraint: Maintain current speed
[code]"

Why it works: Specific optimization goal
```

**Fix**: Use precise, unambiguous terms. Define "better", "fast", "efficient".

---

### Pitfall 7: Multiple Unrelated Tasks

**Problem**: Asking for too many different things at once.

```
❌ Bad:
"Review this code for bugs, suggest a better architecture,
write unit tests, document all functions, check for security
vulnerabilities, optimize for performance, and refactor for
readability. Also explain how it works."

Problem: 7 different tasks with different focuses
Result: Superficial treatment of each, or overwhelming response
```

```
✅ Good:
"Review this code for security vulnerabilities:
Focus on:
- Injection attacks
- Authentication/authorization
- Data exposure
[code]

(After this is addressed, separate requests for tests, optimization, etc.)"

Why it works: One focused task at a time
```

**Fix**: One primary goal per prompt. Chain prompts for multiple goals.

---

### Pitfall 8: Ignoring AI Limitations

**Problem**: Asking for things AI can't reliably do.

```
❌ Bad examples:
- "What will be the exact production traffic next month?"
- "Predict which lines of this code will fail in production"
- "Tell me the current status of my deployed application"
- "Execute this API call and show me the live response"

Why they fail:
- Predictions without data
- Runtime information (AI doesn't execute code)
- Live system state
- Real-time API access
```

```
✅ Good alternatives:
- "Based on these metrics, suggest a capacity plan"
- "Identify code patterns that commonly cause failures"
- "What observability should I add to monitor this?"
- "What would this API call look like? Here's the spec..."

Why they work: Within AI capabilities
```

**Fix**: Understand what AI can (analysis, generation, recommendations) and can't (predictions, execution, live data) do.

---

### Pitfall 9: Prompt Drift

**Problem**: Losing focus across multi-turn conversations.

```
Turn 1: "Design an authentication system"
Turn 2: "Now add password reset"
Turn 3: "What about 2FA?"
Turn 4: "Should we use OAuth?"
Turn 5: "Let's add social login"
Turn 10: "Wait, go back to the password reset..."

Problem: Lost thread, inconsistent advice, missing context
Result: Fragmented, possibly contradictory recommendations
```

```
✅ Better approach:
Turn 1: "Design complete authentication system:
        - Login/logout
        - Password reset
        - 2FA
        - OAuth
        - Social providers"

OR, for exploratory design:
Maintain context explicitly:
"Building on the auth design above, now add..."
"Revise the OAuth integration to also support..."

Why it works: Maintains coherent design context
```

**Fix**: Either request comprehensive design upfront, or explicitly reference and build on previous context.

---

### Pitfall 10: Over-Engineering Prompts

**Problem**: Making prompts unnecessarily complex.

```
❌ Bad (over-engineered):
"You are a distinguished Staff Software Engineer at a Fortune 500
company with 15 years of experience across diverse tech stacks
including but not limited to Java, Python, Go, JavaScript, and C++.
You have deep expertise in distributed systems, having architected
multiple microservice platforms handling millions of requests per
second. You've also published papers on API design and mentored over
50 engineers. Drawing on all this experience and considering industry
best practices, design patterns, and modern architectural principles,
please carefully consider and provide your expert analysis of whether
I should add an index on this database column, taking into account all
relevant factors..."

Problem: Excessive roleplay, way too much setup
Result: Wasted tokens, no better results
```

```
✅ Good (appropriate):
"Should I add an index on users.email column?
- Table: 1M rows, growing 10K/day
- Query: WHERE email = ? (1000x/sec)
- Current: 200ms query time
Recommend with rationale."

Why it works: Simple, direct, sufficient context
```

**Fix**: Start simple. Add complexity only if results are insufficient.

---

## Subtle Pitfalls

### Pitfall 11: False Precision

**Problem**: Requesting impossible specificity.

```
❌ Bad:
"How many milliseconds will this function take to execute?"

Problem: Impossible to answer precisely without environment, inputs, etc.
Result: Guesswork or heavy caveats
```

```
✅ Good:
"Estimate performance characteristics:
- Expected: O(?) complexity
- Likely bottleneck: [operation]
- Approximate time for 10K inputs: [range]
- Scaling behavior: [description]"

Why it works: Asks for analytical understanding, not false precision
```

### Pitfall 12: Unstated Assumptions

**Problem**: Assuming AI knows your context.

```
❌ Bad:
"Will this work with our system?"

Unstated assumptions:
- Which system?
- What's "work" mean?
- What are system constraints?
- What's the environment?

Result: Guess-based answer
```

```
✅ Good:
"Will this Redis caching approach work for our system?
System: Node.js API, AWS ElastiCache, 100K req/min
Constraints: <10ms cache lookup, <$500/month
[approach details]"

Why it works: Explicit system description
```

### Pitfall 13: Asking for Opinions as Facts

**Problem**: Treating subjective preferences as objective truths.

```
❌ Bad:
"What's the best programming language?"
"Is microservices better than monolith?"
"Should I use REST or GraphQL?"

Problem: These are context-dependent, not universal truths
Result: Generic or biased answers
```

```
✅ Good:
"Compare Node.js vs Go for our use case:
- Use case: Real-time bidding API
- Scale: 50K req/sec
- Team: 5 devs, 2 years JS experience
- Constraints: <5ms p95 latency, cost-conscious

Which better fits our needs? Why?"

Why it works: Contextual decision with specific criteria
```

### Pitfall 14: Circular References

**Problem**: Prompts that reference undefined terms.

```
❌ Bad:
"Implement the handler using the pattern we discussed"

Problem: What pattern? AI doesn't have memory of other conversations
Result: Confusion or fabrication
```

```
✅ Good:
"Implement this handler using the Repository pattern:
[Describe pattern or provide reference]
Requirements: [specifics]"

Why it works: Self-contained, no external references
```

### Pitfall 15: Premature Optimization

**Problem**: Optimizing prompts before understanding what works.

```
Process mistake:
1. ❌ Immediately try to write perfect, minimal prompt
2. ❌ Get poor results
3. ❌ Not sure what to add back

Better process:
1. ✅ Start with clear, comprehensive prompt
2. ✅ Get good results
3. ✅ Then optimize while maintaining quality
```

**Fix**: Clarity first, optimization second.

---

## Anti-Patterns

### Anti-Pattern 1: The "Read My Mind" Prompt

```
❌ "Fix this"
❌ "Make it better"
❌ "Improve the design"
❌ "Optimize this"

Problem: Gives no direction
Fix: Specify what's wrong and what "better" means
```

### Anti-Pattern 2: The Novel

```
❌ 500-word essay explaining your entire project history

Problem: 90% irrelevant context
Fix: Relevant context only, structured format
```

### Anti-Pattern 3: The Interrogation

```
❌ "What language is this? What does it do? Is it good?
     What should I change? How would you improve it?
     What are the alternatives? Which is best?"

Problem: Too many questions at once
Fix: One focused question, or clear structure
```

### Anti-Pattern 4: The Empty Template

```
❌ "Use this format: [format] <provides no context about the task>"

Problem: Format without substance
Fix: Context + format + requirements
```

### Anti-Pattern 5: The False Choice

```
❌ "Should I use A or B?" <provides no decision criteria>

Problem: Forces arbitrary recommendation
Fix: Provide criteria for decision
```

---

## Detection and Recovery

### How to Detect Your Prompt Has Issues

**Signs your prompt needs work**:

1. AI asks clarifying questions → Prompt too vague
2. Response is generic → Missing specific context
3. Response misses the point → Requirements buried or unclear
4. Can't use the output → No format specification
5. Need many follow-ups → Tried to do too much at once
6. Response is off-topic → Ambiguous language
7. Gets same results with simpler prompt → Over-engineered

### Recovery Strategies

**When you get poor results**:

1. **Diagnose the issue**:
   - Was the output format wrong?
   - Did it misunderstand the task?
   - Was context missing?
   - Were requirements unclear?

2. **Targeted fix**:
   - Add specific missing context
   - Clarify the ambiguous parts
   - Specify output format
   - Break into smaller tasks

3. **Don't shotgun**:
   - ❌ Bad: Completely rewrite everything
   - ✅ Good: Fix the specific issue identified

4. **Learn the pattern**:
   - What was missing?
   - How did you fix it?
   - Save the pattern for next time

---

## Quick Diagnostic Checklist

Before sending a prompt:

**Clarity**:
- [ ] Task is specific and unambiguous
- [ ] Key terms are defined or obvious
- [ ] Requirements are explicit

**Context**:
- [ ] All relevant context provided
- [ ] No irrelevant context
- [ ] Context affects the solution

**Structure**:
- [ ] Output format specified
- [ ] Critical info front-loaded
- [ ] Related info grouped

**Scope**:
- [ ] Focused on one primary goal
- [ ] Not asking for impossible things
- [ ] Appropriate complexity level

**Self-Test**:
- [ ] Would another person understand what you want?
- [ ] Have you provided what's needed to complete the task?
- [ ] Is this the simplest prompt that will work?

---

## 🏋️ Practical Exercises

### Exercise 1: Fix These Broken Prompts (Type A - 20 min)

Identify the pitfall(s) and fix each prompt:

1. "Help me with my API"
2. "Is microservices good?"
3. "Review this code for everything"
4. "Make it better and faster and more secure and add tests"
5. "You are an elite engineer with 20 years... [300 more words] ...should I use async/await?"

### Exercise 2: Audit Your Own Prompts (Type B - 30 min)

1. Find 3 prompts you wrote that didn't work well
2. Identify which pitfalls they fell into
3. Rewrite them avoiding those pitfalls
4. Test the improved versions

---

## Next Steps

Now that you know what to avoid:

- **Review**: Go through the [Fundamentals](./01-fundamentals.md) with pitfalls in mind
- **Practice**: Consciously avoid one pitfall per day
- **Build**: Create a personal checklist for your common pitfalls
- **Learn**: Move to [Context Engineering](../context-engineering/01-context-design.md)

---

**Remember**: Everyone falls into these pitfalls. The difference between novices and experts is recognizing and fixing them quickly. Use this as a reference when prompts don't work as expected. 🎯
