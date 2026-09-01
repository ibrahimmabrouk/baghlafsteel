---
title: Baghlaf Steel — Information Architecture & Sitemap
document_type: strategy
status: working
version: 1.0.0
owner: Project Leadership & Governance
last_reviewed: 2026-09-01
---

# Baghlaf Steel — Information Architecture & Sitemap

> Strategic definition of how information, pages, navigation, URLs, and major user paths are organized across the Baghlaf Steel website.

---

# 1. Purpose

This document defines the information architecture (IA) and sitemap for the Baghlaf Steel website.

It establishes:

- The major areas of the website
- The relationship between pages
- Primary and secondary navigation
- The purpose of each major page
- The hierarchy of information
- The relationship between informational and commercial pages
- The initial URL structure
- The relationship between IA and buyer journeys

This document defines the strategic information structure.

It does not replace:

- Detailed UX behavior in `12-ux-wireframes-and-page-experience.md`
- Technical routing in `13-technical-architecture.md`
- Final visual design in Figma

---

# 2. Information Architecture Principles

The Baghlaf Steel website should follow these principles:

## 2.1 Buyer-First

Organize information around what international buyers need to understand and accomplish rather than around internal company departments.

## 2.2 Clear Hierarchy

Important information should be discoverable without excessive navigation depth.

## 2.3 Direct Access

High-intent buyers should have direct access to:

- Products
- Verification
- Contact
- Submit Requirement

## 2.4 Progressive Detail

Start with essential information and allow users to move toward technical or commercial depth when needed.

## 2.5 Consistency

Similar information should live in predictable locations throughout the website.

## 2.6 Scalability

The IA should support additional products and resources without requiring a structural redesign.

## 2.7 Trust Integration

Verification should be part of the core architecture, not an isolated page hidden from the main navigation.

---

# 3. Primary Website Objectives

The IA should support four major objectives:

```text
IDENTITY
Who is Baghlaf Steel?

CAPABILITY
What can Baghlaf potentially supply?

TRUST
How can I verify Baghlaf?

ENGAGEMENT
How do I submit my requirement?

These objectives should remain visible throughout the website architecture.

4. Top-Level Information Architecture

The initial website structure is:

Home
│
├── Products
│
├── Supply Network
│
├── How We Work
│
├── Why Baghlaf
│
├── About
│
├── Resources
│
├── Verification
│
├── Contact
│
└── Submit Requirement

This is the current strategic structure.

The exact final navigation labels may be refined during UX and usability review.

5. Proposed Sitemap
/
│
├── /products
│   ├── /products/[category]
│   └── /products/[category]/[product]
│
├── /supply-network
│
├── /how-we-work
│
├── /why-baghlaf
│
├── /about
│
├── /resources
│   ├── /resources/documents
│   ├── /resources/case-studies
│   └── /resources/insights
│
├── /verification
│
├── /contact
│
└── /submit-requirement

The actual route implementation and localization structure will be defined technically in:

docs/01-strategy/13-technical-architecture.md

6. Page Classification

The website can be divided into five information groups.

1. Corporate
2. Product & Supply
3. Trust
4. Commercial Engagement
5. Resources
7. Corporate Information

Corporate pages explain who Baghlaf is.

About
Why Baghlaf
How We Work

Their purpose is to establish:

Identity
Business role
Positioning
Process
Value
8. Product & Supply Information

Product and supply pages explain what Baghlaf can potentially help source.

Products
Supply Network

These pages should remain distinct.

Product
≠
Supply Source

A product explains:

What the material is.

A supply network explains:

How Baghlaf connects requirements with appropriate sources of supply.

9. Trust Information

Trust is primarily represented by:

Verification

but trust information also appears in:

Header
Footer
Contact
Homepage
Requirement confirmation
Appropriate product pages
10. Commercial Engagement

The main commercial actions are:

Submit Requirement
Contact

The requirement path is the primary commercial conversion.

Contact remains a broader communication path.

11. Resources

Resources provide supporting information for buyers and other relevant visitors.

Potential areas:

Documents
Case Studies
Insights

These categories are subject to content availability and management approval.

Do not create empty sections simply to make the sitemap appear larger.

12. Homepage
Route

/

Primary Purpose

Provide a concise introduction to Baghlaf Steel and direct visitors toward the most relevant next action.

Primary Questions
Who is Baghlaf?
What does Baghlaf do?
What can Baghlaf potentially supply?
How does Baghlaf work?
How can I verify Baghlaf?
How can I submit a requirement?
Primary CTA

Submit Requirement

Trust CTA

Verify Baghlaf

Supporting Paths
Products
Supply Network
How We Work
Why Baghlaf
About
Contact
13. Products Overview
Route

/products

Purpose

Allow buyers to discover the steel products Baghlaf is approved to represent.

Primary Questions
What products are available through Baghlaf's supply model?
Which category is relevant to me?
Which product should I inspect?
Primary Action

Open product detail.

Secondary Action

Submit Requirement.

14. Product Category
Route

/products/[category]

Purpose

Group related products into a clear category.

Primary Content
Category description
Relevant products
Important characteristics
Related information
Primary Action

Open Product.

15. Product Detail
Route

/products/[category]/[product]

Purpose

Provide detailed information about a specific product.

Primary Content

Potentially:

Product Name
Description
Forms
Grades
Standards
Specifications
Applications
Documents
Supply Capability
Related Products

Only approved product information may be published.

Primary CTA

Request This Product

Secondary CTA

Submit Requirement

16. Product → Requirement Relationship

The architecture should allow:

Product Detail
      ↓
Request This Product
      ↓
Requirement Flow
      ↓
Product pre-selected where appropriate

This reduces friction for buyers who already know what they need.

17. Supply Network
Route

/supply-network

Purpose

Explain Baghlaf's role in connecting buyer requirements with suitable supply sources.

Primary Questions
Where can supply come from?
How does Baghlaf work with supply sources?
What role does Baghlaf play?

The page must accurately distinguish:

Baghlaf
Supply Source
Manufacturer
Supplier
Partner

according to approved business information.

18. Supply Network Disclosure

The public page may include:

Supply-source names
Relationship types
Product relationships
Geographic information
Approved logos
Relevant supporting context

only when explicitly approved.

The existence of a supply source does not automatically authorize:

Partnership claims
Exclusivity claims
Distributor claims
Ownership claims
Guaranteed availability
19. How We Work
Route

/how-we-work

Purpose

Explain the commercial journey from buyer requirement toward supply.

Conceptual Structure
Requirement
   ↓
Review
   ↓
Sourcing
   ↓
Commercial Coordination
   ↓
Supply

The actual workflow must reflect management-confirmed operations.

20. Why Baghlaf
Route

/why-baghlaf

Purpose

Explain the company's differentiating value.

Potential themes:

Saudi supply access
Requirement-based sourcing
Commercial coordination
Transparency
International orientation
Verification

These are strategic themes rather than automatically verified claims.

21. About
Route

/about

Purpose

Provide deeper corporate identity and company context.

Potential content:

Company Overview
History
Mission
Vision
Values
Leadership
Credentials
Business Information

Actual sections depend on approved management content.

22. Verification
Route

/verification

Purpose

Provide the official Baghlaf identity and verification information.

Primary Questions
Is this the official Baghlaf Steel?
What is the official website?
Which emails are official?
Which phone numbers are official?
Who are the authorized representatives?
Which channels should I trust?
Primary Action

Verify / compare official information.

Secondary Action

Contact Official Team.

23. Verification Accessibility

Verification must be reachable directly from:

Header
Footer
Homepage
Contact
Appropriate requirement confirmations

A buyer should not need to navigate through several corporate pages before finding it.

24. Contact
Route

/contact

Purpose

Provide official communication channels and a general communication path.

Potential content:

Official Email
Official Phone
Official WhatsApp
Office
Map
Social Profiles
Contact Form

Only approved contacts may be published.

25. Submit Requirement
Route

/submit-requirement

Purpose

Provide the primary commercial conversion path.

Primary User

High-intent B2B buyer.

Main Information

Potentially:

Company
Contact
Product
Quantity
Technical Requirements
Destination
Delivery
Commercial Requirements
Documents

Exact fields and sequence require management/commercial validation.

26. Requirement Confirmation

A successful submission should lead to a confirmation experience.

Potential conceptual route:

/submit-requirement
        ↓
Confirmation

The technical implementation may use a dedicated route, query state, or server-controlled success state.

The exact implementation should be determined during technical architecture.

27. Resources
Route

/resources

Purpose

Provide useful supporting information.

Potential categories:

Documents
Case Studies
Insights

These should only be created when meaningful approved content exists.

28. Documents
Route

/resources/documents

Purpose

Provide approved public-facing documents relevant to buyers.

Potential examples:

Product documents
Technical documentation
Corporate documents
Approved credentials

Sensitive or private buyer documents must never appear here.

29. Case Studies
Route

/resources/case-studies

Purpose

Demonstrate real examples of Baghlaf's work where approved.

Every case study must be factual and authorized.

Potential content:

Requirement
Challenge
Supply Approach
Outcome
Relevant Product
Approved Customer Information

Do not create fictional case studies.

30. Insights
Route

/resources/insights

Purpose

Provide useful industry or company-authored information when the business has a genuine content strategy.

Potential content:

Market perspectives
Product education
Trade information
Company announcements

Do not create an "Insights" section solely for SEO if there is no meaningful editorial plan.

31. Utility / System Pages

The website will also require non-primary pages such as:

404
Error
Privacy
Terms
Cookie / Consent where applicable

The exact legal pages should be determined according to actual business/legal requirements.

32. Navigation Architecture

The primary navigation should expose the most important buyer destinations.

A potential structure:

Logo
|
Products
Supply Network
How We Work
Why Baghlaf
About
Resources
Verification
|
Submit Requirement

Contact may appear as a utility action rather than consuming excessive primary-navigation space.

The final hierarchy will be validated through design and usability work.

33. Header Architecture

The header should provide:

Brand
Primary Navigation
Verification
Primary CTA
Language Switch
Mobile Navigation

The exact implementation belongs to the design system.

34. Footer Architecture

The footer should provide:

Company
Products
Resources
Verification
Contact
Official Channels
Legal
Language

The footer should support discovery without becoming a content dump.

35. Breadcrumb Architecture

Deep pages should use contextual breadcrumbs.

Example:

Home
  →
Products
  →
Long Products
  →
Rebar

Breadcrumbs should reflect the actual information hierarchy.

36. URL Principles

URLs should be:

Descriptive
Stable
Readable
Hierarchical
Consistent
Localizable where appropriate

Avoid URLs based on:

Internal database IDs
Temporary labels
Random strings
Marketing campaigns
Implementation details
37. URL Examples

Preferred:

/products
/products/rebar
/products/rebar/reinforcing-bar
/supply-network
/how-we-work
/why-baghlaf
/about
/resources
/verification
/contact
/submit-requirement

Actual product/category slugs should be generated from approved content.

38. Localization Architecture

The website must support:

English
Arabic

The information architecture should remain conceptually consistent between languages.

Localized routes may be implemented according to the technical localization architecture.

39. RTL Information Architecture

Arabic should preserve the same logical information hierarchy.

RTL changes:

Visual Direction
Alignment
Navigation Direction

but should not create a different information hierarchy unless UX research justifies it.

40. Navigation Depth

The goal should generally be:

Homepage
   ↓
Major Section
   ↓
Detail

Avoid unnecessary nesting.

For example:

Home
 ↓
Products
 ↓
Category
 ↓
Product

is preferable to:

Home
 ↓
Products
 ↓
Region
 ↓
Industry
 ↓
Category
 ↓
Subcategory
 ↓
Product

unless the actual product catalog becomes large enough to justify it.

41. Information Priority

The overall site hierarchy should prioritize:

1. Identity
2. Capability
3. Products
4. Supply Model
5. Trust
6. Process
7. Engagement
8. Supporting Resources

Individual pages may use a different local hierarchy based on user intent.

42. Page-to-Question Mapping
Page	Main Buyer Question
Home	Who is Baghlaf and what does it do?
Products	What can Baghlaf potentially supply?
Product Detail	Is this product relevant to my requirement?
Supply Network	How does Baghlaf connect requirements to supply?
How We Work	What happens after I contact Baghlaf?
Why Baghlaf	Why should I consider Baghlaf?
About	Who is the company behind the website?
Verification	How do I verify Baghlaf?
Resources	What supporting evidence/information is available?
Contact	How do I contact the official team?
Submit Requirement	How do I start a commercial requirement?
43. Page Relationship Model
                         HOME
                          │
       ┌──────────────────┼──────────────────┐
       │                  │                  │
       ▼                  ▼                  ▼
   PRODUCTS           WHY BAGHLAF        VERIFICATION
       │                  │                  │
       ▼                  ▼                  ▼
   PRODUCT             TRUST             OFFICIAL
       │                                  CONTACT
       ▼
   REQUIREMENT
       │
       ▼
  COMMERCIAL
  ENGAGEMENT

Supporting paths:

HOME
 ↓
SUPPLY NETWORK
 ↓
HOW WE WORK
 ↓
REQUIREMENT

and:

HOME
 ↓
ABOUT
 ↓
VERIFICATION
44. Cross-Linking Strategy

Important pages should link to each other naturally.

Products

→ Supply Network
→ Requirement

Product Detail

→ Related Products
→ Request This Product
→ Verification

Supply Network

→ Products
→ How We Work
→ Requirement

How We Work

→ Requirement
→ Contact

Why Baghlaf

→ Verification
→ Requirement

About

→ Verification
→ Contact

Verification

→ Official Contact
→ Homepage / Products where appropriate

45. Orphan Page Rule

No important public page should become an orphan.

Every important indexable page should have:

At least one meaningful internal path into it
Relevant contextual links where appropriate
A clear way to return to a major section
46. Page Independence

Important pages should remain understandable when accessed directly.

This is particularly important for:

Product pages
Verification
Resources
Contact

A visitor may arrive from search engines, email, or a shared link without first seeing the homepage.

47. Search Engine Entry Points

SEO may create entry points directly into:

Product Detail
Resource
About
Verification

Therefore each indexable page must establish enough context about Baghlaf Steel without forcing users through the homepage first.

48. Requirement Entry Points

The requirement flow may be entered from:

Header
Homepage
Products
Product Detail
Supply Network
How We Work
Contact

This creates multiple legitimate paths to the primary conversion.

49. Verification Entry Points

Verification may be entered from:

Header
Homepage
Footer
Contact
Requirement Confirmation
Potentially shared direct URL

This makes the trust system discoverable at any point.

50. Navigation State

The navigation should clearly indicate the current section.

For example:

Products
   ↓
Category
   ↓
Product

The user should understand where they are in the site.

51. Error / Recovery Architecture

If a user reaches an invalid page:

404
 ↓
Clear explanation
 ↓
Home
Products
Verification
Contact

The recovery experience should preserve trust and orientation.

52. Information Architecture & Content Governance

Not every idea should become a page.

Create a new page only when there is:

Meaningful Information
+
User Need
+
Business Value

Avoid page proliferation.

53. Information Architecture & Business Truth

The IA should never be used to imply business capabilities that are not confirmed.

For example:

Having a page called:

/manufacturing

would itself create the impression that Baghlaf manufactures steel.

Therefore the sitemap must remain consistent with the business model.

54. Information Architecture & Trust

The presence of a dedicated Verification page communicates that:

Identity verification is an important part of the company's digital experience.

The page should be structurally easy to discover.

55. Information Architecture & Product/Supply Separation

The website architecture must preserve:

Products
    ≠
Supply Network

The two may link to each other, but should not be collapsed into a single ambiguous section.

56. Information Architecture & Conversion

The IA should reduce the distance between:

Buyer Need
     ↓
Relevant Information
     ↓
Confidence
     ↓
Requirement

Do not force buyers through unrelated informational pages.

57. Information Architecture & Mobile

Mobile navigation should preserve access to:

Products
Verification
Contact
Submit Requirement

These should remain easy to reach even when the navigation becomes compact.

58. Information Architecture & Accessibility

The information hierarchy must remain understandable through:

Semantic headings
Navigation landmarks
Breadcrumbs
Logical document structure
Keyboard navigation

Accessibility is part of IA, not only visual implementation.

59. Information Architecture & Analytics

Important IA paths should be measurable.

Potential navigation/conversion events include:

product_viewed
verification_viewed
requirement_started
contact_clicked

Analytics should support understanding how buyers move through the architecture without capturing unnecessary sensitive data.

60. Future Scalability

The architecture should support future expansion.

Potential growth:

Products
   ↓
More Categories
   ↓
More Products

Resources
   ↓
More Documents
   ↓
More Case Studies
   ↓
More Insights

Potential future application capabilities:

Submit Requirement
       ↓
Buyer Portal
       ↓
Requirement Tracking
       ↓
Documents
       ↓
Commercial Workflow

These are future possibilities, not launch requirements.

61. Information Architecture Change Control

Changes to the sitemap should consider:

Buyer Impact
SEO Impact
Navigation Impact
Content Impact
Technical Impact
Design Impact
Analytics Impact

Major changes should be recorded in:

docs/09-decisions/

where appropriate.

62. Management Validation Required

The following IA inputs should eventually be confirmed:

Final product taxonomy
Final product count
Final resource categories
Actual public supply-network disclosure
Final commercial workflow
Final verification content
Required legal pages
Final navigation terminology
Target countries / localization needs

The IA may evolve as these business facts become available.

63. AI Rules for Information Architecture

AI agents must:

Treat this document as the strategic IA baseline.
Reuse the established sitemap before proposing new pages.
Avoid creating pages without a clear user need.
Never create pages that imply unsupported business capabilities.
Preserve Product / Supply Network separation.
Preserve Verification as a core website area.
Preserve direct access to Submit Requirement.
Check existing routes before creating new routes.
Avoid unnecessary URL changes after publication.
Flag major IA changes for review rather than implementing them silently.
64. Information Architecture Success Criteria

The IA is successful when:

✓ A first-time buyer can understand the site's structure.

✓ A buyer can reach products quickly.

✓ A buyer can understand the supply model.

✓ A buyer can find Verification easily.

✓ A high-intent buyer can submit a requirement directly.

✓ Important pages remain understandable when accessed directly.

✓ English and Arabic maintain the same conceptual structure.

✓ The architecture can grow without unnecessary complexity.

✓ No page implies an unsupported business capability.
65. Sitemap Summary

The current launch sitemap is:

/
│
├── /products
│   ├── /products/[category]
│   └── /products/[category]/[product]
│
├── /supply-network
├── /how-we-work
├── /why-baghlaf
├── /about
│
├── /resources
│   ├── /resources/documents
│   ├── /resources/case-studies
│   └── /resources/insights
│
├── /verification
├── /contact
└── /submit-requirement

System / legal pages:

404
Error
Privacy
Terms
Consent-related pages/components where applicable

The final legal structure depends on actual legal requirements.

66. Relationship to Other Documents

This document connects:

03 — Target Buyers
        ↓
06 — Buyer Journey & Conversion
        ↓
07 — Information Architecture
        ↓
08 — Content Strategy
        ↓
12 — UX Wireframes
        ↓
13 — Technical Architecture

It also depends on:

01 — Company Identity
02 — Business Model
04 — Positioning
05 — Trust Architecture
09 — Product & Supply Network
67. Source of Truth

Strategic information architecture:

docs/01-strategy/07-information-architecture-and-sitemap.md

Detailed UX:

docs/01-strategy/12-ux-wireframes-and-page-experience.md

Technical routes:

docs/01-strategy/13-technical-architecture.md

Approved business data:

docs/02-business/

Project-wide governance:

PROJECT_CONSTITUTION.md

68. Final Strategic Principle

The Baghlaf Steel website should organize information around the needs and decisions of international B2B buyers rather than around internal company departments. The architecture must make identity, product capability, supply structure, verification, and commercial engagement easy to understand and navigate, while preserving a clear separation between Baghlaf Steel and external supply sources. The sitemap should remain intentionally focused at launch, support direct entry into important pages, scale without unnecessary complexity, and never imply a business capability that has not been verified.


## Why this version is important

There are a few deliberate choices here.

### 1. I did not make the sitemap unnecessarily large

For example, I included:

```text
/resources/documents
/resources/case-studies
/resources/insights

as potential structures, not promises that all three need to exist at launch.

A sophisticated website is not necessarily one with 50 URLs. For Baghlaf, a smaller architecture with strong information density is likely more credible.

2. I preserved the critical separation
/products
/supply-network

These must remain separate because:

Product
→ what the buyer needs

Supply Network
→ where/how Baghlaf can source it

That distinction is directly tied to Baghlaf's business model.

3. I deliberately avoided /manufacturing

That might seem obvious, but this is exactly the type of thing an AI agent could accidentally introduce later because many steel-company websites use a manufacturing section. The IA itself must protect the business truth.

4. The sitemap is intentionally connected to conversion

The architecture should allow:

Product
   ↓
Request This Product
   ↓
Submit Requirement

and independently:

Verification
   ↓
Official Contact

This means we're not building a traditional corporate brochure. We're building a buyer decision system.

One thing I would not finalize yet

Don't lock the exact product taxonomy or resource taxonomy until management provides the actual product catalog and tells us what content they genuinely have.

So for now:

Sitemap = strategic baseline
Product taxonomy = pending management data
Resource taxonomy = pending content inventory

That keeps the architecture 10/10 rather than pretending we already know the company's complete information universe.