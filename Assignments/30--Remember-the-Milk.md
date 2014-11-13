## TodoMVC

### All About User Stories

#### EPIC: I can create _a **List of Tasks**_ so that...

* I can keep track of what I need to do next.
* I can track what I have already done.
* I can track important due dates.
* I can stay out of trouble.
* I can manage my time better.

----

#### I can _add a **Task** to the **List of Tasks**_ to that I can _be reminded to do it_.

----

#### I can _mark an incomplete **Task** as completed_ so that I can _track what has been done_.

* Click a button to mark the task as complete; what does that look like?
* Can I change my mind and mark it as incomplete again?
* Strikethough on text would be a neat effect...

----

#### I can _view a **List of Tasks** that are incomplete_ so that I can _pick what I need to do next_.

----

#### I can _remove **Tasks** from the **List of Tasks**_ so that I can _keep my list clean_.

* Click a button on each item to remove it; confirm first?
* Can I get it back after I remove it? Trash can vs black hole of death?
* Can I remove more than one item at a time? All completed items?

----

#### I can _change a **Task** on the **List of Tasks**_ so that I can _fix my typos and be more specific about them_.

---

### All About MVC -- Model-View-Controller

#### Models: Nouns

* List of Tasks: Collection
  * Properties:
  * Methods:
    * CRUD
    * Add a Task
    * Remove a Task
    * Get a specific Task
    * Change order of Tasks?
* Task
  * Properties:
    * Text Description
    * Completion Status: done or not?
    * Parent Task?
    * Due Date?
    * Color / Category?
  * Methods:
    * Create
    * Mark Complete
    * Edit Text
    * Remove / Delete Task
    * Archive?

#### Controllers: Traffic Cop

* Workflows:
  * Edit a specific **Task**:
    * Get a specific **Task** from the **List of Tasks**
    * Edit the **Task** (and save the changes)
    * Display the view of the **List of Tasks**
  * Add a new **Task**:
    * Accept input: Text
    * Create a **Task**
    * Add new **Task** to **List of Tasks**
    * Display the view of the **List of Tasks**

#### Views: Display Items

* List of Individual Tasks
  * Filtered by:
    * All Tasks
    * Only Completed Tasks
    * Only Uncompleted Tasks
* Individual Task
  * Incomplete Task
  * Complete Task
  * Marked for Deletion? (waste bin)
  * Overdue Task? (past due date)
* Add a Task
* Edit a Task
