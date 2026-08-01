# Antigravity Workflow & Branch Rules

## Branch & Deployment Strategy
1. **Development & Testing (Localhost)**:
   - All building, editing, and local testing must be performed on the `master` branch.
   - When starting a new website or project session, notify the user:
     > *"We are currently working on branch **`master`** for local dev & testing. Production branch is **`main`**."*
2. **Production Deployment (`main`)**:
   - Only push/merge to `main` when the user explicitly requests a production push (e.g. *"push to prod"*, *"deploy to main"*).
