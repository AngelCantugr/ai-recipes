# Advanced Prompt Patterns 🚀

## Learning Objectives

Master sophisticated prompt engineering techniques:
- Apply chain-of-thought and reasoning patterns
- Use meta-prompting and self-refinement
- Implement multi-turn conversation strategies
- Combine patterns for complex scenarios
- Design prompt systems and workflows

## Prerequisites
- Completed [Fundamentals](./01-fundamentals.md)
- Experience applying basic patterns
- Comfort with complex software engineering tasks

---

## Advanced Pattern Catalog

### 1. Chain-of-Thought (CoT) Prompting

**Concept**: Explicitly ask the AI to show its reasoning process.

**Basic Form**:
```
Before providing your answer, think through this step-by-step.
Show your reasoning.
```

**Advanced Form**:
```
Analyze [problem] using this reasoning process:

Step 1: Identify the core problem
- What is actually being asked?
- What are the constraints?
- What makes this challenging?

Step 2: Consider approaches
- What are 2-3 possible approaches?
- What are the tradeoffs of each?

Step 3: Evaluate feasibility
- What resources are required?
- What are the risks?
- What could go wrong?

Step 4: Make recommendation
- Which approach is best and why?
- What are the implementation steps?
- What should be monitored?

Show your thinking at each step.
```

**When to use**:
- Complex technical decisions
- Architecture design
- Debugging multi-layered issues
- Evaluating tradeoffs

**Why it works**: Forces thoroughness and reveals logical gaps

**Example Application**:
```
I'm deciding between MongoDB and PostgreSQL for a new project.

Before recommending, think through:

Step 1: Understand requirements
- What are the data access patterns?
- What consistency guarantees are needed?
- What scale are we targeting?

Step 2: Evaluate MongoDB
- Pros for this use case
- Cons for this use case
- Specific risks

Step 3: Evaluate PostgreSQL
- Pros for this use case
- Cons for this use case
- Specific risks

Step 4: Compare and recommend
- Which better fits the requirements?
- What are the deciding factors?
- What should be monitored post-launch?

Requirements:
[Your specific requirements]

Show your reasoning for each step.
```

---

### 2. Tree of Thought (ToT) Prompting

**Concept**: Explore multiple reasoning paths and evaluate them.

**Structure**:
```
Consider [problem] from multiple angles:

Path 1: [Approach A]
- Reasoning: [logic]
- Outcome: [result]
- Confidence: [high/medium/low]

Path 2: [Approach B]
- Reasoning: [logic]
- Outcome: [result]
- Confidence: [high/medium/low]

Path 3: [Approach C]
- Reasoning: [logic]
- Outcome: [result]
- Confidence: [high/medium/low]

Compare paths:
- Which has strongest reasoning?
- Which has fewest assumptions?
- Which is most implementable?

Final recommendation: [best path with rationale]
```

**When to use**:
- High-stakes decisions
- Novel problems without clear precedent
- Need to explore solution space thoroughly

**Example**:
```
Design a rate limiting strategy for our API.

Explore three approaches:

Approach 1: Token bucket at API gateway
- How it works: [mechanism]
- Pros: [advantages]
- Cons: [disadvantages]
- Complexity: [implementation effort]
- Edge cases: [potential issues]

Approach 2: Distributed rate limiter with Redis
- How it works: [mechanism]
- Pros: [advantages]
- Cons: [disadvantages]
- Complexity: [implementation effort]
- Edge cases: [potential issues]

Approach 3: Application-level with middleware
- How it works: [mechanism]
- Pros: [advantages]
- Cons: [disadvantages]
- Complexity: [implementation effort]
- Edge cases: [potential issues]

Evaluation criteria:
- Accuracy (false positives/negatives)
- Performance overhead
- Implementation complexity
- Operational burden
- Cost

Compare all three against criteria and recommend.
```

---

### 3. Self-Consistency Prompting

**Concept**: Generate multiple solutions and identify the most consistent answer.

**Structure**:
```
Solve [problem] three different ways:

Solution 1: [Method A approach]
[Full solution]

Solution 2: [Method B approach]
[Full solution]

Solution 3: [Method C approach]
[Full solution]

Compare solutions:
- Where do they agree?
- Where do they differ?
- Which differences matter?
- What's the most reliable answer?

Final answer: [consensus or best approach]
```

**When to use**:
- Correctness is critical
- Multiple valid approaches exist
- Need validation of reasoning

**Example**:
```
Calculate the optimal database connection pool size for our service.

Approach 1: Formula-based (Little's Law)
- Calculation: [show work]
- Assumptions: [what you're assuming]
- Result: [pool size]

Approach 2: Observed metrics analysis
- Current performance: [data]
- Bottleneck analysis: [findings]
- Result: [pool size]

Approach 3: Industry benchmarks
- Similar services: [comparisons]
- Scaled to our traffic: [adjustments]
- Result: [pool size]

Compare results:
- Range: [min to max]
- Consensus: [if any]
- Differences: [why they differ]
- Recommendation: [final size with safety margin]

Context:
- Service: [description]
- Traffic: [requests/second]
- Query patterns: [typical operations]
```

---

### 4. Meta-Prompting

**Concept**: Have the AI help design or refine the prompt itself.

**Structure**:
```
I want to [goal].

Help me design an effective prompt for this by:
1. Asking clarifying questions about my goal
2. Identifying what context would be helpful
3. Suggesting a prompt structure
4. Providing an example prompt

Then I'll provide the details and we'll refine it together.
```

**When to use**:
- Unfamiliar problem domain
- Complex, multi-faceted tasks
- Learning to improve your prompting

**Example**:
```
I want to conduct effective technical interviews for senior engineers.

Help me create a prompt template for this by:

1. What information should I provide about:
   - The role and team?
   - The candidate's background?
   - Interview format and constraints?
   - Evaluation criteria?

2. What output structure would be most useful:
   - Question suggestions?
   - Evaluation rubrics?
   - Time allocations?
   - Follow-up strategies?

3. Suggest a complete prompt template I can reuse.

4. Show an example of using the template for a backend engineering role.
```

---

### 5. Perspective-Taking Pattern

**Concept**: Analyze from multiple expert viewpoints.

**Structure**:
```
Analyze [subject] from these perspectives:

Perspective 1: [Role A - e.g., Security Engineer]
Focus: [Their primary concerns]
Analysis: [What they'd notice and prioritize]
Recommendations: [What they'd suggest]

Perspective 2: [Role B - e.g., Site Reliability Engineer]
Focus: [Their primary concerns]
Analysis: [What they'd notice and prioritize]
Recommendations: [What they'd suggest]

Perspective 3: [Role C - e.g., Product Engineer]
Focus: [Their primary concerns]
Analysis: [What they'd notice and prioritize]
Recommendations: [What they'd suggest]

Synthesis:
- Conflicting priorities: [Identify tensions]
- Consensus areas: [Identify agreement]
- Balanced approach: [Integrate perspectives]
```

**When to use**:
- Cross-functional decisions
- System design review
- Risk assessment
- Trade-off analysis

**Example**:
```
Analyze this API design from three perspectives:

API Design:
[Paste your API specification]

Perspective 1: Frontend Developer
Focus: Ease of integration, response times, error handling
Questions:
- Is the API intuitive?
- Are errors actionable?
- Is data structure optimized for UI needs?
Analysis: [Detailed perspective]

Perspective 2: Backend/Platform Engineer
Focus: Scalability, maintainability, performance
Questions:
- Will this scale to 100K users?
- Is it maintainable long-term?
- Are there technical debt risks?
Analysis: [Detailed perspective]

Perspective 3: DevOps/SRE
Focus: Observability, reliability, operational burden
Questions:
- Can we monitor this effectively?
- What are the failure modes?
- How complex is deployment?
Analysis: [Detailed perspective]

Balanced Design:
- Required changes: [Critical issues from all perspectives]
- Trade-offs: [Where perspectives conflict]
- Final recommendation: [Integrated design]
```

---

### 6. Socratic Prompting

**Concept**: Learn through guided questioning rather than direct answers.

**Structure**:
```
I want to understand [concept/problem].

Instead of explaining directly, help me discover it by:
1. Asking me questions about what I already know
2. Guiding me to identify the key issues
3. Prompting me to reason through the implications
4. Helping me arrive at conclusions myself

Start by asking me about [foundation concept].
```

**When to use**:
- Deep learning of complex topics
- Debugging your own understanding
- Preparing for technical discussions

**Example**:
```
I want to deeply understand event sourcing architecture.

Guide me through Socratic questioning:

1. Start by asking me what I know about state management
2. Lead me to identify problems with traditional CRUD
3. Guide me to consider alternative approaches
4. Help me reason through event sourcing concepts
5. Prompt me to identify tradeoffs and considerations
6. Have me apply it to a concrete example

After each of your questions, I'll respond, and you'll build on that
to deepen my understanding. Begin.
```

---

### 7. Refinement Loop Pattern

**Concept**: Explicitly iterate to improve outputs.

**Structure**:
```
[Initial request]

After your response, I'll provide feedback focusing on [criteria].
Then you'll refine your response.

We'll iterate until we achieve:
- [Success criterion 1]
- [Success criterion 2]
- [Success criterion 3]

Let's start with version 1.
```

**When to use**:
- High-quality output required
- Subjective or style-dependent results
- Complex creative or design tasks

**Example**:
```
Write an engineering blog post about our migration from REST to GraphQL.

Target audience: Senior engineers at other companies
Length: 1200-1500 words
Tone: Technical but accessible, honest about challenges

After your first draft, I'll provide feedback on:
- Technical accuracy
- Narrative flow
- Practical applicability
- Missing crucial details

We'll iterate until the post:
- Clearly explains our reasoning
- Honestly discusses challenges faced
- Provides actionable lessons
- Engages the target audience

Start with draft 1.
```

---

### 8. Constraint-Driven Design Pattern

**Concept**: Use constraints to force creative solutions.

**Structure**:
```
Design [solution] with these strict constraints:

Hard Constraints (cannot be violated):
- [Constraint 1]
- [Constraint 2]

Soft Constraints (strong preference):
- [Constraint 3]
- [Constraint 4]

Anti-patterns (must avoid):
- [Thing you don't want]
- [Approach that won't work]

Within these constraints:
1. Propose 2-3 approaches
2. Explain how each satisfies constraints
3. Recommend the best option
4. Identify any unavoidable trade-offs
```

**Example**:
```
Design a real-time notification system.

Hard Constraints:
- Must support 1M concurrent connections
- Cannot use WebSockets (firewall restrictions)
- Must work with existing REST API
- Budget: <$2K/month
- Latency: <2 seconds from trigger to delivery

Soft Constraints:
- Prefer simpler architecture over complex
- Prefer managed services over custom infrastructure
- Minimize operational burden

Anti-patterns (must avoid):
- Polling every second (too expensive)
- Third-party notification service (data privacy)
- Server-Sent Events (browser compatibility issues)

Design 2-3 approaches meeting these constraints, and recommend the best.
```

---

### 9. Adversarial Prompting (Red Teaming)

**Concept**: Challenge ideas to find weaknesses.

**Structure**:
```
I'm proposing: [Your solution/approach]

Your role: Adversarial reviewer trying to find flaws

Challenge this proposal by:
1. What are the most critical weaknesses?
2. What assumptions could be wrong?
3. What edge cases break this?
4. What operational nightmares await?
5. How would you attack/exploit this?
6. What am I overlooking?

Be thorough and critical. Don't hold back.

After your critique, I'll respond, and we'll iterate to a stronger solution.
```

**When to use**:
- Security review
- Architecture validation
- Before major commitments
- Risk assessment

**Example**:
```
I'm proposing we adopt microservices architecture for our monolith.

Current state:
- Monolithic Rails app
- 100K daily active users
- Team of 8 engineers
- Deployment takes 30 minutes
- Some scaling issues

Proposed approach:
- Break into 6 microservices
- Use Docker + Kubernetes
- Migrate service-by-service over 6 months

Your role: Skeptical Staff Engineer who's seen this go wrong

Challenge this proposal:
1. What are the biggest risks?
2. What hidden costs am I not seeing?
3. What could go catastrophically wrong?
4. What assumptions might be false?
5. What simpler alternatives should I consider?
6. What would make you reject this proposal?

Be brutally honest. I need to know if this is a mistake.
```

---

### 10. Analogical Reasoning Pattern

**Concept**: Solve problems by analogy to similar domains.

**Structure**:
```
Problem: [Your problem]

Find analogies from:
1. [Domain A]: How do they handle similar challenges?
2. [Domain B]: What patterns apply here?
3. [Domain C]: What lessons transfer?

For each analogy:
- Describe the parallel problem
- Explain their solution
- Identify what transfers to your problem
- Note what doesn't apply (key differences)

Synthesize into approach for your problem.
```

**Example**:
```
Problem: Designing a retry strategy for distributed service calls

Find analogies from:

1. Network protocols (TCP/IP):
- How do they handle retries and backoff?
- What's their exponential backoff strategy?
- How do they prevent congestion collapse?
- Lessons: [What applies to our services]

2. Circuit breakers in electrical systems:
- How do they prevent cascading failures?
- What triggers opening/closing?
- What's the testing strategy (half-open state)?
- Lessons: [What applies to our services]

3. Human stress response (biological systems):
- How does the body respond to overload?
- What's the recovery pattern?
- How are priorities managed?
- Lessons: [What applies to our services]

Synthesize:
Design a retry strategy incorporating the best ideas from each domain.
```

---

## Combining Patterns

Advanced prompting often combines multiple patterns:

### Example: Architecture Review (5 patterns combined)

```
[Pattern 1: Role Assignment]
You are a Principal Engineer specializing in distributed systems,
with particular expertise in scalability and reliability.

[Pattern 2: Chain-of-Thought]
Review this architecture systematically, showing your reasoning:

Step 1: Understand the system
- What is it trying to achieve?
- What are the key components?
- What are the traffic patterns?

Step 2: Identify concerns
- What are potential bottlenecks?
- What could fail?
- What's operationally complex?

[Pattern 3: Perspective-Taking]
Step 3: Analyze from multiple perspectives
- Performance: Can it handle the load?
- Reliability: What's the failure modes?
- Operations: How complex to run?
- Cost: What's the resource utilization?

[Pattern 4: Adversarial]
Step 4: Red-team the design
- What's the worst that could happen?
- What assumptions might be wrong?
- What will break first at scale?

[Pattern 5: Structured Output]
Step 5: Provide recommendations

Format:
## Critical Issues
- [Issue]: [Severity] - [Impact] - [Recommendation]

## Architecture Improvements
1. [Improvement]
   - Why: [Rationale]
   - How: [Implementation approach]
   - Risk: [Implementation risks]
   - Priority: [High/Medium/Low]

## Operational Concerns
- [Concern]: [Mitigation strategy]

Architecture to review:
[Your architecture description]
```

---

## 🏋️ Practical Exercises

### Exercise 1: Apply Chain-of-Thought (Type B - 30 min)

Take this basic prompt and rewrite it with explicit chain-of-thought reasoning:

**Basic**: "Should we cache this API endpoint?"

**Your task**: Create a CoT prompt that walks through the decision systematically.

### Exercise 2: Red Team Your Own Design (Type B - 45 min)

Take a recent technical decision you made and write an adversarial prompt to find flaws you might have missed.

### Exercise 3: Multiple Perspectives (Type B - 30 min)

Pick an architecture diagram or system design. Write a prompt that analyzes it from 3 different role perspectives.

---

## Pattern Selection Guide

**Use Chain-of-Thought when**:
- You need to see the reasoning
- The problem is complex
- You want thorough analysis

**Use Tree-of-Thought when**:
- Multiple valid approaches exist
- Need to explore solution space
- High-stakes decision

**Use Self-Consistency when**:
- Correctness is critical
- Want to validate reasoning
- Multiple methods exist

**Use Meta-Prompting when**:
- Unfamiliar with the domain
- Learning to prompt better
- Very complex task

**Use Perspective-Taking when**:
- Cross-functional decision
- Need comprehensive view
- Multiple stakeholders

**Use Adversarial when**:
- About to commit resources
- Need risk assessment
- Security or reliability critical

---

## Next Steps

- **Practice**: Apply one new pattern per day
- **Combine**: Try combining 2-3 patterns
- **Measure**: Track what works for your use cases
- **Document**: Build your own pattern library
- **Share**: Contribute successful patterns back

Continue to:
- [Optimization Strategies](./03-optimization.md) - Make prompts more efficient
- [Common Pitfalls](./04-pitfalls.md) - Avoid advanced mistakes
- [Context Engineering](../context-engineering/01-context-design.md) - Optimize context

---

**Remember**: Advanced patterns are tools, not requirements. Use them when they add value. Sometimes a simple, clear prompt is best. The art is knowing when to apply which pattern. 🎯
