# Content Status

## Purpose

This document is the central status dashboard for Baghlaf Steel website content.

It tracks the lifecycle of content from initial definition through verification, approval, implementation, publication, review, and retirement.

This document does **not** replace:

- approved business facts;
- the claims matrix;
- terminology;
- English content;
- Arabic content;
- SEO content;
- Figma;
- implementation.

It records the **state of those content assets**.

---

# 1. Content Lifecycle

The standard content lifecycle is:

```text
Planned
   ↓
Draft
   ↓
Under Review
   ↓
Business Verification
   ↓
Approved
   ↓
Implemented
   ↓
Published
   ↓
Needs Update
   ↓
Deprecated / Archived

Not every content item must pass every stage in exactly the same way.

The lifecycle should reflect the risk and type of content.

2. Content Status Definitions
Status	Meaning
Planned	Content is required but has not yet been created.
Draft	Content exists but is not approved.
Under Review	Content is actively being reviewed.
Pending Business Verification	Factual content requires business verification.
Pending Business Approval	Content is verified but still requires approval for use.
Approved	Content is approved for implementation/public use.
Implemented	Approved content has been added to the website/application.
Published	Content is live in production.
Needs Update	Existing content no longer fully reflects the approved source.
Deprecated	Content should no longer be used.
Archived	Historical content retained for reference.
Blocked	Progress cannot safely continue because required information/approval is missing.
3. Content Inventory

The primary content register should track major website content assets.

Content ID	Page / Area	Content Type	Language	Status	Source	Owner	Last Updated	Notes
CNT-001	Homepage	Hero	EN	Planned	messaging.md	TBD	TBD	
CNT-002	Homepage	Hero	AR	Planned	arabic-content.md	TBD	TBD	
CNT-003	Verification	Introduction	EN	Planned	claims-matrix.md	TBD	TBD	
CNT-004	Verification	Introduction	AR	Planned	arabic-content.md	TBD	TBD	

Use stable content IDs where practical.

4. Content Types

Possible content types include:

Company Description
Hero
Headline
Subheadline
Section Introduction
Body Copy
CTA
Product Description
Technical Description
Trust Statement
Verification Content
Supply-Source Description
About Content
Contact Content
Form Label
Form Help Text
Error Message
Success Message
FAQ
Resource Description
SEO Title
Meta Description
Open Graph Text
Structured Data
Legal / Policy Content
Email Content

The exact taxonomy may evolve as the site is built.

5. Page-Level Content Status

The following pages should eventually have defined content status.

Page	English	Arabic	Business Approval	Design Ready	Implementation	QA	Notes
Homepage	Planned	Planned	Pending	Pending	Not Started	Not Started	
Products	Planned	Planned	Pending	Pending	Not Started	Not Started	
Product Detail	Planned	Planned	Pending	Pending	Not Started	Not Started	
Supply Network	Planned	Planned	Pending	Pending	Not Started	Not Started	
How We Work	Planned	Planned	Pending	Pending	Not Started	Not Started	
Why Baghlaf	Planned	Planned	Pending	Pending	Not Started	Not Started	
About	Planned	Planned	Pending	Pending	Not Started	Not Started	
Verification	Planned	Planned	Pending	Pending	Not Started	Not Started	
Contact	Planned	Planned	Pending	Pending	Not Started	Not Started	
Resources	Planned	Planned	Pending	Pending	Not Started	Not Started	
Submit Requirement	Planned	Planned	Pending	Pending	Not Started	Not Started	

This table is a project dashboard and should evolve as work progresses.

6. Content Ownership

Each important content item should have an owner.

Possible ownership types:

Business Owner
Content Owner
Designer
Developer
SEO Owner
Technical Owner
Client / Management

Ownership means responsibility for the relevant stage, not necessarily exclusive editing rights.

7. Business Verification Status

Factual business content should have a separate verification state.

Content ID	Fact-Based?	Business Source	Verified	Approved	Notes
CNT-001	Yes	company-facts.md	No	No	
CNT-002	Yes	approved-products.md	No	No	

This is important because:

Content Draft
≠
Verified Business Information

A beautifully written sentence can still be factually unverified.

8. Public Claim Status

Where a content item contains a factual/public claim, cross-reference the claims matrix.

Content ID	Claim ID	Claim	Status	Conditions
CNT-001	CLM-001	TBD	Pending Approval	TBD

A content item containing a pending or prohibited claim must not be published.

9. Terminology Validation

Important content should be checked against:

docs/02-business/terminology.md
Content ID	Terminology Checked	Reviewer	Status
CNT-001	No	TBD	Pending

This is particularly important for:

Manufacturer
Supply Source
Supplier
Partner
Distributor
Agent
Buyer
Customer
Requirement
Order
Availability
Verification
Certification
10. English Content Status

The English content source is:

english-content.md

Track English content separately because it may progress independently from Arabic.

Area	Draft	Review	Approved	Published	Notes
Homepage	No	No	No	No	
Products	No	No	No	No	
Verification	No	No	No	No	
Requirement	No	No	No	No	
11. Arabic Content Status

The Arabic content source is:

arabic-content.md

Arabic has its own review process.

Area	Draft	Review	Approved	Published	Notes
Homepage	No	No	No	No	
Products	No	No	No	No	
Verification	No	No	No	No	
Requirement	No	No	No	No	

Arabic content should not automatically be considered complete when English content is approved.

12. English–Arabic Alignment

For important content, track semantic alignment.

Content ID	English Status	Arabic Status	Meaning Aligned	Reviewer	Notes
CNT-001	Approved	Draft	No	TBD	

Alignment means the two versions communicate the same approved business meaning.

It does not mean they must use the same sentence structure.

13. Translation vs Localization

Content status should distinguish between:

Translated
Localized
Reviewed
Approved

A literal translation is not automatically acceptable Arabic localization.

The Arabic version should be reviewed for:

naturalness;
terminology;
business meaning;
technical accuracy;
RTL behavior.
14. SEO Content Status

SEO content should be tracked separately from normal page copy.

The source is:

seo-content.md
Page	EN SEO	AR SEO	Business Check	Approved	Published
Homepage	Planned	Planned	Pending	No	No
Products	Planned	Planned	Pending	No	No
Product Detail	Planned	Planned	Pending	No	No
Verification	Planned	Planned	Pending	No	No

SEO content must not introduce unsupported claims.

15. Metadata Status

Track important metadata separately when required.

Page	Title	Meta Description	Canonical	OG	Structured Data	Status
Homepage	Pending	Pending	Pending	Pending	Pending	Planned
Products	Pending	Pending	Pending	Pending	Pending	Planned

Metadata is public content and follows the same business-accuracy rules.

16. Product Content Status

Each approved product should eventually have a content status.

Product ID	Product Name	EN	AR	Technical Data	SEO	Approval	Published
TBD	TBD	Planned	Planned	Pending	Pending	Pending	No

Product content must reference:

docs/02-business/approved-products.md

The content workflow must not create product facts that are absent from the approved product record.

17. Supply-Source Content Status

For every publicly presented supply source:

Source ID	Source	Relationship Verified	Public Disclosure	EN Content	AR Content	Approved	Published
TBD	TBD	Pending	Pending	Planned	Planned	No	No

Publication requires both:

Relationship Approval
+
Public Disclosure Approval
18. Credential Content Status

Credentials should have their own content status.

Credential ID	Credential	Verified	Public Disclosure	EN	AR	Approved	Published
CRD-001	TBD	Pending	Pending	Planned	Planned	No	No

A credential being verified does not automatically make it publishable.

19. Trust / Verification Content

Verification content receives elevated priority.

Track:

Official Identity
Official Domain
Official Email
Official Phone
Official WhatsApp
Official Social Channels
Authorized Representatives
Verification Instructions

Each item should be connected to:

approved-contacts.md
company-facts.md
claims-matrix.md

The verification experience must not contain stale contact information.

20. Requirement Form Content

Requirement-form content includes:

Field Labels
Descriptions
Help Text
Validation
Errors
Success Messages
Confirmation
Email Messages

Track separately:

Area	EN	AR	Business Approved	UX Approved	Implemented	QA
Field Labels	Planned	Planned	Pending	Pending	No	No
Errors	Planned	Planned	Pending	Pending	No	No
Confirmation	Planned	Planned	Pending	Pending	No	No
21. Content Dependencies

Some content cannot be completed until its source is approved.

Examples:

Product Page
    ↓
approved-products.md

Supply Network Page
    ↓
approved-supply-sources.md

Trust / Verification
    ↓
approved-contacts.md
company-facts.md

Credential Section
    ↓
credentials.md

Public Claims
    ↓
claims-matrix.md

Terminology
    ↓
terminology.md

Blocked content should identify its dependency rather than being filled with assumptions.

22. Content Blockers

Record major blockers explicitly.

Blocker	Affected Content	Owner	Status	Required Action
Product catalog not approved	Products	Management	Open	Confirm product list
Supply-source relationships unclear	Supply Network	Management	Open	Confirm relationships
Official contacts pending	Verification / Contact	Management	Open	Approve official channels
Arabic terminology pending	All Arabic content	Management / Content	Open	Approve terminology

The list should evolve as project information becomes available.

23. Placeholder Policy

Placeholders are permitted during development but must be clearly identifiable.

Examples:

TBD
Pending Approval
Pending Verification
Placeholder
Draft

Do not use realistic-looking invented content as a placeholder.

For example, do not create:

+966 5X XXX XXXX
sales@baghlafsteel.example
50,000 MT
ISO Certified

and allow it to look like real approved information.

24. Dummy Content Policy

Synthetic content may be used for layout/testing purposes.

It must be clearly identified as:

Demo
Example
Test Data
Synthetic Data

It must never accidentally enter production.

Particular caution is required for:

company names;
customer names;
quantities;
certifications;
testimonials;
phone numbers;
addresses;
supply sources.
25. Content QA Status

Track the validation state separately from approval.

Content ID	Content Approved	Functional QA	Visual QA	Arabic QA	SEO QA	Final QA
CNT-001	No	Not Started	Not Started	Not Started	Not Started	Not Started

Approval and QA are different stages.

Approved Content
≠
Validated Implementation
26. Content Publication Gate

Content should reach production only when applicable requirements are satisfied:

Business Truth Confirmed
        ↓
Claim Approved
        ↓
Terminology Validated
        ↓
English Approved
        ↓
Arabic Approved
        ↓
Design Approved
        ↓
Implementation Complete
        ↓
QA Complete
        ↓
Production

Not every content item requires every step, but high-risk business content should follow the complete process.

27. Publication Checklist

Before publishing a significant content item:

[ ] Source identified
[ ] Business facts verified
[ ] Claims checked
[ ] Terminology checked
[ ] English approved
[ ] Arabic reviewed where applicable
[ ] SEO checked where applicable
[ ] Metadata checked where applicable
[ ] Design reviewed
[ ] Links verified
[ ] Visual QA completed
[ ] Content QA completed
[ ] Production status confirmed
28. Content Review Cycle

Published content should not be considered permanently correct.

Review when:

business facts change;
products change;
supply relationships change;
credentials expire;
contact information changes;
terminology changes;
website strategy changes;
legal requirements change;
user feedback reveals confusion.
29. Stale Content

Potential stale content should be flagged.

Examples:

Old Product Specification
Old Contact
Expired Credential
Inactive Supply Source
Old Company Description
Old SEO Metadata
Old Arabic Translation

A stale item should move to:

Needs Update

rather than remaining silently published.

30. Content Deprecation

When content is no longer valid:

Published
→ Needs Update
→ Deprecated
→ Archived

The decision should consider:

SEO;
existing links;
historical value;
legal requirements;
user expectations.

Do not delete important project history merely because it is no longer public.

31. AI Content Rules

AI agents may assist with:

drafting;
rewriting;
localization;
SEO suggestions;
consistency checks;
content audits.

However, AI-generated content remains Draft until it passes the appropriate verification and approval process.

AI must never:

convert assumptions into approved facts;
invent testimonials;
invent statistics;
invent product data;
invent credentials;
invent contacts;
invent supplier relationships;
strengthen claims;
mark its own content as approved.
32. Content Drift Prevention

Content drift occurs when different parts of the site gradually start saying different things.

The project should regularly compare:

Business Source of Truth
        ↓
Claims Matrix
        ↓
English Content
        ↓
Arabic Content
        ↓
SEO
        ↓
Website

Differences should be intentional and explainable.

33. Content Consistency Checks

Important repeated information should be checked for consistency:

Company Name
Business Classification
Company Description
Product Names
Supply-Source Terms
Official Contacts
Verification Instructions
Credentials
Primary CTAs

The same approved fact should not have several conflicting versions across the website.

34. Content Ownership Model

Suggested responsibility model:

Area	Primary Owner	Approval
Company Facts	Management	Management
Products	Management / Commercial	Management
Supply Sources	Management / Commercial	Management
Credentials	Management	Management
Claims	Business + Content	Management
English Copy	Content	Business where factual
Arabic Copy	Arabic Content / Reviewer	Business where factual
SEO	SEO / Content	Business where claims are involved
UI Text	Product / Content	Relevant owner
Error Messages	Product / Engineering	Technical / UX

The actual owners should be replaced with named people or roles once established.

35. Change Impact

A content change may affect more than one system.

For example:

Change Official Company Name
        ↓
Company Facts
        ↓
Claims
        ↓
English Content
        ↓
Arabic Content
        ↓
SEO
        ↓
Metadata
        ↓
Structured Data
        ↓
Design
        ↓
Website

The agent should consider downstream impact before completing the change.

36. Content Release Notes

For meaningful public content changes, record:

What changed?
Why?
Source?
Approved by whom?
Affected pages?
Languages?
Release date?

This is particularly useful for:

company identity;
products;
supply-source relationships;
credentials;
official contacts.
37. Content Audit

A content audit should periodically check:

[ ] Every important page has approved content
[ ] No placeholder content is public
[ ] No unsupported claims are public
[ ] Product information matches approved products
[ ] Supply-source information matches approved relationships
[ ] Credentials are current
[ ] Contacts are current
[ ] English and Arabic remain aligned
[ ] Terminology is consistent
[ ] SEO content remains accurate
[ ] Metadata remains accurate
[ ] Links remain valid
38. Current Content Status

At the current project stage:

Overall Content Status: In Progress

Business Facts:
Pending Management Confirmation

Approved Products:
Pending Management Confirmation

Approved Supply Sources:
Pending Management Confirmation

Credentials:
Pending Management Confirmation

Official Contacts:
Pending Management Confirmation

Claims:
Pending Management Confirmation

Terminology:
Pending Management Confirmation

English Content:
Not Finalized

Arabic Content:
Not Finalized

SEO Content:
Not Finalized

Production Content:
Not Started

This status is expected at this stage of the project.

The project should not compensate for missing business information by inventing content.

39. Recommended Current Priority

The preferred content sequence is:

1. Business Source of Truth
        ↓
2. Terminology
        ↓
3. Claims Matrix
        ↓
4. Core Messaging
        ↓
5. English Content
        ↓
6. Arabic Localization
        ↓
7. SEO Content
        ↓
8. Figma / UI Integration
        ↓
9. QA
        ↓
10. Publication

This reduces the risk of repeatedly rewriting content after business information changes.

Final Rule

Content is not complete when the words have been written.

Content is complete when the right source has been verified, the meaning is approved, the terminology is correct, the required languages are aligned, the implementation is validated, and the published result reflects the approved business truth.


Recommended location:

```text
docs/03-content/content-status.md
Your 03-content/ folder is now logically structured
03-content/
├── README.md
├── messaging.md
├── english-content.md
├── arabic-content.md
├── seo-content.md
└── content-status.md

The roles are clean:

messaging.md
    ↓
What should we communicate?

english-content.md
    ↓
What is the approved English expression?

arabic-content.md
    ↓
How is that meaning expressed naturally in Arabic?

seo-content.md
    ↓
How is approved content optimized for search?

content-status.md
    ↓
What is its current state?

And the dependency chain is:

02-business/
    ↓
Truth + terminology + approved claims
    ↓
03-content/
    ↓
Messaging + English + Arabic + SEO
    ↓
04-design/
    ↓
Visual presentation
    ↓
05-architecture/
    ↓
Implementation