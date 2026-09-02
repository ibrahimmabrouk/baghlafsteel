# 16 — QA, Testing & Visual Validation

## Purpose

This document defines the quality assurance, testing, accessibility, responsive, RTL, and visual validation framework for the Baghlaf Steel website.

The objective is to ensure that the final website is not merely functional, but also:

- accurate;
- reliable;
- visually faithful;
- accessible;
- responsive;
- bilingual;
- secure;
- performant;
- maintainable;
- commercially trustworthy.

The project treats QA as a continuous engineering activity rather than a final inspection performed immediately before launch.

The quality model is:

```text
Business Accuracy
+
Functional Correctness
+
Design Fidelity
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
SEO
+
Maintainability

A release is successful only when the relevant dimensions have been validated.

1. QA Principles
1.1 Quality Is Built In

Quality should be considered during:

Strategy
→ Design
→ Architecture
→ Development
→ Testing
→ Release

QA should not be postponed until the end.

1.2 Test According to Risk

Not every feature requires the same testing depth.

High-risk areas receive greater validation.

For Baghlaf Steel, particularly important areas include:

company identity;
product information;
supply-source information;
verification;
requirement submission;
forms;
file uploads;
bilingual behavior;
production infrastructure.
1.3 Critical Flows Receive Priority

The website's most important user journeys should have stronger testing coverage than secondary pages.

Primary critical flows:

Verification
Product Discovery → Product Detail → Requirement
Submit Requirement
1.4 Realistic Testing Matters

Tests should reflect realistic buyer behavior.

A page that works with ideal sample content may still fail when presented with:

long product names;
large quantities;
technical specifications;
long country names;
Arabic content;
mixed Arabic and English;
validation errors;
large uploads;
slow connections;
mobile screens.
1.5 No False Passes

A test should not be considered successful merely because a page renders.

The validation must verify the intended outcome.

1.6 Visual Quality Is Functional Quality

For this project, visual inconsistency can directly affect trust.

Therefore:

A major visual defect is not merely cosmetic when the website's purpose includes establishing credibility with international B2B buyers.

2. QA Scope

QA covers:

Functional Testing
UI / Component Testing
Integration Testing
End-to-End Testing
Visual Regression
Responsive Testing
RTL Testing
Accessibility Testing
Content / Business Accuracy
SEO Validation
Performance Validation
Security Validation
Cross-Browser Testing
Production Smoke Testing
Regression Testing

The exact depth depends on project stage and feature risk.

3. QA Lifecycle

The preferred QA lifecycle is:

Requirement
   ↓
Acceptance Criteria
   ↓
Implementation
   ↓
Developer Validation
   ↓
Automated Testing
   ↓
Visual Validation
   ↓
Accessibility / Responsive / RTL
   ↓
Review
   ↓
Release Candidate
   ↓
Production Smoke Test
   ↓
Post-Release Monitoring
4. Acceptance Criteria

Before significant work begins, define what success means.

Acceptance criteria should answer:

What should happen?
What should the user see?
What should the system prevent?
What happens on error?
What happens on mobile?
What happens in Arabic?
What happens with invalid input?

Example:

Requirement Form

Given:
A buyer wants to submit a steel requirement.

When:
The buyer completes all required information and submits.

Then:
The system validates the data,
creates the requirement,
assigns a reference,
and displays a confirmation.

Also:
Invalid fields should display understandable errors.
Arabic should behave correctly.
Sensitive data should not appear in public URLs or logs.
5. Test Levels
5.1 Unit Tests

Use for isolated logic such as:

validation;
formatting;
calculations;
utilities;
domain rules.

Examples:

quantity validation
email validation
file validation
reference generation
status transitions
data formatting
5.2 Component Tests

Use for reusable interface behavior.

Examples:

Button
Input
Select
Product Card
Navigation
Modal
File Upload
Form Field
Alert
Verification Panel

Test:

rendering;
states;
interactions;
validation;
accessibility behavior.
5.3 Integration Tests

Use where multiple application layers interact.

Examples:

Form
→ Validation
→ Server Action / API
→ Persistence

Product Page
→ Product Data
→ Localization
→ CTA

Requirement
→ File Upload
→ Storage
→ Persistence
→ Notification
5.4 End-to-End Tests

Use end-to-end tests for important user journeys.

Priority flows:

Homepage → Product → Requirement

Homepage → Verification

Verification → Official Contact

Requirement Form → Submission → Confirmation

Critical flows should be tested in both major languages where applicable.

6. Functional Testing

Functional QA should verify:

Navigation
all important links work;
routes resolve correctly;
breadcrumbs behave correctly;
language switching works;
mobile navigation works.
Content
approved content appears correctly;
no placeholder content remains;
required metadata exists;
no unsupported claims are introduced.
Forms
required fields work;
validation works;
invalid input is rejected;
valid input is accepted;
errors are understandable;
submission behavior is correct;
duplicate submissions are controlled where required.
Files
permitted file types are enforced;
size restrictions are enforced;
upload errors are handled;
private files remain private.
Interactive Elements
buttons perform expected actions;
modals open/close correctly;
dropdowns behave correctly;
accordions behave correctly;
loading states work;
error states work;
success states work.
7. Business Accuracy QA

Business accuracy has elevated importance.

QA should verify public-facing information against approved business sources.

Check:

Company Name
Arabic Company Name
Company Description
Business Classification
Products
Product Categories
Supply Sources
Relationship Terminology
Credentials
Contacts
Representatives
Verification Information
Commercial Process

The QA process must distinguish:

Approved
Pending Verification
Pending Approval
Unknown

Anything not approved must not be treated as confirmed public fact.

8. Manufacturer / Supply-Source Validation

QA should specifically check that the website does not accidentally:

describe Baghlaf as a manufacturer;
imply ownership of another company's factory;
imply unauthorized exclusivity;
use incorrect relationship terminology;
present a supply source as Baghlaf itself.

This check applies to:

page copy;
headings;
metadata;
structured data;
image captions;
alt text;
product descriptions;
navigation;
schema markup;
downloadable documents.
9. Product Accuracy QA

Every published product should be validated against the approved product data.

Check:

Name
Category
Forms
Grades
Standards
Specifications
Applications
Documents
Supply Capability
Related Supply Sources
Public Visibility
Arabic Equivalent

QA should also ensure the site does not unintentionally convert:

Capability

into:

Current Availability

or:

Guaranteed Supply
10. Verification QA

The verification experience is one of the most important trust features.

Validate that a buyer can clearly determine:

the official Baghlaf identity;
the official website/domain;
approved contact channels;
relevant official communication paths;
how to recognize legitimate Baghlaf communication where approved information supports this;
how to proceed safely.

Verify consistency across:

Header
Footer
Homepage
Verification Page
Contact Page
Requirement Confirmation
Arabic
English

The project should not introduce unsupported accusations about third parties.

11. Requirement Flow QA

The requirement flow receives elevated testing priority.

Validate the complete journey:

Open Form
↓
Select / Enter Product
↓
Enter Quantity
↓
Technical Requirements
↓
Destination
↓
Delivery Requirements
↓
Commercial Details
↓
Documents
↓
Review
↓
Submit
↓
Confirmation

Test:

missing required fields;
invalid values;
extremely long values;
special characters;
malformed email addresses;
invalid files;
oversized files;
network interruption;
server error;
duplicate submission;
successful submission;
Arabic input;
mixed Arabic/English technical information.
12. Requirement Data Security QA

QA should verify that sensitive buyer information does not leak through:

URLs;
browser history;
analytics payloads;
console logs;
server logs;
client-side errors;
screenshots;
public APIs;
source control;
test fixtures.

Test data should preferably be synthetic.

13. Visual Validation

Visual validation compares the implementation to approved Figma/design.

The process is:

Approved Design
      ↓
Rendered Implementation
      ↓
Comparison
      ↓
Difference Identification
      ↓
Correction
      ↓
Re-test
14. Visual Validation Dimensions

Review at minimum:

Layout
overall composition;
container width;
grid;
section spacing;
alignment;
content hierarchy.
Typography
font family;
weight;
size;
line height;
letter spacing;
hierarchy;
wrapping.
Color
background;
text;
borders;
accents;
states;
contrast.
Components
buttons;
cards;
forms;
navigation;
tables;
alerts;
breadcrumbs.
Imagery
aspect ratio;
crop;
positioning;
loading;
quality;
correct asset usage.
Motion
transitions;
hover;
focus;
loading;
reduced-motion behavior.
15. Visual Comparison Standards

Not every pixel difference indicates a defect.

Differences should be classified as:

Acceptable Implementation Difference
Minor Visual Deviation
Significant Visual Deviation
Functional / UX Deviation
Critical Design Mismatch

Examples of acceptable implementation differences may include browser rendering variations.

Significant deviations in approved visual hierarchy, typography, spacing, or composition should be corrected.

16. Responsive QA

Responsive validation should cover at minimum:

Desktop
Tablet
Mobile

Test:

navigation;
hero sections;
grids;
product cards;
tables;
forms;
images;
typography;
buttons;
CTA sections;
footer;
long content;
modal behavior;
overflow.

The page must not simply shrink.

It should intentionally adapt to the available space.

17. Mobile QA

Mobile deserves independent validation.

Check:

touch target size;
menu behavior;
sticky elements;
horizontal overflow;
form usability;
input behavior;
keyboard interaction;
image loading;
typography;
CTA visibility;
scrolling behavior.

Long product and technical data must remain readable.

18. RTL QA

Arabic should be tested as an independent layout mode.

Validate:

Document Direction
Navigation
Alignment
Spacing
Icons
Breadcrumbs
Forms
Tables
Cards
Buttons
Modals
Validation Errors
Typography
Mixed Arabic/English Content

Special attention should be given to elements that have physical direction, such as:

arrows;
chevrons;
progress indicators;
directional icons.

Not every icon should automatically be mirrored.

19. Arabic Content QA

Arabic content should be reviewed for:

correct terminology;
natural wording;
semantic equivalence;
grammatical quality;
appropriate commercial tone;
consistent company/product naming;
numbers and units;
technical terminology.

Machine translation should not be assumed to be approved Arabic content.

20. Accessibility QA

Accessibility validation should cover:

Semantic Structure
correct HTML;
headings;
landmarks;
lists;
buttons;
links.
Keyboard
all interactive elements reachable;
logical focus order;
visible focus;
usable dialogs;
usable forms.
Forms
labels;
instructions;
required state;
errors;
error association;
status messaging.
Visual
sufficient contrast;
readable text;
visible states;
no information conveyed by color alone.
Motion
reduced-motion support;
no unnecessary aggressive animation.
Screen Readers
meaningful accessible names;
appropriate announcements;
correct control semantics;
appropriate alternative text.
21. Accessibility as a Release Requirement

Accessibility issues should be classified by severity.

Suggested levels:

Critical
High
Medium
Low

Critical accessibility problems affecting core navigation or major user flows should block release.

Lower-severity issues may be accepted only when explicitly documented and assessed.

22. Cross-Browser QA

The website should be tested in the primary browsers relevant to the project.

At minimum, validate current versions of:

Chrome
Safari
Edge
Firefox

Testing should focus on:

layout;
forms;
navigation;
responsive behavior;
animations;
file uploads;
browser-specific rendering issues.

The final supported browser matrix should be defined before launch.

23. Performance QA

Performance should be measured rather than assumed.

Validate:

page response;
initial rendering;
JavaScript execution;
image loading;
font loading;
layout stability;
unnecessary network requests;
caching;
mobile performance.

Critical pages include:

Homepage
Product Listing
Product Detail
Verification
Requirement Flow

Performance regressions should be investigated before release.

24. SEO QA

SEO validation should include:

Page Title
Meta Description
Canonical URL
Open Graph Data
Headings
Internal Links
Sitemap
Robots
Structured Data
Language Metadata
Localized Alternates
Indexability
404 Behavior
Redirects

Each important public page should have an intentional SEO configuration.

25. Security QA

Security testing should consider:

input validation;
output encoding;
authentication;
authorization;
rate limiting;
file uploads;
API exposure;
CSRF protections where relevant;
security headers;
dependency vulnerabilities;
secret exposure;
error leakage;
access to private documents.

The requirement form and document-upload functionality deserve particular attention.

26. Form Security Validation

Test for:

Unexpected Input
Oversized Input
Malformed Data
Invalid File Types
Oversized Files
Repeated Submission
Automated Abuse
Unauthorized Requests

The exact protection mechanisms depend on the final implementation.

27. Automated QA

CI should automatically run the checks appropriate to the repository.

Typical baseline:

Install
↓
Typecheck
↓
Lint
↓
Unit Tests
↓
Component Tests
↓
Integration Tests
↓
Build
↓
Security Checks

End-to-end and visual tests may run according to project infrastructure and execution cost.

28. Visual Regression Strategy

For important stable interfaces, visual regression testing may be used.

Potential targets:

Homepage
Product Listing
Product Detail
Verification
Requirement Form
Header
Footer
Critical Components

Screenshots should be captured under controlled conditions.

Visual tests should avoid generating noise from:

timestamps;
random IDs;
dynamic content;
unstable external resources.
29. Test Data Strategy

The project should maintain controlled synthetic test data.

Example categories:

Normal Data
Boundary Data
Invalid Data
Long Data
Arabic Data
Mixed-Language Data
Empty Data
Large Data

Real customer data should not be embedded into automated tests without a clear and appropriate reason.

30. Boundary Testing

Important numeric and text fields should be tested around their limits.

Examples:

0
1
minimum allowed
maximum allowed
maximum + 1
negative values
decimal values
very large values
empty
whitespace

Where units are involved, verify that values and units remain unambiguous.

31. Error-State Testing

For each significant interaction, test:

Loading
Success
Validation Error
Server Error
Network Error
Empty State
Retry
Disabled State

The user should never encounter unexplained failures.

32. Regression Testing

After meaningful changes, verify that previously working functionality still works.

Regression priority should favor:

Navigation
Product System
Verification
Requirement Submission
Localization
Responsive Layout
Shared Components

Changes to shared components should trigger broader regression checks.

33. Shared Component Regression

A change to a shared component can affect many pages.

For example:

Header change
→ Homepage
→ Products
→ Product Detail
→ Resources
→ About
→ Verification
→ Contact

The QA process should therefore consider downstream consumers before approving changes to shared foundations.

34. Bug Severity

A practical severity model:

Critical

Prevents core functionality, creates major security risk, or makes production unusable.

Examples:

requirement submission completely broken;
severe data exposure;
major production failure.
High

Major business or UX impact.

Examples:

verification flow broken;
product data substantially incorrect;
Arabic navigation broken.
Medium

Meaningful but localized issue.

Examples:

specific responsive issue;
incorrect secondary interaction;
visual mismatch on one page.
Low

Minor issue with limited impact.

Examples:

small spacing inconsistency;
minor non-critical visual issue.
35. Bug Reporting

A useful bug report should contain:

Title
Environment
Page / Route
Steps to Reproduce
Expected Behavior
Actual Behavior
Severity
Screenshots / Recording where useful
Browser / Device
Language
Relevant Commit / Build

For visual issues, include a reference to the approved design whenever possible.

36. Bug Lifecycle

Suggested lifecycle:

Reported
→ Confirmed
→ Prioritized
→ In Progress
→ Fixed
→ Validated
→ Closed

A reopened issue should retain its history.

37. QA Environment

Testing should use environments appropriate to the risk.

Typical model:

Local
↓
Preview
↓
Staging
↓
Production

Production should not be the primary environment for discovering application defects.

Production-like behavior should be reproduced in preview/staging when possible.

38. Production Smoke Testing

Immediately after production deployment, run a focused smoke suite.

Minimum coverage:

Homepage Loads
Navigation Works
Products Open
Product Detail Loads
Verification Works
Contact Works
Requirement Form Opens
Requirement Submission Works
English Works
Arabic Works
Mobile Layout Works
Critical Links Work

The exact checklist should evolve with the final application.

39. Release Quality Gates

A release should not proceed when:

critical tests fail;
a critical user flow is broken;
severe security problems remain;
public business information is incorrect;
major visual defects remain;
required localization is broken;
production configuration is unsafe;
rollback is unavailable for a risky change.
40. QA Documentation

The project should maintain appropriate QA documentation.

Recommended files include:

docs/07-qa/qa-strategy.md
docs/07-qa/test-plan.md
docs/07-qa/visual-validation.md
docs/07-qa/accessibility-checklist.md
docs/07-qa/responsive-checklist.md
docs/07-qa/rtl-checklist.md
docs/07-qa/release-checklist.md

These files should describe the process, not become repositories of obsolete test output.

41. QA and AI Agents

AI agents may assist with:

generating tests;
finding edge cases;
analyzing failures;
comparing screenshots;
checking accessibility;
reviewing content;
validating routes;
identifying inconsistent components.

However, AI-generated QA is not automatically trustworthy.

AI agents must:

use the actual implementation;
report evidence;
distinguish observed behavior from assumptions;
avoid claiming tests were run when they were not;
disclose unverified areas.

An agent must never report:

"All tests pass"

unless the tests were actually executed and passed.

42. AI Visual QA

AI may assist with screenshot comparison, but visual approval should remain evidence-based.

The agent should identify:

Expected
Observed
Difference
Severity
Recommended Correction

Visual QA should compare against approved Figma or another approved visual reference.

The agent must not redefine the design simply because an alternative appears aesthetically preferable.

43. QA Evidence

For meaningful releases, retain enough evidence to understand what was validated.

Possible evidence includes:

CI results;
test reports;
screenshots;
visual comparison;
accessibility results;
browser/device matrix;
release checklist;
known issues.

The level of evidence should match the project's size and risk.

44. Pre-Launch QA Sequence

Before launch, perform:

01. Business Accuracy Review
02. Content Review
03. Functional Testing
04. Critical E2E Testing
05. Visual QA
06. Responsive QA
07. RTL QA
08. Accessibility QA
09. Performance QA
10. SEO QA
11. Security QA
12. Cross-Browser QA
13. Production Build Validation
14. Release Candidate Review
45. Final Release Checklist
[ ] Approved business information verified
[ ] No unsupported business claims
[ ] Products verified
[ ] Supply-source terminology verified
[ ] Verification experience validated
[ ] Critical navigation tested
[ ] Requirement flow tested
[ ] Forms validated
[ ] File uploads validated
[ ] English validated
[ ] Arabic validated
[ ] RTL validated
[ ] Responsive behavior validated
[ ] Accessibility validated
[ ] Cross-browser validation completed
[ ] Visual QA completed
[ ] SEO basics validated
[ ] Performance reviewed
[ ] Security reviewed
[ ] Automated test suite passed
[ ] Production build verified
[ ] Rollback path confirmed
[ ] Known issues documented
[ ] Required approval obtained
46. Quality Baseline

The project should establish a baseline before production launch.

The baseline should record:

Known Functional Behavior
Known Visual Behavior
Supported Browsers
Supported Viewports
Supported Languages
Accessibility Baseline
Performance Baseline
SEO Baseline
Critical User Flows
Known Accepted Limitations

Future changes can then be evaluated against that baseline.

47. Continuous Improvement

QA does not end at launch.

Real-world usage should identify:

recurring buyer questions;
form abandonment;
confusing content;
accessibility issues;
mobile problems;
performance bottlenecks;
SEO opportunities;
verification behavior;
product discovery problems.

These findings may inform future iterations.

However, observed user behavior should not automatically override approved business requirements.

48. Final Principle

The purpose of QA is not to prove that the developer's implementation works.

The purpose is to establish that the website is ready to represent Baghlaf Steel professionally and safely.

The final quality loop is:

Built
→ Tested
→ Compared
→ Reviewed
→ Corrected
→ Re-tested
→ Approved
→ Released
→ Monitored

The standard is:

Do not ship what merely works. Ship what has been verified to work, look right, communicate accurately, remain accessible, and support the buyer's journey.


Recommended location:

```text
docs/01-strategy/16-qa-testing-and-visual-validation.md