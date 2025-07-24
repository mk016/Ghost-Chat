# 🚀 Vercel Deployment Guide

## 📋 Prerequisites
- GitHub repository connected to Vercel
- Vercel account
- Node.js 18+ installed

## 🔧 Vercel Configuration Files

### 1. `vercel.json` (Root Directory)
```json
{
  "buildCommand": "pnpm install && pnpm build",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "outputDirectory": "apps/www/.next",
  "regions": ["iad1"],
  "functions": {
    "apps/www/app/api/**/*.ts": {
      "maxDuration": 30
    }
  },
  "env": {
    "NODE_ENV": "production"
  },
  "builds": [
    {
      "src": "apps/www/package.json",
      "use": "@vercel/next"
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/apps/www/$1"
    }
  ]
}
```

### 2. `.npmrc` (Root Directory)
```
registry=https://registry.npmjs.org/
fetch-retries=5
fetch-retry-mintimeout=20000
fetch-retry-maxtimeout=120000
```

### 3. `.nvmrc` (Root Directory)
```
18
```

## 🎯 Vercel Dashboard Settings

### Environment Variables (Add in Vercel Dashboard):
```
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://your-api-domain.vercel.app
```

### Build Settings:
- **Framework Preset**: Next.js
- **Root Directory**: `apps/www`
- **Build Command**: `pnpm build`
- **Install Command**: `pnpm install`
- **Output Directory**: `.next`

## 📱 Commands to Run

### 1. Local Testing
```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### 2. Vercel CLI (Optional)
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

## 🔗 GitHub Integration

### 1. Connect Repository
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository: `mk016/Ghost-Chat`
4. Select the repository

### 2. Configure Project
- **Framework Preset**: Next.js
- **Root Directory**: `apps/www`
- **Build Command**: `pnpm build`
- **Install Command**: `pnpm install`
- **Output Directory**: `.next`

### 3. Environment Variables
Add these in Vercel Dashboard:
```
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://your-api-domain.vercel.app
```

## 🚀 Deployment Steps

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### Step 2: Deploy on Vercel
1. Go to Vercel Dashboard
2. Click "Deploy"
3. Wait for build to complete
4. Your site will be live at: `https://your-project.vercel.app`

## 🔧 Troubleshooting

### Common Issues:
1. **Build Fails**: Check if all dependencies are in `package.json`
2. **Node Version**: Ensure `.nvmrc` is set to 18
3. **Monorepo Issues**: Verify `vercel.json` has correct paths
4. **API Routes**: Check function timeouts in `vercel.json`

### Debug Commands:
```bash
# Check Node version
node --version

# Check pnpm version
pnpm --version

# Test build locally
cd apps/www && pnpm build

# Check for TypeScript errors
pnpm type-check
```

## 📊 Monitoring

### Vercel Analytics:
- Go to your project dashboard
- Check "Analytics" tab
- Monitor performance and errors

### Logs:
- Check "Functions" tab for API logs
- Monitor build logs for errors
- Set up alerts for failures

## 🎉 Success Indicators

✅ **Build Status**: "Ready" in Vercel Dashboard
✅ **Domain**: Your site is accessible
✅ **Functions**: API routes working
✅ **Performance**: Good Core Web Vitals
✅ **Analytics**: Traffic flowing

## 🔄 Continuous Deployment

Once set up, every push to `main` branch will automatically deploy to Vercel!

---

**Your Ghost-Chat app will be live at: `https://your-project-name.vercel.app`** 🎨✨ 