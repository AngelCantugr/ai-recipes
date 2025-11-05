# Glossary of Prompt Engineering Terms 📖

Quick reference for key concepts and terminology in prompt engineering and context engineering.

---

## Core Concepts

### Prompt
The input text provided to an AI system to elicit a specific response. Includes instructions, context, examples, and output format specifications.

### Context
Background information provided in a prompt that shapes the AI's response. Includes relevant facts, constraints, requirements, and environmental details.

### Token
The basic unit of text processing in AI models. Roughly equivalent to a word or word fragment. Both input (prompt) and output (response) consume tokens.

### Context Window
The maximum number of tokens an AI model can process in a single interaction (input + output combined). Current models range from ~4K to 200K tokens.

### Prompt Engineering
The practice of designing inputs to AI systems that reliably produce desired outputs. Involves structuring prompts, providing context, and applying patterns.

### Context Engineering
The discipline of designing how information is provided to AI systems. Focuses on information architecture, token efficiency, and relevance.

---

## Prompt Patterns

### Role Assignment
Pattern where you give the AI a specific role, expertise, or perspective to frame its responses.
```
Example: "You are a Senior SRE with expertise in distributed systems..."
```

### Chain-of-Thought (CoT)
Pattern that asks the AI to show its reasoning process step-by-step before providing conclusions.
```
Example: "Think through this step-by-step: 1. First... 2. Then... 3. Finally..."
```

### Few-Shot Learning
Providing examples of desired input-output pairs to teach the AI a pattern or format.
```
Example: "Example 1: Input → Output. Example 2: Input → Output. Now: [your input]"
```

### Zero-Shot
Making a request without providing examples, relying on the AI's training and instructions alone.

### Output Formatting
Explicitly specifying the structure, format, or organization of the desired response.
```
Example: "Provide in this format: 1. Issue: [desc] 2. Fix: [desc] 3. Priority: [high/med/low]"
```

### Constraint Specification
Defining boundaries, requirements, and limitations that shape the solution space.
```
Example: "Must: support 10K users. Must not: exceed $500/month. Limited to: AWS services"
```

### Task Decomposition
Breaking complex tasks into clear sequential steps or phases.
```
Example: "Approach systematically: 1. Analyze requirements 2. Design solution 3. Identify risks"
```

---

## Advanced Patterns

### Tree of Thought (ToT)
Pattern exploring multiple reasoning paths simultaneously, then comparing and selecting the best.

### Self-Consistency
Generating multiple solutions via different methods, then identifying the most consistent answer.

### Meta-Prompting
Having the AI help design or refine the prompt itself before tackling the main task.

### Perspective-Taking
Analyzing from multiple expert viewpoints (e.g., security engineer, SRE, product engineer).

### Socratic Prompting
Learning through guided questioning rather than direct explanation.

### Refinement Loop
Explicitly iterating on outputs with feedback until quality criteria are met.

### Adversarial Prompting (Red Teaming)
Challenging ideas to find weaknesses, risks, and gaps.

### Analogical Reasoning
Solving problems by finding analogies to similar challenges in other domains.

---

## Context Concepts

### Information Hierarchy
Organizing context by importance: critical constraints → requirements → preferences → background.

### Context Layering
Structuring context in logical layers (high-level → details) for efficient processing.

### Progressive Disclosure
Starting with essential context, adding detail only as needed in subsequent interactions.

### Relevance Filtering
Including only context that influences the decision, approach, or outcome.

### Token Budget
The allocation of available tokens between prompt (input) and response (output).

### Token Efficiency
Achieving desired results with minimal token consumption. Ratio of value to tokens used.

### Context Compression
Reducing token count while maintaining essential information and clarity.

---

## Quality Concepts

### Prompt Clarity
How unambiguous and specific a prompt's instructions are.

### Prompt Effectiveness
Whether a prompt reliably produces desired results across varied scenarios.

### Prompt Robustness
How well a prompt handles edge cases and variations in input.

### Output Consistency
Producing similar quality results for similar prompts over multiple tries.

### Context Completeness
Having all information necessary for the AI to provide a good response.

### Context Conciseness
Using the minimum tokens needed while maintaining completeness.

---

## Problem Patterns

### Context Dumping
Providing too much irrelevant information in a prompt.

### Context Starvation
Not providing enough necessary context for a good response.

### Ambiguity
Using vague or unclear language that can be interpreted multiple ways.

### Buried Lead
Hiding critical information deep in the prompt instead of front-loading it.

### Scope Creep
Trying to accomplish too many unrelated tasks in a single prompt.

### Prompt Drift
Losing coherence and focus across multi-turn conversations.

### Over-Engineering
Making prompts unnecessarily complex beyond what's needed for results.

### False Precision
Requesting impossible specificity (e.g., "exactly how many milliseconds...").

---

## Response Patterns

### Hallucination
When AI generates plausible-sounding but false or fabricated information.

### Hedging
When AI provides overly cautious responses with many qualifiers.

### Verbosity
Unnecessarily long responses that could be more concise.

### Generic Response
Output that lacks specificity or doesn't address the particular context.

### Format Drift
Response that doesn't follow the requested output structure.

---

## Technical Terms

### Latency
Time from submitting a prompt to receiving the response.

### Throughput
Number of prompts that can be processed per unit time.

### Temperature
Parameter controlling randomness in AI responses (higher = more creative/random, lower = more focused/deterministic).

### Top-p (Nucleus Sampling)
Parameter controlling response diversity by considering only the most likely tokens.

### Max Tokens
Parameter limiting the length of the AI's response.

### Stop Sequences
Strings that, when generated, cause the AI to stop generating further text.

---

## Measurement Terms

### Token Count
Number of tokens in prompt, response, or combined.

### Token Per Second (TPS)
Generation speed measurement.

### Cost Per Token
Pricing unit for AI API usage (usually different for input vs output tokens).

### Context Utilization
Percentage of available context window used by prompt + response.

### Response Quality
Subjective measure of how well response meets requirements.

### Iteration Count
Number of prompt refinements needed to achieve desired result.

---

## Process Terms

### Prompt Template
Reusable prompt structure with placeholders for customization.

### Prompt Library
Collection of tested, effective prompts for common tasks.

### Prompt Chain
Sequence of prompts where outputs feed into subsequent prompts.

### Prompt Optimization
Process of improving prompt effectiveness and efficiency.

### A/B Testing
Comparing two prompt versions to determine which performs better.

### Prompt Versioning
Tracking changes to prompts over time.

---

## Model-Specific Terms

### System Prompt
Special instructions that set model behavior across a session (when supported).

### User Message
Content provided by the human in a conversation.

### Assistant Message
Content generated by the AI in a conversation.

### Function Calling (Tool Use)
Capability where AI can invoke predefined functions or APIs.

### Structured Output
When model returns JSON or other formatted data instead of natural language.

---

## Use Case Patterns

### Code Generation
Prompting for creating new code from requirements.

### Code Review
Prompting for analyzing existing code for issues or improvements.

### Debugging
Prompting to identify and fix code problems.

### Architecture Design
Prompting for system design and technical decisions.

### Refactoring
Prompting to improve code structure while maintaining behavior.

### Documentation
Prompting to generate explanatory content for code or systems.

### Learning/Teaching
Prompting to explain concepts or create learning materials.

---

## Quality Indicators

### ✅ Good Prompt Indicators
- Specific and concrete
- Provides necessary context
- States constraints clearly
- Specifies output format
- Uses measurable criteria
- Front-loads critical info

### ❌ Poor Prompt Indicators
- Vague or ambiguous
- Missing context
- No output format
- Undefined terms
- Buried requirements
- Multiple unrelated tasks

---

## Quick Reference

**When to use what**:

- **Role Assignment**: Need specific expertise perspective
- **Chain-of-Thought**: Complex reasoning required
- **Few-Shot**: Pattern learning from examples
- **Constraints**: Need to narrow solution space
- **Task Decomposition**: Complex multi-step problems
- **Output Formatting**: Need consistent structure
- **Perspective-Taking**: Cross-functional decisions
- **Adversarial**: Risk assessment, finding flaws

---

## Related Resources

- [Fundamentals](../prompt-engineering/01-fundamentals.md) - Core concepts in depth
- [Advanced Patterns](../prompt-engineering/02-advanced-patterns.md) - Pattern details
- [Context Design](../context-engineering/01-context-design.md) - Context concepts
- [Prompt Patterns](../../ingredients/prompt-patterns.md) - Quick pattern reference

---

**Note**: This glossary covers terms commonly used in prompt engineering and context engineering. AI/ML field evolves rapidly; new terms and patterns emerge regularly. 📚
