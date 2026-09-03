# Content

The `03-content` folder contains the messaging, copy, localization, SEO content, and content-status framework for the Baghlaf Steel website.

This folder defines **how approved business information should be communicated** to buyers.

It does not replace the business source of truth in `../02-business/`.

---

## Purpose

The content system translates:

```text
Approved Business Truth
        ↓
Approved Claims & Terminology
        ↓
Messaging Strategy
        ↓
English Content
        ↓
Arabic Content
        ↓
SEO Content
        ↓
Website Experience

The objective is to communicate Baghlaf Steel clearly, accurately, professionally, and consistently to international B2B buyers.

Files
messaging.md

Defines the strategic messaging system.

Answers:

What should Baghlaf communicate, to whom, and why?

It covers:

core messages;
messaging hierarchy;
buyer questions;
messaging pillars;
positioning themes;
CTA hierarchy;
trust messaging;
page-level communication objectives.

This file defines message direction rather than every final sentence.

english-content.md

Contains the controlled English-language website content.

Answers:

What exact English wording should be used?

It covers:

page content;
headings;
supporting copy;
CTAs;
forms;
trust content;
product content;
system messages;
approved English wording.

English content must follow approved business facts, claims, and terminology.

arabic-content.md

Contains the controlled Arabic-language website content and localization guidance.

Answers:

How should the same approved business meaning be expressed naturally in Arabic?

Arabic is treated as a first-class language experience.

This file covers:

Arabic content;
Arabic terminology;
localization;
RTL-related content considerations;
Arabic forms;
Arabic trust messaging;
Arabic SEO content;
English–Arabic meaning alignment.

Arabic must not introduce a stronger or different business claim than the approved source.

seo-content.md

Defines the SEO content system.

Answers:

How should approved Baghlaf content become discoverable through search?

It covers:

search intent;
keyword topics;
branded SEO;
commercial SEO;
product SEO;
geographic SEO;
metadata;
internal linking;
structured data;
English and Arabic SEO;
indexing strategy.

SEO must adapt to the approved business model rather than changing the business model to target keywords.

content-status.md

Acts as the central content-status dashboard.

Answers:

What content exists, what state is it in, what is missing, and what is blocking publication?

It tracks:

content inventory;
language status;
business verification;
approval;
implementation;
QA;
publication;
blockers;
ownership;
content drift.

It does not contain the actual content itself.

Content Authority

The content folder operates downstream from the business source of truth.

02-business/
    ↓
Facts
Products
Supply Sources
Credentials
Claims
Terminology
    ↓
03-content/
    ↓
Messaging
English
Arabic
SEO
Status
    ↓
Website

The business source of truth has authority over factual company information.

Relevant business sources include:

../02-business/company-facts.md
../02-business/approved-contacts.md
../02-business/approved-products.md
../02-business/approved-supply-sources.md
../02-business/credentials.md
../02-business/claims-matrix.md
../02-business/terminology.md
Core Content Principles
1. Clarity Before Persuasion

The buyer should understand the company before being asked to trust or engage with it.

2. Proof Over Slogans

Evidence, precise information, and clear processes should carry more weight than generic marketing language.

3. Business Truth Before Copy Quality

Perfectly written content is still unacceptable if the underlying information is inaccurate or unapproved.

4. Consistency

The same approved information should remain consistent across:

English;
Arabic;
pages;
forms;
SEO;
metadata;
structured data;
emails.
5. Buyer Relevance

Content should help the buyer:

Understand
→
Explore
→
Evaluate
→
Verify
→
Engage
6. No Invented Information

Do not invent:

company facts;
products;
supply relationships;
credentials;
statistics;
customers;
testimonials;
availability;
capacity;
response times;
commercial guarantees.
Important Terminology Boundaries

The content system must preserve the distinctions defined in:

../02-business/terminology.md

Especially:

Supply Source
≠
Supplier
≠
Partner
≠
Distributor
≠
Agent

Manufacturer
≠
Baghlaf Steel

Product Capability
≠
Current Availability
≠
Confirmed Allocation
≠
Guaranteed Supply

Requirement
≠
Order

Verification
≠
Certification

Credential
≠
Public Claim

A content rewrite must never collapse these distinctions for stylistic or SEO reasons.

Claim Control

Any factual or evaluative public statement must comply with:

../02-business/claims-matrix.md

The content system must not independently approve claims.

The workflow is:

Claim
→
Verify
→
Approve
→
Communicate

Not:

Write
→
Assume
→
Publish
English and Arabic

English and Arabic should communicate the same approved business meaning.

They do not need to use identical sentence structures.

The correct principle is:

Same Meaning
+
Correct Terminology
+
Natural Language

Arabic should not be treated as a machine-translation layer added after the English website is complete.

SEO Boundary

SEO is downstream from business truth.

Business Truth
        ↓
Messaging
        ↓
Content
        ↓
SEO Optimization

Not:

Keyword Opportunity
        ↓
Change Business Positioning

SEO must never cause Baghlaf to be represented as a manufacturer, authorized distributor, global leader, or other unsupported category.

Content Lifecycle

The standard lifecycle is:

Planned
   ↓
Draft
   ↓
Review
   ↓
Business Verification
   ↓
Approval
   ↓
Implementation
   ↓
QA
   ↓
Published
   ↓
Review / Update
   ↓
Deprecated / Archived

Not every content item requires every stage, but important public business content should follow an appropriately controlled process.

Content Ownership

Different content types may have different owners.

Business Facts
→ Management

Products
→ Management / Commercial

Supply Sources
→ Management / Commercial

Credentials
→ Management

Claims
→ Business Approval

English Copy
→ Content / Project Owner

Arabic Copy
→ Arabic Content Reviewer / Project Owner

SEO
→ SEO / Content

UI Microcopy
→ Product / UX / Engineering

Actual owners should be recorded in content-status.md when established.

Content Dependencies

Some content cannot be finalized until business information is approved.

Homepage
    ↓
Company Facts + Claims + Messaging

Products
    ↓
approved-products.md

Supply Network
    ↓
approved-supply-sources.md

Verification
    ↓
company-facts.md + approved-contacts.md + claims-matrix.md

Credentials
    ↓
credentials.md

Terminology
    ↓
terminology.md

When information is missing, the content should remain:

TBD
Pending Verification
Pending Approval
Blocked

rather than being filled with assumptions.

AI Rules

AI agents working inside this folder must:

read the relevant 02-business sources before writing factual content;
preserve approved terminology;
check the claims matrix before creating public claims;
never invent missing information;
never strengthen approved claims;
never convert capability into availability;
never convert a requirement into an order;
never attribute another company's credential to Baghlaf;
never invent testimonials, statistics, or customer examples;
never mark AI-generated content as approved;
preserve English–Arabic business meaning;
treat SEO suggestions as non-authoritative;
flag uncertainty instead of guessing.

AI-generated content is a draft until it passes the appropriate review and approval process.

Content and Design

Content should support the approved visual direction:

Industrial Editorial

The content system should provide the hierarchy needed for:

strong editorial headlines;
structured technical information;
evidence;
trust;
clear CTAs;
responsive layouts;
Arabic/RTL presentation.

Content should not be written in a way that forces the design into generic SaaS or AI-generated patterns.

Content and UX

Content should support the buyer journey:

Discover
→
Understand
→
Explore
→
Evaluate
→
Verify
→
Engage

Each major page should have:

One Primary Message
+
Supporting Information
+
One Primary Action

The amount of content should match the buyer's intent.

Current Status

At the current project stage:

Business Source of Truth
→ Being populated and verified

Messaging
→ Strategic baseline established

English Content
→ Not final

Arabic Content
→ Not final

SEO Content
→ Not final

Content Status
→ In Progress

Production Content
→ Not Started

This is an intentional state.

The project should not create large amounts of final copy before the necessary business information is confirmed.

Recommended Workflow

When creating or changing website content:

1. Identify the content objective
2. Load relevant business sources
3. Check terminology
4. Check claims
5. Review messaging
6. Draft English content
7. Localize Arabic content
8. Review SEO implications
9. Validate against Figma / UX
10. QA
11. Approve
12. Publish
13. Update content status
Relationship to Other Project Areas
02-business/
    What is true?

03-content/
    How should that truth be communicated?

04-design/
    How should that communication look?

05-architecture/
    How should it be implemented?

06-ux/
    How should the buyer experience it?

07-qa/
    Has it been validated?

08-operations/
    How is it maintained?
Final Rule

02-business/ defines what is true.

03-content/ defines how that truth is communicated.

Content may be persuasive, but it must never become more certain, more impressive, or more authoritative than the underlying business evidence.


Recommended location:

```text
docs/03-content/README.md

Your three main layers are now clearly separated:

02-business
    ↓
FACTS + EVIDENCE + APPROVED TERMINOLOGY

03-content
    ↓
MESSAGING + COPY + LOCALIZATION + SEO

04-design
    ↓
VISUAL EXPRESSION