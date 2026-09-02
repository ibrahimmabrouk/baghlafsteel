# 15 — Development Workflow & Delivery

## Purpose

This document defines how the Baghlaf Steel website moves from an approved idea or design into a tested, reviewable, and production-ready implementation.

The objective is to establish a development process that is:

- predictable;
- controlled;
- design-driven;
- business-safe;
- AI-compatible;
- testable;
- reviewable;
- maintainable;
- suitable for professional freelance delivery.

Development is not treated as:

> Prompt → Generate Code → Deploy

Instead, the project follows a controlled delivery lifecycle:

```text
Understand
→ Plan
→ Design
→ Implement
→ Validate
→ Review
→ Approve
→ Release
→ Monitor
→ Maintain

The process should remain practical and lightweight enough for a small project while providing sufficient controls for an international B2B website.

1. Development Principles
1.1 Design Before Code

Approved visual and UX decisions should exist before detailed implementation begins.

The development process should not be used to discover the design accidentally.

1.2 Architecture Before Complexity

The implementation should follow the approved technical architecture.

Complexity should be introduced only when it solves a real project requirement.

1.3 Build the System, Not Isolated Screens

Pages should be constructed from reusable:

foundations;
tokens;
components;
patterns;
layouts;
domain logic;
utilities.

A new page should normally extend the existing system rather than creating a separate visual or technical system.

1.4 Business Safety Before Speed

Development speed must never justify inventing:

business facts;
products;
supplier relationships;
certifications;
customer claims;
availability;
commercial guarantees.
1.5 Small, Reviewable Changes

Implementation should be divided into coherent units that can be:

understood;
tested;
reviewed;
reverted.

Avoid unnecessarily large changes that combine unrelated functionality.

1.6 Validation Is Part of Development

Testing and visual QA are not final-stage activities.

They should occur continuously throughout development.

1.7 Reversible Work Is Preferred

When multiple implementation choices are possible, prefer approaches that can be changed safely later.

Avoid unnecessary irreversible decisions.

2. Delivery Lifecycle

The project follows the following high-level workflow:

01. Task Definition
        ↓
02. Context Loading
        ↓
03. Repository Inspection
        ↓
04. Planning
        ↓
05. Design / Specification
        ↓
06. Implementation
        ↓
07. Automated Validation
        ↓
08. Visual / UX Validation
        ↓
09. Review
        ↓
10. Documentation
        ↓
11. Acceptance
        ↓
12. Release
        ↓
13. Monitoring

Not every task requires every stage independently.

The depth of the workflow should match the risk and size of the change.

3. Development Phases
Phase A — Foundation

Before significant feature development begins, the project should establish:

repository structure;
project governance;
business source of truth;
technical architecture;
design foundations;
development tooling;
environment configuration;
CI;
testing baseline;
deployment strategy.

The project should not rush directly into page production before these foundations are sufficiently stable.

Phase B — Design System

The visual system should be established before large-scale page implementation.

This includes:

typography;
colors;
spacing;
grid;
containers;
buttons;
inputs;
cards;
navigation;
typography hierarchy;
states;
responsive rules;
RTL rules;
accessibility behavior.

The system should be represented in both Figma and frontend implementation.

Phase C — Golden Components

Before implementing the full website, several representative components should be completed to a high standard.

Examples include:

Header
Footer
Button
Typography
Product Card
Product Information Section
Trust / Verification Block
Requirement Form Field
Form Validation
CTA Section
Breadcrumb

These components establish the visual and technical quality bar for the rest of the site.

Phase D — Critical User Flows

Before implementing every secondary page, prioritize the flows that directly support the project's objectives.

Primary flows:

Verification
Product Discovery → Product Detail → Requirement
Submit Requirement

These flows should reach an end-to-end usable state early.

Phase E — Page Implementation

After foundations and critical flows are stable, implement remaining pages according to the approved sitemap, wireframes, and design.

Preferred sequence:

Homepage
→ Product Listing
→ Product Detail
→ Supply Network
→ How We Work
→ Why Baghlaf
→ About
→ Verification
→ Contact
→ Resources
→ Supporting / Utility Pages

The exact sequence may change according to project priorities.

4. Task Intake

Every development task should answer, at minimum:

What is being changed?
Why is it being changed?
Which user or business objective does it support?
Which files / areas may be affected?
What is the source of truth?
What does success look like?

Examples:

"Build Product Detail Page"

Objective:
Help international buyers understand a product and move toward a requirement.

Sources:
Figma
Product strategy
Product data
Content strategy
Technical architecture

Success:
Accurate page, responsive implementation, RTL support,
accessible interaction, and working requirement CTA.
5. Task Sizing

Tasks should be broken down when they become too large to reason about safely.

A task is probably too large when it simultaneously requires:

architecture changes;
multiple unrelated pages;
new infrastructure;
content creation;
data-model changes;
major visual redesign;
extensive refactoring.

Large work should be decomposed into smaller delivery units.

6. Repository Inspection

Before implementation, inspect the current project.

The developer or AI agent should identify:

current branch/state;
existing routes;
component system;
styling system;
data structures;
localization;
tests;
configuration;
assets;
existing related implementation;
pending changes.

The purpose is to avoid:

duplicate components;
conflicting patterns;
accidental overwrites;
unnecessary dependencies;
breaking unrelated work.
7. Development Branching Strategy

Development should separate work into logical changes.

A practical approach is:

main
  ↓
feature/<feature-name>

Examples:

feature/product-detail
feature/verification-page
feature/requirement-form
feature/arabic-rtl
fix/mobile-header
fix/requirement-validation

Branch names should describe the purpose of the change.

For very small changes, direct work on the primary development branch may be acceptable if the project workflow explicitly permits it.

Production should remain protected from uncontrolled changes.

8. Commit Strategy

Commits should represent coherent units of work.

Prefer:

feat: add product detail layout
feat: implement requirement form validation
fix: correct mobile navigation overflow
docs: update product data model
refactor: extract reusable form field

Avoid commits such as:

update
changes
stuff
final
final2
fixed

A commit should allow another developer to understand what changed and why.

9. AI-Assisted Development Workflow

AI-assisted development follows the same engineering process as human development.

The preferred sequence is:

Prompt / Task
    ↓
AI Context Loading
    ↓
Repository Inspection
    ↓
Implementation Plan
    ↓
Human Review where Required
    ↓
AI Implementation
    ↓
Automated Validation
    ↓
Visual Validation
    ↓
Diff Review
    ↓
Documentation / Decision Updates

The AI should not be treated as an autonomous source of truth.

10. Prompting Model for Development

Development prompts should provide a clear objective rather than vague instructions.

Strong task structure:

Goal
Context
Relevant source files
Constraints
Expected behavior
Design reference
Validation requirements
Scope limits

Example conceptual task:

Goal:
Implement the approved Product Detail page.

Context:
Use the current product architecture and approved product data.

Design:
Follow the approved Figma Product Detail screen.

Constraints:
Do not invent product specifications or availability.
Reuse existing product components where possible.
Support English and Arabic.

Validation:
Typecheck, lint, responsive testing, RTL validation,
accessibility checks, and visual comparison.
11. Human Review Gates

Human approval should be required where appropriate.

Examples include:

Business Approval

Required for:

public business claims;
company identity;
product information;
supply-source relationships;
credentials;
official contacts;
commercial terminology.
Design Approval

Required for:

major visual direction;
final page designs;
major navigation changes;
significant UX changes.
Technical Approval

Required for significant:

architecture changes;
infrastructure changes;
security changes;
database changes;
third-party integrations.
Production Approval

Required for:

production deployment;
DNS changes;
domain changes;
production database migrations;
destructive operations.
12. Implementation Sequence

For a typical page, implementation should follow:

1. Confirm page objective
2. Review wireframe
3. Review approved Figma
4. Identify reusable components
5. Map data requirements
6. Define responsive behavior
7. Define RTL behavior
8. Implement semantic structure
9. Implement styling
10. Connect approved data
11. Implement interaction states
12. Add validation
13. Test
14. Perform visual QA
15. Review
16. Document meaningful changes
13. Component-First Development

Components should be created around meaningful reusable behavior.

Good candidates include:

Navigation
Button
Input
Select
File Upload
Product Card
Product Table
Trust Indicator
Verification Panel
CTA
Alert
Modal
Breadcrumb
Pagination

Components should avoid becoming unnecessarily generic.

A component should abstract a repeated meaningful pattern, not merely eliminate a few lines of markup.

14. Data-Driven Development

Where appropriate, pages should consume structured data rather than duplicating business information directly inside UI components.

For example:

Product Data
    ↓
Product Model
    ↓
Page
    ↓
Reusable Components

This improves:

consistency;
localization;
maintainability;
validation;
reuse;
future CMS integration.
15. Content and Code Separation

Marketing and business content should be separated from implementation logic where practical.

Avoid scattering critical business statements across unrelated component files.

This is particularly important for:

company descriptions;
product descriptions;
supply-source information;
trust statements;
contact information;
legal text.
16. Form Development Workflow

The requirement form is a critical business flow.

It should be developed in stages:

Form Structure
    ↓
Field Definitions
    ↓
Client Validation
    ↓
Server Validation
    ↓
Business Validation
    ↓
Persistence
    ↓
Reference Number
    ↓
Notification
    ↓
Confirmation

Important requirements:

clear labels;
appropriate field types;
useful validation;
understandable errors;
secure upload handling;
prevention of duplicate accidental submissions;
accessible keyboard interaction;
Arabic support;
mobile support.
17. Error Handling

Errors should be designed, not improvised.

The system should distinguish between:

Validation Error
Network Error
Server Error
Authentication Error
Upload Error
Business Rule Error
Unexpected Error

Users should receive understandable feedback without exposing internal implementation details.

Logs may contain diagnostic information appropriate for developers, but should not contain unnecessary sensitive customer information.

18. Loading and Empty States

Important asynchronous interfaces should have appropriate:

loading states;
empty states;
disabled states;
retry states;
success states;
error states.

These states should be represented in the design system where relevant.

AI-generated interfaces often focus only on the happy path; this project should explicitly avoid that.

19. Responsive Delivery

Every page should be validated across at least:

Desktop
Tablet
Mobile

Responsive implementation should verify:

layout;
typography;
navigation;
images;
tables;
forms;
CTA placement;
long text;
technical specifications;
overflow;
touch targets.
20. RTL Delivery

Arabic implementation should be tested independently.

Validation should include:

correct document direction;
layout mirroring;
text alignment;
navigation;
icons;
forms;
tables;
breadcrumbs;
component spacing;
mixed Arabic/English technical content.

A page should not be considered complete until RTL behavior is acceptable where Arabic is supported.

21. Localization Workflow

A preferred content workflow is:

English / Arabic Content Strategy
        ↓
Approved Content
        ↓
Structured Content
        ↓
Frontend Rendering
        ↓
Language QA

AI may assist with translation and drafting, but approved terminology remains authoritative.

AI must not introduce different commercial meaning between languages.

22. Testing Strategy During Development

Testing should exist at several levels.

Unit

For isolated business logic and utilities.

Component

For reusable UI behavior.

Integration

For interactions between application layers.

End-to-End

For important user workflows.

Accessibility

For semantic and interaction requirements.

Visual

For design fidelity and regression detection.

Testing depth should correspond to the risk of the feature.

23. Continuous Validation

Validation should happen continuously rather than only at the end.

A practical loop:

Implement
→ Run local checks
→ Fix
→ Continue

Then:

Feature complete
→ Full relevant test suite
→ Visual QA
→ Review

This reduces the cost of discovering errors late.

24. Pull Request / Review Model

Where pull requests are used, each should provide:

Summary
Why
What changed
Files / areas affected
Tests performed
Visual QA performed
Known limitations

For UI changes, include appropriate screenshots or visual references during review.

The reviewer should verify:

scope;
architecture;
business accuracy;
design fidelity;
accessibility;
tests;
security;
maintainability.
25. Design-to-Code Review

For visually significant work, review should compare:

Approved Figma
        ↕
Implemented Page

The review should consider:

composition;
spacing;
typography;
colors;
imagery;
states;
responsiveness;
RTL;
interaction behavior.

The goal is not pixel obsession at the expense of usability.

The goal is faithful implementation of the approved design intent.

26. Dependency Management

New dependencies should have a clear reason.

Before adding a package, consider:

Does the project already provide this capability?
Is the dependency maintained?
Does it significantly increase bundle size?
Does it create unnecessary complexity?
Does it introduce security risk?
Does it conflict with the existing architecture?

Avoid dependency accumulation driven by AI convenience.

27. Refactoring During Feature Work

Refactoring should be controlled.

When implementation reveals a structural problem:

determine whether the refactor is necessary;
assess its scope;
avoid unrelated improvements;
preserve existing behavior;
add or update tests;
document meaningful architectural consequences.

A small local refactor may be included with feature work.

A major refactor should generally become a separate task.

28. Definition of Delivery Quality

Every meaningful feature should aim to achieve:

Business Accuracy
+
Design Fidelity
+
Technical Correctness
+
Accessibility
+
Responsive Behavior
+
RTL Compatibility
+
Performance
+
Security
+
Maintainability

A feature that satisfies only one or two of these dimensions is not considered high-quality delivery.

29. Release Candidate Workflow

Before a production release:

Feature Complete
    ↓
Documentation Complete
    ↓
Automated Validation
    ↓
Visual QA
    ↓
Responsive QA
    ↓
RTL QA
    ↓
Accessibility QA
    ↓
Critical Flow Testing
    ↓
Production Build
    ↓
Release Review
    ↓
Client / Management Approval

The release candidate should represent the intended production state.

30. Release Gates

A production release should not proceed when:

critical tests fail;
critical user flows are broken;
major visual defects remain;
approved business information is incorrect;
security issues remain unresolved;
required production configuration is missing;
deployment cannot be safely rolled back;
required client/management approval has not been obtained.
31. Deployment Workflow

Production deployment should follow:

Local Development
        ↓
Commit
        ↓
CI Validation
        ↓
Preview / Staging
        ↓
Review
        ↓
Approval
        ↓
Production Deployment
        ↓
Smoke Test
        ↓
Monitoring

Production should not be treated as the first real testing environment.

32. Post-Deployment Verification

Immediately after deployment, verify at minimum:

Homepage
Navigation
Products
Product Detail
Verification
Contact
Submit Requirement
English
Arabic
Mobile
Desktop
Forms
Critical links
SEO basics
Error handling

Production smoke testing should focus on business-critical paths.

33. Rollback Strategy

Every production release should have a known rollback path.

Rollback may involve:

previous application deployment;
previous container/build;
previous database migration strategy;
configuration rollback;
content rollback.

Database changes require particular care because application rollback is not always sufficient to reverse schema/data changes.

34. Documentation During Delivery

Development should update documentation when the implementation changes meaningful project knowledge.

Examples:

New route
→ route architecture

New entity
→ data model

New integration
→ technical architecture / relevant documentation

New business terminology
→ business terminology

Major architectural choice
→ decision record

Production behavior
→ deployment / operations

The repository should remain understandable after delivery.

35. Project Status Updates

docs/00-project/project-status.md should reflect meaningful project progress.

Examples:

Not Started
In Progress
Blocked
Ready for Review
Approved
Complete
Deprecated

The status should focus on project reality rather than optimistic reporting.

36. Handling Blockers

A blocker should be explicitly documented when work cannot safely continue.

Typical blockers:

Missing business approval
Missing product data
Unclear supply relationship
Missing Figma design
Architecture conflict
Production access issue
Security issue
Third-party dependency issue

The agent should identify:

What is blocked?
Why?
What information is required?
Which decision owner is needed?
What work can continue safely?
37. Parallel Development

Parallel work may be used when tasks are sufficiently independent.

For example:

Developer / Agent A
→ Product architecture

Developer / Agent B
→ Verification page

Developer / Agent C
→ QA automation

Parallel work should be avoided when tasks modify the same unstable foundation simultaneously.

Before merging parallel work:

architecture conflicts should be resolved;
duplicated components should be consolidated;
tests should be rerun;
visual consistency should be checked.
38. AI Context Handover

When an AI task is paused or handed to another agent, the next agent should be able to continue through repository state.

A useful handover should identify:

Current Objective
Completed Work
Current Blockers
Relevant Files
Open Decisions
Tests Passed
Tests Remaining
Known Issues
Next Recommended Action

Important handover information should be persisted in project files when it affects future work.

39. Avoiding AI Drift

AI drift occurs when repeated AI sessions gradually change:

visual direction;
terminology;
architecture;
component patterns;
business wording;
interaction behavior.

To reduce drift:

Strategy
+
Decisions
+
Figma
+
Design System
+
Business Source of Truth
+
AGENTS.md

must remain the reference system.

Agents should prefer existing approved patterns over generating new stylistic or architectural alternatives.

40. Protecting Existing Work

AI agents must not assume that generated code is disposable.

Before changing existing work, determine:

why it exists;
whether it is currently used;
whether it was intentionally approved;
whether other pages depend on it;
whether it represents an existing decision.

Do not delete or replace working architecture simply because a different implementation appears cleaner.

41. Definition of Done

A development task should be considered delivered when:

[ ] Requirement understood
[ ] Relevant context loaded
[ ] Existing implementation inspected
[ ] Scope defined
[ ] Approved design followed
[ ] Approved business data used
[ ] Implementation completed
[ ] Reusable patterns considered
[ ] Responsive behavior validated
[ ] RTL behavior validated where relevant
[ ] Accessibility considered
[ ] Appropriate automated tests passed
[ ] Visual QA completed where applicable
[ ] Security implications reviewed
[ ] Diff reviewed
[ ] Documentation updated where necessary
[ ] Project status updated where necessary
[ ] Known limitations disclosed
[ ] Required approval obtained
42. Delivery Standards for a Professional Freelance Project

Because this is a client project, successful delivery is not limited to writing code.

Professional delivery also requires:

predictable communication;
controlled scope;
traceable decisions;
clear acceptance criteria;
documented limitations;
reproducible setup;
clean repository structure;
secure production configuration;
reliable deployment;
client ownership of appropriate production assets;
maintainable handoff documentation.

The project should be deliverable to the client, not dependent on the original developer's memory.

43. Recommended Development Order

The initial implementation should generally follow this sequence:

01. Repository Bootstrap
        ↓
02. Project Governance
        ↓
03. Technical Bootstrap
        ↓
04. Design Tokens
        ↓
05. Global Layout
        ↓
06. Header / Navigation
        ↓
07. Footer
        ↓
08. Typography / Core Components
        ↓
09. Homepage
        ↓
10. Product System
        ↓
11. Product Detail
        ↓
12. Verification
        ↓
13. Requirement Flow
        ↓
14. Remaining Core Pages
        ↓
15. Resources / Supporting Pages
        ↓
16. Full QA
        ↓
17. Production Preparation
        ↓
18. Launch

This is a recommended sequence, not an immutable rule.

The actual order should respond to project dependencies and approved priorities.

44. Final Delivery Principle

The purpose of the development workflow is to make quality repeatable.

The project should move from:

Idea

to:

Approved Intent

to:

Designed Experience

to:

Implemented System

to:

Validated Product

to:

Production Website

without losing the business meaning, design intent, technical structure, or project memory along the way.

The standard is therefore:

Build deliberately. Validate continuously. Preserve context. Deliver predictably.


Recommended location:

```text
docs/01-strategy/15-development-workflow-and-delivery.md