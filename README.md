# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/9bb967cb-db96-4ce3-8498-eebce36e0347

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/9bb967cb-db96-4ce3-8498-eebce36e0347) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/9bb967cb-db96-4ce3-8498-eebce36e0347) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

---

# UrbanStyle Luxe – Full Project (Frontend + Backend)

This repo now includes a standalone Express server (in `/server`) with API endpoints and a static CSS showcase page in `/public/css.html`.

## Quick start

Frontend (Vite):
```bash
npm i
npm run dev
```

Backend (Express):
```bash
cd server
cp .env.example .env
npm i
npm run dev
```

Open http://localhost:5174/api/health to verify the server.

## API
- GET /api/products – list products
- GET /api/products/:id – product detail
- POST /api/support – JSON { name, email, subject, message }

## Customer Support Form
- The form on Home and Contact posts to `/api/support` and shows success/error toasts.
- If the backend isn’t running, you’ll see an error toast (by design for demo).

## Cart Persistence
- Cart items persist with `localStorage` under key `usl_cart_v1`.

## CSS Showcase
- Visit `/css.html` for a minimalist monochrome component library (no build needed).

## WEDE Deliverables
- Wireframes: Recommend home, collections, product, cart/checkout, contact.
- Site map: Home, Men, Women, Product, Cart/Checkout, About, Lookbook, Contact, CSS Showcase.
- Testing: Manual UX flows (add to cart, update qty, checkout form), responsive checks, API tests with Postman for `/api/support` and `/api/products`.

