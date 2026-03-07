---
author: Alex Huang
pubDatetime: 2024-01-15T00:00:00Z
title: "Greenfield US Tax Compliance: Integrating AvaTax with Salesforce Apex"
featured: false
draft: false
tags:
  - Apex
  - AvaTax
  - Salesforce
  - Integration
  - Fun Lab
description: "How I delivered a greenfield US tax compliance solution using asynchronous Apex and the AvaTax API — enabling compliant invoicing for 8 US venues from day one of go-live."
---

Fun Lab's US expansion brought a challenge I hadn't encountered before: sales tax. In Australia and New Zealand, GST is straightforward — a single flat rate applied at the national level. In the United States, sales tax is a patchwork of state, county, city, and district rates that vary by product type, venue location, and customer tax-exempt status.

When the business asked me to bring 8 US venues live on Salesforce, compliant invoicing couldn't be an afterthought. I designed and built the entire solution from scratch.

## Why AvaTax

Avalara's AvaTax API is the industry standard for automated US sales tax calculation. Rather than attempting to maintain a tax rate database in-house (a maintenance nightmare), AvaTax accepts a transaction payload — line items, quantities, venue address, customer tax-exempt status — and returns precise tax calculations per line, per jurisdiction.

## The Approach: Asynchronous Apex

Tax calculations happen during the booking process, not at invoice generation. The challenge: AvaTax API calls have latency, and Apex has strict governor limits on synchronous callouts triggered from Flow or trigger contexts.

I implemented the tax calculation as a **Queueable Apex** job:

```apex
public class AvaTaxCalculationQueueable implements Queueable, Database.AllowsCallouts {
    private Id opportunityId;

    public AvaTaxCalculationQueueable(Id oppId) {
        this.opportunityId = oppId;
    }

    public void execute(QueueableContext context) {
        // Fetch OLIs, build AvaTax transaction payload
        // Make callout, parse response
        // Update OLIs with calculated tax amounts
    }
}
```

The queue job is triggered whenever an Opportunity Line Item changes — price adjustments, service charge recalculations, or tax-exempt status updates all kick off a fresh calculation. A 20% service charge applied automatically on certain booking types recalculates correctly at the OLI level, with tax computed on the post-charge amount.

## Tax-Exempt Handling

Some US clients are tax-exempt (non-profits, government entities). The solution handles zero-out logic — when a booking is marked tax-exempt, the system sends the exemption certificate details to AvaTax and zeros out all calculated tax fields, then regenerates the Conga Composer quote document. This was a key requirement for certain corporate clients.

## Real-Time Readiness LWC

I also built a companion LWC component that displays the AvaTax connection status in real time — green if the integration is live, amber if configuration is incomplete, red if the callout fails. This gives internal admins immediate visibility rather than discovering tax calculation failures after a booking is confirmed.

## Results

From day one of US go-live, all 8 venues produced tax-compliant invoices. No manual calculation workarounds, no post-hoc corrections. The system handles:

- Automatic tax calculation on all US OLI changes
- 20% service charge recalculation with correct tax application
- Tax-exempt zeroing with documentation audit trail
- Real-time AvaTax readiness indicator for admins
- Conga document generation that reflects accurate tax line items

The AvaTax integration has run reliably through every fortnightly release cycle since launch, and has been extended to accommodate new US venues without architectural changes.
