# Design System

## Purpose

This document defines the overall design-system architecture for the Baghlaf Steel website.

It establishes the shared visual and interaction foundations used across:

- Figma;
- frontend implementation;
- reusable components;
- page templates;
- responsive layouts;
- Arabic / RTL experiences;
- accessibility;
- visual QA.

The goal is to create one coherent interface system rather than a collection of independently designed pages.

---

# 1. Design Direction

The design system must support the approved visual direction:

**Industrial Editorial**

The intended character is:

- industrial;
- editorial;
- mature;
- precise;
- structured;
- premium without appearing luxurious;
- modern;
- credible;
- international;
- restrained.

The system should feel appropriate for an international B2B steel company rather than a generic SaaS product.

---

# 2. Core Design Principles

## 2.1 Clarity First

The interface should help buyers understand information quickly.

Visual decisions should support:

```text
Understand
→
Explore
→
Evaluate
→
Verify
→
Engage

2.2 Strong Hierarchy

Visual hierarchy should make the intended reading order obvious.

Hierarchy may be established through:

typography;
spacing;
scale;
alignment;
contrast;
surface treatment;
position.

Do not depend on decoration to create hierarchy.

2.3 Structured, Not Rigid

The system should use a strong grid and predictable spacing while allowing editorial flexibility where useful.

The design should feel:

Structured
+
Human
+
Editorial

rather than mechanically repetitive.

2.4 Restraint

Avoid unnecessary visual complexity.

The system should not depend heavily on:

gradients;
glassmorphism;
excessive rounded cards;
decorative 3D;
visual noise;
excessive animation;
oversized decorative illustrations.
2.5 Evidence Over Decoration

The design should provide strong presentation for:

product information;
technical specifications;
supply relationships;
credentials;
verification information;
commercial process.

Visual polish must not replace useful evidence.

3. Design-System Architecture

The design system follows this hierarchy:

Foundations
    ↓
Tokens
    ↓
Primitives
    ↓
Components
    ↓
Patterns
    ↓
Sections
    ↓
Templates
    ↓
Pages
Foundations

The fundamental visual rules.

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
Tokens

Named values representing those foundations.

Primitives

Small reusable interface elements.

Components

Reusable functional UI units.

Patterns

Combinations of components that solve recurring problems.

Sections

Larger page-level compositions.

Templates

Reusable page structures.

Pages

Actual website experiences.

4. Source of Truth

Design truth is distributed across several sources.

Approved Figma
        ↓
Visual Source of Truth

04-design/
        ↓
Design Rules / System Documentation

Code
        ↓
Current Implementation

For approved visual design, Figma takes priority over implementation.

For business facts, docs/02-business/ remains authoritative.

Design does not override business truth.

5. Figma as Visual Source of Truth

Approved Figma should define the final visual experience for designed screens.

This includes:

layout;
typography;
color;
spacing;
components;
responsive behavior;
states;
interaction patterns;
visual hierarchy.

Code should implement the approved design rather than independently redesigning it.

6. Design Tokens

Tokens are the foundation of consistency.

The system should use semantic tokens rather than arbitrary values.

Primary token groups:

Color
Typography
Spacing
Sizing
Radius
Border
Shadow / Elevation
Motion
Layout
Breakpoint
7. Color Tokens

Detailed color rules belong in:

color-system.md

The design system should reference those tokens rather than duplicating color definitions.

Conceptual structure:

color.brand.*
color.neutral.*
color.surface.*
color.text.*
color.border.*
color.action.*
color.status.*
color.focus.*
color.data.*
8. Typography Tokens

Detailed typography rules belong in:

typography.md

The system should provide semantic roles such as:

type.display.*
type.heading.*
type.body.*
type.label.*
type.caption.*
type.code.*

Typography should establish:

hierarchy;
readability;
rhythm;
editorial character.
9. Spacing System

Spacing should follow a consistent scale.

Recommended conceptual model:

space.1
space.2
space.3
space.4
space.5
space.6
space.8
space.10
space.12
space.16
space.20
space.24

The exact numerical values should be established in the approved design system.

Avoid arbitrary one-off spacing.

10. Spacing Principles

Use spacing to establish:

Grouping
Hierarchy
Rhythm
Breathing Room
Density

Larger spacing should generally separate major ideas.

Smaller spacing should group closely related information.

11. Layout Grid

The website should use a consistent layout grid.

The grid should define:

page margins;
content width;
columns;
gutters;
section alignment.

The exact values should be established in Figma.

Conceptually:

Viewport
│
├── Outer Margin
│
├── Content Container
│   ├── Grid
│   ├── Columns
│   └── Gutters
│
└── Outer Margin
12. Container System

Pages should use a small number of consistent content widths.

Possible semantic tokens:

container.sm
container.md
container.lg
container.xl
container.full

The exact dimensions are design decisions.

Avoid creating page-specific arbitrary container widths without justification.

13. Responsive System

Responsive behavior should be designed from the beginning.

The system should support:

Desktop
Tablet
Mobile

Responsive rules should define:

container changes;
grid changes;
typography scaling;
spacing changes;
navigation;
component stacking;
image behavior;
table behavior.

Detailed rules belong in:

responsive-rules.md
14. Breakpoints

Breakpoints should be semantic rather than tied unnecessarily to individual devices.

Conceptually:

breakpoint.mobile
breakpoint.tablet
breakpoint.desktop
breakpoint.wide

The final numerical values should be established in the implementation/design system.

Do not create breakpoints solely because a specific device exists.

15. Mobile-First Consideration

The design process should consider mobile early.

This does not necessarily require every implementation to be coded mobile-first, but mobile behavior must be defined before finalizing desktop-only layouts.

Mobile should be treated as a primary experience.

16. RTL System

Arabic / RTL support is part of the design system.

The system should account for:

direction;
alignment;
spacing;
ordering;
icons;
navigation;
forms;
tables;
breadcrumbs;
component behavior.

Detailed RTL rules belong in:

rtl-rules.md
17. Bidirectional Content

The system should support mixed-script content.

Examples:

ASTM A36
EN 10025
100 MT
baghlaf.com.sa

within Arabic layouts.

The design must preserve:

readability;
technical accuracy;
directionality;
alignment.
18. Radius System

Corner radius should be controlled through tokens.

Conceptual scale:

radius.none
radius.sm
radius.md
radius.lg
radius.xl
radius.full

The Industrial Editorial direction should avoid making every element excessively rounded.

Use radius intentionally.

19. Border System

Borders should establish hierarchy without creating visual noise.

Conceptual tokens:

border.width.thin
border.width.medium
border.style.default
border.style.strong

Combined with semantic colors:

color.border.default
color.border.subtle
color.border.strong
20. Elevation

The design system should use restrained elevation.

Possible semantic levels:

elevation.none
elevation.subtle
elevation.raised
elevation.overlay

Avoid excessive floating cards and shadows.

The visual language should rely more on:

spacing;
typography;
alignment;
surfaces

than on heavy shadows.

21. Surface Hierarchy

Surfaces should create meaningful grouping.

Conceptual hierarchy:

Page
→
Section
→
Content Block
→
Interactive Element

Use:

surface.page
surface.default
surface.subtle
surface.raised
surface.inverse
surface.brand

where appropriate.

22. Iconography

Icons should follow one coherent style.

The system should define:

icon family;
stroke weight;
standard sizes;
alignment;
spacing;
directional behavior;
accessibility.

Avoid mixing incompatible icon families.

23. Icon Sizes

Use semantic sizes rather than arbitrary values.

Example:

icon.xs
icon.sm
icon.md
icon.lg
icon.xl

The exact dimensions should be defined in the final token set.

24. Imagery System

Photography should reinforce the Industrial Editorial direction.

Preferred imagery themes may include:

steel;
industrial environments;
logistics;
materials;
infrastructure;
architecture;
people working in relevant professional contexts;
Saudi industrial context.

Imagery must accurately represent what it depicts.

25. Facility Imagery

Care must be taken with facility photographs.

An image of a steel mill or manufacturing facility must not visually imply:

"This facility belongs to Baghlaf Steel"

unless that ownership/relationship is verified and approved.

Imagery is capable of making factual claims even without captions.

26. Image Treatment

Image treatment should generally be restrained.

Possible techniques:

controlled cropping;
subtle overlays;
monochrome treatment where appropriate;
editorial framing.

Avoid excessive filters that make imagery look artificial.

27. Motion System

Motion should be:

subtle;
purposeful;
consistent;
performant.

Conceptual tokens:

motion.duration.fast
motion.duration.normal
motion.duration.slow

motion.easing.standard
motion.easing.emphasized

Motion should support interaction and orientation rather than spectacle.

28. Reduced Motion

Where animation is used, the system should respect user preferences for reduced motion.

The design must remain understandable without animation.

Motion should never be required to understand critical information.

29. Component System

Detailed component rules belong in:

component-guidelines.md

The design system should establish that components are:

reusable;
composable;
accessible;
responsive;
RTL-aware;
content-flexible.
30. Primitive Components

Initial primitive system may include:

Button
Link
Icon
IconButton
Input
Select
Textarea
Label
Badge
Divider
Spinner

The final inventory should emerge from actual product requirements.

31. Core Business Components

Important Baghlaf-specific components may include:

ProductCard
ProductSpecification
ProductGrid
SupplySourceCard
VerificationPanel
OfficialContactCard
CredentialCard
RequirementForm
FileUpload
RequirementSummary
TrustSection

These should use approved business data.

32. Navigation Components

Core navigation elements include:

Header
Navigation
MobileNavigation
Breadcrumbs
Footer
LanguageSwitcher

They should follow the same information architecture across English and Arabic.

33. Form System

Forms are an important part of the commercial experience.

The design system should standardize:

Field
Label
Help Text
Required State
Error
Success
Disabled
Readonly
Upload
Progress
Confirmation

The requirement flow should use these shared patterns.

34. Status System

The system should support consistent:

Success
Warning
Error
Information
Neutral

Status meaning should not depend on color alone.

35. Component States

Reusable interactive components should support appropriate:

Default
Hover
Focus
Active
Selected
Disabled
Loading
Error
Success
Expanded
Collapsed

Only relevant states should be implemented.

36. Accessibility Foundation

Accessibility should be built into the design system.

Requirements include:

sufficient contrast;
visible focus;
keyboard interaction;
semantic structure;
accessible names;
appropriate labels;
usable error states;
reduced-motion support.

Accessibility is a system requirement, not a page-by-page afterthought.

37. Focus System

Keyboard focus should use a consistent visual treatment.

Conceptual token:

color.focus.ring

Focus should remain visible against every relevant surface.

38. Interaction Principles

Interactions should feel:

Predictable
Responsive
Calm
Clear
Purposeful

Avoid interaction patterns that:

surprise users;
hide important information;
create unnecessary friction;
use animation merely for decoration.
39. Content Flexibility

The design system must support realistic content.

Components should be tested against:

Short English
Long English
Short Arabic
Long Arabic
Mixed Scripts
Long Product Names
Long Technical Values
Missing Optional Fields
Large Numbers
Long Company Names

Designs that only work with short placeholder text are not considered production-ready.

40. Data Density

B2B information can require higher information density than consumer marketing sites.

The design system should support:

Compact Data
Normal Content
Detailed Technical Information

while maintaining readability.

41. Tables

Technical data may require tables.

The system should provide a consistent table treatment for:

specifications;
grades;
standards;
credentials;
requirement summaries.

Tables must be responsive and accessible.

42. Cards

Cards should be used selectively.

They are appropriate for:

product previews;
source summaries;
credentials;
grouped actions.

Do not place every piece of information inside a card.

Editorial layouts should remain available.

43. Editorial Layouts

The design system should support layouts beyond standard card grids.

Examples:

Split Content
Editorial Columns
Large Typography
Technical Data Blocks
Full-Bleed Photography
Asymmetric Grid
Structured Lists

These patterns help maintain the Industrial Editorial identity.

44. Page Section System

Sections should be composed from:

Container
+
Grid
+
Content
+
Components
+
Spacing

Each page should not create an entirely new section spacing system.

45. Hero System

Heroes may support:

Eyebrow
Heading
Supporting Text
Primary CTA
Secondary CTA
Media
Trust Indicator

The exact composition varies by page.

Avoid making every page use an oversized marketing hero.

46. CTA System

Calls to action should use the shared button and hierarchy system.

Primary commercial action:

Submit Requirement

Primary trust action:

Verify Baghlaf

Exact wording remains governed by:

docs/02-business/terminology.md
docs/03-content/messaging.md
47. Trust System

Trust components should emphasize:

Identity
Evidence
Verification
Official Channels
Clear Process

Do not design fake trust badges merely to make a page appear more credible.

48. Product System

The product experience should support:

Discover
→
Understand
→
Evaluate
→
Act

Components should distinguish:

Product Capability
Current Availability
Confirmed Allocation
Guaranteed Supply

when those states exist in the data model.

49. Supply Network System

The supply-network experience should clearly distinguish:

Baghlaf Steel
Supply Source
Manufacturer
Supplier
Partner
Distributor
Agent

The visual design should not imply ownership or authorization through layout or imagery.

50. Verification System

Verification should have a dedicated visual language.

The experience should make official information easy to identify without relying on fake security visuals.

Core elements may include:

Official Domain
Official Email
Official Phone
Official WhatsApp
Official Social Channels
Authorized Representatives

Only approved information may be displayed.

51. Requirement Experience

The requirement journey should use progressive disclosure where appropriate.

Conceptual structure:

Requirement
→
Product
→
Quantity
→
Technical Information
→
Destination / Delivery
→
Commercial Information
→
Documents
→
Review
→
Submit

The exact workflow follows approved business and technical requirements.

52. Forms and Mobile

Forms must remain usable on small screens.

Avoid:

overly dense multi-column mobile forms;
tiny inputs;
horizontal scrolling;
unclear validation;
inaccessible controls.
53. Design States

Every major interactive component should be designed for:

Normal
Empty
Loading
Error
Success
Disabled

This prevents the design system from representing only the ideal state.

54. Empty States

Empty states should communicate:

What is missing
Why it is missing
What the user can do next

They should remain visually consistent with the overall system.

55. Error States

Error presentation should remain:

clear;
calm;
actionable;
accessible.

Avoid visually aggressive error treatment that creates unnecessary anxiety.

56. Internationalization

The design system should support:

English
Arabic
LTR
RTL

from the beginning.

The layout should tolerate language expansion.

Do not assume English text length when defining component dimensions.

57. Design Tokens and Code

The design system should map cleanly to frontend tokens.

Conceptually:

Figma Variable
        ↕
Design Token
        ↕
CSS Variable / Theme Token
        ↕
Component

Example:

Figma:
color.text.primary

Code:
--color-text-primary
58. Token Naming

Tokens should describe semantic purpose.

Prefer:

color.text.primary

over:

gray.900

Prefer:

surface.brand

over:

dark.blue.background

Semantic naming makes future redesign safer.

59. Design-System Versioning

Significant design-system changes should be versioned conceptually.

Example:

Design System v1.0

Future breaking changes may become:

v2.0

Minor additions may increment smaller versions according to the project's chosen convention.

Versioning should help explain meaningful changes rather than creating unnecessary ceremony.

60. Design-System Change Management

Before changing a shared token or component:

Identify Consumers
→
Update Figma
→
Update Token
→
Update Code
→
Run Visual QA
→
Run Regression

Do not change shared foundations casually.

61. Figma Structure

The recommended Figma file architecture is:

00 — Cover
01 — Foundations
02 — Components
03 — Patterns
04 — Page Templates
05 — Wireframes
06 — Desktop Pages
07 — Mobile Pages
08 — Arabic / RTL
09 — Prototype
10 — Archive

This follows the architecture established in:

11-figma-design-system.md
62. Figma Foundations

The Foundations page should contain:

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

The exact values should become the approved visual baseline.

63. Figma Components

The Components page should contain approved reusable components and their variants.

Each important component should show relevant states.

Examples:

Button
Input
Select
Card
Product Card
Verification Panel
File Upload
Navigation
64. Figma Patterns

Patterns should demonstrate how components combine.

Examples:

Product Grid
Filter Bar
Verification Section
Requirement Summary
Contact Panel
CTA Section
65. Figma Page Templates

Templates should establish reusable page structures.

Examples:

Product Listing
Product Detail
Resource
Company
Verification
Requirement
66. Design Handoff

Design handoff should provide enough information for implementation.

Useful handoff information includes:

Dimensions
Tokens
Typography
Components
States
Responsive Rules
Assets
Interaction Notes
RTL Notes

The frontend should not rely on visual guesswork when approved design specifications exist.

67. Design QA

Design QA should compare:

Approved Figma
        ↕
Implemented Interface

Review:

layout;
spacing;
typography;
color;
imagery;
component states;
responsive behavior;
RTL;
interaction.
68. Design Accessibility QA

Before final approval, validate:

Contrast
Focus
Typography
Touch Targets
Keyboard Interaction
Error States
Reduced Motion
Screen Reader Semantics

The exact technical validation process belongs in 07-qa/.

69. Design Consistency Rules

Do not introduce:

New Color
New Font Size
New Radius
New Shadow
New Button Style
New Card Style
New Spacing Value

for a single page unless there is a clear system-level reason.

Repeated exceptions should trigger an update to the design system.

70. Exception Handling

Sometimes a genuine requirement needs an exception.

The preferred process is:

Identify Need
→
Determine Why Existing System Is Insufficient
→
Evaluate Impact
→
Approve Exception
→
Document

An exception should not silently become a new pattern.

71. AI Design Rules

AI agents working on design or UI implementation must:

read relevant design documentation first;
use approved Figma as visual reference;
reuse existing components;
use design tokens;
avoid arbitrary values;
preserve Industrial Editorial direction;
preserve responsive behavior;
preserve RTL behavior;
preserve accessibility;
avoid inventing brand colors;
avoid creating unrelated visual systems;
validate implementation visually.

AI must not redesign approved screens merely because an alternative appears more aesthetically appealing.

72. Current Design-System Status

At the current project stage:

Visual Direction:
Industrial Editorial — Established

Brand Colors:
Pending Approval

Typography:
Pending Final Brand / Design Decision

Spacing System:
Framework Defined / Values Pending

Grid:
Framework Defined / Values Pending

Responsive Rules:
Framework Defined / Values Pending

RTL Rules:
Framework Defined / Values Pending

Component Library:
Not Fully Implemented

Figma Design System:
Not Fully Implemented

Frontend Token System:
Not Fully Implemented

Golden Components:
Pending Implementation

This is an intentional foundation state.

73. Design-System Completion Criteria

The initial design system can be considered ready for broad implementation when:

[ ] Visual direction approved
[ ] Brand colors approved
[ ] Typography approved
[ ] Spacing scale defined
[ ] Grid defined
[ ] Responsive rules defined
[ ] RTL rules defined
[ ] Core tokens defined
[ ] Core components defined
[ ] Component states defined
[ ] Accessibility requirements defined
[ ] Figma foundations implemented
[ ] Figma components implemented
[ ] Code tokens mapped
[ ] Golden components validated
Final Rule

The design system exists to make quality repeatable.

A strong Baghlaf Steel interface should not depend on one designer remembering every visual decision or one AI agent reproducing a page correctly by chance.

The system should make the intended experience:

Defined
→
Reusable
→
Consistent
→
Responsive
→
Accessible
→
Implementable
→
Validatable

The goal is not to make every page look identical.

The goal is to make every page unmistakably part of the same Baghlaf Steel digital experience.


Recommended location:

```text
docs/04-design/design-system.md

With this in place, the 04-design hierarchy becomes:

04-design/
├── README.md
├── visual-direction.md
├── design-system.md
├── typography.md
├── color-system.md
├── responsive-rules.md
├── rtl-rules.md
└── component-guidelines.md

The distinction between the core files is:

visual-direction.md
    ↓
What should the brand experience feel like?

design-system.md
    ↓
What is the complete visual-system architecture?

typography.md
    ↓
How does typography work?

color-system.md
    ↓
How does color work?

responsive-rules.md
    ↓
How does the system adapt across screen sizes?

rtl-rules.md
    ↓
How does the system behave in Arabic / RTL?

component-guidelines.md
    ↓
How are reusable components designed and composed?

This makes design-system.md the orchestrator of the design layer, while the other files own their specific domains.