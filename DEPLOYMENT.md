# Deploying Samvaad to Vercel

## Quick Deploy (Recommended)

### Option 1: Deploy from GitHub (Best)

1. **Push to GitHub**:
   - Go to GitHub and create a new repository called "samvaad"
   - Run these commands:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/samvaad.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to https://vercel.com/new
   - Sign up with GitHub (free)
   - Click "Import" next to your samvaad repository
   - Click "Deploy"
   - Done! Your app will be live in ~30 seconds

### Option 2: Deploy via CLI

If you prefer command line:

```bash
# Login to Vercel (opens browser)
vercel login

# Deploy
vercel

# Follow the prompts:
# - Link to new project? Yes
# - Project name: samvaad
# - Directory: ./ (just press Enter)
# - Want to override settings? No

# Your app will be live at: https://samvaad-xxx.vercel.app
```

### Option 3: Drag & Drop (Fastest for testing)

1. Build the app:
   ```bash
   npm run build
   ```

2. Go to https://vercel.com/new
3. Drag the `dist` folder onto the page
4. Done! (But no automatic updates)

---

## After Deployment

Your app will be available at:
- **Production URL**: `https://samvaad-xxx.vercel.app`
- **Custom domain**: Can add your own domain in Vercel dashboard (free SSL included)

### Automatic Deployments

Once connected to GitHub, every push to main automatically deploys!

---

## Cost

**100% FREE** for personal projects on Vercel:
- Unlimited deployments
- Free SSL certificate
- 100 GB bandwidth per month
- Global CDN
- Automatic HTTPS

Perfect for Samvaad's needs! 🎉
