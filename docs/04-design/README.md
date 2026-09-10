Design System

The 04-design folder contains the visual design system and UI design rules for the Baghlaf Steel website.

It translates the approved strategic direction into a consistent visual language that can be implemented in Figma and later in the production codebase.

The design direction is based on the Industrial Editorial concept: precise, mature, structured, premium, restrained, credible, modern, and appropriate for international B2B steel buyers.

Purpose

This folder defines:

Visual direction and brand expression
Design foundations and semantic tokens
Typography
Color architecture
Responsive behavior
Arabic and RTL behavior
Component design rules
Consistency between Figma and the implemented interface

The goal is not to make every page look identical. The goal is to give every page the same underlying visual language.

Files
visual-direction.md

Defines the highest-level visual strategy for the website.

It covers:

Industrial Editorial direction
Desired first impression
Brand character
Emotional tone
Editorial composition
Photography and imagery
Saudi and international B2B identity
Trust and verification presentation
Motion principles
Visual anti-patterns
Avoiding generic AI-generated/SaaS-looking design

This document establishes how the website should feel and look as a whole.

design-system.md

Defines the complete design-system architecture.

It covers:

Foundations
Design tokens
Primitives
Components
Patterns
Sections
Templates
Page-level composition
Accessibility
Responsive behavior
RTL support
Figma-to-code consistency

This is the master reference for the design system.

typography.md

Defines the typography system.

It covers:

English typography
Arabic typography
Font roles
Type scale
Weights
Line heights
Tracking
Technical/data typography
Responsive typography
Font loading and fallback behavior
Accessibility
Mixed English/Arabic content

Final production fonts remain subject to brand/design approval.

color-system.md

Defines the semantic color architecture.

It covers:

Brand colors
Neutral colors
Surfaces
Text
Borders
Interactive states
Status colors
Verification states
Data visualization considerations
Accessibility and contrast
Figma/code token mapping

Final production values should only be established from approved brand direction.

responsive-rules.md

Defines how the interface behaves across screen sizes.

It covers:

Mobile
Tablet
Desktop
Containers
Grids
Navigation
Hero sections
Cards
Product layouts
Technical tables
Forms
File uploads
Images
Modals
Sticky elements
Accessibility and zoom
Content expansion

Responsive design must be treated as behavioral adaptation, not simply shrinking desktop layouts.

rtl-rules.md

Defines Arabic and RTL behavior.

It covers:

Directionality
Logical CSS properties
Alignment
Navigation
Breadcrumbs
Icons
Forms
Numbers
Technical specifications
Tables
Buttons
Progress indicators
Language switching
Motion
Responsive RTL behavior
Figma implementation
RTL QA

Arabic is treated as a first-class experience rather than a translated desktop version.

component-guidelines.md

Defines component-level design and reuse rules.

It covers:

Component taxonomy
Naming
Variants
States
Anatomy
Content flexibility
Reuse rules
Product components
Supply-network components
Trust/verification components
Requirement-form components
Navigation
Forms
Tables
Alerts
Loading and error states
Accessibility
Responsive behavior
RTL
Figma/code consistency

The guiding principle is:

Reuse before create.

A new component should only be introduced when an existing component cannot reasonably support the required use case.

Design Principles

The design system follows several project-wide principles.

1. Clarity Before Decoration

Visual decisions must help the buyer understand:

Who Baghlaf Steel is → what it does → what it can supply → how it works → why it can be trusted → what to do next.

Decoration must never compete with this hierarchy.

2. Industrial Editorial

The website should feel closer to a sophisticated industrial publication or corporate trade platform than to a generic SaaS landing page.

The visual language should communicate:

Precision + Authority + Restraint + Materiality + Credibility

3. B2B Credibility Over Marketing Hype

The design should reinforce factual communication rather than exaggerated claims.

Avoid visual patterns that make the company look:

Overly promotional
Artificially luxurious
Startup-like
Unnecessarily futuristic
Generic or template-based
4. Evidence Over Decoration

When presenting trust, priority should be given to:

Evidence → Context → Verification → Action

rather than decorative trust signals.

5. Real Materiality

Steel, industrial environments, architecture, infrastructure, logistics, documentation, technical information, and authentic people may provide visual character when properly approved.

Imagery should support the company's actual role and must not visually imply that Baghlaf Steel owns or operates manufacturing facilities unless that is explicitly approved.

6. Controlled Complexity

The interface may contain substantial technical and commercial information, but the design should organize complexity rather than hide it.

This is especially important for:

Product information
Technical specifications
Supply relationships
Requirements
Verification
Commercial workflows
7. Consistency Without Monotony

Shared design tokens and components should create consistency, while page composition, image treatment, spacing, and editorial layouts may vary according to page purpose.

8. Accessibility by Default

Accessibility is part of the design system, not a final QA phase.

This includes:

Contrast
Focus states
Keyboard interaction
Touch targets
Text scaling
Reduced motion
Form usability
Semantic hierarchy
RTL accessibility
Error communication
9. Responsive by Design

Every component should have an intentional behavior across screen sizes.

Do not design desktop first and postpone mobile decisions until implementation.

10. RTL From the Beginning

Arabic should influence the system architecture from the start.

Figma layouts, component behavior, spacing, icon direction, typography, and implementation conventions should all support RTL intentionally.

Figma as Visual Source of Truth

Figma is the primary visual source of truth for the approved interface.

The expected relationship is:

Strategy
   ↓
Design Direction
   ↓
Figma Design System
   ↓
Figma Page Designs
   ↓
Implementation
   ↓
Visual QA

Code should implement the approved design rather than independently redefining it.

When implementation reveals a legitimate design-system problem, the system should be updated deliberately rather than allowing undocumented visual drift.

Relationship With Other Project Documentation

04-design does not define business truth.

Business facts must come from:

docs/02-business/

Strategic direction comes from:

docs/01-strategy/

User flows and page experience are defined with:

docs/06-ux/

Technical implementation is defined with:

docs/05-architecture/

Quality validation is defined with:

docs/07-qa/

Project-wide governance is defined by:

PROJECT_CONSTITUTION.md
AGENTS.md
Design Authority

The design authority hierarchy is:

Approved Brand / Management Input
        ↓
Approved Strategic Direction
        ↓
Approved Figma Design System
        ↓
Approved Figma Page Designs
        ↓
Implemented UI

Business truth always remains authoritative for business claims.

A visual design must never introduce a business claim that has not been approved.

AI Implementation Rules

AI agents working on the interface must:

Read the relevant design documentation before creating UI.
Reuse existing tokens and components before creating new ones.
Follow the approved visual direction.
Treat Figma as the visual source of truth.
Preserve responsive behavior.
Preserve English/Arabic parity.
Preserve RTL behavior.
Preserve accessibility requirements.
Avoid introducing generic AI/SaaS visual patterns.
Never invent company facts, certifications, manufacturers, customers, statistics, or trust signals.
Avoid unnecessary dependencies or component duplication.
Validate visual changes before considering the task complete.

An AI agent must not redesign an approved interface merely because it can produce a different visual result.

Current Status

Status: In Progress

The design strategy and foundational design rules have been established.

Still pending:

Final brand assets
Approved logo usage
Final typography selection
Final color values
Final imagery direction/assets
Completed Figma foundations
Production component library
Approved page designs
Desktop/mobile visual validation
Arabic/RTL visual validation

Until these items are approved, the design system should be treated as a controlled working specification, not a finalized brand guideline.

Completion Criteria

The 04-design system is considered ready for production implementation when:

Visual direction is approved.
Brand assets are approved.
Typography is approved.
Color system is approved.
Figma foundations are complete.
Core components are defined.
Critical responsive behaviors are defined.
Arabic/RTL variants are defined.
Critical page templates are designed.
Design tokens can be mapped cleanly to code.
Accessibility requirements are incorporated.
Design decisions are documented.
Figma is sufficiently complete to function as the visual source of truth.

Core principle:

Design should make Baghlaf Steel feel established, credible, precise, and trustworthy before the buyer ever submits a requirement.