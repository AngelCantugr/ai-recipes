# Context Design Fundamentals 🏗️

## Learning Objectives

Master the art of context provision:
- Understand what context engineering is
- Design effective context structures
- Apply information hierarchy principles
- Balance completeness and conciseness
- Create reusable context templates

## Prerequisites
- [Prompt Engineering Fundamentals](../prompt-engineering/01-fundamentals.md)
- Basic understanding of AI token limits
- Experience with structured data

---

## What is Context Engineering?

**Context engineering** is the deliberate design of information provision to AI systems. It's the foundation that shapes every AI response.

### The Context Challenge

```
Same Question, Different Context = Completely Different Answers

Q: "Should I use Redis?"

Context A (Startup):
- 1K users, $500 budget, learning phase
Answer: "Probably overkill, use in-memory cache first"

Context B (Scale):
- 1M users, $50K budget, production critical
Answer: "Yes, here's the architecture..."
```

**Context is everything.** The question is the same, the answer is completely different.

---

## The Context Hierarchy

Information has structure. Organize it effectively:

### Level 1: Critical Constraints (Must-Know)
The non-negotiable boundaries that invalidate solutions:

```
Critical constraints:
- Budget: <$5K/month
- Latency: <100ms p95
- Must use AWS (company policy)
- Team: 3 developers, Python experience only
```

These determine what's possible.

### Level 2: Requirements (Need-to-Know)
What the solution must accomplish:

```
Requirements:
- Handle 100K requests/day
- Support real-time updates
- Data retention: 90 days
- High availability (99.9%)
```

These determine what to build.

### Level 3: Preferences (Nice-to-Know)
Soft preferences that influence but don't determine:

```
Preferences:
- Prefer managed services
- Prefer battle-tested tech
- Prefer simple over complex
- Would like future EU expansion
```

These guide choices within possibilities.

### Level 4: Background (Optional Context)
Information that provides understanding but doesn't constrain:

```
Background:
- Company is 3 years old
- Previous system was MongoDB
- Team has worked together 6 months
```

Use sparingly—only if it influences decisions.

---

## Context Design Principles

### Principle 1: Relevance Over Completeness

```
❌ Complete but irrelevant:
"Our company was founded in 2019 by two college friends who met at
MIT. We initially built a mobile app for restaurant recommendations
but pivoted to B2B SaaS in 2021. We raised a Series A in 2022.
Our office is in San Francisco. The founding team loves Python.
We have 25 employees. Now, should this function return JSON or XML?"

✅ Relevant and sufficient:
"API response format decision:
- Clients: Modern web apps and mobile
- No legacy XML requirements
- Standard is REST
Recommend JSON or XML?"
```

**Rule**: Include context only if it influences the decision or approach.

### Principle 2: Structure Over Prose

```
❌ Unstructured prose:
"The system handles about 50,000 requests per day and we're using
Node.js with PostgreSQL and sometimes the database queries take too
long, like around 2 seconds, which is too slow, and we want to get
it under 500 milliseconds if possible."

✅ Structured context:
System:
- Load: 50K requests/day
- Stack: Node.js, PostgreSQL
- Problem: Slow queries (2s avg)
- Target: <500ms
```

**Rule**: Use lists, tables, headers. Make it scannable.

### Principle 3: Specificity Over Vagueness

```
❌ Vague:
"High traffic, needs to be fast, lots of data"

✅ Specific:
"Traffic: 10K requests/second peak
Latency requirement: <50ms p95
Data volume: 100GB, growing 5GB/month"
```

**Rule**: Quantify everything you can. Use concrete numbers, measurements, and examples.

### Principle 4: Progressive Disclosure

Start with essentials, add detail as needed:

```
Level 1 (Initial prompt):
"Design caching strategy for API:
- Load: 100K req/day
- Data: User profiles (~2KB each)
- Access pattern: 90% reads
- Target: <50ms response"

[Get initial recommendation]

Level 2 (Follow-up if needed):
"For the Redis approach you suggested:
- Cache hit rate needed: >95%
- TTL considerations: User data changes hourly
- Eviction policy preferences: LRU
- Budget for cache size: 10GB max"
```

**Rule**: Don't front-load everything. Start essential, elaborate if needed.

---

## Context Patterns

### Pattern 1: The Stack Context

**When**: Technical implementation questions

**Structure**:
```
System Stack:
- Frontend: [tech, version]
- Backend: [tech, version]
- Database: [tech, version]
- Infrastructure: [cloud, services]
- Scale: [metrics]
- Constraints: [limitations]
```

**Example**:
```
System Stack:
- Frontend: React 18, TypeScript
- Backend: Node.js 18, Express
- Database: PostgreSQL 14
- Infrastructure: AWS (EC2, RDS, S3)
- Scale: 50K DAU, 200K requests/day
- Constraints: <$2K/month infrastructure budget
```

### Pattern 2: The Problem Context

**When**: Debugging, troubleshooting, fixing issues

**Structure**:
```
Problem:
What's wrong: [clear description]
When it started: [timeline]
Impact: [who/what affected]
Frequency: [always/sometimes/conditions]
What changed: [recent changes]
Tried: [attempted solutions]
```

**Example**:
```
Problem:
What's wrong: Users getting 500 errors on checkout
When it started: 2 days ago, after payment service deploy
Impact: 20% of checkout attempts, ~$10K/day lost revenue
Frequency: Intermittent, seems worse during peak hours
What changed: Updated Stripe SDK from v8 to v10
Tried: Rolled back SDK (didn't help), checked logs (timeout errors)
```

### Pattern 3: The Decision Context

**When**: Choosing between options, making architectural decisions

**Structure**:
```
Decision: [what needs deciding]
Options: [A, B, C]
Criteria: [how to decide, in priority order]
Constraints: [limitations]
Context: [relevant background]
```

**Example**:
```
Decision: Choose message queue for event processing
Options: RabbitMQ, Kafka, AWS SQS
Criteria (priority order):
  1. Reliability (can't lose messages)
  2. Simplicity (small team)
  3. Cost (<$500/month)
  4. Performance (10K messages/day is enough)
Constraints:
  - AWS infrastructure
  - Team unfamiliar with ops-heavy solutions
Context:
  - Processing job events
  - Order matters (FIFO)
  - Current: No queue (synchronous)
```

### Pattern 4: The Scale Context

**When**: Performance, architecture, infrastructure questions

**Structure**:
```
Current Scale:
- Users: [count, growth rate]
- Traffic: [requests/sec, patterns]
- Data: [volume, growth]

Target Scale:
- When: [timeline]
- Users: [projected]
- Traffic: [projected]
- Data: [projected]

Performance Requirements:
- Latency: [p50, p95, p99]
- Throughput: [capacity needed]
- Availability: [uptime target]
```

**Example**:
```
Current Scale:
- Users: 10K MAU, growing 20%/month
- Traffic: 5K req/day avg, 100 req/sec peak
- Data: 50GB, growing 5GB/month

Target Scale (12 months):
- Users: 100K MAU
- Traffic: 50K req/day avg, 1K req/sec peak
- Data: 150GB

Performance Requirements:
- Latency: <100ms p95
- Throughput: Handle 2K req/sec (2x peak for safety)
- Availability: 99.9% uptime
```

### Pattern 5: The Code Context

**When**: Code review, refactoring, debugging

**Structure**:
```
Code Context:
Purpose: [what it does]
Location: [file, module, package]
Dependencies: [what it uses]
Dependents: [what uses it]
Recent changes: [relevant history]
Known issues: [existing problems]
```

**Example**:
```
Code Context:
Purpose: Authenticate API requests using JWT
Location: src/middleware/auth.ts
Dependencies: jsonwebtoken, User model
Dependents: All protected API routes (~50 endpoints)
Recent changes: Added refresh token support 2 weeks ago
Known issues:
  - Token refresh is slow (~200ms)
  - No rate limiting on refresh endpoint
  - Tokens don't invalidate on password change
```

---

## Context Templates

### Template: New Feature Design

```
Feature: [name and one-line description]

Purpose:
- User need: [what problem this solves]
- Business goal: [why we're building this]

Requirements:
Must have:
- [requirement 1]
- [requirement 2]

Should have:
- [requirement 3]

Nice to have:
- [requirement 4]

Constraints:
- Timeline: [deadline]
- Resources: [team size, skills]
- Technical: [platform, integration points]
- Budget: [cost limits]

Success Metrics:
- [how we'll measure success]

Existing System:
- [relevant current state]
- [integration points]
- [known limitations]

Task: [what you're asking the AI to do]
```

### Template: Performance Investigation

```
Performance Issue:
Component: [what's slow]
Metric: [current performance]
Target: [desired performance]
Measurement: [how you're measuring]

System:
- Stack: [technologies]
- Scale: [traffic/data volumes]
- Environment: [prod/staging/local]

Observations:
- When: [timing patterns]
- Where: [which operations]
- Correlation: [what makes it worse/better]

Data:
- Profiling: [if available]
- Logs: [relevant excerpts]
- Metrics: [relevant data points]

Attempted:
- [what you've tried]
- [results of attempts]

Constraints:
- [what can't change]
- [deployment constraints]

Task: [what you need help with]
```

### Template: Architecture Review

```
Architecture: [name/purpose]

Overview:
- Purpose: [what system does]
- Scale: [users, traffic, data]
- Critical paths: [most important flows]

Components:
- [Component 1]: [purpose, tech]
- [Component 2]: [purpose, tech]
- [Interactions]: [how they communicate]

Current State:
- What's working: [strengths]
- Pain points: [known issues]
- Metrics: [relevant performance data]

Growth Projection:
- Timeline: [12 months, 2 years, etc.]
- Expected scale: [traffic, data, users]
- New requirements: [upcoming needs]

Questions:
1. [Specific question]
2. [Specific question]

Task: Review architecture for [specific concerns]
```

---

## Context Anti-Patterns

### Anti-Pattern 1: The Data Dump

```
❌ [Pastes entire 1000-line file]
"Find the bug"

Problem: Too much, unclear focus
Fix: Relevant section + context about the bug
```

### Anti-Pattern 2: The Mystery Context

```
❌ "Using the approach we discussed"

Problem: AI has no memory of previous conversations
Fix: Self-contained context in each prompt
```

### Anti-Pattern 3: The Implicit Assumption

```
❌ "Will this work?"

Missing context:
- Work for what?
- Under what conditions?
- With what constraints?

Fix: Explicit environment, requirements, constraints
```

### Anti-Pattern 4: The Context Overload

```
❌ 500 lines of context, 80% irrelevant

Problem: Wastes tokens, obscures important info
Fix: Only relevant context, structured clearly
```

---

## Context Optimization Tips

### Tip 1: Use Quantified Context

```
❌ Vague: "We have a lot of users"
✅ Specific: "100K daily active users"

❌ Vague: "It's slow"
✅ Specific: "p95 latency is 2.5s, need <500ms"

❌ Vague: "High traffic"
✅ Specific: "10K requests/second peak"
```

### Tip 2: Prioritize Context Elements

```
Order by importance:

1. Critical constraints (makes/breaks solution)
2. Primary requirements (must accomplish)
3. Scale and performance (sizing the solution)
4. Preferences (guiding choices)
5. Background (nice to know)
```

### Tip 3: Make Context Scannable

```
Use visual structure:

✅ Headers and sections
✅ Bullet points
✅ Tables for comparisons
✅ Code blocks for technical content
✅ Whitespace for readability
✅ Bold for emphasis
```

### Tip 4: Context Completeness Test

Ask yourself:
- [ ] Could someone else give good advice with just this context?
- [ ] Have I included relevant constraints?
- [ ] Are performance/scale requirements clear?
- [ ] Is the desired outcome explicit?
- [ ] Did I omit irrelevant details?

---

## 🏋️ Practical Exercises

### Exercise 1: Design Context Template (Type B - 30 min)

For your most common type of question (code review, architecture, debugging, etc.),
design a reusable context template.

### Exercise 2: Context Audit (Type B - 30 min)

Take a recent prompt that didn't work well:
1. Identify what context was missing
2. Identify what context was irrelevant
3. Rewrite with proper context structure
4. Test the improved version

### Exercise 3: Context Compression (Type A - 20 min)

Take this verbose context and compress it by 50% without losing essential information:

```
"Our application is a web-based platform that we built last year.
It's written in JavaScript using the React framework for the frontend
and we're using Node.js with the Express framework for the backend.
The database we chose is PostgreSQL version 13. We're hosting everything
on Amazon Web Services. We have around 50,000 users who use the app
every month. The application allows users to create and share documents
with other users..."
```

---

## Next Steps

Master context engineering:
- **Practice**: Create context templates for your common tasks
- **Refine**: Iterate on context based on results
- **Learn**: Continue to [Token Optimization](./02-token-optimization.md)
- **Apply**: Use [Context Templates](../../ingredients/context-templates.md) from recipes

---

**Remember**: Good context is like a good briefing—it provides exactly what's needed to make informed decisions, nothing more, nothing less. Master context design and your prompts will be dramatically more effective. 🎯
