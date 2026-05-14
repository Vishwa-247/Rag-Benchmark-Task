# Content Filtering & Abuse Reporting System

## Overview

This document describes the comprehensive content filtering and abuse reporting system implemented for AdvocateKhoj, covering both the Sawaal Jawab (Q&A) and Case Post systems.

## Features

### 1. Auto Filter (Real-Time Blocking)

#### Profanity Detection

The system uses a sophisticated profanity filter that:

- **Multi-Language Support**: Detects offensive words in:

  - English (explicit profanity + variations)
  - Hindi (transliterated)
  - Regional languages (Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali, Punjabi)

- **Pattern Matching**:

  - Handles common substitutions (@→a, 1→i, 3→e, 0→o, $→s)
  - Detects leetspeak variations (f\*ck, f@ck, sh!t, etc.)
  - Regex-based detection with word boundaries
  - Handles spacing/special characters between letters

- **Severity Levels**:
  - **High**: Explicit profanity or controversial terms → BLOCKS submission
  - **Medium**: Multiple mild terms → Shows warning
  - **Low**: Minor issues → Shows gentle warning

#### Content Validation

Before any post/question is submitted:

1. Content is normalized (lowercase, special char removal)
2. Checked against profanity database
3. Severity is calculated
4. User receives immediate feedback
5. Submission is blocked if severity is HIGH

### 2. Report Abuse System

#### User Interface

Every post/question/comment includes a "Report Abuse" button that:

- Opens a modal dialog
- Presents predefined report reasons
- Allows optional detailed explanation
- Supports anonymous reporting
- Shows submission confirmation

#### Report Reasons

Users can report content for:

1. Offensive or abusive language
2. Spam or irrelevant content
3. Harassment or bullying
4. Misleading or false information
5. Inappropriate or explicit content
6. Copyright violation
7. Privacy violation
8. Other (with text explanation)

#### Report Processing

When a report is submitted:

1. **Record Creation**: Stored in database with:

   - Content ID and type
   - Reporter ID (or anonymous)
   - Reason and details
   - Timestamp
   - Status: pending/reviewed/resolved/dismissed

2. **Auto-Flagging**: Content with multiple reports (3+) is automatically:

   - Marked as "Flagged for Review"
   - Status changed to "under_review"
   - Hidden from public view (optional)

3. **Email Notification**: Moderators receive instant email alerts with:

   - Report details
   - Content excerpt
   - Reporter information
   - Direct link to review

4. **User Notification**: Reporter receives confirmation

## Implementation

### File Structure

\`\`\`
lib/
  content-filter.ts          # Profanity detection & validation
  moderation-api.ts          # API utilities for reporting

components/
  moderation/
    report-abuse-dialog.tsx  # Report dialog component

app/
  api/
    moderation/
      report-abuse/
        route.ts             # Submit report endpoint
      flagged-content/
        route.ts             # Fetch flagged content
      moderate-content/
        route.ts             # Moderate content (hide/remove/restore)
\`\`\`

### Usage Example

#### In Sawaal Jawab (Q&A)

\`\`\`tsx
import { validateContent } from "@/lib/content-filter";
import { ReportAbuseDialog } from "@/components/moderation/report-abuse-dialog";

// Before submission
const validation = validateContent(
  {
    title: questionData.title,
    description: questionData.description,
  },
  true
); // strict mode

if (!validation.isValid) {
  // Show error, block submission
  return;
}

// For reporting
<ReportAbuseDialog
  open={reportDialogOpen}
  onOpenChange={setReportDialogOpen}
  contentType="question"
  contentId={questionId}
/>;
\`\`\`

#### In Case Post System

\`\`\`tsx
import { validateContent } from "@/lib/content-filter";

const validation = validateContent(
  {
    title: formData.title,
    description: formData.description,
  },
  true
);

if (!validation.isValid) {
  setContentValidation(validation);
  return; // Block submission
}
\`\`\`

## API Endpoints

### POST /api/moderation/report-abuse

Submit an abuse report.

**Request Body:**

\`\`\`json
{
  "contentId": "123",
  "contentType": "question|answer|case|comment",
  "reason": "offensive_language",
  "details": "Optional explanation",
  "anonymous": false
}
\`\`\`

**Response:**

\`\`\`json
{
  "success": true,
  "reportId": "report_xyz",
  "message": "Report submitted successfully"
}
\`\`\`

### GET /api/moderation/flagged-content

Get flagged content for moderation (moderators only).

**Query Parameters:**

- `contentType`: Filter by type
- `status`: pending|under_review|resolved
- `limit`: Number of results
- `offset`: Pagination offset

### POST /api/moderation/moderate-content

Take moderation action (moderators only).

**Request Body:**

\`\`\`json
{
  "contentId": "123",
  "contentType": "question",
  "action": "hide|remove|restore",
  "moderatorId": "mod_456",
  "reason": "Contains offensive content"
}
\`\`\`

## Database Schema

### AbuseReports Table

\`\`\`sql
CREATE TABLE abuse_reports (
  id VARCHAR(255) PRIMARY KEY,
  content_id VARCHAR(255) NOT NULL,
  content_type VARCHAR(50) NOT NULL,
  reported_by VARCHAR(255),  -- NULL if anonymous
  reason VARCHAR(100) NOT NULL,
  details TEXT,
  timestamp TIMESTAMP NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  reviewed_by VARCHAR(255),
  review_notes TEXT,
  reviewed_at TIMESTAMP,
  INDEX idx_content (content_id, content_type),
  INDEX idx_status (status),
  INDEX idx_timestamp (timestamp)
);
\`\`\`

### FlaggedContent Table

\`\`\`sql
CREATE TABLE flagged_content (
  id VARCHAR(255) PRIMARY KEY,
  content_id VARCHAR(255) NOT NULL,
  content_type VARCHAR(50) NOT NULL,
  flag_count INT DEFAULT 0,
  status VARCHAR(50) DEFAULT 'active',
  auto_flagged BOOLEAN DEFAULT false,
  profanity_detected BOOLEAN DEFAULT false,
  flagged_at TIMESTAMP,
  INDEX idx_content (content_id, content_type),
  INDEX idx_status (status)
);
\`\`\`

### ModerationActions Table

\`\`\`sql
CREATE TABLE moderation_actions (
  id VARCHAR(255) PRIMARY KEY,
  content_id VARCHAR(255) NOT NULL,
  content_type VARCHAR(50) NOT NULL,
  action VARCHAR(50) NOT NULL,  -- hide, remove, restore
  moderator_id VARCHAR(255) NOT NULL,
  reason TEXT,
  timestamp TIMESTAMP NOT NULL,
  INDEX idx_content (content_id, content_type),
  INDEX idx_moderator (moderator_id)
);
\`\`\`

## Environment Variables

Add to `.env.local`:

\`\`\`env
# Moderator email addresses (comma-separated)
MODERATOR_EMAILS=moderator1@example.com,moderator2@example.com

# App URL for email links
NEXT_PUBLIC_APP_URL=https://advocatekhoj.com

# Email service configuration (example with Resend)
RESEND_API_KEY=re_your_api_key
\`\`\`

## Moderation Dashboard (Future Enhancement)

Create an admin panel at `/admin/moderation` with:

1. **Reports Queue**

   - List of pending reports
   - Filter by type, status, date
   - Quick actions: review, dismiss, escalate

2. **Flagged Content**

   - Content with multiple reports
   - Auto-flagged items
   - Profanity-detected content

3. **Moderation Actions**

   - Hide content (temporarily)
   - Remove content (permanently)
   - Restore content (if mistakenly removed)
   - Ban user (repeated violations)

4. **Statistics**
   - Reports per day/week/month
   - Most reported content types
   - Auto-flagged vs manual reports
   - Moderator activity

## Security Considerations

1. **False Positives**:

   - Legal terms might trigger filter (e.g., "assault", "murder" in legal context)
   - Use context-aware filtering
   - Allow moderator override

2. **Bypass Attempts**:

   - Filter handles common variations
   - Regex patterns catch spacing tricks
   - Leetspeak conversions

3. **Privacy**:

   - Anonymous reporting option
   - Don't expose reporter to content author
   - GDPR-compliant data handling

4. **Abuse of Report System**:
   - Track reporter history
   - Flag users with excessive false reports
   - Rate limiting on reports per user

## Testing

### Manual Testing

1. Try posting content with profanity → Should be blocked
2. Try variations (f\*ck, f@ck) → Should be caught
3. Submit abuse report → Should receive confirmation
4. Check moderator email → Should receive notification

### Unit Tests

\`\`\`typescript
import { containsProfanity, validateContent } from "@/lib/content-filter";

describe("Content Filter", () => {
  it("detects explicit profanity", () => {
    const result = containsProfanity("This is fucking terrible");
    expect(result.isProfane).toBe(true);
    expect(result.severity).toBe("high");
  });

  it("detects leetspeak variations", () => {
    const result = containsProfanity("f@ck this sh!t");
    expect(result.isProfane).toBe(true);
  });

  it("validates clean content", () => {
    const validation = validateContent({
      title: "Legal advice needed",
      description: "I need help with property dispute",
    });
    expect(validation.isValid).toBe(true);
  });
});
\`\`\`

## Future Enhancements

1. **AI-Based Detection**

   - Use ML models for context-aware filtering
   - Detect toxic language patterns
   - Multilingual sentiment analysis

2. **User Reputation System**

   - Trust scores based on history
   - Verified users bypass some checks
   - Automatic restrictions for repeat offenders

3. **Real-Time Moderation**

   - Live chat moderation
   - Auto-hide on multiple reports
   - Collaborative filtering

4. **Analytics Dashboard**
   - Trends in abuse reports
   - Content quality metrics
   - Moderator performance

## Support

For questions or issues with the moderation system:

- Technical: Contact development team
- Policy: Contact community guidelines team
- Urgent: Email moderators directly
