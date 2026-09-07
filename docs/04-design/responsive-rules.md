# Responsive Rules

## Purpose

This document defines the responsive behavior of the Baghlaf Steel website across desktop, tablet, and mobile experiences.

It establishes rules for:

- layout;
- containers;
- grids;
- spacing;
- typography;
- navigation;
- components;
- forms;
- tables;
- imagery;
- interactions;
- responsive content;
- Arabic / RTL behavior;
- accessibility;
- performance.

The goal is to provide a consistent experience across different viewport sizes while preserving the intended hierarchy, usability, and Industrial Editorial visual direction.

---

# 1. Responsive Philosophy

Responsive behavior should follow:

```text
Same Information
+
Same Business Meaning
+
Same Primary Actions
+
Adapted Presentation

A mobile interface is not a reduced desktop interface.

The layout should intentionally adapt to the available space.

2. Core Principles
2.1 Content First

Responsive decisions should be based on:

content;
component behavior;
readability;
interaction requirements.

Do not design around device names alone.

2.2 Progressive Simplification

When space becomes limited, simplify presentation rather than removing important information without justification.

Examples:

Desktop
→ Multi-column information

Tablet
→ Reduced columns

Mobile
→ Stacked / prioritized information
2.3 Preserve Hierarchy

The following should remain visually important regardless of viewport:

Primary Message
Primary CTA
Critical Product Information
Verification
Requirement Action
2.4 Touch-Friendly Interaction

Mobile interactions must account for touch.

Interactive controls should have sufficiently large and separated hit areas.

Do not rely on hover for functionality.

3. Responsive Viewports

The system should support at minimum:

Mobile
Tablet
Desktop

A wider desktop/wide-screen state may be supported where appropriate.

Conceptual tokens:

breakpoint.mobile
breakpoint.tablet
breakpoint.desktop
breakpoint.wide

Exact breakpoint values are defined by the implementation/design system rather than this document.

4. Breakpoint Philosophy

Breakpoints should be selected when the design or component needs to change.

Prefer:

Content Constraint
→
Breakpoint

rather than:

Device List
→
Breakpoint

Do not create a separate breakpoint for every popular phone, tablet, or laptop.

5. Container Rules

The page should use a controlled container system.

Conceptual structure:

Viewport
│
├── Outer Margin
│
├── Content Container
│
│   └── Grid
│
└── Outer Margin

On smaller screens:

Reduced Side Padding
+
Full Available Width

On larger screens:

Controlled Maximum Width
+
Balanced Outer Margins

Avoid excessively wide text lines.

6. Grid Behavior

The grid should progressively adapt.

Conceptually:

Desktop
→ Multi-column

Tablet
→ Fewer columns

Mobile
→ Single column

The exact column counts should be defined by each layout/pattern.

Do not force every page into the same grid structure.

7. Layout Priority

When space becomes limited, preserve in this order:

1. Core Content
2. Primary Action
3. Supporting Information
4. Secondary Actions
5. Decorative Elements

Decorative elements should be the first candidates for reduction.

8. Section Spacing

Vertical spacing should scale across viewports.

Conceptual model:

Desktop
→ Generous editorial spacing

Tablet
→ Moderate spacing

Mobile
→ Reduced but still intentional spacing

Do not collapse spacing so aggressively that sections lose hierarchy.

9. Typography Scaling

Typography should adapt without destroying hierarchy.

Typical behavior:

Display / Hero
→ Largest reduction

Headings
→ Moderate reduction

Body Text
→ Minimal reduction

Small Text
→ Preserve readability

Avoid extremely small mobile typography simply to fit more content.

10. Heading Wrapping

Headings should be tested with:

Short English
Long English
Short Arabic
Long Arabic

Do not hardcode heights based on one specific headline.

Avoid text clipping.

11. Body Text

Body text should remain comfortable to read.

On larger screens:

Controlled Maximum Line Length

On mobile:

Available Width
+
Adequate Side Padding

Do not let desktop line lengths become excessively wide.

12. Navigation

Desktop navigation may display the complete primary navigation.

When space becomes limited:

Full Navigation
→
Reduced Navigation
→
Mobile Navigation

The exact transition depends on actual content and Figma.

The mobile navigation should preserve the same information architecture.

13. Header

The header should prioritize:

Logo / Identity
Primary Navigation
Language
Verification
Primary CTA

The exact priority follows the approved Figma.

On mobile, the header may simplify to:

Logo
+
Menu
+
Important Action(s)

Do not hide the primary commercial or trust path without intentional UX reasoning.

14. Mobile Navigation

The mobile menu should:

be easy to open;
be easy to close;
preserve navigation hierarchy;
support keyboard interaction where relevant;
support RTL;
prevent accidental background interaction when appropriate.

The menu should not become a completely different information architecture.

15. Language Switching

The language switcher should remain accessible on all supported viewport sizes.

English and Arabic should switch intentionally without losing:

route context;
page context;
user progress where technically appropriate.
16. RTL Responsiveness

Responsive behavior must work independently with:

LTR
RTL

Do not assume that a desktop layout that works in English will automatically work in Arabic.

Validate:

wrapping;
alignment;
navigation;
icons;
forms;
tables;
buttons.
17. Hero Sections

Hero sections should adapt substantially across viewport sizes.

Desktop may use:

Text
+
Supporting Media

Mobile may use:

Text
↓
CTA
↓
Media

where appropriate.

Avoid oversized hero media that pushes the primary message too far below the fold on mobile.

18. Hero Height

Avoid rigid fixed heights for content-heavy heroes.

Hero height should generally be content-driven.

Do not allow:

clipped headings;
hidden CTAs;
overlapping content;
excessive empty space.
19. CTA Responsiveness

Primary CTAs should remain easy to find.

Desktop may use:

Horizontal CTA Group

Mobile may use:

Stacked CTA Group

Primary actions should remain visually dominant.

20. Buttons

Buttons should adapt to available width.

On mobile:

avoid text clipping;
provide adequate touch area;
stack actions when necessary;
preserve hierarchy.

Avoid making every button full-width if that creates unnecessary visual weight.

21. Cards

Cards should adapt according to content.

Conceptually:

Desktop
→ Grid

Tablet
→ Reduced Grid

Mobile
→ Single Column

Cards should not become excessively tall because of poorly managed content wrapping.

22. Product Cards

Product cards should remain useful at every viewport.

Important information:

Product Name
Key Supporting Information
Primary Action

should remain visible.

Secondary details may be reduced or reorganized on smaller screens.

Do not remove essential product information simply to preserve a desktop card appearance.

23. Product Grids

The number of columns should adapt naturally.

Example:

Desktop
3–4 columns

Tablet
2–3 columns

Mobile
1 column

These values are examples, not fixed requirements.

The final grid depends on card dimensions and content.

24. Technical Specifications

Technical information often requires higher density than marketing content.

On desktop:

Structured Table

On mobile, use an intentional responsive pattern such as:

Horizontal Scroll
or
Stacked Key-Value Layout

Do not allow uncontrolled page-wide horizontal overflow.

25. Tables

Tables should be reviewed individually for mobile behavior.

Potential strategies:

Horizontal Scroll
Priority Columns
Stacked Rows
Card Transformation

The selected pattern should preserve technical accuracy and readability.

Never hide important data merely because the viewport is small.

26. Forms

Forms are particularly important on mobile.

Mobile forms should use:

Single-Column Layout
Clear Labels
Comfortable Inputs
Adequate Spacing
Clear Errors
Visible Primary Action

Avoid dense multi-column forms on narrow screens.

27. Requirement Form

The requirement flow should be optimized for progressive completion.

Desktop may use:

Multi-column sections

Mobile should generally move toward:

Single-column
→
Sequential sections
→
Clear progress

The user's entered information should remain understandable throughout the process.

28. Form Fields

Fields should adapt to content.

Examples:

Short Fields
→
Full-width or grouped

Long Text
→
Larger Textarea

Technical Data
→
Structured Inputs

Avoid unnecessarily narrow fields that force awkward input behavior.

29. Form Errors

Error messages must remain visible and readable on small screens.

They should not:

overflow;
overlap;
push unrelated controls unpredictably;
disappear because of fixed heights.
30. File Upload

File-upload interfaces should remain usable on mobile.

Provide:

Clear Upload Action
Allowed Types
Size Information
Progress
Success
Error
Retry

Do not require drag-and-drop as the only method.

31. Images

Images should be responsive by default.

Consider:

width;
height;
aspect ratio;
object position;
loading behavior;
resolution;
cropping.

Do not use desktop-resolution images unnecessarily on mobile.

32. Art Direction

Some images may require different crops at different viewport sizes.

Use responsive art direction when necessary.

Desktop:

Wide Editorial Crop

Mobile:

Tighter Subject-Focused Crop

Do not use a mobile crop that removes important contextual information without purpose.

33. Video / Motion Media

If video is introduced:

avoid autoplaying heavy video unnecessarily;
provide responsive sizing;
consider mobile bandwidth;
provide appropriate fallback;
respect reduced motion.

Video must not become a performance bottleneck for the core website.

34. Content Priority on Mobile

Mobile should preserve:

Identity
+
Business Role
+
Primary Information
+
Trust
+
Primary Action

Secondary decorative or low-value information may be reduced.

35. Progressive Disclosure

When content is too dense for mobile, use progressive disclosure where appropriate.

Examples:

Accordion
Expandable Details
Tabs where appropriate
"View More"

However, critical information should not be hidden unnecessarily.

36. Breadcrumbs

Breadcrumbs should remain useful on small screens.

Possible strategies:

Full Breadcrumb
→
Compressed Breadcrumb

Do not allow breadcrumbs to create horizontal overflow.

37. Footer

The footer may transition from:

Multi-column

to:

Stacked Sections

on mobile.

Important links and official contacts must remain accessible.

38. Modal / Dialog Responsiveness

Dialogs should adapt to available viewport height and width.

On mobile:

avoid excessive margins;
allow scrolling when necessary;
preserve close controls;
keep important actions visible.

Avoid dialogs that extend beyond the viewport.

39. Sticky Elements

Sticky elements should be used carefully on mobile.

Examples:

Sticky CTA
Sticky Header
Sticky Filter

Before introducing sticky behavior, verify that it does not:

obscure content;
consume excessive screen space;
interfere with scrolling;
interfere with accessibility.
40. Mobile CTA Strategy

Where appropriate, the main commercial action may become more prominent on mobile.

For example:

Product Detail
↓
Sticky / Persistent Requirement CTA

This should only be implemented if supported by the approved UX/design.

41. Interaction Differences

Some interactions may change across devices.

Example:

Desktop:
Hover reveals additional information

Mobile:
Tap / expandable interaction

Never rely on hover as the only way to access meaningful functionality.

42. Hover

Hover states are primarily relevant to pointer devices.

Critical information or functionality must remain available without hover.

43. Touch

Touch interactions should account for:

target size;
spacing;
accidental taps;
scrolling;
gestures.

Avoid tightly packed controls.

44. Keyboard

Responsive changes must not break keyboard navigation.

Check:

Focus Order
Tab Order
Menu Navigation
Dialogs
Forms
Expandable Elements
45. Accessibility Across Viewports

Accessibility must remain consistent across:

Desktop
Tablet
Mobile

Do not sacrifice:

contrast;
focus;
readability;
touch usability;
semantic structure

to achieve a specific visual layout.

46. Content Expansion

Every responsive component should tolerate content expansion.

Test with:

Long English Text
Long Arabic Text
Long Company Names
Long Product Names
Long Technical Values
Large Numbers
Long Error Messages

Avoid fixed heights where content can reasonably vary.

47. Browser Zoom

Layouts should remain functional under increased browser zoom.

Important pages should be checked for:

text clipping;
overlap;
hidden controls;
horizontal overflow;
broken navigation.
48. Orientation

Where relevant, the site should remain usable in:

Portrait
Landscape

especially on mobile/tablet.

Do not assume portrait-only usage.

49. Responsive Performance

Responsive design should consider performance.

On smaller devices:

reduce unnecessary JavaScript;
serve appropriately sized images;
avoid heavy animations;
defer non-critical resources;
minimize unnecessary client-side work.

Mobile performance is part of the experience.

50. Responsive Content Rules

Do not create completely different business content for mobile and desktop unless there is a valid UX requirement.

Prefer:

Same Source
+
Different Presentation

rather than maintaining two independently edited content sets.

51. Responsive Editorial System

The Industrial Editorial direction should survive on every viewport.

Desktop may emphasize:

Large Typography
Wide Composition
Asymmetric Layout
Large Imagery

Mobile should preserve the same character through:

Strong Typography
Clear Rhythm
Controlled Spacing
Focused Imagery
Structured Information

Do not allow mobile to collapse into a generic stacked-card interface.

52. Responsive Breakpoint Testing

Every significant component should be checked around breakpoint boundaries.

Test:

Just Below Breakpoint
At Breakpoint
Just Above Breakpoint

This helps identify:

unexpected wrapping;
layout jumps;
navigation failures;
overflow;
awkward intermediate states.
53. Device Testing Matrix

A practical validation matrix should include:

Category	Minimum
Desktop	Large + Standard
Tablet	Portrait + Landscape where relevant
Mobile	Small + Standard
Orientation	Portrait + Landscape where relevant
Language	English + Arabic
Direction	LTR + RTL

Exact devices/browsers are defined by the QA plan.

54. Responsive QA Workflow

The preferred workflow is:

Figma Desktop
      ↓
Figma Mobile
      ↓
Implementation
      ↓
Desktop Validation
      ↓
Tablet Validation
      ↓
Mobile Validation
      ↓
RTL Validation
      ↓
Accessibility Validation
      ↓
Fix
      ↓
Regression
55. Responsive Visual QA

Compare implementation against approved designs at representative viewport sizes.

Review:

Layout
Spacing
Typography
Images
Components
CTA Placement
Navigation
Forms
Tables

The objective is faithful adaptation, not identical pixel dimensions across devices.

56. Responsive Exceptions

Some components may require custom responsive behavior.

Examples:

Technical Tables
Large Data Sets
Complex Filters
Requirement Forms
Interactive Maps

Exceptions should be documented when they become reusable patterns.

57. Avoiding Responsive Hacks

Avoid solutions such as:

Large numbers of arbitrary media queries
Device-specific CSS patches
Fixed heights
Negative margins used only to repair one viewport
Hidden content used to hide broken layouts

Responsive rules should solve the underlying layout problem.

58. Responsive Design Tokens

Where practical, define tokens for:

Container
Spacing
Typography
Grid
Breakpoint
Component Size

This keeps responsive behavior consistent across the system.

59. Component-Level Responsive Rules

Reusable components should document their own responsive behavior.

Example:

ProductCard
Desktop → Grid Card
Tablet → Smaller Grid Card
Mobile → Full-width Card

Example:

Header
Desktop → Full Navigation
Tablet → Reduced Navigation
Mobile → Menu

These rules should be reflected in Figma and implementation.

60. AI Rules

AI agents implementing responsive behavior must:

inspect approved Figma desktop/mobile designs;
inspect existing responsive patterns;
use design tokens;
avoid arbitrary breakpoints;
avoid device-specific hacks;
test long content;
test English and Arabic;
test RTL;
test mobile interactions;
test accessibility;
validate intermediate widths;
review visual differences.

AI must not assume that a mobile design can be generated simply by stacking desktop sections.

61. Responsive Completion Checklist
[ ] Desktop layout validated
[ ] Tablet layout validated
[ ] Mobile layout validated
[ ] Intermediate widths checked
[ ] Navigation validated
[ ] Header validated
[ ] Footer validated
[ ] Hero validated
[ ] Typography validated
[ ] Buttons validated
[ ] Product cards validated
[ ] Product grids validated
[ ] Tables validated
[ ] Forms validated
[ ] Requirement flow validated
[ ] File upload validated
[ ] Images validated
[ ] Error states validated
[ ] Loading states validated
[ ] English validated
[ ] Arabic validated
[ ] RTL validated
[ ] Keyboard interaction validated
[ ] Accessibility validated
[ ] Performance reviewed
[ ] No unexpected horizontal overflow
62. Current Responsive Status

At the current project stage:

Responsive Philosophy:
Established

Breakpoints:
Framework Defined / Values Pending

Container System:
Framework Defined / Values Pending

Grid System:
Framework Defined / Values Pending

Responsive Typography:
Framework Defined / Values Pending

Component Responsive States:
Pending Implementation

Mobile Navigation:
Pending Figma / Implementation

Mobile Requirement Flow:
Pending Figma / Implementation

Responsive RTL:
Framework Defined / Pending Implementation

Responsive QA:
Defined / Not Yet Executed
Final Rule

Responsive design should preserve the Baghlaf Steel experience while adapting intelligently to the space available.

The goal is not:

Desktop
↓
Smaller Desktop

The goal is:

One Design System
+
Multiple Intentional Experiences

across desktop, tablet, and mobile.


Recommended location:

```text
docs/04-design/responsive-rules.md

Your 04-design structure now has a strong separation:

04-design/
├── README.md
├── visual-direction.md
├── design-system.md
├── typography.md
├── color-system.md
├── responsive-rules.md
├── rtl-rules.md
└── component-guidelines.md

The key relationship is:

design-system.md
      ↓
Overall system

color-system.md
typography.md
      ↓
Visual foundations

responsive-rules.md
rtl-rules.md
      ↓
How the system adapts

component-guidelines.md
      ↓
How reusable UI behaves

One particularly important rule for this project: do not let the AI implement responsiveness only at the end of desktop development. The approved desktop/mobile Figma relationship should be established early, especially for the Header, Product Detail, Verification, and Requirement Flow, because those are among the highest-impact experiences.