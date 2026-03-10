---
author: Alex Huang
pubDatetime: 2024-06-01T00:00:00Z
title: "Expanding to the US: Salesforce Technical Delivery for Funlab's American Launch"
featured: true
draft: false
tags:
  - Project
  - Apex
  - AvaTax
  - Salesforce
  - Multi-Region
  - Funlab
description: "How I led the end-to-end Salesforce technical delivery for Funlab's US market expansion — bringing 8 US venues live with full tax compliance, multi-currency configuration, and region-specific automation from day one."
---


When Funlab decided to expand into the United States, the Salesforce platform needed to be ready before the first US venue opened its doors. That meant US tax compliance, multi-currency payment flows, region-specific automation, and production-grade resilience — all delivered greenfield, alongside a live AU/NZ platform that couldn't have its existing workflows disrupted.

I led the full technical delivery across an 18-month programme, from architecture to stabilisation.

## The Challenge

The US is categorically different from AU/NZ from a Salesforce perspective:

- **Sales tax** is a per-state, per-jurisdiction patchwork — nothing like AU's flat GST
- **Payment flows** needed US-specific surcharge logic and deposit timing rules
- **Document generation** (Conga Composer) had to reflect accurate tax line items from day one
- **Routing logic** for cases, refunds, and leads needed US queues and Typeform-to-Salesforce lead routing
- **Date and timezone handling** needed region-aware correction across all automation

None of this could break the existing AU/NZ platform.

## US Tax Compliance: AvaTax Multi-Company Setup

The centrepiece of the US build was an AvaTax integration covering all 8 US venues as separate tax entities (Multi-Company States configuration). Each venue has its own AvaTax company code, address, and tax profile.

Tax calculations run asynchronously via **Queueable Apex** — triggered on Opportunity Line Item changes, service charge recalculations, or tax-exempt status updates.

The 20% service charge — applied automatically on certain booking types — recalculates correctly at the OLI level, with tax computed on the post-charge amount. Tax-exempt bookings zero out all tax fields and flag the exemption certificate for audit.

## Payment & Document Workflows

US payment automation required dedicated engineering:

- **Deposit due/paid triggers** — US-specific timing rules with business-day awareness distinct from AU/NZ
- **Finals & Deposit Due automation** — US-only batch logic for deposit reminders at configured lead times
- **Online/IVR surcharge calculation** — different surcharge rules per payment channel
- **Payment reminder Batch Apex** — timing cadence per region, ensuring US venues triggered on US schedules without interfering with AU/NZ reminders

Document generation (Conga) required careful sequencing — Conga jobs needed to wait for AvaTax calculations to complete before generating invoices, otherwise tax line items would be stale.

## Production Stabilisation: The Hard Problems

The US go-live surface area was large, and several complex production defects emerged under load:

**UNABLE_TO_LOCK_ROW concurrency failures** — AvaTax Queueable jobs were firing simultaneously on the same Opportunity from multiple triggers, causing row-lock contention. Resolution: implemented a queue guard using a custom object to serialise jobs per Opportunity.

**Tax recalculation double-firing** — a trigger/flow overlap caused the Queueable to enqueue twice on certain OLI changes. Resolved by adding an idempotency check and consolidating the trigger entry point.

**Governor Limit breaches on Quote finalisation** — the US finalisation process called more SOQL queries than anticipated due to multi-company AvaTax lookups. Resolved by bulkifying the query chain and caching Custom Metadata lookups.

**Cross-region Batch Apex misalignment** — existing AU/NZ payment reminder jobs were inadvertently picking up US records due to missing region filters. Added explicit `Region__c` filters to all batch scope queries.

## Multi-Region Configuration

Beyond code, the US launch required precise configuration:

- US date format (`MM/DD/YYYY`) across all UI components and document templates
- Arrival time timezone correction for US Eastern, Central, Mountain, Pacific zones
- Region-specific page layouts with US-only fields hidden from AU/NZ users
- US-only payment detail sections on Opportunity and Quote layouts
- Queue routing for US cases, refunds, and leads with dedicated US support queues
- Typeform-to-Salesforce lead routing for US venues via custom Typeform webhooks mapped to US lead queues

## Results

- 8 US venues live with full tax compliance from day one — no manual calculation workarounds
- US-compliant Conga invoices and contracts generating correctly across all venue types
- Payment automation running independently of AU/NZ cadence without interference
- All critical US production defects resolved before sustained trading volume

The US expansion extended the platform's reach without requiring architectural changes to the existing AU/NZ booking engine — a validation of the multi-region design decisions made at go-live.
