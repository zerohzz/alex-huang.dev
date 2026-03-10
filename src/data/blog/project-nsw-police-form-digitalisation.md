---
author: Alex Huang
pubDatetime: 2022-12-01T00:00:00Z
title: "Digitising NSW Police Force's Public Assembly Notice: LWC on Experience Cloud"
featured: false
draft: false
tags:
  - Project
  - LWC
  - Experience Cloud
  - Salesforce
  - Public Sector
  - Deloitte
description: "How I led the LWC development to digitalise the NSW Police Force's paper-based Public Assembly notice form into a Salesforce Experience Cloud community portal — deploying 180+ components end-to-end."
---


In late 2022 I joined Deloitte Digital's engagement with NSW Police Force as the lead developer on a digital transformation project. The challenge: replace a paper-based Public Assembly notice process with a self-service digital form embedded in the existing Salesforce Experience Cloud community portal.

## Background

Under NSW law, organisers of public assemblies are required to submit a Notice to Hold a Public Assembly to police. The existing process was paper-based — forms were submitted physically or by email, then manually keyed into Salesforce. This created delays, data entry errors, and no real-time tracking for either organisers or police.

Deloitte proposed an LWC-powered digital form within the existing Experience Cloud portal. The solution would capture structured user input, validate it client-side, and create custom Salesforce object records automatically.

## My Role

I came in as the main developer at the implementation phase. The first step was a thorough codebase review — the portal had existing LWC components including a Google reCAPTCHA integration and an Address Lookup service. Rather than rebuilding from scratch, I mapped the existing component interfaces and designed the form to compose these reusable pieces.

## Technical Implementation

The form itself is a multi-section LWC that guides the submitter through:

1. Organisation and contact details
2. Assembly location (with Address Lookup integration)
3. Date, time, and expected attendance
4. Route/path details for marches
5. Declaration and submission

**Address Lookup** was integrated by adapting the existing portal component. I mapped the API response fields to the form's Salesforce custom object schema, handling edge cases like partial addresses and international entries.

**Google reCAPTCHA** was wired in as a child component at the submission step. The Apex controller validates the reCAPTCHA token server-side before creating any records — preventing automated form submissions.

## Deployment

Change Set deployment for a portal project of this size is not trivial. I managed the process across feature branches and pull requests, coordinating with the project team to avoid conflicts during parallel development. We deployed **180+ metadata components** — LWC bundles, Apex classes, custom objects, validation rules, sharing rules, and Experience Cloud configuration — without a rollback event.

## Testing and Go-Live

I ran smoke and shakedown testing across the form's full submission path — happy path, validation failures, reCAPTCHA rejection, and partial submission recovery. On-site and remote demo workshops were held with NSW Police Force stakeholders before go-live.

## Results

The paper-based process was eliminated. Members of the public can now submit Public Assembly notices directly through the police community portal, with structured data landing in Salesforce automatically. Police administrators have a complete, searchable record of all submissions without manual data entry.

The engagement also reinforced how important it is to understand an existing codebase before building — reusing the portal's Address Lookup and reCAPTCHA components saved weeks of development and kept the solution consistent with the rest of the portal experience.
