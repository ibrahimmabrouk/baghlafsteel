# Baghlaf Steel — Business & Website Strategy

**Part 11 — Figma Design System**

**Version:** 0.1  
**Scope:** Figma file architecture, design foundations, tokens, typography, colors, spacing, grid, components, patterns, responsive behavior, accessibility, RTL, and design-to-code consistency  
**Status:** Working Strategy Draft  
**Primary Domain:** `baghlaf.com.sa`

---

# 11.1 Strategic Objective

The Figma Design System is the bridge between:

> **Baghlaf Steel's business strategy**

and:

> **The final production interface.**

The purpose is not simply to create attractive screens.

The system should allow the design to remain:

- Consistent
    
- Scalable
    
- Responsive
    
- Accessible
    
- Bilingual
    
- Developer-friendly
    
- AI-friendly
    
- Visually distinctive
    

The system must also make it difficult for the AI coding agent to invent arbitrary styles from page to page.

The design system therefore becomes a **visual contract** between:

```text
Management
      ↓
Strategy
      ↓
Content
      ↓
Figma
      ↓
Frontend
      ↓
AI Coding Agent
```

---

# 11.2 Figma as the Visual Source of Truth

For the website implementation:

> **Figma should be the visual source of truth.**

That means:

- Colors are defined in Figma.
    
- Typography is defined in Figma.
    
- Spacing is defined in Figma.
    
- Components are defined in Figma.
    
- States are defined in Figma.
    
- Responsive behavior is documented in Figma.
    
- RTL behavior is documented in Figma.
    

The frontend should implement the approved system.

The AI should not independently redesign the interface during coding.

---

# 11.3 Figma File Architecture

The recommended Figma file structure is:

```text
Baghlaf Steel Website
│
├── 00 — Cover
│
├── 01 — Foundations
│   ├── Brand
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   ├── Grid
│   ├── Radius
│   ├── Shadows
│   └── Motion
│
├── 02 — Components
│   ├── Navigation
│   ├── Buttons
│   ├── Forms
│   ├── Cards
│   ├── Tables
│   ├── Trust
│   ├── Product
│   ├── Process
│   └── Feedback
│
├── 03 — Patterns
│   ├── Hero
│   ├── Product Grid
│   ├── Trust Section
│   ├── Process Section
│   ├── CTA
│   └── Footer
│
├── 04 — Templates
│   ├── Homepage
│   ├── Product Listing
│   ├── Product Detail
│   ├── Supply Network
│   ├── How We Work
│   ├── Why Baghlaf
│   ├── About
│   ├── Verification
│   ├── Resources
│   ├── Contact
│   └── Requirement
│
├── 05 — Responsive
│
├── 06 — Arabic / RTL
│
├── 07 — Prototypes
│
└── 08 — Archive
```

This structure separates reusable design assets from actual page compositions.

---

# 11.4 Naming Convention

Consistent naming is essential for designers, developers, and AI agents.

Recommended convention:

```text
Foundation/
Color/Brand/Primary
Color/Neutral/900
Type/Display/XL
Spacing/6
Radius/Medium

Component/
Button/Primary/Default
Button/Primary/Hover
Button/Primary/Disabled

Card/Product/Default
Card/Product/Hover

Navigation/Header/Desktop
Navigation/Header/Mobile
```

Avoid names such as:

```text
New Button
Button Final
Button Final 2
Card New
Homepage Header Latest
```

The Figma naming system should communicate **semantics**, not temporary design decisions.

---

# 11.5 Token Philosophy

The system should use semantic design tokens.

Instead of:

```text
color = #123456
```

the design should conceptually use:

```text
color.text.primary
color.text.secondary
color.surface.default
color.surface.inverse
color.border.default
color.action.primary
```

This allows the system to evolve without redesigning every component.

---

# 11.6 Token Categories

The initial token system should cover:

```text
Color
Typography
Spacing
Sizing
Radius
Border
Shadow
Grid
Breakpoint
Motion
Opacity
Z-index
```

The final numerical values will be established in Figma.

---

# 11.7 Color Token Architecture

Recommended semantic structure:

```text
Color
│
├── Brand
│   ├── Primary
│   ├── Primary Hover
│   └── Accent
│
├── Neutral
│   ├── 0
│   ├── 50
│   ├── 100
│   ├── ...
│   └── 950
│
├── Text
│   ├── Primary
│   ├── Secondary
│   ├── Muted
│   └── Inverse
│
├── Surface
│   ├── Default
│   ├── Subtle
│   ├── Elevated
│   └── Inverse
│
├── Border
│   ├── Default
│   ├── Strong
│   └── Focus
│
└── Semantic
    ├── Success
    ├── Warning
    ├── Error
    └── Info
```

---

# 11.8 Color Strategy

The system should preserve the Part 10 direction:

> **Neutral industrial base + controlled brand accent.**

The palette should communicate:

- Steel
    
- Architecture
    
- Precision
    
- Saudi identity
    
- Professionalism
    

without becoming visually monotonous.

---

# 11.9 Light and Dark Surfaces

The design system should support at least:

### Light

Primary content environment.

### Dark / Inverse

Used for:

- Hero
    
- Major CTA
    
- Supply Network
    
- Footer
    
- Selected trust sections
    

This is preferable to maintaining a completely separate user-selectable dark mode for launch.

---

# 11.10 Typography Token Architecture

Typography should be tokenized by semantic role.

```text
Display
├── Display XL
├── Display L
└── Display M

Heading
├── H1
├── H2
├── H3
├── H4
└── H5

Body
├── Body L
├── Body M
└── Body S

UI
├── Label
├── Button
├── Caption
└── Metadata
```

The final sizes and line heights should be determined through actual typography testing.

---

# 11.11 Typography Rules

Each text style should define:

- Font family
    
- Weight
    
- Size
    
- Line height
    
- Letter spacing
    
- Case behavior where applicable
    

Avoid manually changing text properties inside individual sections unless there is an intentional exception.

---

# 11.12 Typography Scale Philosophy

The hierarchy should be strong enough to communicate importance without relying on giant headlines.

The system should support:

```text
Large statement
      ↓
Section heading
      ↓
Subheading
      ↓
Body
      ↓
Supporting detail
      ↓
Metadata
```

---

# 11.13 Arabic Typography Tokens

Arabic should have dedicated styles where necessary.

For example:

```text
Type/Arabic/Display
Type/Arabic/H1
Type/Arabic/H2
Type/Arabic/Body
Type/Arabic/Label
```

These do not necessarily need different conceptual sizes, but they should allow optical correction.

---

# 11.14 Numeral Strategy

Numerals need careful testing in both languages.

Common numerical content includes:

- 100,000 MT
    
- Dimensions
    
- Grades
    
- Standards
    
- Dates
    
- Contact numbers
    

The design system should establish consistent treatment.

---

# 11.15 Spacing System

Use a consistent spacing scale.

A conceptual base:

```text
4
8
12
16
20
24
32
40
48
64
80
96
120
144
```

Not every value must be used.

The actual scale should be optimized during design testing.

---

# 11.16 Spacing Rules

Spacing should generally be based on hierarchy:

```text
Element gap
< Component gap
< Section gap
< Page section gap
```

This produces rhythm.

Avoid arbitrary values such as:

```text
17px
23px
37px
51px
```

unless there is a deliberate reason.

---

# 11.17 Container System

The site should use standardized content containers.

Conceptually:

```text
Wide Container
Standard Container
Narrow Reading Container
Full-Bleed Container
```

This allows:

- Hero imagery to go full bleed
    
- Text to remain readable
    
- Technical content to use wider layouts
    
- Forms to remain manageable
    

---

# 11.18 Grid System

Recommended:

### Desktop

12-column grid

### Tablet

8-column grid

### Mobile

4-column grid

The exact:

- gutter
    
- margin
    
- container width
    
- breakpoint
    

values should be defined in Figma.

---

# 11.19 Breakpoint Strategy

The actual breakpoints should be based on layout behavior rather than arbitrary device names.

Conceptually:

```text
Mobile
Tablet
Desktop
Large Desktop
```

The design should focus on where the content needs to change composition.

---

# 11.20 Responsive Rules

Every major component should document:

```text
Desktop
Tablet
Mobile
```

For example:

### Product Grid

```text
Desktop → 4 columns
Tablet  → 2 columns
Mobile  → 1 column
```

This is only a conceptual example; actual component dimensions will be determined in design.

---

# 11.21 Responsive Recomposition

Components should not merely scale down.

Example:

### Desktop Hero

```text
Text  |  Large Image
```

### Mobile Hero

```text
Text
CTA
Image
```

The composition can change when required.

---

# 11.22 Border Radius

The system should use restrained radius values.

For example:

```text
None
Small
Medium
Large
Pill
```

Most industrial UI components should favor:

**Small / Medium**

rather than exaggerated rounded forms.

---

# 11.23 Shadow System

Use shadows sparingly.

Possible levels:

```text
None
Subtle
Medium
Strong
```

Most components should rely on:

- Borders
    
- Contrast
    
- Spacing
    
- Surface changes
    

rather than heavy shadows.

---

# 11.24 Border System

Borders should communicate structure.

Potential tokens:

```text
Border/Default
Border/Subtle
Border/Strong
Border/Focus
```

Tables and technical information should benefit from precise borders.

---

# 11.25 Icon System

Use one consistent icon family.

Recommended characteristics:

- Clean
    
- Technical
    
- Minimal
    
- Consistent stroke
    
- Clear at small sizes
    

The implementation should eventually use the same icon system as the frontend.

---

# 11.26 Component Architecture

The component hierarchy should be:

```text
Foundation
    ↓
Primitive
    ↓
Component
    ↓
Pattern
    ↓
Page Template
```

For example:

```text
Color + Type
      ↓
Button
      ↓
CTA Group
      ↓
Hero
      ↓
Homepage
```

---

# 11.27 Component Categories

The initial component inventory should include:

```text
Navigation
Buttons
Links
Forms
Inputs
Selects
Cards
Tables
Tabs
Accordion
Breadcrumbs
Badges
Alerts
Product Components
Trust Components
Process Components
CTA Components
Footer
```

---

# 11.28 Button System

Button variants should remain limited.

Recommended:

```text
Primary
Secondary
Tertiary / Text
```

Potential states:

```text
Default
Hover
Active
Focus
Disabled
Loading
```

The actual visual treatment should be defined in Figma.

---

# 11.29 Button Semantics

Use button styles consistently.

### Primary

Major conversion:

**Submit Requirement**

### Secondary

Supporting action:

**Verify Baghlaf**

### Tertiary

Low-priority navigation:

**Explore Products**

Do not create a new button style merely because a page needs a different color.

---

# 11.30 Link System

Links need explicit states:

```text
Default
Hover
Focus
Visited where relevant
Disabled where relevant
```

Text links should not visually compete with primary CTAs.

---

# 11.31 Navigation System

The navigation component should have:

### Desktop

- Logo
    
- Primary menu
    
- Verification
    
- Primary CTA
    
- Language switcher
    

### Mobile

- Logo
    
- Menu trigger
    
- Language
    
- Primary action where appropriate
    

Mobile navigation must not become a huge full-screen maze.

---

# 11.32 Header States

The header should support:

```text
Top / transparent
Scrolled / solid
Desktop
Mobile
RTL
```

The system should define exactly how the header changes.

---

# 11.33 Product Card

Product Card should communicate:

```text
Product Name
Category / metadata
Short description
Optional image
Primary action
```

Potential states:

```text
Default
Hover
Focused
```

Avoid creating five card variants unless the information architecture actually requires them.

---

# 11.34 Product Table

The product specification table should support:

- Label
    
- Value
    
- Optional unit
    
- Optional tooltip
    
- Responsive behavior
    

Mobile needs special handling.

Potential approaches:

```text
Horizontal scroll
```

or:

```text
Stacked key/value
```

The choice should depend on the final data.

---

# 11.35 Trust Card

A trust component might include:

```text
Icon
Trust Topic
Short explanation
Evidence / metadata
Optional link
```

Examples:

- Official Website
    
- Official Email
    
- Company Registration
    
- Official Contact
    

---

# 11.36 Verification Component

Create a dedicated reusable component:

### Verification Panel

```text
Official Baghlaf Steel Website

baghlaf.com.sa

Official Email
@baghlaf.com.sa

[Verify Baghlaf]
```

This should appear consistently across selected pages.

---

# 11.37 Process Step Component

For "How We Work":

```text
01
Requirement

02
Review

03
Sourcing

04
Coordination

05
Supply
```

Each step should support:

- Number
    
- Title
    
- Description
    
- Optional icon
    

---

# 11.38 Supply Network Component

Create a visual pattern that distinguishes:

**Baghlaf**

from:

**External Supply Sources**

Conceptually:

```text
             BAGHLAF STEEL
                    │
          Requirement Assessment
                    │
        ┌───────────┼───────────┐
        ↓           ↓           ↓
     Source A    Source B    Source C
        │           │           │
        └───────────┼───────────┘
                    ↓
                Buyer
```

This becomes one of the website's signature visual patterns.

---

# 11.39 Form System

The requirement form should have reusable components:

```text
Text Input
Email Input
Phone Input
Select
Combobox
Number Input
Textarea
File Upload
Checkbox
Radio Group
Progress Indicator
Form Section
Error Message
Success Message
```

---

# 11.40 Form States

Every field must account for:

```text
Default
Hover
Focus
Filled
Error
Disabled
Readonly
```

Optional:

```text
Loading
Success
```

These states must be represented in Figma before development.

---

# 11.41 File Upload Component

Since buyers may upload RFQs/specifications, the component should support:

```text
Idle
File selected
Uploading
Upload success
Upload error
Remove
```

The UI should communicate allowed file types and size limits once technical requirements are finalized.

---

# 11.42 Validation UX

Errors should be:

- Specific
    
- Close to the relevant field
    
- Easy to understand
    
- Actionable
    

Avoid:

> "Invalid input."

Prefer:

> "Enter the required quantity in metric tons."

where applicable.

---

# 11.43 Table System

Tables need defined:

- Header
    
- Row
    
- Hover
    
- Selected
    
- Divider
    
- Mobile treatment
    

Technical tables should remain highly legible.

---

# 11.44 Accordion

Potential use cases:

- FAQs
    
- Additional specifications
    
- Technical details
    
- Verification questions
    

The interaction should remain restrained.

---

# 11.45 Breadcrumb System

Breadcrumbs should support:

```text
Home
→ Products
→ Category
→ Product
```

For RTL:

```text
الصفحة الرئيسية
← المنتجات
← الفئة
← المنتج
```

Directional behavior should be semantic, not manually reversed per page.

---

# 11.46 Badge System

Badges should be used sparingly.

Potential semantic badges:

- Verified
    
- Technical
    
- New
    
- Available
    
- Documentation
    

Never use decorative badges as visual filler.

---

# 11.47 Alert / Notice System

Alerts may be needed for:

- Verification notices
    
- Form errors
    
- Submission confirmation
    
- Important company messages
    

Potential variants:

```text
Info
Success
Warning
Error
```

The visual treatment should remain professional.

---

# 11.48 Hero Pattern

The hero should be treated as a **pattern**, not an uncontrolled page-specific design.

Potential hero variants:

```text
Hero / Dark / Image
Hero / Light / Image
Hero / Editorial
Hero / Product
Hero / Verification
```

Each variant should be derived from the same underlying system.

---

# 11.49 CTA Pattern

The CTA pattern should support:

```text
Headline
Supporting text
Primary action
Optional secondary action
Optional image
```

The system should have light and dark variants.

---

# 11.50 Section Header Pattern

Standardized section headers may contain:

```text
Eyebrow
Heading
Supporting text
Optional action
```

This creates consistency without forcing every section to look identical.

---

# 11.51 Product Grid Pattern

The product grid should support:

- 4 columns desktop
    
- 2 columns tablet
    
- 1 column mobile
    

where appropriate.

It should also support:

- Empty state
    
- Loading state
    
- Filtering if introduced later
    

---

# 11.52 Trust Section Pattern

The trust section should combine:

```text
Claim
+
Evidence
+
Verification
+
Action
```

It should not become another generic three-card section.

---

# 11.53 Footer System

The footer should have:

```text
Brand
Navigation
Products
Trust / Verification
Resources
Contact
Language
Legal
```

It should support both LTR and RTL.

---

# 11.54 Arabic / RTL System

RTL must be designed into the system, not manually patched at the end.

Components must define:

- Direction
    
- Alignment
    
- Icon placement
    
- Padding
    
- Margin behavior
    
- Navigation order
    
- Breadcrumb direction
    
- Motion direction
    

---

# 11.55 RTL Component Principle

Avoid designing separate Arabic components unless absolutely necessary.

Prefer:

```text
Same Component
      +
RTL Behavior
```

rather than:

```text
Button English
Button Arabic
```

This reduces maintenance.

---

# 11.56 Directional Icons

Icons that communicate direction should respond semantically.

For example:

```text
LTR:
→

RTL:
←
```

But universal symbols such as:

- Search
    
- Plus
    
- Download
    
- Check
    

should generally remain visually consistent.

---

# 11.57 English and Arabic Page Pairing

Every public page should have a corresponding localized version.

Conceptually:

```text
English Page
   ↕
Arabic Page
```

Content structure should remain equivalent unless language-specific requirements justify differences.

---

# 11.58 Responsive Arabic

Arabic layouts must be tested independently.

Potential differences may appear in:

- Heading wrapping
    
- Button width
    
- Navigation density
    
- Tables
    
- Forms
    
- Breadcrumbs
    
- Paragraph rhythm
    

The design system should allow these differences without breaking the visual identity.

---

# 11.59 Accessibility Tokens

The system should document:

- Contrast requirements
    
- Focus ring
    
- Minimum target sizes
    
- Text readability
    
- Error states
    
- Reduced motion
    

Interactive targets should meet recognized accessibility guidance.

---

# 11.60 Focus System

Every interactive component should have a clear focus state.

Examples:

```text
Button
Input
Select
Link
Accordion
Navigation
Modal
Tabs
```

Focus cannot rely solely on subtle color changes.

---

# 11.61 Motion Tokens

Motion should be tokenized.

Conceptually:

```text
Duration
├── Fast
├── Normal
└── Slow

Easing
├── Standard
├── Enter
└── Exit
```

This prevents each component from inventing unrelated animation timings.

---

# 11.62 Motion Principles

Motion should:

- Clarify hierarchy
    
- Communicate transitions
    
- Reinforce interaction
    
- Support perception
    

It should not:

- Distract
    
- Delay content
    
- Create unnecessary visual noise
    

---

# 11.63 Reduced Motion

The system should specify a reduced-motion behavior.

When users prefer reduced motion:

```text
Large transitions
      ↓
Reduced / instant transitions
```

This needs to be considered during component design.

---

# 11.64 States Library

Create a dedicated page in Figma for component states.

```text
Default
Hover
Active
Focus
Disabled
Loading
Success
Error
```

This becomes extremely useful to the frontend developer and AI agent.

---

# 11.65 Empty States

The design system should support empty states where necessary.

Example:

> **No resources available yet.**

Avoid fake content simply to fill a design.

---

# 11.66 Loading States

Where asynchronous data exists:

- Skeleton
    
- Spinner where appropriate
    
- Progress indicator
    

The loading treatment should not introduce a new visual language.

---

# 11.67 Error States

Errors should be clear and calm.

The design should communicate:

```text
What happened
      ↓
What the user can do
```

rather than simply showing:

> Error.

---

# 11.68 Component Documentation

Every Figma component should ideally document:

### Purpose

What it is for.

### Usage

When to use it.

### Do

Correct usage.

### Don't

Incorrect usage.

### States

Available interaction states.

### Responsive

How it behaves across breakpoints.

### RTL

How it behaves in Arabic.

This documentation will dramatically improve AI-generated implementation.

---

# 11.69 Example Component Documentation

### Product Card

**Purpose**

Display a product in the product discovery experience.

**Do**

- Use for real product entities.
    
- Keep the primary action clear.
    
- Show verified product information.
    

**Don't**

- Use for generic feature statements.
    
- Add unrelated badges.
    
- Invent specifications.
    

**Responsive**

- Desktop: multi-column
    
- Mobile: single-column
    

**RTL**

- Mirror directional relationships.
    

---

# 11.70 Design System and AI

The AI agent should be instructed:

```text
Figma is the visual source of truth.

Do not create new colors if an existing token
can solve the problem.

Do not create new typography styles without
documented justification.

Do not invent component variants.

Do not change spacing arbitrarily.

Do not replace Figma-defined components
with generic UI library defaults.

Do not implement a component differently
on each page without a semantic reason.
```

This will become essential during Figma MCP → code implementation.

---

# 11.71 Figma Variables

Where available, use Figma Variables for:

- Colors
    
- Spacing
    
- Sizes
    
- Radius
    
- Modes where needed
    

This will make the system easier to maintain and eventually map to frontend tokens.

---

# 11.72 Design Tokens → Code

The eventual relationship should be:

```text
Figma Variables
      ↓
Design Tokens
      ↓
CSS Variables / Tailwind Theme
      ↓
React Components
```

This should be a deliberate mapping.

Avoid copying random Figma measurements into isolated CSS declarations.

---

# 11.73 Token Naming Consistency

The same semantic concepts should use related names.

For example:

```text
Figma:
color.text.primary

Code:
--color-text-primary
```

The precise token syntax can vary, but the semantic naming should remain recognizable.

---

# 11.74 Component Mapping to Code

Figma:

```text
Component:
Product/Card
```

Frontend:

```text
ProductCard
```

Figma:

```text
Navigation/Header
```

Frontend:

```text
Header
```

The mapping should be obvious.

---

# 11.75 Page Templates

Before high-fidelity page design, create page templates.

### Homepage

```text
Hero
Positioning
Products
Supply Model
Why Baghlaf
Process
Trust
Verification
CTA
```

### Product

```text
Product Hero
Specifications
Applications
Supply
Documents
CTA
```

### Verification

```text
Identity
Official Domain
Email
Phone
Office
Profiles
Authorized Contacts
Security Guidance
```

This makes page design systematic.

---

# 11.76 Figma Prototype Strategy

The prototype should prioritize high-value flows.

At minimum:

### Flow 1

Homepage → Product → Submit Requirement

### Flow 2

Homepage → Verification → Contact

### Flow 3

Homepage → How We Work → Submit Requirement

### Flow 4

Mobile Navigation → Product → Requirement

These flows will later be used for usability review.

---

# 11.77 Annotation Strategy

Important implementation details should be documented directly in Figma.

Examples:

```text
Breakpoint behavior
RTL behavior
Hover state
Sticky header
Table scrolling
Form validation
Image ratio
Content limits
```

Avoid leaving critical implementation assumptions hidden inside design files.

---

# 11.78 Design QA Checklist

Before a Figma page is approved:

```text
□ Uses approved tokens
□ Uses approved components
□ Grid is consistent
□ Typography is consistent
□ Spacing follows system
□ Desktop state defined
□ Tablet behavior defined
□ Mobile behavior defined
□ RTL considered
□ Accessibility checked
□ Hover/focus states defined
□ Content hierarchy is clear
□ CTA hierarchy is clear
□ No unsupported imagery
□ No manufacturer implication
```

---

# 11.79 Design Review Workflow

Recommended process:

```text
Strategy
   ↓
Wireframe
   ↓
Design System
   ↓
High-Fidelity Design
   ↓
Internal Review
   ↓
Management Review
   ↓
Revision
   ↓
Approval
   ↓
Development
```

Do not send unfinished high-fidelity screens directly to the developer.

---

# 11.80 Figma → MCP Readiness

Before connecting Figma to the AI coding agent, the file should have:

- Clear component names
    
- Variables
    
- Defined styles
    
- Proper auto-layout
    
- Responsive variants
    
- Component states
    
- Text styles
    
- Image treatment
    
- Documentation
    
- Page hierarchy
    

A visually beautiful but structurally disorganized Figma file will produce poor AI implementation.

---

# 11.81 Auto Layout Rules

Major components should use Auto Layout where logically possible.

Especially:

- Navigation
    
- Buttons
    
- Cards
    
- Forms
    
- Lists
    
- CTA sections
    
- Product grids
    
- Footer columns
    

Fixed positioning should be reserved for intentional visual compositions.

---

# 11.82 Figma Layer Discipline

Avoid:

```text
Frame 123
Group 17
Rectangle 293
Text Copy
```

Prefer:

```text
Hero
Hero.Content
Hero.Title
Hero.Description
Hero.Actions
Hero.Media
```

This makes the file understandable to both humans and tooling.

---

# 11.83 Component Variants

Variants should be based on meaningful properties.

Example:

```text
Button
Type = Primary / Secondary
Size = Small / Medium / Large
State = Default / Hover / Focus / Disabled
```

Avoid variants such as:

```text
Version = New
Version = New2
Version = Final
```

---

# 11.84 Figma Component Properties

Use component properties for:

- Text
    
- Boolean visibility
    
- Instance swap
    
- State
    
- Content variants
    

This makes the design system flexible without duplicating components.

---

# 11.85 Content Rules Inside Figma

Use realistic content.

Avoid:

```text
Lorem ipsum
```

for critical page layout.

Especially use realistic:

- Product names
    
- Specification labels
    
- CTA text
    
- Arabic text
    
- Contact information placeholders
    

This ensures the design reflects the actual content density.

---

# 11.86 Data-Heavy Design

Because steel procurement involves technical information, the design system must support dense information without losing clarity.

This means having strong patterns for:

- Tables
    
- Metadata
    
- Specification blocks
    
- Technical labels
    
- Documents
    
- Product codes
    

This is part of what differentiates the design from a generic corporate site.

---

# 11.87 Visual Signature

The Figma system should produce a recognizable Baghlaf signature through:

```text
Typography
+
Grid
+
Industrial imagery
+
Technical metadata
+
Structural lines
+
Controlled accent
+
Editorial spacing
+
Trust components
```

No single visual gimmick should carry the brand.

---

# 11.88 Design System Anti-Patterns

The following should be actively rejected:

```text
❌ One-off colors
❌ One-off fonts
❌ Random spacing
❌ Excessive card variants
❌ Uncontrolled border radii
❌ Inconsistent shadows
❌ Generic UI kit styling
❌ Copy-pasted components with small differences
❌ Desktop-only designs
❌ Arabic afterthought
❌ Missing component states
❌ Decorative UI without function
```

---

# 11.89 Figma File Governance

The file should have:

### Owner

Responsible for design system integrity.

### Review Process

Design changes should be reviewed before becoming system components.

### Archive

Old components should not be deleted casually.

They should be marked deprecated/archived.

---

# 11.90 Versioning

Major design-system changes should be tracked.

Conceptually:

```text
v0.1
Strategy

v0.2
Foundations

v0.3
Components

v0.4
Templates

v1.0
Approved Production Design
```

This mirrors the software development process.

---

# 11.91 Design → Development Handoff

A component is ready for development when:

```text
Visual design approved
       +
States defined
       +
Responsive behavior defined
       +
RTL behavior defined
       +
Content behavior defined
       +
Accessibility considered
```

Then it can enter implementation.

---

# 11.92 Design System and Website Strategy Connection

The relationship is:

```text
Business Strategy
       ↓
Content Strategy
       ↓
Information Architecture
       ↓
Visual Direction
       ↓
Design System
       ↓
Page Design
       ↓
Frontend
```

The design system should never contradict earlier strategic decisions.

---

# 11.93 Part 11 — Recommended Initial Component Inventory

For launch, the design system should probably contain approximately:

### Foundations

- Color tokens
    
- Typography tokens
    
- Spacing
    
- Grid
    
- Radius
    
- Border
    
- Shadow
    
- Motion
    

### Core Components

- Header
    
- Footer
    
- Button
    
- Link
    
- Input
    
- Select
    
- Textarea
    
- File Upload
    
- Breadcrumb
    
- Accordion
    
- Badge
    
- Alert
    
- Table
    

### Business Components

- Product Card
    
- Product Specification
    
- Trust Card
    
- Verification Panel
    
- Supply Source Card
    
- Process Step
    
- Requirement Summary
    
- Contact Card
    
- CTA
    

### Patterns

- Hero
    
- Section Header
    
- Product Grid
    
- Supply Network
    
- Trust Section
    
- Process Section
    
- CTA Section
    
- Contact Section
    

This is enough for a sophisticated initial website without creating a massive design system.

---

# 11.94 Definition of Done — Figma Design System

The Figma Design System is ready for page production when:

```text
□ Brand direction is approved
□ Color tokens are approved
□ Typography is approved
□ Arabic typography is approved
□ Grid is defined
□ Spacing is defined
□ Responsive breakpoints are defined
□ Core components exist
□ Component states exist
□ RTL behavior is defined
□ Accessibility considerations are documented
□ Patterns are defined
□ Naming is consistent
□ Components use Auto Layout
□ Variables/tokens are organized
□ Figma file is clean
□ AI/MCP-readable structure is established
```

---

# 11.95 Part 11 — Key Decisions

|Area|Current Decision|
|---|---|
|Figma Role|Visual source of truth|
|System Style|Industrial Editorial|
|Design Tokens|Required|
|Figma Variables|Recommended|
|Typography|Modern professional + Arabic counterpart|
|Color|Neutral industrial + controlled accent|
|Grid|12 / 8 / 4 conceptual model|
|Spacing|Systematic|
|Radius|Restrained|
|Shadows|Minimal|
|Components|Semantic|
|Patterns|Reusable|
|Responsive|Deliberately designed|
|RTL|First-class|
|Accessibility|Built in|
|Motion|Tokenized and restrained|
|AI Integration|Figma → MCP → implementation|
|Code Mapping|Token/component parity|
|Figma Documentation|Required|
|Component States|Required|
|Page Design|Built from templates|
|Content|Realistic, not lorem ipsum|
|QA|Required before development|

---

# 11.96 Part 11 — Final Strategic Statement

> **The Baghlaf Steel Figma Design System should transform the Industrial Editorial visual direction into a structured, reusable, bilingual, responsive, and developer-ready design language. Figma should serve as the visual source of truth, with semantic tokens, reusable components, documented states, responsive behavior, RTL support, accessibility considerations, and clear mappings between design and frontend implementation. The system should prevent one-off styling and AI-generated visual drift, ensuring that every page of `baghlaf.com.sa` feels like part of one coherent and intentionally designed corporate identity.**