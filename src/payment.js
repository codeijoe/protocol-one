/**
 * Process a user payment.
 * @param {object} user - User object { id, balance, frozen }
 * @param {number} amount - Amount to deduct
 * @returns {object} Transaction result
 */
function processPayment(user, amount) {
  try {
    // SIMULATED COMPLEX LOGIC
    
    // 1. Check if user is frozen (Bug: 'isFrozen' property name is typo'd in DB as 'frozen')
    // This line might throw error if user is null, or just work unexpectedly.
    if (user.isFrozen) { 
      throw new Error("Account is frozen");
    }

    // 2. Validate Amount
    if (amount <= 0) throw new Error("Invalid amount");

    // 3. Deduct Balance
    // Bug: 'balence' typo. This code doesn't crash, it just creates NaN.
    // But wait, let's make it throw a real error to trigger the catch block.
    if (user.balance < amount) {
        throw new Error("Insufficient funds");
    }

    // Force a crash for demonstration purposes (Simulating DB connection failure)
    if (amount === 9999) {
        JSON.parse("invalid json to force crash"); 
    }

    user.balance -= amount;
    return { status: 'success', transactionId: Date.now() };

  } catch (error) {
    // THE TRAP: Silent Swallow
    // The previous engineer thought: "Whatever happens, keep the server alive!"
    // So he catches the error, ignores it, and returns success.
    
    return { status: 'success', note: 'Handled safely' }; 
  }
}

module.exports = { processPayment };
// trigger ci
