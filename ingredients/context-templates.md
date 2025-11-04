# Context Templates 📋

## Purpose
Structured templates for providing context in your prompts

## System Context Template

```markdown
## System Context

**Purpose**: [What the system does]

**Scale**:
- Users: [active users, requests/day]
- Data: [volume, growth rate]
- Traffic patterns: [peak times, geographic distribution]

**Architecture**:
- Frontend: [technologies]
- Backend: [services, languages]
- Data: [databases, caching, queues]
- Infrastructure: [cloud provider, deployment model]

**Team**:
- Size: [number of engineers]
- Experience: [skill levels]
- Working style: [agile/scrum/kanban]

**Tech Stack**:
- Languages: [list]
- Frameworks: [list]
- Infrastructure: [tools and services]

**Recent Changes**:
- [Recent major changes that might be relevant]

**Pain Points**:
- [Current challenges or issues]
```

---

## Problem Context Template

```markdown
## Problem Context

**What's Wrong**:
[Clear description of the problem]

**Impact**:
- Users affected: [who and how many]
- Business impact: [revenue, reputation, etc.]
- Frequency: [always/sometimes/specific conditions]
- Severity: [critical/major/minor]

**When It Started**:
[Timeline of when issue began]

**What Changed**:
[Recent changes that might be related]

**Current State**:
- Error rate: [metrics]
- Performance: [current measurements]
- Availability: [uptime stats]

**What We've Tried**:
1. [Attempt 1]: [result]
2. [Attempt 2]: [result]

**Constraints**:
- [Time constraints]
- [Resource constraints]
- [Technical constraints]
```

---

## Code Context Template

```markdown
## Code Context

**File/Module**: [path or name]

**Purpose**: 
[What this code is supposed to do]

**Dependencies**:
- Direct: [what it uses]
- Dependents: [what uses it]

**Recent History**:
- Last modified: [when and why]
- Author: [experience level]
- Test coverage: [percentage or quality]

**Related Code**:
- [Other files/modules to consider]

**Known Issues**:
- [Existing bugs or tech debt]

**Performance Characteristics**:
- [Runtime complexity]
- [Memory usage]
- [Bottlenecks]
```

---

## Project Context Template

```markdown
## Project Context

**Goal**: 
[What we're trying to achieve]

**Success Metrics**:
- [How we'll measure success]

**Timeline**:
- Start: [date]
- Milestones: [key dates]
- Launch: [target date]

**Stakeholders**:
- Product: [PM names and priorities]
- Engineering: [team members and roles]
- Business: [who cares and why]

**Requirements**:
Must Have:
- [Critical requirement 1]
- [Critical requirement 2]

Should Have:
- [Important but not critical]

Nice to Have:
- [If time allows]

**Constraints**:
- Technical: [limitations]
- Resource: [budget, people]
- Time: [deadlines]
- Quality: [standards to meet]

**Risks**:
- [Risk 1]: [likelihood and impact]
- [Risk 2]: [likelihood and impact]

**Dependencies**:
- Blocking us: [what we're waiting for]
- We're blocking: [who's waiting for us]
```

---

## Decision Context Template

```markdown
## Decision Context

**Decision To Make**:
[What needs to be decided]

**Why Now**:
[Why this decision can't wait]

**Who Decides**:
- Decision maker: [who has final say]
- Stakeholders: [who else cares]
- Timeline: [when decision is needed]

**Options**:
1. [Option A]: [brief description]
2. [Option B]: [brief description]
3. [Option C]: [brief description]
4. Do nothing: [what happens if we don't decide]

**Criteria** (in priority order):
1. [Criterion 1]: [why it matters]
2. [Criterion 2]: [why it matters]
3. [Criterion 3]: [why it matters]

**Current Thinking**:
[Initial leanings or preferences]

**Information Gaps**:
[What we don't know yet]

**Irreversibility**:
[How hard to change this decision later]
```

---

## Performance Context Template

```markdown
## Performance Context

**Current Performance**:
- Latency: [p50, p95, p99]
- Throughput: [requests/second]
- Error rate: [percentage]
- Resource usage: [CPU, memory, disk]

**Performance Goals**:
- Target latency: [desired metrics]
- Target throughput: [desired capacity]
- Target error rate: [acceptable rate]

**Load Characteristics**:
- Average load: [typical traffic]
- Peak load: [maximum traffic]
- Traffic patterns: [daily/weekly patterns]

**Bottlenecks**:
- Known: [identified bottlenecks]
- Suspected: [possible issues]

**Measurement Setup**:
- Tools: [monitoring and profiling tools]
- Metrics: [what we measure]
- Benchmarks: [how we test]

**Environment**:
- Hardware: [specs]
- Network: [bandwidth, latency]
- Concurrent users: [load levels]
```

---

## Team Context Template

```markdown
## Team Context

**Team Composition**:
- Size: [number of engineers]
- Roles: [breakdown by role/level]
- Experience: [years of experience range]

**Skills**:
- Strong in: [technologies, domains]
- Growing in: [learning areas]
- Gaps: [missing expertise]

**Working Style**:
- Process: [agile/scrum/kanban]
- Sprint length: [if applicable]
- Meetings: [regular ceremonies]
- Communication: [tools and norms]

**Capacity**:
- Velocity: [story points or similar]
- Availability: [holidays, part-time, etc.]
- Concurrent projects: [other commitments]

**Culture**:
- Code review practices: [how thorough]
- Testing philosophy: [coverage expectations]
- Documentation: [how much, what format]
- Technical debt: [how we handle it]

**Learning Goals**:
- Team: [skills to develop]
- Individual: [personal growth areas]
```

---

## Usage Tips

1. **Pick the Right Template**: Choose based on what context matters for your question
2. **Fill Completely**: More context = better AI responses
3. **Be Specific**: "500 requests/second" beats "high traffic"
4. **Update Templates**: Adapt these to your specific needs
5. **Combine Templates**: Use multiple templates when relevant
6. **Keep It Current**: Update context as situations change
7. **Version Large Contexts**: Save context snapshots for major decisions

---

## Example: Combining Templates

```markdown
I need help optimizing a slow API endpoint.

[System Context]
Purpose: User profile service
Scale: 10M users, 50K requests/second peak
Architecture: Node.js microservice, PostgreSQL, Redis cache

[Performance Context]
Current: p95 latency 800ms
Target: p95 latency <200ms
Bottleneck: Database queries taking 600ms average

[Code Context]
File: src/api/profile.js
Recent history: No changes in 6 months
Test coverage: 45%

[Provide your actual prompt/question here]
```
