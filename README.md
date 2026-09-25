Welcome to Petal Path, a floral discovery app that helps you find your next floral adventure. Add the cities you're interested in. Browse and discover the options around that area, and plan out the floral experiences you want to have! Whether you're chasing seasonal blossoms in New York, experiencing the annual flower show in Philadelphia, or the flower fields in California, we have got you covered coast to coast.


List of Technologies used:

    Languages:
        • JavaScript
        • HTML
        • CSS
        • SQL
        • Java

    Front End:
        • React
        • Vite

    Backend:
        • Spring Boot
        • MySQL

    Development Tools & Environments:
        • IDEs: IntelliJ IDEA, Visual Studio Code
        • Database Management: MySQL Workbench
        • API : Postman

    Version Control: Git/Gibhub

Installation

Prerequisites: Install Node.js, Java, and MySQL locally.

Set up:
    •  Navigate to where you want the project through the terminal
    •  Clone the repository to your local machine
        - git clone https://github.com/SSINGH264/petal-path-fullstack.git

Backend setup:
    •  Navigate to backend/petalback
    •  Create a MySQL schema named petalpath
    • Navigate to src/main/resources/application.properties and add your local MySQL username and password
    •  Run PetalbackApplication.java to start the backend (URL: http://localhost:8080)
    •  In MySQL Workbench, run src/main/resources/seed.sql to load sample cities and locations

Frontend setup:
    •  Navigate to frontend/petalfront
    •  Install dependencies:
        - In your terminal, run:
            npm install
    •  Start the dev server:
        - In your terminal, run:
            npm run dev
    • Press "o" to open the app, or visit http://localhost:5173

Wireframes: 

    • Home Page
    ![Home page wireframe](./readme-images/home-page-wireframe.png)

    • Events Page 
    ![Events page wireframe](./readme-images/event-page-wireframe.png)

    •E R Diagram
    ![ER Diagram](./readme-images/entity-relationship-diagram.png)

Descriptions of Unsolved Problems/Features:

Unsolved Problems :

    •  No user accounts/authentication. The "cities of interest" list is currently a shared list for anyone using the app, not personal to an individual user. Adding a functional login would let each user keep their own private list, plus a calendar feature to track and plan saved dates after the user saves an event.

    • No dedicated Locations page. Locations are seeded via SQL rather than browsable through the UI. Adding each location's description and a link to search for it would help users decide where to go. Although I had a description along with the location, visually presenting it on the same page  looked too cluttered alongside the Events section. A dedicated page for browsing locations would solve this.

    • No website links for locations. Each location could link out to its official site for hours, admission, and current events.

    • Plant category filtering. For the plant interest page, I wanted users to pick the flowers they are most intrested in and have specific flower types to the locations that have them. Currently, the plant interest section has no backend. Adding that and associating the plant with a location would be useful. 

Future Features: 
    • User accounts with back end functionality
    • Dedicated locations page with URL's
    • Help plant interest page filter places to visit

