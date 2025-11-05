# Learning Session Designer 🎓

## Purpose
Create structured learning sessions to teach technical concepts, share knowledge, and level up your team's skills through workshops, tech talks, or study groups.

## When to Use
- Onboarding new team members to systems or concepts
- Teaching new technology or framework
- Knowledge sharing within team
- Preparing technical workshops
- Creating internal training materials
- Designing lunch-and-learn sessions
- Building learning curriculum
- Mentoring junior engineers

## Template

```
I need to design a learning session about [topic].

Session Details:
- Topic: [what you're teaching]
- Audience: [experience level, background, size]
- Duration: [time available]
- Format: [presentation/workshop/hands-on/discussion]
- Delivery: [in-person/remote/async]

Learning Objectives:
By the end of this session, participants should be able to:
- [Objective 1 - specific, measurable]
- [Objective 2]
- [Objective 3]

Prerequisites:
What should participants know before this session?
- [Prerequisite 1]
- [Prerequisite 2]

Current Knowledge Level:
- What participants already know: [baseline]
- Common misconceptions: [if any]
- Gap to fill: [what they need to learn]

Context:
- Why this matters: [relevance to their work]
- How they'll apply it: [practical application]
- Follow-up opportunities: [next steps after session]

Content to Cover:
Core concepts:
- [Concept 1]
- [Concept 2]

Practical skills:
- [Skill 1]
- [Skill 2]

Examples/demos:
- [Example 1 - specific to your context]
- [Example 2]

Please create a complete learning session including:

1. Session Outline
   - Timing for each section
   - Progressive structure (simple → complex)
   - Mix of theory and practice

2. Introduction (5-10% of time)
   - Hook to capture interest
   - Learning objectives
   - Agenda overview
   - Why this matters

3. Content Delivery (60-70% of time)
   - Core concepts explained clearly
   - Building blocks approach
   - Examples and demonstrations
   - Analogies for complex ideas
   - Common pitfalls to avoid

4. Hands-On Practice (20-30% of time)
   - Exercises or activities
   - Increasing difficulty
   - Guided practice
   - Time for questions

5. Wrap-Up (5-10% of time)
   - Key takeaways summary
   - Q&A
   - Resources for further learning
   - Next steps or homework

6. Supporting Materials
   - Slide outline or talking points
   - Code examples or demos
   - Exercises with solutions
   - Cheat sheet or reference guide
   - Additional resources

Teaching Approach:
- Make it interactive: [how participants engage]
- Use examples from: [your domain/codebase]
- Avoid: [common teaching pitfalls for this topic]
- Emphasize: [most important concepts]
```

## Tips
- **Know your audience**: Tailor depth and pace to experience level
- **Start with why**: Motivate learning before diving into details
- **Use the 10-minute rule**: Change activity/approach every 10 min to maintain attention
- **Prepare for different paces**: Have extension material and simplified fallbacks
- **Make it relevant**: Use examples from your actual codebase/projects
- **Build progressively**: Each concept should build on previous ones
- **Plan for interaction**: Passive listening = minimal retention
- **Include checkpoints**: Pause to check understanding, answer questions
- **Hands-on beats lecture**: People learn by doing, not just hearing
- **Time buffer is essential**: Always overestimate time needed
- **Prepare for questions**: Anticipate confusions and prepare clarifications
- **Provide resources**: Give participants references for later
- **Get feedback**: Ask what worked, what didn't, how to improve
- **Record if possible**: Async viewing helps absent members and reinforcement
- **Create artifacts**: Slide deck, code examples, notes participants can reference

## Example Use Cases

**Onboarding: System Architecture**:
```
I need a learning session to onboard new engineers to our microservices architecture.

Session Details:
- Topic: Understanding Our Microservices Architecture
- Audience: New hires (3-5 years experience), 3-4 people
- Duration: 90 minutes
- Format: Presentation + live system walkthrough
- Delivery: In-person with remote attendees

Learning Objectives:
- Understand the purpose and boundaries of each service
- Know how services communicate and data flows
- Be able to navigate the codebase and find relevant code
- Understand deployment and monitoring basics

Prerequisites:
- General microservices concepts
- Docker basics
- REST API familiarity

Current Knowledge:
- Know: Basic architecture concepts
- Don't know: Our specific services, our conventions, our tech stack
- Gap: Move from theory to our implementation

Context:
- Why: Need to be productive within first week
- Apply: Contributing to services, reviewing PRs, on-call rotation
- Follow-up: Deep dives into specific services

Content:
- Overview of 8 microservices (purpose, boundaries)
- Communication patterns (REST, events, databases)
- Data flow for key user journeys
- Repo structure and conventions
- Local development setup
- Deployment pipeline
- Monitoring and debugging tools

Design comprehensive onboarding session with architecture diagrams,
live demos in staging environment, and hands-on exercises to explore services.
```

**Technical Workshop: Advanced TypeScript**:
```
I need a workshop teaching advanced TypeScript patterns to our team.

Session Details:
- Topic: Advanced TypeScript: Generics, Utility Types, and Type Guards
- Audience: 10 engineers, comfortable with basic TypeScript
- Duration: 2 hours
- Format: Interactive workshop with coding exercises
- Delivery: Remote (Zoom + shared coding environment)

Learning Objectives:
- Write and use generic types effectively
- Leverage built-in utility types (Partial, Pick, Omit, etc.)
- Implement custom type guards
- Apply these patterns to refactor existing code

Prerequisites:
- 6+ months TypeScript experience
- Comfortable with interfaces, types, basic generics
- Understand JavaScript promises and async/await

Current Knowledge:
- Know: Basic TypeScript, simple generics
- Don't know: When/how to use advanced generic patterns
- Misconceptions: "Generics are too complex" (actually simplify code)

Context:
- Why: Codebase has repetitive type definitions, needs refactoring
- Apply: Immediately in current sprint work
- Impact: More type-safe, less repetitive code

Content:
- Generic functions and when to use them
- Generic constraints and defaults
- Built-in utility types and practical uses
- Custom type guards for runtime safety
- Conditional types (brief intro)
- Real examples from our codebase

Create workshop with theory, live coding demos, 4-5 progressive exercises,
and before/after refactoring examples from our actual code.
```

**Tech Talk: Observability Best Practices**:
```
I need a lunch-and-learn about observability for our engineering team.

Session Details:
- Topic: Observability 101: Metrics, Logs, Traces
- Audience: 20 engineers, mixed experience (junior to senior)
- Duration: 45 minutes
- Format: Presentation + Q&A
- Delivery: In-person with recording for async viewing

Learning Objectives:
- Understand the three pillars of observability
- Know when to use metrics vs logs vs traces
- Learn practical tips for instrumenting code
- Understand our observability stack

Prerequisites:
- None, suitable for all levels

Current Knowledge:
- Everyone uses logs
- Some use metrics
- Few understand distributed tracing
- Gap: When to use what, and how to use effectively

Context:
- Why: Recent incidents showed gaps in observability
- Apply: Instrument code better, debug faster
- Goal: Culture shift toward proactive monitoring

Content:
- Three pillars: Metrics, Logs, Traces
- When to use each (with decision flowchart)
- Anti-patterns: Over-logging, metric explosion, missing context
- Practical tips: What to instrument, how to structure logs
- Our stack: DataDog, how to use it effectively
- Real example: Recent incident and how better observability would have helped

Create engaging talk with concrete examples, actionable takeaways,
visual decision trees, and live demo of our observability tools.
```

**Study Group: System Design**:
```
I need to facilitate a study group for engineers preparing for senior/staff interviews.

Session Details:
- Topic: System Design Interview Preparation
- Audience: 6 engineers (mid to senior), aiming for promotion/external interviews
- Duration: 90 minutes weekly for 6 weeks
- Format: Problem-solving workshop
- Delivery: Hybrid (some in-person, some remote)

Learning Objectives:
- Approach system design problems systematically
- Articulate tradeoffs clearly
- Design for scale, reliability, and maintainability
- Communicate effectively during design discussions

Prerequisites:
- 3+ years engineering experience
- Worked with distributed systems
- Understanding of databases, caching, load balancing basics

Current Knowledge:
- Know: Building systems in practice
- Don't know: Structured approach to design interviews
- Need: Practice articulating decisions, handling ambiguity

Context:
- Why: Career growth, interview preparation
- Apply: Interviews, and actual work architecture discussions
- Format: Each week = new design problem

Weekly Structure:
- Week 1: Framework for system design (requirements, estimation, design, deep-dive)
- Week 2: Design URL shortener (classic problem)
- Week 3: Design social media feed (ranking, caching)
- Week 4: Design distributed message queue (infrastructure)
- Week 5: Design monitoring system (observability)
- Week 6: Mock interviews and feedback

Create 6-week curriculum with:
- Problem statements for each week
- Discussion framework and key questions
- Reference solutions with tradeoff analysis
- Tips for interview communication
- Resource list for continued learning
```

## Related Recipes
- [Technical Mentoring](./leadership/technical-mentoring.md) - For 1-on-1 knowledge transfer
- [Documentation Generator](../sides/documentation-generator.md) - For creating supporting materials
- [Meeting Prep](../appetizers/meeting-prep.md) - For preparing interactive sessions
- [Technical Strategy](./leadership/technical-strategy.md) - For longer-term learning initiatives
