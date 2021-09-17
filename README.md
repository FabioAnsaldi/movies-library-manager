# movies-library-manager
Tiny movies library manager created by using React framework

## Table of Contents ##

* [Quick summary](#quick-summary)
    -   [Version](#version)
    -   [How to get it](#howtogetit)
* [Summary of set up](#summary-of-set-up)
    -   [About .env configuration](#aboutenvconfiguration)
    -   [Environment](#environment)
    -   [Development mode](#development-mode)
    -   [Production mode](#production-mode)
* [Best practice](#best-practice)
    - [ESLINT](#eslint)
#
### Quick summary ###

The purpose of this project is to manage a well-structured an online portfolios, a movies library application by using Web technologies like JavaScript language and HTML/CSS styles code.

#### Version ####

The actual version is:
> 1.0.0

This application version works with Node `v10.0.0` or higher. 

#### How to get it ####

First fo all, clone the repository project on `https://github.com/FabioAnsaldi/movies-library-manager` into your local store:

```shell
git clone https://github.com/FabioAnsaldi/movies-library-manager.git
```
Now you have to download libraries & frameworks from NPM repositories, the project needs those to be executed on local environment

```shell
npm install
```
#
### Summary of set up ###

#### Environment ####
You have to edit `.env` file. It provides environment properties to running application.
After that you can run the environment mode with a specific setup.

#### About .env configuration ####

> APPLICATION_ADDRESS         : Local application IP or hostname

> APPLICATION_PORT            : Local application PORT

> APPLICATION_API_CONTEXT     : Application APIs context

> APPLICATION_VERSION         : Application version

> DATA_SOURCE_ADDRESS         : Local or external movie data source IP or hostname

> DATA_SOURCE_CREDENTIALS_KEY : Local or external movie data source credentials key

#### Development mode ####

```shell
npm run dev
```
> It runs developing environment.
If you want you can change application APPLICATION_PORT, you can edit `.env` file properly and watch result at specific local URL:
```shell
http://localhost:[APPLICATION_PORT]/
```

#### Production mode ####

```shell
npm run start
```
> In the same way you can edit `.env` file and change APPLICATION_ADDRESS to run the application on production environment: 
```shell
http://[APPLICATION_ADDRESS]:[APPLICATION_PORT]/
```

### Best practice ###

#### ESLINT ####
we are using ESLINT to achieve the goal of making code more consistent and avoiding bugs.
Navigate to [Getting Started](https://eslint.org/docs/user-guide/getting-started) to read more about it.
You will find setup in `.eslintrc.json` file in the root of the project
