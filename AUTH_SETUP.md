# 🔐 Authentication Setup Guide

## Overview
Your USMLE NextGen platform now includes a complete authentication system with:
- ✅ **Google OAuth** integration
- ✅ **Email/Password** authentication
- ✅ **User registration** with validation
- ✅ **Session management** with NextAuth.js
- ✅ **Database integration** with Prisma + PostgreSQL

## 🚀 Setup Instructions

### 1. Environment Configuration
Create a `.env.local` file in your project root:

```env
# NextAuth Configuration
NEXTAUTH_SECRET=your-super-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# Google OAuth Credentials
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Database URL (PostgreSQL)
DATABASE_URL="postgresql://username:password@localhost:5432/usmle_nextgen?schema=public"
```

### 2. Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Set application type to "Web application"
6. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)
7. Copy Client ID and Client Secret to your `.env.local`

### 3. Database Setup
1. **Install PostgreSQL** locally or use a cloud service
2. **Create database**: `createdb usmle_nextgen`
3. **Generate Prisma client**: `npx prisma generate`
4. **Run migrations**: `npx prisma db push`
5. **Optional - View database**: `npx prisma studio`

### 4. Generate NextAuth Secret
```bash
# Generate a secure secret
openssl rand -base64 32
```

## 📱 Features Implemented

### Authentication Pages
- **Sign In** (`/auth/signin`): Google OAuth + Email/Password
- **Sign Up** (`/auth/signup`): Account creation with validation
- **Protected Routes**: Dashboard access after authentication

### User Experience
- **Session Management**: Persistent login state
- **User Profile**: Display name, email, avatar
- **Sign Out**: Secure session termination
- **Form Validation**: Password requirements, email validation
- **Error Handling**: User-friendly error messages
- **Loading States**: Visual feedback during authentication

### Dashboard Integration
- **Personalized Welcome**: Shows user's first name
- **User Avatar**: Google profile picture or initials
- **User Menu**: Dropdown with profile info and sign out
- **Session Protection**: Redirects to sign in if not authenticated

## 🛠 API Endpoints

### Authentication Routes
- `POST /api/auth/signup` - User registration
- `GET/POST /api/auth/[...nextauth]` - NextAuth.js handlers
- `GET /api/auth/session` - Current session info
- `POST /api/auth/signout` - Sign out endpoint

### Database Schema
```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime?
  image         String?
  password      String?   // For email/password auth
  accounts      Account[] // For OAuth accounts
  sessions      Session[] // Active sessions
  
  // USMLE specific fields
  currentStep   String?   // step1, step2ck, step3
  targetExamDate DateTime?
  studyGoals    Json?
  preferences   Json?
}
```

## 🔒 Security Features

### Password Security
- **Bcrypt hashing** with 12 rounds
- **Minimum 8 characters** requirement
- **Password confirmation** validation

### Session Security
- **JWT tokens** for session management
- **Secure cookies** with httpOnly flag
- **CSRF protection** built into NextAuth.js
- **Session expiration** and refresh

### Data Protection
- **Email validation** before account creation
- **Duplicate email prevention**
- **Input sanitization** and validation
- **Error message security** (no sensitive data leakage)

## 🧪 Testing the Authentication

### Test Sign Up Flow
1. Visit `/auth/signup`
2. Try Google OAuth: Click "Continue with Google"
3. Try Email: Fill form with valid email/password
4. Verify redirect to dashboard after successful sign up

### Test Sign In Flow
1. Visit `/auth/signin`
2. Try with existing Google account
3. Try with email/password credentials
4. Test error handling with invalid credentials

### Test Protected Routes
1. Try accessing `/dashboard` without authentication
2. Verify redirect to sign in page
3. Sign in and confirm access to protected features

## 🚀 Next Steps

### Enhanced Features (Future)
- **Email verification** for new accounts
- **Password reset** functionality
- **Two-factor authentication** (2FA)
- **Social logins** (GitHub, Apple, etc.)
- **User profile management** page
- **Account deletion** functionality

### Database Enhancements
- **User progress tracking** integration
- **Study preferences** storage
- **Achievement system** data
- **Subscription management** (for premium features)

## 📋 Troubleshooting

### Common Issues
1. **"NEXTAUTH_SECRET not set"**: Add secret to `.env.local`
2. **Google OAuth errors**: Check redirect URIs in Google Console
3. **Database connection**: Verify DATABASE_URL format
4. **Prisma errors**: Run `npx prisma generate` and `npx prisma db push`

### Debug Tips
- Check browser network tab for API errors
- Verify environment variables are loaded
- Check server logs for detailed error messages
- Use `npx prisma studio` to inspect database

Your authentication system is now ready for production! 🎉