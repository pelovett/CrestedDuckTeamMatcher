# CrestedDuckTeamMatcher
A tool for creating optimum teams in a class. Our web application takes in survey results in the form of a CSV file, processes them to create teams based on scheduling and skills, then returns the results to the user displayed on the web interface as well as a CSV.
- Developers
    - Cathy Webster
    - Kathryn Lovett
    - Peter Lovett
    - Wyatt Reed


## Table of Contents

- [Technologies](#technologies)
- [Student Survey](#student-survey)
- [Requirements and Design](#requirements-and-design)
- [Install](#install)
- [License](#license)


## Technologies

- [React.js](https://facebook.github.io/react/) - Facebook's popular JavaScript front-end framework.
- [Create-React-App](https://github.com/facebookincubator/create-react-app) - Facebook's generator.
- [Babel](https://babeljs.io/) - JavaScript compiler to unify all the different versions of JS that may have been used or will be used in the future.
- [Yarn](https://yarnpkg.com/) - Facebook's open source JavaScript package manager. There are a few differences between Yarn and Node Package Mangaer (npm), but the main differentiation is that Yarn locks dependencies so your project doesn't break when external resources change their code.
- [Material UI](http://www.material-ui.com/#/) - A Set of React Components that Implement Google's Material Design.
- [Flask](http://flask.pocoo.org/) - Flask is a microframework for Python based on Werkzeug, Jinja 2 and good intentions.
- [Google Form](https://docs.google.com/forms/d/1HLc7yaeKndD_7YyWikD_idP6vuImYprAhpL_8KFUGhQ/copy) - Online form/survey to collect data


## Student Survey
- Prior to running the application, it's necessary to collect data from students in order to correctly place them into teams.
- The survey asks the user for the following:
    - Name
    - Email
    - Availability throughout the week
    - Rank programming/technology skills
    - Teammate preferences
- Google Form allows users to export the responses to a CSV file. This application takes in and parses the student survey results in the form of a CSV file, formatted specifically to how it is exported from Google Forms.  
- An example response can be found in the Git repository named "responses.csv".

## Requirements and Design
- Minimal Viable Product
    - Algorithm that matches people into groups based on schedule and skill set compatibility
    - Simple and intuitive user-interface that allows user to upload CSV file with responses from a student survey
    - User can download a CSV file with the results of the algorithm
    - App can allow user to set desired group sizes
- Future Versions 
    - Display the groups on the result page
    - Made the web app more interactive i.e. you can move around the list of students on the results page
    - Make the application all browser compatible
- Key files for the application
    - algorithm.py: code for logic for team formation
    - main.py: code for server-side logic.
    - reader.py: code for logic of reading in CSV file
    - writer.py: code for logic of writing results to CSV file
    - templates/: contains all of the code for front-end, including HTML, JavaScript, and React.js


## Install
*Users can run the application using these steps*
*Follow these instructions to contribute to the project.*

**!! This app is only compatible with Google Chrome or Safari !!**

**Clone this repository.**

- `git clone https://github.com/pelovett/CrestedDuckTeamMatcher.git`

- `cd CrestedDuckTeamMatcher`

**Install NPM if you don't already have it.**

- **macOS**
- - `brew install npm`
- **Debian Linux**
- - `apt-get install npm`
- **Arch Linux**
- - `pacman -S npm`
- **Fedora / Red Hat Linux**
- - `dnf install npm`

**Install Yarn:**

- `npm install -g yarn`

**Install React:**

- `npm install -g react-scripts`


**Install dependencies:**  

If you're running Ubuntu14 you must install pyvenv first:

- `apt-get install python-venv`
- `apt-get install python3-venv`
- `apt-get install python3-pip`

From inside of CrestedDuckTeamMatcher:  

- `bash ./configure`

- `pip3 install flask`

- `pip3 install flask_cors`

In a new tab in Terminal:  

- `cd team-app`

- `yarn install`

*You're ready to code!*  
In your first tab (CrestedDuckTeamMatcher directory):  

- `python3 main.py` - This begins the Flask server.

In your second tab (team-app directory):  

- `yarn start` - This begins the React development server.

Additional command options for React:  

- `yarn run build` - This bundles the application into static files for production (minimization, post-processing, etc.)

- `yarn test` - This starts the test runner.


## License

[MIT](LICENSE)
