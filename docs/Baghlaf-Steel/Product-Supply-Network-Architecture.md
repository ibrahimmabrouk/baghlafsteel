# Baghlaf Steel — Business & Website Strategy

**Part 9 — Product & Supply Network Architecture**

**Version:** 0.1  
**Scope:** Product taxonomy, product information model, specifications, supply network structure, manufacturer relationships, sourcing logic, buyer requirements, and future scalability  
**Status:** Working Strategy Draft  
**Primary Domain:** `baghlaf.com.sa`

---

# 9.1 Strategic Objective

Part 9 defines how Baghlaf Steel should represent two things on the website:

1. **What Baghlaf can supply**
    
2. **How Baghlaf sources and coordinates that supply**
    

This is one of the most important architectural distinctions in the entire project.

The website should never create the impression that:

> **Baghlaf = Manufacturer**

Instead, it should communicate:

> **Baghlaf = Steel Trading & Supply + Sourcing + Commercial Coordination**

The product architecture and supply-network architecture must therefore be connected, but they must not be confused.

---

# 9.2 The Core Business Model

The website should represent the following relationship:

```text
BUYER
  │
  │ Requirement
  │
  ▼
BAGHLAF STEEL
  │
  │ Assess Requirement
  │
  │ Source / Coordinate
  ▼
SUITABLE SAUDI SUPPLY SOURCE
  │
  │ Material
  ▼
BAGHLAF STEEL
  │
  │ Commercial / Supply Coordination
  ▼
BUYER
```

This is the conceptual model behind the product architecture.

---

# 9.3 Product vs Supply Source

These are separate entities.

### Product

What the buyer needs.

Examples:

- Rebar
    
- Billets
    
- Wire Rod
    
- Steel Coils
    
- Sheets
    
- Structural Steel
    

The actual list must come from management.

### Supply Source

Where the required material can potentially be sourced.

Examples may include:

- Major Saudi steel manufacturers
    
- Other qualified supply sources
    
- Other approved commercial sources
    

A product can therefore have **multiple potential supply sources**.

---

# 9.4 The Relationship Model

The website should eventually represent:

```text
                 PRODUCT
                    │
          ┌─────────┼─────────┐
          ▼         ▼         ▼
     Supply A   Supply B   Supply C
          │         │         │
          └─────────┼─────────┘
                    ▼
                 BAGHLAF
                    │
                    ▼
                  BUYER
```

This is much more realistic than:

```text
Product
   ↓
Baghlaf Factory
```

The second model must not be used unless the factual business model changes.

---

# 9.5 Product Taxonomy

We should establish a hierarchical product taxonomy.

Conceptually:

```text
Steel Products
│
├── Long Products
│   ├── Rebar
│   ├── Wire Rod
│   ├── Billets
│   └── Other
│
├── Flat Products
│   ├── Coils
│   ├── Sheets
│   ├── Plates
│   └── Other
│
├── Structural Products
│   ├── Beams
│   ├── Sections
│   ├── Angles
│   └── Other
│
└── Other Steel Products
```

This is **only an architectural example**.

The final taxonomy must be created from Baghlaf's actual supply portfolio.

We should not publish product categories merely because they are common in the steel industry.

---

# 9.6 Product Taxonomy Principles

The product hierarchy should be:

### Buyer-oriented

Use terminology buyers actually search for and use commercially.

### Technically meaningful

Products should be separated when specifications or applications genuinely differ.

### SEO-friendly

Each meaningful product category should have the potential to become a useful landing page.

### Scalable

New products can be added without redesigning the site.

### Controlled

Only products that Baghlaf can actually source/supply should appear.

---

# 9.7 Product Data Model

Every product should have structured information.

A conceptual model:

```text
Product
│
├── Name
├── Category
├── Description
├── Product Forms
├── Grades
├── Standards
├── Dimensions
├── Technical Properties
├── Applications
├── Supply Notes
├── Available Documents
├── Supply Sources
└── Inquiry CTA
```

Not every field needs to appear publicly for every product.

---

# 9.8 Product Naming

Product names should use standardized terminology.

For example:

```text
Primary Product Name
Secondary / Common Name
Technical Classification
```

Avoid creating multiple pages for the same product simply because different visitors use slightly different terms.

SEO aliases can point toward the canonical product page where appropriate.

---

# 9.9 Product Page Purpose

A product page should answer:

> **Can Baghlaf potentially supply what I need?**

It should not attempt to replace a technical datasheet or quotation.

The page should provide enough information to help the buyer decide whether to initiate a commercial inquiry.

---

# 9.10 Recommended Product Page Structure

```text
PRODUCT NAME
      │
      ▼
Short Description
      │
      ▼
Available Forms
      │
      ▼
Grades / Standards
      │
      ▼
Specifications
      │
      ▼
Applications
      │
      ▼
Supply Information
      │
      ▼
Documents
      │
      ▼
Request This Product
```

---

# 9.11 Product Hero

The top of a product page should communicate:

- Product name
    
- Primary category
    
- One-line description
    
- Relevant specifications
    
- Primary CTA
    

Example structure:

```text
STEEL REBAR

Steel reinforcement products supplied
according to required grade, standard,
dimensions, and quantity.

[Request This Product]
```

The wording will be generated from actual product data.

---

# 9.12 Product Specifications

Specifications should be presented in structured formats where appropriate.

Possible structure:

|Attribute|Information|
|---|---|
|Grade|Approved grade|
|Standard|Applicable standard|
|Diameter|Available range|
|Length|Available range|
|Surface|Where relevant|
|Form|Coil / bar / sheet / etc.|
|Certification|If applicable|

The exact fields depend on the product.

Tables are preferable to lengthy paragraphs when the information is technical.

---

# 9.13 Product Availability

The website needs to distinguish between:

**Product capability**

and:

**Current availability**

A product page should not imply:

> "In stock"

unless the company has a real-time inventory system.

Instead, use carefully controlled wording such as:

> **Supply subject to specification, quantity, and availability.**

The commercial team can then determine current availability.

---

# 9.14 Product Documents

Where approved documentation exists, the product page may include:

- Technical datasheet
    
- Product specification
    
- Relevant certificates
    
- Standards documentation
    
- Other approved technical files
    

Each document should have:

- Document title
    
- Version/date where relevant
    
- Download/view action
    

Confidential documents should not be public.

---

# 9.15 Product → Requirement Connection

Every product page should provide a direct path to conversion.

```text
Product Page
     ↓
Request This Product
     ↓
Requirement Form
     ↓
Product Preselected
```

For example, clicking:

> **Request Rebar**

should open the requirement flow with:

```text
Product = Rebar
```

already populated.

This reduces friction and improves lead quality.

---

# 9.16 Product-Specific Inquiry Fields

Some products require product-specific technical data.

The form should be capable of adapting.

For example:

```text
User selects:
Rebar

Form shows:
Grade
Diameter
Length
Standard
Quantity
Destination
```

Whereas:

```text
User selects:
Steel Coil

Form shows:
Grade
Thickness
Width
Coil Weight
Standard
Quantity
Destination
```

This should eventually be implemented as **dynamic schema-driven forms**, not separate hardcoded forms for every product.

---

# 9.17 Supply Network Architecture

The Supply Network is the second major entity in Part 9.

It should answer:

> **Where does Baghlaf source the steel it supplies?**

The conceptual model:

```text
                    BAGHLAF
                       │
              Buyer Requirement
                       │
              Requirement Matching
                       │
      ┌────────────────┼────────────────┐
      │                │                │
      ▼                ▼                ▼
 Supply Source A   Supply Source B   Supply Source C
      │                │                │
      └────────────────┼────────────────┘
                       ▼
              Appropriate Supply
                       │
                       ▼
                    Buyer
```

---

# 9.18 Supply Source Profiles

A supply source profile should exist only if Baghlaf wants to publicly identify that source and has permission to do so.

A potential structure:

```text
Supply Source Name
        ↓
Location
        ↓
General Overview
        ↓
Relevant Products
        ↓
Relevant Standards / Capabilities
        ↓
Relationship to Baghlaf
```

The **Relationship to Baghlaf** field is particularly important.

---

# 9.19 Relationship Classification

Every supply source should internally have a classification.

For example:

```text
SOURCE RELATIONSHIP

[ ] Supply Source
[ ] Supplier
[ ] Commercial Relationship
[ ] Partner
[ ] Authorized Distributor
[ ] Exclusive Partner
[ ] Other
```

Only one verified classification should be used in public content.

The system should not allow writers or AI agents to casually substitute:

> supplier → partner

or:

> source → authorized distributor.

---

# 9.20 Manufacturer Profiles

If manufacturers such as Hadeed, Al-Rajhi Steel, Al-Ittefaq, Al-Watania, or others are publicly referenced, the website should accurately identify them as **external manufacturing/supply organizations**, not as Baghlaf-owned facilities.

A potential visual structure:

```text
Saudi Supply Network

Baghlaf Steel works with approved
supply sources in Saudi Arabia.

[Supply Source]
Product Categories
Verified Relationship

[Supply Source]
Product Categories
Verified Relationship
```

The final content depends entirely on management-approved relationships.

---

# 9.21 What Not to Do With Manufacturer Logos

Do not create a section like:

> **Our Manufacturing Partners**

and place logos underneath unless:

1. The relationship genuinely qualifies as a partnership.
    
2. Management approves the wording.
    
3. Use of the logo is authorized.
    

This could create significant credibility and legal problems if represented incorrectly.

---

# 9.22 Supply Network Transparency

We should communicate enough to build confidence without revealing commercially sensitive information.

### Public information may include:

- Saudi origin of supply
    
- General sourcing model
    
- Relevant supply categories
    
- Verified relationships
    
- Appropriate manufacturer names where approved
    
- Geographic information
    
- General process
    

### Potentially restricted:

- Pricing arrangements
    
- Private supplier agreements
    
- Commercial margins
    
- Confidential contacts
    
- Contract terms
    
- Unannounced availability
    
- Buyer-specific sourcing arrangements
    

---

# 9.23 Supply Network Page Structure

Recommended conceptual structure:

```text
HERO
Saudi Steel Supply Network

     ↓

HOW BAGHLAF SOURCES

     ↓

REQUIREMENT → ASSESSMENT → SOURCING

     ↓

SAUDI SUPPLY SOURCES

     ↓

PRODUCT COVERAGE

     ↓

QUALITY / DOCUMENTATION

     ↓

HOW WE COORDINATE SUPPLY

     ↓

SUBMIT REQUIREMENT
```

---

# 9.24 Geographic Presentation

Because Saudi Arabia itself is part of the value proposition, the Supply Network page could eventually include a geographic visualization.

For example:

```text
                 Saudi Arabia

        ● Supply Source
              │
              │
              ▼
          BAGHLAF
              │
              ▼
      International Market
```

However, maps should be used only where they add useful information.

Do not create a decorative map with random locations purely for visual effect.

---

# 9.25 Buyer Requirement Entity

A requirement is not just an email message.

Architecturally, it should be treated as a structured entity.

```text
Requirement
│
├── Buyer
├── Product
├── Quantity
├── Unit
├── Grade
├── Standard
├── Dimensions
├── Destination
├── Delivery Requirement
├── Commercial Requirement
├── Supporting Documents
└── Additional Notes
```

This structure will become useful later if Baghlaf develops a proper RFQ or buyer portal.

---

# 9.26 Requirement → Product Relationship

The requirement should reference a product whenever possible.

For example:

```text
Requirement #BS-000123

Product:
Steel Rebar

Quantity:
100,000 MT

Grade:
[...]

Standard:
[...]

Destination:
[...]

Documents:
[RFQ.pdf]
```

This creates structured commercial data.

---

# 9.27 Requirement → Supply Source Relationship

Internally, the commercial team may eventually associate a requirement with one or more potential supply sources.

```text
Buyer Requirement
      │
      ├── Possible Source A
      ├── Possible Source B
      └── Possible Source C
```

This relationship should **not necessarily be exposed to the public website**.

It is primarily an internal business process.

---

# 9.28 Supply Source → Product Relationship

A supply source may provide multiple products.

```text
Supply Source A
 │
 ├── Rebar
 ├── Billets
 └── Wire Rod
```

And:

```text
Rebar
 │
 ├── Supply Source A
 ├── Supply Source B
 └── Supply Source C
```

This many-to-many relationship should influence the future data architecture.

---

# 9.29 Product Architecture for the AI Agent

The future frontend should not hardcode product content directly into JSX/TSX files.

Instead, content should ideally be represented as structured data.

Conceptually:

```text
products/
├── rebar.json
├── billets.json
├── wire-rod.json
└── ...
```

Or through a CMS/database depending on the final architecture.

This allows the frontend to render consistent product templates.

---

# 9.30 Product Schema

Conceptually:

```text
Product {
  slug
  name
  category
  shortDescription
  description
  forms[]
  grades[]
  standards[]
  specifications[]
  applications[]
  documents[]
  supplySources[]
  status
}
```

The exact implementation will be decided in the Technical Architecture phase.

---

# 9.31 Supply Source Schema

Conceptually:

```text
SupplySource {
  name
  location
  description
  products[]
  relationshipType
  publicVisibility
  logo
  website
  evidence
}
```

The `publicVisibility` field is important.

It could represent:

```text
public
private
pending-review
```

This prevents an unapproved source from accidentally appearing on the live website.

---

# 9.32 Claims and Evidence Integration

Each publicly displayed supply relationship should have an evidence trail.

Conceptually:

```text
Supply Source
      ↓
Relationship Claim
      ↓
Evidence
      ↓
Management Approval
      ↓
Public Visibility
```

The AI should not be allowed to infer relationships from names or context.

---

# 9.33 Product Claims

The same principle applies to products.

For each product:

```text
Product
   ↓
Can Baghlaf supply it?
   ↓
Confirmed by management
   ↓
Approved product data
   ↓
Published
```

This prevents the common AI mistake:

> "Because steel companies usually sell X, Baghlaf probably sells X."

No assumptions.

---

# 9.34 Product Availability vs Sourcing Capability

These concepts must remain separate.

### Supply capability

> Baghlaf can source this type of product.

### Current availability

> A specific quantity is currently available.

### Confirmed allocation

> A supply source has confirmed the required quantity.

These are very different states.

The public site should normally communicate the first unless the company has systems supporting the latter.

---

# 9.35 Large-Volume Messaging

The product architecture should support substantial order quantities.

However, the website should not exaggerate.

Instead of:

> **We can supply unlimited quantities.**

Prefer:

> **Large-volume requirements are assessed according to product, specification, quantity, and supply availability.**

This accurately describes a trading/sourcing model.

---

# 9.36 Quality and Documentation

Because Baghlaf is not the manufacturer, documentation may originate from the relevant supply source.

The website should distinguish:

```text
Baghlaf
Commercial Coordination
        +
Supply Source
Technical / Material Documentation
```

Do not imply that Baghlaf issued a manufacturer's certificate unless Baghlaf genuinely issues such documentation.

---

# 9.37 Certificates

If certificates appear on product pages, the site should make their origin clear when necessary.

For example:

> **Applicable documentation may be provided by the relevant supply source as part of the agreed transaction.**

Exact wording must be approved based on actual business practice.

---

# 9.38 Product Images

Product imagery should accurately represent the product.

Avoid using:

- Generic factory images as if they belong to Baghlaf
    
- Manufacturer-specific facilities without permission
    
- Stock photographs presented as company-owned inventory
    
- Images of products that don't match the described specification
    

Images should reinforce trust, not manufacture it.

---

# 9.39 Supply Network Visual Language

The design should visually distinguish:

### Baghlaf

from:

### External Supply Sources

For example:

```text
        BAGHLAF STEEL
             │
       Coordination
             │
    ┌────────┼────────┐
    ▼        ▼        ▼
 Source A Source B Source C
```

The visual language should make the relationship obvious.

This is especially important on mobile screens.

---

# 9.40 Supply Network and Trust

The Supply Network page should reinforce a subtle but important idea:

> **Baghlaf does not need to own the factory to create value.**

Its role is to connect buyer requirements with appropriate Saudi supply.

This should become a strength of the company's identity.

---

# 9.41 Product Discovery Paths

A buyer should be able to reach products from multiple directions.

### From Home

```text
Home → Products → Product
```

### From Supply Network

```text
Supply Network → Supply Source → Products
```

### From Search

```text
Search → Product → Requirement
```

### From Requirement

```text
Requirement → Product Context
```

This network of relationships should improve usability and SEO.

---

# 9.42 Cross-Linking Rules

Every product page should link to:

- Related products
    
- Supply Network
    
- How We Work
    
- Requirement submission
    

Every supply source profile should link to:

- Relevant products
    
- How Baghlaf works
    
- Requirement submission
    

Every requirement flow should retain:

- Product context
    
- Verification access
    
- Official contact information
    

---

# 9.43 SEO Architecture for Products

Each meaningful product should potentially have a dedicated indexable page.

For example:

```text
/products/rebar
/products/wire-rod
/products/steel-coils
```

But only create pages when there is enough substantive, accurate information.

Do not generate dozens of thin pages simply to target keywords.

---

# 9.44 Structured Product Content

The product database should support SEO fields such as:

```text
SEO Title
Meta Description
Canonical URL
Primary Keyword
Related Keywords
Schema Type
```

SEO fields should be generated from approved product content.

---

# 9.45 Supply Network SEO

The Supply Network page can target concepts around:

- Saudi steel supply
    
- Steel sourcing in Saudi Arabia
    
- Saudi steel suppliers
    
- International steel supply
    
- Bulk steel procurement
    

Actual keywords should be validated during the later SEO phase.

The site should never force keywords into language unnaturally.

---

# 9.46 Future Buyer Portal

The architecture created here can eventually evolve into a buyer portal.

For example:

```text
Public Website
      ↓
Submit Requirement
      ↓
Buyer Account
      ↓
Requirement Dashboard
      ↓
Quotes
      ↓
Documents
      ↓
Order / Supply Status
```

This should remain a future capability unless management identifies it as a launch requirement.

---

# 9.47 Future Supplier Portal

Similarly, Baghlaf could eventually have an internal or supplier-facing system:

```text
Buyer Requirement
        ↓
Internal Baghlaf Review
        ↓
Potential Supply Sources
        ↓
RFQ / Commercial Coordination
        ↓
Response
```

This could eventually become an internal procurement workflow.

Again, this is future architecture, not launch scope.

---

# 9.48 Information Governance

The product and supply-network data should have ownership.

Recommended responsibilities:

```text
Product Information
→ Commercial / Technical Team

Supply Source Relationships
→ Management / Commercial Team

Corporate Claims
→ Management

Website Presentation
→ Marketing / Website Team

Technical Implementation
→ Development Team
```

The AI agent should never be the authority.

---

# 9.49 Product Content Approval Workflow

Recommended process:

```text
Draft Product Data
       ↓
Technical Review
       ↓
Commercial Review
       ↓
Management Approval
       ↓
Publish
```

Changes should go through the same controlled process.

---

# 9.50 Supply Source Approval Workflow

```text
Proposed Supply Source
       ↓
Relationship Verification
       ↓
Public-Use Verification
       ↓
Management Approval
       ↓
Publish / Keep Private
```

This provides protection against accidental misrepresentation.

---

# 9.51 Product Status

Products can have internal statuses:

```text
draft
under-review
approved
published
archived
```

The frontend should normally render only:

> **published**

products.

This becomes particularly useful when AI tooling and a CMS are later introduced.

---

# 9.52 Supply Source Status

Likewise:

```text
proposed
verification-pending
approved
published
restricted
archived
```

A `verification-pending` source should never accidentally become visible.

---

# 9.53 AI Rules for Product & Supply Data

These rules should become part of the future AI coding/content skills.

```text
PRODUCT & SUPPLY RULES

1. Never invent a product.

2. Never infer product availability.

3. Never infer grades or standards.

4. Never infer dimensions.

5. Never infer certifications.

6. Never infer supply sources.

7. Never infer manufacturer relationships.

8. Never convert "source" into "partner".

9. Never represent external manufacturing facilities
   as Baghlaf-owned facilities.

10. Never publish unapproved supply-source information.

11. Product data must come from the approved
    product information source.

12. When information is missing, mark it
    for review instead of guessing.

13. Preserve the distinction between:
    product,
    supply source,
    manufacturer,
    supplier,
    partner,
    and distributor.

14. Availability claims require explicit evidence.
```

---

# 9.54 Recommended Data Relationships

The overall information model should eventually look like:

```text
                 BAGHLAF STEEL
                       │
             ┌─────────┴─────────┐
             │                   │
             ▼                   ▼
         PRODUCTS          SUPPLY SOURCES
             │                   │
             │                   │
             └─────────┬─────────┘
                       │
                  SUPPLY MAPPING
                       │
                       ▼
                  REQUIREMENT
                       │
                       ▼
                     BUYER
```

This is the conceptual foundation for the eventual CMS/database architecture.

---

# 9.55 Recommended Public Architecture

The public website should make the following model understandable:

```text
PRODUCTS
  │
  ├── What can be supplied?
  │
  └── Specifications
          │
          ▼
SUPPLY NETWORK
  │
  ├── Where can supply come from?
  │
  └── How does Baghlaf coordinate it?
          │
          ▼
HOW WE WORK
  │
  └── How is the requirement handled?
          │
          ▼
SUBMIT REQUIREMENT
```

This is the simplest expression of Baghlaf's business model.

---

# 9.56 Recommended Internal Architecture

The internal system should contain richer relationships:

```text
Buyer
  │
  └── Requirement
        │
        ├── Product
        ├── Specifications
        ├── Quantity
        ├── Destination
        ├── Commercial Terms
        ├── Documents
        │
        └── Potential Supply Sources
                  │
                  ├── Source A
                  ├── Source B
                  └── Source C
```

This distinction between **public website architecture** and **internal commercial architecture** will become increasingly important as the business grows.

---

# 9.57 Launch Scope

For the first website release, we should keep the product architecture controlled.

### Required

- Product overview
    
- Product categories
    
- Product detail template
    
- Approved specifications
    
- Product inquiry CTA
    
- Basic supply-network explanation
    

### Optional

- Individual supply source profiles
    
- Product documents
    
- Case studies connected to products
    
- Advanced filtering
    

### Future

- Buyer portal
    
- Dynamic RFQ system
    
- Live supply availability
    
- Supplier portal
    
- Automated quotation system
    
- Document management platform
    

---

# 9.58 Recommended Product Page UX

A serious buyer should be able to move through:

```text
Overview
   ↓
Specifications
   ↓
Applications
   ↓
Supply Information
   ↓
Documentation
   ↓
Request
```

The page should not force visitors through flashy animations or long storytelling before giving them technical information.

---

# 9.59 Recommended Supply Network UX

The visitor should be able to understand:

```text
Where?
Saudi Arabia

What?
Steel supply

Who?
Baghlaf + approved supply sources

How?
Requirement → Sourcing → Coordination → Supply
```

This should be achievable within the first few seconds of entering the page.

---

# 9.60 Product + Supply Network Relationship as a Differentiator

The strongest conceptual message from Part 9 may be:

> **Baghlaf Steel gives international buyers a structured route to suitable steel supply in Saudi Arabia without positioning itself as the manufacturer.**

This is a more honest and differentiated story than trying to imitate manufacturers.

---

# 9.61 Part 9 — Key Decisions

|Area|Current Decision|
|---|---|
|Core Product Principle|Represent actual supply capability|
|Product vs Supplier|Separate entities|
|Product vs Manufacturer|Never conflate|
|Product Structure|Category → Product → Specification|
|Product Pages|Required for meaningful products|
|Supply Network|Core website capability|
|Supply Source Profiles|Conditional on approval|
|Manufacturer Names|Require verification|
|Manufacturer Logos|Require permission|
|Relationship Terms|Must be precise|
|Availability|Separate from capability|
|Product Documents|Verified / approved only|
|Inquiry|Product-aware|
|Requirements|Structured entity|
|Product Data|Structured, reusable model|
|Supply Data|Structured, approval-controlled model|
|AI|Never infer missing product/supply facts|
|Launch|Focused product architecture|
|Future|Buyer/RFQ/supplier systems possible|

---

# 9.62 Information Required From Management

This part cannot become final until management provides the actual business data.

We need:

## Product Information

1. Complete product list.
    
2. Product categories.
    
3. Product names in English.
    
4. Product names in Arabic.
    
5. Grades.
    
6. Standards.
    
7. Dimensions.
    
8. Forms.
    
9. Technical characteristics.
    
10. Applications.
    
11. Approved product images.
    
12. Approved product documentation.
    
13. Products currently available for international supply.
    
14. Products that should not be advertised publicly.
    

## Supply Network

15. Full list of manufacturers/supply sources Baghlaf actually works with.
    
16. Exact relationship with each.
    
17. Whether each relationship can be publicly disclosed.
    
18. Permission to use names.
    
19. Permission to use logos.
    
20. Products associated with each supply source.
    
21. Geographic information.
    
22. Any contractual restrictions on public representation.
    

## Commercial Requirements

23. Typical order quantities.
    
24. Minimum order quantities.
    
25. Supported destinations.
    
26. Technical information required from buyers.
    
27. Commercial information required from buyers.
    
28. Required documents.
    
29. Inspection requirements.
    
30. Payment / LC process.
    
31. Actual supply and delivery process.
    

---

# 9.63 Part 9 — Final Strategic Statement

> **Baghlaf Steel's product and supply-network architecture must accurately represent the company as a steel trading and supply organization. Products represent what the buyer needs; supply sources represent where suitable material may be sourced; Baghlaf represents the commercial and sourcing coordination layer connecting the two. The website should provide clear product information, structured specifications, transparent sourcing explanations, and direct paths from product discovery to requirement submission. Manufacturer relationships must be represented only with verified terminology and approved evidence. The underlying information model should separate products, supply sources, buyers, and requirements so that the website remains accurate, scalable, and ready for future commercial systems.**