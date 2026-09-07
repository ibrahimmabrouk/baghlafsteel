# Component Guidelines

## Purpose

This document defines the design and usage guidelines for reusable interface components in the Baghlaf Steel website.

It establishes:

- component philosophy;
- component hierarchy;
- naming;
- composition;
- variants;
- states;
- responsive behavior;
- RTL behavior;
- accessibility;
- content behavior;
- interaction rules;
- Figma-to-code consistency;
- reuse and extension rules.

The objective is to create a coherent interface system rather than a collection of independently designed pages.

---

# 1. Component Philosophy

Components should provide reusable, meaningful interface behavior.

The preferred hierarchy is:

```text
Foundations
    ↓
Primitives
    ↓
Components
    ↓
Patterns
    ↓
Sections
    ↓
Page Templates
    ↓
Pages

A component should exist because it represents a meaningful repeated pattern, not merely because a piece of markup can be extracted.

2. Core Principles
2.1 Reuse Before Creation

Before creating a component, check whether an existing component can satisfy the requirement.

Preferred process:

Search
→
Understand
→
Reuse
→
Extend
→
Create only when necessary
2.2 One Source of Visual Truth

Approved Figma designs and the design-system documentation should establish the intended visual behavior.

The implementation should follow them.

A developer or AI agent should not create a visually different component simply because an alternative implementation is easier.

2.3 Composition Over Duplication

Build complex interfaces from smaller approved components.

Example:

Requirement Form
    ↓
Form Section
    ↓
Form Field
    ↓
Input / Select / Upload
    ↓
Validation / Help / Error

Avoid creating a completely separate form system for each page.

2.4 Components Should Have Clear Responsibilities

A component should have one primary responsibility.

Avoid components that simultaneously manage:

unrelated business logic;
multiple page-level concerns;
unrelated visual systems.
3. Component Taxonomy

Components should be organized conceptually into layers.

3.1 Foundations

Includes:

Colors
Typography
Spacing
Grid
Radius
Borders
Elevation
Motion
Icons

These are not usually page components.

3.2 Primitives

Small reusable building blocks.

Examples:

Button
IconButton
Input
Label
Badge
Divider
Link
Spinner
3.3 Components

Meaningful reusable UI elements.

Examples:

ProductCard
SearchField
Breadcrumbs
TrustPanel
VerificationCard
FormField
FileUpload
Alert
Modal
3.4 Patterns

Reusable combinations of components.

Examples:

ProductGrid
FilterBar
RequirementSummary
VerificationSection
ContactPanel
3.5 Sections

Larger page-level compositions.

Examples:

HeroSection
ProductsOverview
TrustSection
SupplyNetworkSection
HowWeWorkSection
FinalCTASection
3.6 Templates

Page structures that can support multiple content instances.

Examples:

ProductListingTemplate
ProductDetailTemplate
ResourceTemplate
4. Naming

Component names should describe their role rather than their styling.

Prefer:

ProductCard
VerificationPanel
RequirementForm

over:

BlueCard
DarkBox
LargeSection
FancyButton

Styling belongs in design tokens and component variants.

5. File Naming

Frontend component file naming should remain consistent with the chosen framework conventions.

A practical structure is:

components/
├── ui/
├── product/
├── verification/
├── requirement/
├── layout/
└── sections/

The exact repository structure should follow the approved technical architecture.

6. Component Variants

Variants should represent meaningful design or behavioral differences.

Examples:

Button
├── Primary
├── Secondary
├── Ghost
└── Destructive

Input
├── Default
├── Error
├── Success
├── Disabled
└── Readonly

Avoid creating variants for arbitrary page-specific styling.

7. Component States

Interactive components should define relevant states.

Common states include:

Default
Hover
Focus
Active
Disabled
Loading
Error
Success
Selected
Expanded
Collapsed

Not every component requires every state.

The state set should correspond to the component's actual behavior.

8. State Consistency

The same state should look and behave consistently across the site.

For example:

Error

should use the established:

color;
border;
iconography;
messaging style;
spacing;
accessibility behavior.

Do not create page-specific error styles without a clear reason.

9. Component Anatomy

Each reusable component should have a defined anatomy.

Example:

FormField
├── Label
├── Required Indicator
├── Control
├── Help Text
└── Error / Success Message

Example:

ProductCard
├── Image
├── Category
├── Product Name
├── Supporting Information
└── Action

Anatomy should remain stable while content varies.

10. Component APIs

Component interfaces should remain intentional and understandable.

Prefer:

<ProductCard
  product={product}
  href={href}
/>

over APIs requiring many unrelated styling flags:

<ProductCard
  blue
  large
  extraPadding
  special
  homeVersion
  productPage
/>

A component API should expose meaningful behavior.

11. Props and Variants

When a visual difference is genuine, prefer an explicit variant.

For example:

variant="primary"

rather than exposing raw style values from the component API.

Components should not become unrestricted styling engines.

12. Content Flexibility

Components should accommodate realistic content.

Test with:

Short Content
Long Content
Arabic Content
Mixed Arabic / English
Long Product Names
Long Technical Terms
Missing Optional Content

A component should not rely on unrealistic placeholder lengths.

13. Business Content Boundaries

Components should not independently invent business information.

For example, a ProductCard should receive approved product data rather than constructing product facts from assumptions.

Conceptually:

Approved Product Data
        ↓
Product Model
        ↓
ProductCard

Not:

ProductCard
        ↓
AI invents product details
14. Product Components

Product-related components should support approved data such as:

Product Name
Category
Form
Grade
Standard
Specification
Application
Approved Supply Information

Do not imply:

inventory;
current availability;
allocation;
guarantee;

unless the relevant data state explicitly supports it.

15. Supply-Network Components

Supply-network components must preserve:

Baghlaf
Supply Source
Manufacturer
Supplier
Partner
Distributor
Agent

The component should render the approved relationship supplied by the data model.

It should not infer relationships from company names.

16. Trust Components

Trust-related components may include:

VerificationPanel
OfficialContactCard
CredentialCard
TrustIndicator
OfficialChannelBlock

They should rely on verified information.

Avoid fake trust indicators such as:

invented ratings;
fake security badges;
fake certification logos;
unsupported counters;
artificial "verified" animations.
17. Verification Components

Verification components should make official information easy to recognize.

They may communicate:

Official Domain
Official Email
Official Phone
Official WhatsApp
Authorized Representative

Only approved information should be displayed.

18. Requirement Form Components

Requirement-related components should prioritize:

Clarity
Accessibility
Validation
Error Recovery
Progress
Data Security

Components should support:

required fields;
optional fields;
help text;
validation;
errors;
loading;
successful submission;
file uploads.
19. Buttons

Buttons should communicate action clearly.

Primary action:

Submit Requirement

Trust action:

Verify Baghlaf

Secondary actions may include:

View Products
Contact Us
Learn More
Download

The final wording should follow terminology.md.

20. Button Hierarchy

Avoid presenting multiple competing primary buttons in the same context.

A typical hierarchy:

Primary
→ Main intended action

Secondary
→ Supporting action

Tertiary / Link
→ Lower-priority action

The visual hierarchy should correspond to the user's actual next step.

21. Forms

Forms should use a consistent system for:

labels;
descriptions;
inputs;
validation;
errors;
required states;
success;
disabled states.

Avoid designing every form independently.

22. Inputs

Inputs should support:

Default
Focus
Filled
Error
Success
Disabled
Readonly

Input height, typography, borders, and spacing should follow the design system.

23. Labels

Labels should be explicit and persistent where appropriate.

Avoid relying solely on placeholders to communicate field names.

Example:

Label:
Required Quantity

Placeholder:
e.g. 5000

rather than using only:

e.g. 5000
24. Validation Components

Validation feedback should:

identify the affected field;
explain the problem;
guide correction;
remain accessible;
use the approved status system.

Errors should not expose technical implementation details.

25. File Upload

File-upload components should clearly communicate:

Allowed File Types
Maximum Size
Upload State
Progress
Success
Failure
Retry

The component must not imply that uploaded documents are publicly accessible.

26. Cards

Cards should be used when they provide meaningful grouping.

Avoid excessive cardification.

The Industrial Editorial direction should allow:

open editorial sections;
structured grids;
technical tables;
information blocks;

without placing everything inside rounded cards.

27. Tables

Tables are appropriate for structured technical or business information.

Examples:

Product Specifications
Grades
Standards
Credentials
Requirement Summary

Tables should remain usable on mobile.

Where a table cannot reasonably fit on small screens, use an intentional responsive pattern rather than allowing uncontrolled overflow.

28. Navigation

Navigation components should maintain consistent:

hierarchy;
spacing;
interaction states;
responsive behavior;
keyboard behavior;
RTL behavior.

Desktop and mobile navigation should share the same information architecture.

29. Header

The header should provide access to the most important areas.

Potential priority:

Products
Supply Network
How We Work
Why Baghlaf
About
Verification
Contact
Submit Requirement

The exact navigation follows the approved sitemap and Figma.

30. Footer

The footer should consistently expose important:

Company Identity
Navigation
Official Contact
Verification
Legal / Policy
Social Channels

Only approved contact and social information should be used.

31. Breadcrumbs

Breadcrumbs should:

reflect actual information architecture;
use approved terminology;
remain readable;
support RTL;
provide useful navigation.

Example:

Home
→ Products
→ Category
→ Product
32. Modals and Dialogs

Dialogs should be used when a focused interaction requires them.

They must support:

keyboard navigation;
focus management;
close behavior;
accessible naming;
responsive layout;
RTL.

Avoid using modals simply to display ordinary content that could exist naturally on the page.

33. Alerts and Notifications

Alerts should distinguish between:

Information
Success
Warning
Error

The message should explain what happened and what the user can do next.

34. Loading States

Loading states should preserve layout stability where possible.

Avoid:

unnecessary full-screen spinners;
indefinite loading;
visual jumps;
blocking unrelated page content.

Use skeletons or contextual indicators when appropriate.

35. Empty States

An empty state should explain:

What is empty?
Why?
What can the user do next?

Avoid decorative empty states that provide no useful information.

36. Error States

Errors should be:

understandable;
actionable;
consistent;
non-technical;
accessible.

Technical details should be available to developers through appropriate logging rather than exposed to buyers.

37. Responsive Component Rules

Components must adapt to:

Desktop
Tablet
Mobile

Responsive behavior may involve:

resizing;
stacking;
collapsing;
reordering;
changing navigation patterns.

Do not simply scale desktop components proportionally.

38. RTL Component Rules

Every component that supports Arabic must define its RTL behavior.

Check:

Alignment
Spacing
Icon Direction
Order
Navigation
Tables
Forms

Physical directional icons should be mirrored only when the meaning requires it.

39. Accessibility

Every reusable interactive component should support:

Semantic HTML
Keyboard Access
Visible Focus
Accessible Name
State Communication
Error Communication
Appropriate Contrast

Accessibility must be designed into the component rather than added after implementation.

40. Motion

Component motion should be:

subtle;
purposeful;
consistent;
performant.

Examples:

Hover
Focus
Expand / Collapse
Modal
Loading
Page Transition

Respect reduced-motion preferences.

Avoid decorative animation that competes with business content.

41. Color Usage

Components should use semantic color tokens from:

color-system.md

Do not assign arbitrary raw colors within individual components.

42. Typography

Components should use approved typography tokens.

For example:

type.body
type.label
type.heading.medium
type.heading.large

Do not create arbitrary font sizes for isolated components unless the design system explicitly requires them.

43. Spacing

Spacing should use the shared spacing/token system.

Avoid arbitrary values such as:

17px
23px
37px

unless they are deliberately defined as part of the approved system.

44. Icons

Icons should follow one coherent visual language.

Consider:

stroke/weight;
size;
alignment;
semantic meaning;
RTL behavior;
accessibility.

Avoid mixing unrelated icon families.

45. Imagery

Image components should account for:

aspect ratio;
loading;
responsive sizing;
alt text;
object positioning;
performance.

Images should not imply unsupported business ownership or facilities.

46. Component Documentation

Important reusable components should document:

Purpose
Anatomy
Variants
States
Content Rules
Responsive Behavior
RTL Behavior
Accessibility
Usage

The depth of documentation should match component complexity.

47. Figma Component Requirements

Figma components should expose:

variants;
states;
responsive examples;
relevant content lengths;
Arabic/RTL examples where applicable.

Figma and code should describe the same conceptual component.

48. Figma-to-Code Mapping

Where practical:

Figma Component
        ↕
Frontend Component

Example:

Figma:
Product Card

Code:
<ProductCard />

Naming does not have to be identical in every case, but the mapping should be understandable.

49. Component Ownership

Major component groups should have an owner.

Component Group	Owner
Design Tokens	Design / Technical
Global Layout	Frontend
Navigation	Frontend / UX
Product Components	Product / Frontend
Verification	Product / Frontend
Requirement Forms	Product / Frontend
Content Components	Content / Frontend

Actual project ownership should be defined as the team develops.

50. Component Change Impact

Before modifying a shared component, identify its consumers.

Example:

Button
↓
Homepage
↓
Products
↓
Product Detail
↓
Verification
↓
Requirement Flow

A shared-component change should trigger appropriate regression testing.

51. Breaking Changes

Avoid breaking a component API or visual contract unnecessarily.

If a breaking change is necessary:

Identify Consumers
→
Update Design
→
Update Component
→
Update Consumers
→
Run Regression Tests
52. Component Duplication

Potential duplicate components should be identified regularly.

Examples:

ProductCard
ProductPreviewCard
SteelCard
ProductTile

If these represent the same meaningful pattern, consolidate them where practical.

Do not maintain multiple versions simply because different AI sessions created them.

53. Component Abstraction Rules

Do not abstract too early.

A new pattern may first be implemented locally.

If the pattern appears repeatedly and has stable behavior, promote it into a reusable component.

This avoids:

Over-abstraction

while still preventing:

Repeated Duplication
54. Component Quality Checklist

Before approving a reusable component:

[ ] Clear responsibility
[ ] Existing component search performed
[ ] Meaningful API
[ ] Variants defined where needed
[ ] States defined
[ ] Responsive behavior defined
[ ] RTL behavior defined
[ ] Accessibility considered
[ ] Semantic colors used
[ ] Typography tokens used
[ ] Spacing tokens used
[ ] Content flexibility tested
[ ] Figma alignment confirmed
[ ] Reuse documented where appropriate
55. AI Rules

AI agents creating or modifying components must:

inspect existing components first;
follow the established component taxonomy;
reuse existing tokens;
reuse existing components where possible;
avoid duplicate component systems;
avoid arbitrary styling;
preserve responsive behavior;
preserve RTL behavior;
preserve accessibility;
avoid inventing business content;
validate component states;
consider downstream consumers;
review the final diff.

The agent must not create a new visual language inside an existing component system.

56. Industrial Editorial Alignment

Components should collectively support the approved visual direction:

Industrial Editorial

The system should favor:

Strong Typography
Structured Grids
Clear Information Hierarchy
Technical Precision
Editorial Composition
Restrained Surfaces
Controlled Accents
Purposeful Motion

Avoid turning components into:

Generic SaaS Cards
Glassmorphism Panels
Excessive Gradients
Floating Blob UI
Overly Rounded Everything
Decorative 3D Elements
57. Component Review Priorities

When reviewing a component, prioritize:

1. Correctness
2. Reusability
3. Accessibility
4. Responsive Behavior
5. RTL
6. Visual Fidelity
7. Performance
8. Maintainability

A visually impressive component that is inaccessible or difficult to maintain is not considered successful.

58. Current Component Status

At the current project stage, the full production component library has not yet been implemented.

Initial priority components are:

Header
Footer
Container
Typography
Button
Link
Product Card
Product Information
Breadcrumb
Trust / Verification Panel
Form Field
Input
Select
File Upload
Alert
Requirement Form
CTA Section

These should become the initial golden components used to establish the project quality baseline.

59. Final Rule

Build components as parts of one system, not as isolated pieces of a page.

Every component should make the next page easier to build, easier to maintain, easier to validate, and more consistent with the approved Baghlaf Steel experience.


Recommended location:

```text
docs/04-design/component-guidelines.md

This gives your 04-design folder a clear separation:

04-design/
├── README.md
├── visual-direction.md
├── design-system.md
├── typography.md
├── color-system.md
├── responsive-rules.md
├── rtl-rules.md
└── component-guidelines.md

And the core relationship is:

visual-direction.md
        ↓
What should Baghlaf look and feel like?

design-system.md
        ↓
What are the foundations and tokens?

typography.md
color-system.md
        ↓
What are the exact visual foundations?

component-guidelines.md
        ↓
How should reusable UI pieces be designed and composed?

Figma
        ↓
Approved visual implementation

Code
        ↓
Actual frontend implementation

The most important rule here is reuse before creation. Once you start AI-assisted implementation, this file gives the agent a clear instruction not to create ProductCardV2, NewButton, ModernTrustCard, etc. every time a new page needs something slightly different.