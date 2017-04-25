# CrestedDuckTeamMatcher
A tool for creating optimum teams in a class


## Table of Contents

- [Technologies](#technologies)
- [Resources Used](#resources-used)
- [Install](#install)
- [License](#license)


## Technologies

- [React.js](https://facebook.github.io/react/) - Facebook's popular JavaScript front-end framework.
- [Create-React-App](https://github.com/facebookincubator/create-react-app) - Facebook's generator.
- [Babel](https://babeljs.io/) - JavaScript compiler to unify all the different versions of JS that may have been used or will be used in the future.
- [Yarn](https://yarnpkg.com/) - Facebook's open source JavaScript package manager. There are a few differences between Yarn and Node Package Mangaer (npm), but the main differentiation is that Yarn locks dependencies so your project doesn't break when external resources change their code.
- [Material UI](http://www.material-ui.com/#/) - A Set of React Components that Implement Google's Material Design.
- [Flask](http://flask.pocoo.org/) - Flask is a microframework for Python based on Werkzeug, Jinja 2 and good intentions.


## Resources Used


## Install
*Follow these instructions to contribute to the project.*

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
From inside of CrestedDuckTeamMatcher:  

- `bash ./configure`

- `pip3 install flask`

- `pip3 install flask_cors`

In a new tab in Terminal:  

- `cd team-app`

- `yarn install`

*You're ready to code!*  
In your first tab (CrestedDuckTeamMatcher directory):  

- `python3 main.py`

In your second tab (team-app directory):  

- `yarn start` - This begins the development server.

Additional command options for React:  

- `yarn run build` - This bundles the application into static files for production (minimization, post-processing, etc.)

- `yarn test` - This starts the test runner.


## License

[MIT](LICENSE)
