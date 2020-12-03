Routing layout

- Home Page
  - List of Students page
  - Block page

Home page will have two buttons to route to students and block.

User story breakdown:

**List of Students Page**

- As an admin, I want to clearly see how many students are on the course so that I can plan accordingly.
- As an admin, I want to be able to view a list of the students currently on the course.
- As an admin, I want to see which block each student is in so that I know where they are in the course.

**Things to filter by - check API methods:**

- As an admin, I want to see a list of graduates so I can feel good about my job.
- As an admin, I want to be able to see a list of students from a specific block block.
- As an admin, I want to add new students to the system so that I can begin tracking them.
- As an admin, I want to see which cohort a student began the course on so that I can see how starting cohorts diverge.

**Altering state**

- As an admin, I want to be able to remove people from the course so that we can account for the occasional leaver.
- As an admin, I want to graduate all relevant students from their respective blocks when it’s appropriate to do so.
<!-- Filter students by block they are on, pass student-ids who are repeating, check if params for student-ids who are repeating is empty, if it is then iterate through all students in that block, change current block to new block, add new block to each students block history. If there is people there, filter students on block by required id into 2 arrays. Iterate through first array as above, the iterate through second array of repeating students, not changing current block but adding the repeated block to block history. -->

**Things to decide:**

- Where/how adding this info
- Option to clikc through to a specific person, or search to take you to that person in the list
- As an admin, I want a visual indicator that I’ve either graduated a student or not from a block, so I can make sure I’ve considered all the students.
- As an admin, I want a visual indicator of ‘how many times’ a student has been on a block so that I can make sure we’re properly supporting students who are resitting.
<!-- ? -->

**Block page**
Using stats at top and general list of blocks below

- As an admin, I want to clearly see how many students are on each block so that I can plan accordingly.

- As an admin, I want to see how many pathways through the course there have been so that we can communicate that to relevant stakeholders.
<!-- ? -->
