[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React Template

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of the create-react-app guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

General Assembly has added a few nice-to-have to get your React project started, including:

- [react-router](https://reacttraining.com/react-router/)
- Various scripts from our [browser-template](git.generalassemb.ly/ga-wdi-boston/browser-template/), like ability to deploy, lint, nag, and test. Check package.json for the scripts that are available, and run like:
  - `npm run deploy` script to deploy to github pages
- bootstrap
- sass

TODO:

- add user authentication examples
- add example resource CRUD with axios

## Installation

### Getting the template:

1. [Download](../../archive/master.zip) this template.
1. Move to the `wdi/projects` directory, then unzip the template directory with
    `unzip /Users/<user-name>/Downloads/react-template-master.zip`.

### Customizing the Template:

1. Rename the template directory from `react-template-master` to
    `<project-name>-client`.
1. Empty [`README.md`](README.md) and fill with your own content.
1. Replace all instances of `react-template` with the name of
    your project. This should occur in package.json `name` property.

### Running the server:

1. Install dependencies with `npm install`.
1. When ready, start the server with `npm start`
  - This opens up a server on the default port
  - Set your default port to 7165 by making a `.env` file and setting `PORT=7165`

### Git Init:

1. Move into your new project and `git init`.
1. Add all of the files in your project with the command `git add --all`.
      - **Note: This is the only time you should run this command!**
1. Commit all of your files with the command `git commit`.
      - Your commit title should read `Initial commit`.

### Pushing to github:

1. Create a new repository on [github.com](https://github.com),
    _not GitHub Enterprise_.
1. Name the new repository with the same name used on Step 3.
1. Follow the instructions on your new repository's setup page. For details on
   how to push to Github, refer to the section on Github entitled "…or push an existing
   repository from the command line." Further documentation can be found [here](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/).

### Deploying your project:

1. Replace the `homepage` property in package.json with your github pages site, "https://<github_username>.github.io/<your_project_name>/"
1. Deploy to [github pages](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide) by running `npm run deploy`
  - This script runs `npm run build` and pushes your code to your repo's gh-pages branch. If the script fails, you can investigate the script and run each command individually to discover the cause of the failure. 

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
