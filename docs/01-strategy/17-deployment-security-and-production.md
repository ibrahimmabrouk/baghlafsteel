# 17 — Deployment, Security & Production

## Purpose

This document defines how the Baghlaf Steel website is prepared, configured, secured, deployed, monitored, and operated in production.

The objective is to ensure that the website is:

- secure;
- reliable;
- recoverable;
- performant;
- maintainable;
- observable;
- properly owned by the client;
- safe for international B2B buyers;
- safe for commercially sensitive requirement submissions.

Production is treated as a controlled environment, not simply the place where the application is uploaded.

The deployment model follows:

```text
Development
    ↓
Preview / Staging
    ↓
Release Candidate
    ↓
Production
    ↓
Verification
    ↓
Monitoring
    ↓
Maintenance

1. Production Principles
1.1 Production Is Controlled

Production changes should not be made casually.

Every meaningful production change should have:

a known purpose;
an identifiable owner;
appropriate validation;
a rollback or recovery strategy.
1.2 Security by Default

Security should be considered from architecture through operations.

The project should assume that:

user input is untrusted;
uploaded files are untrusted;
external services may fail;
credentials may be targeted;
automated abuse is possible.
1.3 Least Privilege

Users, developers, services, and AI agents should receive only the access they need.

Production access should be restricted rather than shared broadly.

1.4 Secrets Must Stay Secret

Credentials must not be stored in:

Git;
public documentation;
frontend code;
screenshots;
client-visible logs;
browser local storage unless specifically required and appropriate.

Secrets should be managed through appropriate environment/configuration mechanisms.

1.5 Client Ownership

Production infrastructure should ultimately be controlled by Baghlaf Steel or the appropriate client-owned organization.

This includes, where applicable:

Domain
Hosting
Git Repository
DNS
Business Email
Database
File Storage
Analytics
Monitoring
Third-Party Integrations
Figma

The freelancer/developer may administer these systems but should not become the permanent sole owner of the client's critical infrastructure.

2. Environment Model

The project should distinguish between:

Development
Preview / Staging
Production
Development

Used for:

active coding;
experimentation;
local testing;
development data.
Preview / Staging

Used for:

review;
integration testing;
release candidate validation;
realistic non-production behavior.
Production

Used by real buyers and for live business operations.

Production data must not be casually copied into development or preview environments.

3. Environment Isolation

Environments should have separate:

credentials;
configuration;
databases where appropriate;
storage;
API keys;
email destinations;
analytics destinations;
third-party integration settings.

A development test should never accidentally:

send an email to a real customer;
modify production data;
upload files into production storage;
trigger production integrations.
4. Configuration Management

Configuration should be externalized from application code where appropriate.

Examples include:

Database connection
Email provider
Storage provider
Analytics
Third-party services
Public site URL
Environment mode
Authentication configuration
Anti-abuse configuration

Environment-specific configuration should be explicit.

5. Secret Management

Production secrets may include:

database credentials;
API keys;
SMTP credentials;
storage credentials;
authentication secrets;
webhook signing secrets;
deployment credentials.

Rules:

Never commit secrets
Never expose secrets to client bundles
Never place secrets in public documentation
Never reuse production secrets in development unnecessarily
Rotate compromised secrets
Limit access
6. Domain and DNS

The production domain is a core trust asset.

The chosen canonical domain must be explicitly approved by the appropriate project/business authority.

The current project direction has considered:

baghlaf.com.sa

as the intended domain, while its final canonical/official status must remain subject to approval.

The project must not assume that another Baghlaf-related domain is official merely because it exists.

DNS should be managed through a controlled client-owned account.

7. Canonical Domain Strategy

Once the official domain is approved:

one canonical public domain should be established;
alternate approved domains should redirect where appropriate;
HTTPS should be enforced;
canonical URLs should use the approved domain;
metadata should use the approved canonical URL;
sitemap and robots configuration should use the canonical domain.

No secondary or unofficial domain should be presented as the primary Baghlaf website.

8. HTTPS

Production must use HTTPS.

The deployment should ensure:

valid TLS certificate;
automatic renewal where supported;
HTTPS redirects;
no mixed-content issues;
secure cookie configuration where cookies are used.
9. Security Headers

The application should implement appropriate security headers based on the final architecture.

Potential controls include:

Content-Security-Policy
Strict-Transport-Security
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
Frame / clickjacking protection

The exact policy should be tested against:

application behavior;
analytics;
fonts;
images;
third-party services;
embedded content.

Security headers should not be added blindly if they break required functionality.

10. Application Security

The application should follow secure development practices.

Core requirements include:

validate untrusted input;
sanitize/encode output where appropriate;
enforce authorization server-side;
protect sensitive operations;
avoid leaking internal errors;
keep dependencies maintained;
use secure defaults.

Client-side validation improves usability but must not replace server-side validation.

11. Authentication and Authorization

Authentication should only be implemented where the product actually requires it.

If an administrative interface exists, it should include:

authenticated access;
role-based authorization where appropriate;
secure session management;
protected routes;
audit-friendly operations;
appropriate password or identity-provider controls.

Public buyers should not be forced to create an account unless a validated business requirement exists.

12. Requirement Submission Security

The requirement form is a high-priority security area.

A requirement may contain:

Buyer Identity
Contact Information
Quantity
Technical Specifications
Destination
Commercial Requirements
Uploaded Documents

These should be treated as potentially sensitive business information.

The system should enforce:

Input Validation
Server Validation
Authorization
Secure Persistence
Private Storage
Controlled Access
Abuse Protection
13. File Upload Security

Uploaded files are untrusted.

The implementation should consider:

allowed file types;
file-size limits;
filename normalization;
secure storage;
access control;
malware scanning where appropriate;
prevention of direct public exposure;
safe download behavior.

Uploaded files should not automatically become publicly accessible because their URLs exist.

14. Data Minimization

The system should collect only information necessary for the business workflow.

Avoid collecting sensitive information simply because it may be useful later.

Before introducing a field, determine:

Why is it needed?
Who uses it?
Where is it stored?
How long is it retained?
Who can access it?
Is it required or optional?
15. Data Retention

The final retention policy should be defined with the business and operational requirements.

Potential data categories include:

Requirement Records
Contact Submissions
Uploaded Documents
Operational Logs
Analytics Data
Error Logs

Retention should not be assumed by the AI or developer.

Where the policy is unknown, document it as pending rather than inventing a duration.

16. Database Security

If a database is used:

production access should be restricted;
credentials should remain private;
backups should be configured;
migrations should be version controlled;
destructive migrations should be reviewed;
logs should avoid sensitive values;
development access should not expose production unnecessarily.

Production database modifications should be controlled.

17. Database Migration Strategy

Database schema changes should follow:

Migration Created
→ Local Validation
→ Preview / Staging Test
→ Backup / Recovery Check
→ Review
→ Production Migration
→ Application Verification

Destructive schema changes require particular caution.

Where possible, prefer migration strategies that allow the application to remain recoverable.

18. Backup Strategy

Production data should be backed up according to its operational importance.

Potential backup targets include:

Database
Uploaded Documents
Application Configuration
Important Production Content

Backups should be:

automated where practical;
access-controlled;
monitored;
tested periodically for restoration.

A backup that has never been tested for recovery should not be treated as a guaranteed recovery mechanism.

19. Disaster Recovery

The project should define how the website can be restored after:

deployment failure;
infrastructure failure;
database corruption;
accidental deletion;
credential compromise;
major security incident.

The recovery plan should identify:

Who responds?
What is restored first?
Where are backups?
How is the application redeployed?
How is the domain restored?
How are secrets rotated?
How is the incident communicated?

Exact recovery targets should be established according to business needs.

20. Deployment Pipeline

The preferred delivery path is:

Code Change
    ↓
Git
    ↓
CI
    ↓
Preview / Staging
    ↓
Automated Validation
    ↓
Review
    ↓
Approval
    ↓
Production Deployment
    ↓
Smoke Test

Production deployment should be reproducible.

Manual production changes should be minimized.

21. CI/CD Requirements

The deployment pipeline should perform appropriate checks before production.

Typical checks include:

Dependency Installation
Typecheck
Lint
Tests
Build
Security Checks
Environment Validation

Additional checks may include:

E2E testing;
accessibility testing;
visual regression;
performance checks.

The exact pipeline should match the final technical implementation.

22. Deployment Artifacts

Production deployment should use identifiable artifacts such as:

commit SHA;
release tag;
build identifier;
deployment timestamp.

This allows the team to determine exactly which version is running.

23. Release Strategy

A release should have:

Release Candidate
↓
Validation
↓
Approval
↓
Production Deployment
↓
Post-Deployment Verification

Major releases may require a more extensive validation window.

Small low-risk changes may use a lighter process.

24. Zero-Downtime Considerations

Where supported by the selected infrastructure, deployment should minimize service interruption.

However, zero downtime must not be treated as more important than data integrity.

Database migrations and major architecture changes require specific compatibility planning.

25. Rollback

Every meaningful production release should have a known rollback method.

Potential rollback mechanisms include:

Previous Application Build
Previous Deployment
Configuration Rollback
Database Rollback / Forward-Fix
Content Rollback

Database rollback must be evaluated separately because schema/data changes may not be safely reversible.

26. Production Smoke Test

Immediately after deployment, verify:

Homepage
Navigation
Products
Product Detail
Supply Network
Verification
Contact
Submit Requirement
English
Arabic
Mobile
Desktop
Forms
Critical Links

For the requirement workflow, verify the complete intended submission behavior.

27. Monitoring

Production should provide sufficient monitoring to detect meaningful failures.

Monitor where appropriate:

uptime;
application errors;
failed requests;
server errors;
requirement submission failures;
email delivery failures;
storage failures;
database health;
performance;
resource usage.

The monitoring approach depends on the selected providers.

28. Alerting

Alerts should focus on actionable problems.

Potential examples:

Application unavailable
Repeated server failures
Database unavailable
Requirement submission failures
Storage failures
Critical security alerts

Avoid excessive alerts that produce noise and cause real incidents to be ignored.

29. Logging

Logs should provide enough information to diagnose failures without exposing unnecessary sensitive data.

Avoid logging:

passwords;
authentication tokens;
full private documents;
sensitive customer content;
unnecessary personal information.

Where requirement IDs or internal references are useful, prefer non-sensitive identifiers.

30. Error Reporting

Production error reporting should:

capture unexpected application failures;
preserve useful debugging context;
avoid exposing internal details to users;
avoid collecting unnecessary sensitive data.

User-facing errors should remain understandable and professional.

31. Email Delivery

If requirement submissions or contact requests trigger email:

Save / process submission first
        ↓
Generate internal reference
        ↓
Attempt notification
        ↓
Record notification result
        ↓
Confirm submission according to actual state

An email delivery failure should not automatically imply that the buyer's submission failed if the submission was successfully persisted.

The final implementation should define appropriate retry and alerting behavior.

32. Transactional Email Security

Production email should use:

authenticated sending;
approved sender domains;
appropriate SPF/DKIM/DMARC configuration;
controlled templates;
secure links;
appropriate data minimization.

Exact providers and policies remain implementation/operations decisions.

33. Third-Party Services

Each external service should have:

a defined purpose;
an owner;
required credentials;
environment separation;
failure behavior;
privacy/security considerations.

Potential services include:

Hosting
Database
Storage
Email
Analytics
Monitoring
Captcha / Anti-Abuse
Search
CMS

The project should avoid unnecessary third-party dependencies.

34. Third-Party Failure Handling

External services may fail.

The application should define graceful behavior where practical.

Examples:

Analytics unavailable

Core website should continue functioning.

Email provider unavailable

Submission persistence should remain reliable where possible.

Storage unavailable

Upload functionality should report failure clearly without corrupting the requirement record.

External search unavailable

The core navigation/product experience should remain usable where practical.

35. Analytics Security

Analytics should collect useful behavioral information without unnecessarily collecting sensitive buyer data.

Potential events include:

product_viewed
verification_viewed
requirement_started
requirement_submitted
contact_started
language_changed

Do not send full requirement content or private uploaded-document information into analytics.

36. SEO and Production Configuration

Before production launch, verify:

Canonical Domain
Sitemap
Robots
Metadata
Open Graph
Structured Data
Localized URLs / Alternates
HTTPS
Redirects
404

Search indexing should be intentional.

Staging/preview environments should not accidentally become canonical public versions.

37. Production Performance

Production configuration should support:

caching;
optimized images;
efficient fonts;
appropriate compression;
minimal unnecessary JavaScript;
CDN delivery where appropriate;
sensible database queries;
appropriate server/runtime configuration.

Performance should be measured after deployment, not only locally.

38. Content Security in Production

Production content should only be published from approved sources.

Before publishing business-facing changes, confirm:

Business Fact
→ Approved Source
→ Correct Language
→ Correct Page
→ Correct Metadata
→ Production Review

The production website must not become an accidental publication channel for unverified AI-generated content.

39. Admin / CMS Security

If a CMS or administration system is introduced, it should have:

controlled access;
authentication;
role separation where appropriate;
secure credentials;
auditability;
backup/recovery;
content approval workflow where needed.

A CMS should not be added merely because "every website needs a CMS."

Its value should be justified by actual content-management needs.

40. Access Management

Maintain a controlled record of who can access:

GitHub
Hosting
DNS
Database
Storage
Email
Analytics
Monitoring
Figma
CMS / Admin

Access should be granted according to responsibility.

Former developers or vendors should have their access removed when no longer required.

41. AI Production Access

AI agents should not receive unrestricted production access.

Where AI-assisted operations are used:

use least privilege;
separate preview and production;
avoid giving AI unnecessary secrets;
require approval for destructive actions;
keep production actions auditable.

AI-generated commands should be reviewed before potentially destructive operations.

42. Security Incident Response

A security incident may involve:

exposed credentials;
unauthorized access;
data leakage;
malicious uploads;
compromised dependencies;
suspicious traffic;
application exploitation.

The basic response should be:

Detect
→ Contain
→ Assess
→ Rotate / Revoke
→ Recover
→ Validate
→ Document
→ Improve

Incident ownership and communication responsibilities should be defined before launch.

43. Credential Compromise

If a production credential is exposed:

revoke or rotate it;
assess potential access;
inspect logs where available;
identify affected systems;
restore secure configuration;
document the incident.

The exposed secret must not simply be deleted from the latest code while remaining valid elsewhere.

44. Dependency Security

Production dependencies should be monitored for security vulnerabilities.

The project should:

keep dependencies reasonably current;
review high-severity vulnerabilities;
remove unnecessary dependencies;
avoid blindly upgrading critical packages without testing.

Dependency upgrades should use the normal development and QA workflow.

45. Domain and Email Trust

Because trust is a primary website objective, production configuration should protect the legitimacy of official channels.

Validate:

Canonical Website
HTTPS
Official Email Domain
DNS
SPF
DKIM
DMARC
Consistent Contact Information
Consistent Website References

The exact configuration should be based on the approved domain and email setup.

46. Production Change Management

A meaningful production change should record:

What changed?
Why?
Who approved it?
Who deployed it?
When?
What was validated?
What is the rollback plan?

For routine automated deployments, some of this information may be captured automatically by the platform.

47. Maintenance

Production maintenance should include:

Routine
dependency updates;
content updates;
backups;
monitoring;
broken-link checks;
SEO checks.
Periodic
accessibility review;
performance review;
security review;
domain/email review;
product data review;
supply-source review;
verification-page review.
Event-Driven
incident response;
major dependency vulnerability;
business-information change;
infrastructure migration;
domain change.
48. Verification Maintenance

The verification experience requires ongoing attention.

Whenever official information changes, verify:

Domain
Email
Phone
WhatsApp
Office Information
Authorized Representatives
Official Social Channels

Consistency across English and Arabic must also be verified.

The verification page should not become outdated while the rest of the site is updated.

49. Product and Supply-Network Maintenance

Product and supply-source information should have an ownership and review process.

Review:

Product Status
Product Specifications
Supply Capability
Supply Relationships
Public Disclosure Permissions
Logos / Assets
Technical Documents

Expired or unapproved information should not remain publicly active indefinitely.

50. Production Ownership and Handoff

At project completion, the client should have appropriate ownership/control of:

Domain
DNS
Git Repository
Hosting
Database
Storage
Email
Analytics
Monitoring
Figma

The freelancer should provide the documentation necessary for another qualified developer to operate the system.

51. Production Documentation

The production handoff should include, as appropriate:

Architecture
Deployment Instructions
Environment Variables
Domain / DNS Configuration
Database
Backups
Storage
Email
Monitoring
Analytics
Security
Incident Response
Rollback
Maintenance
Third-Party Services
Ownership / Access

Secrets themselves should not be copied into general documentation.

52. Launch Readiness

Production should not launch until the project has sufficiently verified:

Business Accuracy
Design
Functionality
Responsive Behavior
RTL
Accessibility
SEO
Performance
Security
Infrastructure
Backups
Monitoring
Domain
Email
Critical Flows
Rollback

The exact release gate should follow the project QA checklist in Part 16.

53. Production Checklist
[ ] Official canonical domain approved
[ ] DNS configured
[ ] HTTPS active
[ ] Production environment isolated
[ ] Secrets securely configured
[ ] Production database configured
[ ] Storage configured securely
[ ] Email configured
[ ] SPF configured where applicable
[ ] DKIM configured where applicable
[ ] DMARC configured where applicable
[ ] Security headers reviewed
[ ] Authentication / authorization reviewed where applicable
[ ] File upload security reviewed
[ ] Rate limiting / anti-abuse controls reviewed where applicable
[ ] Backups configured
[ ] Restore process understood
[ ] Monitoring configured
[ ] Error reporting configured
[ ] Analytics configured without sensitive data
[ ] SEO production configuration verified
[ ] Production build validated
[ ] Critical flows tested
[ ] Arabic / RTL tested
[ ] Responsive behavior tested
[ ] Accessibility tested
[ ] Rollback path confirmed
[ ] Ownership/access documented
[ ] Required client approval obtained
54. Post-Launch Checklist

After launch:

[ ] Homepage verified
[ ] Navigation verified
[ ] Product pages verified
[ ] Verification page verified
[ ] Contact verified
[ ] Requirement submission verified
[ ] Email delivery verified
[ ] Database persistence verified
[ ] Upload behavior verified
[ ] English verified
[ ] Arabic verified
[ ] Mobile verified
[ ] Desktop verified
[ ] Monitoring active
[ ] Error reporting active
[ ] SEO indexing behavior checked
[ ] No critical production errors observed
55. Production Success Criteria

Production is considered healthy when:

Website Accessible
+
Critical Flows Functional
+
Business Information Accurate
+
Security Controls Active
+
Monitoring Working
+
Backups Available
+
Recovery Path Known
+
Client Ownership Established
56. Final Principle

Production is not the end of development.

It is the beginning of operating the website as a real business system.

The production lifecycle should therefore remain:

Secure
→ Deploy
→ Verify
→ Monitor
→ Maintain
→ Improve

The standard is:

Production should be controlled, observable, recoverable, and owned by the business it represents.


Recommended location:

```text
docs/01-strategy/17-deployment-security-and-production.md

This completes the logical chain with the previous files:

14 — AI Agent Architecture & Project Memory
        ↓
15 — Development Workflow & Delivery
        ↓
16 — QA, Testing & Visual Validation
        ↓
17 — Deployment, Security & Production