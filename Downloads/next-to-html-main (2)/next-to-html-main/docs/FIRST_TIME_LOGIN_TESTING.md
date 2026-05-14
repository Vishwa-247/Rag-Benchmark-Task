# First-Time Login Testing Guide

## Overview

The first-time login password reset feature has been implemented for advocates. When an advocate logs in for the first time with an admin-generated password, they will be prompted to:

1. Change their password
2. Set up a password recovery question

## How to Test

### Option 1: Simulate First-Time Login (Recommended for Testing)

Open your browser console and run:

\`\`\`javascript
localStorage.setItem("advocate_first_login", "true");
localStorage.removeItem("advocate_password_changed");
\`\`\`

Then refresh the advocate dashboard page. The password reset dialog will appear.

### Option 2: Clear All Data (Fresh User)

Open your browser console and run:

\`\`\`javascript
localStorage.clear();
\`\`\`

Then refresh the advocate dashboard page. The dialog will appear for new users.

### Option 3: Reset After Password Change

If you've already completed the password reset, you can test again by running:

\`\`\`javascript
localStorage.setItem("advocate_first_login", "true");
localStorage.setItem("advocate_password_changed", "false");
\`\`\`

Then refresh the page.

## Features of the Password Reset Dialog

### Security Features:

- **Cannot be dismissed**: User must complete password reset before accessing dashboard
- **Password strength indicator**: Real-time feedback on password security
  - Weak (red): Score 0-1
  - Medium (orange): Score 2-3
  - Strong (green): Score 4-5
- **Password matching validation**: Confirms both password fields match
- **Minimum requirements**: 8 characters minimum

### Password Strength Criteria:

- Length ≥ 8 characters (+1 point)
- Length ≥ 12 characters (+1 point)
- Contains both uppercase AND lowercase letters (+1 point)
- Contains at least one number (+1 point)
- Contains special characters (+1 point)

### Recovery Question Setup:

8 predefined security questions:

1. What is your mother's maiden name?
2. What was the name of your first pet?
3. What city were you born in?
4. What is your favorite book?
5. What was your childhood nickname?
6. What is the name of your elementary school?
7. What is your favorite food?
8. What was the make of your first car?

## Form Validation

The dialog validates:

- ✅ All fields are required
- ✅ New password must be at least 8 characters
- ✅ New password must match confirmation
- ✅ New password must be different from current password
- ✅ Password strength must be at least "Medium" (score ≥ 2)

## Backend Integration (TODO)

Currently, the password reset is mocked. To integrate with your backend:

1. Open `/components/advocate/first-time-login-dialog.tsx`
2. Find the `handleSubmit` function (around line 117)
3. Uncomment the API call code:

\`\`\`typescript
const response = await fetch("/api/advocate/reset-password", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    currentPassword,
    newPassword,
    recoveryQuestion,
    recoveryAnswer,
  }),
});

if (!response.ok) {
  const data = await response.json();
  setError(data.message || "Failed to reset password");
  return;
}
\`\`\`

4. Create the API endpoint at `/app/api/advocate/reset-password/route.ts`

## Expected API Endpoint

**POST** `/api/advocate/reset-password`

**Request Body:**

\`\`\`json
{
  "currentPassword": "admin123",
  "newPassword": "MySecure@Pass123",
  "recoveryQuestion": "What is your mother's maiden name?",
  "recoveryAnswer": "Smith"
}
\`\`\`

**Success Response (200):**

\`\`\`json
{
  "success": true,
  "message": "Password reset successfully"
}
\`\`\`

**Error Response (400/401):**

\`\`\`json
{
  "success": false,
  "message": "Current password is incorrect"
}
\`\`\`

## After Successful Reset

Once the password is reset:

- Dialog closes automatically
- localStorage flags are updated:
  - `advocate_first_login` → "false"
  - `advocate_password_changed` → "true"
- An alert shows: "Password reset successful! You can now use your new password to log in."
- User can access the dashboard normally

## Membership Page Features

The membership page now includes 3 tabs:

### 1. Current Membership Tab

- Shows active membership details
- Plan name and status badge
- Start date and expiry date
- Days remaining countdown (with visual indicator)
- Auto-renewal status
- Buttons to upgrade plan or manage auto-renewal

### 2. Order History Tab

- Lists all past membership purchases
- Each order shows:
  - Order ID
  - Purchase date
  - Plan name and duration
  - Amount paid
  - Payment method
  - Status badge
  - Download Invoice button
  - View Details button

### 3. Upgrade Plan Tab

- Shows available membership plans
- Payment form for purchasing new membership
- Same as the original membership page content

## Notes

- The password reset dialog appears only once per session after password change
- Mock data is used for membership details and order history
- Replace with actual API calls when backend is ready
