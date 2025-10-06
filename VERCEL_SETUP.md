# Vercel Deployment Configuration

## Important: Manual Vercel Settings Required

To fix the Node.js 22 / Python distutils issue, you need to configure these settings in your Vercel project:

### Option 1: Set Node.js Version (Recommended)
1. Go to your Vercel project dashboard
2. Navigate to **Settings** > **General**
3. Scroll to **Node.js Version**
4. Select **20.x** from the dropdown
5. Save changes

### Option 2: Set Environment Variable
1. Go to your Vercel project dashboard
2. Navigate to **Settings** > **Environment Variables**
3. Add a new environment variable:
   - **Name**: `NODE_VERSION`
   - **Value**: `20`
   - **Environments**: Check all (Production, Preview, Development)
4. Save the variable

### Why This Is Needed
- Node.js 22 uses Python 3.12, which removed the `distutils` module
- Native dependencies (secp256k1, bufferutil) fail to build with Python 3.12
- Node.js 20 uses Python 3.11 which still has `distutils`
- The fallback install command will skip native builds if they fail

## Current Configuration

The project now has:
- ✅ `.nvmrc` file specifying Node 20
- ✅ `package.json` engines field set to Node 20.x
- ✅ Fallback install command that skips native builds
- ✅ `.npmrc` configured for optional dependencies
- ✅ `.yarnrc.yml` configured for Vercel compatibility

## After Setting Node Version

Once you've set the Node.js version in Vercel:
1. Trigger a new deployment (push to main or redeploy)
2. The build should succeed
3. Native modules will build successfully with Python 3.11

## If Issues Persist

If the deployment still fails, the fallback `--ignore-scripts` will ensure the build completes without native modules. The application will use JavaScript fallbacks for these optional dependencies.
