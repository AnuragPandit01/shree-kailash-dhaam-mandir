# Shree Kailash Dhaam Mandir

A responsive temple website built with React, Vite, JavaScript, and Tailwind CSS. The website provides information about the temple, religious services, devotee registration, donations, live darshan, and temple tourism.

**Live Website:** https://shree-kailash-dham.web.app/

**Temple Address:** खटंगिया, दौना रोड, जसरा, प्रयागराज, उत्तर प्रदेश

---

## 1. Technology Stack

| Technology / Tool | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and layouts |
| JavaScript (ES Modules) | Application logic |
| React | Component-based user interface |
| Vite | Development server and build tool |
| Tailwind CSS | Utility-first styling |
| React Router | Client-side navigation |
| Lucide React | Interface icons |
| React Icons | Additional icon libraries |
| Node.js | JavaScript runtime |
| npm | Package management |
| Git | Version control |
| Firebase Hosting | Website hosting and deployment |
| Razorpay | Payment gateway integration, where configured |
| html2canvas | Capturing HTML elements for PDF generation |
| jsPDF | Generating downloadable PDF documents |

The actual installed versions are defined by the project's `package.json` and lockfile.

## 2. Prerequisites

Install the following tools on the computer before setting up the project.

### 2.1 Install Git

Git is used to clone the source code repository and manage changes.

**Ubuntu / Debian**

```bash
sudo apt update
sudo apt install git -y
```

**Windows**

Download and install Git from:

https://git-scm.com/downloads

**macOS**

```bash
xcode-select --install
```

Verify the installation:

```bash
git --version
```

### 2.2 Install Node.js and npm

Node.js runs the JavaScript development tools, while npm installs the project's dependencies.

Use a currently supported Node.js LTS version compatible with the project's Vite version.

Download Node.js from:

https://nodejs.org/

Alternatively, on Ubuntu, you can install Node.js through a version manager such as nvm to make switching versions easier.

Verify the installation:

```bash
node --version
npm --version
```

Both commands should display version numbers.

### 2.3 Install a Code Editor

Visual Studio Code is recommended for editing React components, configuration files, and stylesheets.

Download it from:

https://code.visualstudio.com/

Recommended extensions:

- ESLint — identifies JavaScript and React code issues.
- Tailwind CSS IntelliSense — provides Tailwind class suggestions.
- Prettier — formats code consistently.

These extensions are optional; they are not substitutes for the project's installed dependencies.

### 2.4 Install a Modern Web Browser

Use an up-to-date version of Chrome, Firefox, Edge, or another modern browser to test the website.

---

## 3. Obtain the Project Source Code

### Option A: Clone the Git repository

Open a terminal and run:

```bash
git clone <REPOSITORY_URL>
cd <PROJECT_FOLDER>
```

Replace the placeholders with the actual Git repository URL and project directory name.

### Option B: Use a ZIP archive

If the project was shared as a ZIP file:

1. Download the ZIP archive.
2. Extract it.
3. Open a terminal in the extracted project directory.
4. Open that directory in Visual Studio Code.

The project root should contain files such as:

```text
package.json
index.html
vite.config.js
src/
public/
```

The exact contents may differ depending on the current project structure.

**Important:** Run all npm commands from the directory containing `package.json`.

---

## 4. Install Project Dependencies

Open the project folder in the terminal.

```bash
npm install
```

This installs the dependencies listed in `package.json`.

If the repository includes `package-lock.json`, use the following command for a reproducible installation:

```bash
npm ci
```

Use `npm ci` when the lockfile is present and consistent with `package.json`. Otherwise, use `npm install`.

Do not manually install every library listed in this README if it is already declared in the project dependencies.

---

## 5. Configure Environment Variables

Some features, especially backend-connected services and payments, may require environment variables.

Check whether the project contains an example environment file or references variables using `import.meta.env`.

If the application requires a backend API URL, create a `.env` file in the project root:

```env
VITE_API_BASE_URL=http://localhost:5000
```

Replace the URL with the actual backend address when deploying or connecting to another environment.

### Environment variable security

- Variables prefixed with `VITE_` are exposed to the browser.
- Never put Razorpay secret keys, database passwords, or other server-side secrets in the frontend `.env` file.
- Keep real environment files out of version control.
- Share a `.env.example` file containing placeholder values instead of credentials.

If the project does not yet require environment variables for a particular feature, do not add unnecessary configuration.

---

## 6. Run the Development Server

Start the local development server:

```bash
npm run dev
```

Vite normally displays a local URL similar to:

```text
http://localhost:5173/
```

Open the displayed URL in your browser.

The development server supports Hot Module Replacement (HMR), allowing many code changes to appear without manually restarting the application.

To stop the server, press `Ctrl + C` in the terminal.

### Common npm commands

| Command | Purpose |
|---|---|
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint, if this script exists |

The available commands are determined by the `scripts` section in `package.json`.

---

## 7. Build the Production Application

Before deployment, create a production build:

```bash
npm run build
```

Vite normally writes the generated static website to the `dist/` directory.

Preview the production build locally:

```bash
npm run preview
```

Open the local URL displayed in the terminal.

Check the browser console and terminal for errors before deploying.

---

## 8. Firebase Hosting Setup

The website is hosted at:

https://shree-kailash-dham.web.app/

Firebase Hosting serves the production frontend. A developer who needs deployment access must also have the necessary permissions for the Firebase project.

### 8.1 Install Firebase CLI

Install the Firebase command-line tools globally:

```bash
npm install -g firebase-tools
```

Verify the installation:

```bash
firebase --version
```

### 8.2 Sign in to Firebase

```bash
firebase login
```

Complete the browser authentication flow using an account that has access to the Firebase project.

### 8.3 Check the Firebase project configuration

From the project root, inspect:

- `firebase.json`
- `.firebaserc`, if present

These files determine how the website is built and deployed and which Firebase project is associated with the working directory.

If `.firebaserc` is missing, or the project association needs to be changed, select the authorized project:

```bash
firebase use --add
```

Choose the existing Shree Kailash Dhaam Mandir Firebase project. Do not create a new Firebase project unless that is specifically required.

### 8.4 Build and deploy

```bash
npm run build
firebase deploy --only hosting
```

Check the deployment output for the Hosting URL and any errors.

**Deployment caution:** Verify the active Firebase project before deploying. Never deploy to a production project without the required authorization and approval.

If the deployed website uses client-side React Router routes, confirm that `firebase.json` contains an appropriate single-page application rewrite to `index.html`. Preserve the existing configuration rather than replacing it blindly.

---

## 9. Backend and Payment Integration

The frontend and backend are separate parts of a web application.

### Frontend

The React frontend handles:

- Rendering website pages and components.
- Navigation and responsive layouts.
- Form inputs and client-side validation.
- Displaying booking, registration, and payment status.
- Generating downloadable PDFs when the relevant data is available.

### Backend

A separately configured backend is needed for operations such as:

- Saving registration and booking records to a database.
- Creating Razorpay orders securely.
- Verifying payment signatures and payment status.
- Generating unique confirmed registration or ticket numbers.
- Providing administrative access to stored records.

The backend's actual URL, setup commands, database configuration, and API endpoints must be obtained from its source repository or responsible developer.

### Razorpay security

Never trust a frontend success message as proof of payment. The backend must verify the payment and confirm the corresponding order before the application issues a confirmed ticket or receipt.

If the backend is not running, payment-connected features may not work even though the frontend loads successfully.

---

## 10. PDF Generation Dependencies

The project uses browser-side libraries for generating PDF documents.

Install these dependencies only if they are not already present:

```bash
npm install html2canvas jspdf
```

These libraries can capture a rendered HTML element and place the resulting image into a PDF.

For reliable output:

- Ensure the receipt or ticket layout has the intended dimensions.
- Wait for images and fonts to load before capturing.
- Check that the PDF does not contain unnecessary blank pages.
- Test the downloaded PDF in a PDF viewer.

---

## 11. Common Problems and Solutions

### Problem: `npm` or `node` command not found

Node.js or npm may not be installed, or the installation directory may not be available in the system's PATH.

Verify:

```bash
node --version
npm --version
```

Install or repair Node.js before continuing.

### Problem: Dependencies cannot be resolved

From the project root, try:

```bash
npm install
```

Review the terminal output for dependency conflicts. Do not delete the lockfile or change dependency versions without understanding the issue.

### Problem: Port 5173 is already in use

Vite may select another available port automatically. Use the URL displayed in the terminal.

### Problem: The page loads but refreshing a route produces a 404

Check the Firebase Hosting single-page application rewrite and confirm that the correct `dist/` directory is deployed.

### Problem: Images or assets are missing

Check the asset paths and letter casing. Linux filesystems are often case-sensitive, so `Logo.png` and `logo.png` may be treated as different files.

### Problem: Razorpay payment fails

Verify that:

- The backend is running and reachable.
- The frontend API URL is correct.
- The backend credentials are configured securely.
- The Razorpay order and payment verification endpoints are implemented.
- Test and live payment credentials are not mixed.

### Problem: The PDF contains blank pages or content is cut off

Inspect the HTML element being captured, its dimensions, and the PDF scaling logic. Test with a short receipt and a long receipt.

---

## 12. Recommended Development Workflow

1. Obtain the latest authorized project source.
2. Install the compatible Node.js version and Git.
3. Run `npm ci` or `npm install`.
4. Configure the required environment variables.
5. Start the application with `npm run dev`.
6. Test navigation, forms, images, and responsive layouts.
7. Test backend-dependent functionality against the appropriate backend environment.
8. Run `npm run build`.
9. Review the production build locally.
10. Deploy to Firebase Hosting only after confirming the target project and receiving the necessary authorization.

---

## 13. Project Maintenance

Before committing changes:

- Review the modified files.
- Run the project's lint command if configured.
- Run the production build.
- Keep `.env` files and credentials out of Git.
- Commit `package-lock.json` when using npm.
- Avoid committing `node_modules/` or generated build files unless the project explicitly requires them.
- Document any new environment variables and backend dependencies in `.env.example` or this README.

## 14. Important Notes

- The frontend and backend may require separate setup procedures.
- Firebase Hosting deployment access is separate from the ability to run the project locally.
- Actual database, payment, and registration behavior depends on the relevant backend services and configuration.
- This README describes the expected setup workflow; verify package versions, scripts, environment variables, and Firebase configuration against the current source code before using it as a release checklist.
