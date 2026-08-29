---
title: Baghlaf Steel — Project Overview
status: active
owner: project-owner
last_reviewed: 2026-08-29
---
````
# Baghlaf Steel — Project Overview

> The high-level orientation document for the Baghlaf Steel website project.

---

# 1. Project Identity

## Project Name

**Baghlaf Steel Website**

## Company

**Baghlaf Steel**

## Country

**Saudi Arabia**

## Business Type

**Steel Trading & Supply**

## Primary Market

**International B2B**

## Primary Domain Direction

`baghlaf.com.sa`

> Domain status and final approval are tracked separately in the project's decision records.

---

# 2. Project Purpose

The purpose of this project is to design and build a professional, trustworthy, international-facing website for Baghlaf Steel.

The website must:

1. Clearly explain what Baghlaf Steel is and what it does.
2. Establish a strong and verifiable digital identity.
3. Reduce confusion caused by misinformation, unauthorized intermediaries, or websites claiming to represent Baghlaf Steel.
4. Clearly communicate Baghlaf's role as a **steel trading and supply company**, not a steel manufacturer.
5. Present the company's products and supply capabilities accurately.
6. Give international buyers a clear path to submit serious steel requirements.
7. Provide a professional foundation that can evolve into future commercial systems.

---

# 3. Core Business Model

Baghlaf Steel operates as a **trading and supply company**.

The current project understanding is:

```text
International Buyer
        ↓
Buyer Requirement
        ↓
Baghlaf Steel
        ↓
Requirement Assessment
        ↓
Saudi Supply Sourcing / Coordination
        ↓
Commercial Coordination
        ↓
Supply
        ↓
International Buyer
````

Baghlaf Steel is **not to be presented as the manufacturer of the steel** unless management explicitly confirms otherwise.

External manufacturers and supply sources must be represented according to their verified relationship with Baghlaf Steel.

---

# 4. Primary Business Value

The website should communicate Baghlaf's value through:

- Access to Saudi steel supply
- Requirement-based sourcing
- Commercial coordination
- International B2B focus
- Transparent and verifiable corporate identity

The preferred principle is:

> **Proof over slogans.**

---

# 5. Primary Buyer

The primary website audience is:

> **International B2B steel buyers**

Important visitor types include:

- International procurement professionals
- Steel / commodity buyers
- Industrial buyers
- Buyers with substantial-volume requirements
- New visitors attempting to verify Baghlaf Steel
- Existing business contacts returning for product or contact information

---

# 6. Primary Buyer Questions

The website should make the answers to these questions easy to find:

```
Who is Baghlaf Steel?

What exactly does Baghlaf Steel do?

Is Baghlaf Steel a manufacturer?

What products can Baghlaf potentially supply?

Where does the steel come from?

How does Baghlaf handle a requirement?

Can I verify that this is the official company?

How do I contact the official Baghlaf team?

How do I submit a steel requirement?
```

---

# 7. Primary Website Conversion

## Primary Conversion

**Submit Steel Requirement**

The website's main commercial objective is to generate qualified steel requirements rather than generic contact messages.

## Primary Trust Action

**Verify Baghlaf**

Verification is a first-class website function because corporate identity and authenticity are strategically important to the business.

## Supporting Actions

- Explore Products
- View Supply Network
- Learn How We Work
- Contact Baghlaf

---

# 8. Core Website Architecture

The current recommended launch structure is:

```
Home
│
├── Products
│   ├── Product Category
│   └── Product Detail
│
├── Supply Network
│
├── How We Work
│
├── Why Baghlaf
│
├── About
│
├── Verification
│
├── Resources
│
├── Contact
│
└── Submit Requirement
```

The final sitemap is documented in:

`docs/01-strategy/07-information-architecture-and-sitemap.md`

---

# 9. Trust Architecture

Trust is a core product requirement.

The website should establish a verifiable identity through:

```
Baghlaf Steel
      ↓
Official Website
      ↓
baghlaf.com.sa
      ↓
Official Email Domain
      ↓
Official Phone / WhatsApp
      ↓
Official Office
      ↓
Official Social Profiles
      ↓
Authorized Representatives
```

The dedicated verification experience should explain how buyers can confirm they are dealing with the genuine Baghlaf Steel company.

---

# 10. Product & Supply Model

Products and supply sources are separate entities.

```
Product
   ↕
Supply Source
   ↕
Baghlaf Steel
   ↕
Buyer Requirement
```

A product does not imply ownership of a manufacturing facility.

A supply source does not automatically mean:

- Partner
- Supplier
- Authorized Distributor
- Exclusive Partner

Relationship terminology must be verified before public use.

---

# 11. Product Rules

Only approved products may appear publicly.

Product information should be based on authoritative business data, including where available:

- Product name
- Category
- Grade
- Standard
- Form
- Dimensions
- Technical characteristics
- Applications
- Approved documentation
- Approved supply information

Never infer a product, grade, specification, or availability from general steel-industry knowledge.

---

# 12. Supply Source Rules

Supply sources must be represented using the exact relationship approved by management.

Before publishing a supply source, verify:

```
Source identity
Relationship type
Product relationship
Public disclosure permission
Logo permission
Supporting evidence
Management approval
```

Do not convert a weak relationship into stronger marketing language.

---

# 13. Brand & Visual Direction

The recommended visual direction is:

# Industrial Editorial

The visual identity should communicate:

- Industrial credibility
- Commercial maturity
- Saudi identity
- International confidence
- Technical precision
- Digital trust

The website should feel:

> **Strong, precise, premium, industrial, and credible.**

It should not feel like:

- A generic SaaS site
- An AI-generated template
- A technology startup
- A futuristic/cyber interface
- A steel manufacturer's website when Baghlaf is not the manufacturer

---

# 14. Design Principles

The visual system should favor:

- Strong typography
- Structured grids
- Generous whitespace
- Authentic industrial/trade imagery
- Technical information
- Restrained color
- Purposeful motion
- Consistent components

Avoid:

- Excessive gradients
- Glassmorphism
- Decorative blobs
- Excessive rounded cards
- Random 3D graphics
- Generic AI aesthetics
- Repetitive card grids

Figma is the visual source of truth for approved designs.

---

# 15. Languages

The website should support:

- English
- Arabic

Arabic is a first-class experience.

RTL must be designed into the system from the beginning rather than patched onto the finished English site.

---

# 16. Technical Direction

Current technical direction:

```
Next.js
TypeScript
React
Tailwind CSS
```

with:

- Server-first rendering approach
- Structured content
- Reusable components
- Schema-based validation
- Secure server-side operations
- SEO-ready architecture
- Bilingual / RTL support
- Automated testing
- Git-based deployment

Detailed technical decisions are documented in:

`docs/01-strategy/13-technical-architecture.md`

---

# 17. AI Development Model

AI is an **engineering accelerator**, not the authority over the project.

The preferred model is:

```
Human Strategy
      ↓
Approved Design / Architecture
      ↓
AI Implementation
      ↓
Automated Checks
      ↓
Human Verification
      ↓
Client Approval
      ↓
Production
```

The repository is the project's long-term memory.

Do not rely on conversation history as the primary source of project knowledge.

---

# 18. AI Source-of-Truth Hierarchy

When information conflicts, use this priority:

```
1. Management-approved business facts
2. PROJECT_CONSTITUTION.md
3. Approved Figma
4. Approved project decisions
5. Detailed project documentation
6. Existing implementation
7. AI assumptions / suggestions
```

If a conflict cannot be resolved:

> **Do not guess. Flag it for human review.**

---

# 19. AI Non-Negotiable Rules

AI agents must never:

- Invent company facts.
- Invent products.
- Invent specifications.
- Invent certifications.
- Invent customers or testimonials.
- Invent supplier/manufacturer relationships.
- Describe Baghlaf as a manufacturer without explicit approval.
- Convert "supply source" into "partner" without evidence.
- Infer current product availability.
- Publish unapproved contact information.
- Publish unapproved legal or ownership claims.
- Expose sensitive buyer data.
- Introduce unnecessary dependencies.
- Redesign approved Figma without authorization.
- Make large unrelated refactors during scoped tasks.

When information is missing:

> **Mark it as needing verification.**

---

# 20. Standard AI Workflow

For meaningful development tasks:

```
READ
  ↓
UNDERSTAND
  ↓
PLAN
  ↓
IMPLEMENT
  ↓
TYPECHECK
  ↓
LINT
  ↓
TEST
  ↓
BROWSER REVIEW
  ↓
VISUAL REVIEW
  ↓
FIX
  ↓
DOCUMENT
  ↓
COMMIT
```

The agent should not report a task as complete merely because the code compiles.

---

# 21. Development Principles

The development workflow should favor:

- Small changes
- Reusable components
- Existing design tokens
- Minimal safe diffs
- Clear Git history
- Automated checks
- Continuous QA
- Documented decisions

Preferred rule:

> **Reuse before create.**

---

# 22. Quality Standard

The website must be evaluated across:

```
Business Accuracy
Content Accuracy
Visual Accuracy
Functional Correctness
Responsive Behavior
Arabic / RTL
Accessibility
SEO
Performance
Security
```

Critical business and trust issues must be resolved before production.

---

# 23. Baghlaf Release Gate

No production release should proceed until the required checks pass:

```
Business QA
      ↓
Content QA
      ↓
Design QA
      ↓
Functional QA
      ↓
Responsive QA
      ↓
RTL QA
      ↓
Accessibility QA
      ↓
SEO QA
      ↓
Performance QA
      ↓
Security QA
      ↓
Client Approval
      ↓
Production
```

---

# 24. Current Project Phase

## Phase 19 — Foundation & Controlled Build

The strategic-to-production framework is complete.

Current focus:

```
Repository Organization
        ↓
Project Governance
        ↓
Business Source of Truth
        ↓
AI Instructions
        ↓
Figma Foundations
        ↓
Technical Bootstrap
        ↓
Golden Components
        ↓
First End-to-End Flow
```

---

# 25. Current Project Status

## Completed

- Business and website strategy Parts 1–18
- Initial GitHub repository
- Obsidian documentation environment
- Strategic direction
- Trust architecture
- Buyer journey
- Information architecture
- Content strategy
- Product / supply-network model
- Visual direction
- UX direction
- Technical direction
- AI governance direction
- QA direction
- Deployment and handoff strategy

## In Progress

- Documentation restructuring
- Project glossary
- Project overview
- Decision register
- Business source-of-truth preparation

## Pending Management Input

At minimum:

- Exact legal company name
- Official company description
- Approved products
- Product specifications
- Supply-source relationships
- Official contacts
- Credentials
- Company history
- Verification wording
- Commercial workflow
- Preferred terminology

---

# 26. Immediate Next Steps

The current recommended execution order is:

```
01
Finalize project documentation structure

02
Finalize project glossary

03
Create project overview

04
Create PROJECT_CONSTITUTION.md

05
Create AGENTS.md

06
Create CLAUDE.md

07
Create Business Source of Truth

08
Create Claims Matrix

09
Record initial project decisions

10
Build Figma foundations

11
Bootstrap frontend architecture

12
Create golden components

13
Build first complete buyer flow

14
Run baseline QA
```

---

# 27. Repository Knowledge Structure

The project documentation should follow this general model:

```
docs/
│
├── 00-project/
│   ├── project-overview.md
│   ├── project-status.md
│   ├── strategic-framework-index.md
│   └── project-glossary.md
│
├── 01-strategy/
├── 02-business/
├── 03-content/
├── 04-design/
├── 05-architecture/
├── 06-ux/
├── 07-qa/
├── 08-operations/
├── 09-decisions/
└── 10-research/
```

---

# 28. Relationship Between Project Documents

The project uses the following conceptual hierarchy:

```
BUSINESS TRUTH
      ↓
STRATEGY
      ↓
DECISIONS
      ↓
CONTENT
      ↓
DESIGN / UX
      ↓
ARCHITECTURE
      ↓
IMPLEMENTATION
      ↓
QA
      ↓
PRODUCTION
```

Each layer should remain consistent with the layer above it.

---

# 29. Obsidian & GitHub

Obsidian is used primarily for:

- Exploration
- Research
- Notes
- Thinking
- Meeting notes
- Knowledge navigation

GitHub is the authoritative repository for:

- Approved project documentation
- Architecture
- Decisions
- AI instructions
- Skills
- Code
- Tests
- Production knowledge

Exploration does not automatically become approved project truth.

---

# 30. Key Project Principle

> **The repository should be understandable to a new developer or AI agent without requiring access to the original conversations.**

A new agent should be able to read the appropriate project files and understand:

```
What the company is
What the website must accomplish
What is approved
What is uncertain
How the system is designed
How it should be implemented
How it should be tested
```

---

# 31. Important Related Documents

## Core Governance

- `PROJECT_CONSTITUTION.md`
- `AGENTS.md`
- `CLAUDE.md`

## Project

- `project-status.md`
- `project-glossary.md`
- `strategic-framework-index.md`

## Business

- `company-facts.md`
- `approved-products.md`
- `approved-supply-sources.md`
- `claims-matrix.md`
- `approved-contacts.md`

## Strategy

- Strategy Parts 1–18

## Decisions

- `/docs/09-decisions/`

---

# 32. Project North Star

The website should make an international buyer conclude:

> **I understand who Baghlaf Steel is, what the company does, how it connects my requirement with Saudi steel supply, how I can verify its official identity, and how I can begin a legitimate commercial conversation.**

That is the ultimate purpose of the project.

---

# 33. Final Principle

> **Build a website that proves what Baghlaf Steel is, rather than a website that merely claims it is trustworthy.**

````

### Why this version is stronger

The important thing is that `project-overview.md` **doesn't duplicate Parts 1–18**. It acts as the project's **map**.

An AI agent opening the repository can understand the whole project from this file, then drill down into the relevant document.

The distinction becomes:

```text
project-overview.md
        ↓
"What is this project?"

project-glossary.md
        ↓
"What does each term mean?"

PROJECT_CONSTITUTION.md
        ↓
"What rules must never be broken?"

docs/01-strategy/
        ↓
"Why are we building it this way?"

docs/02-business/
        ↓
"What is actually true?"

docs/09-decisions/
        ↓
"What have we decided?"

skills/
        ↓
"How should the AI perform this task?"
````

That architecture is much more robust than putting everything into `CLAUDE.md`.