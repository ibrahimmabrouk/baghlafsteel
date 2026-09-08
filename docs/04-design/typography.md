# Typography

## Purpose

This document defines the typography system for the Baghlaf Steel website and design system.

It establishes:

- font families;
- type hierarchy;
- font weights;
- font sizes;
- line heights;
- letter spacing;
- text widths;
- responsive typography;
- English typography;
- Arabic typography;
- mixed Arabic / English content;
- technical data typography;
- UI typography;
- accessibility;
- Figma-to-code token mapping.

Typography is a primary part of the Baghlaf Steel visual identity.

The typography system should support the approved:

**Industrial Editorial**

visual direction.

---

# 1. Typography Philosophy

Typography should communicate:

```text
Precision
+
Authority
+
Clarity
+
Readability
+
Editorial Character

The system should feel appropriate for an international B2B steel company.

Typography should create visual distinction through:

scale;
weight;
spacing;
hierarchy;
composition;

rather than excessive decorative treatment.

2. Core Principles
2.1 Readability First

Text must remain readable across:

Desktop
Tablet
Mobile
English
Arabic

Visual style must not compromise legibility.

2.2 Strong Hierarchy

The typography system should make the content hierarchy immediately understandable.

Conceptually:

Display
    ↓
Heading
    ↓
Subheading
    ↓
Body
    ↓
Label
    ↓
Caption / Metadata
2.3 Consistency

The same semantic text role should use the same typographic treatment across the website.

Avoid page-specific arbitrary font sizes.

2.4 Content-Aware Typography

The system must account for realistic content such as:

long product names;
technical terminology;
company names;
Arabic headings;
mixed-language strings;
long form labels;
large numeric values.
3. Font Families

The final font families should be established from an approved brand/design source.

3.1 English Primary Font
Family: TBD
Status: Pending Approval

The selected font should support:

professional editorial typography;
excellent screen readability;
multiple weights;
numerals;
punctuation;
technical notation.
3.2 Arabic Primary Font
Family: TBD
Status: Pending Approval

The selected Arabic font should support:

clear Arabic letterforms;
professional B2B presentation;
multiple weights;
readability at small sizes;
appropriate Arabic punctuation;
mixed-script environments.

The Arabic font should not be selected solely because it resembles the English font.

3.3 Secondary / Display Font

A secondary or display typeface may be used only when the visual system requires it.

Family: TBD
Status: Pending

Avoid unnecessary font-family proliferation.

4. Font Family Principles

The project should generally use a limited font family set.

Preferred model:

Primary English
+
Primary Arabic
+
Optional Technical / Mono

Avoid introducing multiple decorative fonts.

5. Technical / Monospace Font

A monospace or technical typeface may be used for specialized content such as:

Code
Technical Identifiers
Reference Numbers
System Values

It should not be used broadly across marketing content unless explicitly approved.

Family: TBD
Status: Optional / Pending
6. Type Token Architecture

Typography should use semantic tokens.

Conceptual structure:

type.display.*
type.heading.*
type.body.*
type.label.*
type.caption.*
type.data.*
type.code.*

The exact naming should align with:

design-system.md
7. Display Typography

Display typography is reserved for major editorial statements.

Possible roles:

Display XL
Display L
Display M

Use for:

homepage hero;
major editorial statements;
selected section introductions.

Display type should not be used for every heading.

8. Heading Typography

Suggested hierarchy:

H1
H2
H3
H4
H5
H6

Each should have a defined:

font family;
weight;
size;
line height;
letter spacing.
9. H1

H1 represents the primary page heading.

It should:

be visually dominant;
clearly identify the page;
remain readable on mobile;
accommodate Arabic expansion.

Avoid forcing H1 into a fixed height.

10. H2

H2 represents major sections.

Use it for:

major homepage sections;
product detail sections;
trust sections;
process sections.
11. H3

H3 represents subsections inside major sections.

Use it to create clear structure without excessive visual dominance.

12. H4–H6

Use lower heading levels where information hierarchy genuinely requires them.

Do not create deep heading structures simply to produce different visual sizes.

Visual appearance should remain independent from semantic heading level where necessary.

13. Body Typography

Body text should prioritize readability.

Suggested semantic roles:

body.large
body.default
body.small

Body text should generally use comfortable:

font size;
line height;
line length;
spacing.
14. Long-Form Text

Long-form content should use a controlled maximum line width.

Conceptually:

Readable Text Width
+
Comfortable Line Height
+
Adequate Paragraph Spacing

Avoid extremely wide text blocks on desktop.

15. Supporting Text

Supporting text may be used for:

descriptions;
helper information;
secondary explanations;
technical context.

Supporting text should remain clearly subordinate to the main message without becoming too faint to read.

16. Labels

Labels should have a dedicated semantic style.

Potential token:

type.label.default

Labels may be used for:

form labels;
category markers;
metadata;
table headers;
compact UI information.
17. Captions

Captions should support:

image captions;
source notes;
metadata;
supporting information.

Do not reduce captions to unreadable text simply because they are secondary.

18. Data Typography

B2B interfaces may contain dense numerical and technical information.

A dedicated data style may be appropriate for:

Quantities
Measurements
Reference Numbers
Technical Values

Example:

100,000 MT
50 mm
ASTM A36

Data typography should prioritize clarity and alignment.

19. Numeric Typography

Where supported by the selected font, numerals should remain visually stable and readable.

Important numeric content includes:

Quantity
Dimensions
Dates
Reference Numbers
Phone Numbers

Do not depend on visual tricks to distinguish numeric information.

20. Technical Typography

Technical values should remain recognizable in both languages.

Examples:

ASTM A36
EN 10025
S275JR
50 mm
100 MT

Technical identifiers should not be converted into decorative typography that reduces readability.

21. Monospace Usage

If a technical/monospace style is introduced, use it selectively.

Good candidates:

Reference Number
Product Code
Technical Identifier
Code
System Output

Avoid using monospace for:

long marketing paragraphs;
general navigation;
primary headings.
22. Weight System

The type system should use a limited set of meaningful weights.

Possible structure:

Regular
Medium
Semibold
Bold

Exact available weights depend on the approved font.

Avoid using too many weights.

23. Weight Semantics

A practical hierarchy:

Regular
→ Body

Medium
→ Supporting Emphasis / Labels

Semibold
→ Important UI / Headings

Bold
→ Major Editorial Emphasis

The exact mapping should follow the final visual system.

24. Italic

Italic should be used intentionally.

Possible uses:

editorial emphasis;
quotations;
selected secondary content.

Do not rely on italic for hierarchy when a semantic or typographic alternative exists.

Arabic italic behavior requires separate review because its visual effect differs from Latin italics.

25. Letter Spacing

Letter spacing should be controlled through tokens.

Conceptual structure:

tracking.tight
tracking.normal
tracking.wide

Use tighter spacing carefully for large headings.

Use wider spacing selectively for:

uppercase labels;
metadata;
editorial eyebrows.
26. Uppercase Text

Uppercase may be used for small English labels or editorial metadata.

Example:

STEEL SUPPLY

Do not use uppercase extensively for long text.

Arabic does not have an equivalent uppercase transformation; Arabic labels should use appropriate hierarchy through size, weight, spacing, or other design mechanisms.

27. Line Height

Line height should be defined semantically.

Possible structure:

leading.tight
leading.normal
leading.relaxed

Large display headings may use tighter line heights.

Body text should generally use more comfortable line spacing.

28. Arabic Line Height

Arabic typography may require different line-height values from English.

Therefore the system may define:

type.arabic.display.*
type.arabic.heading.*
type.arabic.body.*

where necessary.

Do not assume identical English and Arabic line-height values produce equivalent readability.

29. Arabic Typography

Arabic typography should prioritize:

Readability
+
Natural Letterforms
+
Consistent Weight
+
Balanced Spacing

Avoid fonts that:

become difficult to read at small sizes;
have weak numeral support;
create awkward mixed-script combinations.
30. Arabic Headings

Arabic headings should be tested for:

wrapping;
line height;
width;
hierarchy;
balance.

Do not assume an English heading's dimensions work for its Arabic equivalent.

31. Arabic Body Text

Arabic body text should remain comfortable for continuous reading.

Avoid:

excessive compression;
very tight line height;
overly light font weights;
excessive letter spacing.
32. Mixed Arabic / English Typography

International B2B content will frequently contain mixed scripts.

Examples:

ASTM A36
EN 10025
100 MT
baghlaf.com.sa

Typography must preserve:

readability;
directionality;
technical accuracy;
visual consistency.
33. Bidirectional Typography

Mixed-direction text should be rendered intentionally.

Examples:

Grade: ASTM A36
الكمية: 100 MT
Email: sales@example.com

Do not manually reverse technical strings.

Use proper bidirectional text behavior in the implementation.

34. Email and URL Typography

Email addresses and URLs should remain legible and copyable.

They should generally use LTR-oriented presentation even inside RTL content where necessary.

Examples:

sales@example.com
https://baghlaf.com.sa
35. Phone Number Typography

Phone numbers should use consistent formatting.

The selected typography should ensure that:

digits remain readable;
the full number remains visually stable;
copying works correctly;
RTL rendering does not scramble the number.
36. Product Names

Product names should use the appropriate heading/body role while preserving technical naming.

Do not:

arbitrarily uppercase;
split product codes;
translate technical standards incorrectly;
alter official product naming.
37. Forms

Form typography should distinguish:

Label
Input
Placeholder
Help Text
Error
Success

These should use consistent semantic tokens.

38. Placeholder Text

Placeholder text should be visually subordinate to entered values.

Do not use typography or contrast that makes placeholder text look like actual input.

39. Form Error Typography

Error messages should remain:

readable;
clearly associated with the field;
visually distinguishable;
accessible.

Avoid shrinking error text to preserve layout.

40. Buttons

Button typography should be consistent across:

Primary
Secondary
Tertiary
Destructive

Button text should remain readable across English and Arabic.

Avoid fixed widths that only work for English wording.

41. Navigation Typography

Navigation typography should prioritize:

Clarity
Scanning
Hierarchy
Consistency

Mobile navigation should not rely on extremely small text to fit every item.

42. Metadata Typography

Metadata may include:

Category
Date
Reference
Source
Status

Use a smaller semantic style but maintain readability.

43. Table Typography

Tables should use typography optimized for scanning.

Recommended hierarchy:

Table Header
→ Stronger weight

Table Value
→ Regular / Medium

Secondary Metadata
→ Smaller supporting style

Technical values should remain easy to compare across rows.

44. Dense Information

When information density increases, do not immediately reduce font sizes.

Prefer adjusting:

Spacing
Column Structure
Grouping
Hierarchy

before making text excessively small.

45. Editorial Typography

Typography is a major part of the Industrial Editorial character.

Use:

Strong Scale
+
Controlled Contrast
+
Generous Whitespace
+
Clear Hierarchy

to create visual confidence.

Avoid relying on:

Huge Text Everywhere
+
Gradient Text
+
Decorative Effects
46. Hero Typography

Hero typography may use the largest type scale.

However:

the heading must remain understandable;
the supporting text must remain readable;
the CTA must remain visible;
mobile wrapping must be controlled.

Do not design hero typography only at desktop scale.

47. Typography and Imagery

Typography should remain readable over imagery.

If text overlays photography:

use sufficient contrast;
use appropriate overlay treatment;
avoid excessive font weight as the only readability solution.
48. Typography and Color

Typography must use semantic text colors from:

color-system.md

Do not create isolated text colors for individual pages.

49. Typography and Spacing

Typography and spacing should be designed as one system.

Changes to:

font size;
line height;
weight

may affect:

component height;
grid rhythm;
page spacing.

Visual QA should therefore consider typography changes across consuming components.

50. Responsive Typography

Typography should adapt intentionally across viewports.

Typical pattern:

Desktop
→ Larger Display / Headings

Tablet
→ Moderate Scaling

Mobile
→ Focused Scale

Body text should generally change less dramatically than display text.

51. Fluid Typography

Fluid typography may be used where it improves continuity across viewport sizes.

However, avoid overly complex formulas when simple breakpoint-based tokens are sufficient.

The chosen implementation should remain predictable.

52. Mobile Typography

Mobile typography should prioritize:

readability;
hierarchy;
wrapping;
touch context;
vertical rhythm.

Do not reduce every font size proportionally.

53. Minimum Readability

Text should never be made extremely small simply to preserve a desktop composition.

If content does not fit:

Simplify Layout
→
Reflow
→
Stack
→
Collapse

before severely reducing type size.

54. Browser Rendering

Typography should be tested across supported browsers.

Check for:

font loading;
fallback behavior;
line wrapping;
weight rendering;
baseline alignment;
Arabic shaping.
55. Font Loading

Production typography should consider performance.

The implementation should:

load only required font weights;
avoid unnecessary families;
optimize font delivery where appropriate;
define appropriate fallbacks.

Do not load an entire font family when only a few weights are used.

56. Font Fallbacks

Each font should have an intentional fallback stack.

Fallback fonts should remain reasonably compatible in:

x-height;
width;
readability.

Arabic and English may require different fallback strategies.

57. Fallback Behavior

The website should remain usable if the preferred font temporarily fails to load.

No layout should become unusable because of font loading.

58. Accessibility

Typography should support:

sufficient size;
adequate contrast;
readable line height;
predictable hierarchy;
browser zoom;
increased text size where supported.

Do not use typography tricks that make text difficult to access.

59. Browser Zoom

Layouts should remain usable when users zoom the browser.

Check:

Headings
Buttons
Navigation
Forms
Tables
Cards

for clipping and overflow.

60. Text Reflow

Text should reflow naturally.

Avoid:

fixed-height text containers;
forced truncation of important information;
clipping;
hidden overflow on critical content.
61. Truncation

Truncation may be used for:

compact lists;
previews;
navigation where appropriate.

Do not truncate important:

Product Names
Technical Specifications
Requirement Information
Verification Information
Error Messages

without an accessible way to view the full content.

62. Line Clamping

Line clamping can be useful in cards and previews.

Where used:

provide access to full content;
avoid hiding critical information;
test Arabic behavior.
63. Text Alignment

Use logical alignment.

Preferred:

text-align: start

where appropriate.

This allows typography to adapt naturally between LTR and RTL.

64. Arabic / RTL Typography Rules

Arabic typography must follow:

rtl-rules.md

and:

arabic-content.md

This includes:

direction;
alignment;
line height;
mixed-script handling;
numbers;
technical notation.
65. Figma Typography Styles

Figma should define reusable text styles or variables.

Recommended hierarchy:

Display
Heading
Body
Label
Caption
Data
Code

Arabic variants should be included where necessary.

66. Figma Naming

A practical naming system:

Typography /
    Display /
    Heading /
    Body /
    Label /
    Caption /
    Data /
    Code /

Arabic-specific styles may use:

Typography / Arabic / ...

only where separate treatment is actually required.

67. Typography Tokens in Code

Code should consume semantic typography tokens.

Example:

type.heading.large
type.body.default
type.label.small

These should map to CSS variables, utility classes, or the project's selected styling architecture.

68. Figma ↔ Code Mapping

The relationship should remain predictable:

Figma:
type.heading.large

        ↕
        
Code:
--type-heading-large

The exact implementation naming may differ, but the semantic mapping should be clear.

69. Component Typography

Components should consume typography tokens.

For example:

ProductCard
→ type.heading.small

FormLabel
→ type.label.default

TableValue
→ type.data.default

Avoid hardcoded font sizes inside individual components.

70. Typography Exceptions

A unique typographic treatment may be introduced when:

a page has a genuine editorial requirement;
a special technical context requires it;
the design system cannot reasonably express the requirement.

Exceptions should be documented when they become reusable patterns.

71. Typography Consistency

Do not introduce:

New Font Family
New Font Weight
New Font Size
New Line Height
New Letter Spacing

for a single component without a clear system-level reason.

Repeated exceptions should become system tokens.

72. AI Typography Rules

AI agents working on UI must:

use approved font families;
use typography tokens;
inspect existing styles;
avoid arbitrary font sizes;
avoid arbitrary weights;
preserve English hierarchy;
preserve Arabic readability;
test long content;
test mobile;
test browser zoom;
test mixed Arabic/English content;
compare with approved Figma.

AI must not introduce a new font or typographic style simply to make one page look more distinctive.

73. Typography QA

Typography should be validated for:

Font Family
Weight
Size
Line Height
Letter Spacing
Wrapping
Hierarchy
Contrast
English
Arabic
Mixed Scripts
Responsive Behavior
Browser Zoom
74. Typography QA Checklist
[ ] Approved English font configured
[ ] Approved Arabic font configured
[ ] Fallback stacks defined
[ ] Required weights available
[ ] Typography tokens defined
[ ] Display scale defined
[ ] Heading scale defined
[ ] Body scale defined
[ ] Label scale defined
[ ] Caption scale defined
[ ] Data typography defined where required
[ ] Line heights defined
[ ] Letter spacing defined
[ ] Responsive typography defined
[ ] Arabic typography validated
[ ] Mixed-script content validated
[ ] Technical values validated
[ ] Forms validated
[ ] Tables validated
[ ] Browser zoom validated
[ ] Accessibility validated
[ ] Figma styles defined
[ ] Code mapping defined
75. Current Typography Status

At the current project stage:

English Font:
Pending Brand / Design Approval

Arabic Font:
Pending Brand / Design Approval

Technical / Monospace Font:
Optional / Pending

Type Scale:
Framework Defined / Values Pending

Weights:
Framework Defined / Exact Availability Pending

Line Heights:
Framework Defined / Values Pending

Letter Spacing:
Framework Defined / Values Pending

Responsive Typography:
Framework Defined

Arabic Typography:
Framework Defined / Pending Font Selection

Figma Typography Styles:
Not Yet Implemented

Code Typography Tokens:
Not Yet Implemented

This is intentional.

Final values should be introduced after the approved visual direction, brand assets, and Figma foundations are established.

Final Rule

Typography should make Baghlaf Steel look precise because the information is precise—not because the design is trying to look impressive.

The typographic system should create:

Strong Hierarchy
+
Technical Clarity
+
Editorial Character
+
Excellent Readability
+
English / Arabic Consistency

The result should feel distinctly Industrial Editorial across every page, language, and viewport.


Recommended location:

```text
docs/04-design/typography.md

Your 04-design system is now nicely layered:

visual-direction.md
        ↓
Overall visual character

design-system.md
        ↓
Master design architecture

typography.md
color-system.md
        ↓
Core visual foundations

responsive-rules.md
rtl-rules.md
        ↓
Adaptation rules

component-guidelines.md
        ↓
Reusable component behavior

One important implementation rule to preserve: do not lock the final font family yet. Once the Baghlaf logo/brand assets or an approved Figma foundation exist, the exact English and Arabic fonts, weights, type scale, and line heights can be established as real tokens instead of assumptions.