# 18 — Launch, Handoff & Maintenance

## Purpose

This document defines the final transition of the Baghlaf Steel website from development into an officially operated business asset.

It covers:

- launch preparation;
- final approval;
- client acceptance;
- ownership transfer;
- operational handoff;
- documentation;
- training;
- maintenance;
- support;
- security upkeep;
- content governance;
- post-launch monitoring;
- future improvements.

The objective is to ensure that the project does not end with:

> "The website is online."

Instead, it should end with:

> "The website is live, verified, documented, owned by the business, and ready to be maintained."

---

# 1. Launch Philosophy

Launch is a controlled transition, not a single deployment event.

The project moves through:

```text
Development
   ↓
Release Candidate
   ↓
Final QA
   ↓
Client / Management Approval
   ↓
Production Launch
   ↓
Post-Launch Verification
   ↓
Operational Handoff
   ↓
Maintenance

2. Launch Principles
2.1 No Surprise Launches

Production should not be published without appropriate approval.

The final release should be known to the relevant project and business stakeholders.

2.2 Launch Only What Is Ready

Unfinished or unverified functionality should not be presented as complete merely because the launch date has arrived.

Where necessary, features should remain:

Not Yet Released
Coming Later
Internal Only
Disabled

rather than exposing incomplete functionality publicly.

2.3 Business Approval Matters

The final website represents Baghlaf Steel publicly.

Therefore, appropriate management approval should cover:

company identity;
public wording;
products;
supply-source representation;
contacts;
verification information;
public claims;
important commercial messaging.
2.4 Technical Approval Matters

The technical implementation should pass the relevant:

functional;
security;
performance;
accessibility;
responsive;
RTL;
visual;
SEO;
production-readiness

checks defined in Parts 16 and 17.

3. Launch Readiness Model

Before launch, confirm readiness across:

Business
Design
Content
Functionality
Data
Accessibility
Responsive
RTL
SEO
Performance
Security
Infrastructure
Operations
Ownership
Documentation

A website is launch-ready only when no unresolved issue in these areas presents an unacceptable business or technical risk.

4. Release Candidate

The release candidate is the version intended for final approval.

It should represent the actual production configuration as closely as practical.

The release candidate should include:

intended routes;
final approved content;
approved business information;
production-like environment configuration;
approved visual design;
required integrations;
final responsive behavior;
English and Arabic;
critical flows.

No major feature should be added casually after final release-candidate approval without appropriate revalidation.

5. Final Content Freeze

Before launch, establish an appropriate content freeze.

The freeze should cover:

company information;
product information;
supply-source information;
verification information;
contact information;
major marketing copy;
SEO metadata;
legal/policy content where applicable.

Changes during the freeze should be controlled.

6. Final Business Review

Management or the designated business approver should review:

Company Identity
Business Description
Products
Supply Network
Commercial Messaging
Verification
Contacts
Representatives
Claims
Credentials

The review should confirm that the website accurately represents the business.

Particular attention should be paid to the distinction between:

Baghlaf Steel
Supply Source
Manufacturer
Supplier
Partner
Distributor
Agent
7. Final Design Review

The final visual experience should be reviewed against approved Figma.

Review:

homepage;
core pages;
product pages;
verification;
requirement flow;
navigation;
footer;
mobile;
Arabic/RTL;
important states.

The Industrial Editorial visual direction should remain consistent throughout the final product.

8. Final QA Review

The release candidate should pass the applicable checks from:

docs/07-qa/

including:

functional QA;
visual QA;
accessibility;
responsive QA;
RTL QA;
SEO;
performance;
security;
critical-flow testing.

Critical unresolved issues should block launch unless explicitly accepted by the responsible stakeholders.

9. Client Acceptance

The website should have a clear acceptance point.

The client should confirm that:

the website reflects the agreed project scope;
approved public information is accurate;
core functionality works;
critical flows are acceptable;
final design is acceptable;
known limitations are understood.

Acceptance should be recorded in an appropriate project record or communication.

10. Known Issues at Launch

Some low-risk issues may remain at launch.

They should be documented as:

Known Issue
Severity
Impact
Workaround
Planned Resolution
Owner

Known issues should never be hidden simply to create the appearance of a perfect release.

11. Launch Execution

Production launch should follow a controlled sequence:

Release Candidate Approved
        ↓
Production Configuration Verified
        ↓
Backup / Recovery Readiness Confirmed
        ↓
Deployment
        ↓
Smoke Test
        ↓
Critical Flow Verification
        ↓
Monitoring
        ↓
Launch Confirmation

The exact deployment mechanism is defined in Part 17.

12. Post-Launch Verification

Immediately after launch, verify:

Homepage
Navigation
Products
Product Detail
Supply Network
Verification
About
Contact
Requirement Flow
English
Arabic
Mobile
Desktop

Also verify:

forms;
email notifications;
database persistence;
file uploads where applicable;
redirects;
canonical URLs;
sitemap;
robots;
SSL;
analytics;
monitoring.
13. Launch Monitoring Period

A short heightened monitoring period should follow launch.

The team should watch for:

application errors;
broken routes;
form failures;
email failures;
unexpected visual issues;
mobile problems;
performance degradation;
indexing problems;
user-reported issues.

The duration of this period should be defined according to project needs.

14. Launch Incident Handling

If a serious production problem appears:

Detect
→ Assess Severity
→ Contain
→ Fix or Roll Back
→ Verify
→ Communicate
→ Document

The goal should be to restore reliable service first, then investigate the root cause.

15. Operational Handoff

After successful launch, the project transitions from development ownership toward operational ownership.

The handoff should cover:

Application
Infrastructure
Domain
DNS
Email
Database
Storage
Analytics
Monitoring
Figma
Repository
Documentation

The client should know where each critical asset is controlled.

16. Client Ownership

The client should have appropriate control over production-critical assets.

At minimum, ownership/control should be established for:

Domain
DNS
GitHub Repository
Hosting
Database
Storage
Business Email
Analytics
Monitoring
Figma

Where a freelancer or agency initially created these resources, the project should include a transition path to appropriate client ownership.

17. Access Handoff

The final access inventory should identify:

System
Owner
Administrators
Purpose
Access Method
Recovery Method

Do not place actual passwords or secret tokens inside the general handoff document.

18. Credential Handoff

Credentials should be transferred securely.

The process should include:

account ownership confirmation;
administrative access;
recovery email/phone confirmation;
2FA setup where applicable;
removal of unnecessary temporary accounts;
rotation of temporary development credentials.

The freelancer should not remain the only person capable of accessing production.

19. Technical Documentation Handoff

The client/development team should receive enough information to maintain the system.

Documentation should cover:

Project Structure
Architecture
Routes
Components
Data Model
Environment Variables
Deployment
Database
Storage
Email
Monitoring
Analytics
Security
Backups
Rollback
Maintenance

The objective is operational independence, not documentation volume.

20. AI Project Memory Handoff

Because AI-assisted development is part of this project, the project memory must also be handed off.

The repository should preserve:

PROJECT_CONSTITUTION.md
AGENTS.md
CLAUDE.md
docs/00-project/
docs/01-strategy/
docs/02-business/
docs/03-content/
docs/04-design/
docs/05-architecture/
docs/06-ux/
docs/07-qa/
docs/08-operations/
docs/09-decisions/
skills/

The exact files present may evolve over time.

The important principle is that future developers and AI agents should be able to understand the project without depending on the original development conversation.

21. AI Handoff Rules

Future AI agents should be able to:

read project governance;
understand the business;
identify approved facts;
understand decisions;
understand the design system;
understand architecture;
inspect current implementation;
continue maintenance safely.

The AI should not require the original freelancer's personal memory to continue development.

22. Client Training

Where appropriate, provide practical training for the people responsible for:

content updates;
product updates;
requirement management;
contact requests;
basic operational tasks;
reviewing analytics;
reporting issues.

Training should be based on the actual tools selected for production.

23. Content Management Handoff

If the website includes a CMS or administrative system, define:

Who can edit?
Who approves?
What can be edited?
What requires developer support?
How are changes published?
How are mistakes reversed?

The client should not be given unrestricted access to technical configuration merely because content management is enabled.

24. Business Data Maintenance

Business information should have an identified owner.

Review periodically:

Company Information
Products
Product Specifications
Supply Sources
Relationships
Contacts
Representatives
Credentials
Verification Information
Commercial Messaging

Changes should originate from approved business sources.

25. Verification Maintenance

Verification should be treated as an ongoing business responsibility.

Whenever official channels change, update and verify:

Website
Email
Phone
WhatsApp
Office
Authorized Representatives
Official Social Channels

The same information should remain consistent across:

English;
Arabic;
website footer;
verification page;
contact page;
relevant confirmation pages.
26. Product Maintenance

Product information should be periodically reviewed.

Possible states include:

Active
Under Review
Temporarily Unavailable
Archived

The exact states should follow the approved product model.

Review:

names;
specifications;
standards;
documents;
forms;
applications;
supply capability;
related sources;
public visibility.
27. Supply-Network Maintenance

Supply-source information should be reviewed whenever the underlying relationship changes.

Verify:

Source Name
Relationship Type
Products
Public Disclosure
Logo Permission
Evidence
Current Approval

A source should not remain publicly represented after its approved status or relationship has changed.

28. Content Review Cycle

Important public content should have a review lifecycle:

Draft
→ Verify
→ Approve
→ Publish
→ Review
→ Update / Archive

The review frequency should depend on the information's volatility.

Highly changeable information requires more frequent review than stable corporate messaging.

29. Technical Maintenance

Routine technical maintenance may include:

dependency updates;
framework updates;
security patches;
broken-link checks;
performance monitoring;
backup checks;
infrastructure review;
log review;
certificate/domain review.

Updates should follow the development and QA workflow rather than being applied blindly in production.

30. Security Maintenance

Security should continue after launch.

Maintain:

Dependencies
Credentials
Access Rights
Security Headers
File Upload Controls
Monitoring
Backups
Incident Response
Third-Party Integrations

Compromised credentials should be rotated immediately.

Unnecessary accounts should be removed.

31. Backup Maintenance

Backups should be:

monitored;
retained according to policy;
access-controlled;
tested periodically.

The team should know how restoration works before an incident occurs.

32. Domain and Email Maintenance

Review:

Domain Registration
DNS
TLS Certificate
SPF
DKIM
DMARC
Email Accounts
Forwarding Rules
Recovery Methods

The purpose is to protect both operational continuity and buyer trust.

33. Analytics and Monitoring Review

Analytics and monitoring should be reviewed periodically.

Look for:

broken flows;
unusual failure rates;
traffic anomalies;
page performance;
form abandonment;
important user journeys.

Analytics should remain privacy-conscious and should not become a repository for sensitive requirement content.

34. Support Model

The project should define what happens when the client reports an issue.

A practical support classification:

Critical

Production unavailable, severe security problem, or critical commercial flow broken.

High

Major feature or important business workflow impaired.

Medium

Localized functional or UX issue.

Low

Minor visual/content issue.

Response expectations should be explicitly agreed with the client rather than assumed.

35. Maintenance Categories

Maintenance may be divided into:

Corrective
→ Fix defects

Adaptive
→ Adjust to infrastructure/browser/platform changes

Preventive
→ Reduce future technical or security risk

Evolutionary
→ Add approved improvements

This provides a useful distinction between fixing problems and adding new scope.

36. Change Requests After Launch

New requests should not automatically be treated as bugs.

Classify them as:

Bug
Content Update
Minor Improvement
Feature
Change Request
New Scope

This protects the original project scope and creates clearer client communication.

37. Version 2 Planning

Post-launch improvements should be informed by real evidence.

Potential inputs include:

buyer behavior;
submitted requirements;
analytics;
sales-team feedback;
client feedback;
support issues;
SEO data;
performance data.

Future features should be prioritized based on actual business value rather than AI-generated ideas alone.

38. Continuous Improvement Loop

After launch:

Observe
→ Learn
→ Prioritize
→ Design
→ Implement
→ Validate
→ Release

The website should evolve based on evidence while preserving its strategic positioning and trust architecture.

39. Project Closure

The initial project phase may be considered closed when:

Website Live
+
Client Accepted
+
Critical QA Complete
+
Ownership Established
+
Access Transferred
+
Documentation Delivered
+
Monitoring Active
+
Backups Confirmed
+
Maintenance Process Defined

Project closure does not mean the website becomes unmanaged.

It means the project enters its operational lifecycle.

40. Final Handoff Package

The final handoff should contain, as appropriate:

1. Production Website
2. Source Repository
3. Figma File
4. Project Documentation
5. Technical Documentation
6. Deployment Documentation
7. Access / Ownership Record
8. Backup / Recovery Information
9. Maintenance Guidance
10. Known Issues
11. Training Materials
12. Final Acceptance Record

Secrets should be transferred securely rather than embedded inside documents.

41. Freelancer Handoff Standard

A professional handoff should allow another qualified developer to answer:

What is this project?
Why was it built this way?
What are the business rules?
What is approved?
Where is the source of truth?
How does the system work?
How is it deployed?
How is it maintained?
How can it be recovered?
What should not be changed casually?

The answer should exist in the project—not only in the freelancer's memory.

42. Post-Launch Review

After the initial launch period, conduct a structured review.

Evaluate:

Business
Design
UX
Technical
Performance
SEO
Security
Operations
Buyer Feedback

Identify:

what worked;
what failed;
what remains unclear;
what should be improved;
what should not be repeated.

Important lessons should be documented.

43. Project Retrospective

The team should record meaningful lessons from the project.

Potential areas:

Strategy
Client Communication
Business Data Collection
Design Process
AI Workflow
Development
QA
Deployment
Handoff

The goal is to improve future projects and future iterations of Baghlaf Steel's digital presence.

44. Long-Term Governance

After launch, the same core governance remains active.

The following should continue to protect project quality:

Business Source of Truth
+
Decision Records
+
Figma
+
Architecture Documentation
+
AI Operating Rules
+
QA Standards
+
Operational Documentation

The website may evolve, but its governance system should remain understandable.

45. Final Launch Checklist
[ ] Final business information approved
[ ] Product information approved
[ ] Supply-source information approved
[ ] Verification information approved
[ ] Contacts verified
[ ] Final content approved
[ ] Final design approved
[ ] Release candidate validated
[ ] Functional QA passed
[ ] Critical E2E flows passed
[ ] Visual QA passed
[ ] Responsive QA passed
[ ] RTL QA passed
[ ] Accessibility reviewed
[ ] Performance reviewed
[ ] SEO reviewed
[ ] Security reviewed
[ ] Production configuration verified
[ ] Backup / recovery readiness confirmed
[ ] Monitoring active
[ ] Domain verified
[ ] Email verified
[ ] Production smoke test passed
[ ] Client / management acceptance recorded
[ ] Ownership established
[ ] Access handoff completed
[ ] Documentation delivered
[ ] Known issues documented
[ ] Maintenance / support model defined
46. Maintenance Checklist
[ ] Security updates reviewed
[ ] Dependencies reviewed
[ ] Backups monitored
[ ] Restore process periodically tested
[ ] Domain reviewed
[ ] Email configuration reviewed
[ ] Monitoring reviewed
[ ] Broken links checked
[ ] Performance reviewed
[ ] Accessibility reviewed
[ ] Product data reviewed
[ ] Supply-source data reviewed
[ ] Verification information reviewed
[ ] Contact information reviewed
[ ] SEO reviewed
[ ] Analytics reviewed
[ ] Client-reported issues reviewed
47. Final Principle

The successful delivery of this project is not measured only by whether the website goes live.

It is measured by whether Baghlaf Steel receives a reliable digital asset that the business can control, trust, operate, and evolve.

The final lifecycle is:

Build
→ Validate
→ Approve
→ Launch
→ Handoff
→ Monitor
→ Maintain
→ Improve

The standard is:

Launch with confidence. Handoff with clarity. Maintain with discipline. Improve with evidence.


Recommended location:

```text
docs/01-strategy/18-launch-handoff-and-maintenance.md