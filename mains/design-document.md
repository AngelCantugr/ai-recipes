# Design Document Creator 📐

## Purpose
Create comprehensive technical design documents that capture architecture, implementation details, trade-offs, and decisions for significant engineering projects.

## When to Use
- Designing new systems or major features
- Documenting architectural decisions
- Planning complex refactoring efforts
- Aligning teams on technical approach
- Creating reference for future maintenance
- Preparing for architecture reviews
- Onboarding new team members to system design

## Template

```
I need to create a design document for [system/feature/project].

Project Overview:
- Name: [project name]
- Purpose: [what problem does this solve]
- Scope: [what's in scope, what's out]
- Target audience: [who will read this - engineers, architects, etc.]

Context:
- Current state: [existing system/approach]
- Problem statement: [what needs to change and why]
- Goals: [what success looks like]
- Non-goals: [what we're explicitly not doing]

Requirements:
Functional:
- [Requirement 1]
- [Requirement 2]

Non-functional:
- Performance: [latency, throughput targets]
- Scalability: [expected scale]
- Reliability: [uptime, error rate targets]
- Security: [security requirements]

Technical Context:
- Current stack: [technologies in use]
- Team: [size, skills, experience]
- Constraints: [budget, timeline, technical limitations]
- Dependencies: [systems we integrate with]

Design Approach:
[High-level description of your proposed approach]

Key Design Decisions:
- Decision 1: [what you decided and why]
- Decision 2: [alternatives considered and trade-offs]

Areas to Cover:
1. High-level architecture
2. Component design and responsibilities
3. Data models and schemas
4. API/interface design
5. Technology choices and rationale
6. Error handling and edge cases
7. Performance considerations
8. Security considerations
9. Testing strategy
10. Deployment approach
11. Monitoring and observability
12. Open questions and future work

Please create a comprehensive design document with:
- Clear architecture diagrams (ASCII art or description)
- Detailed component descriptions
- Analysis of alternatives considered
- Trade-off discussions
- Implementation plan and phases
- Risk assessment
- Success metrics

Format as a structured markdown document suitable for:
- Team review and feedback
- Architecture review board presentation
- Future reference and onboarding
- Implementation guidance
```

## Tips
- **Start with "why"**: Clearly articulate the problem before jumping to solutions
- **Be thorough but focused**: Cover all important aspects without unnecessary detail
- **Include alternatives**: Show you considered options, explain trade-offs
- **Use diagrams**: Architecture diagrams clarify more than paragraphs
- **Define interfaces clearly**: APIs, data contracts, component boundaries
- **Address non-functional requirements**: Performance, security, ops are crucial
- **Call out assumptions**: Make implicit assumptions explicit
- **Identify risks**: What could go wrong? How will you mitigate?
- **Make it reviewable**: Structure for easy feedback and iteration
- **Include success metrics**: How will you know if this works?
- **Version control**: Design docs should evolve with feedback
- **Link to context**: Reference related docs, ADRs, tickets
- **Consider operators**: How will this be deployed, monitored, debugged?
- **Plan for failure**: Error handling, fallbacks, recovery procedures
- **Keep it current**: Update as design evolves during implementation

## Example Use Cases

**New Microservice Design**:
```
I need a design document for a new notification service.

Overview:
- Name: Real-time Notification Service
- Purpose: Centralized service for sending user notifications across channels
- Scope: Email, SMS, push notifications; Not in-app messaging (separate service)

Context:
- Current: Each service sends notifications independently (inconsistent, hard to maintain)
- Problem: Duplicate code, no unified view, poor deliverability tracking
- Goals: Centralized, reliable, observable, extensible to new channels

Requirements:
Functional:
- Send via email, SMS, push
- Template management
- Scheduling and batching
- User preferences (channels, frequency)
- Delivery status tracking

Non-functional:
- Performance: <100ms to queue, 95% delivered within 5min
- Scalability: 1M notifications/day, grow to 10M
- Reliability: 99.9% uptime, no lost notifications
- Cost: <$2K/month at current scale

Technical Context:
- Stack: Node.js, PostgreSQL, Redis
- Infrastructure: AWS (SQS, Lambda, SES, SNS)
- Team: 3 engineers, Node.js experience, new to message queues
- Integrates with: User service, all product services

Approach:
- API Gateway for requests
- SQS for queuing
- Worker pool for processing
- Provider adapters (SendGrid, Twilio, FCM)
- PostgreSQL for templates and delivery logs
- Redis for rate limiting and deduplication

Create comprehensive design covering architecture, data models, API design,
error handling, monitoring, and deployment strategy.
```

**Database Migration Design**:
```
I need a design document for migrating from MongoDB to PostgreSQL.

Overview:
- Migration from MongoDB 4.4 to PostgreSQL 14
- Affects: User data, transaction data, analytics (3 databases)
- Timeline: 4 months

Context:
- Current: 100GB data, 50K writes/day, 500K reads/day
- Problem: Schema changes are painful, lacking relational queries, team prefers SQL
- Goals: Relational data model, better query capabilities, improved data integrity

Requirements:
- Zero downtime migration
- No data loss
- Rollback capability
- Maintain read performance during migration
- Minimal application changes

Constraints:
- Must complete before Q4 (new features need relational queries)
- Cannot hire additional engineers
- Budget: <$5K for migration tools

Approach:
- Phase 1: Schema design and validation
- Phase 2: Dual-write implementation
- Phase 3: Backfill historical data
- Phase 4: Switch reads to PostgreSQL
- Phase 5: Decommission MongoDB

Create detailed design including schema mapping, dual-write strategy,
data validation, rollback procedures, and risk mitigation.
```

**System Refactoring Design**:
```
I need a design document for refactoring our authentication system.

Overview:
- Refactor monolithic auth to support SSO and OAuth
- Current: Homegrown JWT auth in monolith
- Goal: Support Google, GitHub OAuth + maintain existing auth

Context:
- Monolith serves 200 routes, 50 explicitly need auth
- 10K active users, can't force re-authentication
- Security team requires OAuth for enterprise customers (Q3)

Requirements:
- Support existing username/password auth
- Add Google and GitHub OAuth
- Session management stays the same
- No user-visible breaking changes
- Audit logging for compliance

Non-functional:
- Performance: No degradation from current (<50ms auth check)
- Security: Must pass security review
- Reliability: Auth failures = system down, need 99.99%

Constraints:
- Can't rewrite everything (too risky)
- Must maintain session compatibility
- Team of 2, 6 weeks

Approach:
- Extract auth middleware to library
- Add OAuth provider adapters
- Unified user identity layer
- Incremental rollout per provider

Create refactoring design with migration strategy, testing approach,
rollback plan, and incremental deployment phases.
```

## Related Recipes
- [Technical Decision](./architecture/technical-decision.md) - For documenting specific decisions
- [System Design](./architecture/system-design.md) - For designing new systems from scratch
- [Architecture Review](./architecture/scalability-review.md) - For reviewing existing designs
- [One-Pager](./one-pager.md) - For executive summary version
