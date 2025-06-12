# Test Strategy for QA Login Tests

## Introduction
This document outlines the testing approach for the QA Login Tests project.

## Objectives
- Authentication
- Ensure the login functionality works successfully.
- Error Handling and Error Message Validation.
- Positive and Negative Login Scenarios
- Input Validation.

## Test Types
- Functional - automated
- UI Testing - manual
- Negative Testing - automated
- Regression - automated

## Out of Scope
- Authorization

## Tools
- Cypress for end-to-end testing.
- GitHub for version control
- TestRail for manual test management
- Jira for defect tracking

## Test Environment
- Browser: Chrome
- OS: macOS Ventura
- Staging: https://backpack-staging.fluencyinc.co/login/

## Risks
- Browser compatibility issues.
- Network latency affecting test execution.

## Data Strategy Consideration
- pre-created test account credentials can also be stored in Key Vault, in .env file, and passed in via Cypress cy.env()

## Deliverables
- Test reports
- Bug reports
