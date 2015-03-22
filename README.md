#Couche-Board

Couche-Tard Dashboard  
current release: v0.3

##Overview

Couche-Board is a browser-based GUI dashboard that will allow Couche-Tard management to view company metrics.

##Official Site

Visit [couche-board.herokuapp.com](https://couche-board.herokuapp.com) to use our version of the Couche-Board application.

 
##Development Environment

###Cloud9 IDE

For the sake of a consistent environment, we recommend that you use the browser-based IDE, [Cloud9](https://c9.io/), as your development environment. Cloud9 is a very useful service because it gives developers access to a cloud-based environment with commonly used tools and software.

Here is list of instructions to get started with Cloud9:

1. Sign up for an account at [c9.io](https://c9.io/)
2. Go to your dashboard
3. Click the "Create New Workspace" button in the top left and select "Clone From URL"
4. In the dialog box that appears:
 * Enter https://github.com/asu-cis-capstone/nightowl into the Source URL field
 * Leave every other field as-is
 * Click "Create"
5. Wait for Cloud9 to provision your new workspace
6. Select your workspace from the left-hand navigation
7. Click "START EDITING"
8. Switch to the new tab where your workspace is loaded
 
You will see in your workspace that you have the repository loaded into the file explorer along the left side. 

###Technology Stack

* **Ubuntu 14.04**
* **Phusion Passenger**
* **PostgreSQL 9.3.5**
* **Ruby 2.1.5**
* **Rails 4.2.0**
 
This is the stack used in production. For development and testing, we will use this stack with the exception of Phusion Passenger, in which case the default WeBrick web server will suffice.

By using Cloud9, you have most of the software in the technology stack installed. The exception being the correct version of Rails, which you will install with the help of [Bundler](http://bundler.io/) and [RVM](https://rvm.io/) in the next section.

###Rails/Dependency Installation

At this time, Cloud9 has Rails 4.1.6 preinstalled, but we use Rails 4.2.0, so it's best to have that version instead. In this section, we will install Rails along with all the other project dependencies in our Cloud9 environment.

[RVM](https://rvm.io/) (Ruby enVironment Manager) is a useful tool to pick and choose which ruby version and set of gems (a.k.a. gemsets) that you would like to have loaded in your environment. RVM is preinstalled in your Cloud9 environment, so we can start using it immediately.

```
# Create a project specific gemset
$ rvm gemset create nightowl

# Switch to the gemset
$ rvm gemset use nightowl

# rails4 should have been the gemset you were in before the switch to nightowl
# Delete that gemset to free up the limited disk space you have in Cloud9
$ rvm gemset delete rails4

# Use Bundler to install all the non-production group dependencies in the Gemfile, which includes Rails 4.2.0
# Make sure to run this command in the root directory of the Rails app that contains the Gemfile
$ bundle install --without production
```

##Database Setup

Cloud9 comes preinstalled with PostgreSQL. Therefore, it's not necessary to install it, but we still have to configure it to work with Couch-Board.

Start the database server:
```
$ sudo service postgresql start
```

You need to complete two configuration tasks in order to create the Couche-Board databases: 
 
1. Create an "ubuntu" role
2. Change the default encoding scheme to UTF8
 
The steps to accomplish them will follow in a bit, but first start up the client Postgres interactive prompt in the terminal:

```
$ sudo sudo -u postgres psql

# Below is what you should see after the command
postgres=#
```
 
We will accomplish the tasks by inputting some SQL statements. Now, for accomplishing the tasks:

1. Create an "ubuntu" role 

Enter the following SQL statement:
```
CREATE ROLE ubuntu CREATEDB LOGIN;
```

2. Change the default encoding scheme to UTF8
 
Enter the following SQL statements:
```
UPDATE pg_database SET datistemplate = FALSE WHERE datname = 'template1';

DROP DATABASE template1;

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UNICODE';

UPDATE pg_database SET datistemplate = TRUE WHERE datname = 'template1';

# Below is a Postgres meta command
\c template1

VACUUM FREEZE;
```

Now you can create the Couche-Board databases. Run the following command:
```
$ bundle exec rake db:create:all
```

*Upcoming*
Populating the database

##Authors

* [Patrick Morong](https://github.com/pmorong)  
* [Vincent Nguyen](https://github.com/vietcent)  
* [Jordan Parra](https://github.com/Jordan-Parra)  
* [Rachel Vaney](https://ithub.com/theroguemuppet)

##Videos
https://www.youtube.com/watch?v=_DsjgyGgHZA

##Thanks

* Ric Spargo
* Joe Clark



