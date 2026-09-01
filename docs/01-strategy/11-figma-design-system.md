---
title: Baghlaf Steel — Figma Design System
document_type: strategy
status: working
version: 1.0.0
owner: Project Leadership & Governance
last_reviewed: 2026-09-01
---

# Baghlaf Steel — Figma Design System

> Strategic and structural specification for the Baghlaf Steel Figma Design System, including foundations, tokens, components, patterns, states, responsive behavior, RTL, accessibility, and design governance.

---

# 1. Purpose

This document defines the architecture and operating principles of the Baghlaf Steel Figma Design System.

It translates the visual direction defined in:

`docs/01-strategy/10-brand-and-visual-direction.md`

into a structured system that can be used consistently across:

- Figma
- UX design
- Frontend implementation
- AI-assisted development
- Visual QA
- Future design evolution

This document defines the system architecture.

It does not replace:

- Approved Figma values
- Final component designs
- Final brand assets
- Technical implementation details

---

# 2. Core Principle

The design system should create:

```text
Consistency
+
Flexibility
+
Scalability
+
Accessibility
+
Implementation Fidelity

The system must allow designers and developers to create different page compositions while maintaining a coherent Baghlaf identity.

3. Design System Relationship

The design system sits between brand strategy and implementation:

Brand & Visual Direction
        ↓
Figma Design System
        ↓
Approved Page Designs
        ↓
Frontend Components
        ↓
Visual QA

Figma is the primary visual source of truth for approved interface design.

4. Design System Principles

The system should follow these principles:

4.1 Reuse Before Recreate

Use existing components and patterns before creating new ones.

4.2 Token Before Hardcode

Use design tokens instead of arbitrary visual values.

4.3 System Before Page

Create reusable foundations before creating large numbers of page-specific elements.

4.4 Intentional Variation

Pages may have different compositions while using the same underlying system.

4.5 Accessibility by Default

Accessible states and behavior should be designed into components.

4.6 RTL by Design

Arabic and RTL behavior must be represented within the system from the beginning.

4.7 Implementation Awareness

Figma components should be practical to implement in the frontend.

5. Figma File Architecture

The recommended Figma file structure is:

Baghlaf Steel Website
│
├── 00 — Cover & Documentation
├── 01 — Foundations
├── 02 — Components
├── 03 — Patterns
├── 04 — Page Templates
├── 05 — Wireframes
├── 06 — Desktop Pages
├── 07 — Mobile Pages
├── 08 — Arabic / RTL
├── 09 — Prototype
└── 10 — Archive

The exact organization may evolve as the project grows.

6. 00 — Cover & Documentation

This section should contain:

Design system overview
Project version
Design status
Usage notes
Naming conventions
Component guidance
Design ownership
Change notes

It should allow a new designer or developer to understand how the Figma file is organized.

7. 01 — Foundations

Foundations should define the system-level visual primitives:

Color
Typography
Spacing
Grid
Sizing
Radius
Borders
Elevation
Motion
Iconography
Imagery

These foundations feed all components and pages.

8. Color System

The color system should be structured as:

Brand Colors
     ↓
Neutral Colors
     ↓
Semantic Colors
     ↓
Interactive States

Potential semantic categories:

Primary
Secondary
Surface
Border
Text
Success
Warning
Error
Information

Exact values should be approved through the Figma design process.

9. Color Token Architecture

Use semantic tokens where possible.

For example:

color.text.primary
color.text.secondary

color.surface.default
color.surface.raised

color.border.default

color.action.primary
color.action.primary-hover

color.feedback.success
color.feedback.error

Avoid naming tokens purely by visual appearance such as:

dark-blue
light-gray
very-dark-gray

unless there is a specific reason.

Semantic naming allows the visual system to evolve without rewriting component logic.

10. Color Usage Principles

Color should primarily establish:

Hierarchy
Brand
Interaction
State
Emphasis

Avoid using color merely to fill empty space.

11. Typography System

Typography should establish a clear hierarchy.

Recommended levels:

Display
Heading
Subheading
Body
Small Text
Caption
UI Label
Technical / Data

Each level should define:

Font family
Weight
Size
Line height
Letter spacing
Usage

The exact values should be established in Figma.

12. Typography Tokens

Typography should use semantic naming.

Example:

type.display.large
type.heading.large
type.heading.medium
type.body.large
type.body.medium
type.body.small
type.label.medium
type.caption
type.data.medium

The naming system should remain consistent between Figma and frontend implementation where practical.

13. Typography Principles

Typography should communicate:

Authority
+
Precision
+
Readability
+
Technical Clarity

Avoid excessive font families or arbitrary font-weight combinations.

14. Arabic Typography

The system must explicitly support Arabic typography.

Define:

Arabic font family
Arabic font weights
Arabic line heights
Arabic heading behavior
Arabic body behavior
Mixed Latin/Arabic behavior
Numeric rendering

The Arabic system should be reviewed independently rather than assuming the English type system will automatically work.

15. Mixed Arabic / Latin Content

The design system must handle content such as:

ASTM A615
Grade 60
100,000 MT
sales@baghlaf.com.sa
+966 ...

inside Arabic interfaces.

These combinations should remain readable and visually stable.

16. Spacing System

Use a consistent spacing scale.

The system should define tokens for:

XXS
XS
SM
MD
LG
XL
XXL

The exact values should be defined during Figma implementation.

Pages should use the scale rather than arbitrary spacing.

17. Spacing Principles

Spacing should create:

Rhythm
Hierarchy
Grouping
Breathing room

Prefer consistent relationships over individually tuned margins.

18. Grid System

The system should establish a consistent layout grid.

Define:

Desktop
Tablet
Mobile

with appropriate:

Columns
Gutters
Margins
Container widths

Exact values should be determined during the design-system build.

19. Container System

Pages should use standardized content containers.

The system should define:

Wide
Default
Narrow
Full-width

where appropriate.

This allows editorial and technical sections to vary without losing alignment.

20. Layout Primitives

The design system should define reusable layout primitives such as:

Container
Stack
Cluster
Grid
Split Layout
Section

These should support multiple page compositions.

21. Border System

Define tokens for:

Border color
Border width
Divider
Focus ring

Avoid arbitrary borders throughout the interface.

22. Radius System

The system should define a restrained radius scale.

Potential levels:

None
Small
Medium
Large
Pill

Pill-shaped elements should be reserved for appropriate controls or labels rather than becoming the default visual shape of the site.

23. Elevation System

Define limited elevation levels.

For example:

Flat
Subtle
Raised
Overlay

Use elevation to communicate hierarchy rather than decoration.

24. Shadow Principles

Shadows should remain subtle.

They should help distinguish:

Overlays
Raised controls
Important floating elements

Avoid heavy shadows as a defining visual style.

25. Motion System

Define a small motion language:

Fast
Normal
Slow

and appropriate easing principles.

Use motion to support:

Feedback
Orientation
State change
Navigation
Hierarchy
26. Motion Accessibility

Every meaningful motion pattern should account for:

prefers-reduced-motion

The interface must remain understandable without decorative animation.

27. Iconography

The icon system should define:

Icon style
Size scale
Stroke/fill treatment
Alignment
Directional behavior
Usage rules

Icons should support comprehension rather than replace necessary labels.

28. Directional Icons

Icons that communicate direction must adapt to RTL appropriately.

Examples:

Arrow
Chevron
Back
Forward
Next
Previous
External Link

Do not assume every icon should simply be mirrored.

29. Imagery System

Define rules for:

Image ratios
Cropping
Object positioning
Aspect ratios
Focal points
Responsive image behavior

The imagery system should support:

Editorial
Product
Industrial
People
Documents

as appropriate.

30. Component Architecture

Components should be organized from simple to complex:

Tokens
 ↓
Primitives
 ↓
Components
 ↓
Patterns
 ↓
Templates
 ↓
Pages

This hierarchy should also influence frontend architecture.

31. Core Primitive Components

Potential primitives include:

Button
Link
Icon Button
Text
Heading
Divider
Badge
Input
Label

Only create primitives that are genuinely reused.

32. Navigation Components

Potential navigation components:

Header
Desktop Navigation
Mobile Navigation
Breadcrumbs
Footer
Language Switcher

The final set depends on UX requirements.

33. Commercial Components

Important business-specific components may include:

Product Card
Product Summary
Supply Source Card
Process Step
Requirement CTA
Trust Panel
Official Contact Block
Verification Block

These should encode the Baghlaf-specific experience rather than generic design-system behavior.

34. Form Components

Potential form components:

Text Input
Email
Phone
Select
Combobox
Textarea
Number Input
File Upload
Checkbox
Radio
Progress Indicator
Validation Message
Review Summary
35. Product Components

Potential product UI components:

Product Card
Product Header
Specification Table
Specification Group
Product Document
Product Availability / Capability Indicator
Related Product
Request Product CTA

Any availability-related component must clearly distinguish capability from confirmed availability.

36. Trust Components

Potential trust components:

Verification CTA
Official Contact Block
Official Domain Block
Authorized Representative
Credential Card
Verification Guidance

These should use only approved business information.

37. Component States

Interactive components should define relevant states.

At minimum where applicable:

Default
Hover
Focus
Active
Disabled
Loading
Success
Error

States should be designed, not improvised during development.

38. Component Variants

Use variants when differences are meaningful and systematic.

Examples:

Button
Primary
Secondary
Tertiary
Danger

Input
Default
Error
Disabled

Avoid creating separate components for every minor visual variation.

39. Component Anatomy

Complex components should document their structure.

Example:

Product Card
├── Image
├── Category
├── Product Name
├── Summary
├── Key Specification
└── CTA

This helps designers, developers, and AI agents understand component intent.

40. Component Naming

Use predictable names.

Examples:

Button
ProductCard
ProductSpecificationTable
VerificationPanel
SupplySourceCard
RequirementStep

Avoid names based on arbitrary appearance such as:

BlueCard
BigBox
SpecialSection
41. Component Documentation

Reusable components should document:

Purpose
Usage
Variants
States
Responsive behavior
RTL behavior
Accessibility
Content guidance
42. Pattern Architecture

Patterns combine components into reusable experiences.

Potential patterns:

Hero
Section Header
Product Grid
Split Feature
Trust Section
Process Flow
Specification Section
CTA Band
Logo / Credential Strip

Patterns should solve recurring problems.

43. Template Architecture

Templates define reusable page structures.

Potential templates:

Marketing Page
Product Listing
Product Detail
Resource Listing
Resource Detail
Verification
Contact
Requirement Flow
44. Page Architecture

Pages should be constructed as:

Template
   ↓
Patterns
   ↓
Components
   ↓
Content

Avoid building every page as a collection of unrelated custom sections.

45. Homepage Template

The homepage may combine:

Hero
Business Introduction
Product Highlights
Supply Model
Why Baghlaf
Process
Evidence
Verification
CTA

The final structure is controlled by the UX design.

46. Product Listing Template

Potential structure:

Page Header
Category Context
Filters / Search where justified
Product Grid
Supporting Information
Requirement CTA
47. Product Detail Template

Potential structure:

Product Header
Product Summary
Specifications
Applications
Documents
Supply Context
Related Products
Request CTA
Verification / Official Contact
48. Verification Template

Potential structure:

Verification Header
Official Website
Official Email
Official Phone
Official Office
Authorized Representatives
Official Social Profiles
Verification Guidance
Official Contact

Only approved information should be displayed.

49. Requirement Template

Potential structure:

Introduction
Progress
Current Step
Validation
Navigation
Review
Submission
Confirmation
50. Responsive System

Responsive behavior should be designed intentionally.

The system should support:

Mobile
Tablet
Desktop
Large Desktop

The exact breakpoint system should be defined in Figma and then mapped to frontend implementation.

51. Responsive Recomposition

Components should not simply shrink.

Instead:

Desktop Layout
      ↓
Responsive Rules
      ↓
Recomposed Mobile Layout

This may involve:

Column changes
Stacking
Reordering
Hidden secondary information
Changed navigation
Different spacing
52. Mobile-First Critical Actions

On mobile, preserve access to:

Verify Baghlaf
Explore Products
Contact
Submit Requirement

These remain high-priority buyer actions.

53. RTL System

RTL must be designed at the system level.

Define:

Direction
Alignment
Logical spacing
Navigation behavior
Icon direction
Form behavior
Table behavior
Animation direction
54. RTL Component Variants

Reusable components should be tested in both:

LTR
RTL

Examples:

Header
Breadcrumb
Product Card
Form
Stepper
Table
CTA
55. Accessibility System

Accessibility must be part of every reusable component.

Define:

Keyboard behavior
Focus behavior
Contrast
Labels
States
Error handling
Reduced motion
Semantic intent
56. Accessible Component States

For example, buttons should visually communicate:

Default
Hover
Focus
Pressed
Disabled
Loading

The focus state must not rely solely on color.

57. Content-Aware Components

Components should account for realistic content lengths.

Test:

Short Text
Normal Text
Long Text
Arabic Text
Mixed Language
Large Numbers
Technical Strings

Do not design components only around ideal placeholder content.

58. Data-Aware Components

Product and commercial components should support realistic data variation.

For example:

Product with 2 specifications
Product with 8 specifications
Product with multiple grades
Product with no public documents
Product with several documents

The component should fail gracefully when optional information is absent.

59. Empty States

Where dynamic data exists, define appropriate empty states.

Examples:

No documents
No related products
No available result
No public supply source

Empty states should not imply missing business capability.

60. Loading States

Dynamic experiences should define loading behavior.

Examples:

Product loading
Requirement step loading
File upload
Submission

Loading states should communicate progress without unnecessary animation.

61. Error States

Define error patterns for:

Field validation
Form submission
Upload
Network
Server
Missing product
Missing resource

Messages should be clear and actionable.

62. Success States

Define success patterns for:

Form step
File upload
Requirement submission
Verification interaction

Success should clearly communicate what happened and what comes next.

63. Focus States

Every keyboard-interactive component needs a visible focus treatment.

This should be standardized through a shared focus token/pattern.

64. Design Token Governance

Tokens should have:

A clear naming system
A single definition
Consistent usage
Documented intent

Avoid duplicate tokens with nearly identical values.

65. Token Naming Convention

Use semantic naming.

Example:

color.*
type.*
space.*
radius.*
border.*
shadow.*
motion.*
size.*

The exact naming syntax should be aligned with the implementation architecture.

66. Figma ↔ Frontend Token Mapping

Where practical:

Figma Token
    ↓
Frontend Token
    ↓
Component

The mapping should be documented so that designers and developers use the same conceptual vocabulary.

67. Design-to-Code Principle

The objective is not to generate code mechanically from Figma.

The objective is:

Create a strong shared system so design intent can be implemented accurately and maintainably.

Figma and frontend should share concepts, not necessarily identical file structures.

68. Figma Components and Frontend Components

A Figma component does not automatically require a one-to-one frontend component.

Likewise, a frontend abstraction does not automatically need to become a Figma component.

The relationship should be based on shared behavior and reuse.

69. Page Design Workflow

The recommended design sequence is:

Foundations
   ↓
Core Components
   ↓
Patterns
   ↓
Templates
   ↓
Homepage
   ↓
Representative Pages
   ↓
Remaining Pages
   ↓
Arabic / RTL
   ↓
Responsive
   ↓
Prototype
   ↓
Approval
70. Representative Page Strategy

Do not fully design every page before validating the system.

Use representative pages to test the design system.

Recommended first set:

Homepage
Product Detail
Supply Network
Verification
Requirement Flow

These exercise different aspects of the system.

71. Design Review Gate

A page should be considered visually approved only when:

□ Correct business context
□ Correct content structure
□ Uses approved components
□ Uses approved tokens
□ Desktop reviewed
□ Mobile reviewed
□ RTL reviewed where applicable
□ Accessibility considered
□ Visual direction maintained
□ Client / management approval where required
72. Figma Naming Convention

Use predictable page/frame/component names.

Examples:

Page / Home / Desktop
Page / Home / Mobile

Section / Hero
Section / Product Showcase

Component / Button
Component / Product Card
Component / Verification Panel

The exact naming system should remain consistent throughout the file.

73. Versioning

Figma should use clear versions or milestones.

For example:

Exploration
Design Review
Approved
Implementation
Revision

Avoid having multiple frames all labeled:

Final
Final 2
Final Latest
Final Approved
74. Figma Approval States

Recommended status labels:

Draft
Review
Approved
Deprecated
Archived

Only approved designs should be treated as implementation references.

75. Figma Change Control

When an approved component changes:

Change Requested
      ↓
Impact Review
      ↓
Design Update
      ↓
Affected Pages Review
      ↓
Approval
      ↓
Frontend Update
      ↓
Visual QA

Do not change a shared component casually after page implementation has started.

76. AI Design Workflow

AI may assist with:

Layout exploration
Component analysis
Figma inspection
Frontend implementation
Visual comparison
Variant suggestions

AI must not independently redefine the approved design language.

77. AI + Figma MCP

When Figma is connected through MCP or another design-context mechanism:

Approved Figma
      ↓
Relevant Frame / Component
      ↓
AI Agent
      ↓
Existing Frontend System
      ↓
Implementation
      ↓
Visual QA

The AI should inspect only the relevant design context needed for the task.

78. AI Figma Rules

AI agents must:

Use approved Figma designs.
Inspect relevant components before creating alternatives.
Reuse existing frontend components where appropriate.
Preserve tokens.
Preserve responsive rules.
Preserve RTL behavior.
Never introduce a new visual language without approval.
Flag design/strategy conflicts.
Avoid arbitrary pixel adjustments without understanding the underlying system.
Treat visual QA as mandatory for significant UI work.
79. Design QA

Visual QA should compare:

Figma
+
Browser
+
Design System

Check:

Layout
Typography
Spacing
Color
Imagery
Components
States
Responsive behavior
RTL
80. Accessibility QA

The design system should support:

Contrast
Focus
Keyboard
Touch Targets
Typography
Reduced Motion
Error States

Accessibility should be tested at component level before page-level QA.

81. Design System Failure Modes
Failure 1 — Too Many Components

Creating a unique component for every section.

Mitigation

Reuse patterns and primitives.

Failure 2 — Token Explosion

Creating dozens of nearly identical tokens.

Mitigation

Use semantic and purposeful tokens.

Failure 3 — Page-Specific Drift

Every page creates slightly different cards/buttons/spacing.

Mitigation

Use approved components and patterns.

Failure 4 — Figma / Code Divergence

Design evolves independently from implementation.

Mitigation

Shared token vocabulary + explicit approval process + visual QA.

Failure 5 — RTL Retrofitting

Arabic is added after English implementation.

Mitigation

Design and test RTL within the system from inception.

Failure 6 — Placeholder-Driven Design

Components are designed only around ideal placeholder text.

Mitigation

Use realistic content variation.

82. Management Validation Required

The following inputs should eventually be confirmed:

Official Logo
Brand Guidelines
Brand Colors
Approved Fonts
Corporate Imagery
Approved Photography
Iconography Preferences
Existing Marketing Materials
Existing Brand Assets
Visual Restrictions

If existing brand guidelines conflict with the proposed direction, management-approved brand guidance takes precedence.

83. Design System Success Criteria

The Figma system succeeds when:

✓ A new page can be created without inventing a new visual language.

✓ Components remain visually consistent.

✓ Designers can create variation without losing brand identity.

✓ Developers can map major design concepts into reusable code.

✓ Arabic / RTL is supported natively.

✓ Responsive behavior is intentional.

✓ Accessibility is considered at component level.

✓ Visual QA can compare implementation against a clear reference.

✓ The system feels distinctly Baghlaf rather than generic AI/SaaS.
84. Relationship to Other Documents

This document connects:

10 — Brand & Visual Direction
        ↓
11 — Figma Design System
        ↓
12 — UX Wireframes & Page Experience
        ↓
13 — Technical Architecture
        ↓
16 — QA, Testing & Visual Validation

It also depends on:

05 — Trust Architecture
08 — Content Strategy
09 — Product & Supply Network

because these influence component and page requirements.

85. Source of Truth

Visual strategy:

docs/01-strategy/10-brand-and-visual-direction.md

Figma system:

docs/01-strategy/11-figma-design-system.md

UX:

docs/01-strategy/12-ux-wireframes-and-page-experience.md

Approved business information:

docs/02-business/

Approved design:

The designated Baghlaf Steel Figma file.

Project-wide governance:

PROJECT_CONSTITUTION.md

86. Final Design System Model

The intended system is:

FOUNDATIONS
   │
   ├── Color
   ├── Typography
   ├── Spacing
   ├── Grid
   ├── Radius
   ├── Border
   ├── Elevation
   ├── Motion
   └── Iconography
          │
          ▼
PRIMITIVES
          │
          ▼
COMPONENTS
          │
          ▼
PATTERNS
          │
          ▼
TEMPLATES
          │
          ▼
PAGES
          │
          ▼
PROTOTYPE
          │
          ▼
IMPLEMENTATION
          │
          ▼
VISUAL QA
87. Final Strategic Principle

The Baghlaf Steel Figma Design System should translate the Industrial Editorial visual direction into a reusable, scalable, accessible, bilingual, and implementation-aware system. It should establish shared foundations, semantic tokens, reusable components, patterns, page templates, responsive behavior, RTL behavior, accessibility states, and clear design governance. The system should enable visual variety without visual inconsistency and should allow designers, developers, and AI agents to work from the same underlying design language. Figma remains the visual source of truth for approved interface decisions, while the system must remain grounded in Baghlaf's business reality and deliberately avoid generic AI/SaaS visual patterns.


## The most important thing about this file

I would **not** let Antigravity fill in arbitrary actual values yet.

For example, this document says:

```text
type.heading.large
space.lg
radius.medium
color.action.primary

but it deliberately does not say:

heading = 64px
space.lg = 32px
primary = #123456

Those values should come from the actual Figma design process and, where applicable, Baghlaf's existing brand guidelines.

That gives you a much cleaner pipeline:

10-brand-and-visual-direction.md
        ↓
Strategic visual language

11-figma-design-system.md
        ↓
System architecture

Figma
        ↓
Actual values + components + pages

Frontend
        ↓
Implementation

16-qa...
        ↓
Visual validation
Three decisions I especially recommend keeping

1. Semantic tokens.

Don't create tokens like:

dark-blue-2
gray-17
big-spacing

Prefer concepts such as:

color.text.primary
color.surface.default
space.section.lg
type.heading.large

That will make the Figma system much easier to maintain and map into frontend code.

2. Design the RTL system now.

Don't wait until the English pages are finished and then ask AI to "make it RTL." The component system itself should understand LTR/RTL.

3. Use representative pages to validate the system.

Rather than designing 20 pages and discovering later that the system doesn't work, use:

Homepage
Product Detail
Supply Network
Verification
Requirement Flow

as your first design-system stress test.

Those five pages will exercise almost every important visual pattern in the project.