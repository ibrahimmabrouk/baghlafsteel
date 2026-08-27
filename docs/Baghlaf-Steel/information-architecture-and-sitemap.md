# Part 7 — Information Architecture & Sitemap

**Version:** 0.1  
**Scope:** Website structure, sitemap, navigation, page hierarchy, URL architecture, and page responsibilities  
**Status:** Working Strategy Draft  
**Primary Domain:** `baghlaf.com.sa`

---

# 7.1 Strategic Objective

The information architecture should translate the business strategy and buyer journey into a website structure that is:

- Easy for international buyers to understand
    
- Easy to navigate
    
- Trust-oriented
    
- Commercially focused
    
- SEO-friendly
    
- Scalable
    
- Easy for the future AI development agent to implement
    
- Flexible enough to support English and Arabic
    

The website should not be structured according to Baghlaf's internal organization.

It should be structured according to the **questions and decisions of the buyer**.

The basic logic is:

```text
WHO ARE YOU?
      ↓
WHAT DO YOU SUPPLY?
      ↓
HOW DO YOU SOURCE IT?
      ↓
HOW DO YOU WORK?
      ↓
WHY SHOULD I TRUST YOU?
      ↓
HOW DO I CONTACT YOU?
      ↓
HOW DO I SUBMIT MY REQUIREMENT?
```

---

# 7.2 Information Architecture Principles

The website architecture should follow seven principles.

## Principle 1 — Buyer First

Navigation should reflect what an international buyer needs to know, not internal company departments.

## Principle 2 — Trust Is Structural

Verification should be a first-class area of the website, not an afterthought.

## Principle 3 — Commercial Intent

The architecture should naturally lead qualified visitors toward submitting a requirement.

## Principle 4 — Truthful Representation

The structure must reinforce Baghlaf's role as a trading and supply company, not a manufacturer.

## Principle 5 — Progressive Disclosure

High-level pages should provide the overview while deeper pages provide technical and commercial detail.

## Principle 6 — Scalability

The structure should support additional products, documents, case studies, and markets without requiring a redesign.

## Principle 7 — Localization Ready

Arabic and English should be supported from the beginning, even if English is initially the primary international experience.

---

# 7.3 Recommended Top-Level Sitemap

The recommended initial sitemap is:

```text
BAGHLAF STEEL
│
├── Home
│
├── Products
│   ├── Product Category
│   └── Product Detail
│
├── Supply Network
│
├── How We Work
│
├── Why Baghlaf
│
├── About Baghlaf
│
├── Verification
│
├── Resources
│   ├── Technical Resources
│   ├── Documents
│   ├── Insights / Articles
│   └── Case Studies
│
└── Contact
    └── Submit Steel Requirement
```

Some of these sections can initially be implemented as pages and later expanded into larger content collections.

---

# 7.4 Navigation Model

The primary desktop navigation should remain relatively compact.

Recommended conceptual structure:

```text
Logo

Products
Supply Network
How We Work
Why Baghlaf
About
Resources

Verification

[Submit Requirement]
```

The exact number of top-level navigation items should be tested during UX design.

The key principle is:

> **The visitor should always be able to find Products, Verification, and Submit Requirement quickly.**

---

# 7.5 Primary Navigation vs Utility Navigation

The website should distinguish between **core discovery** and **utility/trust actions**.

### Primary Navigation

- Products
    
- Supply Network
    
- How We Work
    
- Why Baghlaf
    
- About
    
- Resources
    

### Utility / Trust

- Verification
    
- Language switcher
    
- Contact
    

### Primary Commercial CTA

- Submit Requirement
    

This hierarchy prevents every navigation item from competing equally for attention.

---

# 7.6 Page Priority

The launch should distinguish between pages that are essential and pages that can come later.

## Tier 1 — Core Launch Pages

```text
Home
Products
Product Detail
Supply Network
How We Work
Why Baghlaf
About
Verification
Contact
Submit Requirement
```

## Tier 2 — Supporting Pages

```text
Resources
Documents
Case Studies
FAQ
```

## Tier 3 — Future Expansion

Potential future areas:

```text
Markets
Industry Applications
News
Insights
Supplier Network Detail
Buyer Portal
RFQ Dashboard
Document Center
```

The initial website should not attempt to build every possible feature.

---

# 7.7 Home

### URL

`/`

### Primary Purpose

Give a first-time visitor a clear understanding of:

- Who Baghlaf Steel is
    
- What the company does
    
- Where it operates
    
- Who it serves
    
- How its supply model works
    
- Why it should be trusted
    
- What the buyer should do next
    

### Primary Buyer Questions

> Who are you?

> What do you do?

> Are you a manufacturer?

> What can you supply?

> Can I trust you?

> How do I contact you?

### Primary CTA

**Submit Steel Requirement**

### Secondary CTA

**Verify Baghlaf**

---

# 7.8 Products

### URL

`/products`

### Purpose

Help buyers determine whether Baghlaf can potentially supply the steel product they require.

### The page should communicate:

- Product categories
    
- Product types
    
- Applicable specifications
    
- Standards
    
- Common applications
    
- Available forms or dimensions, where relevant
    
- Inquiry pathway
    

### Primary CTA

**Request This Product**

### Secondary CTA

**Submit Steel Requirement**

---

# 7.9 Product Category Pages

### Example URL

`/products/[category]`

Examples may eventually include:

```text
/products/rebar
/products/steel-coils
/products/steel-sheets
/products/structural-steel
```

These are examples only.

The actual product taxonomy must come from management.

### Purpose

Give buyers more detailed information without forcing every product into one page.

### Page structure

```text
Product Category
      ↓
Overview
      ↓
Specifications
      ↓
Grades / Standards
      ↓
Available Forms
      ↓
Applications
      ↓
Supply Information
      ↓
Request Product
```

---

# 7.10 Product Detail Pages

### Example URL

`/products/[category]/[product]`

or a simpler structure depending on the final product model.

### Purpose

Provide the level of technical information necessary for serious buyers.

### Potential content

- Product name
    
- Description
    
- Grade
    
- Standard
    
- Dimensions
    
- Thickness
    
- Form
    
- Technical characteristics
    
- Applications
    
- Documentation
    
- Availability
    
- Supply information
    

Not every product will require every field.

The content model should be designed around actual product data.

---

# 7.11 Supply Network

### URL

`/supply-network`

### Primary Purpose

Explain how Baghlaf sources steel and how the company connects international buyers with Saudi supply.

This page is strategically important because the company's value comes from **trading and supply coordination**, not manufacturing.

### Core narrative

```text
International Buyer
        ↓
Requirement
        ↓
Baghlaf Steel
        ↓
Supply Assessment
        ↓
Saudi Supply Sources
        ↓
Commercial Coordination
        ↓
International Supply
```

### Primary Buyer Question

> "Where does the steel come from?"

### Secondary Question

> "What role does Baghlaf play?"

---

# 7.12 Manufacturer / Supplier Presentation

If management confirms that specific manufacturers can be publicly referenced, the Supply Network page may contain supplier/supply-source profiles.

Potential structure:

```text
Supply Source
      ↓
Company Overview
      ↓
Products
      ↓
Relevant Capabilities
      ↓
Relationship to Baghlaf
```

However, the wording must accurately describe the relationship.

The website must distinguish between:

- Supplier
    
- Source
    
- Commercial relationship
    
- Partner
    
- Distributor
    
- Authorized representative
    

These terms must never be treated as interchangeable.

---

# 7.13 How We Work

### URL

`/how-we-work`

### Purpose

Explain the complete path from buyer requirement to supply.

### Recommended conceptual structure

```text
01 — Submit Requirement
          ↓
02 — Requirement Review
          ↓
03 — Source & Assess Supply
          ↓
04 — Commercial Coordination
          ↓
05 — Documentation & Agreement
          ↓
06 — Supply / Delivery
```

The final process must be validated against Baghlaf's real commercial workflow.

### Primary CTA

**Submit Steel Requirement**

---

# 7.14 Why Baghlaf

### URL

`/why-baghlaf`

### Purpose

Answer:

> "Why should I work with Baghlaf instead of another steel trader?"

This page should not simply list generic benefits.

It should demonstrate specific advantages that management can substantiate.

Potential themes:

- Saudi supply access
    
- Requirement-based sourcing
    
- Large-volume coordination
    
- Commercial experience
    
- International orientation
    
- Transparent communication
    
- Official verification
    

Every claim should be evidence-based.

---

# 7.15 About Baghlaf

### URL

`/about`

### Purpose

Explain the company's identity, history, leadership, business philosophy, and corporate background.

### Potential sections

```text
Company
     ↓
History
     ↓
Mission
     ↓
Values
     ↓
Leadership
     ↓
Saudi Presence
     ↓
Business Approach
```

Only verified and management-approved information should be included.

The page must clearly preserve the distinction between Baghlaf Steel and other Baghlaf-related entities.

---

# 7.16 Verification

### URL

`/verification`

or:

`/verify`

### Purpose

Allow an international buyer to independently verify Baghlaf Steel's official digital identity and contact channels.

This page is **mandatory** for the Baghlaf website.

### Recommended sections

```text
Official Website
      ↓
Official Email Domain
      ↓
Official Phone Numbers
      ↓
Official Office
      ↓
Official Social Profiles
      ↓
Authorized Representatives
      ↓
Security / Anti-Impersonation Guidance
```

### Primary CTA

**Contact Official Baghlaf Team**

---

# 7.17 Resources

### URL

`/resources`

### Purpose

Provide useful information for existing and prospective buyers.

Potential resource categories:

```text
Resources
├── Technical Documents
├── Product Documents
├── Certifications
├── Case Studies
├── Insights
└── FAQs
```

The exact categories depend on what content Baghlaf can legitimately provide.

---

# 7.18 Documents

If Baghlaf has substantial approved documentation, a dedicated document center could eventually be created.

Possible URL:

`/resources/documents`

Potential materials:

- Product specifications
    
- Certificates
    
- Corporate documents
    
- Quality documents
    
- Downloadable brochures
    
- Approved technical documentation
    

Sensitive documents should not be exposed publicly.

Some resources may require controlled access in a future version.

---

# 7.19 Case Studies

### Potential URL

`/resources/case-studies`

### Purpose

Demonstrate real-world execution capability.

Potential structure:

```text
Buyer Requirement
      ↓
Product
      ↓
Quantity
      ↓
Specification
      ↓
Sourcing
      ↓
Execution
      ↓
Outcome
```

Only approved transactions should be published.

Confidential information can be anonymized where appropriate.

---

# 7.20 Insights / Articles

### Potential URL

`/resources/insights`

This section should only be introduced if Baghlaf can maintain it with useful, authoritative content.

It should **not** exist merely because "every corporate website has a blog."

Potential themes:

- Saudi steel market information
    
- Steel specifications
    
- Procurement guidance
    
- International steel trade
    
- Product education
    
- Saudi industrial supply
    

The editorial strategy should be defined later.

---

# 7.21 Contact

### URL

`/contact`

### Purpose

Provide a clear method of reaching the official company.

### Required information

- Official phone
    
- Official email
    
- WhatsApp, if officially used
    
- Office
    
- Map, if appropriate
    
- Business hours
    
- Department contacts
    
- Verification link
    

### Primary CTA

**Submit Steel Requirement**

---

# 7.22 Submit Steel Requirement

This should be treated as a **conversion flow**, not merely another page.

Potential URL:

`/submit-requirement`

or:

`/request`

### Purpose

Collect enough information for the commercial team to evaluate a buyer's need.

### Recommended structure

```text
Step 1
Buyer Information

Step 2
Steel Requirement

Step 3
Technical Details

Step 4
Delivery / Commercial Requirements

Step 5
Supporting Documents

Step 6
Review & Submit
```

The exact flow should be validated with the commercial team.

---

# 7.23 FAQ

An FAQ may eventually become valuable, but it should not be an enormous AI-generated list.

It should answer genuine recurring questions such as:

> Is Baghlaf Steel a manufacturer?

> Where is the steel sourced?

> What information should I provide when submitting a requirement?

> What countries do you serve?

> How can I verify Baghlaf Steel?

> What documentation can be provided?

Answers must reflect real company policy and processes.

---

# 7.24 Footer Architecture

The footer should function as a second trust and navigation layer.

### Recommended structure

```text
BAGHLAF STEEL
Saudi Steel Trading & Supply

Company
About
Why Baghlaf
How We Work

Products
Products
Supply Network

Trust
Verification
Official Contacts

Resources
Documents
Insights
Case Studies

Contact
Phone
Email
WhatsApp
Address

Languages
English | العربية
```

Then:

```text
© Baghlaf Steel
baghlaf.com.sa
```

The exact legal footer information will be added once supplied by management.

---

# 7.25 URL Architecture

The URL system should be simple, readable, and scalable.

Recommended structure:

```text
/
 /products
 /products/[category]
 /products/[category]/[product]

 /supply-network

 /how-we-work

 /why-baghlaf

 /about

 /verification

 /resources
 /resources/documents
 /resources/case-studies
 /resources/insights

 /contact
 /submit-requirement
```

Avoid unnecessary URLs such as:

```text
/company-profile
/our-services-page
/steel-solutions-2026
/home-new
/final-home
```

URLs should describe the actual content.

---

# 7.26 Localization Architecture

Because the website should support Arabic and English, localization should be planned before development.

A suitable conceptual structure could be:

```text
English
/
 /products
 /about
 /verification

Arabic
/ar
 /ar/products
 /ar/about
 /ar/verification
```

The exact routing strategy will be decided during technical architecture.

The important principle is:

> **Arabic and English should share the same information architecture while allowing language-specific content and layout behavior.**

Arabic should not simply be generated as an afterthought after the English site is complete.

---

# 7.27 Breadcrumb Architecture

Deeper pages should use breadcrumbs.

Example:

```text
Home
→ Products
→ Structural Steel
→ Steel Beams
```

This helps visitors understand where they are and makes the information hierarchy visible.

---

# 7.28 Internal Linking Strategy

The website should deliberately connect related information.

For example:

```text
Product Page
      ↓
Supply Network
      ↓
How We Work
      ↓
Submit Requirement
```

And:

```text
About
      ↓
Verification
      ↓
Contact
```

And:

```text
Verification
      ↓
Official Contact
      ↓
Submit Requirement
```

This creates a coherent buyer journey rather than isolated pages.

---

# 7.29 Search Architecture

A full internal search engine is probably unnecessary for the initial launch.

Search becomes valuable when Baghlaf has enough:

- Products
    
- Documents
    
- Technical resources
    
- Insights
    
- Case studies
    

to justify it.

For launch, clear navigation and taxonomy should be sufficient.

---

# 7.30 Information Model

The future technical implementation should be based on reusable entities rather than hardcoded pages.

Conceptually:

```text
Company
  │
  ├── Contacts
  ├── Locations
  ├── Credentials
  └── Verification

Products
  │
  ├── Categories
  ├── Specifications
  ├── Standards
  └── Documents

Supply Network
  │
  └── Supply Sources

Resources
  │
  ├── Documents
  ├── Case Studies
  ├── Insights
  └── FAQs

Inquiries
  │
  └── Requirements
```

This will make the website easier to scale and maintain.

---

# 7.31 Recommended Homepage → Page Relationships

The homepage should act as the central gateway.

```text
HOME
 │
 ├── Products ───────────────→ Product Details
 │
 ├── Supply Network ────────→ Supply Details
 │
 ├── How We Work ───────────→ Process
 │
 ├── Why Baghlaf ───────────→ Proof / Differentiation
 │
 ├── About ─────────────────→ Company
 │
 ├── Verification ──────────→ Official Identity
 │
 ├── Resources ─────────────→ Knowledge
 │
 └── Submit Requirement ────→ Conversion
```

---

# 7.32 Recommended Homepage Section Architecture

The exact UI will come later, but the information structure should approximately be:

```text
01 — HERO
Who Baghlaf is + primary CTA

02 — POSITIONING
What Baghlaf does

03 — PRODUCT CAPABILITY
What can be supplied

04 — SUPPLY MODEL
Where and how supply is sourced

05 — WHY BAGHLAF
Specific advantages

06 — HOW WE WORK
Commercial process

07 — TRUST / CREDENTIALS
Evidence

08 — VERIFICATION
Official digital identity

09 — FINAL CTA
Submit Steel Requirement
```

This should be validated during wireframing rather than treated as immutable.

---

# 7.33 What Should NOT Become a Top-Level Page

To keep the site focused, certain content should not automatically become top-level navigation items.

Avoid clutter such as:

```text
Mission
Vision
Values
Leadership
History
Quality
Sustainability
Careers
News
Blog
Gallery
Partners
FAQ
Contact
```

all appearing equally in the header.

Some belong inside relevant pages.

For example:

```text
About
 ├── Company
 ├── History
 ├── Leadership
 └── Values
```

rather than four separate top-level navigation items.

---

# 7.34 Future Expansion Architecture

The architecture should allow future capabilities without disrupting the core site.

Potential future additions:

```text
/markets
/industries
/suppliers
/case-studies
/insights
/resources
/request
/portal
```

A future authenticated buyer portal could eventually provide:

```text
Buyer
  ↓
Account
  ↓
Requirements
  ↓
Quotes
  ↓
Documents
  ↓
Order Status
```

But none of this should be implemented in the initial project unless there is an actual business requirement.

---

# 7.35 Navigation Success Criteria

The architecture should be considered successful if a new visitor can quickly answer:

```text
□ Who is Baghlaf Steel?

□ What does Baghlaf actually do?

□ What products can it supply?

□ Where does the steel come from?

□ How does the supply process work?

□ Why should I consider Baghlaf?

□ Is this the official Baghlaf website?

□ How can I verify the company?

□ How do I contact the official team?

□ How do I submit my requirement?
```

If a user has to hunt through multiple pages to answer these questions, the information architecture needs improvement.

---

# 7.36 Proposed Final Launch Sitemap

For the initial version, I recommend keeping the launch focused:

```text
                    BAGHLAF STEEL
                         │
       ┌─────────────────┼─────────────────┐
       │                 │                 │
       ▼                 ▼                 ▼
   Products         Supply Network     How We Work
       │                 │                 │
       ▼                 │                 │
 Product Details         │                 │
                         │                 │
       ┌─────────────────┼─────────────────┘
       │                 │
       ▼                 ▼
  Why Baghlaf          About
       │
       └──────────────┐
                      ▼
                 Verification
                      │
                      ▼
                  Resources
                      │
                      ▼
                   Contact
                      │
                      ▼
             Submit Requirement
```

### Primary header CTA

**Submit Requirement**

### Primary trust action

**Verification**

### Primary discovery path

**Products**

---

# 7.37 Recommended Launch Scope

To prevent scope creep, the first production release should contain approximately:

### Core Pages

1. Home
    
2. Products
    
3. Product detail/category templates
    
4. Supply Network
    
5. How We Work
    
6. Why Baghlaf
    
7. About
    
8. Verification
    
9. Contact
    
10. Submit Requirement
    

### Optional depending on available content

11. Resources
    
12. Case Studies
    
13. Documents
    
14. FAQ
    

This gives Baghlaf a serious corporate presence without building unnecessary functionality.

---

# 7.38 Strategic Principle for the AI Development Agent

The future AI coding agent should understand that the sitemap is not simply a collection of routes.

The architecture represents the buyer's decision process:

```text
DISCOVER
   ↓
UNDERSTAND
   ↓
EVALUATE
   ↓
VERIFY
   ↓
ENGAGE
```

Therefore, when implementing any new page, the agent should ask:

> **Which buyer question does this page answer?**

And:

> **Where should the visitor go next?**

This principle should become part of the project's frontend and UX instructions.

---

# 7.39 Part 7 — Key Decisions

|Area|Current Decision|
|---|---|
|Architecture Philosophy|Buyer-first|
|Main Goal|Support trust + qualified inquiries|
|Primary CTA|Submit Requirement|
|Primary Trust Area|Verification|
|Main Product Area|Products|
|Supply Explanation|Supply Network|
|Process Explanation|How We Work|
|Differentiation|Why Baghlaf|
|Corporate Identity|About|
|Supporting Knowledge|Resources|
|Main Contact|Contact|
|Launch Priority|Focused core website|
|URL Strategy|Short, semantic, scalable|
|Localization|English + Arabic ready|
|Product Architecture|Category → Product|
|Inquiry Architecture|Dedicated requirement flow|
|Trust Architecture|Integrated into navigation and pages|
|Future Features|Separate from launch scope|

---

# 7.40 Open Questions Before Finalizing the Sitemap

Before the architecture moves into wireframes, management should confirm:

1. The exact product categories Baghlaf wants to present.
    
2. Whether individual product pages are necessary for launch.
    
3. Which Saudi supply sources can be publicly referenced.
    
4. Whether a Supply Network page should show manufacturer names/logos.
    
5. The actual commercial workflow.
    
6. Whether "Why Baghlaf" should remain a standalone page or become a homepage section.
    
7. Whether Resources are ready for launch.
    
8. Whether there are approved case studies.
    
9. Whether technical documents should be public or restricted.
    
10. The exact requirement-submission process.
    
11. The official contact departments.
    
12. The preferred Arabic/English URL structure.
    
13. Whether any customer portal or RFQ system is already planned.
    
14. Whether Careers is required for launch.
    
15. Whether the company wants a News/Insights section at launch.
    

---

# Part 7 — Final Strategic Statement

> **The Baghlaf Steel website should be organized around the international buyer's decision-making process rather than the company's internal structure. The core architecture should move visitors from understanding Baghlaf's identity and products, through its Saudi supply model and operating process, into trust and verification, and ultimately toward a qualified steel requirement. The initial launch should remain focused on a clear set of high-value pages, with the technical architecture designed to support future expansion without creating unnecessary complexity at launch.**