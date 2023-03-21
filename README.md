# Netflix_Cypress_Performance_Gherkin
Cypress project, Load Testing




Netflix Cypress Test Suite
This is a Cypress test suite for the Netflix website. It includes a variety of tests to ensure that the site is functioning as expected.

Getting Started
Prerequisites
Before getting started, you'll need to have Node.js and npm installed on your computer. You can download Node.js from the official website here and npm will be installed automatically with Node.js.

Installing Dependencies
Once you've installed Node.js and npm, navigate to the project directory and install the necessary dependencies using npm:

# Installing NodeJS and npm
1.- Go to the NodeJS website and download the latest version of NodeJS.

2.- Run the installer and follow the prompts to install NodeJS on your computer.

3.- Once NodeJS is installed, open your command prompt or terminal and run the following command to check that NodeJS and npm are installed correctly:

- **node -v**

- **npm -v**

If the version numbers are displayed, then NodeJS and npm have been installed successfully.

# Installing MOCHAWESOME REPORTER

1.- Open your command prompt or terminal and navigate to your project's root directory.
2.- Run the following command to install MOCHAWESOME REPORTER:
- **npm install --save-dev mochawesome**

# Installing Cypress

1.- Open your command prompt or terminal and navigate to your project's root directory.

2.- Run the following command to install Cypress:

- **npm install cypress --save-dev**

# Running Cypress with MOCHAWESOME REPORTER

1.- Open your command prompt or terminal and navigate to your project's root directory.

2.- Run the following command to start Cypress:

- **npx cypress open**

1.- Select the test you want to run and click on it to start the test.

2.- After the test has finished running, MOCHAWESOME REPORTER will generate a report in the mochawesome-report directory within your project.

**Now you can find the report in cypress/reports index.html** 

# Installing Artillery

- **npm install -g artillery**

To run the load and create the report use this command :

- **artillery run -o Report_Artillery.html mytest.yml**

To view the report run this code

- **artillery report Report_Artillery.html.html**

