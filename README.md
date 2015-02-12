[![Stories in Ready](https://badge.waffle.io/jordan-parra/nightowl.png?label=ready&title=Ready)](https://waffle.io/jordan-parra/nightowl)
# nightowl
repo for project night owl

Couche-Tard Dashboard v0.1 Release Date 01/29/15

-------------------------------
          CONTENTS
-------------------------------
   
 * Overview 
 * Requirements
 * Installation
 * Configuration
 * Troubleshooting
 * FAQ
 * License 
 * Maintainers
 
-------------------------------
          Overview 
-------------------------------

The Couche-Tard Dashboard is a lightweight graphic user interface that allows
users to view data analytics on a real time basis. The dashboard provides
an easy to navigate frontend that allows users to look at broad figures, 
or to drill-down and see specific metrics. 

-------------------------------
          Requirements
-------------------------------

Hardware Requirements:
 * 2GB of RAM or more
 * 1.2GHz processor speed or greater
 * 20MB of free hard drive space
 
Software Requirements:
 * Windows XP or greater
 * Up-to-date Adobe Flash Player 
 
-------------------------------
          Installation
-------------------------------

Open the installation wizard and choose the installation location on your HD
Agree to the terms and conditions
Wait for the installation wizard to complete its task

-------------------------------
          Configuration
-------------------------------

In the profile tab, choose your location
The client comes preconfigured with general metrics, however you can specify more
On you home page, pick which widgets go where and how large they appear

-------------------------------
          Troubleshooting
-------------------------------

If the installation failed, redownload the package and try again with a new zip file
If this does not work, try the most up-to-date version (even if not stable)

-------------------------------
          FAQ
-------------------------------

Q: Who wrote this program? 
A: Team Night Owl

-------------------------------
          License
-------------------------------

This software is solely licensed to XYZ. This license was issued 01/29/2015 and does not expire.
This software is not to be shared or copied without consent from the retailer.

-------------------------------
          DB Build Scripts (2/11/2015)
-------------------------------

#
# CREATE TABLE FOR GEOGRAPHIES
#

CREATE TABLE myCTGlobalFootprint (
     geoID INT NOT NULL AUTO_INCREMENT, 
     geoName VARCHAR(20) NOT NULL,
     PRIMARY KEY (geoID)
);

#
# INSERT VALUES INTO GEOGRAPHIES
#

INSERT INTO myCTGlobalFootprint 
     (geoName)

VALUES 
     ('Canada'),
     ('United States'),
     ('Europe'),
     ('International Misc.');

#
#CREATE TABLE FOR BUSINESS UNITS
#

CREATE TABLE myCTBusinessUnits (
     unitID INT NOT NULL AUTO_INCREMENT, 
     unitName VARCHAR(40) NOT NULL,
     unitPersonnelNum INT NOT NULL,
     geoID INT NOT NULL,

     PRIMARY KEY (unitID),
     FOREIGN KEY (geoID) REFERENCES myCTGlobalFootprint(geoID)
);

#
# INSERT VALUES INTO BUSINESS UNTS
#

INSERT INTO myCTBusinessUnits 
     (unitName, unitPersonnelNum, geoID)

VALUES 
     ('U.S. Midwest',300,2),
     ('Great Lakes',400,2),
     ('U.S. West Coast',100,2),
     ('Arizona',340,2),
     ('U.S. Southwest',300,2),
     ('U.S. Southeast',300,2),
     ('Florida',44,2),
     ('Gulf Coast',220,2);

#
#CREATE TABLE FOR TEAMS
#

CREATE TABLE myCTTeams (
     teamID INT NOT NULL AUTO_INCREMENT, 
     unitID INT NOT NULL, 
     projectVolume INT NOT NULL,
     teamSize INT NOT NULL,

     PRIMARY KEY (unitID),
     FOREIGN KEY (unitID) REFERENCES myCTBusinessUnits(unitID)
);

#
# INSERT VALUES INTO TEAMS
#

INSERT INTO myCTTeams 
     (unitID, projectVolume, teamSize)

VALUES 
     (1,3,6),
     (2,4,9),
     (1,1,15),
     (7,3,1),
     (4,3,3);

#
#CREATE TABLE FOR PROJECTS
#

CREATE TABLE myCTProjects (
     projectID INT NOT NULL AUTO_INCREMENT, 
     projectName VARCHAR(40) NOT NULL,
     projectType VARCHAR(30) NOT NULL,
     projectDaysElapsed INT NOT NULL,
     projectOnSchedule TINYINT NOT NULL, 
     projectPriority INT NOT NULL, 
     projectValue DECIMAL(13,2),
     teamAssigned INT NOT NULL, 

     PRIMARY KEY (projectID),
     FOREIGN KEY (teamAssigned) REFERENCES myCTTeams(teamID)
);


#
# INSERT VALUES INTO PROJECTS
#

INSERT INTO myCTProjects
     (projectName, projectType, projectDaysElapsed, projectOnSchedule, projectPriority, projectValue, teamAssigned)

VALUES 
     ('Couche-Tard','CIP',15,1,3,10000,3),
     ('Batman','CIP',15,1,3,10000,3),
     ('Spiderman','CIP',15,1,3,10000,3),
     ('Joker','CIP',15,1,3,10000,3);

#
#CREATE TABLE FOR ISSUES
#

CREATE TABLE myCTIssues (
     issueID INT NOT NULL AUTO_INCREMENT, 
     issueType VARCHAR(40) NOT NULL,
     usersAffected INT NOT NULL, 
     estimatedLoss DECIMAL(13,2),
     teamAssigned INT NOT NULL, 

     PRIMARY KEY (issueID),
     FOREIGN KEY (teamAssigned) REFERENCES myCTTeams(teamID)
);

#
# INSERT VALUES INTO ISSUES
#

INSERT INTO myCTIssues
     (issueType, usersAffected, estimatedLoss, teamAssigned)

VALUES 
     ('Couche-Tard','CIP',15,1,3,10000,3),
     ('Batman','CIP',15,1,3,10000,3),
     ('Spiderman','CIP',15,1,3,10000,3),
     ('Joker','CIP',15,1,3,10000,3);



#
#CREATE TABLE FOR PERSONNEL
#

CREATE TABLE myCTITPersonnel (
     userID INT NOT NULL AUTO_INCREMENT, 
     firstName VARCHAR(40) NOT NULL,
     lastName VARCHAR(40) NOT NULL,
     isManager TINYINT NOT NULL,
     teamID INTO NOT NULL, 

     PRIMARY KEY (userID),
     FOREIGN KEY (teamID) REFERENCES myCTTeams(teamID)
);

#
# INSERT VALUES INTO PERSONNEL
#

INSERT INTO myCTITPersonnel
     (firstName, lastName, isManager, teamID)

VALUES 
     ('Steven','Jones',0,3),
     ('Heather','Stevens',1,3),
     ('Kobe','Bryant',0,3),
     ('Hat','Hatterson',0,3);



-------------------------------
          Maintainers
-------------------------------

Rachel Vaney https://github.com/theroguemuppet/

Jordan Parra https://github.com/Jordan-Parra/

Vincent Nyugen https://github.com/vietcent/

Patrick Morong https://github.com/pmorong/
