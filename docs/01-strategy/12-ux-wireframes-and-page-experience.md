---
title: Baghlaf Steel — UX Wireframes & Page Experience
document_type: strategy
status: working
version: 1.0.0
owner: Project Leadership & Governance
last_reviewed: 2026-09-01
---

# Baghlaf Steel — UX Wireframes & Page Experience

> Strategic UX framework defining page structure, information hierarchy, interaction patterns, user flows, wireframe requirements, responsive behavior, RTL behavior, accessibility considerations, and page-level experience for the Baghlaf Steel website.

---

# 1. Purpose

This document defines how international B2B buyers should experience the Baghlaf Steel website.

It translates:

- Target buyers
- Positioning
- Trust architecture
- Buyer journey
- Information architecture
- Content strategy
- Product and supply model
- Visual system principles

into page-level UX requirements.

This document defines strategic UX direction.

It does not replace:

- Final Figma designs
- Final design tokens
- Technical architecture
- Production code
- Management-approved business facts

---

# 2. UX Objective

The website should help international B2B buyers:

```text
Understand
    ↓
Explore
    ↓
Evaluate
    ↓
Verify
    ↓
Act

The primary commercial action is:

Submit Steel Requirement

The primary trust action is:

Verify Baghlaf

The UX should make both actions discoverable without forcing every buyer through the same journey.

3. UX Philosophy

The experience should be:

Clear
Direct
Professional
Information-rich where useful
Calm
Fast
Trustworthy
Buyer-centered
International
Accessible

Avoid:

Forced funnels
Unnecessary popups
Excessive animation
Information overload
Generic SaaS interaction patterns
Manipulative conversion techniques
Long forms without clear purpose
4. UX Principles
4.1 Buyer First

Design around buyer questions and tasks rather than internal departments.

4.2 Clarity Before Persuasion

The buyer should understand the information before being asked to act.

4.3 Evidence Before Claims

Where trust matters, show useful evidence rather than relying on descriptive language.

4.4 Action Without Friction

High-intent buyers should be able to act directly.

4.5 Progressive Disclosure

Start with essential information and reveal additional depth when useful.

4.6 Consistency

Shared actions and components should behave consistently across the site.

4.7 Accessibility by Default

Accessibility should be considered during structure and interaction design rather than after implementation.

4.8 RTL by Design

Arabic must be designed as a first-class experience.

5. Experience Architecture

The site experience should generally follow:

Identity
   ↓
Capability
   ↓
Evidence
   ↓
Trust
   ↓
Action

But different pages may emphasize different stages.

For example:

Product Page
Capability → Evaluation → Action

Verification
Trust → Verification → Official Contact

Requirement
Action → Submission → Confirmation
6. Global Experience Model

Every major page should answer four questions:

1. Where am I?

2. What is this page about?

3. Why is it relevant to me?

4. What can I do next?

Users arriving through:

Search
Email
Shared links
Referrals
Direct URLs

must not depend entirely on seeing the homepage first.

7. Global Page Anatomy

A typical page should be structured around:

Header
   ↓
Page Introduction
   ↓
Primary Content
   ↓
Supporting Evidence / Context
   ↓
Contextual CTA
   ↓
Footer

Not every page needs every section.

8. Global Header Experience

The header should provide:

Brand
Primary Navigation
Verification
Primary CTA
Language Switch
Mobile Navigation

Primary business action:

Submit Requirement

Trust action:

Verify Baghlaf

The exact visual treatment belongs in Figma.

9. Global Header Behavior

Desktop:

Navigation visible
Primary CTA accessible
Verification discoverable
Language switch accessible

Mobile:

Compact header
Accessible menu
Primary CTA remains reachable
Verification remains easy to discover
Language switch remains usable

Avoid hiding critical buyer actions deep inside menus.

10. Global Footer Experience

The footer should reinforce:

Company identity
Main website sections
Official contact
Verification
Legal information where applicable
Language selection

The footer should support orientation and trust without becoming excessively dense.

11. Breadcrumb Experience

Deep pages should provide contextual breadcrumbs where useful.

Example:

Home
  →
Products
  →
Category
  →
Product

Breadcrumbs should reflect the actual information hierarchy.

They should remain understandable in RTL.

12. Language Switching

The website supports:

English
Arabic

The language switch should:

Be easy to find
Preserve page context where possible
Maintain equivalent core information
Correctly switch layout direction
Avoid sending the user unexpectedly to the homepage
13. Global Direction Model

English:

LTR

Arabic:

RTL

The information hierarchy should remain conceptually equivalent.

The visual composition may adapt where required by language length and reading behavior.

14. Homepage Experience
Route

/

Primary Objective

Establish immediate understanding of Baghlaf Steel and guide buyers toward the most relevant next action.

15. Homepage Information Hierarchy

A recommended structure:

Hero
  ↓
What Baghlaf Does
  ↓
Products / Supply Capability
  ↓
How We Work
  ↓
Why Baghlaf
  ↓
Evidence / Trust
  ↓
Verification
  ↓
Submit Requirement

The final structure should be validated through design and content.

16. Homepage Hero

The hero should answer quickly:

Who is Baghlaf?
What does Baghlaf do?
Who does Baghlaf serve?
What can I do next?

Primary CTA:

Submit Requirement

Trust CTA:

Verify Baghlaf

Avoid using the hero to communicate unsupported claims about scale, production, or availability.

17. Homepage "What We Do"

Purpose:

Explain Baghlaf's role in simple language.

The experience should clarify:

Trading
Sourcing
Supply
Commercial Coordination

and distinguish Baghlaf from external manufacturers.

18. Homepage Product Preview

Purpose:

Give buyers a quick view of relevant products.

Potential presentation:

Product Category
      ↓
Product
      ↓
Key Information
      ↓
Request Product

Only approved products should appear.

19. Homepage Supply Preview

Purpose:

Explain how Baghlaf connects requirements with suitable supply sources.

Conceptually:

Buyer Requirement
      ↓
Baghlaf
      ↓
Supply Source
      ↓
Supply

The exact published supply information must be approved.

20. Homepage Process Preview

Purpose:

Give the buyer a simple expectation of what happens after engagement.

Conceptual flow:

Share Requirement
      ↓
Review
      ↓
Source
      ↓
Coordinate
      ↓
Supply

The final sequence must reflect actual Baghlaf operations.

21. Homepage Trust Preview

Trust should be introduced naturally.

Potential content:

Official Identity
Official Channels
Verification
Evidence

The homepage should not feel defensive or focused on fraud.

It should simply make authenticity easy to verify.

22. Homepage Final CTA

The final major CTA should reconnect the experience to the main commercial action:

Submit Steel Requirement

Supporting message should set realistic expectations.

Do not promise:

Guaranteed pricing
Guaranteed availability
Guaranteed delivery
Guaranteed response time

unless approved.

23. Products Overview Experience
Route

/products

Objective

Allow a buyer to discover relevant products quickly.

24. Product Listing Structure

Recommended:

Page Introduction
      ↓
Categories / Filters where useful
      ↓
Product Listing
      ↓
Supporting Information
      ↓
Requirement CTA

Do not create complex filtering before the catalog justifies it.

25. Product Card Experience

A product card may contain:

Product Image
Product Name
Category
Short Description
Key Specification
Request / View Action

The exact contents depend on approved product data.

Cards should not become overloaded.

26. Product Discovery

The buyer should be able to:

Browse Category
      ↓
Select Product
      ↓
Understand Product
      ↓
Request Product

The path should be direct.

27. Product Detail Experience
Route

/products/[category]/[product]

Objective

Help the buyer determine whether the product is relevant to their requirement.

28. Product Detail Hierarchy

Recommended:

Product Identity
      ↓
Summary
      ↓
Specifications
      ↓
Applications
      ↓
Documents
      ↓
Supply Context
      ↓
Related Products
      ↓
Request CTA

The exact sections depend on product data.

29. Product Summary

The top of the product page should establish:

What is it?
What form is it?
What category is it?
What are the key characteristics?

Avoid burying essential information below long introductory copy.

30. Product Specifications

Technical information should be structured.

Potential patterns:

Specification Table
Specification Groups
Grade / Standard
Dimensions

The actual fields vary by product.

31. Product Applications

Applications should explain potential use cases when supported.

Do not imply that the product is suitable for every application merely because it is generally used in an industry.

32. Product Documents

Approved documents may be presented through:

Document Name
Type
Description
View / Download

Sensitive or private documents must never be exposed through public product pages.

33. Product Capability

Where appropriate, communicate:

Baghlaf can potentially source / supply this product.

Do not automatically communicate:

This product is currently in stock.

unless verified.

34. Product CTA

Primary CTA:

Request This Product

This should take the buyer into the requirement workflow with the relevant product preserved where appropriate.

35. Supply Network Experience
Route

/supply-network

Objective

Explain how Baghlaf connects buyer requirements with suitable sources of supply.

36. Supply Network Hierarchy

Recommended:

Introduction
      ↓
Baghlaf's Role
      ↓
Supply Model
      ↓
Approved Supply Sources
      ↓
Relationship Context
      ↓
Requirement CTA

Only approved relationships should be displayed.

37. Supply Network Visualization

A visual explanation may use:

Buyer
  ↓
Requirement
  ↓
Baghlaf Steel
  ↓
Supply Source
  ↓
Material
  ↓
Buyer

The visualization must clearly distinguish Baghlaf from the manufacturer.

38. Supply Source Cards

Where publicly approved, a source card may include:

Source Name
Source Type
Relationship
Relevant Products
Geography

Do not automatically use "Partner."

Use the exact approved relationship.

39. Supply Network Trust

Transparency should communicate:

Baghlaf's role is clear.

Avoid presenting the network as if:

Baghlaf
=
Manufacturer

unless the business model changes and is explicitly approved.

40. How We Work Experience
Route

/how-we-work

Objective

Explain the commercial experience from requirement to supply.

41. Process Page Structure

Potential sequence:

Introduction
      ↓
Share Requirement
      ↓
Review Requirement
      ↓
Sourcing
      ↓
Commercial Coordination
      ↓
Supply
      ↓
Next Step

The exact sequence must be verified with management.

42. Process Step Experience

Each step should answer:

What happens?
Why does it matter?
What should the buyer provide?
What happens next?

Avoid writing generic industry procedures as if they were Baghlaf's actual process.

43. Why Baghlaf Experience
Route

/why-baghlaf

Objective

Explain why a buyer may consider Baghlaf.

Potential content themes:

Saudi Supply Access
Requirement-Based Sourcing
Commercial Coordination
Transparency
International Orientation
Verification

Each factual claim requires appropriate support.

44. About Experience
Route

/about

Objective

Provide deeper corporate understanding.

Potential hierarchy:

Company Overview
      ↓
History
      ↓
Mission / Vision / Values
      ↓
Leadership
      ↓
Credentials
      ↓
Contact / Verification

Only approved sections should be published.

45. Verification Experience
Route

/verification

Objective

Allow buyers to independently confirm the official Baghlaf Steel identity.

46. Verification Page Hierarchy

Recommended:

Verification Introduction
      ↓
Official Website
      ↓
Official Email
      ↓
Official Phone
      ↓
Official WhatsApp
      ↓
Official Office
      ↓
Authorized Representatives
      ↓
Official Social Profiles
      ↓
How to Verify
      ↓
What to Do if Unsure
      ↓
Official Contact

Only approved information should be displayed.

47. Verification Page Tone

The page should feel:

Calm
Official
Factual
Reassuring
Professional

Avoid:

Aggressive warnings
Unverified accusations
Fear-driven copy
"Scam alert" aesthetics

unless management explicitly requires an approved communication approach.

48. Verification Workflow

A buyer should be able to:

Receive Message
      ↓
Open Baghlaf Website
      ↓
Open Verification
      ↓
Compare Contact Details
      ↓
Confirm Official Channel
      ↓
Proceed Safely

This is one of the project's most important non-commercial journeys.

49. Contact Experience
Route

/contact

Objective

Provide official communication channels and an accessible route to the Baghlaf team.

50. Contact Page Structure

Potential hierarchy:

Page Introduction
      ↓
Official Contact Channels
      ↓
Office
      ↓
General Contact Form
      ↓
Verification Reminder
      ↓
Requirement CTA

Only management-approved contact information may be published.

51. Contact vs Requirement

The UX should clearly distinguish:

Contact

General communication.

Submit Requirement

Structured commercial steel request.

The primary commercial journey should not be hidden inside a generic contact form.

52. Submit Requirement Experience
Route

/submit-requirement

Objective

Provide the primary commercial conversion.

The experience should feel like:

A professional B2B requirement intake process.

53. Requirement Flow

Conceptually:

Introduction
      ↓
Buyer Information
      ↓
Product
      ↓
Quantity
      ↓
Technical Requirements
      ↓
Destination / Delivery
      ↓
Commercial Requirements
      ↓
Documents
      ↓
Review
      ↓
Submit
      ↓
Confirmation

The exact steps and required fields require management/commercial validation.

54. Requirement Step Design

Each step should clearly communicate:

Current Step
Required Information
Optional Information
Validation
Next
Back
Progress

Avoid hiding required information until the moment of submission.

55. Requirement Form Length

The form should balance:

Commercial Qualification
+
Buyer Effort

Do not minimize the number of fields blindly.

Every field should have a purpose.

56. Progressive Disclosure in Requirement Flow

Use progressive disclosure when it reduces cognitive load.

Example:

Select Product
      ↓
Show Relevant Technical Fields

This avoids showing every possible steel specification to every buyer.

57. Product-Prefilled Requirement

From a Product Detail page:

Request This Product
      ↓
Submit Requirement
      ↓
Product Already Selected

The buyer should be able to edit the product where appropriate.

58. Requirement Validation

Errors should appear:

Near the relevant field
In understandable language
Without losing valid user data

Avoid generic validation messages.

59. Requirement File Upload

Where uploads are required:

Accepted File Types
Maximum Size
Upload Progress
Success
Error
Remove / Replace

Actual restrictions should be determined technically.

Uploaded documents should be treated as private unless explicitly intended otherwise.

60. Requirement Review Step

Before submission, provide a clear summary:

Company
Contact
Product
Quantity
Technical Details
Destination
Commercial Information
Documents

Allow the user to return to previous sections and edit.

61. Requirement Submission State

On successful submission:

Success
      ↓
Reference Number
      ↓
Submission Summary
      ↓
Expected Next Step
      ↓
Official Contact Information

Response times should not be promised unless approved.

62. Requirement Failure State

If submission fails:

Problem Identified
      ↓
Explanation
      ↓
Retry
      ↓
Preserve User Information Where Possible

If submission status is uncertain, the UI must avoid telling the user that the requirement failed when it may have succeeded.

63. Requirement Confirmation & Trust

The confirmation experience should reinforce that the submission was made through the official Baghlaf website.

It may also provide a reminder to verify future correspondence.

The exact wording requires management approval.

64. Resources Experience
Route

/resources

Objective

Provide meaningful supporting information.

Potential structure:

Resources
├── Documents
├── Case Studies
└── Insights

Only create categories that have useful approved content.

65. Resource Listing

A resource listing should provide:

Title
Category
Summary
Date where relevant
CTA

Avoid excessive metadata if it does not help the buyer.

66. Resource Detail

A resource detail page should provide:

Title
Context
Content / Document
Related Information
Relevant CTA

A commercial CTA can be included where appropriate.

67. 404 Experience

The 404 page should preserve:

Brand
Orientation
Trust
Recovery

Provide direct paths to:

Home
Products
Verification
Contact
Submit Requirement
68. Error Experience

Unexpected errors should be:

Clearly explained
Non-technical
Actionable
Consistent with the brand

Avoid exposing internal implementation details.

69. Empty States

When content is unavailable:

Explain the state
      ↓
Suggest a useful next action

Do not imply a business limitation unless that limitation is actually known.

70. Loading States

For dynamic experiences, loading states should communicate:

What is loading
That the system is responding
What the user can do next

Avoid unnecessary decorative loaders.

71. Global CTA System

The UX should use a controlled CTA vocabulary.

Primary:

Submit Requirement

Product:

Request This Product

Trust:

Verify Baghlaf

General:

Contact Baghlaf

Supporting:

Explore Products
Learn More
View Details

Do not introduce multiple names for the same action without a clear UX reason.

72. Modal Usage

Modals should be used only when they improve the task.

Good uses may include:

Confirmation
Focused interaction
Lightweight supporting information

Avoid:

Forced newsletter popups
Full-screen promotional interruptions
Important information hidden in modals
Modals that make navigation harder
73. Notifications

Notifications should:

Be noticeable
Be understandable
Not interrupt unnecessarily
Remain accessible
Use appropriate severity

Critical form errors should not depend solely on transient toast messages.

74. Navigation Patterns

The site should provide predictable navigation through:

Header
Footer
Breadcrumbs
Contextual links
CTAs

The visitor should never need to rely on browser back navigation to understand where they are.

75. Search Experience

Search should be introduced only if content volume justifies it.

If implemented, search should support:

Product
Category
Relevant Resource

using structured data.

76. Filtering Experience

Filters may eventually include:

Category
Grade
Standard
Form
Other approved attributes

Only expose filters backed by reliable structured data.

77. Mobile UX

Mobile should preserve the primary buyer tasks:

Understand
Explore
Verify
Contact
Submit

The mobile experience should not merely shrink desktop layouts.

78. Mobile Navigation

The mobile menu should:

Open predictably
Close predictably
Preserve focus
Prevent unintended page scrolling
Keep primary actions accessible
Support language switching
79. Mobile Product Experience

Product pages should preserve:

Product Identity
Key Specifications
Supply Capability
CTA

before secondary information.

80. Mobile Requirement Experience

The requirement flow should support:

Touch-friendly controls
Keyboard-aware inputs
Clear step progression
Accessible uploads
Easy correction
Preserved entered data
81. Mobile Verification Experience

Verification is particularly important on mobile because a buyer may receive an email or WhatsApp message on the same device.

The page should make official details easy to compare without excessive scrolling.

82. Arabic / RTL Experience

Arabic should support the same core tasks as English.

RTL should affect:

Reading Direction
Alignment
Navigation
Icon Direction
Form Layout
Breadcrumbs
Tables

but should not cause accidental changes to information hierarchy.

83. Mixed-Language Data

Technical values such as:

ASTM A615
Grade 60
100,000 MT
email@domain
+966 ...

must remain readable in Arabic layouts.

The UX should not force awkward visual transformations of technical data.

84. Accessibility UX

The UX should account for:

Keyboard users
Screen readers
Reduced motion
Low vision
Touch users
Cognitive load
85. Keyboard Flow

A keyboard user should be able to:

Navigate
      ↓
Open menus
      ↓
Enter forms
      ↓
Move between steps
      ↓
Review
      ↓
Submit

Focus must remain visible and logical.

86. Form Accessibility

Every form control should have:

Clear label
Error relationship
Helpful instruction where needed
Visible focus
Appropriate semantic role

Do not use placeholder text as the only label.

87. Error Accessibility

Errors should be available to assistive technology and should not rely solely on color.

Use:

Label
+
Text Message
+
Programmatic Association

where appropriate.

88. Content Length & UX

Designs should account for realistic content variation:

Short English
Long English
Short Arabic
Long Arabic
Technical Values
Long Product Names
Long Company Names

Do not assume every label fits one line.

89. Internationalization UX

The system should accommodate:

Different text lengths
International phone formats
Country names
Time-independent communication
Unicode content
Arabic / English switching

Avoid assumptions based exclusively on one locale.

90. UX and Trust Consistency

Trust-related information should remain consistent wherever it appears.

Examples:

Header
Footer
Contact
Verification
Requirement Confirmation

should use the same approved official identity data.

91. UX and Business Accuracy

UX must not create misleading impressions.

For example:

A component labeled:

"Manufacturing Network"

could imply Baghlaf owns manufacturing relationships in a way that is not intended.

Use precise information architecture and labels.

92. UX and Product / Supply Separation

Maintain:

Products
      ≠
Supply Network

Product pages answer:

What is the material?

Supply Network answers:

How does Baghlaf connect the buyer with supply?

93. UX and Commercial Confidentiality

The public experience should not reveal internal supply decisions, supplier pricing, confidential relationships, or buyer information unless explicitly intended.

94. UX and Data Minimization

Only request buyer information that supports:

Requirement qualification
Communication
Operational handling
Compliance / security where necessary

Avoid collecting information simply because a form can collect it.

95. UX and Performance

The experience should prioritize perceived speed on:

Homepage
Product pages
Verification
Requirement flow

Avoid unnecessary interaction libraries and large visual assets.

96. UX and SEO

UX should support:

Clear page hierarchy
Descriptive links
Semantic headings
Crawlable important content
Stable URLs
Internal linking

Do not sacrifice usability to create SEO pages.

97. UX and Analytics

Measure journeys, not private content.

Useful interaction events may include:

product_viewed
verification_viewed
requirement_started
requirement_step_completed
requirement_submitted
contact_clicked

Do not send sensitive requirement content to analytics unnecessarily.

98. UX Wireframe Process

Wireframes should be created in this sequence:

Strategy
   ↓
Page Objective
   ↓
Primary User Question
   ↓
Information Hierarchy
   ↓
CTA
   ↓
Wireframe
   ↓
Usability Review
   ↓
High-Fidelity Design

Do not start with visual styling before the page structure is understood.

99. Wireframe Fidelity

Wireframes should focus on:

Hierarchy
Layout
Content relationships
Interaction
CTA placement
Information density

They should not spend unnecessary effort on final visual styling.

100. Representative Wireframe Set

The first representative wireframes should be:

Homepage
Product Detail
Supply Network
Verification
Submit Requirement

These cover the most important business and UX systems.

101. Wireframe Review Gate

Before moving a page into high-fidelity Figma design, verify:

□ Clear page objective
□ Clear primary user question
□ Correct information hierarchy
□ Appropriate CTA
□ Correct trust placement
□ Business model accurately represented
□ Mobile structure considered
□ RTL considerations identified
□ Accessibility considerations identified
102. Page-Level UX Specification

For each major page, document:

Page Objective
Primary User
Primary Question
Primary CTA
Secondary CTA
Information Hierarchy
Required Content
Trust Requirements
Responsive Behavior
RTL Considerations
Accessibility Considerations
Entry Points
Exit Points
Dependencies

This makes each page implementable.

103. UX Dependencies

The final UX depends on:

Approved Business Facts
Approved Product Data
Approved Supply Relationships
Approved Contacts
Approved Credentials
Approved Commercial Workflow
Approved Brand Assets

Unknown information should be explicitly marked.

104. Management Validation Required

Before finalizing the high-fidelity UX, confirm:

Actual requirement workflow
Required requirement fields
Buyer qualification process
Commercial response process
Product taxonomy
Supply-source disclosure
Verification information
Official contacts
Public credentials
Legal pages
Preferred navigation terminology
105. AI Rules for UX

AI agents must:

Read relevant strategy documents before proposing page UX.
Use approved business data when defining user-facing content.
Reuse established components and patterns.
Never introduce a page solely because it is common on competitor websites.
Never create UX that implies unsupported business capabilities.
Preserve Product / Supply Network separation.
Preserve Verification as a discoverable trust function.
Preserve direct access to Submit Requirement.
Design Arabic / RTL from the beginning.
Treat approved Figma as the visual authority after design approval.
Flag business/UX contradictions instead of resolving them silently.
Avoid unnecessary interaction complexity.
106. UX Success Criteria

The UX is successful when:

✓ A first-time buyer understands the company quickly.

✓ A buyer can find a relevant product efficiently.

✓ A buyer can evaluate supply capability.

✓ A buyer can verify the official company independently.

✓ A high-intent buyer can submit a requirement without unnecessary friction.

✓ The buyer understands what happens after submission.

✓ Important journeys work on mobile.

✓ English and Arabic provide equivalent core functionality.

✓ The interface remains accessible.

✓ The experience feels distinctly Baghlaf rather than generic.

✓ The UX does not imply that Baghlaf is a manufacturer.
107. Relationship to Other Strategy Documents

This document connects:

03 — Target Buyers
        ↓
04 — Positioning
        ↓
05 — Trust Architecture
        ↓
06 — Buyer Journey & Conversion
        ↓
07 — Information Architecture
        ↓
08 — Content Strategy
        ↓
09 — Product & Supply Network
        ↓
10 — Brand & Visual Direction
        ↓
11 — Figma Design System
        ↓
12 — UX Wireframes

It is particularly dependent on:

05 — Trust Architecture
06 — Buyer Journey & Conversion
07 — Information Architecture
09 — Product & Supply Network
11 — Figma Design System
108. Source of Truth

Strategic UX:

docs/01-strategy/12-ux-wireframes-and-page-experience.md

Target Buyers:

docs/01-strategy/03-target-buyers.md

Buyer Journey:

docs/01-strategy/06-buyer-journey-and-conversion.md

Information Architecture:

docs/01-strategy/07-information-architecture-and-sitemap.md

Content:

docs/01-strategy/08-content-strategy-and-messaging.md

Product / Supply Model:

docs/01-strategy/09-product-and-supply-network.md

Visual Direction:

docs/01-strategy/10-brand-and-visual-direction.md

Design System:

docs/01-strategy/11-figma-design-system.md

Approved business data:

docs/02-business/

Project governance:

PROJECT_CONSTITUTION.md

109. Final UX Model

The intended experience is:

                     INTERNATIONAL BUYER
                             │
                             ▼
                         DISCOVER
                             │
                             ▼
                        UNDERSTAND
                             │
                             ▼
                          EXPLORE
                             │
                             ▼
                          EVALUATE
                             │
                    ┌────────┴────────┐
                    ▼                 ▼
                 VERIFY             ACT
                    │                 │
                    └────────┬────────┘
                             ▼
                    SUBMIT REQUIREMENT
                             │
                             ▼
                        CONFIRMATION
                             │
                             ▼
                    OFFICIAL FOLLOW-UP
110. Final Strategic Principle

The Baghlaf Steel website should provide a clear, buyer-centered experience that helps international B2B users understand the company, explore relevant products, evaluate supply capability, verify the official identity, and move into legitimate commercial engagement when ready. The UX should support multiple entry points and user intents rather than force a single funnel, while maintaining direct access to Verification and Submit Requirement. Page structure should be based on user questions and business truth, with progressive disclosure, accessible interactions, intentional responsive behavior, native RTL support, and clear recovery states. The experience must remain transparent about Baghlaf's role as a steel trading and supply company and must never create a visual or structural implication that Baghlaf is the manufacturer of externally produced steel.


## Why this is the right next layer

At this point the strategy stack becomes very clean:

```text
03-target-buyers
        ↓
Who are we designing for?

06-buyer-journey-and-conversion
        ↓
What are they trying to accomplish?

07-information-architecture-and-sitemap
        ↓
Where does information live?

08-content-strategy-and-messaging
        ↓
What should each page communicate?

09-product-and-supply-network
        ↓
What business entities/data are involved?

10-brand-and-visual-direction
        ↓
What should the experience feel like?

11-figma-design-system
        ↓
What reusable visual system do we use?

12-ux-wireframes-and-page-experience
        ↓
What should each screen actually do?

The important thing is that Part 12 should stay focused on experience, not pixels.

For example:

Part 12
→ "The Product page must expose key specifications before secondary content."

Part 11
→ "Specifications use this typography/token/component system."

Figma
→ "This exact specification table looks like this."

Part 13
→ "This data comes from this model/API/content source."

Code
→ Implements it.

That separation will make the Figma → MCP → AI → frontend workflow much more reliable later.