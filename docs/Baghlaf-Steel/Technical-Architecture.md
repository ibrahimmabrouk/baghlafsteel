# Baghlaf Steel — Business & Website Strategy

**Part 13 — Technical Architecture**

**Version:** 0.1  
**Scope:** Technology stack, application architecture, project structure, content/data architecture, routing, forms, security, SEO, performance, localization, integrations, testing, deployment, and maintainability  
**Status:** Working Strategy Draft  
**Primary Domain:** `baghlaf.com.sa`

---

# 13.1 Strategic Objective

The technical architecture should transform the approved:

- Business strategy
    
- Trust architecture
    
- Buyer journey
    
- Information architecture
    
- Content strategy
    
- Product architecture
    
- Visual system
    
- UX wireframes
    

into a production website that is:

**Fast, secure, maintainable, scalable, SEO-ready, bilingual, accessible, and easy for an AI coding agent to understand.**

The architecture should avoid two opposite mistakes:

### Under-engineering

A quick collection of pages that becomes difficult to maintain.

### Over-engineering

A complex application architecture that adds unnecessary infrastructure to a corporate website.

The target is:

> **A production-grade corporate platform with an architecture appropriate to Baghlaf's current business, while keeping a clear path toward future RFQ and buyer systems.**

---

# 13.2 Recommended Technology Stack

For the initial website, the recommended stack is:

```text
Frontend
Next.js
TypeScript
React

Styling
Tailwind CSS

UI / Primitives
Custom Design System
+
Selective shadcn/ui primitives where useful

Animation
Motion

Forms
React Hook Form
+
Schema validation

Validation
Zod

Content
Structured content source / CMS
or
Version-controlled content for launch

Database
Only where operational data requires one

Hosting
Vercel or equivalent production platform

Version Control
GitHub

Design
Figma

Design → Code Context
Figma MCP

Analytics
Privacy-conscious analytics solution
```

The exact package versions should be locked during implementation rather than being hardcoded into this strategy document.

---

# 13.3 Why Next.js

Next.js is recommended because the project requires:

- Strong SEO
    
- Server-rendered / statically generated content
    
- Dynamic product pages
    
- Internationalization
    
- Image optimization
    
- Flexible routing
    
- API capabilities where needed
    
- Strong React ecosystem
    
- Good developer tooling
    

The site is primarily content and conversion driven, so most public pages should be optimized for **fast server-rendered or statically generated delivery**.

---

# 13.4 Why TypeScript

TypeScript should be mandatory.

This project contains structured entities:

```text
Products
Supply Sources
Requirements
Contacts
Documents
Claims
Resources
```

Typed structures reduce accidental inconsistencies.

They are also particularly valuable when AI-generated code is involved.

The goal is:

> **Make invalid states harder to create.**

---

# 13.5 Architecture Philosophy

The architecture should follow:

```text
Simple Public Experience
        +
Structured Internal Data
        +
Reusable Components
        +
Strict Validation
        +
Clear Separation of Concerns
```

The frontend should not become tightly coupled to the source of content or to the implementation details of the inquiry system.

---

# 13.6 Application Architecture

Conceptually:

```text
                    Next.js Application
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
      Presentation       Content          Actions
          │                │                │
          ▼                ▼                ▼
       Components      Product Data     Requirements
       Templates       Company Data     Contact
       Patterns        Resources        Uploads
          │
          ▼
       Design System
```

---

# 13.7 Rendering Strategy

Different pages should use different rendering strategies according to their nature.

### Static / pre-rendered

Use for:

- Home
    
- About
    
- Why Baghlaf
    
- How We Work
    
- Verification
    
- Static resources
    

### Dynamic content generation

Use for:

- Products
    
- Product categories
    
- Product details
    
- Case studies
    
- Insights
    

when content changes independently of deployments.

### Dynamic server actions / APIs

Use for:

- Requirement submission
    
- Contact submission
    
- File uploads
    
- Secure integrations
    

This avoids making the entire website unnecessarily dynamic.

---

# 13.8 Server vs Client Components

The default should be:

> **Server-first.**

Use client-side React only where interaction genuinely requires it.

Examples:

### Server-friendly

- Product information
    
- Company content
    
- SEO metadata
    
- Static sections
    
- Supply descriptions
    

### Client-required

- Multi-step requirement form
    
- Interactive filters
    
- Upload UI
    
- Tabs with complex state
    
- Certain animations/interactions
    

This reduces client-side JavaScript and improves performance.

---

# 13.9 Project Structure

A recommended structure:

```text
/baghlaf-steel
│
├── app/
│   ├── [locale]/
│   │   ├── page.tsx
│   │   ├── products/
│   │   ├── supply-network/
│   │   ├── how-we-work/
│   │   ├── why-baghlaf/
│   │   ├── about/
│   │   ├── verification/
│   │   ├── resources/
│   │   ├── contact/
│   │   └── submit-requirement/
│   │
│   ├── api/
│   │   ├── requirements/
│   │   ├── uploads/
│   │   └── ...
│   │
│   ├── sitemap.ts
│   ├── robots.ts
│   └── ...
│
├── components/
│   ├── ui/
│   ├── navigation/
│   ├── product/
│   ├── trust/
│   ├── supply/
│   ├── forms/
│   ├── content/
│   └── layout/
│
├── content/
│   ├── company/
│   ├── products/
│   ├── supply-sources/
│   ├── resources/
│   └── pages/
│
├── lib/
│   ├── validation/
│   ├── seo/
│   ├── content/
│   ├── email/
│   ├── uploads/
│   └── utils/
│
├── schemas/
│
├── types/
│
├── public/
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── docs/
│
├── skills/
│
├── CLAUDE.md
├── AGENTS.md
└── package.json
```

The precise folder structure can evolve during implementation, but the separation of concerns should remain.

---

# 13.10 Route Architecture

Recommended public routes:

```text
/[locale]
/[locale]/products
/[locale]/products/[category]
/[locale]/products/[category]/[product]

/[locale]/supply-network

/[locale]/how-we-work

/[locale]/why-baghlaf

/[locale]/about

/[locale]/verification

/[locale]/resources
/[locale]/resources/documents
/[locale]/resources/case-studies
/[locale]/resources/insights

/[locale]/contact

/[locale]/submit-requirement
```

The exact route strategy for the default language can be finalized during implementation.

---

# 13.11 Localization Architecture

The site should support:

```text
English
Arabic
```

The technical architecture should support localized:

- Routes
    
- Metadata
    
- Content
    
- Navigation
    
- Form labels
    
- Validation messages
    
- SEO
    
- Structured data
    

---

# 13.12 Content Language Model

Every public content entity should conceptually support:

```text
English
Arabic
```

For example:

```text
Product {
  slug
  name {
    en
    ar
  }
  description {
    en
    ar
  }
}
```

The exact CMS/content model can differ, but bilingual support must be structural.

---

# 13.13 RTL Architecture

RTL must be supported at the layout level.

The application should determine:

```text
locale
   ↓
direction
   ↓
LTR / RTL
```

The UI should not depend on manually adding RTL fixes component by component.

---

# 13.14 Design Tokens in Code

The frontend should mirror the Figma design system.

Conceptually:

```text
Figma Token
   ↓
Design Token
   ↓
CSS Variable
   ↓
Component
```

For example:

```text
Figma:
color.text.primary

Code:
--color-text-primary
```

This creates parity between design and implementation.

---

# 13.15 Tailwind Strategy

Tailwind should consume the design system rather than replace it.

Avoid arbitrary utility styling everywhere.

The implementation should establish semantic theme values for:

- Colors
    
- Typography
    
- Spacing
    
- Radius
    
- Shadows
    
- Breakpoints
    

The frontend should prefer design-system values over one-off values.

---

# 13.16 Component Architecture

Components should be organized by semantic responsibility.

```text
ui/
  Button
  Input
  Select
  Badge
  Accordion
  Table

navigation/
  Header
  MobileMenu
  Footer
  Breadcrumbs

product/
  ProductCard
  ProductGrid
  ProductSpecs
  ProductHero

trust/
  VerificationPanel
  OfficialContact
  CredentialCard

supply/
  SupplyNetwork
  SupplySourceCard
  SupplyFlow

forms/
  RequirementForm
  FormStep
  FileUpload
  FormSummary

content/
  Hero
  SectionHeader
  CTASection
```

---

# 13.17 Component Responsibility

Each component should have one clear responsibility.

A `ProductCard` should display a product.

It should not also:

- Fetch company data
    
- Submit requirements
    
- Manage analytics
    
- Perform authentication
    
- Determine business relationships
    

Separation of concerns is essential.

---

# 13.18 Business Logic Separation

Business rules should live outside presentation components where practical.

For example:

```text
validateRequirement()
getProductBySlug()
getApprovedSupplySources()
isPublicClaimApproved()
```

These should not be buried inside UI markup.

---

# 13.19 Product Data Architecture

Products should be structured data.

Conceptual type:

```text
Product {
  id
  slug
  category
  name
  shortDescription
  description
  forms
  grades
  standards
  specifications
  applications
  documents
  supplySources
  visibility
  seo
}
```

The final type will evolve based on the actual product catalog.

---

# 13.20 Product Visibility

Products should have controlled publication status.

```text
draft
review
approved
published
archived
```

Only `published` content should reach the public website.

---

# 13.21 Supply Source Architecture

Supply sources should be represented separately.

Conceptual type:

```text
SupplySource {
  id
  name
  location
  description
  relationshipType
  products
  logo
  website
  visibility
  evidence
  approvalStatus
}
```

---

# 13.22 Supply Source Publication Control

Supply sources need stronger governance than ordinary content.

Possible states:

```text
private
pending-review
approved
published
restricted
archived
```

The frontend should never accidentally render `pending-review`.

---

# 13.23 Relationship Type

The architecture must preserve exact terminology:

```text
Supply Source
Supplier
Commercial Relationship
Partner
Authorized Distributor
Exclusive Partner
Other
```

A relationship type should be a controlled value rather than free text wherever possible.

---

# 13.24 Claims Architecture

Claims should also be structured.

Conceptually:

```text
Claim {
  statement
  source
  evidence
  status
  approval
  publicVisibility
}
```

This is especially valuable for:

- Manufacturer relationships
    
- Certifications
    
- Client claims
    
- Volume claims
    
- Geographic claims
    

---

# 13.25 Requirement Data Architecture

The requirement flow should generate a structured record.

Conceptually:

```text
Requirement {
  id
  company
  country
  contact
  product
  quantity
  unit
  grade
  standard
  dimensions
  destination
  delivery
  commercialRequirements
  documents
  status
  createdAt
}
```

---

# 13.26 Requirement Status

Possible internal statuses:

```text
received
under-review
qualified
quoted
in-progress
closed
rejected
```

These are internal workflow states and should be aligned with the actual commercial process.

---

# 13.27 Requirement Security

Requirement submissions may contain commercially sensitive information.

The system should therefore treat them as sensitive business data.

Security principles:

- Encrypt data in transit.
    
- Restrict access.
    
- Validate input.
    
- Validate uploads.
    
- Avoid exposing requirement records publicly.
    
- Log relevant system events without storing unnecessary sensitive information.
    
- Apply retention policies appropriate to the business.
    

The exact security and retention policy should be established with management/legal requirements.

---

# 13.28 File Upload Security

Uploaded documents need strict validation.

The system should validate:

- File type
    
- Extension
    
- MIME type
    
- Size
    
- Filename
    
- Upload origin
    
- Storage destination
    

Do not trust client-side validation alone.

Server-side validation is required.

---

# 13.29 File Storage

Uploaded RFQs/specifications should not automatically live in the public `/public` directory.

Instead, use controlled storage.

Conceptually:

```text
Browser
  ↓
Secure Upload Endpoint
  ↓
Validation
  ↓
Private Storage
  ↓
Requirement Record
```

Public document files and private buyer documents must remain separate.

---

# 13.30 Email Architecture

Requirement submissions may trigger official email notifications.

Possible flow:

```text
Buyer
 ↓
Requirement Form
 ↓
Server Validation
 ↓
Database / Storage
 ↓
Internal Notification
 ↓
Buyer Confirmation
```

The system should send buyer confirmations only after the server successfully records the submission.

---

# 13.31 Email Authentication

For production, the email infrastructure should support appropriate authentication mechanisms such as:

- SPF
    
- DKIM
    
- DMARC
    

The exact configuration depends on the email provider and domain setup.

The objective is to improve deliverability and protect the official domain.

---

# 13.32 Official Email Identity

The website should consistently reinforce:

```text
@baghlaf.com.sa
```

The actual departmental addresses should be supplied by management.

---

# 13.33 Contact Form vs Requirement Form

These should remain separate concepts.

### Contact

Simple inquiry / general communication.

### Requirement

Structured commercial request.

```text
CONTACT
Simple

REQUIREMENT
Structured + Technical + Commercial
```

Do not force every visitor through the full RFQ flow.

---

# 13.34 Spam Protection

Public forms should include appropriate anti-abuse controls.

Potential measures:

- Rate limiting
    
- Bot detection
    
- Honeypot
    
- Challenge where appropriate
    
- Server-side validation
    
- Abuse monitoring
    

Avoid making legitimate B2B buyers solve unnecessary CAPTCHA challenges unless needed.

---

# 13.35 API Architecture

APIs should be introduced only where a real backend capability exists.

Potential endpoints:

```text
/api/requirements
/api/contact
/api/uploads
```

Avoid building a large REST API for a website that doesn't need one.

---

# 13.36 Server Actions

Where appropriate, server actions can simplify secure form processing.

However, the choice between route handlers and server actions should be based on maintainability, security, and integration requirements.

The key rule is:

> Sensitive operations stay server-side.

---

# 13.37 Environment Variables

Sensitive configuration should use environment variables.

Examples:

```text
DATABASE_URL
EMAIL_PROVIDER_API_KEY
STORAGE_ACCESS_KEY
STORAGE_SECRET_KEY
ANALYTICS_ID
```

Never commit secrets to GitHub.

---

# 13.38 Environment Separation

Maintain separate environments:

```text
Development
Staging / Preview
Production
```

Each should have appropriate:

- Environment variables
    
- Data
    
- Domain configuration
    
- Access controls
    

---

# 13.39 Git Strategy

Recommended branches:

```text
main
develop

feature/...
fix/...
chore/...
```

If the team remains one developer + AI, the exact branching complexity can be reduced, but `main` should always remain deployable.

---

# 13.40 Commit Strategy

Commits should remain small and meaningful.

Examples:

```text
feat: add product data model
feat: implement product listing
feat: build verification panel
feat: add requirement wizard

fix: correct rtl breadcrumb direction
fix: validate requirement upload

refactor: extract product specification component
```

---

# 13.41 CI/CD

The project should eventually run automated checks on pull requests.

Minimum:

```text
TypeScript
↓
Lint
↓
Unit Tests
↓
Build
```

Where feasible, add:

```text
End-to-End Tests
↓
Visual Checks
```

A pull request should not merge when required checks fail.

---

# 13.42 Testing Architecture

Testing should exist at multiple levels.

### Unit

Test isolated logic.

Examples:

- Requirement validation
    
- Formatting
    
- Product transformation
    
- Claims filtering
    

### Integration

Test:

- Forms
    
- Upload handling
    
- Server actions
    
- Data retrieval
    

### End-to-End

Test real user flows:

- Product → Requirement
    
- Verification → Contact
    
- Requirement submission
    
- Arabic navigation
    

---

# 13.43 Visual Regression Testing

Because Figma accuracy is a key project goal, visual regression testing should be considered.

Potential flow:

```text
Approved UI
    ↓
Browser Screenshot
    ↓
Baseline
    ↓
New Screenshot
    ↓
Compare
```

This is especially useful after AI-generated refactors.

---

# 13.44 Browser Testing Matrix

At minimum, test current major versions of:

- Chrome
    
- Safari
    
- Firefox
    
- Mobile Safari
    
- Mobile Chrome
    

Exact supported versions should be chosen during QA planning based on actual analytics and project policy.

---

# 13.45 Responsive Testing

Each key page should be validated at:

```text
Small Mobile
Large Mobile
Tablet
Laptop
Desktop
Large Desktop
```

Exact viewport sizes should be taken from the Figma responsive system and QA strategy.

---

# 13.46 Accessibility Testing

Automated and manual testing should cover:

- Keyboard navigation
    
- Focus states
    
- Heading hierarchy
    
- Form labels
    
- Contrast
    
- Screen-reader semantics
    
- Reduced motion
    
- Error announcements
    

Accessibility should be tested in both English and Arabic.

---

# 13.47 SEO Architecture

Every indexable page should have:

- Unique title
    
- Meta description
    
- Canonical URL
    
- Correct heading hierarchy
    
- Open Graph metadata
    
- Social preview
    
- Appropriate structured data where valid
    

---

# 13.48 Sitemap

The application should generate a sitemap based on actual indexable routes.

Dynamic product pages should be included automatically when published.

Draft/archived content should not appear.

---

# 13.49 Robots

`robots.txt` should:

- Allow legitimate public pages
    
- Prevent indexing of private/internal routes where appropriate
    
- Reference the sitemap
    

---

# 13.50 Canonical Domain

The website should use:

> `https://baghlaf.com.sa`

as the canonical public origin.

Any secondary domains should redirect to this canonical domain where appropriate.

---

# 13.51 Metadata Architecture

Metadata should be generated from page/content entities rather than manually duplicated throughout the codebase.

Conceptually:

```text
Page
 ↓
SEO Data
 ↓
Metadata Generator
 ↓
Title
Description
OG
Canonical
```

---

# 13.52 Structured Data

Relevant schema types may include:

- Organization
    
- WebSite
    
- WebPage
    
- Product where appropriate
    
- BreadcrumbList
    
- Article for genuine published insights
    
- ContactPoint where appropriate
    

Structured data must reflect actual visible information.

Do not use schema to claim information that is not presented or supported.

---

# 13.53 Product SEO

Every substantial product page should have:

```text
Unique URL
Unique title
Unique description
Unique product information
Canonical
Breadcrumbs
Internal links
```

Do not mass-generate thin pages.

---

# 13.54 International SEO

English and Arabic pages should have appropriate language relationships.

The site should use correct:

- `hreflang`
    
- Canonical behavior
    
- Language metadata
    
- RTL
    
- Localized titles/descriptions
    

The exact implementation should be validated during development.

---

# 13.55 Performance Architecture

Performance should be treated as a first-class requirement.

Priority areas:

- Minimal client-side JS
    
- Optimized images
    
- Proper image dimensions
    
- Lazy loading below the fold
    
- Font optimization
    
- Caching
    
- Compression
    
- Static rendering where possible
    

---

# 13.56 Image Architecture

Images should use an optimized image pipeline.

Every image should have:

- Appropriate format
    
- Responsive sizing
    
- Width/height information
    
- Meaningful alt text where needed
    
- Appropriate loading priority
    

Hero images should be optimized particularly carefully because they can dominate page load.

---

# 13.57 Font Architecture

Use a controlled font strategy.

Avoid loading unnecessary font families and weights.

The final system should define:

```text
English Font
Arabic Font
Approved Weights
Fallback Stack
```

Fonts should be optimized for performance and licensing compliance.

---

# 13.58 Performance Budget

The project should establish practical budgets for:

- JavaScript
    
- Image weight
    
- Font weight
    
- Number of network requests
    
- Core Web Vitals
    

Exact targets should be agreed during implementation and validated against production results.

---

# 13.59 Accessibility + Performance

Do not solve performance by:

> Removing semantic content.

Do not solve accessibility by:

> Sacrificing usable interactions.

The architecture should support both.

---

# 13.60 Caching Strategy

Public content should be cache-friendly.

Potentially cache:

- Product pages
    
- Static company pages
    
- Resources
    
- Supply network content
    

Dynamic data such as requirements should remain server-controlled.

---

# 13.61 Content Management Strategy

There are three sensible levels.

### Option A — Version-Controlled Content

Best when:

- Content changes infrequently
    
- Developer controls updates
    
- Product catalog is relatively small
    

### Option B — Headless CMS

Best when:

- Management wants to update products/content
    
- Several users need editorial access
    
- Content changes regularly
    

### Option C — Hybrid

Static company pages in code + CMS-managed products/resources.

For Baghlaf, a **hybrid architecture may eventually be the strongest approach**, but a lightweight version-controlled content model can be more efficient for the first launch if management will not regularly edit the site.

---

# 13.62 CMS Decision Rule

Do not introduce a CMS merely because:

> "Corporate websites should have a CMS."

Use one when it solves an actual content-management problem.

---

# 13.63 Recommended Initial Content Strategy

For the first version:

```text
Stable company content
→ Version-controlled / structured

Products
→ Structured content

Approved resources
→ Structured content

Requirement data
→ Database / backend
```

Then introduce a CMS if content operations justify it.

---

# 13.64 Data Persistence

Not every part of the site requires a database.

### No database needed for:

- Static page content
    
- Design tokens
    
- Build-time product data if small
    
- Navigation
    

### Database appropriate for:

- Requirements
    
- Contacts
    
- User submissions
    
- Workflow states
    
- Potential CMS
    
- Future buyer accounts
    

---

# 13.65 Database Strategy

A relational database is likely appropriate if the requirement system becomes substantial.

Potential entities:

```text
Company
Product
Category
SupplySource
Requirement
RequirementDocument
Contact
Credential
Resource
Claim
```

The exact schema should be based on real operational workflows.

---

# 13.66 Future Buyer Portal Compatibility

The current architecture should not prevent future authentication.

Future:

```text
Public Website
      ↓
Buyer Login
      ↓
Dashboard
      ↓
Requirements
Quotes
Documents
Status
```

But authentication should not be introduced into the initial website without an actual requirement.

---

# 13.67 Security Architecture

Security principles:

### Least privilege

Services receive only required permissions.

### Server-side validation

Never trust browser input.

### Secret isolation

Never expose API keys.

### Private storage

Sensitive files remain private.

### Rate limiting

Protect forms and APIs.

### Auditability

Log security-relevant actions as appropriate.

### Dependency hygiene

Keep packages updated according to a controlled maintenance policy.

---

# 13.68 Security Headers

The production site should use appropriate security headers where compatible with the application.

Potential considerations:

- Content Security Policy
    
- X-Content-Type-Options
    
- Referrer-Policy
    
- Permissions-Policy
    
- Frame protections
    
- HSTS under appropriate HTTPS configuration
    

The exact policy should be tested carefully to avoid breaking legitimate functionality.

---

# 13.69 Privacy

The website may collect:

- Name
    
- Company
    
- Email
    
- Phone
    
- Country
    
- Requirement information
    
- Documents
    

Therefore the site needs an appropriate privacy policy and data-handling approach.

The exact legal text should come from qualified legal/compliance guidance and management.

---

# 13.70 Cookie Strategy

Do not introduce unnecessary third-party trackers.

The initial site should use the minimum analytics/cookie footprint necessary for the business.

Any consent requirements should be addressed based on the actual technologies and jurisdictions involved.

---

# 13.71 Analytics Architecture

Track meaningful business events.

Examples:

```text
requirement_started
requirement_step_completed
requirement_submitted

verification_viewed
product_viewed
product_request_started

contact_email_clicked
contact_phone_clicked
contact_whatsapp_clicked
```

The event names should remain consistent.

---

# 13.72 Analytics Privacy

Analytics should avoid collecting unnecessary personally identifiable information.

The requirement form itself should not send sensitive commercial information to marketing analytics systems unless there is a clear, lawful, business-justified reason.

---

# 13.73 Monitoring

Production monitoring should cover:

- Application errors
    
- Form failures
    
- Upload failures
    
- API failures
    
- Performance
    
- Uptime
    

An error monitoring service may be introduced if useful.

---

# 13.74 Logging

Logs should help diagnose problems without unnecessarily storing sensitive buyer information.

Avoid logging:

- Full uploaded document content
    
- Passwords
    
- API keys
    
- Sensitive financial information
    

Use structured logs where practical.

---

# 13.75 Error Architecture

Errors should be categorized:

```text
User Error
   ↓
Validation Message

Network / Service Error
   ↓
Recovery Message

Application Error
   ↓
Safe Error Page + Monitoring
```

The user should not see raw stack traces.

---

# 13.76 404 / Error Pages

Maintain branded recovery pages.

Potential navigation:

```text
Home
Products
Verification
Contact
```

The error experience should preserve trust.

---

# 13.77 Deployment Architecture

A likely production pipeline:

```text
Developer
   ↓
GitHub
   ↓
Pull Request
   ↓
Automated Checks
   ↓
Preview Deployment
   ↓
Review
   ↓
Merge
   ↓
Production Deployment
```

This is particularly valuable when AI is modifying code.

---

# 13.78 Preview Environments

Every feature branch / pull request should ideally produce a preview deployment.

This allows:

```text
Figma
   ↓
Code
   ↓
Preview
   ↓
Visual QA
   ↓
Approval
```

before production deployment.

---

# 13.79 Domain Architecture

Production:

```text
baghlaf.com.sa
```

Potential:

```text
www.baghlaf.com.sa
```

One should become canonical, with the other redirecting if used.

The exact DNS configuration should be established after domain acquisition.

---

# 13.80 Email Domain Architecture

The website domain and email domain should align:

```text
Website:
baghlaf.com.sa

Email:
@baghlaf.com.sa
```

This reinforces the trust architecture.

---

# 13.81 Figma → Frontend Workflow

Once the Figma system is approved:

```text
Figma Component
      ↓
Figma MCP
      ↓
AI Agent
      ↓
Existing Codebase
      ↓
Implement
      ↓
Type Check
      ↓
Browser
      ↓
Visual Review
```

The AI should inspect existing components before creating new ones.

---

# 13.82 AI Development Principle

The AI should work **inside the architecture**, not redesign the architecture every time it implements a page.

For example:

> Implement `ProductCard` using the approved Figma component.

Not:

> Create a new card that looks similar.

---

# 13.83 AI Coding Rules

The technical project should eventually contain:

```text
AI ENGINEERING RULES

1. Read project documentation before changing architecture.

2. Reuse existing components.

3. Reuse design tokens.

4. Never invent business data.

5. Never invent APIs.

6. Never invent product information.

7. Never invent supply relationships.

8. Keep server/client boundaries intentional.

9. Validate all external input.

10. Keep sensitive operations server-side.

11. Run typecheck and lint before considering
    implementation complete.

12. Test changed user flows.

13. Preserve responsive behavior.

14. Preserve RTL behavior.

15. Do not introduce dependencies unnecessarily.

16. Prefer simple solutions over speculative abstractions.

17. Never modify approved design decisions
    without documenting the change.
```

---

# 13.84 Documentation Architecture

The codebase should include:

```text
docs/
├── architecture.md
├── routes.md
├── content-model.md
├── product-model.md
├── supply-network.md
├── forms.md
├── security.md
├── seo.md
├── localization.md
├── analytics.md
└── decisions.md
```

These documents become part of the project's persistent memory.

---

# 13.85 Architecture Decision Records

Important technical decisions should be recorded.

Example:

```text
ADR-001
Why Next.js?

ADR-002
Why structured content instead of CMS at launch?

ADR-003
Why multi-step requirement form?

ADR-004
Why baghlaf.com.sa is canonical?

ADR-005
How manufacturer relationships are represented?
```

This prevents future AI sessions from accidentally undoing previous decisions.

---

# 13.86 Change Management

When a technical decision changes:

```text
Old Decision
      ↓
Reason for Change
      ↓
New Decision
      ↓
Impact
      ↓
Documentation Update
      ↓
Code Update
```

Do not allow silent architectural drift.

---

# 13.87 Dependency Strategy

Dependencies should be selected because they solve actual requirements.

Before adding a package:

```text
Is it necessary?
      ↓
Does the platform already solve it?
      ↓
Is the package maintained?
      ↓
Does it increase complexity?
      ↓
Is there a simpler solution?
```

AI should not add dependencies casually.

---

# 13.88 Third-Party Services

Potential categories:

```text
Email
Storage
Analytics
Monitoring
CMS
Database
Anti-spam
```

Each service should be evaluated for:

- Security
    
- Cost
    
- Reliability
    
- Data location
    
- Privacy
    
- Vendor lock-in
    
- Business necessity
    

The project should avoid assembling a dozen third-party services unnecessarily.

---

# 13.89 Cost Architecture

The website should keep initial operating costs predictable.

Prioritize:

- Static rendering
    
- CDN caching
    
- Optimized assets
    
- Small backend footprint
    
- Minimal third-party SaaS
    

The initial project does not require expensive infrastructure simply because it is a B2B website.

---

# 13.90 Scalability Strategy

The architecture should scale primarily by **adding structured content and features**, not by rebuilding the core application.

Current:

```text
Public Website
```

Future:

```text
Public Website
      +
CMS
      +
RFQ System
      +
Buyer Portal
      +
Internal Workflow
      +
Analytics
```

The public website should remain the stable foundation.

---

# 13.91 Technical Debt Strategy

The project should explicitly avoid:

- Duplicate components
    
- Duplicate business logic
    
- Hardcoded content across pages
    
- Unvalidated inputs
    
- Hidden dependencies
    
- Page-specific hacks
    
- Unused libraries
    
- Dead CSS
    
- Unmaintained copy/paste sections
    

AI-generated code should receive the same standard as human-written code.

---

# 13.92 Code Quality Standard

The codebase should optimize for:

**Readability**

**Consistency**

**Type safety**

**Testability**

**Maintainability**

not cleverness.

The best solution is usually the simplest solution that satisfies the requirement.

---

# 13.93 Architecture Review Gate

Before production implementation is considered complete, review:

```text
□ Routes
□ Components
□ Data model
□ Forms
□ Validation
□ Security
□ SEO
□ Localization
□ RTL
□ Accessibility
□ Performance
□ Analytics
□ Error handling
□ Deployment
□ Documentation
```

---

# 13.94 Technical Definition of Done

A feature is complete when:

```text
□ Matches approved Figma
□ Uses design tokens
□ Uses existing components
□ Responsive behavior works
□ RTL behavior works
□ TypeScript passes
□ Lint passes
□ Tests pass
□ No console errors
□ Accessibility checked
□ SEO handled where relevant
□ Security reviewed where relevant
□ Analytics added where relevant
□ Documentation updated
□ Git commit created
```

---

# 13.95 Recommended Initial Build Order

The implementation should proceed approximately in this order:

```text
01 — Project Foundation
        ↓
02 — Design Tokens
        ↓
03 — Global Layout
        ↓
04 — Header / Footer
        ↓
05 — Core Components
        ↓
06 — Homepage
        ↓
07 — Products
        ↓
08 — Product Details
        ↓
09 — Supply Network
        ↓
10 — How We Work
        ↓
11 — Why Baghlaf
        ↓
12 — About
        ↓
13 — Verification
        ↓
14 — Resources
        ↓
15 — Contact
        ↓
16 — Requirement Flow
        ↓
17 — SEO / Analytics
        ↓
18 — QA
        ↓
19 — Production
```

The order may change when real content becomes available.

---

# 13.96 Recommended AI Implementation Loop

For each feature:

```text
READ
   ↓
UNDERSTAND
   ↓
PLAN
   ↓
IMPLEMENT
   ↓
TYPECHECK
   ↓
LINT
   ↓
TEST
   ↓
BROWSER REVIEW
   ↓
Figma Comparison
   ↓
FIX
   ↓
COMMIT
```

The AI should not skip directly from:

> "Build this"

to:

> "Done."

---

# 13.97 AI Context Loading

At the start of a meaningful implementation task, the agent should have access to:

```text
CLAUDE.md / AGENTS.md
        ↓
Relevant docs
        ↓
Relevant Figma context
        ↓
Existing components
        ↓
Task
```

Do not dump the entire repository into every prompt.

Load the context relevant to the current task.

---

# 13.98 AI Memory Hierarchy

The project memory should have priorities:

```text
1. Approved business facts
2. Project constitution
3. Approved design system
4. Architecture decisions
5. Existing code
6. Current task
7. New suggestion
```

A new AI suggestion should never silently override an approved business fact or architecture decision.

---

# 13.99 Technical Anti-Patterns

The AI and developer should reject:

```text
❌ One giant page component
❌ Duplicate page implementations
❌ Hardcoded product data everywhere
❌ Client components by default
❌ Unnecessary state management
❌ Unnecessary API layers
❌ Unnecessary database
❌ Unnecessary CMS
❌ Secrets in source code
❌ Public private files
❌ Unvalidated uploads
❌ SEO generated only at the end
❌ Arabic added after English is finished
❌ Random Tailwind values everywhere
❌ Recreating Figma components in isolation
❌ Massive refactors during unrelated tasks
```

---

# 13.100 Part 13 — Technical Architecture Summary

The recommended architecture can be summarized as:

```text
                    BAGHLAF WEBSITE
                           │
                           ▼
                      Next.js
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
           Content      Components     Actions
              │            │            │
              ▼            ▼            ▼
          Products      Design       Requirements
          Company       System       Contact
          Resources     Patterns     Uploads
              │            │            │
              └────────────┼────────────┘
                           ▼
                    Shared Domain Logic
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
          Validation      SEO        Analytics
              │
              ▼
          Data / Storage
                           │
                           ▼
                         GitHub
                           │
                           ▼
                       Preview
                           │
                           ▼
                      Production
```

---

# 13.101 Architecture Principles

The final technical system should follow these rules:

```text
1. Server-first by default.

2. TypeScript everywhere.

3. Reuse design-system primitives.

4. Separate content from presentation.

5. Separate business logic from UI.

6. Treat products and requirements as structured data.

7. Treat supply relationships as controlled data.

8. Keep sensitive information server-side.

9. Validate all external input.

10. Build English and Arabic together.

11. Build RTL into the component system.

12. Design SEO into the architecture from the beginning.

13. Keep the public site simple.

14. Avoid infrastructure that the business does not need.

15. Keep the architecture ready for future RFQ/buyer systems.

16. Make every important decision documented.

17. Make the codebase understandable to both humans
    and AI coding agents.
```

---

# 13.102 Technical North Star

The final system should feel like this:

> **A lightweight but production-grade B2B platform, not an over-engineered enterprise application.**

It should be:

```text
Fast
Secure
Structured
Bilingual
Accessible
SEO-ready
Maintainable
Scalable
AI-friendly
```

while remaining simple enough for a small development team to operate confidently.

---

# 13.103 Part 13 — Final Strategic Statement

> **The Baghlaf Steel website should be implemented as a server-first, TypeScript-based Next.js application built around a reusable design system, structured product and supply data, secure requirement processing, bilingual/RTL support, strong SEO foundations, and automated quality checks. The architecture should separate presentation, business logic, content, and sensitive transactional data, while remaining simple enough for the current corporate website and extensible toward future RFQ, buyer, and internal supply-management capabilities. Figma should remain the visual source of truth, and the AI coding agent should operate within documented architectural and business rules rather than improvising the system feature by feature.**