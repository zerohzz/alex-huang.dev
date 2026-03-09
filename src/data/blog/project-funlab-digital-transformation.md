---
author: Alex Huang
pubDatetime: 2023-07-01T00:00:00Z
title: "Funlab's Salesforce Digital Transformation: From Go-Live to 200% Revenue Growth"
featured: false
draft: false
tags:
  - Project
  - LWC
  - Apex
  - Salesforce
  - SFMC
  - Funlab
description: "How I joined Funlab as sole in-house Salesforce developer, took full technical ownership of a live global platform, and built the LWC booking wizard that drove 200% online revenue growth."
---

| | |
|:--|:--|
| **Project** | Funlab Salesforce Digital Transformation |
| **Company** | Funlab |
| **Timeline** | Jul 2023 – Jan 2024 |
| **Role** | Senior Salesforce Engineer (Sole In-House) |
| **Stack** | LWC · Apex · SFMC · Stripe · AakPay · Azure DevOps |

---

When I joined Funlab in July 2023, the platform had just completed a major implementation and was weeks from go-live. I was the only in-house Salesforce developer. The consulting team that built the system was handing over. My job: absorb everything, keep the platform stable, and make it grow.

Over the following six months I managed knowledge transfer, coordinated go-live preparation, conducted end-to-end testing, and took full technical ownership post-launch across 60+ venues in AU, NZ, and US.

## The Platform

Funlab runs Strike Bowling, Holey Moley, and a portfolio of entertainment brands. The Salesforce implementation covers the full function booking lifecycle: venue availability queries, quoting, payment collection, document generation, and post-event follow-up.

Three clouds in play:
- **Sales Cloud** — Opportunities, Quotes, function bookings
- **Service Cloud** — case management, guest enquiries, payment disputes
- **Marketing Cloud** — confirmation emails, automated guest communications, upsell journeys

The integration surface was significant: Funhouse proprietary REST API (internal venue availability), AvaTax (US tax), Stripe and AakPay (payment links), and Conga Composer + Conga Sign (contracts and e-signature).

## The LWC Booking Wizard

The centrepiece of the platform is an **8-step Lightning Web Component wizard** — the primary interface for creating and editing function bookings across all brands and regions.

### Architecture

14+ sub-components, each responsible for a discrete step: venue selection, date/time, package configuration, guest details, pricing, payment, document generation, and confirmation. The parent orchestrator manages step navigation and aggregates the booking payload:

```javascript
// Parent orchestrator — step state and payload aggregation
@track currentStep = 1;
@track bookingPayload = {};

handleStepComplete(event) {
    const { step, data } = event.detail;
    this.bookingPayload = { ...this.bookingPayload, ...data };
    this.currentStep = step + 1;
}
```

No direct component-to-component coupling. Every data update flows through the orchestrator via custom events. This architecture made Jest unit testing tractable — each sub-component can be tested in isolation with a mocked parent.

### Real-Time API Integration

Every pricing step makes live callouts:
- **Funhouse API** — venue availability and capacity in real time
- **AvaTax** — US tax calculation via asynchronous Queueable Apex, results surfaced before the user proceeds to payment
- **Stripe / AakPay** — payment link generation at checkout step

Multi-region behaviour (AU vs NZ vs US) is driven by **Custom Metadata Types** — timezone handling, currency display, and tax logic all adapt per venue without conditional logic scattered through components.

## Salesforce Multi-Cloud Integration

Beyond the wizard, I integrated Sales, Service, and Marketing Clouds to create a unified guest experience:

- **Real-time booking sync** — confirmed bookings trigger SFMC Journey Builder to send personalised confirmation emails with booking details
- **Automated upsell recommendations** — post-booking journeys surface package upgrades and add-ons based on booking type and venue
- **Mobile-optimised checkout flows** — payment confirmation and receipt delivery optimised for mobile guest experience

This consolidation produced a 69% increase in online conversion rates as the guest journey became seamless across channels.

## Payment Stabilisation

The first weeks post-go-live surfaced several revenue-critical payment issues I resolved under live production pressure:

- **Business-day deposit calculations** — due-date logic was miscalculating across weekends and public holidays; rewrote using a Custom Metadata-driven holiday calendar
- **Stripe payment link generation** — intermittent failures on certain booking types traced to payload validation gaps in the Apex callout handler
- **Payment reminder Batch Apex** — timing logic wasn't correctly scoping AU vs NZ records; added explicit region filters and corrected the cron schedule

## CI/CD and Release Management

All changes flow through an **Azure DevOps YAML pipeline** using SFDX Git Delta — only changed components deploy per sprint, keeping deployment times fast across a large org metadata footprint.

Fortnightly release cadence. ~109 deployment commits over 26 months. Every release coordinated with QA validation in sandbox before promotion to UAT and Prod.

## Results

- **200% online revenue growth** — the booking wizard is the primary revenue interface across all brands and regions
- **69% increase in online conversion rates** — Multi-Cloud integration and streamlined checkout flows
- Platform stable across 60+ venues, 3 regions, and multiple payment providers
- Knowledge successfully transferred and documented; new team members onboarded 40% faster with authored Apex Script Repository and developer guides
