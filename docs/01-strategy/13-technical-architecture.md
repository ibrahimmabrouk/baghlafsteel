---
title: Baghlaf Steel — Technical Architecture
document_type: strategy
status: working
version: 1.0.0
owner: Project Leadership & Governance
last_reviewed: 2026-09-02
---

# Baghlaf Steel — Technical Architecture

> Strategic technical architecture for designing, implementing, testing, deploying, and maintaining the Baghlaf Steel website and its supporting digital systems.

---

# 1. Purpose

This document defines the technical architecture direction for the Baghlaf Steel website.

It establishes:

- The high-level application architecture
- Frontend and backend responsibilities
- Data architecture
- Content architecture
- Localization
- Requirement submission architecture
- Security principles
- SEO architecture
- Performance principles
- Testing architecture
- Deployment principles
- AI implementation boundaries

This document defines the strategic technical architecture.

It does not replace:

- Detailed implementation documentation
- Provider-specific configuration
- Production credentials
- Final infrastructure decisions
- Code-level implementation
- Approved business data

---

# 2. Architecture Goals

The system should be:

```text
Fast
+
Secure
+
Maintainable
+
Accessible
+
SEO-Friendly
+
Bilingual
+
Responsive
+
Scalable
+
Observable
+
Easy to Operate

The architecture should support the current website without introducing unnecessary complexity.

3. Architecture Philosophy

The project follows:

Simple where possible, structured where necessary.

The architecture should avoid both:

Under-engineering

Examples:

Hardcoded business data everywhere
No validation
No testing
No separation of concerns
Public storage for private information
Over-engineering

Examples:

Microservices without a business need
Complex infrastructure for simple requirements
Large dependency stacks
Premature real-time systems
Complex CMS architecture before content volume justifies it
4. High-Level Architecture

The conceptual architecture is:

                        BUYER
                          │
                          ▼
                     WEB BROWSER
                          │
                          ▼
                  NEXT.JS APPLICATION
                          │
             ┌────────────┼────────────┐
             │            │            │
             ▼            ▼            ▼
          Content       Dynamic      Analytics
                         Actions
             │            │
             │       ┌────┼─────┐
             │       ▼    ▼     ▼
             │      DB  Storage Email
             │
             └────────────┬────────────┘
                          ▼
                     Monitoring

The exact services used behind these abstractions are implementation decisions.

5. Primary Technology Direction

Current strategic direction:

Next.js
TypeScript
React
Tailwind CSS

These technologies provide the baseline for the website application.

The final package versions and supporting libraries are implementation concerns.

6. Rendering Strategy

The application should prefer:

Server-rendered content
Static generation where appropriate
Server components where appropriate
Client components only when interaction requires them

General principle:

Use client-side JavaScript for behavior, not by default for every component.

7. Server-First Architecture

The website should prefer a server-first approach for:

Public content
Product pages
Resource pages
Company information
Verification content
SEO-sensitive pages

Client-side rendering should be introduced where required for:

Interactive forms
Dynamic controls
Complex UI state
Rich user interaction
8. Frontend Responsibility

The frontend is responsible for:

Rendering the user interface
Navigation
Responsive behavior
Accessibility
Localization
Form interaction
Client-side validation where appropriate
Error states
Loading states
Visual implementation

Business-critical validation must not depend solely on the browser.

9. Backend Responsibility

Where backend capabilities are required, they are responsible for:

Secure form processing
Data validation
Data persistence
File handling
Notifications
Business workflow
Access control
Sensitive operations

The backend must remain authoritative for protected operations.

10. Application Layers

The application should conceptually separate:

Presentation
     ↓
UI Components
     ↓
Application Logic
     ↓
Domain / Business Logic
     ↓
Data Access
     ↓
External Services

The exact folder structure should follow the final implementation architecture.

11. Separation of Concerns

Avoid mixing:

Business logic
UI rendering
Content data
Validation
External service calls
Infrastructure configuration

inside the same implementation wherever practical.

A component should not become a container for unrelated responsibilities simply because it is convenient.

12. Component Architecture

The frontend should follow the design-system hierarchy:

Tokens
  ↓
Primitives
  ↓
Components
  ↓
Patterns
  ↓
Templates
  ↓
Pages

The technical implementation should align conceptually with the approved Figma system.

13. Component Reuse

Before creating a new component:

Search Existing
      ↓
Check Similar Component
      ↓
Determine Reuse / Extension
      ↓
Create New Only If Justified

The system should avoid multiple components solving essentially the same problem.

14. Design Token Architecture

Visual values should be managed through shared tokens where practical.

Potential categories:

Color
Typography
Spacing
Radius
Border
Shadow
Motion
Size

Figma and frontend should share a compatible conceptual token vocabulary.

15. Design-to-Code Relationship

The intended relationship is:

Approved Figma
      ↓
Design Tokens
      ↓
Component Architecture
      ↓
Frontend Implementation

Figma is the visual source of truth for approved interface decisions.

Technical implementation should preserve design intent without treating Figma as a mechanical code generator.

16. Route Architecture

The application should use stable, meaningful routes.

Initial conceptual structure:

/
├── /products
│   ├── /products/[category]
│   └── /products/[category]/[product]
│
├── /supply-network
├── /how-we-work
├── /why-baghlaf
├── /about
├── /resources
├── /verification
├── /contact
└── /submit-requirement

Final routing and localization strategy must be defined before implementation.

17. Route Principles

Routes should be:

Human-readable
Stable
Descriptive
Search-friendly
Consistent
Localizable where appropriate

Avoid exposing internal database IDs as primary public URLs where human-readable slugs are practical.

18. URL Stability

Once a public URL is released:

Avoid changing it without a clear reason.

When a route must change:

Old URL
   ↓
301 Redirect
   ↓
New URL

where appropriate.

19. Localization Architecture

The website supports:

English
Arabic

Localization must be considered at architecture level.

The system should support:

Language selection
Localized content
RTL/LTR
Localized metadata
Alternate language relationships
Translation status
20. Content Localization

Localized content should preserve:

Meaning
Intent
Terminology
Technical Accuracy
Commercial Accuracy

English and Arabic should not become two independently edited copies with inconsistent facts.

21. RTL Architecture

RTL support should be built into the application architecture.

The system should account for:

Direction
Logical spacing
Alignment
Navigation
Icons
Forms
Tables
Animations
Component behavior

Avoid implementing RTL through scattered manual overrides.

22. Content Architecture

Business content should be separated from presentation where appropriate.

Potential conceptual entities include:

Company
Product
Product Category
Supply Source
Resource
Credential
Contact
Requirement

Not every entity requires a database immediately.

The architecture should reflect actual data needs.

23. Structured Content Principle

Use structured data when information will need to be:

Reused
Filtered
Searched
Validated
Localized
Referenced by multiple pages

Avoid duplicating the same business fact across many files or components.

24. Business Data Source of Truth

Confirmed business data belongs in:

docs/02-business/

Examples:

company-facts.md
approved-products.md
approved-supply-sources.md
approved-contacts.md
claims-matrix.md
credentials.md
terminology.md

During implementation, these approved facts should be transformed into an appropriate structured content/data layer.

25. Business Data vs Content Presentation

Keep:

Business Fact
      ≠
Page Copy

For example:

Product Name
Product Grade
Product Standard

should ideally exist as structured product data.

The product page then presents that data.

This reduces inconsistencies.

26. Product Data Model

The conceptual product model is:

Product
├── ID / Slug
├── Name
├── Category
├── Description
├── Forms
├── Grades
├── Standards
├── Specifications
├── Applications
├── Documents
├── Supply Capability
└── Related Supply Sources

The actual schema must be based on the approved product catalog.

27. Supply Source Data Model

A supply source may conceptually include:

Supply Source
├── ID
├── Name
├── Type
├── Relationship
├── Geography
├── Products
├── Public Visibility
├── Logo Permission
├── Evidence
└── Approval Status

Only approved public fields should be exposed to visitors.

28. Relationship Modeling

The system must preserve distinctions between:

Baghlaf Steel
Manufacturer
Supply Source
Supplier
Partner
Distributor
Agent

These relationships should be represented explicitly where needed.

Never encode relationship meaning only through free-form text if the application depends on the distinction.

29. Product ↔ Supply Source

A product may be associated with:

One Supply Source

or:

Multiple Supply Sources

depending on approved business data.

This relationship should be modeled independently from the product itself.

30. Requirement Data Model

A buyer requirement may conceptually contain:

Requirement
├── Buyer / Company
├── Contact
├── Products
├── Quantity
├── Technical Requirements
├── Destination
├── Delivery Requirements
├── Commercial Requirements
├── Documents
├── Status
├── Created At
└── Reference

The exact schema must follow the actual commercial process.

31. Requirement Status

A requirement may eventually move through stages such as:

Draft
   ↓
Submitted
   ↓
Under Review
   ↓
Sourcing
   ↓
Commercial Evaluation
   ↓
In Progress
   ↓
Completed / Closed

These are conceptual states only.

The actual workflow must be confirmed by management.

32. Requirement Submission

The public requirement flow should be:

Buyer
  ↓
Form
  ↓
Client Validation
  ↓
Secure Server Validation
  ↓
Persistence
  ↓
Reference Generation
  ↓
Notification
  ↓
Confirmation

The server must remain authoritative.

33. Validation Architecture

Validate data at multiple layers where appropriate:

UI Validation
      ↓
Server Validation
      ↓
Domain Validation
      ↓
Persistence

Client-side validation improves UX.

Server-side validation provides security and integrity.

34. Schema Validation

Structured inputs should use explicit schemas where appropriate.

Potential schema areas:

Requirement
Product
Contact
Uploaded files
API payloads

The schema layer should become a shared contract between relevant application layers.

35. File Upload Architecture

If buyers can upload documents:

Browser
  ↓
File Validation
  ↓
Secure Upload
  ↓
Private Storage
  ↓
Requirement Reference

Uploaded files should be treated as untrusted input.

36. File Security

File handling should consider:

File type
Size
Filename
Content handling
Storage permissions
Access control
Malware/security scanning where appropriate
Retention
Deletion

Exact implementation depends on infrastructure.

37. Private Data Boundary

Buyer requirements and uploaded documents should not be publicly accessible by default.

Avoid:

/public/uploads

for confidential buyer documents.

Prefer private storage with controlled access.

38. Data Minimization

Collect only information necessary for:

Requirement qualification
Communication
Operational processing
Security
Applicable legal/compliance requirements

Do not collect information simply because it may be useful later.

39. Sensitive Data

Potentially sensitive information may include:

Contact details
Commercial requirements
Documents
Financial information
Contract-related information

The exact classification should be defined with management and the applicable legal requirements.

40. Authentication

Public informational pages should not require authentication.

Authentication should only be introduced where a real business function requires protected access.

Potential future examples:

Buyer Portal
Requirement Tracking
Private Documents
Account Management

These are not required for the initial public website unless explicitly included in scope.

41. Authorization

Authentication and authorization are separate concerns.

Where private functions exist, access should be based on explicit permissions.

Never assume:

Logged in = authorized to access everything.

42. API Architecture

If APIs are required, they should:

Validate input
Authenticate where necessary
Authorize protected actions
Return predictable responses
Avoid exposing sensitive data
Handle errors consistently
Be documented

Do not create an API layer simply because modern projects often have APIs.

43. External Integrations

Potential integrations may include:

Email
Storage
Analytics
Monitoring
CRM
Maps
Captcha

Each integration should have:

A clear business purpose
Defined data flow
Security consideration
Failure handling
Ownership

Do not add integrations without justification.

44. Email Architecture

Website-generated emails may include:

Requirement confirmation
Internal notifications
Contact notifications
Other approved transactional messages

The email system should use the company's official domain where applicable.

45. Email Reliability

Transactional email should account for:

Delivery failures
Invalid addresses
Retries where appropriate
Spam reputation
Sender authentication
Monitoring

Email failure should not silently cause a successful requirement submission to appear unsuccessful.

46. Requirement Submission and Email

The core transaction should be:

Requirement Saved
      ↓
Reference Generated
      ↓
Email Notification

not:

Email Sent
      ↓
Assume Requirement Saved

The database/business operation should be authoritative.

47. Error Handling

Errors should be designed by category.

User Error

Example:

Invalid product information.

System Error

Example:

Database failure.

Integration Error

Example:

Email provider unavailable.

The user should receive a useful message without exposing internal technical details.

48. Observability

The system should provide visibility into:

Errors
Failed requests
Requirement submission failures
Upload failures
Email failures
Performance issues
Availability

Sensitive information should not be unnecessarily included in logs.

49. Logging Principles

Logs should be:

Structured
Useful for diagnosis
Appropriate in detail
Free of secrets
Free of unnecessary personal or commercial data

Never log:

Passwords
API keys
Tokens
Full confidential buyer requirements
Private documents

unless there is a formally justified secure mechanism.

50. Security Architecture

Security should be layered.

Potential controls include:

HTTPS
+
Input Validation
+
Authentication
+
Authorization
+
Secure Storage
+
Security Headers
+
Dependency Management
+
Rate Limiting
+
Monitoring

Not every control is needed at every layer, but protected operations should have appropriate defense.

51. Input Security

Treat all external input as untrusted:

Form Inputs
Uploads
URLs
Query Parameters
External API Data
CMS Content

Validate and sanitize according to the context.

52. Rate Limiting

Public endpoints that may be abused should have appropriate rate controls.

Especially consider:

Requirement submission
Contact forms
Authentication endpoints if added
File uploads

Exact thresholds belong to implementation/operations.

53. CSRF / Request Security

State-changing operations must use appropriate request protections according to the chosen framework and architecture.

Do not assume browser-based security alone is sufficient for sensitive operations.

54. Secrets Management

Secrets must remain outside version-controlled source code.

Examples:

Database credentials
Email API keys
Storage secrets
Monitoring tokens
Authentication secrets

Use secure environment/secret management.

55. Environment Architecture

The project should maintain:

Development
      ↓
Preview / Staging
      ↓
Production

Each environment should have appropriate configuration and secrets.

56. Development Environment

Used for:

Local development
AI implementation
Debugging
Unit tests
Component development

It should not depend on production data.

57. Preview / Staging

Used for:

Client review
Integration testing
Visual QA
Release validation

Preview environments should reproduce production behavior as closely as practical without exposing production-sensitive data.

58. Production

Production serves:

Real buyers
Real requirements
Real public content

Production access should remain controlled.

59. Deployment Architecture

The preferred deployment model is:

Git
 ↓
CI Checks
 ↓
Preview
 ↓
Review
 ↓
Approval
 ↓
Production

The exact hosting platform remains an implementation decision.

60. CI/CD

The automated pipeline should consider:

Install
 ↓
Typecheck
 ↓
Lint
 ↓
Tests
 ↓
Build
 ↓
Security Checks
 ↓
Deploy Preview

Production deployment should occur only after required approval gates are satisfied.

61. Database Strategy

A database should be introduced when persistent dynamic business data requires one.

Likely candidates include:

Buyer requirements
Contacts
Structured product data
Supply-source data
Requirement status

Static/public content may not require a database.

62. Database Principles

If a database is used:

Separate environments
Validate input
Restrict permissions
Back up data
Monitor failures
Avoid destructive migrations without recovery planning
63. Data Access Layer

Application code should access persistent data through a controlled data-access layer where useful.

Avoid scattering raw database queries throughout UI components.

64. Database Migration Strategy

Schema changes should be:

Designed
 ↓
Reviewed
 ↓
Tested
 ↓
Backed Up where required
 ↓
Applied
 ↓
Verified

Destructive migrations require special caution.

65. Caching Strategy

Caching may be used for:

Static content
Product pages
Resource pages
Other low-volatility public data

Do not aggressively cache rapidly changing or private information without a clear invalidation strategy.

66. Cache Invalidation

When public content changes, the system should have a defined mechanism for updating cached content.

The implementation depends on the hosting/runtime architecture.

67. SEO Architecture

SEO should be built into the architecture.

Each indexable page should support:

Unique title
Appropriate description
Canonical URL
Open Graph metadata
Structured data where relevant
Correct heading hierarchy
Internal linking
Sitemap inclusion where appropriate
68. Structured Data

Where appropriate, structured data may support:

Organization
Product
Breadcrumb
Article / Resource

Only verified information should be included.

69. Sitemap

The application should generate and maintain an appropriate XML sitemap.

It should contain:

Public indexable pages
Approved product pages
Approved resources

It should exclude:

Private requirement data
Internal/admin pages
Non-indexable utility pages where appropriate
70. Robots

The website should provide appropriate crawler directives.

Private or internal routes must not rely solely on robots.txt for access control.

71. Canonical URLs

Every relevant indexable page should have a canonical URL strategy.

Avoid:

Duplicate URL variants
Uncontrolled query parameters
Language duplicates
Inconsistent trailing-slash behavior
72. Localization SEO

English and Arabic pages should have appropriate relationships.

The architecture should support:

Language-specific metadata
Correct alternates
Localized URLs where chosen
Equivalent content mapping
73. Performance Architecture

Performance should be treated as a system property.

Prioritize:

Server Response
+
HTML Delivery
+
Image Optimization
+
Font Loading
+
JavaScript Budget
+
Caching
74. Image Architecture

Images should be:

Appropriately sized
Responsive
Compressed
Properly formatted
Lazy-loaded where appropriate

Critical visual assets should receive appropriate priority.

75. Font Architecture

Fonts should be:

Limited
Optimized
Preloaded only where justified
Compatible with English and Arabic
Evaluated for rendering performance

Do not load unnecessary font families.

76. JavaScript Budget

Client-side JavaScript should remain intentionally limited.

Prefer:

Server-rendered content
+
Progressive enhancement

over shipping large client bundles for simple interactions.

77. Accessibility Architecture

Accessibility should be built into components and page templates.

Requirements include:

Semantic HTML
Keyboard access
Focus management
Labels
Error relationships
Contrast
Reduced motion
Screen-reader compatibility
78. Testing Architecture

Testing should exist at multiple levels:

Unit
+
Component
+
Integration
+
End-to-End
+
Visual
+
Accessibility

Not every feature requires the same depth of testing, but critical flows require stronger coverage.

79. Critical Flow Testing

The following flow should receive elevated test priority:

Product
 ↓
Request Product
 ↓
Requirement
 ↓
Submission
 ↓
Confirmation

The Verification flow should also receive elevated priority:

Verification
 ↓
Official Information
 ↓
Contact
80. Type Safety

TypeScript should be used to reduce runtime errors.

Avoid:

Unnecessary any
Duplicated type definitions
Unsafe casting
Implicit assumptions

Types should reflect the actual domain model where appropriate.

81. Validation Contracts

Where data crosses system boundaries, define explicit contracts.

Examples:

Frontend → Server
Server → Database
Server → Email
Application → External API

These contracts should be validated rather than assumed.

82. Error Boundary Strategy

User-facing areas should have appropriate error boundaries or equivalent recovery mechanisms.

An isolated failure should not unnecessarily break the entire website.

83. Environment Configuration

Configuration should distinguish:

Public Configuration
Private Configuration

Only intentionally public values may be exposed to browser-side code.

84. Security & Production Alignment

Production architecture should align with:

docs/01-strategy/17-deployment-security-and-production.md

Do not create separate security assumptions in code that conflict with production policy.

85. Content Management Strategy

A CMS may be introduced if management needs to update content without developer involvement.

The decision should depend on:

Content frequency
Number of editors
Approval workflow
Content complexity
Cost
Security
Operational ownership

A CMS is not automatically required for Version 1.

86. Static vs Dynamic Content

Potential static/low-volatility content:

About
Why Baghlaf
How We Work
Verification Information

Potential dynamic content:

Products
Resources
Requirements
Contacts
Supply Sources

The actual implementation should follow real update requirements.

87. Content Publication Workflow

Where a CMS or dynamic content system exists:

Draft
 ↓
Review
 ↓
Approval
 ↓
Publish
 ↓
QA

Business-critical content should not bypass approval.

88. Business Data Synchronization

Important business facts should have one authoritative structured source wherever practical.

Examples:

Company Information
Contacts
Products
Supply Sources
Credentials

Avoid manually duplicating the same values across many pages.

89. Analytics Architecture

Analytics should track business-relevant behavior.

Potential events:

product_viewed
verification_viewed
requirement_started
requirement_step_completed
requirement_submitted
contact_email_clicked
contact_phone_clicked
contact_whatsapp_clicked

Do not send confidential buyer requirement contents to analytics.

90. Analytics Privacy

Analytics should avoid capturing:

Full requirement text
Uploaded document contents
Sensitive commercial information
Secrets
Unnecessary personal information

Only collect what is necessary for understanding website performance and business outcomes.

91. Observability Architecture

The production system should provide visibility into:

Availability
Errors
Performance
Forms
Uploads
Email Delivery
Critical Integrations

Monitoring should focus on meaningful business failure.

92. Backup Strategy

Where persistent data exists:

Primary Data
    ↓
Automated Backup
    ↓
Independent Recovery Path

Backups should be periodically tested through restoration where appropriate.

93. Disaster Recovery

The system should eventually document recovery procedures for:

Website failure
Database failure
Storage failure
Email failure
Domain failure
Credential compromise
Deployment regression

See Part 17 for the production framework.

94. Deployment Rollback

Production should support:

Current Release
      ↓
Problem
      ↓
Rollback
      ↓
Known Good Release

Deployment strategy should make rollback practical.

95. Infrastructure Ownership

Production infrastructure should be company-controlled wherever practical:

Domain
Hosting
GitHub
Email
Analytics
Storage
Database
Figma

The freelancer/developer receives appropriate access.

96. AI Access to Production

AI agents should not receive unrestricted production access.

Preferred model:

AI
 ↓
Development
 ↓
Preview
 ↓
Human Approval
 ↓
Production

High-risk production operations require explicit authorization.

97. AI Technical Rules

AI agents must:

Inspect existing architecture before changing it.
Reuse existing abstractions where appropriate.
Preserve server/client boundaries.
Avoid unnecessary dependencies.
Avoid unrelated refactors.
Validate data at appropriate boundaries.
Protect sensitive data.
Avoid production access unless explicitly authorized.
Run relevant checks before declaring completion.
Document meaningful architecture changes.
98. Architecture Decision Records

Important technical decisions should be documented in:

docs/09-decisions/

Examples:

Hosting
Database
CMS
Email
Storage
Analytics
Monitoring
Authentication
Major Architecture Change

Do not document every small implementation choice as a formal project decision.

99. Architecture Change Process

When a major technical change is proposed:

Problem
 ↓
Options
 ↓
Trade-offs
 ↓
Decision
 ↓
Decision Record
 ↓
Implementation
 ↓
QA

This prevents architecture from evolving accidentally through isolated AI changes.

100. Dependency Management

Every dependency should have a reason.

Before adding a package:

Is it necessary?
       ↓
Does the framework already provide it?
       ↓
Can an existing dependency solve it?
       ↓
What is its maintenance/security cost?

Prefer fewer well-maintained dependencies.

101. Code Quality

The codebase should prioritize:

Readability
Strong typing
Reusability
Testability
Clear naming
Small abstractions
Low accidental complexity

Avoid clever code that is difficult to maintain.

102. Naming

Technical naming should be:

Predictable
Semantic
Consistent
Domain-aware

Names should describe purpose rather than appearance.

Avoid:

BlueCard
BigSection
NewThing
TempComponent
FinalComponent
103. Data Naming

Business entities should use terminology from:

docs/00-project/project-glossary.md

Do not introduce different technical names for the same business concept without a clear mapping.

104. Testing Before Refactoring

Before major refactoring:

Current Behavior
 ↓
Tests
 ↓
Refactor
 ↓
Tests
 ↓
Visual Review

Do not refactor critical areas without a way to detect regression.

105. Technical Debt

Technical debt should be tracked rather than hidden.

Potential categories:

Performance
Security
Architecture
UX
Testing
Dependencies
Content

Small amounts of intentional technical debt may be acceptable when documented.

106. Technical Debt Rule

Do not expand a scoped feature task into a broad cleanup project unless:

The cleanup is necessary for the task, or
It is separately approved.
107. Architecture Failure Modes
Failure 1 — Overengineering

Complex systems before business need exists.

Mitigation

Start with the smallest architecture that safely supports current requirements.

Failure 2 — Hardcoded Business Data

Company facts duplicated in components.

Mitigation

Structured content/data source of truth.

Failure 3 — Client-Side Overuse

Every page becomes a client component.

Mitigation

Server-first approach.

Failure 4 — Inconsistent Domain Model

Product/source/relationship terminology becomes mixed.

Mitigation

Glossary + data model + approved business data.

Failure 5 — AI-Driven Architecture Drift

Each AI session introduces a new pattern.

Mitigation

Constitution + decisions + architecture docs + reuse rules.

Failure 6 — Production Data Exposure

Private buyer information enters public paths.

Mitigation

Private storage, validation, access control, security review.

Failure 7 — Provider Lock-In Without Reason

Infrastructure becomes dependent on one vendor unnecessarily.

Mitigation

Use abstractions where they provide meaningful portability and avoid unnecessary coupling.

108. Management Validation Required

The following technical inputs may require management/business confirmation:

Required commercial workflow
Requirement fields
Required documents
Public product data
Public supply-source data
Public credentials
Content update responsibility
CMS editing requirements
Data retention expectations
Privacy requirements
Authorized administrative users

Management determines the business need.

The technical owner translates those requirements into architecture.

109. Technical Decisions Still Open

The following should remain open until properly evaluated:

Hosting Provider
Database Provider
CMS
Storage Provider
Email Provider
Analytics Platform
Monitoring Platform
Authentication Provider
Captcha / Anti-Abuse Solution
Search Solution

Do not commit to a provider merely because it is common in tutorials or AI-generated examples.

110. Recommended Technical Evaluation Criteria

When selecting a service, consider:

Business Fit
Security
Performance
Reliability
Cost
Maintainability
Developer Experience
Data Ownership
Portability
Integration

No single criterion should automatically determine the choice.

111. Technical Architecture Success Criteria

The architecture is successful when:

✓ The public website is fast.

✓ The application is maintainable.

✓ Business data has clear ownership.

✓ Sensitive buyer data is protected.

✓ Products and supply sources remain distinct.

✓ English and Arabic are supported from the beginning.

✓ RTL does not depend on fragile patches.

✓ Critical forms are validated securely.

✓ SEO is built into the architecture.

✓ Components are reusable.

✓ Testing is practical.

✓ Production can be monitored and recovered.

✓ AI agents can work without continuously inventing new architecture.
112. Relationship to Other Strategy Documents

This document connects:

01 — Company Identity
        ↓
02 — Business Model
        ↓
03 — Target Buyers
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
        ↓
13 — Technical Architecture
        ↓
14 — AI Agent Architecture
        ↓
15 — Development Workflow
        ↓
16 — QA
        ↓
17 — Deployment
113. Source of Truth

Strategic technical architecture:

docs/01-strategy/13-technical-architecture.md

Detailed architecture:

docs/05-architecture/

Business data:

docs/02-business/

Design system:

docs/01-strategy/11-figma-design-system.md

UX:

docs/01-strategy/12-ux-wireframes-and-page-experience.md

Project decisions:

docs/09-decisions/

Production:

docs/01-strategy/17-deployment-security-and-production.md

Project governance:

PROJECT_CONSTITUTION.md

114. Final Technical Architecture Model

The intended architecture is:

                         USER
                           │
                           ▼
                    WEB / MOBILE
                           │
                           ▼
                  NEXT.JS APPLICATION
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
      UI / Pages       Application       Localization
                         Logic
          │                │
          │         ┌──────┼───────┐
          │         ▼      ▼       ▼
          │       Data   Storage  Email
          │         │      │       │
          └─────────┴──────┴───────┘
                           │
                           ▼
                    External Services
                           │
                           ▼
                     Monitoring

The public website should remain as simple as possible while protected business workflows receive the appropriate backend, data, and security architecture.

115. Final Strategic Principle

The Baghlaf Steel technical architecture should be intentionally simple, secure, maintainable, and scalable enough for the current business without prematurely building systems the company does not yet need. A server-first Next.js and TypeScript foundation should support a fast public website, structured business data, secure buyer requirements, bilingual English/Arabic experiences, native RTL behavior, strong SEO, accessibility, testing, monitoring, and controlled production deployment. Products, supply sources, requirements, and business relationships must remain distinct technical concepts. AI agents should work within explicit architectural boundaries, reuse established patterns, avoid unnecessary complexity, and require human authority for high-risk production decisions.


### A very important point about Part 13

I intentionally kept these decisions **open**:

```text
Hosting
Database
CMS
Storage
Email
Analytics
Monitoring
Authentication

That is not incompleteness. It is good architecture.

We have a strategy for the system, but we don't yet have enough information to responsibly say:

"Use Supabase."

or:

"Use Vercel."

or:

"Use Sanity."

Those should become actual decisions only after we evaluate the requirements.

The architecture is now giving us a clean technical pipeline:

Business Truth
      ↓
Strategy
      ↓
UX
      ↓
Technical Architecture
      ↓
Implementation

And for the eventual AI workflow:

PROJECT_CONSTITUTION
        ↓
AGENTS.md
        ↓
Technical Architecture
        ↓
Relevant Skill
        ↓
Task
        ↓
Implementation
        ↓
Automated Checks
        ↓
Browser / Visual QA