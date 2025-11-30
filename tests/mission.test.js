const { processPayment } = require('../src/payment');

describe('Protocol One: Error Handling Gates', () => {

  test('Gate 1: Normal Transaction', () => {
    const user = { id: 1, balance: 100 };
    const result = processPayment(user, 50);
    expect(result.status).toBe('success');
    expect(user.balance).toBe(50);
  });

  test('Gate 2: Insufficient Funds (Must Throw)', () => {
    const user = { id: 2, balance: 10 };
    // Trap: The current code returns 'success' even if balance is low!
    // The test expects the function to THROW an error.
    expect(() => {
        processPayment(user, 50);
    }).toThrow("Insufficient funds");
  });

  test('Gate 3: System Crash / Unexpected Error (Must Throw)', () => {
    const user = { id: 3, balance: 100000 };
    // Amount 9999 triggers a forced JSON parse error in the code
    expect(() => {
        processPayment(user, 9999);
    }).toThrow();
  });

});
