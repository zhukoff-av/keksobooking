# How to work on a project

## Environment
Tools from **Node.js** and **npm** are used to make it easy to work on the project. All the necessary settings have been made. All you need to do is make sure that **Node.js** is installed on your computer, then go to the project directory in the terminal and run the command _one time_:

```bash
npm install
```

This command will start the process of installing project dependencies from **npm**.

Once the dependencies have been successfully installed, you will be able to use development tools like **ESLint** and **Browsersync** that come with the project. The following scripts are provided for this purpose in the `package.json` file...

### `npm run start`


Starts the local server using **Browsersync**. Once started, the site will be viewable in the browser at `http://localhost:3001`.

If you save changes to any js file in the `/js` directory, the page will automatically reload in the browser. This way you can follow the development of the project in real time.

> Note, once started, **Browsersync** will continue running until you stop it yourself by pressing the `Ctrl` + `C` key combination in the terminal.

### `npm run lint`

Runs **ESLint** to lint js files in the `/js` directory according to the Academy's JavaScript code rules and requirements.

## Project structure

### `css/`, `fonts/`, `img/`

Directories with static project files: styles, images, fonts, etc.

### `js/`

Your main working directory where all scripts of the project will be stored.

### `index.html`

Project Home Page.
### The rest

All other files in the project are service files. Please do not delete or modify them arbitrarily. Only if required by the assignment or mentor.
