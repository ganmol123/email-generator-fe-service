# email-generator-fe-service

## Currently Deployed at: ```bash
    https://email-generator-fe-dot-email-generator-400307.wl.r.appspot.com/
    ```

Frontend service for Personalized Email Generator using GPT

This Node.js application allows you to generate personalized emails using the GPT (Generative Pre-trained Transformer) language model. You can input recipient details, keywords, and other parameters, and the application will generate a personalized email for you.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Deployment to Google App Engine](#deployment-to-google-app-engine)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
- API Key: Obtain an API key for the GPT model you want to use from OpenAI.
- Google Cloud Platform (GCP) Account: You'll need a GCP account to deploy the application to Google App Engine.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd email-generator-be-service-node
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Configuration

Before running the application, you need to configure it:

1. **OpenAI API Key**: Set your OpenAI API key by replacing `YOUR_OPENAI_API_KEY` in the `config/index.js` file with your actual API key.

2. **Google App Engine**: You will need to set up a Google App Engine project. Refer to [Google's documentation](https://cloud.google.com/appengine/docs/standard) for instructions on how to create and configure a Google App Engine project.

## Usage

1. Start the Node.js server:

   ```bash
   npm start
   ```

2. Access the application locally in your browser by navigating to `http://localhost:4000`.

3. Fill in the recipient details, sender details, subject, keywords, and other options in the form provided.

4. Click the "Generate Email" button to generate a personalized email using the GPT model.

5. The generated email content will be displayed on the page.

## Deployment to Google App Engine

To deploy this application to Google App Engine, follow these steps:

1. Set up the Google Cloud SDK on your local machine if you haven't already. You can download it from [here](https://cloud.google.com/sdk/docs/quickstarts).

2. Authenticate with your Google Cloud account:

   ```bash
   gcloud auth login
   ```

3. Navigate to the project directory and deploy the application to App Engine:

   ```bash
   gcloud app deploy
   ```

4. Follow the prompts to choose your project and region for deployment.

5. Once the deployment is complete, you can access your application on Google App Engine using the provided URL.

## Contributing

Feel free to contribute to this project by creating issues or pull requests. Any contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

That's it! You've now successfully set up and deployed your Personalized Email Generator using GPT on Google App Engine. Enjoy generating personalized emails!
