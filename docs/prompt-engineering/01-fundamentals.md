# Prompt Engineering Fundamentals 🎯

## Learning Objectives

By the end of this guide, you will:
- Understand what prompt engineering is and why it matters
- Know the core components of effective prompts
- Apply fundamental prompt patterns
- Write clear, specific, and actionable prompts
- Recognize good vs. poor prompts

## Prerequisites
- Basic familiarity with AI tools (ChatGPT, Claude, GitHub Copilot, etc.)
- Experience with software development (any language)
- No prior prompt engineering knowledge required

---

## What is Prompt Engineering?

**Prompt engineering** is the craft of designing inputs to AI systems that reliably produce desired outputs. It's the interface between human intent and AI capability.

### Why It Matters

```
Poor Prompt: "Fix my code"
Result: Vague, unfocused response or requests for clarification

Good Prompt: "Review this Python function for off-by-one errors.
The function should process indices 0 to n-1 inclusive."
Result: Specific, actionable feedback on the exact issue
```

The difference is prompt engineering.

### The Core Challenge

AI models are:
- **Powerful** but need clear direction
- **Knowledgeable** but need context
- **Capable** but need specificity

Your job: Provide that direction, context, and specificity.

---

## The Anatomy of a Good Prompt

Every effective prompt has these elements:

### 1. Clear Task Definition
**What you want the AI to do**

```
❌ Poor: "Help with my code"
✅ Good: "Review this TypeScript function for potential race conditions"
```

### 2. Necessary Context
**Background information that shapes the response**

```
❌ Poor: "Design an API"
✅ Good: "Design a REST API for a mobile app with 100K daily users,
         handling user authentication and real-time notifications"
```

### 3. Constraints and Requirements
**Boundaries and must-haves**

```
❌ Poor: "Suggest a database"
✅ Good: "Suggest a database that:
         - Handles 10K writes/second
         - Provides strong consistency
         - Works with our AWS infrastructure
         - Has TypeScript client libraries"
```

### 4. Output Format
**How you want the response structured**

```
❌ Poor: "Analyze this architecture"
✅ Good: "Analyze this architecture and provide:
         1. Identified bottlenecks with severity (high/medium/low)
         2. Specific recommendations for each
         3. Implementation complexity for each (simple/moderate/complex)"
```

### 5. Success Criteria
**What makes a response good**

```
❌ Poor: "Write documentation"
✅ Good: "Write API documentation that:
         - Includes a working code example
         - Documents all parameters and return values
         - Explains common error cases
         - Can be understood by junior developers"
```

---

## Core Prompt Patterns

These fundamental patterns form the building blocks of effective prompts.

### Pattern 1: Role Assignment

Give the AI specific expertise and perspective.

**Structure**:
```
You are a [specific role] with expertise in [domain].
When [analyzing/designing/reviewing] this, consider [perspective].
```

**Example**:
```
You are a Senior Site Reliability Engineer with 10 years of experience
in high-scale distributed systems. When reviewing this architecture,
consider operational complexity, failure modes, and observability.
```

**When to use**: Tasks benefit from specific expertise or viewpoint

**Why it works**: Activates relevant knowledge and frames the analysis

### Pattern 2: Task Decomposition

Break complex tasks into clear steps.

**Structure**:
```
Please approach this systematically:
1. First, [initial step]
2. Then, [analysis step]
3. Next, [synthesis step]
4. Finally, [conclusion step]
```

**Example**:
```
Please approach this refactoring systematically:
1. First, identify all dependencies and side effects
2. Then, propose isolated changes with minimal risk
3. Next, outline a testing strategy for each change
4. Finally, suggest an implementation order
```

**When to use**: Complex problems requiring methodical analysis

**Why it works**: Enforces thoroughness and logical progression

### Pattern 3: Output Formatting

Specify exactly how to structure the response.

**Structure**:
```
Please provide your response in this format:

## [Section 1]
[What to include]

## [Section 2]
[What to include]

For code:
```language
// Comment explaining
code here
```
```

**Example**:
```
Please provide your response in this format:

## Vulnerabilities Found
- [Name]: [Severity] - [Description]

## Remediation Steps
For each vulnerability:
1. Specific fix
2. Testing approach
3. Prevention strategy

## Code Examples
```typescript
// Fixed version
```
```

**When to use**: You need consistent, structured output

**Why it works**: Makes responses scannable and actionable

### Pattern 4: Constraint Specification

Define boundaries for the solution space.

**Structure**:
```
Design [solution] with these constraints:
- Must: [required features]
- Must not: [forbidden approaches]
- Limited to: [resource limits]
```

**Example**:
```
Design a caching strategy with these constraints:
- Must: Invalidate within 5 seconds of data change
- Must not: Use distributed cache (budget limit)
- Limited to: 2GB memory per server
- Must: Work with existing PostgreSQL database
```

**When to use**: Solution space needs clear boundaries

**Why it works**: Focuses on viable solutions, saves iteration

### Pattern 5: Example Provision (Few-Shot)

Show examples of what you want.

**Structure**:
```
Here are examples of [desired output]:

Example 1 (simple):
Input: [input]
Output: [output]

Example 2 (complex):
Input: [input]
Output: [output]

Now apply this to:
[Your actual input]
```

**Example**:
```
Here are examples of good commit messages:

Example 1:
fix: resolve race condition in user session cleanup
- Add mutex lock around session map access
- Fixes intermittent 500 errors during high traffic

Example 2:
feat: add rate limiting to API endpoints
- Implement token bucket algorithm
- Configurable limits per endpoint and user tier
- Returns 429 with Retry-After header

Now write a commit message for these changes:
[Your changes description]
```

**When to use**: Pattern is complex or style-specific

**Why it works**: AI learns from examples (few-shot learning)

### Pattern 6: Context Layering

Provide structured context hierarchically.

**Structure**:
```
Context:
- High-level: [Overview]
- Technical: [Stack, scale, constraints]
- Current state: [Status, issues]
- Goal: [What success looks like]

Task: [What you need]
```

**Example**:
```
Context:
- High-level: E-commerce platform for B2B sales
- Technical: Node.js/React, 50K requests/day, PostgreSQL
- Current state: Slow product search (3-5s), users complaining
- Goal: <500ms search response time

Task: Analyze search performance and recommend optimizations
```

**When to use**: Complex scenarios needing background

**Why it works**: Organizes information for easy processing

---

## Writing Clear Instructions

### Be Specific

```
❌ Vague: "Make this code better"
✅ Specific: "Refactor this function to eliminate duplicate API calls
            and cache results for 5 minutes"
```

### Be Direct

```
❌ Indirect: "It would be nice if we could maybe think about error handling"
✅ Direct: "Add error handling for network failures and invalid responses"
```

### Use Active Voice

```
❌ Passive: "An analysis should be performed on the performance"
✅ Active: "Analyze the performance bottlenecks"
```

### Define Terms

```
❌ Ambiguous: "Optimize this for scale"
✅ Clear: "Optimize this to handle 100K concurrent users
          (current capacity: 10K)"
```

---

## Common Beginner Mistakes

### Mistake 1: Too Vague

```
❌ "Help me with my project"

Problem: AI doesn't know what kind of help, what project, what aspect

✅ "Review this authentication flow for security vulnerabilities,
    focusing on session management and password storage"
```

### Mistake 2: Missing Context

```
❌ "Is this approach good?"

Problem: Good for what? In what context?

✅ "Is this database sharding approach good for:
    - 100M users
    - 90% read, 10% write
    - Need to maintain referential integrity
    - Budget: $10K/month infrastructure"
```

### Mistake 3: No Output Format

```
❌ "Explain this code"

Problem: Could get anything from one sentence to 10 pages

✅ "Explain this code:
    1. High-level purpose (1-2 sentences)
    2. Key functions and their roles
    3. Data flow diagram (ASCII art)
    4. Potential issues to watch for"
```

### Mistake 4: Assuming Too Much

```
❌ "Fix the bug in the handler"

Problem: Which handler? What bug? What's the expected behavior?

✅ "Fix the bug in the POST /api/users handler where:
    - Expected: Return 201 with user ID
    - Actual: Returns 500 with 'undefined' error
    - Context: Happens when email field is missing"
```

### Mistake 5: One-Size-Fits-All

```
❌ Using the same generic prompt for all tasks

Problem: Different tasks need different approaches

✅ Use targeted prompts:
    - Debugging: Detailed error info, repro steps, expectations
    - Design: Requirements, constraints, scale, context
    - Review: Specific focus areas, quality criteria
    - Learning: Current level, learning goals, time available
```

---

## 🏋️ Practical Exercises

### Exercise 1: Improve This Prompt (Type A - 10 min)

**Original**: "Write a function"

**Your task**: Rewrite to include:
- Clear task definition
- Necessary context
- Input/output specification
- Constraints
- Code style requirements

<details>
<summary>Example Solution</summary>

```
Write a Python function that:

Purpose: Calculate compound interest

Inputs:
- principal: float (initial amount)
- rate: float (annual interest rate as decimal, e.g., 0.05 for 5%)
- time: int (years)
- compounds_per_year: int (default: 12)

Output:
- float: final amount rounded to 2 decimal places

Requirements:
- Handle invalid inputs (negative values, zero compounds)
- Raise ValueError with clear messages
- Include docstring with example usage
- Use type hints
- Follow PEP 8 style

Example usage should show:
- Basic calculation
- Error handling
```
</details>

### Exercise 2: Add Context (Type A - 10 min)

**Prompt without context**: "Should I use Redis or Memcached?"

**Your task**: Add context that would help get a useful answer.

<details>
<summary>Example Solution</summary>

```
Should I use Redis or Memcached for my use case?

Context:
- Application: Real-time bidding platform
- Scale: 50K requests/second peak
- Use case: Cache bid data for 100ms-1s
- Data: Simple key-value, each value ~500 bytes
- Access pattern: 95% reads, 5% writes
- Infrastructure: AWS, already using ElastiCache
- Team: Familiar with both technologies
- Requirements:
  - Sub-millisecond latency
  - High availability (can tolerate eventual consistency)
  - Simple data structures (no need for lists/sets)
  - Cost-conscious

Please recommend based on:
1. Performance for our use case
2. Operational simplicity
3. Cost at our scale
4. Known issues or gotchas
```
</details>

### Exercise 3: Apply a Pattern (Type A - 15 min)

**Task**: Take this vague prompt and apply Role Assignment + Task Decomposition patterns:

**Original**: "Look at this microservices architecture"

**Your task**: Rewrite using the patterns.

<details>
<summary>Example Solution</summary>

```
[Role Assignment Pattern]
You are a Staff Software Engineer specializing in microservices
architecture with 8+ years of experience designing distributed
systems at scale. You focus on reliability, scalability, and
operational simplicity.

[Task Decomposition Pattern]
Please analyze this microservices architecture systematically:

1. First, identify the services and their responsibilities
   - What does each service do?
   - Are responsibilities clearly separated?

2. Then, analyze the communication patterns
   - Synchronous vs asynchronous?
   - Potential cascading failures?
   - Network chattiness issues?

3. Next, evaluate operational concerns
   - Monitoring and debugging complexity?
   - Deployment dependencies?
   - Data consistency strategies?

4. Finally, provide recommendations
   - Top 3 architectural improvements
   - Rationale for each
   - Implementation complexity (low/medium/high)

[Context]
Architecture: [paste your architecture description]
```
</details>

---

## Quick Reference Card

**Starting a prompt?** Ask yourself:

1. ✅ Is the task clear and specific?
2. ✅ Have I provided necessary context?
3. ✅ Are constraints and requirements stated?
4. ✅ Is the desired output format specified?
5. ✅ Would someone else understand what I want?

**Common patterns to remember**:
- 🎭 Role Assignment: Give specific expertise
- 📋 Task Decomposition: Break into steps
- 📊 Output Formatting: Specify structure
- 🚧 Constraints: Define boundaries
- 📚 Examples: Show what you want
- 🏗️ Context Layering: Organize background

---

## Next Steps

Now that you understand the fundamentals:

1. **Practice**: Use these patterns in your daily work
2. **Experiment**: Try different patterns, see what works
3. **Document**: Keep notes on what works for common tasks
4. **Advance**: Move to [Advanced Patterns](./02-advanced-patterns.md)
5. **Optimize**: Learn [Optimization Strategies](./03-optimization.md)

**Immediate action**: Pick one recipe from the repository and analyze it using the concepts from this guide. Identify which patterns it uses and why.

---

## Further Reading

- [Prompt Patterns](../../ingredients/prompt-patterns.md) - Quick reference in the recipes
- [Context Templates](../../ingredients/context-templates.md) - Ready-to-use context structures
- [Advanced Patterns](./02-advanced-patterns.md) - Next level techniques
- [Common Pitfalls](./04-pitfalls.md) - What to avoid

---

**Remember**: Prompt engineering is a skill that improves with practice. Start simple, experiment constantly, and build on what works. You're now equipped with the fundamentals—go create effective prompts! 🚀
