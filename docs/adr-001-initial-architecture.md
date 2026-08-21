# ADR-001: Initial Application Architecture

Status: Accepted

## Decision

Car Solutions will begin as a modular monolith built with Next.js and
TypeScript. PostgreSQL will be the primary database.

## Reasons

- One language can be used across frontend and backend.
- Next.js supports SEO-friendly server rendering.
- A single application is easier for a beginner to build and deploy.
- PostgreSQL provides reliable transactions and data integrity.
- Clear business modules allow future services to be extracted.

## Deferred decisions

- Authentication provider
- Pakistani payment provider
- Courier integrations
- Production hosting provider
- Dedicated search engine