# Baghlaf Steel — Business & Website Strategy

**Part 12 — UX Wireframes & Page Experience**

**Version:** 0.1  
**Scope:** UX structure, wireframes, page composition, interaction patterns, responsive behavior, RTL behavior, conversion flows, and page-level experience  
**Status:** Working Strategy Draft  
**Primary Domain:** `baghlaf.com.sa`

---

# 12.1 Strategic Objective

Part 12 translates the strategy into a practical user experience.

The objective is to answer:

> **What does the visitor see, understand, click, and do on every important page?**

This stage intentionally remains at the **wireframe / UX level**.

It is not yet about:

- Final colors
    
- Final photography
    
- Pixel-perfect spacing
    
- Animation polish
    
- Final copy
    
- Decorative effects
    

Those belong to the high-fidelity Figma stage.

The purpose of the wireframes is to validate:

```text
Information
   ↓
Hierarchy
   ↓
Navigation
   ↓
Trust
   ↓
Conversion
```

before visual styling makes changes expensive.

---

# 12.2 UX North Star

Every important page should help the visitor move through:

```text
UNDERSTAND
     ↓
EVALUATE
     ↓
VERIFY
     ↓
ACT
```

The website should never force a visitor into a single path.

A procurement professional should be able to go directly to products.

A suspicious first-time visitor should be able to go directly to verification.

A high-intent buyer should be able to submit a requirement immediately.

---

# 12.3 Global Experience Architecture

Every page should share several global systems.

```text
┌────────────────────────────────────────────┐
│ Header                                     │
│ Logo | Navigation | Verification | CTA    │
└────────────────────────────────────────────┘
                    ↓
              Page Content
                    ↓
┌────────────────────────────────────────────┐
│ Footer                                     │
│ Company | Products | Trust | Contact      │
└────────────────────────────────────────────┘
```

Global elements should be predictable.

That predictability contributes to trust.

---

# 12.4 Global Header UX

The header should provide immediate access to the most important destinations.

Recommended conceptual structure:

```text
[LOGO]

Products
Supply Network
How We Work
Why Baghlaf
About
Resources

Verification

[Submit Requirement]
[EN / AR]
```

Not every item needs to be equally prominent.

The hierarchy should be:

```text
Navigation
      ↓
Verification
      ↓
Submit Requirement
```

---

# 12.5 Header States

The header should support:

### State A — Initial

Potentially overlaying or sitting above the hero where appropriate.

### State B — Scrolled

Solid or more visually defined.

### State C — Mobile

Compact navigation.

### State D — RTL

Mirrored navigation structure and directional behavior.

The transition between states should be subtle.

---

# 12.6 Persistent Trust Access

The visitor should never be far from:

> **Verify Baghlaf**

This can exist as:

- Header item
    
- Footer link
    
- Contextual section
    
- Contact-page link
    

It should not require a permanent distracting floating widget.

---

# 12.7 Persistent Primary CTA

The primary conversion action should remain recognizable:

> **Submit Requirement**

The header CTA can remain visible across desktop pages.

On mobile, the CTA should remain accessible without consuming excessive screen space.

---

# 12.8 Homepage Wireframe

The homepage is the most important UX composition.

Recommended structure:

```text
┌──────────────────────────────────────────────┐
│ HEADER                                       │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ HERO                                         │
│                                              │
│ [Eyebrow]                                    │
│ Strong headline                              │
│ Supporting statement                         │
│                                              │
│ [Submit Requirement] [Verify Baghlaf]       │
│                                              │
│                         [Industrial Image]   │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ POSITIONING                                  │
│ What Baghlaf Steel does                      │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ PRODUCTS                                     │
│ Featured / categories                        │
│                                              │
│ [Product] [Product] [Product] [View All]    │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ SUPPLY MODEL                                 │
│                                              │
│ Buyer → Baghlaf → Saudi Supply → Buyer      │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ WHY BAGHLAF                                  │
│ Evidence-backed differentiators              │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ HOW WE WORK                                  │
│ 01 → 02 → 03 → 04 → 05                      │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ TRUST / PROOF                                │
│ Credentials / approved evidence              │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ VERIFICATION                                 │
│ Official website + official contacts          │
│ [Verify Baghlaf]                             │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ FINAL CTA                                    │
│ Submit Your Steel Requirement                 │
│ [Submit Requirement]                         │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ FOOTER                                       │
└──────────────────────────────────────────────┘
```

---

# 12.9 Homepage Hero UX

The hero has one job:

> **Make the business understandable immediately.**

It should answer:

```text
Who?
Baghlaf Steel

What?
Steel Trading & Supply

Where?
Saudi Arabia

Who for?
International Buyers

What next?
Submit Requirement / Verify
```

The hero should not attempt to explain every product or process.

---

# 12.10 Hero Interaction

The hero should include:

### Primary CTA

**Submit Requirement**

### Secondary CTA

**Verify Baghlaf**

Potential tertiary utility:

**Explore Products**

Only two primary visual actions should compete above the fold.

---

# 12.11 Homepage Positioning Section

Immediately after the hero, explain the business model.

Wireframe:

```text
┌──────────────────────────────────────────────┐
│ WHAT WE DO                                   │
│                                              │
│ Headline                                     │
│                                              │
│ Short explanation                            │
│                                              │
│                ┌─────────────────────────┐   │
│                │ Buyer Requirement        │   │
│                │         ↓                │   │
│                │ Baghlaf Steel            │   │
│                │         ↓                │   │
│                │ Saudi Supply             │   │
│                └─────────────────────────┘   │
└──────────────────────────────────────────────┘
```

This section should explicitly prevent the manufacturer misconception.

---

# 12.12 Product Section UX

The homepage should not display every product.

It should present a representative subset.

```text
[Category]
Product Name
Short information
[Explore]

[Category]
Product Name
Short information
[Explore]

[Category]
Product Name
Short information
[Explore]

               [View All Products]
```

The actual number should depend on the final product count.

---

# 12.13 Supply Model Section UX

The supply model should be visual rather than paragraph-heavy.

Possible structure:

```text
01 Requirement
      ↓
02 Assessment
      ↓
03 Saudi Sourcing
      ↓
04 Commercial Coordination
      ↓
05 Supply
```

Supporting text can explain each stage.

This section should emphasize Baghlaf's role.

---

# 12.14 Why Baghlaf UX

The "Why Baghlaf" section should present a small set of **real advantages**.

Not a generic six-card grid.

A stronger composition:

```text
┌─────────────────────┬────────────────────────┐
│                     │                        │
│ Strong statement    │ Evidence / metric /    │
│                     │ explanation            │
│                     │                        │
└─────────────────────┴────────────────────────┘
```

or a vertical editorial list:

```text
01  Saudi Supply Access
    Explanation

02  Requirement-Based Sourcing
    Explanation

03  Commercial Coordination
    Explanation

04  International B2B Focus
    Explanation
```

This is more distinctive than repetitive cards.

---

# 12.15 How We Work UX

This section should show the process clearly.

Desktop:

```text
01         02          03          04          05
│          │           │           │           │
Requirement Review   Sourcing   Coordination Supply
```

Mobile:

```text
01
Requirement
↓
02
Review
↓
03
Sourcing
↓
04
Coordination
↓
05
Supply
```

The mobile version should not attempt to preserve an unreadable horizontal timeline.

---

# 12.16 Trust / Proof UX

The trust section should be evidence-led.

Possible layout:

```text
TRUSTED THROUGH EVIDENCE

[Credential]   [Credential]   [Document]

Supporting explanation

[View Verification]
```

The exact content will depend on management-approved evidence.

No empty trust cards should be created before real evidence exists.

---

# 12.17 Verification Preview UX

The homepage should introduce the verification concept.

```text
┌──────────────────────────────────────────────┐
│ VERIFY BAGHLAF STEEL                         │
│                                              │
│ Official Website                             │
│ baghlaf.com.sa                               │
│                                              │
│ Official Email                               │
│ @baghlaf.com.sa                              │
│                                              │
│ Official Contact                             │
│ [Verified information]                       │
│                                              │
│ [Verify Baghlaf]                             │
└──────────────────────────────────────────────┘
```

This should feel like a professional identity system.

---

# 12.18 Homepage Final CTA

The final CTA should be simple.

```text
┌──────────────────────────────────────────────┐
│ Have a steel requirement?                    │
│                                              │
│ Tell us what you need.                       │
│                                              │
│ [Submit Steel Requirement]                   │
└──────────────────────────────────────────────┘
```

Avoid a second large paragraph or another complex feature block.

---

# 12.19 Products Landing Page

The Products page should begin with:

```text
PRODUCTS

Steel products supplied according to
buyer requirements and specifications.

[Search / Filter if needed]
```

Then:

```text
Categories
```

followed by product listings.

---

# 12.20 Products Navigation UX

The user should be able to navigate:

```text
Products
   ↓
Category
   ↓
Product
```

Potential secondary filter dimensions:

- Product type
    
- Standard
    
- Grade
    
- Form
    

Only include filters if enough product data exists to make them useful.

---

# 12.21 Product Category UX

A category page should provide:

```text
Category Hero
      ↓
Category Overview
      ↓
Products
      ↓
Common Specifications
      ↓
Applications
      ↓
Supply Information
      ↓
CTA
```

Do not repeat identical content blocks merely to create page length.

---

# 12.22 Product Detail Page

The product detail page should prioritize useful information.

Wireframe:

```text
┌──────────────────────────────────────────────┐
│ Breadcrumb                                   │
│                                              │
│ PRODUCT NAME                    [Image]      │
│ Short description                            │
│                                              │
│ [Request This Product]                       │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ KEY SPECIFICATIONS                           │
│                                               │
│ Grade      Standard      Form      Dimensions │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ DESCRIPTION / APPLICATIONS                   │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ TECHNICAL DETAILS                            │
│ Table / structured data                      │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ DOCUMENTS                                    │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ SUPPLY INFORMATION                           │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ [Submit Requirement]                         │
└──────────────────────────────────────────────┘
```

---

# 12.23 Product Page Sticky CTA

For long technical pages, a discreet sticky CTA can be useful:

> **Request This Product**

This should never obstruct technical information.

---

# 12.24 Supply Network Page

The Supply Network page should tell a clear visual story.

```text
HERO

How Baghlaf Connects Buyers
with Saudi Steel Supply

        ↓

SUPPLY MODEL

Buyer Requirement
        ↓
Baghlaf
        ↓
Saudi Supply Sources
        ↓
Commercial Coordination
        ↓
Buyer

        ↓

SUPPLY SOURCES

[Approved Source]
[Approved Source]
[Approved Source]

        ↓

PRODUCT COVERAGE

Products linked to the network

        ↓

HOW WE WORK

        ↓

[Submit Requirement]
```

The supply-network visualization must be factual.

---

# 12.25 Supply Source Interaction

If individual source profiles exist, clicking one should open:

```text
Supply Source
   ↓
Overview
   ↓
Relationship Type
   ↓
Relevant Products
   ↓
Approved Information
```

The relationship should be explicitly labeled where needed.

---

# 12.26 How We Work Page

This page should be highly scannable.

```text
HERO

How We Work

       ↓

01
Submit Requirement

       ↓

02
Review Requirement

       ↓

03
Source Suitable Supply

       ↓

04
Coordinate Commercial Terms

       ↓

05
Supply & Documentation

       ↓

FAQ / Additional Information

       ↓

Submit Requirement
```

The exact steps must reflect the actual Baghlaf process once confirmed.

---

# 12.27 Why Baghlaf Page

This page should not simply repeat the homepage.

It should provide deeper evidence.

Potential structure:

```text
HERO

Why Baghlaf

       ↓

VALUE PROPOSITION

       ↓

EVIDENCE

       ↓

SAUDI SUPPLY ACCESS

       ↓

COMMERCIAL COORDINATION

       ↓

INTERNATIONAL BUYER FOCUS

       ↓

VERIFICATION

       ↓

CTA
```

---

# 12.28 About Page

The page should establish corporate identity.

```text
HERO

Who We Are

       ↓

COMPANY OVERVIEW

       ↓

WHAT WE DO

       ↓

HOW WE OPERATE

       ↓

HISTORY
(if approved)

       ↓

LEADERSHIP
(if approved)

       ↓

CORPORATE INFORMATION

       ↓

VERIFICATION

       ↓

CONTACT
```

Avoid filling the page with generic mission/vision/values sections unless they are genuinely useful.

---

# 12.29 Verification Page

This is one of the highest-priority UX pages.

Recommended structure:

```text
┌──────────────────────────────────────────────┐
│ VERIFY BAGHLAF STEEL                         │
│                                              │
│ Confirm you are dealing with the official    │
│ Baghlaf Steel company.                       │
└──────────────────────────────────────────────┘

OFFICIAL WEBSITE
baghlaf.com.sa

OFFICIAL EMAIL
@baghlaf.com.sa

OFFICIAL PHONE
[Verified]

OFFICIAL OFFICE
[Verified]

OFFICIAL SOCIAL PROFILES
[Verified]

AUTHORIZED REPRESENTATIVES
[Approved list]

SECURITY GUIDANCE
[Approved text]

CONTACT OFFICIAL BAGHLAF
```

This page should be extremely easy to scan.

---

# 12.30 Verification UX Principle

The visitor should not need to:

- Download a PDF
    
- Call several departments
    
- Search the site
    
- Navigate five pages
    

to determine whether a contact channel is official.

The core verification information should be visible immediately.

---

# 12.31 Resources Page

The Resources experience should depend on actual content volume.

If content is limited:

```text
Resources
├── Documents
├── Case Studies
└── FAQ
```

If content grows:

```text
Resources
├── Technical
├── Documents
├── Case Studies
├── Insights
└── FAQ
```

The UX should scale without requiring a new navigation model.

---

# 12.32 Contact Page

The contact page should be utility-first.

```text
CONTACT BAGHLAF STEEL

Official contact information

[Phone]
[Email]
[WhatsApp]

Office
[Address]

Map

Departments
[Sales]
[Trade]
[General]

Verify official channels:
[Verification]

[Submit Requirement]
```

The page should not hide the phone number and email behind another form.

---

# 12.33 Requirement Submission UX

This is the most important functional flow.

The recommended initial structure is a **multi-step form**.

Why?

Because the visitor is providing several types of information:

```text
Buyer
Requirement
Technical
Delivery
Commercial
Documents
```

A single giant form would be visually intimidating.

---

# 12.34 Requirement Wizard

Recommended flow:

```text
STEP 1
Company / Contact
      ↓
STEP 2
Product & Quantity
      ↓
STEP 3
Technical Specifications
      ↓
STEP 4
Destination & Delivery
      ↓
STEP 5
Commercial Requirements
      ↓
STEP 6
Documents
      ↓
STEP 7
Review & Submit
```

However, some steps should dynamically disappear when irrelevant.

---

# 12.35 Requirement Step 1 — Buyer

Collect:

```text
Company Name
Country
Contact Name
Business Email
Phone / WhatsApp
Website (optional)
```

The form should make clear that a business email is preferred where appropriate.

---

# 12.36 Requirement Step 2 — Product & Quantity

Collect:

```text
Product
Quantity
Unit
```

Where product is selected from Baghlaf's actual product catalog.

If the visitor arrived from a product page:

> Preselect the product.

---

# 12.37 Requirement Step 3 — Technical

Show fields dynamically according to the selected product.

Potential:

```text
Grade
Standard
Dimensions
Thickness
Diameter
Form
Additional Specification
```

The exact field set should be product-specific.

---

# 12.38 Requirement Step 4 — Destination & Delivery

Potential fields:

```text
Destination Country
Destination Port / City
Required Delivery Period
Incoterm
Other Logistics Requirements
```

Only use fields that align with Baghlaf's real commercial process.

---

# 12.39 Requirement Step 5 — Commercial

Potential fields:

```text
Payment Requirement
LC
Inspection
Documentation
Other Commercial Requirements
```

The exact wording and mandatory status require management approval.

---

# 12.40 Requirement Step 6 — Documents

Possible uploads:

- RFQ
    
- Specification Sheet
    
- Purchase Requirement
    
- Other Relevant Documents
    

The interface should communicate:

```text
Accepted types
Maximum size
Privacy / handling information
```

once technically established.

---

# 12.41 Requirement Step 7 — Review

Before submission:

```text
Company
Product
Quantity
Technical
Destination
Commercial
Documents
```

The user should be able to edit any section without starting over.

---

# 12.42 Submission Confirmation

After submission:

```text
SUCCESS

Requirement Received

Your steel requirement has been submitted
through the official Baghlaf Steel website.

Reference:
BS-XXXXXX

Submitted:
[Date]

Next Step:
[Approved process description]

Official Contact:
[Email / Phone]

[Return Home]
```

The reference number should be generated by the backend.

---

# 12.43 Form Persistence

The form should ideally preserve entered information if:

- User moves backward
    
- Validation fails
    
- A step changes
    
- Temporary network problem occurs
    

This should be considered during technical implementation.

---

# 12.44 Form Validation UX

Validation should happen at the right moment.

### Step-level validation

Prevent progression when required information is missing.

### Inline validation

Show errors next to the problematic field.

### Summary validation

Before submission, show any unresolved issues clearly.

---

# 12.45 Form Error UX

Example:

> **Quantity is required.**

rather than:

> **Invalid input.**

Errors should help users recover.

---

# 12.46 Form Accessibility

The form should include:

- Explicit labels
    
- Keyboard support
    
- Focus management
    
- Visible error states
    
- Accessible descriptions
    
- Clear step indicators
    
- Screen-reader-friendly status updates
    

---

# 12.47 Form Mobile UX

On mobile, each step should be focused and vertically structured.

Example:

```text
STEP 2 OF 7

What steel product do you require?

[Product]

Required quantity

[Quantity]

[Back] [Continue]
```

Avoid squeezing multiple dense fields side-by-side.

---

# 12.48 Mobile Navigation UX

Mobile navigation should include:

```text
Menu

Products
Supply Network
How We Work
Why Baghlaf
About
Resources
Verification
Contact

[Submit Requirement]
Language
```

The primary CTA should remain obvious.

---

# 12.49 Mobile Homepage

The mobile homepage should prioritize:

```text
Hero
↓
Who We Are
↓
Products
↓
Supply Model
↓
Why Baghlaf
↓
Verification
↓
CTA
```

Not every desktop section needs identical visual treatment.

---

# 12.50 Mobile Product UX

The product page should prioritize:

```text
Product Name
↓
CTA
↓
Key Specifications
↓
Description
↓
Technical Details
↓
Documents
↓
Supply
```

The primary CTA should remain accessible.

---

# 12.51 Mobile Technical Tables

If a table becomes too wide:

### Option A

Horizontal scroll.

### Option B

Convert rows into stacked key/value blocks.

The best option will depend on the actual data.

Do not force a desktop table into an unreadable mobile column.

---

# 12.52 Mobile Verification

The verification page should be especially simple:

```text
Official Website
baghlaf.com.sa

Official Email
@baghlaf.com.sa

Official Phone
[...]

Official Office
[...]

[Contact Official Team]
```

No decorative interface should distract from the information.

---

# 12.53 Desktop vs Mobile Priority

The information hierarchy should remain:

```text
Identity
Trust
Capability
Process
Conversion
```

But the visual composition can change.

---

# 12.54 RTL / Arabic UX

The Arabic experience should be designed from the wireframe stage.

Core rules:

```text
RTL
↓
Right-aligned text
↓
Mirrored layout relationships
↓
Semantic directional icons
↓
Reversed navigation flow
↓
Correct form alignment
```

Arabic should not simply apply `direction: rtl` to the English design.

---

# 12.55 RTL Header

English:

```text
Logo → Navigation → CTA
```

Arabic:

```text
CTA ← Navigation ← Logo
```

The actual visual hierarchy may require adjustments, but the system should be mirrored semantically.

---

# 12.56 RTL Breadcrumbs

English:

```text
Home → Products → Rebar
```

Arabic:

```text
الرئيسية ← المنتجات ← حديد التسليح
```

The directional logic should be automatic.

---

# 12.57 RTL Forms

Labels, helper text, inputs, and validation messages should align naturally for Arabic.

Numbers, SKUs, standards, and technical values may need special direction handling.

This is especially important for mixed content such as:

> ASTM A615 — Grade 60 — 100,000 MT

---

# 12.58 RTL Tables

Tables should be tested carefully.

Some technical data may remain:

```text
Attribute | Value
```

while the visual reading direction changes.

Technical values should not become visually corrupted when embedded in Arabic.

---

# 12.59 Accessibility UX

Wireframes should already consider:

- Reading order
    
- Focus order
    
- Keyboard navigation
    
- Contrast
    
- Target size
    
- Heading hierarchy
    
- Form labels
    
- Reduced motion
    

Accessibility should not be patched in after visual design.

---

# 12.60 Page Transition Philosophy

Navigation should feel fast and predictable.

Avoid transitions that intentionally delay access to content.

Page transitions should only reinforce continuity.

---

# 12.61 Scroll Behavior

Avoid excessive sticky elements.

Potentially sticky:

- Header
    
- Product CTA on long technical pages
    

Avoid:

- Multiple stacked sticky panels
    
- Floating popups
    
- Permanently visible banners
    

The user should remain in control.

---

# 12.62 Search and Filtering UX

Search should only be added where it solves a real problem.

For example, if there are 50+ products, product search becomes valuable.

If there are 8 products, a simple categorized grid may be better.

The UX should follow information volume.

---

# 12.63 Content Density and Scanability

Each section should support quick scanning.

Use:

```text
Headings
Labels
Short paragraphs
Lists
Tables
Metadata
```

instead of dense prose.

International procurement professionals should be able to skim the site quickly.

---

# 12.64 Interaction Hierarchy

Across the site:

```text
Primary action
    ↓
Secondary action
    ↓
Tertiary navigation
```

The design should never make three different actions look equally important.

---

# 12.65 CTA Consistency

Use consistent terminology.

Primary:

> **Submit Requirement**

Supporting:

> **Verify Baghlaf**

Product-specific:

> **Request This Product**

Process-specific:

> **Discuss Your Requirement**

Avoid constantly changing CTA wording simply to make every section sound different.

---

# 12.66 UX Anti-Patterns

The wireframes should explicitly reject:

```text
❌ Auto-playing video before content
❌ Giant popup on entry
❌ Forced newsletter signup
❌ Aggressive cookie banners
❌ Multiple competing CTAs
❌ Long generic hero copy
❌ Huge feature-card grids
❌ Hidden contact information
❌ Overly complex navigation
❌ Giant inquiry form on one screen
❌ Unnecessary account creation
❌ Decorative interactions that delay content
```

---

# 12.67 UX Anti-Pattern: Fake Confidence

Do not use interface patterns designed to artificially manufacture credibility.

Examples:

```text
"10,000+ customers"
"99.9% satisfaction"
"50 countries"
"100% trusted"
```

unless those numbers are verified.

The interface should communicate confidence through real information.

---

# 12.68 UX Anti-Pattern: Manufacturing Implication

Never create a journey where:

```text
Products
 ↓
Our Factory
 ↓
Production Capacity
```

unless the business model genuinely supports those statements.

The correct conceptual journey is:

```text
Products
 ↓
Supply Network
 ↓
How We Work
 ↓
Requirement
```

---

# 12.69 UX for Trust-Critical Visitors

A skeptical first-time visitor should be able to take this path:

```text
Homepage
 ↓
Verification
 ↓
Official Contact
 ↓
About
 ↓
Supply Network
 ↓
Submit Requirement
```

This is an intentional UX pathway.

---

# 12.70 UX for High-Intent Visitors

A ready buyer should be able to:

```text
Homepage
 ↓
Submit Requirement
```

or:

```text
Search
 ↓
Product
 ↓
Request This Product
```

The website should not force high-intent visitors through unnecessary storytelling.

---

# 12.71 UX for Research Visitors

A researching buyer may follow:

```text
Homepage
 ↓
Products
 ↓
Supply Network
 ↓
How We Work
 ↓
Why Baghlaf
 ↓
Verification
 ↓
Requirement
```

This journey should be supported naturally.

---

# 12.72 Conversion Psychology

The experience should progressively reduce uncertainty:

```text
Uncertainty
   ↓
Understanding
   ↓
Evidence
   ↓
Confidence
   ↓
Action
```

Every major page should reduce at least one meaningful uncertainty.

---

# 12.73 Page Exit Intent

The site should not depend heavily on popups.

When users appear to be leaving, a subtle contextual CTA can be considered later.

However, the primary strategy should be **strong content and clear navigation**, not interruption.

---

# 12.74 Error / 404 UX

The 404 page should remain useful.

Potential structure:

```text
Page Not Found

What you were looking for isn't here.

[Go Home]
[Explore Products]
[Verify Baghlaf]
[Contact]
```

The 404 page should retain the same corporate identity.

---

# 12.75 Empty States

If an approved resource category has no public content:

```text
No public documents are currently available.

For assistance:
[Contact Baghlaf]
```

Do not create fake resources.

---

# 12.76 Maintenance / System Status

If a form or critical service is unavailable, the interface should clearly explain:

```text
This service is temporarily unavailable.

Please contact:
[Official Email]
[Official Phone]
```

This is another opportunity to reinforce official channels.

---

# 12.77 Loading UX

Loading states should preserve layout.

Avoid large blank screens.

Use appropriate:

- Skeletons
    
- Progress indicators
    
- Inline loading
    

Especially for:

- Product filtering
    
- Document retrieval
    
- Form submission
    
- Uploads
    

---

# 12.78 Success UX

Success states should always answer:

```text
What happened?
What happens next?
Who can I contact?
```

This is especially important for the requirement flow.

---

# 12.79 Wireframe Annotation Standards

Every major Figma wireframe should annotate:

```text
Purpose
Content requirements
CTA
Responsive behavior
RTL behavior
Interaction
Trust requirement
Data dependency
```

Example:

### Product Detail

**Purpose:** Evaluate capability  
**Primary CTA:** Request Product  
**Data:** Product entity  
**Responsive:** Table reflows on mobile  
**RTL:** Table labels mirrored appropriately

---

# 12.80 Page Template Matrix

The following templates should be designed in Figma:

|Template|Purpose|
|---|---|
|Homepage|Primary discovery + conversion|
|Product Listing|Product discovery|
|Product Category|Product specialization|
|Product Detail|Technical evaluation|
|Supply Network|Sourcing model|
|How We Work|Process transparency|
|Why Baghlaf|Differentiation + evidence|
|About|Corporate identity|
|Verification|Digital identity|
|Resources|Knowledge|
|Contact|Official communication|
|Requirement|Lead conversion|
|Confirmation|Conversion completion|
|404|Recovery|

---

# 12.81 Figma Wireframe Organization

Recommended Figma structure:

```text
03 — Wireframes
│
├── 01 — Global
│   ├── Header
│   ├── Footer
│   └── Navigation
│
├── 02 — Homepage
├── 03 — Products
├── 04 — Product Detail
├── 05 — Supply Network
├── 06 — How We Work
├── 07 — Why Baghlaf
├── 08 — About
├── 09 — Verification
├── 10 — Resources
├── 11 — Contact
├── 12 — Requirement Flow
├── 13 — Confirmation
├── 14 — Mobile
└── 15 — Arabic / RTL
```

This should come after the Foundations/Components pages described in Part 11.

---

# 12.82 Wireframe Fidelity

Wireframes should be detailed enough to answer:

> What goes here?

but not so detailed that they become expensive to change.

They should show:

- Section sizes approximately
    
- Hierarchy
    
- Content blocks
    
- Interaction
    
- Navigation
    
- Responsive behavior
    

They do not yet need:

- Final imagery
    
- Final colors
    
- Final typography
    
- Decorative styling
    

---

# 12.83 Management Review Point

Management should review the wireframes before final visual design.

The review should focus on:

### Business correctness

Is the story accurate?

### Content correctness

Is anything missing?

### Commercial correctness

Does the inquiry flow reflect the real process?

### Trust

Does the website establish the desired level of confidence?

### Product accuracy

Are the right products represented?

This is much easier to correct at the wireframe stage.

---

# 12.84 UX Review Questions

Before moving to high-fidelity Figma, ask:

```text
□ Can a new visitor understand Baghlaf in seconds?

□ Can a buyer find products quickly?

□ Can a skeptical visitor verify the company?

□ Can a high-intent buyer submit a requirement quickly?

□ Is the supply model understandable?

□ Is the company clearly distinguished from manufacturers?

□ Are official contacts easy to find?

□ Does the mobile experience preserve priorities?

□ Does Arabic work naturally?

□ Does every major page have an obvious next step?
```

---

# 12.85 Usability Testing

Before final visual development, test the wireframes with a small number of representative users if possible.

Tasks should include:

### Task 1

> "Find out whether Baghlaf manufactures steel."

### Task 2

> "Find a steel product you might buy."

### Task 3

> "Find out where the steel is sourced."

### Task 4

> "Verify the official Baghlaf website."

### Task 5

> "Submit a steel requirement."

If users struggle with these tasks, the structure needs to change before visual polish.

---

# 12.86 Analytics Planning at Wireframe Stage

The wireframe should already identify important interactions.

```text
Hero CTA
Product CTA
Verification CTA
Supply Network interaction
Contact CTA
Requirement step progression
Requirement completion
Document download
Phone
Email
WhatsApp
```

This will later inform the technical analytics implementation.

---

# 12.87 UX Success Metrics

The initial website should eventually evaluate:

### Understanding

Can visitors explain what Baghlaf does?

### Trust

Can visitors find verification information?

### Discovery

Can buyers find relevant products?

### Conversion

Can qualified buyers submit complete requirements?

### Efficiency

How much friction exists in the requirement flow?

### Accessibility

Can users navigate successfully with keyboard and assistive technologies?

---

# 12.88 Part 12 — Core UX Model

The complete experience can be represented as:

```text
                    LAND
                     │
                     ▼
                 UNDERSTAND
                     │
             ┌───────┴───────┐
             ▼               ▼
          EXPLORE          VERIFY
             │               │
             └───────┬───────┘
                     ▼
                  EVALUATE
                     │
                     ▼
                SUBMIT REQUIREMENT
                     │
                     ▼
                  CONFIRM
                     │
                     ▼
            OFFICIAL COMMUNICATION
```

This is the central UX model.

---

# 12.89 Part 12 — Recommended Page Priorities

### Priority 1

The pages and flows that should receive the strongest UX attention:

```text
Homepage
Products
Product Detail
Verification
Submit Requirement
```

### Priority 2

```text
Supply Network
How We Work
Why Baghlaf
About
Contact
```

### Priority 3

```text
Resources
Case Studies
FAQ
Future portal features
```

This helps allocate design time intelligently.

---

# 12.90 Part 12 — Design-to-Development Readiness

The project is ready to move from wireframes into high-fidelity Figma when:

```text
□ Sitemap is validated
□ Page purposes are clear
□ Homepage hierarchy is approved
□ Product journey is defined
□ Supply model is defined
□ Verification journey is defined
□ Requirement flow is defined
□ Mobile behavior is defined
□ RTL behavior is defined
□ Main components are identified
□ Key interactions are documented
□ Management has reviewed business-critical flows
```

---

# 12.91 Part 12 — Key Decisions

|Area|Current Decision|
|---|---|
|UX Philosophy|Understand → Evaluate → Verify → Act|
|Homepage|Strategy-led + trust-led + conversion-led|
|Main CTA|Submit Requirement|
|Trust CTA|Verify Baghlaf|
|Product Journey|Category → Product → Requirement|
|Supply Journey|Requirement → Baghlaf → Supply Source|
|Requirement UX|Multi-step / dynamic|
|Product Forms|Context-aware|
|Verification|Dedicated page + distributed access|
|Contact|Utility-first|
|Mobile|Deliberately redesigned|
|RTL|First-class|
|Accessibility|Designed from wireframe stage|
|Navigation|Buyer-oriented|
|Conversion|Low-friction B2B|
|Popups|Minimized|
|Sticky Elements|Limited|
|SEO|Supported by IA, not dominant over UX|
|Analytics|Planned from interaction level|

---

# 12.92 Final Strategic Statement

> **The Baghlaf Steel user experience should guide international buyers through a clear progression from understanding the company to evaluating its supply capability, verifying its official identity, and submitting a meaningful steel requirement. The wireframes should prioritize buyer questions, trust, technical information, and commercial conversion rather than decorative page structure. Product discovery, supply-network explanation, verification, and requirement submission are the critical experiences around which the site should be designed. Desktop, mobile, Arabic/RTL, accessibility, and real business-process behavior must be considered before high-fidelity visual design begins.**