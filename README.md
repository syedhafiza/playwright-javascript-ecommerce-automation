# Playwright JavaScript E-Commerce Automation

An end-to-end UI automation framework built using **Playwright with JavaScript** for testing critical e-commerce workflows. The project follows **Page Object Model (POM)** and uses reusable fixtures, test data, utilities, assertions, screenshots and trace-based debugging.

This project was developed as a **self-learning initiative** to strengthen Playwright automation skills and explore **AI-assisted testing concepts using Playwright MCP and Playwright Agents**.

---

## 🚀 Key Highlights

* End-to-end UI automation using **Playwright + JavaScript**
* **Page Object Model (POM)** based framework
* Reusable **fixtures, page objects and test utilities**
* Automated **Login, Products, Cart and Checkout** workflows
* CSS selectors and Playwright locators
* Assertions and test data management
* Screenshots and **Trace Viewer** for debugging
* Playwright Inspector and Codegen
* Test tagging for targeted execution
* Jenkins **CI/CD** integration
* GitHub Actions workflow
* Exploration of **Playwright MCP and AI Agents**
* **22 E2E test scenarios** automated and executed successfully

---

## 🛠️ Tech Stack

| Technology            | Purpose                                     |
| --------------------- | ------------------------------------------- |
| **Playwright**        | Web UI / E2E automation                     |
| **JavaScript**        | Automation scripting                        |
| **Node.js / npm**     | Runtime and package management              |
| **Page Object Model** | Framework design                            |
| **MCP**               | AI-assisted browser interaction exploration |
| **Playwright Agents** | AI-assisted testing exploration             |
| **Jenkins**           | CI/CD test execution                        |
| **GitHub Actions**    | Automated workflow execution                |
| **Git / GitHub**      | Version control                             |
| **HTML Reporter**     | Test reporting                              |

---

## 📂 Project Structure

```text
playwright-javascript-ecommerce-automation/
│
├── PageObjects/
│
├── pages/
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── fixtures/
│
├── test-data/
│
├── tests/
│   ├── login.spec.js
│   ├── products.spec.js
│   ├── cart.spec.js
│   └── checkout.spec.js
│
├── utils/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── playwright.config.js
├── Jenkinsfile
├── package.json
├── .gitignore
└── README.md
```

---

## 🧪 Automated Test Scenarios

The framework covers major e-commerce workflows including:

### 🔐 Login
Login validation
* Valid login
* Invalid login
* Locked out user
  
### 🛍️ Products

* Product listing validation
* Product selection
* Product details
* Add product to cart

### 🛒 Cart

* Add/remove products
* Cart item validation
* Cart quantity and price validation

### 💳 Checkout

* Checkout information
* Order summary validation
* Order completion workflow

---

## 🤖 AI-Assisted Testing

As part of self-learning and exploring modern QA practices, this project includes hands-on exploration of **Playwright MCP and AI-assisted Playwright Agents**.

### Planner

Explored the **Planner Agent** for understanding application workflows and creating structured test plans based on application scenarios.

### Generator

Explored the **Generator Agent** for AI-assisted creation of Playwright test scenarios and automation code.

### Healer

Explored the **Healer Agent** for analyzing failed automation tests and assisting with test maintenance and failure resolution.

### Playwright MCP

Explored **Playwright MCP (Model Context Protocol)** for AI-assisted interaction with browser-based application workflows and to understand how AI can support modern test automation.

> **Note:** The AI/MCP components in this repository are part of a self-learning and experimentation initiative focused on understanding AI-assisted QA automation.

---

## 📊 Test Execution

The automation suite was executed successfully with:

```text
22 tests passed
0 tests failed
```

The framework generates Playwright HTML reports and supports screenshots and traces for failed/debugging scenarios.

---

## ▶️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/syedhafiza/playwright-javascript-ecommerce-automation.git
```

### 2. Navigate to the project

```bash
cd playwright-javascript-ecommerce-automation
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

---

## ▶️ Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/login.spec.js
```

### Run tests in debug mode

```bash
npx playwright test --debug
```

### Open HTML report

```bash
npx playwright show-report
```

---

## 🔄 CI/CD Integration

### Jenkins

The project includes a **Jenkinsfile** to support automated Playwright test execution through Jenkins.

The CI workflow includes:

1. Install Node.js dependencies
2. Install Playwright browsers
3. Execute automated tests
4. Generate test results
5. Publish/retain test reports

### GitHub Actions

GitHub Actions is also configured to support automated Playwright test execution through the repository workflow:

```text
.github/workflows/playwright.yml
```

---

## 🔍 Playwright Features Used

* Page Object Model
* Locators
* CSS Selectors
* Assertions
* Fixtures
* Test Data
* Test Tags
* Screenshots
* Trace Viewer
* Playwright Inspector
* Codegen
* Web Dialogs
* Frames / iFrames
* Event Listeners
* Cross-browser testing
* Visual validation
* HTML reporting

---

## 🎯 Learning Objectives

This project was created to gain practical experience in:

* Building maintainable Playwright automation frameworks
* Applying **POM design principles**
* Developing reusable automation components
* Designing E2E regression scenarios
* Debugging automation failures using traces and screenshots
* Integrating Playwright with **Jenkins and GitHub Actions**
* Exploring **MCP and AI-assisted Playwright Agents**
* Understanding the role of AI in modern QA automation

---

## 📌 Future Enhancements

* Expand cross-browser execution
* Add API testing with Playwright
* Improve test data management
* Add environment-based configuration
* Enhance CI/CD reporting
* Expand AI-assisted test generation and healing
* Integrate additional quality gates into CI/CD

---

## 👩‍💻 Author

**Hafiza Syed**

QA Engineer | Playwright Automation | JavaScript | AI-Assisted Testing

GitHub:
https://github.com/syedhafiza

---

## ⭐ Project

If you find this project useful for learning Playwright automation and AI-assisted testing concepts, feel free to explore the repository.
