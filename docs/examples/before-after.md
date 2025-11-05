# Before & After Examples 🔄

Real-world prompt transformations showing how small changes create dramatically better results.

---

## Example 1: Code Review Request

### ❌ Before (Ineffective)

```
Hey, can you take a look at this code I wrote? Let me know what you think.

[pastes 200 lines of code]
```

**Problems**:
- No context about what the code does
- No specific review focus
- Unclear what kind of feedback is needed
- No information about concerns

**Result**: Generic feedback, surface-level observations, missed critical issues

### ✅ After (Effective)

```
Review this user authentication middleware for security vulnerabilities:

Context:
- Purpose: JWT-based auth for REST API
- Handles: 10K requests/day
- Integrates with: User service, session store (Redis)

Specific concerns:
- Are tokens validated correctly?
- Is error handling secure (no info leakage)?
- Any race conditions in session management?
- Is rate limiting needed?

[code]

Provide:
1. Security issues (severity: high/medium/low)
2. Specific fix recommendations
3. Additional security measures to consider
```

**Improvements**:
- Clear purpose and context
- Specific security focus
- Scale information
- Explicit concerns
- Structured output format

**Result**: Targeted security analysis, actionable recommendations, identified 3 critical issues

**Token efficiency**: Before: ~45 tokens, After: ~95 tokens (+110% tokens but 5x better results)

---

## Example 2: Architecture Design

### ❌ Before (Ineffective)

```
I'm building a social media app. What architecture should I use?
```

**Problems**:
- No scale information
- No functional requirements
- No constraints
- No technical context
- Too broad

**Result**: Generic microservices advice that may not fit needs

### ✅ After (Effective)

```
Design architecture for social media platform:

Requirements:
- Features: User profiles, posts, feed, comments, likes, follow/unfollow
- Scale: 100K MAU target (currently 0)
- Performance: <2s feed load, <500ms for actions

Constraints:
- Team: 3 full-stack engineers (React/Node.js experience)
- Budget: <$1K/month infrastructure
- Timeline: MVP in 3 months
- Growth: Expect 10x in year 2

Current thinking:
- Monolith vs microservices?
- Database choice?
- Caching strategy?

Provide:
1. Recommended architecture with rationale
2. Technology stack suited to team and budget
3. Phased approach (MVP → scale)
4. Cost estimation
5. Known risks and mitigation
```

**Improvements**:
- Specific functional requirements
- Scale targets and timeline
- Team and budget constraints
- Current knowledge level
- Structured output request

**Result**: Tailored architecture (monolith recommended for MVP), concrete tech choices, realistic phased plan

---

## Example 3: Performance Debugging

### ❌ Before (Ineffective)

```
My API is slow, how do I make it faster?
```

**Problems**:
- No definition of "slow"
- No performance data
- No indication of bottleneck
- No system context

**Result**: Generic advice (add caching, use CDN, optimize queries)

### ✅ After (Effective)

```
Debug slow API performance:

Symptom:
- Endpoint: GET /api/users/{id}
- Current: p95 latency 2.5 seconds
- Target: <200ms
- Frequency: All requests affected

System:
- Stack: Node.js, Express, PostgreSQL
- Scale: 5K requests/day
- Deployment: Single EC2 instance (t3.medium)

Observations:
- Latency increased 2 weeks ago (was ~300ms)
- Worse during business hours
- No recent code changes
- CPU usage: 40%, Memory: 60%

Database query (slow):
```sql
SELECT users.*,
       COUNT(posts.id) as post_count,
       array_agg(follower.id) as followers
FROM users
LEFT JOIN posts ON posts.user_id = users.id
LEFT JOIN followers ON followers.followed_id = users.id
WHERE users.id = $1
GROUP BY users.id;
```
Execution time: 2.1 seconds

Analyze:
1. Where is the bottleneck? (query, network, application)
2. Why did it recently slow down?
3. Specific optimizations to try
4. Monitoring to add
```

**Improvements**:
- Quantified performance metrics
- System context and scale
- Timeline of degradation
- Actual slow query shown
- Resource utilization data
- Specific diagnostic asks

**Result**: Identified missing indexes, N+1 query pattern, provided specific SQL optimization, monitoring recommendations

---

## Example 4: Feature Decision

### ❌ Before (Ineffective)

```
Should we add real-time notifications to our app?
```

**Problems**:
- No context about the app
- No requirements
- No constraints
- No definition of "real-time"
- No decision criteria

**Result**: Abstract pros/cons list without actionable recommendation

### ✅ After (Effective)

```
Decide: Add real-time notifications to project management app?

Context:
- App: Team collaboration tool (tasks, comments, mentions)
- Current: Email notifications only (sent every 15 minutes)
- Users: 5K teams, avg 10 people per team
- User feedback: "Want faster notifications" (top 3 request)

Proposed:
- Real-time browser notifications
- Updates appear instantly (<2 seconds)
- Covers: mentions, task assignments, comments

Implementation options:
A. WebSockets (custom implementation)
B. Server-Sent Events (SSE)
C. Firebase Cloud Messaging
D. Polling (every 5 seconds)

Constraints:
- Budget: <$500/month for notification infrastructure
- Team: 2 backend engineers, no prior websocket experience
- Timeline: 6 weeks to deliver
- Reliability: Can tolerate 99% delivery (not critical)

Decision criteria (priority order):
1. Implementation complexity (small team)
2. Operational burden (no DevOps team)
3. Cost at current + 10x scale
4. Reliability and performance

Recommend approach with:
- Fit for our constraints
- Implementation complexity assessment
- Cost projection
- Risks and mitigation
- Alternative if this doesn't work
```

**Improvements**:
- Full context on current state
- Clear requirements
- Multiple options to evaluate
- Explicit constraints
- Prioritized decision criteria
- Structured output request

**Result**: Recommended SSE for simplicity, provided implementation guide, cost analysis, phased rollout plan

---

## Example 5: Learning/Explanation

### ❌ Before (Ineffective)

```
Explain Kubernetes
```

**Problems**:
- No context about audience
- No indication of depth needed
- No specific learning goal
- No current knowledge level

**Result**: Either too basic or too advanced, misses the mark

### ✅ After (Effective)

```
Explain Kubernetes for our team evaluation:

Audience:
- 5 engineers, 3-7 years experience
- Strong with VMs and traditional deployment
- No container orchestration experience
- Familiar with Docker basics

Goal:
Evaluate if Kubernetes is right for our migration from manual EC2 deployments

Current situation:
- 8 Node.js microservices
- Manual deployments to EC2 via shell scripts
- No auto-scaling
- Deployments take 30 min, error-prone

What we need to understand:
1. What problem does Kubernetes solve?
2. How would it improve our deployment process?
3. What's the learning curve and operational complexity?
4. Alternatives to consider (ECS, App Runner, etc.)
5. Migration effort from our current setup
6. Cost implications

Explain:
- Core concepts (pods, services, deployments) with our use case
- How our current manual process would map to K8s
- Realistic assessment of whether this is right for a 5-person team
- Decision framework: K8s vs alternatives

Focus on practical implications, not theoretical concepts.
```

**Improvements**:
- Audience context and current knowledge
- Specific evaluation goal
- Current situation described
- Explicit questions to answer
- Desired depth level
- Practical focus

**Result**: Tailored explanation using team's context, realistic complexity assessment, compared K8s vs simpler alternatives (recommended ECS for this team size), migration roadmap

---

## Key Patterns in Effective Prompts

### 1. Quantify Everything
- ❌ "High traffic"
- ✅ "10K requests/second peak"

### 2. Provide Constraints
- ❌ "Design a system"
- ✅ "Design a system for $500/month, 3-person team, 3-month timeline"

### 3. Specify Output Format
- ❌ "Analyze this"
- ✅ "Analyze this, provide: 1. Issues 2. Recommendations 3. Priority order"

### 4. Give Context That Matters
- ❌ "Our company was founded in 2019..."
- ✅ "Current stack: Node.js/PostgreSQL, Team: 5 engineers, Scale: 50K DAU"

### 5. State Your Goal
- ❌ "Tell me about microservices"
- ✅ "Decide if microservices fit our monolith migration, team of 8, 6-month timeline"

---

## Practice Exercise

Transform this ineffective prompt:

```
I'm having trouble with my database. Can you help?
```

Consider:
- What's missing?
- What context is needed?
- What would make this actionable?

<details>
<summary>Example Transformation</summary>

```
Debug PostgreSQL performance issue:

Problem:
- Query: User feed generation
- Current: 8-12 seconds
- Target: <1 second
- Impact: 80% of page loads

System:
- PostgreSQL 14
- Table: posts (10M rows), users (100K rows), follows (500K rows)
- Instance: RDS db.t3.large (2 vCPU, 8GB RAM)
- Connections: ~50 active

Query:
```sql
SELECT posts.* FROM posts
JOIN follows ON follows.followed_id = posts.user_id
WHERE follows.follower_id = $1
ORDER BY posts.created_at DESC
LIMIT 50;
```

EXPLAIN output shows sequential scan on posts (cost: 50000)

Already tried:
- Index on posts.user_id (minimal improvement)
- Connection pooling (no change)

Analyze:
1. Why is this slow?
2. What indexes are needed?
3. Query rewrite recommendations?
4. Caching strategy?
```

</details>

---

**Remember**: The goal isn't more words—it's more relevance, clarity, and structure. Effective prompts often use more tokens but produce dramatically better results, saving time and iterations. 🎯
