---
title: Baghlaf Steel — Project Constitution
document_type: project_governance
status: active
version: 1.0.0
owner: Project Leadership & Governance
last_reviewed: 2026-08-30
---

# Baghlaf Steel — Project Constitution

> **The Project Constitution & Governing Principles for the Baghlaf Steel Web System.**  
> *This document establishes non-negotiable principles, identity definitions, truth protocols, source-of-truth hierarchies, and delegation structures for all human contributors and AI agents.*

---

## Preamble

This Constitution serves as the highest project-level governance document for the Baghlaf Steel website project. It establishes the rules and principles governing human contributors and AI agents. It does not override Baghlaf management's authority over company facts, legal identity, commercial relationships, products, credentials, or public business claims.

The primary purpose of this document is to maintain project alignment, enforce commercial truth, prevent unauthorized positioning, and optimize AI context consumption by serving as a concise, high-level rulebook.

---

## Article I: Project Identity & Operating Stance

### 1.1 Corporate Identity
- **Public Brand:** Baghlaf Steel
- **Country:** Saudi Arabia
- **Exact Legal Name:** See `docs/02-business/company-facts.md`
- **Official Arabic Name:** See `docs/02-business/company-facts.md`
- **Primary Market Focus:** International B2B Steel Procurement & Supply
- **Official Domain:** See `docs/09-decisions/DEC-002-canonical-domain.md`

### 1.2 Non-Negotiable Operating Stance
- **Trading & Supply Identity:** Baghlaf Steel operates strictly as a **Steel Trading and Supply Company**. 
- **Manufacturing Disclaimer:** 
- Baghlaf Steel must not be represented as owning, operating, or controlling manufacturing facilities unless explicitly verified and approved.
- External manufacturers must not be presented as Baghlaf-owned facilities.
- Manufacturer, supplier, supply source, partner, distributor, agent, and authorized distributor are controlled terms and must not be substituted without evidence.
- **Relationship Transparency:** External steel producers, mills, and supply sources must be accurately classified based on verified commercial relationships.

### 1.3 Strategic Philosophy
- **Core Doctrine:** *"Proof over slogans."*
- **Brand Value:** Trust is generated through verifiable credentials, operational transparency, clear supply capabilities, and responsive commercial coordination—not unverified marketing hype.

---

## Article II: Truth, Claims & Verification Protocols

### 2.1 Zero-Hallucination & Accuracy Mandate
- No contributor or AI agent may invent, assume, or hallucinate company capabilities, warehouse capacities, certification claims, executive names, or supply volumes.
- All public-facing business facts and claims must be supported by verified, approved information in `docs/02-business/`, the Claims Matrix, or another explicitly designated authoritative business source.

### 2.2 Project Knowledge Classification

Project information is classified into distinct categories:

1. **Business Facts**
   Verified information about Baghlaf Steel.

2. **Strategic Intent**
   Approved strategic direction and frameworks.

3. **Project Decisions**
   Explicit decisions recorded in `docs/09-decisions/`.

4. **Design Truth**
   Approved visual and UX specifications represented in Figma.

5. **Technical Truth**
   Approved architecture and implementation standards.

6. **Operational Rules**
   Deployment, QA, security, and maintenance procedures.

7. **AI Instructions**
   Rules governing how AI agents operate within the project.

### 2.3 Verification-First Architecture
- Digital authenticity and verification are first-class functional requirements of the web system.
- The website must provide international buyers with a direct, friction-free mechanism to verify official domain authority, legitimate communication channels, and authorized representatives to counter unauthorized intermediaries.

---

## Article III: Commercial Objectives & Buyer Conversions

### 3.1 Target Audience Priority
The primary audience is international B2B steel buyers and procurement stakeholders.
Specific buyer segments are defined in `docs/01-strategy/03-target-buyers.md`.

### 3.2 Primary Conversions
The website has two primary business-level actions:

1. Submit Steel Requirement
2. Verify Baghlaf

Individual pages may have context-specific secondary actions appropriate to their purpose.

### 3.3 Core Information Architecture
The platform structure shall adhere strictly to clear B2B buyer journeys, exposing:
- **Products & Supply Capabilities**
- **Supply Network & Sourcing Logistics**
- **How We Work (Commercial Process)**
- **Corporate Identity & Verification**
- **Requirement Submission Pipeline**

---

## Article IV: Technical & Design System Directives

### 4.1 Visual & Aesthetic Standards
- **Aesthetic Benchmark:** Premium Industrial Editorial design that communicates strength, precision, commercial maturity, Saudi identity, and international credibility. Avoid generic corporate templates, SaaS aesthetics, futuristic interfaces, and decorative visual excess.
- **Design Tokens:** Visual implementation must follow the approved design-token system documented in `docs/04-design/` and represented in the approved Figma design system.
- **Dynamic Interaction:** Interfaces should feel responsive and tactile through restrained, purposeful micro-interactions, meaningful motion, and clear feedback states. Decorative motion and generic AI/SaaS patterns must be avoided.

### 4.2 Architectural Mandates
- **Performance & SEO:** Pages must use semantic HTML, logical heading hierarchy, appropriate metadata, canonical URLs, structured data where applicable, and responsive layouts.
- **Accessibility:** The system must support semantic structure, keyboard navigation, visible focus states, appropriate contrast, accessible forms, and reduced-motion behavior in accordance with the project's accessibility requirements.
- **Security:** Sensitive data, credentials, buyer requirements, uploaded documents, and privileged operations must be protected according to the project's security architecture. AI agents must not expose or unnecessarily process sensitive production information.
- **Maintainability:** Codebases must maintain clear separation between logic, presentational components, data models, and content catalogs.
- **Localization Foundation:** Structural support for multi-language delivery (Arabic / English) must be built into the core data schema from inception.

### 4.3 Design Authority vs. Business Intent
- Approved Figma designs govern visual execution.
- Strategy documents govern business intent.
- When visual implementation and business intent appear to conflict, the conflict must be reviewed rather than silently resolved by the agent.

---

## Article V: Source-of-Truth Hierarchy & AI Governance

### 5.1 Global Source-of-Truth Precedence Hierarchy
When evaluating information or resolving context across the project, authority is strictly prioritized in the following order:

1. **Management-Approved Business Facts** (`docs/02-business/`, Claims Matrix)  
   *Authority:* Business and corporate facts

2. **Approved Project Decisions** (`docs/09-decisions/`)  
   *Authority:* Binding project decisions within their declared scope

3. **PROJECT_CONSTITUTION.md**  
   *Authority:* Project-wide governance principles

4. **Approved Figma / Design Source of Truth** (`docs/04-design/`)  
   *Authority:* Visual design

5. **Detailed Project Documentation** (`docs/01-strategy/`, `docs/05-architecture/`, etc.)  
   *Authority:* Domain-specific guidance

6. **Existing Code Implementation**  
   *Authority:* Current implementation state

7. **AI Suggestions / Assumptions**  
   *Non-authoritative*

### 5.2 Domain-Specific Authority Delegation
To ensure clarity and prevent cross-domain ambiguity, specific project sources hold authority within their declared scopes:

- **Business & Corporate Facts:** `docs/02-business/` & Claims Matrix
- **Binding Project Decisions:** `docs/09-decisions/` (within declared scope)
- **Project Principles & Governance:** `PROJECT_CONSTITUTION.md`
- **Visual Execution:** Approved Figma & `docs/04-design/`
- **Business Intent:** Strategy documents (`docs/01-strategy/`)
- **Technical Architecture & Systems:** `docs/05-architecture/`

### 5.3 Mandatory Conflict Resolution Protocol (Stop & Flag)
- If an AI agent or human contributor identifies a conflict between two authoritative sources (e.g., a business fact in `docs/02-business/` contradicting a line in `PROJECT_CONSTITUTION.md` or a design token contradicting an architectural spec):
  - **Rule:** The AI agent **MUST NOT choose a winner silently**.
  - **Action:** The agent **MUST STOP immediately** and explicitly flag the contradiction to the user/project leadership for resolution.

### 5.4 Rules of Engagement & Execution
- **Context Efficiency:** AI agents must keep context usage minimal by referencing summary indexes and domain specification files rather than asking for massive file dumps.
- **Verification Rule:** AI agents shall not finalize code changes or feature claims without executing verification tasks (linting, build scripts, or visual browser testing).
- **Documentation Discipline:** Code modifications must preserve useful documentation and comments and must update or remove comments when the underlying behavior changes. Structural changes require entry into the Decision Register (`docs/09-decisions/`).

### 5.5 Conflict Resolution

If an agent encounters conflicting information across project sources:

1. Do not guess.
2. Do not silently choose one source.
3. Identify the conflicting sources.
4. Determine whether an authoritative source exists.
5. If unresolved, request human clarification.

### 5.6 Uncertainty Protocol

Missing information must remain explicitly marked as:

- Unknown
- Pending Verification
- Pending Approval
- Not Applicable

Agents must never convert uncertainty into assumed fact.

### 5.7 Recommendation vs Decision

A recommendation in a strategy document does not automatically become an approved project decision.

A decision becomes authoritative when it is explicitly approved and recorded in `docs/09-decisions/`.

### 5.8 Strategy Integrity

Agents and contributors must not silently rewrite strategic documents to make them consistent with implementation. If implementation conflicts with approved strategy, the conflict must be surfaced and resolved explicitly.

### 5.9 Scope Integrity

Agents and contributors must not expand project scope implicitly.

New features, major redesigns, architectural changes, or materially different requirements must be treated as change requests and evaluated before implementation.

### 5.10 Minimal Safe Change

For scoped implementation tasks, agents should make the smallest safe change that satisfies the requirement and avoid unrelated refactoring.

### 5.11 Existing Work Protection

Agents must inspect the current repository state before modifying files and must not overwrite unrelated uncommitted work.
---

## Article VI: Master Delegation & Authority Index

To ensure this Constitution remains lean and consumable within AI context windows (~3–6 pages), detailed specifications are delegated to specialized project directories:

| Subdirectory | Domain Authority | Master Index / Reference |
| :--- | :--- | :--- |
| **`docs/00-project/`** | Project overview, current status, glossary, and strategic index. | [`strategic-framework-index.md`](docs/00-project/strategic-framework-index.md) |
| **`docs/01-strategy/`** | Brand identity, business model, buyer personas, positioning, & messaging. | `docs/01-strategy/` |
| **`docs/02-business/`** | Verified corporate claims, product catalogs, supply network, & commercial terms. | `docs/02-business/` |
| **`docs/04-design/`** | Visual design system, Figma tokens, UI component library, & responsive layouts. | `docs/04-design/` |
| **`docs/05-architecture/`** | System design, technical stack, API schemas, security, & deployment pipelines. | `docs/05-architecture/` |
| **`docs/09-decisions/`** | Formal project decisions covering business, design, architecture, AI governance, and operations. | `docs/09-decisions/` |
| **`skills/`** | Reusable agent instructions, operational workflows, and domain automation skills. | `skills/` |

---

> **Enforcement Notice:** Any pull request, strategic proposal, or AI generation that violates the directives of this Constitution or silently ignores source-of-truth conflicts shall be rejected until brought into full compliance.
