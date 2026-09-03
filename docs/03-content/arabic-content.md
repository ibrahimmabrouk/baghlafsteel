# Arabic Content

## Purpose

This document is the controlled source for Baghlaf Steel's Arabic-language website content.

It defines and records:

- approved Arabic company language;
- Arabic product terminology;
- Arabic commercial terminology;
- Arabic navigation labels;
- approved Arabic messaging;
- Arabic page content;
- Arabic localization rules;
- Arabic content status;
- Arabic editorial requirements.

Arabic content must preserve the business meaning of the approved English content and the approved business source of truth.

Arabic is treated as a first-class language experience, not as a machine-translated copy of the English website.

---

# 1. Content Authority

Arabic content must follow the following authority order:

```text
Approved Business Facts
        ↓
Approved Business Terminology
        ↓
Approved Public Claims
        ↓
Approved English Content / Messaging
        ↓
Arabic Localization
        ↓
Website Implementation

Relevant authoritative sources include:

docs/02-business/company-facts.md
docs/02-business/approved-contacts.md
docs/02-business/approved-products.md
docs/02-business/approved-supply-sources.md
docs/02-business/credentials.md
docs/02-business/claims-matrix.md
docs/02-business/terminology.md

Arabic wording must not introduce a stronger claim, different relationship, or different business meaning than the approved source.

2. Arabic Content Status

Each piece of Arabic content may have one of the following statuses:

Status	Meaning
Draft	Initial wording that has not been approved.
Under Review	Arabic wording is being reviewed.
Approved	Wording has been approved for use.
Published	Approved and implemented on the website.
Needs Update	Existing content no longer reflects the approved source.
Deprecated	No longer intended for use.
Pending Business Input	Cannot safely complete without business clarification.

Only Approved content should be treated as final public Arabic content.

3. Arabic Editorial Principles

Arabic website content should be:

natural;
professional;
precise;
commercially appropriate;
clear;
concise;
trustworthy;
suitable for a B2B audience.

Avoid:

literal word-for-word translation;
exaggerated marketing language;
unnecessary formality;
awkward Arabic calques;
unsupported claims;
overly promotional language;
inconsistent terminology.

The objective is:

Preserve the meaning, not the sentence structure.

4. English–Arabic Meaning Alignment

English and Arabic content should represent the same approved business meaning.

For example:

English:
Steel Trading & Supply Company

Arabic:
[Approved Arabic Equivalent]

The Arabic version should not accidentally become:

Steel Manufacturer
Steel Producer
Authorized Distributor
Global Supplier

unless the corresponding claim is separately approved.

5. Core Company Terminology

The following terminology should be aligned with:

docs/02-business/terminology.md
English	Arabic	Status	Notes
Baghlaf Steel	TBD	Pending Approval	Official public terminology
Steel	حديد / فولاذ	Pending Approval	Final terminology depends on approved business usage
Steel Trading	TBD	Pending Approval	
Steel Supply	TBD	Pending Approval	
Steel Trading & Supply	TBD	Pending Approval	
Supply Source	TBD	Pending Approval	
Manufacturer	TBD	Pending Approval	
Supplier	TBD	Pending Approval	
Partner	TBD	Pending Approval	
Distributor	TBD	Pending Approval	
Agent	TBD	Pending Approval	
Buyer	TBD	Pending Approval	
Customer	TBD	Pending Approval	
Requirement	TBD	Pending Approval	
Quotation	TBD	Pending Approval	
Verification	TBD	Pending Approval	
Certification	TBD	Pending Approval	
Authorized Representative	TBD	Pending Approval	

The exact Arabic terminology should be approved before becoming a project-wide standard.

6. Arabic Terminology Rules

When translating or creating Arabic content:

Check terminology.md.
Use the approved Arabic equivalent where available.
Preserve the business relationship described by the English term.
Do not replace a precise business term with a broader or stronger term.
Flag missing terminology for approval.

The AI must not independently redefine the company's terminology.

7. Arabic Company Identity

The company identity section should eventually contain:

Field	Arabic Value	Status
Official Arabic Company Name	TBD	Pending Approval
Arabic Public Brand Name	TBD	Pending Approval
Official Arabic Description	TBD	Pending Approval
Arabic Short Description	TBD	Pending Approval

Do not generate the final legal/company name from transliteration assumptions.

8. Homepage Arabic Content

The homepage should eventually contain approved Arabic content for:

Hero
Value Proposition
Primary CTA
Trust / Verification
Product Introduction
Supply Network
How We Work
Why Baghlaf
Supporting Evidence
Final CTA

Suggested content record:

Section	Arabic Content	Status	Source
Hero	TBD	Pending Approval	messaging.md
Value Proposition	TBD	Pending Approval	messaging.md
Primary CTA	TBD	Pending Approval	terminology.md
Verification CTA	TBD	Pending Approval	claims-matrix.md
Products Intro	TBD	Pending Approval	approved-products.md
Supply Intro	TBD	Pending Approval	approved-supply-sources.md
Final CTA	TBD	Pending Approval	messaging.md
9. Navigation Labels

Arabic navigation should be defined centrally.

English	Arabic	Status
Home	TBD	Pending Approval
Products	TBD	Pending Approval
Supply Network	TBD	Pending Approval
How We Work	TBD	Pending Approval
Why Baghlaf	TBD	Pending Approval
About	TBD	Pending Approval
Resources	TBD	Pending Approval
Verification	TBD	Pending Approval
Contact	TBD	Pending Approval
Submit Requirement	TBD	Pending Approval

Navigation terminology should remain consistent across:

desktop;
mobile;
breadcrumbs;
footer;
page headings.
10. CTA Terminology

Calls to action should use approved Arabic terminology.

English CTA	Arabic CTA	Status
Submit Requirement	TBD	Pending Approval
Verify Baghlaf	TBD	Pending Approval
Contact Us	TBD	Pending Approval
View Products	TBD	Pending Approval
Explore Products	TBD	Pending Approval
Learn More	TBD	Pending Approval
Request a Quote	TBD	Pending Approval
Download	TBD	Pending Approval

Do not replace:

Submit Requirement

with:

Place Order

unless the actual business workflow supports an order.

11. Product Content

Arabic product content should be derived from approved product information.

Each published product should eventually contain:

Product Name
Arabic Product Name
Description
Forms
Grades
Standards
Specifications
Applications
Documents
Relevant CTA

The source of truth is:

docs/02-business/approved-products.md

AI must not invent Arabic technical specifications.

12. Product Names

Product names require special care.

The project must distinguish between:

Official Product Name
Arabic Transliteration
Arabic Commercial Name
Arabic Descriptive Name
Technical Standard Name

Where an internationally recognized technical name or abbreviation should remain in English or Latin characters, it should not be forcibly translated.

The final presentation should preserve clarity for technical B2B buyers.

13. Technical Data in Arabic

Technical data may contain:

Grade
Standard
Dimensions
Units
Abbreviations
Chemical Symbols
Material Codes
Product Codes

These should remain technically accurate.

For example:

ASTM
EN
ISO
mm
MT

should not be translated merely for visual consistency.

Arabic surrounding text may be localized while internationally recognized technical identifiers remain unchanged.

14. Mixed Arabic / English Content

International B2B steel content may require both Arabic and Latin-script elements.

Examples:

ASTM A36
EN 10025
100 mm
50 MT
email@example.com
baghlaf.com.sa

These should remain readable and technically unambiguous within RTL content.

The implementation should use appropriate bidirectional text handling where necessary.

15. Requirement Form Arabic Content

The requirement flow should have complete Arabic equivalents for:

Buyer Information
Company
Email
Phone
Product
Quantity
Unit
Grade
Standard
Technical Requirements
Destination
Delivery Requirements
Commercial Requirements
Documents
Additional Information
Review
Submit
Success
Errors

The Arabic form should be equivalent in meaning to the English form.

16. Arabic Form Errors

Error messages should be:

understandable;
concise;
specific;
associated with the correct field;
written in natural Arabic.

Avoid generic messages such as:

حدث خطأ

when a more useful explanation is possible.

For example:

يرجى إدخال الكمية المطلوبة.

is more actionable when appropriate.

Final wording remains subject to content approval.

17. Verification Page Arabic Content

The Arabic verification experience should clearly explain:

official Baghlaf identity;
official communication channels;
how buyers can verify Baghlaf;
appropriate safe communication behavior.

It must use the approved business and contact information.

The Arabic page must not make accusations or unsupported claims about other companies or websites.

18. About Page Arabic Content

The Arabic About page should communicate only approved information regarding:

Company Identity
Business Role
Business Activities
History
Markets
Supply Model
Credentials

Unknown information must not be invented to make the Arabic page appear complete.

19. Supply Network Arabic Content

The Arabic Supply Network page must preserve the distinction between:

Supply Source
Manufacturer
Supplier
Partner
Distributor
Agent

It must use the exact relationship terminology approved for the relevant source.

An external manufacturer's existence must never be translated in a way that implies Baghlaf owns or operates the facility.

20. Arabic Trust Content

Trust-focused Arabic content should emphasize evidence and verification.

The preferred structure is:

Official Identity
+
Official Channels
+
Evidence
+
Verification
+
Clear Commercial Process

Avoid excessive phrases such as:

الأفضل
الأكبر
الأكثر موثوقية
الرائد الأول
رقم واحد

unless specifically supported and approved.

21. Arabic Claims

Arabic claims must follow:

docs/02-business/claims-matrix.md

A claim approved in English does not automatically authorize any stronger Arabic equivalent.

For example:

"Can source steel"

must not become a stronger Arabic claim equivalent to:

"Direct manufacturer"

or:

"Guaranteed steel supply"

unless explicitly approved.

22. Arabic SEO Content

Arabic SEO should be developed independently while preserving business meaning.

Relevant fields may include:

Field	Arabic Content	Status
SEO Title	TBD	Pending
Meta Description	TBD	Pending
Page Heading	TBD	Pending
Primary Search Term	TBD	Pending
Secondary Terms	TBD	Pending

SEO must never introduce unsupported business claims.

23. Arabic Metadata

Arabic versions should have appropriate:

page titles;
meta descriptions;
Open Graph text;
structured data where localized values apply;
language metadata;
canonical/alternate relationships.

Metadata should be validated like visible content.

24. Arabic URLs

Where the architecture supports localized URLs, URL structure should be:

readable;
consistent;
stable;
appropriately localized;
technically compatible with the routing architecture.

The final URL strategy should follow:

docs/05-architecture/localization.md
docs/05-architecture/route-architecture.md

Do not introduce URL changes independently from the approved architecture.

25. Arabic Typography

Arabic typography should use the approved Arabic typeface from the design system.

Consider:

readability;
x-height / Arabic letter proportions;
weight;
line height;
long headings;
mixed-script content;
technical values;
mobile readability.

Final font selection belongs to the design system.

26. Arabic Layout Considerations

Arabic content may change the visual dimensions of components.

Validate:

Headings
Buttons
Navigation
Cards
Forms
Tables
Breadcrumbs
Dialogs
Alerts

Long Arabic text must not cause:

overflow;
clipping;
unexpected layout shifts;
broken buttons;
overlapping elements.
27. RTL Does Not Mean Translate and Mirror

Arabic implementation should not simply:

Translate Text
+
Set direction: rtl

The experience should be intentionally designed for Arabic.

This includes:

hierarchy;
text length;
icon direction;
spacing;
alignment;
component behavior;
technical content;
interaction patterns.
28. English–Arabic Content Mapping

Important content should have an explicit relationship between English and Arabic.

Content ID	English Source	Arabic Version	Status
CNT-001	TBD	TBD	Pending
CNT-002	TBD	TBD	Pending

A shared content ID helps prevent one language from being updated while the other remains stale.

29. Content IDs

Where structured content is used, a stable ID should identify the content concept.

Example:

CNT-HOME-HERO-001
CNT-HOME-TRUST-001
CNT-PRODUCT-STEEL-001
CNT-VERIFY-INTRO-001

The exact ID convention can evolve with the content architecture.

IDs should remain implementation-neutral where possible.

30. Translation Workflow

The preferred workflow is:

Approved Business Information
        ↓
Approved Content Meaning
        ↓
English Content
        ↓
Arabic Localization
        ↓
Arabic Review
        ↓
Approval
        ↓
Implementation
        ↓
QA

Arabic should not be generated before the underlying business meaning is sufficiently stable.

31. AI Translation Rules

AI may assist in drafting Arabic content.

However, AI must:

use the approved terminology;
preserve exact business meaning;
avoid stronger claims;
preserve technical values;
preserve product names where required;
preserve company identity;
flag ambiguous terms;
avoid literal translations that sound unnatural;
avoid regional wording that changes commercial meaning.

AI-generated Arabic should be treated as a draft until approved.

32. Arabic Content QA

Arabic QA should verify:

Meaning
Terminology
Grammar
Spelling
Naturalness
Business Accuracy
Technical Accuracy
RTL Layout
Typography
Responsive Behavior
Metadata
Forms
Error Messages

The page is not complete merely because the Arabic text has been translated.

33. Content Consistency

The same Arabic term should be used consistently across:

Navigation
Pages
Products
Forms
Verification
Emails
SEO
Metadata
Structured Data

Exceptions should be deliberate and documented.

34. Arabic Content and Business Changes

When a business fact changes:

Business Source
        ↓
English Content Review
        ↓
Arabic Content Review
        ↓
Terminology Review
        ↓
Implementation
        ↓
QA

Arabic content must not remain based on outdated business information.

35. Untranslated Content

Temporary untranslated content should never be mistaken for final content.

If a required Arabic translation is unavailable:

Status:
Pending

rather than:

Invented Translation

For technical terms where English is intentionally retained, this should be explicit.

36. Arabic Content Don'ts

Do not:

Invent company information
Invent products
Invent credentials
Invent source relationships
Invent statistics
Invent testimonials
Strengthen claims
Translate technical data inaccurately
Use inconsistent terminology
Publish machine translation without review
37. Management Approval

Important Arabic business language should be reviewed by the appropriate Baghlaf representative.

Particularly important:

Company Name
Company Description
Business Classification
Product Names
Supply Relationships
Credentials
Verification Content
Commercial Terminology
Official Contact Information
Major Public Claims
38. Current Content Status

At the current project stage:

Official Arabic Company Name: Pending Management Confirmation
Official Arabic Description: Pending Management Confirmation
Arabic Business Classification: Pending Management Confirmation
Arabic Product Terminology: Pending Product Approval
Arabic Supply-Source Terminology: Pending Management Approval
Arabic Commercial Terminology: Pending Workflow Approval
Arabic Navigation: Pending Content / UX Approval
Arabic Homepage Copy: Pending
Arabic Product Copy: Pending
Arabic Verification Copy: Pending
Arabic Requirement Form Copy: Pending
Arabic SEO Content: Pending
Arabic Credentials Copy: Pending

The file is intentionally a controlled framework until the underlying business information and final content are approved.

39. Relationship to Other Content Files

This file should work together with:

messaging.md
    ↓
What are we trying to communicate?

english-content.md
    ↓
What is the approved English content?

arabic-content.md
    ↓
How is that approved meaning expressed naturally in Arabic?

seo-content.md
    ↓
How is approved content optimized for search?

content-status.md
    ↓
What is drafted, approved, published, or pending?

Business truth remains controlled by:

docs/02-business/
40. Final Rule

Arabic is not a translation layer added after the website is finished. It is a first-class representation of the same approved Baghlaf Steel business truth.

The standard is:

Same Business Meaning
+
Correct Terminology
+
Natural Arabic
+
Correct RTL Experience
+
Technical Accuracy
+
Approved Public Claims

Recommended location:

```text
docs/03-content/arabic-content.md
One structural recommendation

Since you're now entering 03-content, I would keep its files deliberately separated:

03-content/
├── README.md
├── messaging.md
├── english-content.md
├── arabic-content.md
├── seo-content.md
└── content-status.md

The important relationship is:

02-business/
      ↓
   What is true?
      ↓
03-content/
      ↓
How should that truth be communicated?
      ↓
04-design/
      ↓
How should that communication be presented?

That keeps the AI from treating copywriting decisions as business facts.