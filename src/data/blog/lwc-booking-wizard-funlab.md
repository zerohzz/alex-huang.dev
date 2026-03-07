---
author: Alex Huang
pubDatetime: 2023-12-01T00:00:00Z
title: "Building an 8-Step Enterprise Booking Wizard in Salesforce LWC"
featured: true
draft: false
tags:
  - LWC
  - Apex
  - Salesforce
  - REST API
  - Fun Lab
description: "How I architected and built a complex 8-step Lightning Web Component booking wizard — the core revenue interface for a global entertainment company spanning 60+ venues across AU, NZ, and the US."
---

When I joined Fun Lab as the sole in-house Salesforce developer, one of the first major challenges was the function booking workflow. Sales staff were juggling multiple screens, manually cross-referencing availability, pricing, and payment status. The business needed a single, guided interface to create and manage function bookings for all brands — Strike Bowling, Holey Moley, and others — across AU, NZ, and the US.

## The Problem

Fun Lab's Salesforce org had grown organically. Booking a function involved navigating across Opportunities, custom objects, and external systems without any structured flow. Errors were common, and training new staff took weeks. With 60+ venues and growing US expansion, the process wasn't going to scale.

## The Architecture

I designed an **8-step Lightning Web Component wizard** as the primary interface for function creation and editing. The key design decisions:

- **14+ sub-components** — each step of the wizard is a discrete LWC component with its own state, validation, and API interaction. The parent orchestrator manages step navigation and aggregates the booking payload.
- **Real-time API integration** — every step that touches pricing, availability, or payments makes live API calls rather than relying on stale cached data. This meant integrating with the Funhouse proprietary REST API (internal venue availability), AvaTax (US tax calculations), and Stripe/AAkPay (payment link generation).
- **Multi-region support** — the same wizard handles AU, NZ, and US bookings. Timezone handling, currency display, and tax logic all adapt based on the venue's region, driven by Custom Metadata Types.

## Technical Implementation

```javascript
// Parent orchestrator manages step state and coordinates sub-components
@track currentStep = 1;
@track bookingPayload = {};

handleStepComplete(event) {
    const { step, data } = event.detail;
    this.bookingPayload = { ...this.bookingPayload, ...data };
    this.currentStep = step + 1;
}
```

Each sub-component communicates upward via custom events. No direct component-to-component coupling — every piece of data flows through the orchestrator. This made testing with Jest significantly easier since each sub-component can be tested in isolation.

For US venues, pricing steps invoke an Apex controller that queues an asynchronous AvaTax tax calculation — the result is returned and displayed before the user proceeds to payment.

## CI/CD and Release Management

The wizard lives across 14 metadata components (LWC bundles, Apex classes, Custom Metadata). All changes flow through an Azure DevOps YAML pipeline using SFDX Git Delta, deploying only the changed components on each fortnightly sprint cycle. This keeps deployment times fast even as the org's metadata footprint grows.

## Results

The booking wizard is now the primary revenue interface across all brands and regions. Sales staff follow a structured path with validation at each step, reducing booking errors significantly. The US rollout — which previously required manual tax calculation workarounds — is now fully automated through AvaTax integration.

Over 26 months I've maintained and extended the wizard while resolving 171+ service requests across the full platform. The architecture has held up: new regions, new payment methods, and new tax rules have all been added without structural changes to the wizard itself.
