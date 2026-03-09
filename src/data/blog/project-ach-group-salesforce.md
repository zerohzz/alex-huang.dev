---
author: Alex Huang
pubDatetime: 2021-06-01T00:00:00Z
title: "ACH Group Salesforce Implementation: Full Lifecycle Delivery in Aged Care"
featured: false
draft: false
tags:
  - Project
  - Salesforce
  - Data Migration
  - Aged Care
  - Deloitte
  - BA
description: "My experience on the full lifecycle ACH Group Salesforce implementation at Deloitte — from mobilisation and requirements through data migration, system testing, and go-live support in a regulated aged care environment."
---

| | |
|:--|:--|
| **Project** | ACH Group — Salesforce Implementation |
| **Company** | Deloitte Digital (Client: ACH Group) |
| **Timeline** | Jun 2021 – Nov 2021 |
| **Role** | Salesforce Consultant (BA & Technical) |
| **Stack** | Salesforce · Flows · Salesforce Data Loader · System Testing |

---

The ACH Group engagement at Deloitte was my first full-lifecycle Salesforce project — involved from Mobilisation and Scope Definition through to Go-Live support. ACH Group is a South Australian aged care and social services provider, and the project replaced a legacy system with a Salesforce-based platform for managing client services, referrals, and care coordination.

Working in aged care adds a layer of rigour: data accuracy, process fidelity, and stakeholder confidence matter more when the end users are care coordinators and the records relate to vulnerable clients.

## Mobilisation and Requirements

My involvement started at Mobilisation — working alongside BAs, solution architects, and the client delivery team to scope the implementation and establish working assumptions.

I facilitated **client workshops** with ACH Group stakeholders to surface their current-state processes and map them to Salesforce capabilities. Each workshop produced a business process map that became the foundation for user story authoring.

Outputs:
- Business process maps for core service delivery workflows
- User stories with acceptance criteria drafted collaboratively with BAs and signed off by client stakeholders
- Traceability back from user stories to original business requirements

This grounding in requirements — not just technical delivery — shaped how I approached testing and defect triage later in the project.

## Data Migration

Migrating data from a legacy system is rarely clean. Client records, service history, referral data, and care plans all needed to be extracted, validated, transformed, and loaded into Salesforce.

I used **Salesforce Data Loader** as the primary migration tool, working through:

1. **Data profiling** — understanding the legacy data model and identifying quality issues (nulls, invalid formats, duplicate records)
2. **Transformation mapping** — mapping legacy fields to Salesforce objects and fields, with transformation rules documented for audit
3. **Import execution** — loading records in dependency order (accounts before contacts, contacts before cases)
4. **Migration reporting** — success/failure counts, error logs reviewed and reconciled with the client before sign-off

Data quality issues surfaced during profiling were raised with the client early — avoiding surprises at go-live and ensuring the migration result matched expectations.

## System Testing and Defect Triage

I performed **System Testing (ST)** and **System Integration Testing (SIT)** across all Salesforce-related user stories, covering:

- Technical implementation (Apex, Flows, custom objects)
- Third-party app integration (external service providers connected to the platform)
- Data migration validation (migrated records displaying correctly in the new system)

Defects were logged, triaged, and coordinated for resolution with:
- Client BAs and testers (business process defects)
- The offshore development team (technical defects)
- Third-party vendors (integration defects)

Defect triage in a regulated environment requires care — distinguishing between a defect in the system vs a gap in the requirements vs a training issue takes experience and close collaboration with stakeholders.

## Go-Live and Post-Launch Support

After UAT sign-off and go-live preparation, I supported the transition through go-live — monitoring the system during initial live usage, triaging urgent issues, and coordinating rapid resolution where needed.

The engagement closed with knowledge transfer documentation ensuring the ACH Group internal team and ongoing support function could maintain the platform independently.

## Reflections

The ACH Group project reinforced that Salesforce delivery isn't just about writing Apex. Understanding the business domain, facilitating productive workshops, translating ambiguous requirements into testable user stories, and executing a clean data migration are all as important as the technical implementation — especially in a regulated sector where errors have real consequences for real people.

This full-lifecycle exposure informed how I approach every engagement since: starting with requirements clarity, maintaining traceability throughout, and never treating testing as an afterthought.
