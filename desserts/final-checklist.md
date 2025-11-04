# Pre-Ship Final Checklist ✅

## Purpose
Ensure nothing is missed before shipping code to production

## When to Use
- Before merging to main/production
- Pre-deployment reviews
- Release readiness checks

## Template

```
I'm about to ship [feature/fix]. Help me verify everything is ready for production.

Change Description:
[What you're shipping]

Deployment Context:
- Deployment type: [feature release/hotfix/routine]
- Risk level: [low/medium/high]
- Rollback difficulty: [easy/moderate/hard]
- User impact: [who and how many users affected]

Please help me verify:

## Code Quality
- [ ] Code reviewed and approved
- [ ] All review comments addressed
- [ ] Linter passes with no warnings
- [ ] No TODO/FIXME comments for production issues
- [ ] No debug code or console logs left in
- [ ] Dependencies up to date and secure

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] E2E tests pass (if applicable)
- [ ] Tested locally with production-like data
- [ ] Tested edge cases and error conditions
- [ ] Performance testing done (if relevant)
- [ ] Browser/device testing done (if UI change)
- [ ] Tested with feature flags on/off

## Security
- [ ] No secrets or credentials in code
- [ ] Input validation in place
- [ ] Authentication/authorization correct
- [ ] Security review completed (if needed)
- [ ] Dependencies scanned for vulnerabilities
- [ ] HTTPS/TLS enforced
- [ ] Data access properly restricted

## Observability
- [ ] Appropriate logging added
- [ ] Metrics/monitoring configured
- [ ] Alerts set up for failure conditions
- [ ] Dashboards updated
- [ ] Tracing configured (if distributed system)
- [ ] Can detect if feature is working

## Documentation
- [ ] Code comments for complex logic
- [ ] API documentation updated
- [ ] README updated
- [ ] Architecture docs updated
- [ ] Runbook created (if new service/feature)
- [ ] Release notes written

## Deployment
- [ ] Database migrations tested
- [ ] Configuration changes documented
- [ ] Environment variables set
- [ ] Feature flags configured
- [ ] Rollback plan documented
- [ ] Deployment runbook ready
- [ ] On-call aware of deployment

## Communication
- [ ] Stakeholders notified
- [ ] Dependent teams aware
- [ ] Customer-facing teams briefed
- [ ] Release notes published
- [ ] Timing communicated

## Rollout Plan
- [ ] Gradual rollout strategy (if high risk)
- [ ] Monitoring plan during rollout
- [ ] Success criteria defined
- [ ] Rollback triggers identified
- [ ] On-call coverage arranged

## Post-Deployment
- [ ] Plan to verify in production
- [ ] Metrics to watch
- [ ] Timeline for verification
- [ ] When to consider "done"

Red Flags to Watch For:
- Rushed timeline
- Incomplete testing
- Uncertain rollback plan
- Unclear success metrics
- Deployment happening EOD Friday
- Not production-tested (migrations, config)

Questions to Answer:
1. What's the worst that could happen?
2. How will we know if it's working?
3. How quickly can we rollback?
4. Who needs to know about this?
5. What will we monitor during/after deployment?
```

## Tips
- Don't skip steps because you're in a hurry
- Have someone else review the checklist with you
- For high-risk changes, deploy early in the week
- Stay available after deployment to monitor
- Document what you checked for next time
- Learn from any issues that slip through
