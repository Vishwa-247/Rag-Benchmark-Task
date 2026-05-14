# Advocate Module Documentation

## Overview

The Advocate Module has been designed to match the client module structure, with a comprehensive 2-step registration process and a feature-rich dashboard similar to the client experience.

## 1. Advocate Registration Process (2-Step)

### Step 1: Initial Signup (`/app/advocate/register/page.tsx`)

**Purpose**: Capture basic advocate details for admin verification

**Fields Captured**:

- First Name (Required)
- Middle Name (Optional)
- Last Name / Surname (Required)
- Email (Required)
- Office Phone with STD Code (Required)

**Process Flow**:

1. Advocate fills the basic signup form
2. System validates the information
3. Application is submitted to admin for verification
4. System checks for duplicate records in the database
5. If no duplicates found, advocate is registered in RAW database
6. Email notification sent to advocate with login credentials

**Key Features**:

- Form validation with error messages
- Clear instructions about the registration process
- Warning that name cannot be changed after submission
- Success screen with next steps information
- Email confirmation with temporary credentials

### Step 2: Profile Completion (After Admin Verification)

**Handled by**: Admin area and then advocate login

**Admin Actions**:

1. Verify advocate details
2. Check for duplicates
3. Assign username and password
4. Send email with credentials
5. Set advocate status to "Live" or "Under Review"

**Advocate Actions** (After receiving credentials):

1. Login with provided credentials
2. Complete full profile in Profile Management section:
   - Contact Information (address, phones, email)
   - Practice Areas (multiple selections)
   - Languages spoken
   - BAR Council Affiliations:
     - State BAR Council Registration
     - Supreme Court Registration
     - High Court Registration
     - District Court Registration
   - Professional experience
   - Education details
3. Submit profile for review
4. Admin reviews and approves within 15 days

## 2. Advocate Dashboard Structure

### Main Dashboard (`/app/advocate/dashboard/page.tsx`)

Similar to client dashboard with modular structure:

- Uses `AdvocateDashboardLayout` for consistent UI
- Section-based navigation (Overview, Profile, Cases, Messages, Membership)
- State management for active section
- User info display with Advocate ID and status

### Dashboard Components

#### A. Dashboard Layout (`/components/advocate/dashboard-layout.tsx`)

**Features**:

- Sidebar navigation with icons
- User profile card showing:
  - Name and Advocate ID
  - Status badge (Live/Under Review)
  - Membership type
- Mobile-responsive menu
- Logout functionality
- Sticky sidebar on desktop

#### B. Dashboard Overview (`/components/advocate/dashboard-overview.tsx`)

**Stats Displayed**:

- Total Cases (with active/completed breakdown)
- Average Rating (with visual stars)
- Total Earnings (with trend indicator)
- Profile Views (with response rate)

**Sections**:

1. **Welcome Banner**: Personalized greeting with quick stats
2. **Stats Grid**: 4 metric cards with icons and trends
3. **Available Cases**: Browse new case opportunities
   - Case title and description
   - Client name
   - Budget and category
   - Time posted
   - Quick action buttons
4. **Recent Activity**: Timeline of important events
   - Case responses
   - New case matches
   - Reviews received
   - Profile views
5. **Quick Actions**: Shortcut buttons to main sections

#### C. Profile Management (`/components/advocate/profile-management.tsx`)

**Sections**:

1. **Profile Header**:

   - Profile photo upload
   - Basic info (name, title, location)
   - BAR Council number

2. **Contact Information**:

   - Primary, secondary, emergency phones
   - Email, fax, website
   - Office address

3. **Professional Information**:

   - Practice areas (multi-select)
   - Languages spoken
   - Years of experience
   - Court registrations

4. **BAR Council Affiliations**:

   - State BAR Council (number, year)
   - Supreme Court registration
   - High Court registration(s)
   - District Court registration(s)

5. **Club Profile & Membership**:
   - Club membership management
   - Membership history
   - Refer friends feature

#### D. Case Browser (`/components/advocate/case-browser.tsx`)

**Features**:

- Search functionality
- Filters:
  - Category
  - Location
  - Urgency level
- Case cards showing:
  - Title and description
  - Client name (or anonymous)
  - Budget range
  - Location and date posted
  - Urgency badge
  - Number of responses
  - Languages required
  - Experience required
- Action buttons:
  - View Details
  - Send Response

#### E. Messages Module (`/components/advocate/messages-module.tsx`)

**Features**:

- Conversation list with:
  - Client name and avatar
  - Last message preview
  - Unread count badge
  - Online status indicator
  - Associated case title
- Chat window:
  - Message history
  - Real-time messaging UI
  - File attachment support
  - Send message functionality
- Search conversations
- Mobile responsive design

#### F. Membership Payment (`/components/advocate/membership-payment.tsx`)

**Plans**:

1. **Basic** (₹2,999/6 months):

   - Profile listing
   - Up to 10 cases/month
   - Basic messaging
   - Email support

2. **Professional** (₹4,999/12 months) - POPULAR:

   - Enhanced profile
   - Unlimited cases
   - Priority messaging
   - Phone support
   - Featured listing

3. **Premium** (₹9,999/12 months):
   - All Professional features
   - Top search placement
   - Dedicated account manager
   - Marketing support
   - Premium badge

**Payment Options**:

- Credit/Debit Card
- UPI
- Net Banking
- Secure payment processing

## 3. Key Features Matching Client Module

### ✅ Implemented Features:

1. **Modular Dashboard Structure**: Same pattern as client dashboard
2. **Section-Based Navigation**: Overview, Profile, Cases, Messages, Membership
3. **Responsive Design**: Mobile-friendly layouts
4. **Stats & Analytics**: Visual representation of key metrics
5. **Back Navigation**: Consistent back buttons across all sections
6. **User Info Display**: Advocate ID, status, membership type
7. **Professional UI**: Cards, badges, icons matching client module style

### 🔒 Features to Mask (Until BAR Council Approval):

According to requirements, these should be hidden initially:

- Ratings/Reviews display
- Earnings information
- Schedule consultation feature
- Number of responses in available cases
- Amount in available cases

## 4. Registration Flow Comparison

### Client Registration:

- Single-step signup
- Immediate access after verification
- Profile completion optional

### Advocate Registration (2-Step):

**Step 1**: Basic info submission → Admin verification
**Step 2**: Username/password creation → Profile completion → Admin approval

This matches your screenshots showing:

1. Initial signup form with name, email, phone
2. Admin verification and duplicate check
3. Username and password setup
4. Profile update with full details
5. Final admin approval (15-day review period)

## 5. File Structure

\`\`\`
app/
  advocate/
    dashboard/
      page.tsx                 # Main dashboard page
    register/
      page.tsx                 # 2-step registration form

components/
  advocate/
    dashboard-layout.tsx       # Layout wrapper with sidebar
    dashboard-overview.tsx     # Overview/home section
    profile-management.tsx     # Profile editing (updated with onNavigate)
    case-browser.tsx          # Browse available cases (updated with onNavigate)
    messages-module.tsx       # Messaging interface
    membership-payment.tsx    # Membership plans and payment (updated with onNavigate)
\`\`\`

## 6. Usage

### For Advocates:

1. Visit `/advocate/register` for new registration
2. After receiving credentials, login at `/login?userType=advocate`
3. Access dashboard at `/advocate/dashboard`
4. Navigate between sections using sidebar

### For Developers:

All components accept an optional `onNavigate` prop for section switching:

\`\`\`tsx
<ProfileManagement onNavigate={setActiveSection} />
<CaseBrowser onNavigate={setActiveSection} />
<AdvocateMessagesModule onNavigate={setActiveSection} />
<MembershipPayment onNavigate={setActiveSection} />
\`\`\`

## 7. Next Steps

1. **Backend Integration**:

   - Connect registration form to API
   - Implement email notification system
   - Set up admin verification workflow
   - Create database schema for advocate profiles

2. **Feature Masking**:

   - Implement conditional rendering for ratings/earnings
   - Hide consultation scheduling until BAR approval
   - Mask response counts and amounts in case browser

3. **Admin Panel**:

   - Create admin interface for reviewing applications
   - Implement duplicate detection system
   - Add username/password generation
   - Build approval workflow

4. **Additional Features**:
   - Club cases and messaging
   - Referral system
   - Analytics dashboard
   - Document management

## Conclusion

The advocate module is now designed to mirror the client module experience while incorporating the specific 2-step registration process shown in your screenshots. The modular structure ensures easy maintenance and future enhancements.
