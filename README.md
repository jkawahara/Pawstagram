# Petstagram
### 1. Why / Background
  * This is Berkeley Coding Boot Camp (BCBC) project 2 by group 6.
    * The BCBC curriculum generally focuses on JavaScript along with HTML/CSS, using the MERN (MongoDB, Express, React, Node) software stack, to teach web development skills across the client and server. 
  * Petstagram is a full-stack social media web based application that enable users to post photos of their pets instead of themselves, comment on each other’s pets and join communities for meetups such as dog parks, breed enthusiasts, etc.
 ### 2. What / Objectives / User Stories
  * This project development, from design through deployment of the application, used the following web development technologies:
    * Server-side: Node.js w/ Express web app framework; MySQL & Firebase DBs for data persistence w/ Sequelize ORM; Passport for user authentication
    * Client-side: Handlebars.js templating system for views; Material Bootstrap framework for HTML/CSS
  * User Stories, by categorization:
    * Design and develop Wireframe mockup including conceptual page types: login, user profile, pet profile, community
    * Design and develop Model schema including ORM (Sequelize) and DB (MySQL, Firebase) configuration
    * Design and develop View on UI including layouts and templates (Handlebars)
    * Design and develop Controller functions including routing and required CRUD operations
    * DB Tables PLACEHOLDER: split across team, 1-2 tables each (Users, Pets, Communities, etc) 
    * The JavaScript Glue PLACEHOLDER: split across team, and organize into actual user stories
 ### 3. How / Design Description
  * The scope of the project fits ell into [Agile methodology with Scrum and Kanban frameworks](https://en.wikipedia.org/wiki/Agile_software_development). Due to sufficient scope and group project, GitHub's built-in tools were used to support project execution:
    * [Projects](https://github.com/sgenini/projectTwo/projects/1): Kanban board for documenting user stories and overall progress
    * [Issues](https://github.com/sgenini/projectTwo/issues): Issue tracking for user stories, features and bug report
  * Functionality - refer to [video of application user flow](https://drive.google.com/open?id=1-7NwQiifKQjHtdcAljDwRRVcP_7MdPFq):
    * Design Description
      * Application Setup (server.js)
        * Configure Express web app framework listening on process.env.PORT (Heroku) or default to 8080. Parse URL encoded, any type including nested objects, and JSON and call appropriate routing.
        * Required modules: npm (express, express-handlebars, method-override, body-parser)
        * Relevant functions: require(), use(), engine(), set(), listen() 
        * Export: N/A
      * Database Setup (schema.sql, seeds.sql)
        * Create burgers_db database and burgers table with attributes (burger_name, devoured, date) with id as primary key
        * Available Seed with 4 burgers
      * Configuration Setup (connection.js, orm.js)
        * Configure MySQL and ORM configuration
        * Include connection conditional to enable MySQL with Heroku deployment using JawsDB add-on
        * Assign methods to ORM object, selectAll(), insertOne() and updateOne() methods, respectively for Read, Create and Update operations
        * Declare functions for 2 helper functions to support queries in SQL syntax
        * Required modules: npm (mysql), connection.js
        * Relevant functions: require(), createConnection(), connect(), exports(), printQuestionMarks(), objToSql(), selectAll(), insertOne(), updateOne(), query()
        * Export: connection, orm
      * Model Setup (burger.js)
        * Define ORM selectAll(), insertOne() and updateOne() methods in burger object
        * Required modules: orm.js
        * Relevant functions: require(), exports(), selectAll(), insertOne(), updateOne()
        * Export: burger
      * Controller Setup (burger_controller.js)
        * Assign routing for views to router: operations (Read, Create, Update), respectively for HTTP requests (get, post, put)
        * Required modules: npm (express), burger.js
        * Relevant functions: require(), exports(), get(), post(), put()
        * Export: router
      * View Setup (server-side: main.handlebars, index.handlebars, burger-block.handlebars, client-side: views.js, burger_style.css, burger.img)
        * There are no client-side HTML assets, however, use views.js asset for HTTP requests (PUT, POST) and burger_style.css asset for background color
        * Use Handlebars.js as web templating system for main layout, index and burger-block partial
        * main.handlebars: include boilerplate HTML5 doctype and viewport meta tag along with Bootstrap CSS and jQuery
        * index.handlebars: use Bootstrap grid layout for positioning burgers 2 columns based on devoured state and form (add new burger)
        * burger-block.handlebars: show button to devour burger if not devoured state
  * Prerequisites for Development:
    * MacBook Air (Intel Core i7, 2.2 GHz, 1 Processor, 2 Cores, 8GB)
    * 64 bit operating system 
    * git version 2.18.0
    * Visual Studio Code Version 1.29.1
    * [GitHub projectTwo](https://github.com/sgenini/projectTwo)
    * Chrome Version 70.0.3538.110 (Official Build) (64-bit)
  * Built With:
    * Server-side:
      * [Node.js](https://nodejs.org/docs/latest/api/documentation.html)
        * [npm](https://www.npmjs.com/)
          * [express](https://www.npmjs.com/package/express)
          * [express-handlebars](https://www.npmjs.com/package/express-handlebars)
          * [method-override](https://www.npmjs.com/package/method-override)
          * [mysql](https://www.npmjs.com/package/mysql)
    * Client-side: HTML, CSS, JavaScript
    * Cloud: [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) with [JawsDB MySQL plugin](https://devcenter.heroku.com/articles/jawsdb)
  * Installing:
    * For further development or use of this application, clone or download application files from GitHub, which is organized into the following directory structure:
      * /projectTwo (application root directory level)
        * /config
          * config.json
        * /models
          * communitiesTBD
          * index.js
          * petsTBD
          * schema.sql
          * seeds.sql
          * usersTBD
        * /node_modules (ignored by git) - generated first time npm install executes
        * /public
          * /js
            * index.js
          * /styles
            * style.css
          * /img
            * TBD
        * /routes
          * apiRoutes.js
          * htmlRoutes.js
        * /test
          * test.js
        * /views
          * /layouts
            * main.handlebars
          * /partials
            * TBD
          * index.handlebars
        * .eslintignore
        * .eslintrc.json
        * .gitignore
        * .travis.yml
        * LICENSE
        * package-lock.json
        * package.json - includes dependencies
        * README.md
        * server.js
    * Once the application files are ready per the above structure, go to the application root directory level
      * Enter the following in termminal to install required node packages. This executes by referring to the included dependencies in package.json and creates required node packages in /node_modules and package-lock.json:
        * npm install
  * Running the tests:
    * Unit testing & integration testing TBD informally executed
  * Deployment:
    * Deployed on [Heroku](https://dashboard.heroku.com/apps)
 ## Versioning
  * For the versions available, see the tags on this repository.
 ## Authors
  * Nick Morales, Orion Abrams, Stéphane Genini, John Kawahara.
  * N/A- See also the list of contributors who participated in this project.
 ## License
  * This project is licensed under the [MIT License](LICENSE).
 ## Acknowledgments
  * Thanks to BCBC program personnel, especially our instructor, David Hallinan, along with our TAs Hannah Bowers and Glo Austin, for their guidance and support.
