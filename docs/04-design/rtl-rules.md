# RTL Rules

## Purpose

This document defines the right-to-left (RTL) behavior of the Baghlaf Steel website for Arabic-language experiences.

It establishes rules for:

- document direction;
- layout;
- alignment;
- spacing;
- navigation;
- components;
- icons;
- typography;
- forms;
- tables;
- data presentation;
- mixed Arabic / English content;
- responsive behavior;
- interaction;
- motion;
- accessibility;
- Figma;
- frontend implementation;
- RTL quality assurance.

Arabic is a first-class website experience.

RTL must be considered during design and implementation, not added as a visual patch after the English/LTR experience is completed.

---

# 1. RTL Philosophy

The core principle is:

> **Same business meaning, intentionally adapted interface.**

Arabic should preserve:

```text
Business Meaning
+
Information Hierarchy
+
Functionality
+
Brand Character

while adapting:

Direction
+
Alignment
+
Flow
+
Navigation
+
Interaction

The goal is not to mirror every visual element mechanically.

2. Core Principles
2.1 Arabic Is First-Class

Arabic must not be treated as:

secondary content;
a machine-translation layer;
a late-stage adaptation;
an optional visual patch.

RTL behavior should be part of the design system from the beginning.

2.2 Mirror Meaningful Layout Direction

Elements that represent directional flow should generally follow RTL.

Examples:

Breadcrumb progression
Directional arrows
Step progression
Navigation flow
Previous / Next

But not every visual element should be mirrored.

2.3 Preserve Non-Directional Elements

Some elements should remain visually unchanged.

Examples may include:

Logos
Product photography
Technical diagrams
Certain icons
Charts
Brand marks

Each element should be evaluated based on meaning.

3. Document Direction

Arabic pages should use:

dir="rtl"

at the appropriate document/application level.

The implementation should avoid manually applying RTL styles to every individual element when a proper document-level direction system can handle the behavior.

4. Language and Direction

The language state should determine the appropriate direction:

English
→ LTR

Arabic
→ RTL

The language switcher should update both language and direction correctly.

Switching languages should not result in:

Arabic Content
+
LTR Layout

or:

English Content
+
RTL Layout

unless a specific mixed-direction component intentionally requires it.

5. Logical CSS Properties

Where possible, use logical CSS properties rather than physical left/right properties.

Prefer concepts such as:

margin-inline-start
margin-inline-end
padding-inline-start
padding-inline-end
inset-inline-start
inset-inline-end
border-inline-start
border-inline-end

over unnecessarily hardcoded:

margin-left
margin-right
padding-left
padding-right

This makes components more naturally compatible with both LTR and RTL.

6. Text Alignment

Arabic body text should generally align to the start of the reading direction.

Conceptually:

LTR → text-align: start
RTL → text-align: start

Avoid using explicit left alignment for ordinary text unless there is a genuine design reason.

7. Centered Text

Centered text remains centered in both directions.

Use centered alignment intentionally for:

selected hero treatments;
labels;
compact status messages;
certain CTA sections.

Do not center text simply to avoid defining RTL behavior.

8. Typography

Arabic typography should use the approved Arabic typeface defined by:

typography.md

The type system should account for:

Arabic character forms;
line height;
weight;
readability;
heading density;
mobile behavior;
mixed-script content.

Do not force an English font onto Arabic text unless it has been intentionally selected for Arabic support.

9. Arabic Line Height

Arabic often requires different line-height behavior from Latin text.

The system should define appropriate Arabic line-height tokens where necessary.

Conceptually:

type.arabic.heading.*
type.arabic.body.*

Final values belong in the approved typography system.

10. Arabic Text Expansion

Arabic content may occupy a different amount of space than English.

Components must tolerate:

Long Arabic Headings
Long Arabic Buttons
Long Arabic Navigation
Long Arabic Labels
Long Arabic Error Messages

Do not define fixed widths based solely on English content.

11. Navigation

Navigation should follow RTL reading and interaction flow.

For example:

Arabic:

[Logo]                       [Menu]

and navigation ordering should reflect the approved Arabic information hierarchy.

The underlying sitemap remains the same.

RTL should change presentation, not information architecture.

12. Header

The header should adapt intentionally between:

LTR
RTL

Typical behavior may include:

LTR:
Logo → Navigation → Actions

RTL:
Actions / Navigation → Logo

The exact arrangement should follow the approved Figma design.

Do not assume that a simple flex-direction: row-reverse automatically produces the correct result.

13. Mobile Navigation

The mobile menu must support RTL.

Validate:

menu alignment;
item order;
close control;
submenu direction;
active item;
language switcher;
primary CTA.

The mobile menu should remain consistent with the same information architecture.

14. Breadcrumbs

Breadcrumb progression should follow the reading direction.

For example:

English:
Home → Products → Category → Product

Arabic:
Product ← Category ← Products ← Home

The actual visual treatment should remain natural and understandable for Arabic users.

Directional separators/arrows must reflect their semantic direction.

15. Directional Icons

Directional icons require semantic analysis.

Examples:

Arrow Right
Arrow Left
Chevron Right
Chevron Left
Next
Previous
Back
Forward

These should generally mirror when their meaning is directional.

However, icons representing an object rather than direction may remain unchanged.

16. Icons That Usually Should Not Mirror

Do not automatically mirror:

Search
Settings
Download
Upload
Telephone
Email
Home
Calendar
Brand Logos
Technical Symbols

Mirroring must be based on meaning, not the assumption that everything visual must reverse.

17. Back / Forward

Navigation controls must preserve their meaning.

For example:

LTR:
← Back
Next →

RTL:
→ Back
← Next

The icon direction should communicate the direction of navigation relative to the current language.

18. Progress Indicators

For sequential processes, progress direction may change with RTL.

Example:

LTR:
Step 1 → Step 2 → Step 3

RTL:
Step 3 ← Step 2 ← Step 1

The visual progression must remain understandable.

19. Requirement Flow

The requirement journey should support RTL naturally.

Conceptually:

Requirement
→ Product
→ Quantity
→ Technical Information
→ Destination
→ Commercial Information
→ Documents
→ Review
→ Submit

In Arabic, the visual progression should follow the RTL reading direction while preserving the same logical sequence.

The sequence itself must not change.

20. Forms

Arabic forms should use RTL-aware:

labels;
inputs;
helper text;
validation;
select controls;
checkboxes;
radio buttons;
upload controls.

The logical form order remains the same.

21. Input Alignment

Text entered in Arabic should generally align to the start of the RTL direction.

However, values with inherently different formatting should use appropriate alignment.

Examples:

Arabic Name
→ RTL / start

Email
→ LTR-oriented

Website URL
→ LTR-oriented

Phone Number
→ Direction-aware formatting

Product Code
→ LTR-oriented

Technical Standard
→ LTR-oriented where appropriate
22. Bidirectional Text

Mixed-direction content is expected in an international steel website.

Examples:

ASTM A36
EN 10025
100 MT
baghlaf.com.sa
sales@example.com

inside Arabic content.

Use appropriate bidirectional text handling.

Do not attempt to visually reverse technical strings just because the surrounding text is RTL.

23. Numbers

Numbers should remain technically correct.

Examples:

100,000 MT
50 mm
2026
ASTM A36

The representation should remain unambiguous in Arabic layouts.

Do not alter values simply to make them visually conform to RTL.

24. Units

Units should remain associated with the correct value.

Examples:

50 mm
100 MT
200 kg

The visual order should remain understandable in both directions.

25. Product Codes

Product codes and technical identifiers should generally remain unchanged.

Examples:

ASTM A36
S275JR
EN 10025

Do not translate, reverse, or reorder technical identifiers.

26. Email Addresses

Email addresses are inherently LTR.

When displayed inside RTL content:

preserve the original email;
prevent undesirable visual reordering;
ensure copy/paste produces the correct value.
27. URLs

URLs are inherently LTR.

Arabic interfaces must preserve:

https://...
www...
baghlaf.com.sa

without visual or semantic corruption.

28. Phone Numbers

Phone numbers should remain copyable and recognizable.

Use an intentional direction strategy where required.

Do not rely solely on default browser bidirectional rendering for important contact information.

29. Technical Tables

Technical tables require special attention in RTL.

The visual order may change, but the meaning of:

Specification
Value
Unit

must remain obvious.

Column order should follow the approved Arabic design rather than simply mirroring every column mechanically.

30. Data Tables

For general business tables, evaluate each column.

Some fields may naturally read RTL:

Description
Name
Category

Others may remain LTR-oriented:

Email
URL
Product Code
Reference Number
Technical Standard
31. Product Specifications

For specification interfaces, preserve technical clarity.

Example concept:

Specification | Value
Thickness     | 50 mm
Grade         | ASTM A36

The Arabic version may visually place the label/value columns differently, but must preserve the same relationship.

32. Cards

Cards generally support RTL through:

content alignment;
icon positioning;
spacing;
action placement.

Do not blindly reverse decorative media.

For example:

Product Image
+
Product Information

may require a deliberate Arabic composition rather than a simple row reversal.

33. Product Cards

Product cards should preserve the hierarchy:

Product Name
Supporting Information
Action

The action position should follow the approved RTL design.

Product imagery should not automatically move unless that improves the intended layout.

34. Buttons

Buttons should support RTL text naturally.

For buttons containing icons:

Icon + Text

the icon position should depend on its semantic relationship with the action.

Examples:

Arrow / directional icon
→ Usually mirrors

Download icon
→ Usually stays semantically unchanged
35. CTA Groups

CTA groups should retain the same priority in both directions.

For example:

Primary
+
Secondary

must remain visually distinguishable regardless of direction.

RTL should not accidentally make a secondary action appear primary.

36. Alerts

Alerts should adapt:

Icon
→
Message
→
Optional Action

according to RTL layout rules.

The alert's semantic state remains identical.

37. Validation Errors

Validation messages should appear naturally in RTL.

The association between:

Field
↕
Error

must remain obvious.

Do not rely on left/right positioning to communicate the relationship.

38. Checkboxes and Radio Controls

Controls should appear on the appropriate side of labels for RTL.

The visual group should remain easy to scan.

Keyboard behavior and accessible naming must remain unchanged.

39. Select / Dropdown Controls

Dropdowns should support:

RTL labels;
RTL option lists;
correct alignment;
appropriate directional icons;
keyboard interaction.

Technical or LTR values should remain correctly represented.

40. File Upload

Arabic upload components should clearly communicate:

Upload
Accepted Formats
Maximum Size
Progress
Success
Failure
Retry

Drag-and-drop should not be the only interaction.

41. Search

Search fields in Arabic should:

align Arabic text naturally;
preserve LTR technical values;
keep the search icon semantically positioned;
support keyboard interaction.

Do not force URL or technical content into RTL direction.

42. Language Switcher

The language switcher should clearly communicate:

English
العربية

The control should remain accessible from both language modes.

Switching languages should update:

Language
Direction
Typography
Content
Route / Locale

as required by the architecture.

43. URLs and Localization

Where localized routes are used:

English Route
↔
Arabic Route

the language switch should preserve the user's current page where an appropriate localized equivalent exists.

If no localized equivalent exists, fallback behavior should be intentional.

44. RTL and Responsive Behavior

RTL must work across:

Desktop
Tablet
Mobile

Do not validate RTL only on desktop.

A layout that looks correct in Arabic desktop may still fail on mobile through:

overflow;
wrapped buttons;
navigation;
tables;
form controls.
45. RTL and Responsive Breakpoints

Responsive layout rules apply to both:

LTR
RTL

but certain components may require direction-specific adjustments.

Any such adjustment should be intentional and reusable.

Avoid isolated one-off RTL CSS hacks.

46. RTL and Motion

Directional animations may need to follow RTL direction.

Examples:

Slide In
Slide Out
Drawer
Carousel
Accordion
Page Transition

An animation that enters from the right in LTR may need to enter from the left in RTL when the motion represents reading/navigation direction.

Purely decorative animation may not need mirroring.

47. Carousels

Carousel controls should preserve semantic direction.

For example:

Previous
Next

must remain meaningful in RTL.

The order of items may or may not reverse depending on the carousel's data/interaction semantics.

Do not automatically reverse the underlying data.

48. Image Galleries

Image ordering should follow the intended content sequence.

Do not reverse image arrays simply because the layout is RTL unless the product experience explicitly requires that behavior.

49. Charts and Data Visualization

RTL charts require careful consideration.

Do not automatically reverse axes or data ordering.

The underlying data should remain unchanged.

Only presentation should adapt where appropriate.

50. Maps

If geographic maps are introduced:

map orientation should not be altered simply because the UI is RTL;
geographic coordinates must remain unchanged;
map controls should adapt their interface placement appropriately.
51. Scroll Behavior

Horizontal scrolling should preserve usability.

Examples include:

Technical Tables
Product Carousels
Media Galleries

RTL scrolling behavior should be tested across browsers.

Do not assume all browsers handle RTL horizontal scrolling identically.

52. Side Panels / Drawers

A drawer that represents navigation or contextual content may appear from:

LTR → Left / Right depending on purpose
RTL → Corresponding logical side

The side should be determined by semantic meaning, not simply by language.

53. Sticky Elements

Sticky elements must remain correctly positioned in RTL.

Check:

Sticky CTA
Sticky Header
Sticky Filters
Sticky Table Columns

Particular attention is required for sticky columns using logical positioning.

54. Visual Hierarchy

RTL must not accidentally alter importance.

The following must remain clear:

Primary Message
Primary CTA
Trust Action
Product Information
Secondary Actions

Direction should change reading flow, not hierarchy.

55. Spacing

Use logical spacing wherever possible.

Prefer:

inline-start
inline-end
block-start
block-end

over assumptions based on left/right.

This reduces duplicated RTL styles.

56. Borders

Borders that communicate direction should be evaluated carefully.

For example:

border-left
border-right

may become:

border-inline-start
border-inline-end

when the border represents a logical relationship.

57. Shadows

Shadows generally do not need mirroring unless the shadow direction intentionally communicates directional movement.

Most standard elevations should remain visually consistent.

58. Decorative Elements

Do not mirror decorative shapes automatically.

Examples:

Editorial lines
Geometric forms
Industrial textures
Background patterns
Decorative blocks

Their composition should follow the approved design rather than mechanical mirroring.

59. Industrial Editorial Direction

RTL should preserve the approved:

Industrial Editorial

character.

Arabic should still feel:

Structured
Editorial
Precise
Modern
Industrial
Premium
Restrained

Do not allow RTL implementation to reduce the website into a generic mirrored card layout.

60. Content Density

Arabic may alter line wrapping and therefore perceived density.

Review:

Headings
Cards
Tables
Forms
Navigation

after localization.

Do not solve density issues by simply reducing font sizes.

61. Arabic Button Widths

Buttons should accommodate Arabic wording naturally.

Avoid fixed widths based on English labels.

For example:

Submit Requirement

and its Arabic equivalent may have different visual widths.

The component should adapt without clipping.

62. Arabic Navigation Width

Navigation should be tested with the actual approved Arabic labels.

Do not assume English navigation measurements remain valid.

Potential adaptations include:

Reduced Gap
Different Breakpoint
Collapsed Navigation

rather than shrinking text excessively.

63. Arabic Form Width

Form layouts should account for:

longer Arabic labels;
longer error messages;
different line wrapping.

Do not create fixed label widths that work only in English.

64. Accessibility

RTL must not reduce accessibility.

Validate:

Keyboard Navigation
Focus Order
Accessible Names
Reading Order
Screen Reader Output
Form Associations
Error Announcements
Contrast
Touch Targets

The DOM order should represent logical content order even when CSS changes visual positioning.

65. DOM Order vs Visual Order

Avoid excessive use of CSS reordering to create RTL layouts.

Prefer the DOM to follow logical content order.

Visual reordering should be used only where necessary.

This is important for:

accessibility;
keyboard navigation;
screen readers;
maintainability.
66. Language Direction in Components

Reusable components should respond to the current direction rather than containing separate duplicated Arabic/LTR implementations whenever possible.

Preferred:

One Component
+
Logical Direction Rules

over:

English Component
+
Arabic Component

unless the interaction genuinely differs.

67. Direction-Aware Design Tokens

Where practical, use tokens and utilities that operate logically.

Examples:

spacing.inline.start
spacing.inline.end

radius.logical.start
radius.logical.end

position.inline.start
position.inline.end

The exact token architecture belongs to the implementation.

68. Figma RTL Design

Figma should include dedicated Arabic / RTL examples.

Recommended page:

08 — Arabic / RTL

It should contain:

Header
Navigation
Hero
Product Card
Product Detail
Forms
Verification
Requirement Flow
Tables
Footer
69. Figma RTL Rules

RTL designs should demonstrate:

text alignment;
navigation order;
component mirroring;
directional icons;
Arabic typography;
mixed-direction data;
responsive behavior.

Do not rely solely on mirrored screenshots.

70. Figma ↔ Code

The approved Figma RTL behavior should map predictably to frontend implementation.

Conceptually:

Figma RTL Component
        ↕
Direction-Aware Component
        ↕
Arabic Website
71. Content Rules

Arabic content must follow:

docs/03-content/arabic-content.md

Terminology must follow:

docs/02-business/terminology.md

Claims must follow:

docs/02-business/claims-matrix.md

RTL behavior does not authorize changes to business wording.

72. English–Arabic Meaning

The following must remain consistent:

Business Facts
Claims
Product Information
Supply Relationships
Commercial Process
Primary Actions

Arabic may change sentence structure, but not business meaning.

73. RTL QA

Every major page should be validated in both:

LTR
RTL

and at representative viewport sizes.

74. RTL QA Checklist
[ ] Document direction correct
[ ] Navigation order correct
[ ] Header correct
[ ] Mobile menu correct
[ ] Breadcrumbs correct
[ ] Typography correct
[ ] Headings wrap correctly
[ ] Buttons correct
[ ] Icons reviewed individually
[ ] Product cards correct
[ ] Product detail correct
[ ] Tables readable
[ ] Forms correct
[ ] Validation errors correct
[ ] File upload correct
[ ] Email / URL fields correct
[ ] Technical values correct
[ ] Requirement flow correct
[ ] Verification flow correct
[ ] Footer correct
[ ] Responsive behavior correct
[ ] Keyboard order correct
[ ] Screen-reader order considered
[ ] No unexpected horizontal overflow
[ ] No visual clipping
[ ] Motion direction reviewed
[ ] Figma comparison completed
75. RTL Testing Matrix

Representative testing should include:

Experience	English / LTR	Arabic / RTL
Desktop	✓	✓
Tablet	✓	✓
Mobile	✓	✓
Navigation	✓	✓
Product	✓	✓
Verification	✓	✓
Requirement	✓	✓
Forms	✓	✓
Tables	✓	✓
76. Browser Testing

RTL should be tested in the supported browsers defined by the QA plan.

Particular attention should be given to:

flex/grid behavior;
form controls;
horizontal scrolling;
sticky positioning;
mixed-direction text;
browser-native controls.
77. RTL Regression

Changes to shared components should trigger RTL regression checks.

Especially:

Header
Footer
Button
Input
Select
ProductCard
Breadcrumb
Modal
Table
Requirement Form

A component that works in English but breaks in Arabic is not considered complete.

78. RTL Bug Severity
Critical

Core navigation, requirement submission, or major content becomes unusable.

High

Important layout or interaction is substantially broken.

Medium

Localized component issue with meaningful UX impact.

Low

Minor alignment or visual inconsistency.

Critical/high RTL issues should generally block release of the affected experience.

79. AI Rules

AI agents implementing Arabic / RTL must:

read this document before making RTL changes;
inspect existing direction-aware patterns;
use logical CSS where appropriate;
use approved Arabic terminology;
preserve technical LTR values;
inspect actual Arabic content;
validate mobile and desktop;
test intermediate widths;
review icons individually;
preserve accessibility;
preserve DOM reading order;
compare implementation with approved Figma;
avoid duplicating English and Arabic component systems unnecessarily.

AI must not treat:

row-reverse
+
direction: rtl

as a complete RTL implementation.

80. Common RTL Failure Modes

Avoid:

Mirroring Everything
Fixed Left/Right Positioning
Broken Technical Values
Reversed Product Codes
Incorrect Arrow Direction
LTR Email / URL Corruption
English-Sized Buttons
Clipped Arabic Text
Incorrect Screen-Reader Order
Duplicated Components
RTL-Only Hacks
81. RTL Completion Criteria

An RTL implementation is considered ready when:

[ ] Arabic content approved
[ ] Arabic terminology approved
[ ] Document direction correct
[ ] Core layout correct
[ ] Navigation correct
[ ] Components direction-aware
[ ] Forms correct
[ ] Technical values correct
[ ] Mixed-direction content tested
[ ] Responsive behavior tested
[ ] Accessibility tested
[ ] Visual comparison completed
[ ] Critical flows validated
82. Current RTL Status

At the current project stage:

RTL Architecture:
Defined

Arabic Content:
Pending Finalization

Arabic Terminology:
Pending Management Approval

RTL Design System:
Framework Defined

Figma Arabic / RTL:
Pending Implementation

RTL Components:
Pending Implementation

Arabic Requirement Flow:
Pending Implementation

RTL QA:
Defined / Not Yet Executed

This is expected at the current design-system stage.

Final Rule

RTL is not a mirror of LTR. It is the intentional expression of the same product in a right-to-left language.

The goal is:

One Design System
+
One Business Meaning
+
One Information Architecture
+
Direction-Aware Components
+
Native Arabic Experience

The Arabic Baghlaf Steel experience should feel designed for Arabic users from the beginning—not like an English website that was flipped after development.


Recommended location:

```text
docs/04-design/rtl-rules.md

Your 04-design layer is now structurally complete:

04-design/
├── README.md
├── visual-direction.md
├── design-system.md
├── typography.md
├── color-system.md
├── responsive-rules.md
├── rtl-rules.md
└── component-guidelines.md

The important relationship is now:

design-system.md
        ↓
Overall design architecture

typography.md
color-system.md
        ↓
Visual foundations

responsive-rules.md
rtl-rules.md
        ↓
How the system adapts

component-guidelines.md
        ↓
How reusable components behave

Figma
        ↓
Approved visual source of truth

Code
        ↓
Actual implementation

The strongest rule in this file is the distinction between directional meaning and visual mirroring. That will prevent the AI from applying the common rtl + row-reverse approach and accidentally breaking technical product data, email addresses, URLs, icons, tables, or navigation semantics.