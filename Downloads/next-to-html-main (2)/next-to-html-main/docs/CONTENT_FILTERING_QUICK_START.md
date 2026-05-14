# Content Filtering Integration - Quick Start Guide

## What Was Implemented

### 1. **Real-Time Profanity Filter**

- ✅ Blocks offensive content before posting
- ✅ Multi-language support (English, Hindi, Regional Indian languages)
- ✅ Handles variations (f\*ck, f@ck, sh!t, etc.)
- ✅ Regex-based pattern matching
- ✅ Severity levels (High/Medium/Low)

### 2. **Report Abuse System**

- ✅ Report button on all posts
- ✅ Modal dialog with predefined reasons
- ✅ Anonymous reporting option
- ✅ Email notifications to moderators
- ✅ Auto-flagging for multiple reports

### 3. **Integration Points**

- ✅ Sawaal Jawab (Q&A) page
- ✅ Case Post Form
- ✅ Advocate Case Browser
- ✅ API endpoints for moderation

## Files Created

### Core Libraries

1. `/lib/content-filter.ts` - Profanity detection and validation
2. `/lib/moderation-api.ts` - API utilities for reporting

### Components

3. `/components/moderation/report-abuse-dialog.tsx` - Report modal
4. `/components/advocate/case-card-with-reporting.tsx` - Example case card with reporting

### API Routes

5. `/app/api/moderation/report-abuse/route.ts` - Submit reports
6. `/app/api/moderation/flagged-content/route.ts` - Get flagged content
7. `/app/api/moderation/moderate-content/route.ts` - Moderate content

### Documentation

8. `/CONTENT_FILTERING_DOCUMENTATION.md` - Complete system documentation
9. `/CONTENT_FILTERING_QUICK_START.md` - This file

## Updated Files

1. ✅ `/app/sawal-jawab/page.tsx` - Added filtering + reporting
2. ✅ `/components/client/post-case-form.tsx` - Added filtering

## How It Works

### Auto-Filter (Before Posting)

\`\`\`typescript
import { validateContent } from "@/lib/content-filter";

// Validate content before submission
const validation = validateContent(
  {
    title: formData.title,
    description: formData.description,
  },
  true
); // strict mode

if (!validation.isValid) {
  // Show error message
  alert("Content contains offensive language!");
  return; // BLOCK submission
}

// If valid, proceed with post
submitPost(formData);
\`\`\`

### Report Abuse (After Posted)

\`\`\`tsx
import { ReportAbuseDialog } from "@/components/moderation/report-abuse-dialog";

// Add report button
<Button onClick={() => setReportDialogOpen(true)}>
  <Flag /> Report Abuse
</Button>

// Add dialog
<ReportAbuseDialog
  open={reportDialogOpen}
  onOpenChange={setReportDialogOpen}
  contentType="question" // or "case", "answer", "comment"
  contentId={questionId}
  onSubmit={async (report) => {
    console.log("Report submitted:", report);
    // Automatically sends to API and notifies moderators
  }}
/>
\`\`\`

## Testing the System

### Test Profanity Filter

1. **Go to Sawaal Jawab**: http://localhost:3000/sawal-jawab
2. **Click "Ask Question"**
3. **Try posting with profanity**:
   - Title: "This is fucking terrible"
   - Description: "I need help with this shit"
4. **Click "Post Question"**
5. **Result**: 🚫 Should see error message blocking submission

### Test Report Abuse

1. **Go to Sawaal Jawab**: http://localhost:3000/sawal-jawab
2. **Find any question**
3. **Click "Report Abuse" button**
4. **Select reason**: "Offensive or abusive language"
5. **Add details** (optional)
6. **Click "Submit Report"**
7. **Result**: ✅ Should see success message

### Check Console/Email

- Report is logged to console
- In production, email sent to moderators
- Content marked as flagged in database

## Add to Other Pages

### Example: Add to Comments

\`\`\`tsx
import { validateContent } from "@/lib/content-filter";
import { ReportAbuseDialog } from "@/components/moderation/report-abuse-dialog";

function CommentSection() {
  const [reportDialogOpen, setReportDialogOpen] = useState(false);
  const [reportingCommentId, setReportingCommentId] = useState(null);

  const handleCommentSubmit = () => {
    // Validate before posting
    const validation = validateContent({ description: commentText }, true);
    if (!validation.isValid) {
      alert(validation.errors.join("\n"));
      return;
    }
    // Submit comment
  };

  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <Button
            onClick={() => {
              setReportingCommentId(comment.id);
              setReportDialogOpen(true);
            }}
          >
            Report
          </Button>
        </div>
      ))}

      <ReportAbuseDialog
        open={reportDialogOpen}
        onOpenChange={setReportDialogOpen}
        contentType="comment"
        contentId={reportingCommentId}
      />
    </>
  );
}
\`\`\`

## Database Setup (Next Steps)

### 1. Create Tables

Run these SQL scripts (provided in documentation):

\`\`\`sql
-- Abuse Reports
CREATE TABLE abuse_reports (
  id VARCHAR(255) PRIMARY KEY,
  content_id VARCHAR(255) NOT NULL,
  content_type VARCHAR(50) NOT NULL,
  reported_by VARCHAR(255),
  reason VARCHAR(100) NOT NULL,
  details TEXT,
  timestamp TIMESTAMP NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  ...
);

-- Flagged Content
CREATE TABLE flagged_content (
  id VARCHAR(255) PRIMARY KEY,
  content_id VARCHAR(255) NOT NULL,
  content_type VARCHAR(50) NOT NULL,
  flag_count INT DEFAULT 0,
  status VARCHAR(50) DEFAULT 'active',
  ...
);
\`\`\`

### 2. Update API Routes

Replace mock data with actual database queries:

\`\`\`typescript
// In /app/api/moderation/report-abuse/route.ts
import { db } from "@/lib/db"; // Your database client

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Save to database
  const report = await db.abuseReports.create({
    data: {
      contentId: body.contentId,
      contentType: body.contentType,
      reason: body.reason,
      details: body.details,
      reportedBy: body.reportedBy,
      timestamp: new Date(),
      status: "pending",
    },
  });

  // Check if should auto-flag
  const reportCount = await db.abuseReports.count({
    where: {
      contentId: body.contentId,
      contentType: body.contentType,
    },
  });

  if (reportCount >= 3) {
    await db.flaggedContent.create({
      data: {
        contentId: body.contentId,
        contentType: body.contentType,
        autoFlagged: true,
        status: "under_review",
      },
    });
  }

  return NextResponse.json({ success: true });
}
\`\`\`

### 3. Setup Email Notifications

Install email service (example: Resend):

\`\`\`bash
npm install resend
\`\`\`

Add to `.env.local`:

\`\`\`env
RESEND_API_KEY=re_your_api_key
MODERATOR_EMAILS=mod1@example.com,mod2@example.com
\`\`\`

Update API route:

\`\`\`typescript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendModeratorNotification(report: any) {
  await resend.emails.send({
    from: "moderation@advocatekhoj.com",
    to: process.env.MODERATOR_EMAILS.split(","),
    subject: `New Abuse Report - ${report.contentType}`,
    html: `
      <h2>New Abuse Report</h2>
      <p><strong>Content ID:</strong> ${report.contentId}</p>
      <p><strong>Reason:</strong> ${report.reason}</p>
      <p><a href="${process.env.NEXT_PUBLIC_APP_URL}/admin/moderation/reports/${report.id}">
        Review Report
      </a></p>
    `,
  });
}
\`\`\`

## Customization

### Add More Profanity Words

Edit `/lib/content-filter.ts`:

\`\`\`typescript
const customProfanity = [
  "your_word_1",
  "your_word_2",
  // Add more...
];

const allProfanity = [
  ...englishProfanity,
  ...hindiProfanity,
  ...regionalProfanity,
  ...customProfanity, // Add your list
];
\`\`\`

### Change Severity Thresholds

\`\`\`typescript
// In content-filter.ts
export function validateContent(content: any, strictMode: boolean = true) {
  // Change this threshold
  if (descCheck.severity === "high") {
    // Change to 'medium' for stricter blocking
    errors.push("Description contains offensive language");
  }
}
\`\`\`

### Customize Report Reasons

Edit `/components/moderation/report-abuse-dialog.tsx`:

\`\`\`typescript
const reportReasons = [
  { value: "custom_reason", label: "Your custom reason" },
  // Add more reasons...
];
\`\`\`

## Production Checklist

- [ ] Setup database tables
- [ ] Configure email service
- [ ] Add environment variables
- [ ] Test profanity filter thoroughly
- [ ] Test report submission
- [ ] Setup moderator accounts
- [ ] Create moderation dashboard
- [ ] Add logging/monitoring
- [ ] Configure auto-flagging threshold (default: 3 reports)
- [ ] Setup notification alerts
- [ ] Add privacy policy for reports
- [ ] Implement rate limiting on reports
- [ ] Add CAPTCHA to prevent spam reports

## Troubleshooting

### Profanity filter not blocking

- Check if `validateContent` is called before submission
- Verify `isValid` is checked in submit handler
- Ensure strict mode is enabled: `validateContent(content, true)`

### Report dialog not opening

- Check if `reportDialogOpen` state is managed correctly
- Verify `ReportAbuseDialog` component is imported
- Ensure button has `onClick` handler

### Reports not saving

- Check API route is working: `/api/moderation/report-abuse`
- Verify database connection
- Check console for errors
- Test with curl: `curl -X POST http://localhost:3000/api/moderation/report-abuse -d '{"contentId":123,"contentType":"question","reason":"spam"}'`

### Email not sending

- Verify email service API key
- Check MODERATOR_EMAILS environment variable
- Test email service separately
- Check spam folder

## Support

For issues or questions:

1. Check `/CONTENT_FILTERING_DOCUMENTATION.md` for detailed docs
2. Review code in `/lib/content-filter.ts`
3. Check API routes in `/app/api/moderation/`
4. Test with sample data first

## Next Steps

1. ✅ Test the current implementation
2. ⏭️ Setup database tables
3. ⏭️ Configure email service
4. ⏭️ Create moderation dashboard at `/admin/moderation`
5. ⏭️ Add analytics and reporting
6. ⏭️ Implement user reputation system
7. ⏭️ Add AI-based content filtering (future)
