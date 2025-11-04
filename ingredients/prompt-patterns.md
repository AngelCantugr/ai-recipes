# Reusable Prompt Patterns 🧩

## Purpose
Common prompt structures and techniques to enhance any AI interaction

## Prompt Enhancement Patterns

### 1. Role Assignment Pattern
Gives the AI specific expertise and perspective

```
You are a [specific role] with expertise in [domain].
Your background includes [relevant experience].
When analyzing this, consider [specific perspective].
```

**Example:**
```
You are a Senior Site Reliability Engineer with 10 years of experience 
in high-scale distributed systems. When analyzing this architecture, 
consider operational complexity, failure modes, and observability.
```

---

### 2. Context Layering Pattern
Provides structured context for better responses

```
Context:
- Domain: [technical domain]
- Constraints: [limitations]
- Goals: [objectives]
- Audience: [who will use this]
- Prior attempts: [what's been tried]
```

---

### 3. Output Format Pattern
Specifies exact structure of response

```
Please provide your response in this format:
1. [Section 1 name]: [what to include]
2. [Section 2 name]: [what to include]
3. [Section 3 name]: [what to include]

For code, use this structure:
```language
// Comment style
code here
```
```

---

### 4. Step-by-Step Reasoning Pattern
Forces methodical analysis

```
Before providing your answer, think through this step-by-step:
1. First, [initial analysis step]
2. Then, [second step]
3. Next, [third step]
4. Finally, [conclusion step]

Show your reasoning for each step.
```

---

### 5. Multiple Perspectives Pattern
Gets diverse viewpoints

```
Analyze this from three perspectives:
1. [Perspective 1]: [focus area]
2. [Perspective 2]: [focus area]
3. [Perspective 3]: [focus area]

What does each perspective reveal that others miss?
```

**Example:**
```
Analyze this architecture from three perspectives:
1. Developer Experience: ease of development, debugging, testing
2. Operations: deployment, monitoring, incident response
3. Cost: infrastructure, maintenance, scaling costs
```

---

### 6. Constraint-Based Pattern
Forces creative solutions within boundaries

```
Design [solution] with these strict constraints:
- Must: [required features]
- Cannot: [forbidden approaches]
- Limited to: [resource limits]

Within these constraints, what's the best approach?
```

---

### 7. Question Chain Pattern
Builds deeper understanding through sequential questions

```
Help me understand [topic] by answering these questions in order:
1. [Foundational question]
2. [Building question]
3. [Application question]
4. [Advanced question]

Each answer should inform the next question.
```

---

### 8. Comparison Matrix Pattern
Systematic evaluation of options

```
Compare [Option A], [Option B], and [Option C] across:
- [Criterion 1]
- [Criterion 2]
- [Criterion 3]

Create a matrix showing how each option performs on each criterion.
Then recommend the best choice with clear reasoning.
```

---

### 9. Red Team Pattern
Challenges ideas to find weaknesses

```
I'm proposing [solution/approach]. 

Your job is to red-team this proposal:
1. What are the weakest points?
2. What assumptions might be wrong?
3. What could go wrong?
4. What am I not considering?
5. How would you attack this plan?

Be thorough and critical.
```

---

### 10. Refinement Loop Pattern
Iteratively improves outputs

```
[Initial request]

After your response, I'll provide feedback and ask you to refine.
Focus on [specific quality] in your refinements.

Iteration 1: [initial attempt]
Feedback: [what to improve]
Iteration 2: [refined version]
```

---

### 11. Example-Based Pattern
Teaches through concrete examples

```
I need help with [task]. 

Please:
1. Show me 3 examples ranging from simple to complex
2. Explain the pattern in each example
3. Point out key differences between them
4. Help me apply the pattern to my specific case: [your case]
```

---

### 12. Tradeoff Analysis Pattern
Explicit evaluation of costs and benefits

```
For [decision/approach], analyze:

Pros:
- [Benefit 1]: [why it matters]
- [Benefit 2]: [why it matters]

Cons:
- [Cost 1]: [why it matters]
- [Cost 2]: [why it matters]

Tradeoffs:
- [What we gain vs what we lose]

Under what conditions is this the right choice?
```

---

## Combining Patterns

You can combine multiple patterns for powerful prompts:

```
[Role Assignment]
You are a Staff Software Engineer specializing in data systems.

[Context Layering]
Context:
- System handles 1M requests/day
- Team of 5 engineers
- Legacy codebase from 2015

[Multiple Perspectives + Comparison Matrix]
Analyze three database migration strategies from cost, risk, and 
performance perspectives. Create a comparison matrix.

[Output Format]
Provide:
1. Matrix comparing strategies
2. Risk assessment for each
3. Recommendation with reasoning
```

---

## Tips for Crafting Prompts

1. **Be Specific**: Vague requests get vague responses
2. **Provide Context**: Background makes answers relevant
3. **State Constraints**: Limitations guide better solutions
4. **Request Format**: Structure helps you use the output
5. **Show Examples**: Examples clarify what you want
6. **Iterate**: Refine based on responses
7. **Check Output**: Verify AI responses match your needs
8. **Save Patterns**: Reuse what works well
