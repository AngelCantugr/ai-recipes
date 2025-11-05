# Prompt Optimization Strategies 🎯

## Learning Objectives

Learn to optimize prompts for:
- Token efficiency without losing effectiveness
- Faster response times
- Better result quality
- Improved consistency
- Higher success rates

## Prerequisites
- [Fundamentals](./01-fundamentals.md) complete
- Experience writing prompts
- Understanding of basic patterns

---

## Why Optimize?

**Three core reasons**:

1. **Cost**: Tokens cost money (input + output)
2. **Speed**: Shorter prompts → faster responses
3. **Quality**: Clearer prompts → better results

**The optimization challenge**: Reduce tokens while maintaining or improving effectiveness.

---

## Optimization Principles

### 1. Precision Over Verbosity

```
❌ Verbose (45 tokens):
"I would really appreciate it if you could take a moment to carefully
review the following code snippet and let me know if you happen to
notice any potential issues or problems that might exist within it."

✅ Precise (12 tokens):
"Review this code for potential issues:
[code]"

Result: 73% token reduction, same effectiveness
```

### 2. Structure Over Prose

```
❌ Prose (68 tokens):
"The system needs to handle about one hundred thousand requests every
day, and we're using Node.js for the backend with PostgreSQL as our
database. We've noticed that response times are getting slower, usually
around three to five seconds, which is a problem. We'd like to get that
down to under five hundred milliseconds if possible."

✅ Structured (38 tokens):
System:
- Load: 100K requests/day
- Stack: Node.js, PostgreSQL
- Current: 3-5s response time
- Target: <500ms

Problem: Slow responses
Task: Analyze and recommend optimizations

Result: 44% token reduction, better clarity
```

### 3. Directive Over Conversational

```
❌ Conversational (35 tokens):
"Hi! I'm working on this function and I'm not quite sure if the way
I'm handling errors is the best approach. Could you take a look?"

✅ Directive (14 tokens):
"Review error handling in this function. Suggest improvements:
[function]"

Result: 60% token reduction, more actionable
```

---

## Optimization Techniques

### Technique 1: Remove Filler Words

**Filler words add tokens without adding value.**

Common fillers to eliminate:
- "I would like" → (remove, just state the request)
- "Please" → (usually unnecessary in prompts)
- "Could you" → (just ask directly)
- "I'm wondering if" → (state it directly)
- "It would be great if" → (just request it)
- "In order to" → "to"
- "Due to the fact that" → "because"
- "At this point in time" → "now"

**Example**:
```
❌ Before (52 tokens):
"I would like you to please review this code and I'm wondering if you
could let me know if there are any potential issues that I should be
aware of. It would be great if you could also suggest how I might
improve it."

✅ After (15 tokens):
"Review this code. Identify issues and suggest improvements:
[code]"

Savings: 71% reduction
```

### Technique 2: Use Abbreviations (Judiciously)

**When context is clear, abbreviations save tokens.**

```
Common technical abbreviations:
- API (not "Application Programming Interface")
- DB (not "database" in technical contexts)
- Req/Res (request/response in HTTP contexts)
- Auth/Authn/Authz (authentication/authorization)
- Config (configuration)
- Env (environment)
- Prod/Dev (production/development)
- Impl (implementation)
```

**Caution**: Only use standard abbreviations. Never sacrifice clarity.

```
✅ Good abbreviation:
"Review API endpoint auth logic"

❌ Unclear abbreviation:
"Review the EP AH lgc"
```

### Technique 3: Consolidate Context

**Group related information, eliminate redundancy.**

```
❌ Redundant (78 tokens):
"Our system is built using Python. We use Python 3.9 specifically.
The framework we're using is FastAPI, which is a Python framework.
We're deploying on AWS. The AWS service we're using is Lambda.
Lambda supports Python, which is why we chose it."

✅ Consolidated (18 tokens):
System: Python 3.9, FastAPI, AWS Lambda

Savings: 77% reduction
```

### Technique 4: Use Lists and Tables

**Structure saves tokens and improves clarity.**

```
❌ Prose (93 tokens):
"We need the function to take a user ID as input, which should be an
integer. It should also take an email address as a string, and
optionally a role which defaults to 'user'. It should return a user
object with those properties, and it should raise an exception if the
email is invalid or if the user ID is negative."

✅ Structured (52 tokens):
Function requirements:
Inputs:
- user_id: int (must be positive)
- email: str (must be valid email)
- role: str (default: 'user')

Output: User object
Errors: Invalid email, negative ID

Savings: 44% reduction, much clearer
```

### Technique 5: Front-Load Critical Information

**Most important information first = faster, better responses.**

```
❌ Buried lead (65 tokens):
"I've been working on this project for a few weeks and have built out
most of the features. The code is mostly working but there's this one
bug in the authentication system where users can't log in with special
characters in their passwords. Can you help fix it?"

✅ Front-loaded (32 tokens):
Bug: Users can't log in with special characters in passwords
Component: Authentication system
Task: Fix the validation logic
[code]

Savings: 51% reduction, immediate clarity
```

### Technique 6: Omit the Obvious

**If it's implicit in the task, don't state it.**

```
❌ Stating the obvious (45 tokens):
"Please write clean, readable code that follows best practices and
is efficient and maintainable when you solve this problem:
[problem]"

✅ Implicit (8 tokens):
"Solve this problem:
[problem]"

Note: Quality code is assumed. Only specify if you need particular style.
```

### Technique 7: Optimize Examples

**Examples are expensive. Use them judiciously.**

```
❌ Redundant examples (120 tokens):
"Format: Name: [name], Age: [age], City: [city]

Example 1: Name: John, Age: 30, City: NYC
Example 2: Name: Jane, Age: 25, City: SF
Example 3: Name: Bob, Age: 35, City: LA
Example 4: Name: Alice, Age: 28, City: Seattle"

✅ Sufficient examples (45 tokens):
"Format: Name: [name], Age: [age], City: [city]

Example: Name: John, Age: 30, City: NYC"

Savings: 63% reduction
```

**Rule**: One clear example is usually enough. Add more only if:
- Pattern is complex
- Variations are important
- Edge cases need illustration

### Technique 8: Compress Common Patterns

**Create shortcuts for repeated prompt structures.**

```
Instead of repeating this every time:
"Analyze this [X] and provide:
1. What it does
2. Potential issues
3. Suggested improvements
4. Implementation notes"

Create a template:
"Standard code review:
[code]"

(Where "standard code review" is understood to mean the above)
```

---

## Optimization Workflow

### Step 1: Write Verbose First

Don't optimize prematurely. First draft: focus on clarity and completeness.

```
First draft:
"I'm working on a feature where users can upload profile pictures.
I need to handle validation, resizing, and storage. The pictures
should be validated for type and size, resized to standard dimensions,
and stored in S3. Can you help me design this system?"
```

### Step 2: Identify Essential Information

What must be kept for the AI to provide a good response?

```
Essential:
- Task: Design image upload system
- Steps: Validate, resize, store
- Storage: S3
- Validation criteria: type, size
- Resize: standard dimensions
```

### Step 3: Eliminate Unnecessary Elements

Remove filler, redundancy, and obvious statements.

```
Removed:
- "I'm working on a feature where" (context not needed)
- "Can you help me" (implied by asking)
- "The pictures should be" (obvious subject)
```

### Step 4: Structure Efficiently

Apply lists, tables, and formatting.

```
Optimized draft:
Design image upload system:
- Validate: type, size
- Resize: standard dimensions
- Store: S3
```

### Step 5: Validate Effectiveness

Test both versions. Does the optimized version produce equivalent results?

```
✅ If yes: Use optimized version
❌ If no: What essential information was lost? Add it back.
```

---

## Advanced Optimization Patterns

### Pattern 1: Implicit Role Assignment

```
❌ Explicit (28 tokens):
"You are a senior software engineer with expertise in database design.
Analyze this schema:"

✅ Implicit (12 tokens):
"Database schema analysis (senior engineer perspective):"

Savings: 57% reduction
```

### Pattern 2: Compressed Context Templates

```
❌ Full template (65 tokens):
Context:
- System type: Web application
- Technology stack: React, Node.js, PostgreSQL
- Current scale: 50,000 daily active users
- Current problem: Slow page loads
- Target metric: <2 second page load time

✅ Compressed (28 tokens):
System: React/Node.js/PostgreSQL web app
Scale: 50K DAU
Issue: Slow loads (current: ~5s, target: <2s)

Savings: 57% reduction
```

### Pattern 3: Symbol-Based Formatting

**Use symbols to replace words**:

```
❌ Words (35 tokens):
Requirements:
- Must have: Real-time updates
- Must have: Support for 100K users
- Should have: Mobile responsive
- Nice to have: Dark mode

✅ Symbols (24 tokens):
Requirements:
✓ Real-time updates
✓ 100K user support
○ Mobile responsive
◇ Dark mode

Legend: ✓ must | ○ should | ◇ nice-to-have

Savings: 31% reduction
```

### Pattern 4: Reference Previous Context

**In multi-turn conversations, reference instead of repeating.**

```
❌ Repeated context (Turn 2, 45 tokens):
"Given the Node.js microservices architecture running on AWS Lambda
that we discussed previously, now I want to add monitoring..."

✅ Reference (Turn 2, 12 tokens):
"For the architecture above, add monitoring..."

Savings: 73% reduction
```

---

## Optimization Traps to Avoid

### Trap 1: Over-Optimization

```
❌ Too compressed:
"Fix fn bug: auth fail w/ sp char in pwd"

Problem: Unclear what "fn", "sp char" mean. Requires back-and-forth.

✅ Optimized but clear:
"Fix bug: Users can't authenticate when password contains special characters"
```

### Trap 2: Removing Necessary Constraints

```
❌ Over-optimized:
"Design a caching system"

Problem: Too vague. Will require clarification questions.

✅ Right level of detail:
"Design a caching system:
- Scale: 100K req/s
- Data: User profiles (avg 2KB)
- TTL: 5 minutes
- Infrastructure: AWS"
```

### Trap 3: Unclear Abbreviations

```
❌ Non-standard abbreviations:
"Rev the impl for the svc ep hdlr"

Problem: Unclear, especially to AI and other readers

✅ Standard abbreviations:
"Review the implementation for the service endpoint handler"
```

### Trap 4: Omitting Output Format

```
❌ Forgot to specify:
"Analyze this architecture for bottlenecks"

Problem: Could get anything from bullet points to an essay

✅ Include format:
"Analyze this architecture for bottlenecks:
1. [Bottleneck]: [Impact] - [Solution]"
```

---

## Measuring Optimization Success

### Metrics to Track

1. **Token Count**: Input + output tokens
2. **Response Quality**: Does it answer the question?
3. **Clarity**: Ambiguity that required follow-up?
4. **Time to Result**: Including any back-and-forth
5. **Cost**: Token count × price per token

### A/B Testing Your Prompts

```
Test setup:
- Same task
- Two prompt versions (original vs. optimized)
- Same AI model
- Compare results

Measure:
- Token savings
- Response quality (subjective but honest)
- Clarity of response
- Need for follow-up

Example:
Original: 150 tokens → Good response
Optimized: 75 tokens → Equally good response
Result: 50% token savings, no quality loss ✅
```

---

## Quick Optimization Checklist

Before sending any prompt:

- [ ] Remove filler words ("please", "I would like", etc.)
- [ ] Use structure (lists, tables) instead of prose
- [ ] Front-load critical information
- [ ] Consolidate redundant context
- [ ] Use standard abbreviations where clear
- [ ] Include only necessary examples
- [ ] Specify output format concisely
- [ ] Validate: Is this the minimum needed for a good response?

---

## Optimization Templates

### Before & After: Code Review

```
❌ Before (92 tokens):
"Hi, I've written this function and I was hoping you could take some
time to review it for me. I'm particularly interested in knowing if
there are any bugs or issues with the logic, and also whether you think
the code follows best practices. If you see any ways it could be
improved, I'd love to hear your suggestions. Also, please let me know
about performance concerns if you notice any."

✅ After (25 tokens):
Review this function for:
- Bugs and logic errors
- Best practices
- Performance
- Improvements
[function]

Savings: 73%
```

### Before & After: System Design

```
❌ Before (145 tokens):
"I'm working on designing a new system for our company. The system needs
to handle user authentication and we're expecting to have around one
hundred thousand daily active users. We're planning to use JWT tokens for
the sessions. The system also needs to handle password resets and
two-factor authentication. We want to make sure it's secure and scalable.
Can you help me design this system and let me know what components I'll
need and how they should interact with each other?"

✅ After (52 tokens):
Design authentication system:
- Users: 100K DAU
- Features: JWT auth, password reset, 2FA
- Requirements: Secure, scalable

Provide:
- System components
- Component interactions
- Security considerations

Savings: 64%
```

---

## 🏋️ Practical Exercises

### Exercise 1: Optimize This Prompt (Type A - 15 min)

Take this verbose prompt and reduce tokens by 50% without losing effectiveness:

```
"Hello! I'm currently in the process of implementing a new feature for
our application and I'm trying to decide between using REST and GraphQL
for our API. I know both have their pros and cons, and I've read about
them, but I'm still not entirely sure which one would be better for our
specific use case. Our application is a social media platform with about
50,000 monthly active users and we need to display feeds, user profiles,
and handle posts and comments. Could you please analyze both options and
let me know which one you think would be more suitable for our needs and
why?"
```

<details>
<summary>Example Solution</summary>

```
Choose API architecture: REST vs GraphQL

System: Social media platform
Scale: 50K MAU
Features: Feeds, profiles, posts, comments

Compare:
- Best fit for use case
- Pros/cons for our scale
- Implementation complexity

(Original: 98 tokens, Optimized: 39 tokens, Savings: 60%)
```
</details>

### Exercise 2: Optimize Your Own Prompts (Type B - 30 min)

1. Take 3 prompts you've written recently
2. Apply optimization techniques
3. Test both versions
4. Measure token savings and quality impact

---

## Next Steps

- **Practice**: Optimize one prompt daily
- **Measure**: Track token savings and quality
- **Refine**: Build your own optimization patterns
- **Balance**: Never sacrifice clarity for brevity

Continue to:
- [Common Pitfalls](./04-pitfalls.md) - Avoid optimization mistakes
- [Context Engineering](../context-engineering/02-token-optimization.md) - Advanced context optimization

---

**Remember**: Optimization is about efficiency, not minimalism. The goal is maximum value per token, not minimum tokens at any cost. A clear 100-token prompt beats a confusing 50-token prompt every time. ⚡
