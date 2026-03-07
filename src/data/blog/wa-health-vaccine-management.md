---
author: Alex Huang
pubDatetime: 2022-01-15T00:00:00Z
title: "WA Health Vaccine Management: Cutting User Provisioning from 23 Minutes to 3"
featured: false
draft: false
tags:
  - Apex
  - Flows
  - Salesforce
  - Healthcare
  - Deloitte
description: "How I helped build WA Health's COVID-19 Vaccine Management System on Salesforce — including an automation that cut user provisioning time from 23 minutes to 3 minutes per account."
---

In early 2022, Deloitte Digital was engaged by the Western Australian Department of Health to deliver a Vaccine Management System (VMS) on Salesforce. The system needed to manage COVID-19 vaccination inventory distribution, a vaccinator portal, and a vaccine recipient portal — at scale, across a state-wide immunisation program.

## My Role

I was placed in the CI/CD stream of the project — a technically demanding role that required participating across both the functional and development tracks simultaneously. My work spanned Salesforce configuration, Apex development, Flow design, and DevOps, with direct client communication throughout.

## The User Provisioning Problem

The VMS had a significant operational challenge: onboarding healthcare workers as Salesforce users required a 23-step manual process that took an administrator approximately 23 minutes per account. With hundreds of vaccinators needing access, this was a serious bottleneck.

I designed and built an automated User Provisioning solution using Salesforce Flows and Apex that collapsed this to **3 minutes per user account** — an 87% reduction in manual effort.

The solution involved:

- A **Screen Flow** walking admins through the required inputs with validation
- An **Apex Email Service** handler that processed provisioning requests submitted via email — a key channel for site administrators in remote vaccination locations who couldn't always access the portal directly
- **Permission Set Groups** configured to package the correct access profiles for each role type (vaccinator, site manager, inventory clerk), applied automatically on provisioning completion

```apex
// Email Service handler — triggered when provisioning request email arrives
global class UserProvisioningEmailHandler implements Messaging.InboundEmailHandler {
    global Messaging.InboundEmailResult handleInboundEmail(
        Messaging.InboundEmail email,
        Messaging.InboundEnvelope envelope
    ) {
        // Parse provisioning request from email body
        // Trigger provisioning Flow via Flow.Interview
        // Send confirmation back to requestor
    }
}
```

## Flow Development

I designed and built **7 Flows** across the project for distinct features:

- User Provisioning (Screen Flow)
- Inventory allocation triggers (Record-Triggered Flows)
- Appointment reminder sequences
- Cancellation and rescheduling logic
- Permission management automations

Each flow was documented and peer-reviewed before deployment, with test cases maintained in the project's Deployment Package.

## DevOps and Client Communication

Working in the CI/CD stream meant maintaining feature branches and pull requests across a team with parallel development tracks. I managed merge conflicts and defect resolution across sprint cycles, and prepared solution design diagrams and client-facing decks for workshop presentations and playback sessions.

## Testing

I created and executed test cases against all VMS user stories, covering Salesforce configuration, third-party app integration, and data handling. Defects were triaged in collaboration with client BAs and the offshore development team.

## Results

- **User provisioning: 23 minutes → 3 minutes** per user account
- **7 Flows** delivering automation across the vaccination program
- Full CI/CD delivery with managed deployment packages
- Client workshops and playback sessions delivered throughout

The WA Health VMS engagement was one of the more technically varied projects I've worked on at Deloitte — spanning Apex, Flow, DevOps, and direct client delivery in a high-stakes public health context. The user provisioning automation in particular showed how targeted automation design can create immediate, measurable operational impact.
