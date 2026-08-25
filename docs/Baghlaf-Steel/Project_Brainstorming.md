Yes. I think we should **not start by designing pages or writing code yet**.

For Baghlaf Steel, the website is not simply a corporate website. Its primary job should be to become the **official digital identity and trust layer** for the company.

I did a quick external check before brainstorming, and there is already a serious problem we should design around: multiple websites currently present themselves as “Baghlaf Steel” or “Baghlaf” with overlapping claims and contact information. For example, `baghlafsteel-saudiarabia.com` presents itself as Baghlaf Steel, while `steelbaghlaf.com` presents a Baghlaf steel/iron business, and another site `import-rebar-iron.com` also presents itself as Baghlaf Steel.

That makes your idea **much more important than a normal redesign**.
`
# 1. The core idea

I would define the project like this:
`
> **Baghlaf Steel Official Digital Headquarters**
> 
> A secure, authoritative, multilingual corporate platform that allows international buyers to verify Baghlaf Steel, understand who the company is, verify its products and capabilities, communicate directly with authorized representatives, and distinguish official Baghlaf Steel channels from unauthorized brokers and impersonators.

The website should communicate:

**“If you are dealing with Baghlaf Steel, verify it here first.”**

That could become one of the strongest concepts of the entire website.

---

# 2. The website has 5 major objectives

Instead of thinking:

> Home → About → Products → Contact

I would think:

### Objective A — Identity

Prove:

**Who is Baghlaf Steel?**

- Legal company identity
- Saudi Arabian origin
- Headquarters
- Registration information
- Ownership/management information where appropriate
- Official domains
- Official emails
- Official phone numbers
- Official offices
- Authorized representatives
- Corporate documentation

---

### Objective B — Authenticity

Prove:

**“You are dealing with the real Baghlaf Steel.”**

This should be a first-class feature.

For example:

### Official Verification Center

`/verify`

A buyer could see:

> **Verify Baghlaf Steel**

**Official website**

`baghlafsteel.com`

**Official email domains**

`@baghlafsteel.com`

**Official sales channels**

...

**Authorized representatives**

...

And potentially:

> **Verify an offer / quotation / document**

The buyer could enter:

- Document number
- Offer reference
- Sales reference
- Representative ID
- QR code

and the website responds:

### VERIFIED

> This document was issued by Baghlaf Steel.

or:

### NOT VERIFIED

> We could not verify this document. Contact Baghlaf Steel through the official channels below.

This could become a **major differentiator**.

---

# 3. Trust should be designed into every page

International steel buyers don't necessarily trust a company because the homepage looks beautiful.

They trust because they can answer:

- Who exactly am I buying from?
- Where are they located?
- Is this a real company?
- Who owns/manages it?
- Are these people really authorized?
- Where does the steel come from?
- What specifications are available?
- What certifications exist?
- What are the payment procedures?
- How is shipping handled?
- Who do I contact?
- Can I verify this quotation?
- Can I verify this bank information?
- Is this broker actually authorized?
- Is this website official?

So the design philosophy should be:

> **Evidence > Marketing**

We can still make it extremely premium.

---

# 4. The website structure I would initially consider

Not final yet — this is our **brainstorming architecture**.

```
BAGHLAF STEEL
│
├── Home
│
├── About
│   ├── Who We Are
│   ├── Our Story
│   ├── Leadership
│   ├── Our Values
│   ├── Saudi Arabia
│   └── Global Presence
│
├── Products
│   ├── Billets
│   ├── Rebar
│   ├── Hot Rolled Steel
│   ├── Cold Rolled Steel
│   ├── Galvanized Steel
│   ├── Rails
│   └── Other Products
│
├── Capabilities
│   ├── Manufacturing
│   ├── Sourcing
│   ├── Quality Control
│   ├── Warehousing
│   ├── Logistics
│   └── Export
│
├── Global Trade
│   ├── Export Markets
│   ├── Ports & Logistics
│   ├── Shipping
│   ├── Documentation
│   └── Buyer Process
│
├── Quality & Compliance
│   ├── Quality Standards
│   ├── Certifications
│   ├── Testing
│   ├── Traceability
│   └── Compliance
│
├── Trust Center
│   ├── Verify Baghlaf Steel
│   ├── Verify Documents
│   ├── Official Domains
│   ├── Official Emails
│   ├── Authorized Representatives
│   ├── Fraud Prevention
│   └── Report Impersonation
│
├── Insights
│   ├── Steel Knowledge
│   ├── Market Insights
│   ├── News
│   └── Resources
│
├── Contact
│   ├── Sales Inquiry
│   ├── Request a Quote
│   ├── General Contact
│   └── Offices
│
└── Buyer Portal [Future]
```

But I **wouldn't commit to this architecture yet**.

We need Baghlaf management's input first.

---

# 5. The Home Page should be very different from a normal AI-generated corporate website

I don't want:

> "We are a leading steel company..."

followed by 3 cards and a generic factory video.

Instead, the homepage should immediately establish **authority**.

Something conceptually like:

### HERO

**STEEL FROM SAUDI ARABIA.  
BUILT ON TRUST.**

Baghlaf Steel connects international buyers with reliable steel supply from Saudi Arabia.

Then immediately:

**Official Baghlaf Steel**

> Before proceeding with any transaction, verify our official channels and representatives.

**[Verify Baghlaf Steel]**

**[Explore Products]**

---

Then:

### Trust indicators

Something like:

**Saudi Arabia**

Headquartered / Operating in Saudi Arabia

**Global**

International supply network

**Verified**

Official corporate communication

**Direct**

Connect with authorized Baghlaf representatives

But **only after management verifies the actual claims/numbers**.

---

# 6. A very important feature: "Is this really Baghlaf Steel?"

This deserves its own page.

Imagine a buyer receives:

> `baghlaf-steel-trading@gmail.com`

or

> `sales@baghlaf-steel-something.com`

They shouldn't have to Google around.

They visit:

**baghlafsteel.com/verify**

and see:

---

## Protect Yourself From Impersonation

### Official Baghlaf Steel communication comes only through verified channels.

**Official Website**

✓ `baghlafsteel.com`

**Official Email**

✓ `sales@baghlafsteel.com`

**Official Sales Representatives**

✓ Search representative

**Official Documents**

✓ Verify document number

**Official Bank Information**

✓ Verify banking instructions

---

And then:

### Important Notice

> Baghlaf Steel will never ask customers to transfer funds to an unverified personal account or unauthorized third party.

Obviously, the exact wording needs to come from management/legal.

---

# 7. Document verification could become extremely powerful

This is where Supabase becomes genuinely useful.

Imagine Baghlaf issues:

```
Quotation
BGH-Q-2026-001842
```

The document contains a QR code.

Buyer scans it.

It opens:

```
baghlafsteel.com/verify/BGH-Q-2026-001842
```

The website says:

# VERIFIED

**Document:** Commercial Quotation  
**Reference:** BGH-Q-2026-001842  
**Issued:** August 24, 2026  
**Status:** Valid  
**Issued by:** Baghlaf Steel

And importantly:

> This verification confirms that the document reference exists in Baghlaf Steel's official system. Always independently verify payment instructions with an authorized Baghlaf Steel representative.

That last part matters from a security perspective.

---

# 8. Authorized representative directory

Another extremely useful feature.

### Meet Our Authorized Representatives

Country / Region:

```
Saudi Arabia
UAE
China
India
Turkey
Europe
South America
...
```

Buyer selects:

**India**

and sees:

> **Authorized Sales Representative**
> 
> Name  
> Position  
> Official email  
> Official phone  
> Representative ID  
> Territory  
> Verification status

Potentially:

**[Verify Representative]**

This directly attacks the broker/intermediary problem.

The current publicly available Baghlaf material itself makes claims about international presence and sales teams across numerous countries, so this information should be systematically verified with management before we reproduce or modernize it.

---

# 9. Products need to be much more technical

International steel buyers don't want beautiful product cards alone.

They want:

- Product
- Grade
- Standard
- Dimensions
- Chemical composition
- Mechanical properties
- Origin
- Mill
- Availability
- MOQ
- Packaging
- Inspection
- Certification
- Loading port
- Incoterms
- Documentation

For example:

## Billet Steel

**Technical Information**

|Specification|Details|
|---|---|
|Grade|...|
|Standard|...|
|Size|...|
|Length|...|
|Weight|...|
|Origin|Saudi Arabia|
|Availability|...|
|Packaging|...|

Then:

**Request Technical Sheet**

**Request Quote**

**Contact Sales**

The existing public site already lists products such as billets, rebar, hot rolled sheets, galvanized sheets/coils, cold rolled sheets and rails.

But we'll need management to tell us **what Baghlaf actually wants to sell today**, rather than simply copying the old website.

---

# 10. "How We Work" is important

International transactions can be complicated.

We should explain the process clearly.

For example:

```
01
Submit Inquiry

↓

02
Commercial Discussion

↓

03
Technical Specification

↓

04
Quotation / Offer

↓

05
Contract

↓

06
Payment & Financial Verification

↓

07
Quality / Inspection

↓

08
Shipment

↓

09
Documentation

↓

10
Delivery
```

This helps remove the uncertainty that brokers exploit.

The current public site already describes a fairly detailed transaction workflow for certain steel sales, including LOI, FCO, SPA, technical annexes, LC and performance-bond steps.

But again:

**we should never blindly publish financial/legal procedures from the old website.**

Management + legal/finance must approve them.

---

# 11. Quality & Certifications

This section could be extremely important.

Potential structure:

```
Quality
│
├── Quality Management
├── Product Standards
├── Mill Certificates
├── Inspection
├── Testing
├── Traceability
└── Certifications
```

And instead of saying:

> "We provide high quality."

we show evidence.

For example:

**Certificate**

> ISO XXXX

**Issued by**

> ...

**Certificate No.**

> ...

**Valid Until**

> ...

**[View Certificate]**

Potentially digitally signed / hashed documents later.

---

# 12. Global presence needs to feel real

Rather than a generic:

> "We operate globally."

We can create an interactive map.

![https://images.openai.com/static-rsc-4/yB3SZEVNdP45TJ-Hmwr__NIdDOpVXQyQtSVzoGOGFg6lofiZWrTxH7X1Hbz-ddY5QmP4xk1Fi1OWIw6Zgq9_Bs7sKp7D-rCfl_WbXlYWAN60O7hdjDvgM_WvyIceSy5Oh2G-o5VVq3PLmQspvayU50erftHmVlOE1W11E8d4RS_GGTuVFRp_iPOFqbdW1-jn?purpose=fullsize](https://images.openai.com/static-rsc-4/1NZtkebwtAMCY8zh02mUHQ_TBlSy7oRrOVv_n2DS9jt-SYaNHajiyoC6iIkqQnWcI2jyFPZV8ADosy814c2zVvLC9MUkWjGvSfN_CGnhGjRpU4P2NeRQA0JuG20dkxQWKtHlt8Er_NJDPgvoVj2zQW3uY8fvStORc5cEmHiGdm8?purpose=inline)

![https://images.openai.com/static-rsc-4/L9lol88n5LM3fQL_Y1croQbKW33ZWlzWd5spumLVkZCpj53_recI2Hq80rEZvfXlq32jITtp-Z03wFHK6dzH5Hmx_aTYdsDvpvngmyHJBJf3pPg9LCmUrNg5NSsOUznNGh1Th5pUKrCrpkntEAJImifsmNp8xPWETwsX7AkDLEAaMdZ6STG0AJRcBYO45UPR?purpose=fullsize](https://images.openai.com/static-rsc-4/yT_SzWum3s9DwYNYdiX0JKvH4YzQoXG4kLcQAuTXwGGzzEBXa_NNmMQ4FmKBLewVztIq-Gydj2V-lpx3ChXBIcx0jdtSoPFO2c1SNhOf0tCZFojV7StJWDqV-tVVG8o9js6U8t8GV6em5P2OgrPzWIyfaoGp60OJI_Dgp-WuFtg?purpose=inline)

![https://images.openai.com/static-rsc-4/5xGicEvOOlqJIKkCcDfk9purRxfTeZpbaw05-yLjLsjN117w52VoyzmF3KBbjrPbWO6P9m0y45HULsUjvdj7-jzpU2th-JQGNfmW9AI4qtpAI6-iHb0esE5RR5ahLU6BIWmXqtckSmR7Z6kkIfhNgJDffrFNsC-OyDr2UDbM17f3TRgDux9knNq2qhYAd6wB?purpose=fullsize](https://images.openai.com/static-rsc-4/CIv32J_uo9MotP6mR5Zi7KhoRCFsWKXz7BVtCWwbq57WWo3bLh4MeBAwQeKCSd8h3kh45hxqp7QfgUTGOc3bJ5OgIkBjVviZkwHLVhhfpLgsTwLmuxwd2liZck9N7cGaBx6wZm99nhT-s31uSZxi4V9UMfBMWo-ruA0Ll_Oj8vs?purpose=inline)

7

Something like:

### From Saudi Arabia to Global Markets

Interactive map:

```
Saudi Arabia
     │
     ├── Middle East
     ├── Asia
     ├── Europe
     ├── Africa
     └── Americas
```

Clicking a region reveals:

- Markets served
- Products
- Local representatives
- Logistics
- Contact

Again, only verified data.

---

# 13. The "Fraud Prevention" page

I think this should be mandatory.

Something like:

# Beware of Impersonators

> Baghlaf Steel has become aware of unauthorized parties using the Baghlaf name, logo, websites and identities to approach potential buyers.

Then:

### Before you transact

1. Check the website domain.
2. Check the sender's email.
3. Verify the representative.
4. Verify the quotation.
5. Verify banking instructions.
6. Contact Baghlaf through the official website.
7. Never rely solely on a broker's claim that they represent Baghlaf Steel.

And:

### Report suspicious activity

A secure form:

```
Your name
Company
Country
Email
Suspicious website
Email received from
Phone number
Document
Message
```

This could feed into a protected Supabase-backed administration system.

---

# 14. We should have an Admin System — but not overbuild it

This is where I would be disciplined.

We don't need to build a giant ERP.

We need a small **Content & Trust Management System**.

Supabase could manage:

```
Products
Representatives
Documents
Certificates
Verification Records
Locations
Inquiries
Fraud Reports
News
FAQs
```

The public website consumes approved information.

Management/admin can update:

```
Representative → Active / Suspended
Certificate → Valid / Expired
Document → Valid / Revoked
Product → Available / Unavailable
```

This gives us something much more powerful than a static website.

---

# 15. Security should be part of the architecture from Day 1

Since we're dealing with international commercial transactions, we should treat security seriously.

Our baseline should include:

### Frontend

- Next.js
- TypeScript
- Strict TypeScript
- Server Components where appropriate
- Zod validation
- secure headers
- CSP
- rate limiting
- bot protection
- input sanitization
- no secrets in frontend

### Backend

- Supabase
- PostgreSQL
- Row Level Security
- secure authentication
- least-privilege access
- audit logs

### Infrastructure

- Vercel
- GitHub
- protected branches
- environment separation

```
Development
      ↓
Preview
      ↓
Staging
      ↓
Production
```

### Security principle

**Nobody should be able to modify a verification record simply by manipulating a URL.**

That's something we'll explicitly test.

---

# 16. Performance

The site should feel like a **premium international industrial company**, not a heavy WordPress website.

I'd target:

- Excellent Core Web Vitals
- optimized images
- WebP/AVIF
- lazy loading
- minimal JavaScript
- server-side rendering
- static generation where possible
- CDN
- caching
- optimized fonts
- minimal third-party scripts

And we'll measure it.

Not:

> "It feels fast."

But:

```
Lighthouse
PageSpeed
Core Web Vitals
Bundle analysis
Image optimization
```

---

# 17. SEO is especially important for this project

There is another reason.

If people search:

> Baghlaf Steel

we want **the official website to dominate the search results**.

The SEO strategy should therefore include:

```
Baghlaf Steel
Baghlaf Steel Saudi Arabia
Baghlaf Steel official
Baghlaf Steel Saudi Arabia official
Baghlaf Steel products
Baghlaf Steel billet
Baghlaf Steel rebar
Baghlaf Steel contact
Baghlaf Steel verification
Baghlaf Steel authorized representative
```

And importantly:

### Structured data

Organization schema  
LocalBusiness where appropriate  
Product schema  
Article schema  
Breadcrumbs  
FAQ schema

Plus:

- Google Search Console
- Bing Webmaster Tools
- sitemap
- robots.txt
- canonical URLs
- hreflang
- Arabic/English SEO

---

# 18. Arabic + English should be architectural, not an afterthought

I recommend:

```
/en
/ar
```

or equivalent localized routing.

And not simply translating English text.

The Arabic site should have its own proper:

- typography
- RTL layout
- spacing
- navigation
- metadata
- SEO
- structured content

Potentially later:

```
/en
/ar
/zh
/tr
```

if management decides that international buyers justify additional languages.

---

# 19. Design direction

This is where your Dribbble / Behance references become extremely useful.

I **don't** want us to tell AI:

> "Make a modern steel company website."

That almost guarantees a generic AI website.

Instead, we should create a **Baghlaf Steel Design Language**.

We'll collect references for:

### Typography

- Heading style
- Body typography
- Numbers
- Technical data
- Arabic typography

### Color

Potentially:

- steel
- graphite
- black
- silver
- white
- one brand accent

But we'll derive this from Baghlaf's existing brand rather than randomly choosing "industrial colors."

### Photography

We need to decide whether the visual language is:

**A. Industrial documentary**

Real factories, workers, steel, ports.

**B. Premium corporate**

Minimal, controlled photography.

**C. Technical engineering**

Blueprints, diagrams, specifications.

**D. Combination**

My preference is **D**, but executed very carefully.

---

# 20. One major rule: real photography > AI-generated factory imagery

For this particular company, fake AI factory images could actually damage trust.

If we're saying:

> "We are a real steel company."

then showing an obviously AI-generated factory is counterproductive.

We should eventually obtain:

- real facilities
- real warehouses
- real products
- real management
- real employees where appropriate
- real shipments
- real documents
- real locations
- real certifications

This can become one of the strongest assets of the website.

---

# 21. Our technology stack

Your proposed stack is actually very good.

I'd start with:

```
                    ┌─────────────────┐
                    │    Visitors     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     Vercel      │
                    │   Next.js App   │
                    └────────┬────────┘
                             │
               ┌─────────────┼─────────────┐
               ▼             ▼             ▼
          Supabase        Storage       Analytics
          Database        Documents
               │
               ▼
        Admin / Trust System

GitHub
   │
   ▼
Development → Preview → Production
```

### Core

**Next.js + TypeScript**

### Database / backend

**Supabase**

### Deployment

**Vercel**

### Source control

**GitHub**

### Development / AI

**Antigravity + Claude Code / appropriate coding models**

### Design

**Figma**

### Design handoff

Potentially **Figma MCP**

### Validation

- ESLint
- Prettier
- TypeScript
- Vitest
- Playwright
- Lighthouse
- Zod
- Dependabot / GitHub security tooling

We can decide the rest later.

---

# 22. The AI knowledge system you mentioned is extremely important

This is one part I strongly agree with you about.

We should **not give the AI one giant `README.md` and hope it remembers everything.**

Instead, we'll create a project knowledge architecture.

Something like:

```
/docs
│
├── 00-project-context.md
│
├── 01-business
│   ├── company-profile.md
│   ├── company-history.md
│   ├── leadership.md
│   ├── global-presence.md
│   └── business-model.md
│
├── 02-products
│   ├── product-catalog.md
│   ├── billet.md
│   ├── rebar.md
│   ├── hot-rolled.md
│   └── ...
│
├── 03-trust
│   ├── verification-system.md
│   ├── authorized-representatives.md
│   ├── official-domains.md
│   └── fraud-prevention.md
│
├── 04-design
│   ├── design-principles.md
│   ├── visual-language.md
│   ├── typography.md
│   ├── color.md
│   ├── components.md
│   └── references.md
│
├── 05-architecture
│   ├── system-architecture.md
│   ├── database.md
│   ├── authentication.md
│   └── integrations.md
│
├── 06-security
│   ├── security-principles.md
│   ├── threat-model.md
│   └── security-checklist.md
│
├── 07-seo
│   ├── seo-strategy.md
│   ├── sitemap.md
│   └── metadata.md
│
├── 08-content
│   ├── content-guidelines.md
│   └── terminology.md
│
├── 09-development
│   ├── coding-standards.md
│   ├── git-workflow.md
│   └── testing.md
│
└── 10-roadmap
    ├── roadmap.md
    ├── milestones.md
    └── changelog.md
```

This is much better for AI-assisted development.

---

# 23. But I want to add one more important file

### `AI_RULES.md`

This becomes the AI's operating manual.

It should tell the AI:

> You are working on the Baghlaf Steel official website.

And then:

```
1. Never invent company information.
2. Never invent certifications.
3. Never invent products.
4. Never invent statistics.
5. Never invent representatives.
6. Never invent addresses.
7. Never invent legal information.
8. Never publish unverified management claims.
9. Never expose secrets.
10. Never bypass security controls.
11. Never make architectural changes without documenting them.
12. Follow the existing design system.
13. Reuse existing components.
14. Do not introduce dependencies unnecessarily.
15. Test before considering a feature complete.
16. Preserve Arabic/English compatibility.
17. Do not modify production configuration casually.
18. Ask for clarification when business information is ambiguous.
```

This will be **extremely valuable** when you're using AI coding agents.

---

# 24. And we should develop version-by-version

I strongly recommend **not** asking Antigravity/Claude:

> "Build the whole Baghlaf Steel website."

That's how projects become chaotic.

Instead:

### Version 0 — Foundation

```
Repository
Next.js
TypeScript
ESLint
Prettier
Git workflow
Environment variables
CI
```

### Version 0.1 — Design system

```
Typography
Colors
Spacing
Buttons
Cards
Navigation
Footer
Forms
Tables
```

### Version 0.2 — Core website

```
Home
About
Products
Contact
```

### Version 0.3 — Trust Center

```
Verification
Official channels
Representatives
Fraud prevention
```

### Version 0.4 — Buyer experience

```
RFQ
Product inquiry
Technical documentation
Buyer workflow
```

### Version 0.5 — Admin

```
Supabase
Authentication
CMS-like management
Documents
Representatives
Verification records
```

### Version 0.6 — SEO + performance

```
Metadata
Schema
Sitemap
Performance
Analytics
```

### Version 1.0 — Production

```
Security audit
Accessibility
Performance testing
Cross-browser testing
Content verification
Management approval
Production deployment
```

This approach is much safer.

---

# 25. The Git strategy should also be AI-friendly

Something like:

```
main
│
└── develop
      │
      ├── feat/homepage
      ├── feat/products
      ├── feat/trust-center
      ├── feat/verification
      ├── feat/admin
      └── fix/...
```

And AI should work on **one scoped task at a time**.

For example:

> Implement the Product Card component according to `docs/04-design/components.md`.

Not:

> Build the products system.

---

# 26. We should also maintain a Decision Log

This is another `.md` file I would absolutely have.

```
docs/decisions/

ADR-001-nextjs.md
ADR-002-supabase.md
ADR-003-i18n.md
ADR-004-verification-system.md
ADR-005-authentication.md
...
```

Each architectural decision answers:

```
Problem
Decision
Why
Alternatives considered
Consequences
Date
```

Then six months later, the AI doesn't ask:

> "Why are we using Supabase?"

It can read the decision.

---

# 27. The most important thing we need from Baghlaf Management

Before we build anything, we need to separate information into:

### VERIFIED

Management has confirmed it.

### TO VERIFY

We found it somewhere but management hasn't confirmed it.

### PROHIBITED

Information that must never be published.

This is particularly important because the existing public web presence contains numerous specific claims — company history, international locations, manufacturing capabilities, partnerships, transaction procedures, etc.

**We should not assume those claims are correct simply because they're online.**

That should become one of our project's fundamental rules.

---

# 28. Our brainstorming process

I suggest we do this **together in stages**, rather than me giving you a giant finished specification.

### Stage 1 — Business & Trust

We define:

- What Baghlaf Steel actually is
- What it sells
- Who it serves
- Where it operates
- What makes it credible
- What information is sensitive
- What the impersonation problem actually looks like
- What management wants buyers to believe/understand

### Stage 2 — Buyer Journey

We'll create journeys for:

**International buyer**

```
Google
 ↓
Baghlaf website
 ↓
Trust verification
 ↓
Company
 ↓
Products
 ↓
Technical information
 ↓
RFQ
 ↓
Sales representative
 ↓
Transaction
```

And:

**Buyer who received a suspicious offer**

```
Suspicious email
 ↓
Baghlaf website
 ↓
Verify representative
 ↓
Verify document
 ↓
Verify domain
 ↓
Contact official Baghlaf
```

### Stage 3 — Information Architecture

We'll decide the exact pages.

### Stage 4 — Design Language

You send me:

- Dribbble
- Behance
- websites
- screenshots
- Figma references

We'll extract the **design principles**, not copy the designs.

### Stage 5 — Technical Architecture

Then we decide:

- Next.js architecture
- Supabase schema
- authentication
- verification architecture
- storage
- security
- API design
- deployment
- monitoring

### Stage 6 — AI Knowledge Base

Then I'll help you create the actual:

```
AI_RULES.md
PROJECT_CONTEXT.md
ARCHITECTURE.md
DESIGN_SYSTEM.md
...
```

### Stage 7 — Implementation

Only then do we give Antigravity/Claude Code the project.

---

## One thing I would change in your original approach

Don't think:

> **"We need to build a website for Baghlaf Steel."**

Think:

> **"We need to build Baghlaf Steel's official digital identity, trust infrastructure, buyer experience, and corporate website."**

The website is only the visible part.

The **Trust Center + Verification System + authoritative company information + excellent buyer experience** are what can actually address the problem you're describing.

And because we're dealing with a real steel company and international commercial buyers, I would make **truthfulness, verification, security, and evidence** higher priorities than flashy animations.

### Next step

Send me **Baghlaf Steel Management's ideas/features first**, even if they're messy or in Arabic, and I'll help you challenge, organize, merge, and prioritize them into the product vision before we touch the technical implementation.