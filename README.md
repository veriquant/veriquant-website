# VeriQuant Website

VeriQuant is building AI agents for automated mathematical verification in quantitative finance. This website showcases our technology and gathers market demand evidence.

## Environment Setup

1. Copy the environment template:
   ```bash
   cp .env.example .env
   ```

2. Get your Web3Forms access key:
   - Go to [https://web3forms.com](https://web3forms.com)
   - Sign up with `jason@veriquant.co`
   - Get your access key from the dashboard
   - Replace `your_actual_access_key_here` in `.env` with your real key

3. The `.env` file is in `.gitignore` so your key won't be committed to GitHub

## Quick Start

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsurjithctly%2Fastroship&project-name=astroship&repository-name=astroship&demo-title=Astroship%20-%20Astro%20Starter%20Template&demo-description=Astroship%20is%20a%20starter%20template%20for%20startups%2C%20marketing%20websites%20%26%20landing%20pages.%20Built%20with%20Astro%2C%20TailwindCSS&demo-url=https%3A%2F%2Fastroship.web3templates.com%2F&demo-image=https%3A%2F%2Fuser-images.githubusercontent.com%2F1884712%2F200831799-10ef2456-a02e-4068-b580-4b5326f0b33b.png)

Click here to deploy on Netlify:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/surjithctly/astroship)

## Preview

![image](https://user-images.githubusercontent.com/1884712/200831799-10ef2456-a02e-4068-b580-4b5326f0b33b.png)


## Pro Version Preview

![preview](https://github.com/surjithctly/astroship/assets/1884712/25665c02-d2a7-43dc-89b2-34a8ae37ade9)


### Pagespeed Score

[![pagespeed](https://user-images.githubusercontent.com/1884712/210250214-7aa98167-7993-4b90-8138-326b8fa0c223.png)](https://pagespeed.web.dev/report?url=https%3A%2F%2Fastroship.web3templates.com%2F)


## Installation

If you are reading this on github, you can click on the "Use this template" button above to create a new repository from astroship to your account. Then you can do a `git clone` to clone it to your local system.

Alternatively, you can clone the project directly from this repo to your local system.

### 1. Clone the repo

```bash
git clone https://github.com/surjithctly/astroship.git myProjectName
# or
git clone https://github.com/surjithctly/astroship.git .
```

The `.` will clone it to the current directory so make sure you are inside your project folder first.

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or (recommended)
pnpm install
```

### 3. Start development Server

```bash
npm run dev
# or
yarn dev
# or (recommended)
pnpm dev
```

### Preview & Build

```bash
npm run preview
npm run build
# or
yarn preview
yarn build
# or (recommended)
pnpm preview
pnpm build
```

We recommend using [pnpm](https://pnpm.io/) to save disk space on your computer.

### Other Commands

```bash
pnpm astro ...
pnpm astro add
pnpm astro --help
```

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       └── ...
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## TailwindCSS

TailwindCSS is already configured in this repo, so you can start using it without any installation.

## Credits

[Hero Illustration](https://www.figma.com/community/file/1108400791662599811) by [Streamline](https://www.streamlinehq.com/)

## 👀 Want to learn more?

Feel free to check out [Astro Docs](https://docs.astro.build) or jump into our [Discord Chat](https://web3templates.com/discord).

[![Built with Astro](https://astro.badg.es/v1/built-with-astro.svg)](https://astro.build)
