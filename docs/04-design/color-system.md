# Color System

## Purpose

This document defines the color system for the Baghlaf Steel website and design system.

It establishes:

- color architecture;
- semantic color roles;
- brand-color usage;
- surface hierarchy;
- text hierarchy;
- borders and states;
- interactive states;
- accessibility requirements;
- light/dark considerations where applicable;
- English / Arabic consistency;
- Figma-to-code token mapping.

This document defines **how color should work**.

It does not establish final brand colors unless those colors have been explicitly approved by Baghlaf Steel management or provided through an approved brand source.

---

# 1. Design Direction

The color system must support the approved visual direction:

**Industrial Editorial**

The visual language should feel:

- industrial;
- mature;
- precise;
- structured;
- premium without appearing luxurious;
- credible;
- modern;
- international;
- restrained.

Color should reinforce hierarchy and meaning rather than become decoration.

---

# 2. Core Color Principles

## 2.1 Restraint

The interface should use a controlled palette.

Avoid excessive use of:

- gradients;
- bright accent colors;
- multiple competing colors;
- neon effects;
- decorative color blocks;
- excessive transparency.

---

## 2.2 Hierarchy

Color should communicate hierarchy through:

```text
Primary
Secondary
Muted
Disabled
Interactive
Status

rather than through many unrelated colors.

2.3 Meaning Before Decoration

A color should have a defined purpose.

For example:

Primary Action
Information
Success
Warning
Error
Neutral

A color should not be introduced simply because a section "needs more visual interest."

2.4 Trust

The palette should reinforce trust through:

clarity;
stability;
contrast;
consistency;
restrained accents.

Avoid relying on color alone to communicate credibility.

3. Color Architecture

The system should distinguish between:

Brand Colors
Semantic Colors
Neutral Colors
Surface Colors
Interactive Colors
Status Colors
Data Visualization Colors

The implementation should use semantic tokens rather than directly referencing raw HEX values throughout the interface.

4. Color Layers

The system should conceptually contain:

Color Primitive
      ↓
Semantic Token
      ↓
Component Token
      ↓
UI

Example:

Raw Brand Color
      ↓
color.brand.primary
      ↓
color.action.primary.background
      ↓
Primary Button

This allows the palette to evolve without rewriting component styles.

5. Primitive Color Tokens

Primitive tokens represent the underlying color values.

Recommended structure:

color.brand.*
color.neutral.*
color.success.*
color.warning.*
color.error.*
color.info.*

Example:

color.brand.primary
color.brand.secondary

color.neutral.0
color.neutral.50
color.neutral.100
color.neutral.200
...
color.neutral.900
color.neutral.950

Exact values remain pending approved brand input.

6. Brand Colors

The final Baghlaf brand palette must come from an approved source.

Possible sources include:

Official Brand Guidelines
Approved Logo Assets
Management Approval
Approved Figma Brand Foundations

Do not derive brand colors from:

unrelated Baghlaf websites;
third-party logos;
screenshots;
social media profiles;
AI-generated palettes.
6.1 Primary Brand Color
Name: color.brand.primary
Value: TBD
Status: Pending Brand Approval

Primary brand color should generally support:

primary actions;
key accents;
active states;
selected states;
important visual emphasis.
6.2 Secondary Brand Color
Name: color.brand.secondary
Value: TBD
Status: Pending Brand Approval

Use only if the approved visual system requires a secondary brand color.

6.3 Accent Color
Name: color.brand.accent
Value: TBD
Status: Pending Brand Approval

Accent color should be used sparingly.

It should not overpower the industrial editorial character.

7. Neutral Palette

Neutral colors form the structural foundation of the interface.

They should support:

page backgrounds;
cards;
borders;
text;
muted information;
technical tables;
forms;
navigation.

Recommended conceptual scale:

neutral.0
neutral.50
neutral.100
neutral.200
neutral.300
neutral.400
neutral.500
neutral.600
neutral.700
neutral.800
neutral.900
neutral.950

Exact values should be established during the Figma foundation phase.

8. Neutral Color Usage

A useful hierarchy is:

Neutral 0 / Lightest
→ Main background / high-contrast surfaces

Light neutrals
→ Secondary surfaces

Mid neutrals
→ Borders / dividers / disabled states

Dark neutrals
→ Secondary and primary text

Darkest neutrals
→ Primary text / high-emphasis content

Exact mapping should be defined by the final design system.

9. Background Colors

The system should define semantic background tokens.

Recommended:

color.surface.page
color.surface.default
color.surface.subtle
color.surface.raised
color.surface.inverse
color.surface.brand

Examples of usage:

Page background
Card
Subtle information section
Elevated component
Dark editorial section
Brand section

Do not create independent background colors for every page.

10. Text Colors

Define semantic text hierarchy:

color.text.primary
color.text.secondary
color.text.muted
color.text.disabled
color.text.inverse
color.text.brand
color.text.link

The primary text color should provide strong readability.

Muted text must remain sufficiently legible.

11. Border Colors

Recommended semantic tokens:

color.border.default
color.border.subtle
color.border.strong
color.border.focus
color.border.error
color.border.success

Borders should support the structured, technical aesthetic of the Industrial Editorial direction.

Avoid excessive borders that make the interface visually noisy.

12. Divider Colors

Dividers should use a neutral, low-contrast color.

Recommended token:

color.divider.default

Dividers should establish grouping without becoming dominant visual elements.

13. Interactive Colors

Interactive controls should have clearly defined states.

Recommended semantic structure:

color.action.primary.background
color.action.primary.text

color.action.primary.hover
color.action.primary.active
color.action.primary.focus
color.action.primary.disabled

color.action.secondary.background
color.action.secondary.text
...

The exact token set should be adapted to the final component system.

14. Link Colors

Links should be distinguishable from ordinary text.

Recommended tokens:

color.link.default
color.link.hover
color.link.active
color.link.visited

Where visual design allows, links should also have an appropriate non-color cue.

Do not rely on color alone for important interaction distinctions.

15. Focus Colors

Keyboard focus must be visually obvious.

Recommended:

color.focus.ring

The focus indicator should maintain sufficient contrast against the surrounding surface.

Focus styling must not be removed merely for visual cleanliness.

16. Status Colors

Semantic status colors should communicate meaning consistently.

Required categories:

Success
Warning
Error
Information
Neutral

Recommended tokens:

color.status.success.background
color.status.success.text
color.status.success.border

color.status.warning.background
color.status.warning.text
color.status.warning.border

color.status.error.background
color.status.error.text
color.status.error.border

color.status.info.background
color.status.info.text
color.status.info.border
17. Success

Success color should communicate states such as:

successful requirement submission;
completed action;
valid verification;
successful upload.

Do not use green simply as decoration.

18. Warning

Warning should communicate:

incomplete information;
attention required;
non-critical risk.

It should not be used for ordinary informational content.

19. Error

Error should communicate:

invalid form fields;
failed submission;
upload failure;
system error;
security-related warning where applicable.

Error color must have sufficient contrast.

20. Information

Information color should support:

guidance;
explanatory notices;
neutral system information.

It should remain visually distinct from success/warning/error.

21. Disabled State

Disabled elements should have a distinct but accessible appearance.

Recommended tokens:

color.disabled.background
color.disabled.text
color.disabled.border

Do not reduce disabled text contrast to the point that it becomes unreadable.

22. Brand vs Status Colors

Brand colors and status colors must remain separate.

For example:

Brand Primary
≠
Success
≠
Error

Do not reuse a brand accent as a success/error indicator merely because it visually fits the palette.

23. Data Visualization

If charts or quantitative visualizations are introduced later, they should use a dedicated semantic data palette.

Example:

color.data.1
color.data.2
color.data.3
color.data.4
...

Data colors must remain distinguishable and accessible.

The data palette should not be confused with:

Success
Warning
Error

unless the visualization explicitly represents those semantic states.

24. Color Usage Ratios

The overall interface should be visually dominated by:

Neutrals
+
Structural Surfaces

with:

Brand / Accent

used to guide attention.

A practical conceptual hierarchy:

70–90% Neutral / Structural
10–30% Brand / Accent / Semantic

This is a visual guideline, not a strict mathematical requirement.

The final ratio should follow the approved Figma system.

25. Industrial Editorial Character

The palette should work with:

steel textures;
industrial photography;
architectural imagery;
technical diagrams;
documentation;
product data;
structured grids.

Color should allow photography and typography to coexist without creating visual noise.

26. Photography and Color

Photography should retain its natural character.

Avoid excessive color grading merely to force every image into the brand palette.

The system should use overlays only when necessary for:

text readability;
image hierarchy;
interaction;
visual consistency.
27. Gradients

Gradients are not a primary visual language for Baghlaf Steel.

They may be used only when they serve a clear design purpose.

Avoid:

Large decorative gradients
Rainbow gradients
Neon gradients
SaaS-style gradient backgrounds

The visual direction is primarily editorial and industrial rather than futuristic SaaS.

28. Transparency

Transparency may be used for:

overlays;
subtle image treatments;
temporary states.

Avoid excessive translucent UI surfaces.

Glassmorphism is not a core design direction.

Where translucency is used, it should remain restrained and functional.

29. Dark Surfaces

Dark surfaces may be used to create:

contrast;
editorial rhythm;
emphasis;
technical sections.

However, dark sections should remain part of the same visual system.

Recommended semantic tokens:

color.surface.inverse
color.text.inverse
color.border.inverse
30. Light / Dark Mode

A separate dark mode should not be assumed unless it is an approved product requirement.

If dark mode is introduced later, it should use semantic tokens rather than inverting raw colors automatically.

The initial website may use a light-dominant visual system with selected dark editorial sections.

Final behavior remains subject to design approval.

31. Accessibility

All color combinations must be tested for sufficient contrast.

The design system should consider:

normal text;
large text;
interactive controls;
focus indicators;
borders where they communicate boundaries;
form errors;
status messages.

Accessibility requirements take precedence over aesthetic preference.

32. Do Not Use Color Alone

Information should never rely exclusively on color.

Examples:

Error
→ Color + icon / text

Success
→ Color + confirmation text

Required field
→ Label / indicator + appropriate semantics

Selected item
→ Color + visible state

This is particularly important for:

forms;
tables;
verification;
status indicators;
product states.
33. Color in Forms

Form fields should have distinct colors for:

Default
Hover
Focus
Filled
Error
Success
Disabled
Readonly

Recommended semantic tokens should be mapped consistently across all form components.

34. Color in Verification

Verification should use color carefully.

Color should support:

Official / Verified
Information
Warning

but the actual meaning must always be explained through text and/or appropriate UI semantics.

Do not create fake visual security indicators.

35. Color in Product States

Product interfaces may need to distinguish:

Approved
Available
Under Review
Unavailable
Archived

However:

Approved
≠
Available

Color must not visually collapse those states.

36. Arabic / RTL Considerations

The color system must remain identical in meaning across:

English
Arabic
LTR
RTL

Colors should not change meaning based on direction.

For example:

Success

must remain semantically equivalent in both languages.

37. Color Tokens in Figma

Figma should contain the approved color tokens as variables/styles.

Recommended structure:

Primitive
├── Brand
├── Neutral
├── Status
└── Data

Semantic
├── Surface
├── Text
├── Border
├── Action
├── Status
└── Focus

The exact naming convention should align with:

docs/04-design/design-system.md
38. Color Tokens in Code

Frontend implementation should consume semantic tokens.

Preferred:

color: var(--color-text-primary);
background: var(--color-surface-default);
border-color: var(--color-border-default);

Avoid scattering raw values throughout components:

#123456
#abcdef
rgb(...)

unless they are part of the primitive token layer.

39. Figma ↔ Code Mapping

Every approved semantic color should have a predictable mapping between Figma and code.

Example:

Figma:
color.text.primary

        ↕
        
Code:
--color-text-primary

Naming should remain consistent.

40. Token Naming Principles

Tokens should describe meaning, not appearance.

Prefer:

color.text.primary

over:

color.dark.gray

Prefer:

color.surface.brand

over:

color.blue.background

This makes the system easier to maintain when the palette evolves.

41. Avoid Hardcoded Component Colors

A component should normally consume semantic tokens.

For example:

Button
→ action.primary

Card
→ surface.default

Error Message
→ status.error

Input
→ border.default / border.error

This prevents individual components from developing separate color systems.

42. Component-Specific Tokens

Where a component requires a specialized token, it should reference a semantic foundation.

Example:

component.button.primary.background
        ↓
color.action.primary.background

Avoid directly assigning raw HEX values inside components.

43. Brand Evolution

The system should make it possible to update the approved brand palette without redesigning the entire application.

The intended architecture is:

Brand Primitive
        ↓
Semantic Tokens
        ↓
Components
        ↓
Pages

A brand-color change should therefore be manageable at the token layer.

44. Color Review Checklist

Before approving the color system:

[ ] Brand colors approved
[ ] Neutral scale established
[ ] Surface hierarchy established
[ ] Text hierarchy established
[ ] Border hierarchy established
[ ] Interactive states established
[ ] Status colors established
[ ] Focus color established
[ ] Contrast validated
[ ] Color is not the only status indicator
[ ] English / Arabic behavior validated
[ ] Figma variables defined
[ ] Code tokens mapped
[ ] Component tokens mapped
[ ] Mobile / desktop reviewed
[ ] Industrial Editorial direction preserved
45. Current Color Status

At the current project stage:

Brand Primary: Pending Brand Approval
Brand Secondary: Pending Brand Approval
Accent: Pending Brand Approval
Neutral Palette: Pending Design System Definition
Surface Tokens: Pending
Text Tokens: Pending
Border Tokens: Pending
Interactive States: Pending
Status Colors: Pending
Focus Color: Pending
Data Visualization Palette: Not Required Yet
Dark Mode: Not Approved / Not Required Yet

No final HEX palette should be treated as official until it has been approved.

46. Final Rule

Color should establish hierarchy, meaning, and trust — not noise.

The Baghlaf Steel color system should feel:

Structured
+
Industrial
+
Editorial
+
Precise
+
Restrained
+
Credible

The palette must support the content, product information, trust architecture, and buyer journey rather than competing with them.


Recommended location:

```text
docs/04-design/color-system.md