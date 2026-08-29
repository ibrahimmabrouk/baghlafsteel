---
title: Baghlaf Steel — Strategic Framework Index
status: active
owner: project-owner
last_reviewed: 2026-08-29
---

# Baghlaf Steel — Strategic Framework Index

> Master index of the strategic-to-production framework for the Baghlaf Steel website project.

---

# 1. Purpose

This document provides the master map of the Baghlaf Steel strategic-to-production framework.

It explains:

- What each Part 1–18 defines
- How the parts relate to each other
- Which decisions are strategic versus factual
- Which documents should be consulted for specific tasks
- How the strategy flows into design, development, QA, and production

This document is primarily a **navigation and orientation layer**.

It should not duplicate the full content of the individual strategy documents.

---

# 2. Framework Status

**Framework:** Strategic-to-Production Framework

**Parts:** 1–18

**Strategic Framework Status:** Complete

**Current Project Phase:** Phase 19 — Foundation & Controlled Build

> The completion of Parts 1–18 means the strategic framework has been documented. It does not mean that every business fact, product, supply relationship, credential, or claim has been approved by Baghlaf management.

---

# 3. Framework Overview

The complete framework follows this progression:

```text
BUSINESS UNDERSTANDING
        ↓
MARKET & POSITIONING
        ↓
TRUST
        ↓
BUYER JOURNEY
        ↓
INFORMATION ARCHITECTURE
        ↓
CONTENT
        ↓
PRODUCT & SUPPLY MODEL
        ↓
VISUAL DIRECTION
        ↓
DESIGN SYSTEM
        ↓
UX
        ↓
TECHNICAL ARCHITECTURE
        ↓
AI DEVELOPMENT SYSTEM
        ↓
DELIVERY PROCESS
        ↓
QA
        ↓
PRODUCTION
        ↓
LAUNCH & MAINTENANCE
The parts are therefore sequential in logic, even though some may be revisited later.

---

# 4. Part-by-Part Index

---

## Part 1 — Company Identity

**File:**  
`docs/01-strategy/01-company-identity.md`

### Purpose

Defines the identity and high-level corporate understanding of Baghlaf Steel.

### Answers

- Who is Baghlaf Steel?
- What is the company?
- What is its intended public identity?
- What should distinguish the company from other Baghlaf-related entities?

### Feeds Into

- Positioning
- Trust
- Content
- About page
- Verification
- Brand direction

### Priority

**Foundational**

---

## Part 2 — Business Model

**File:**  
`docs/01-strategy/02-business-model.md`

### Purpose

Defines how Baghlaf Steel creates value and operates commercially.

### Core Principle

Baghlaf Steel is currently understood as a:

> **Steel trading and supply company, not a steel manufacturer.**

### Answers

- How does Baghlaf obtain steel?
- What role does Baghlaf play?
- How does the company connect buyers with supply?

### Feeds Into

- Product architecture
- Supply Network
- Buyer Journey
- Content
- Technical data model

### Priority

**Foundational / Business-Critical**

---

## Part 3 — Target Buyers

**File:**  
`docs/01-strategy/03-target-buyers.md`

### Purpose

Defines the primary audiences for the website.

### Primary Audience

**International B2B steel buyers**

### Answers

- Who visits?
- What are they trying to accomplish?
- What information do they need?
- What concerns might prevent conversion?

### Feeds Into

- UX
- Content
- Navigation
- Conversion
- SEO
- Requirement flow

### Priority

**Foundational**

---

## Part 4 — Positioning

**File:**  
`docs/01-strategy/04-positioning.md`

### Purpose

Defines how Baghlaf Steel should position itself in the market.

### Core Principle

The website should communicate Baghlaf's actual value without pretending to be a manufacturer.

### Answers

- Why Baghlaf?
- What makes the company relevant?
- What should international buyers remember?

### Feeds Into

- Messaging
- Homepage
- Why Baghlaf
- Content
- Visual identity

### Priority

**Strategic**

---

## Part 5 — Trust Architecture

**File:**  
`docs/01-strategy/05-trust-architecture.md`

### Purpose

Defines the digital trust and verification system.

### Core Principle

Verification is a core website function, not merely a footer item.

### Answers

- How does a buyer verify Baghlaf?
- What is the official digital identity?
- How should official contacts be represented?

### Feeds Into

- Verification page
- Homepage
- Contact
- Header
- Footer
- Email/domain strategy

### Priority

**Business-Critical**

---

## Part 6 — Buyer Journey & Conversion

**File:**  
`docs/01-strategy/06-buyer-journey-and-conversion.md`

### Purpose

Defines how a visitor moves from discovery to commercial engagement.

### Core Journey

```
Discover
   ↓
Understand
   ↓
Evaluate
   ↓
Verify
   ↓
Engage
```

### Primary Conversion

**Submit Steel Requirement**

### Primary Trust Action

**Verify Baghlaf**

### Feeds Into

- Homepage
- Navigation
- CTA system
- Requirement flow
- Analytics

### Priority

**Conversion-Critical**

---

## Part 7 — Information Architecture & Sitemap

**File:**  
`docs/01-strategy/07-information-architecture-and-sitemap.md`

### Purpose

Defines the structure of the public website.

### Core Areas

```
Home
Products
Supply Network
How We Work
Why Baghlaf
About
Verification
Resources
Contact
Submit Requirement
```

### Answers

- What pages exist?
- How are they connected?
- What does each page accomplish?

### Feeds Into

- Navigation
- URLs
- SEO
- Wireframes
- Technical routes

### Priority

**Structural**

---

## Part 8 — Content Strategy & Messaging

**File:**  
`docs/01-strategy/08-content-strategy-and-messaging.md`

### Purpose

Defines the language, messaging hierarchy, voice, terminology, and content principles.

### Core Principle

> **Clarity Before Persuasion**

### Content Formula

```
Fact
 ↓
Explanation
 ↓
Evidence
 ↓
Action
```

### Feeds Into

- Website copy
- Product pages
- Homepage
- SEO
- AI content generation
- Figma content layout

### Priority

**Content-Critical**

---

## Part 9 — Product & Supply Network

**File:**  
`docs/01-strategy/09-product-and-supply-network.md`

### Purpose

Defines how products, supply sources, manufacturers, buyers, and requirements relate to one another.

### Core Model

```
Buyer
 ↓
Requirement
 ↓
Baghlaf
 ↓
Supply Source
 ↓
Supply
```

### Critical Distinction

```
Product
≠
Supply Source
≠
Manufacturer
≠
Partner
```

### Feeds Into

- Product pages
- Supply Network
- Requirement form
- CMS/data model
- Database architecture

### Priority

**Business-Critical**

---

## Part 10 — Brand & Visual Direction

**File:**  
`docs/01-strategy/10-brand-and-visual-direction.md`

### Purpose

Defines how Baghlaf should look and feel.

### Recommended Direction

# Industrial Editorial

### Core Characteristics

- Industrial
- Precise
- International
- Saudi
- Refined
- Technical
- Restrained

### Explicitly Avoid

- Generic SaaS aesthetics
- AI-style gradients
- Excessive glassmorphism
- Decorative UI
- Manufacturer-implying imagery

### Feeds Into

- Figma
- Photography
- Typography
- Color
- UI design

### Priority

**Visual Foundation**

---

## Part 11 — Figma Design System

**File:**  
`docs/01-strategy/11-figma-design-system.md`

### Purpose

Defines the conceptual design-system architecture.

### Includes

- Tokens
- Typography
- Colors
- Spacing
- Grid
- Components
- Patterns
- States
- Responsive behavior
- RTL
- Accessibility

### Core Principle

> **Figma is the visual source of truth.**

### Feeds Into

- High-fidelity Figma
- Frontend components
- Design tokens
- Visual QA

### Priority

**Design-System Foundation**

---

## Part 12 — UX Wireframes & Page Experience

**File:**  
`docs/01-strategy/12-ux-wireframes-and-page-experience.md`

### Purpose

Defines how pages work before high-fidelity styling.

### Core UX Model

```
Understand
   ↓
Evaluate
   ↓
Verify
   ↓
Act
```

### Critical Flows

```
Homepage
  ↓
Product
  ↓
Requirement

Homepage
  ↓
Verification
  ↓
Contact
```

### Feeds Into

- Figma wireframes
- Page templates
- Interaction design
- Requirement UX
- Mobile UX

### Priority

**UX Foundation**

---

## Part 13 — Technical Architecture

**File:**  
`docs/01-strategy/13-technical-architecture.md`

### Purpose

Defines the technical implementation direction.

### Current Direction

```
Next.js
TypeScript
React
Tailwind CSS
```

with:

- Server-first architecture
- Structured content
- Secure forms
- SEO
- Localization
- RTL
- Testing
- CI/CD

### Feeds Into

- Repository structure
- Application architecture
- Components
- Data model
- Deployment

### Priority

**Technical Foundation**

---

## Part 14 — AI Agent Architecture & Project Memory

**File:**  
`docs/01-strategy/14-ai-agent-architecture-and-project-memory.md`

### Purpose

Defines how AI tools operate within the project.

### Core Principle

> **The repository is the project's long-term memory.**

### Includes

- AI agent roles
- Model routing
- Skills
- Project memory
- Figma MCP workflow
- AI guardrails
- Context strategy
- Verification
- Human approval

### Feeds Into

- `PROJECT_CONSTITUTION.md`
- `AGENTS.md`
- `CLAUDE.md`
- `/skills`
- Development workflow

### Priority

**AI Governance**

---

## Part 15 — Development Workflow & Delivery

**File:**  
`docs/01-strategy/15-development-workflow-and-delivery.md`

### Purpose

Defines how development work is executed and delivered.

### Core Workflow

```
Read
 ↓
Plan
 ↓
Implement
 ↓
Check
 ↓
Run
 ↓
Review
 ↓
Fix
 ↓
Commit
```

### Feeds Into

- Git workflow
- AI workflow
- Client review
- Scope management
- Delivery

### Priority

**Operational**

---

## Part 16 — QA, Testing & Visual Validation

**File:**  
`docs/01-strategy/16-qa-testing-and-visual-validation.md`

### Purpose

Defines how the website is verified.

### QA Dimensions

```
Business
Content
Visual
Functional
Responsive
RTL
Accessibility
SEO
Performance
Security
```

### Core Principle

> **Never trust an implementation without verification.**

### Feeds Into

- Test plan
- Visual regression
- Release checklist
- CI
- Production readiness

### Priority

**Quality-Critical**

---

## Part 17 — Deployment, Security & Production

**File:**  
`docs/01-strategy/17-deployment-security-and-production.md`

### Purpose

Defines how the website is securely deployed and operated.

### Includes

- Hosting
- Domain
- DNS
- HTTPS
- Email security
- Secrets
- Backups
- Monitoring
- Production access
- Rollback
- Incident response

### Feeds Into

- Deployment configuration
- Operations documentation
- Production environment

### Priority

**Production-Critical**

---

## Part 18 — Launch, Handoff & Maintenance

**File:**  
`docs/01-strategy/18-launch-handoff-and-maintenance.md`

### Purpose

Defines what happens after implementation.

### Includes

- Launch
- Client approval
- Handoff
- Ownership
- Documentation
- Maintenance
- Monitoring
- Optimization
- Version 2

### Feeds Into

- Release process
- Client handoff
- Operations
- Future roadmap

### Priority

**Operational / Long-Term**

---

# 5. Framework Dependencies

The parts should be understood as a dependency chain.

```
Part 1 — Identity
      ↓
Part 2 — Business Model
      ↓
Part 3 — Target Buyers
      ↓
Part 4 — Positioning
      ↓
Part 5 — Trust
      ↓
Part 6 — Buyer Journey
      ↓
Part 7 — Information Architecture
      ↓
Part 8 — Content
      ↓
Part 9 — Products & Supply
      ↓
Part 10 — Visual Direction
      ↓
Part 11 — Design System
      ↓
Part 12 — UX
      ↓
Part 13 — Technical Architecture
      ↓
Part 14 — AI System
      ↓
Part 15 — Development
      ↓
Part 16 — QA
      ↓
Part 17 — Production
      ↓
Part 18 — Launch & Maintenance
```

---

# 6. Important Cross-Part Relationships

Some areas intentionally affect multiple parts.

## Trust

Primarily defined in Part 5.

Also affects:

- Part 6 — Buyer Journey
- Part 7 — Information Architecture
- Part 8 — Content
- Part 10 — Visual Direction
- Part 12 — UX
- Part 17 — Production
- Part 18 — Maintenance

---

## Products & Supply Sources

Primarily defined in Part 9.

Also affects:

- Part 2 — Business Model
- Part 6 — Conversion
- Part 8 — Content
- Part 12 — UX
- Part 13 — Data Architecture
- Part 16 — QA

---

## Figma

Primarily defined in Part 11.

Also affects:

- Part 10 — Visual Direction
- Part 12 — UX
- Part 14 — AI/Figma workflow
- Part 15 — Development
- Part 16 — Visual QA

---

## AI

Primarily defined in Part 14.

Also affects:

- Part 8 — Content generation
- Part 11 — Design implementation
- Part 13 — Technical architecture
- Part 15 — Development
- Part 16 — QA

---

# 7. Strategy vs Source of Truth

The strategy documents define:

> **What we intend to build and why.**

They do not automatically establish factual truth about Baghlaf.

Actual company information should come from:

```
docs/02-business/
```

Examples:

```
company-facts.md
approved-products.md
approved-supply-sources.md
approved-contacts.md
claims-matrix.md
credentials.md
terminology.md
```

Therefore:

```
Strategy
≠
Business Fact
```

---

# 8. Strategy vs Decisions

The strategy describes the recommended direction.

The decision register records decisions that have actually been made.

```
Strategy
   ↓
Question / Choice
   ↓
Decision
   ↓
docs/09-decisions/
```

A decision may therefore confirm, modify, or reject part of the strategic recommendation.

---

# 9. Strategy vs Design

The strategy defines:

> What the website needs to communicate and accomplish.

Figma defines:

> How that approved experience looks.

The relationship is:

```
Strategy
   ↓
Content / UX
   ↓
Figma
```

Figma should not contradict approved business requirements.

---

# 10. Strategy vs Code

The code is an implementation of the approved strategy, design, and architecture.

```
Strategy
   ↓
Design
   ↓
Architecture
   ↓
Code
```

If code conflicts with approved strategy or design, the conflict must be reviewed rather than silently ignored.

---

# 11. Strategy vs AI

AI agents consume the strategic framework as context.

They must not treat the strategy as permission to invent missing business information.

Correct:

```
Strategy
+
Approved Business Facts
+
Figma
+
Architecture
=
AI Implementation Context
```

Incorrect:

```
Strategy
=
Everything is confirmed
```

---

# 12. Document Selection Guide

Use this guide when deciding what to read.

|Task|Primary Documents|
|---|---|
|Understand company|Part 1 + `company-facts.md`|
|Understand business model|Part 2|
|Understand buyers|Part 3|
|Write homepage messaging|Part 4 + Part 8|
|Build verification|Part 5 + approved contacts|
|Design conversion flow|Part 6 + Part 12|
|Build navigation|Part 7|
|Write website copy|Part 8 + business facts|
|Build products|Part 9 + approved products|
|Design visual system|Part 10 + Part 11|
|Build wireframes|Part 12|
|Implement frontend|Part 13 + Part 11|
|Use AI|Part 14 + relevant skill|
|Deliver feature|Part 15|
|Test feature|Part 16|
|Deploy|Part 17|
|Launch / handoff|Part 18|

---

# 13. AI Reading Strategy

AI agents should not automatically load Parts 1–18 for every task.

Instead:

```
Global
 ↓
Project Overview
 ↓
Project Status
 ↓
Project Constitution
 ↓
Relevant Strategy Part
 ↓
Relevant Business Data
 ↓
Relevant Decision
 ↓
Relevant Skill
 ↓
Task
```

This keeps context focused.

---

# 14. Example: Product Page Task

For:

> "Implement a Rebar product detail page."

The agent should primarily read:

```
Part 9
Product architecture

Part 12
Product UX

Part 13
Technical architecture

Part 11
Figma design system

Approved Product Data
Rebar

Relevant Figma frame

Relevant skills:
- frontend-design
- figma-implementation
- nextjs
- responsive-design
- rtl-arabic
- seo
```

It should not need every strategy document.

---

# 15. Example: Verification Page Task

For:

> "Implement the verification page."

Read:

```
Part 5
Trust architecture

Part 8
Trust messaging

Part 12
Verification UX

Part 13
Technical architecture

Approved contacts
Claims matrix
Verification content
Figma frame

Relevant skills:
- frontend-design
- figma-implementation
- accessibility
- seo
- rtl-arabic
```

---

# 16. Example: Requirement Form Task

For:

> "Implement the steel requirement form."

Read:

```
Part 6
Buyer journey

Part 9
Requirement/product architecture

Part 12
Requirement UX

Part 13
Technical architecture

Part 16
QA

Approved commercial workflow
Approved requirement fields

Relevant skills:
- forms
- accessibility
- responsive-design
- rtl-arabic
- visual-qa
```

---

# 17. Framework Completion Does Not Mean Project Completion

The following distinction must remain explicit:

```
Strategic Framework
        ↓
COMPLETE ✅
        ↓
Business Data
        ↓
STILL BEING CONFIRMED
        ↓
Design
        ↓
IMPLEMENTATION
        ↓
QA
        ↓
PRODUCTION
```

The strategy is the blueprint.

It is not the finished website.

---

# 18. Current Project Position

The project has completed the strategic planning stage.

Current position:

```
Parts 1–18
      ↓
Documented ✅

Repository Organization
      ↓
In Progress 🔵

Business Source of Truth
      ↓
Awaiting Management 🟡

Project Governance
      ↓
Being Built 🔵

Figma Foundations
      ↓
Next Major Design Stage

Technical Bootstrap
      ↓
After Governance / Design Preparation
```

---

# 19. Current Strategic Baseline

The following principles should currently be treated as the project's main strategic baseline:

```
1. Baghlaf Steel is a steel trading and supply company.

2. Baghlaf Steel must not be presented as a manufacturer
   unless management explicitly confirms a change.

3. The primary target audience is international B2B buyers.

4. Trust and verification are core website requirements.

5. The primary conversion is:
   Submit Steel Requirement.

6. Products and supply sources are separate entities.

7. The recommended visual direction is:
   Industrial Editorial.

8. Figma is the visual source of truth.

9. English and Arabic are first-class website experiences.

10. The repository is the project's persistent memory.

11. AI assists implementation but does not override
    business truth or human approval.

12. No production release passes without the
    Baghlaf Release Gate.
```

Some of these remain subject to formal management confirmation where explicitly marked elsewhere in the project.

---

# 20. Future Strategy Changes

If the strategy changes:

```
Identify Change
      ↓
Determine Impact
      ↓
Update Relevant Strategy
      ↓
Create / Update Decision
      ↓
Update Design / Architecture if required
      ↓
Update Implementation if required
      ↓
QA
```

Do not silently modify one document while leaving dependent documents inconsistent.

---

# 21. Framework Governance

The strategic framework should be:

- Version controlled
- Linked through Obsidian
- Stored in GitHub
- Reviewed when major business decisions change
- Referenced by AI agents
- Treated as a living strategic system

Historical versions should remain available through Git.

---

# 22. Definition of Done for the Framework

The strategic framework is considered structurally complete when:

```
✓ Parts 1–18 exist
✓ Every Part has a clear purpose
✓ Parts have consistent naming
✓ Cross-part relationships are documented
✓ Strategy is separated from business facts
✓ Decisions are separated from recommendations
✓ AI can navigate the framework
✓ Documentation is version controlled
✓ Current status is documented
```

---

# 23. Master Project Flow

The complete project can now be represented as:

```
                 BAGHLAF STEEL
                       │
                       ▼
               BUSINESS TRUTH
                       │
                       ▼
                STRATEGIC FRAMEWORK
                   Parts 1–18
                       │
                       ▼
              PROJECT GOVERNANCE
                       │
                       ▼
               FIGMA + UX DESIGN
                       │
                       ▼
              TECHNICAL FOUNDATION
                       │
                       ▼
                 AI DEVELOPMENT
                       │
                       ▼
                      QA
                       │
                       ▼
                   PRODUCTION
                       │
                       ▼
              LAUNCH + HANDOFF
                       │
                       ▼
                 MAINTENANCE
```

---

# 24. North Star

The strategic framework exists to support one final outcome:

> **Create an official, credible, high-quality digital presence through which international buyers can understand Baghlaf Steel, verify its identity, evaluate its supply capability, and confidently begin a legitimate commercial conversation.**

---

# 25. Related Project Documents

## Project Orientation

- [[project-overview|Project Overview]]
- [[project-status|Project Status]]
- [[project-glossary|Project Glossary]]

## Strategy

- [[../01-strategy/01-company-identity|Part 1 — Company Identity]]
- [[../01-strategy/02-business-model|Part 2 — Business Model]]
- [[../01-strategy/03-target-buyers|Part 3 — Target Buyers]]
- [[../01-strategy/04-positioning|Part 4 — Positioning]]
- [[../01-strategy/05-trust-architecture|Part 5 — Trust Architecture]]
- [[../01-strategy/06-buyer-journey-and-conversion|Part 6 — Buyer Journey & Conversion]]
- [[../01-strategy/07-information-architecture-and-sitemap|Part 7 — Information Architecture]]
- [[../01-strategy/08-content-strategy-and-messaging|Part 8 — Content Strategy]]
- [[../01-strategy/09-product-and-supply-network|Part 9 — Product & Supply Network]]
- [[../01-strategy/10-brand-and-visual-direction|Part 10 — Brand & Visual Direction]]
- [[../01-strategy/11-figma-design-system|Part 11 — Figma Design System]]
- [[../01-strategy/12-ux-wireframes-and-page-experience|Part 12 — UX Wireframes]]
- [[../01-strategy/13-technical-architecture|Part 13 — Technical Architecture]]
- [[../01-strategy/14-ai-agent-architecture-and-project-memory|Part 14 — AI Agent Architecture]]
- [[../01-strategy/15-development-workflow-and-delivery|Part 15 — Development Workflow]]
- [[../01-strategy/16-qa-testing-and-visual-validation|Part 16 — QA]]
- [[../01-strategy/17-deployment-security-and-production|Part 17 — Deployment & Production]]
- [[../01-strategy/18-launch-handoff-and-maintenance|Part 18 — Launch & Maintenance]]

## Governance

- [[../../PROJECT_CONSTITUTION|Project Constitution]]
- [[../../AGENTS|Agent Instructions]]
- [[../../CLAUDE|Claude Instructions]]

## Business Source of Truth

- [[../02-business/company-facts|Company Facts]]
- [[../02-business/approved-products|Approved Products]]
- [[../02-business/approved-supply-sources|Approved Supply Sources]]
- [[../02-business/approved-contacts|Approved Contacts]]
- [[../02-business/claims-matrix|Claims Matrix]]
- [[../02-business/terminology|Terminology]]

````

### One thing I recommend strongly

Keep this file **stable**.

Don't turn it into another running status page. We already have:

```text
project-overview.md
→ What is the project?

project-status.md
→ Where are we now?

strategic-framework-index.md
→ How is the framework organized?

project-glossary.md
→ What do our terms mean?
````

That separation is excellent for both **Obsidian navigation and AI context management**.

### And I would make one small change to the folder itself

Add:

```
docs/01-strategy/README.md
```

This can be very small and simply say:

> Parts 1–18 constitute the strategic-to-production framework. Start with `../00-project/strategic-framework-index.md` for the master map.

That gives anyone who enters the strategy folder a clear entry point.