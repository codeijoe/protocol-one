# Protocol One: The Silent Swallow

> **Mission ID:** P-ONE
> **Difficulty:** Level 2 (Debugging)
> **Context:** Financial Core / Payment Gateway

## The Mission
We are losing money. Customers are reporting failed transactions (items not received), but our system logs show **100% Success Rate**.

Your job is to find the "Ghost Bug" in `src/payment.js` and fix the architectural flaw.

## Business Rules
1. **Transaction Integrity:** If a payment fails for ANY reason (insufficient funds, invalid data, network error), the system **MUST throw an error**.
2. **No False Positives:** Never return `success: true` if the balance was not actually deducted.
3. **Transparency:** Errors must be surfaced, not hidden.

## The Clue
* "Silence is not gold. Silence is a missing stack trace."

## Instructions
1. Fork & Clone.
2. `npm install`
3. `npm test` (Observe the failure: Expecting Error, but got Success).
4. Fix `src/payment.js`.
5. Submit PR with Liability Waiver.
