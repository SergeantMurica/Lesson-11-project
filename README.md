# Lesson 11 Project
Your client is happy to hear you have learned JavaScript and has hired you to add script elements to the project form you created for them before. Be sure to view and test your webpage before you submit your work, testing that each script element works appropriately.

##

## Project Prep
1. If you haven't done so already, clone the repo to your computer within your course folder.
2. Open the repo within VS Code. You can open this `readme.md` file within VS Code to view the project directions there. 

   > **TIP:** Right click on the file and choose the `Open Preview` option.
3. If there are files and folders present other than this `readme.md` file, take some time to familiarize yourself with the files within the repo so you know where they are located. This will help you when asked to use them within the project directions.

   > **TIP:** Before beginning any work on the project, read through all the steps to understand what you will be doing.
4. Create a subfolder within the Lesson 11 Repo folder called: `scripts`
5. Create a new file within the scripts subfolder called: `javascript.js` 

<br>

***
**IMPORTANT: Be sure to Save and Sync your work to GitHub regularly, applying appropriate Commit comments as you go.**
***



## Create the Script
1. If necessary, open the `javascript.js` file.
2. Create a multi-line comment listing your name as the author and your course and section number.
3. Create a JavaScript statement that will:
   - Target an element with an id of "lastModified".
   - Set the inner HTML of that element to be the document's last modified property.
4. Create a function called `formSubmit` that will create an alert message when the form is submitted. 
   - The alert message should let the user know that the form has been submitted.
5. Create a second function called `formReset` that will unhide an element when the reset button is pressed:
   - The function should include a JavaScript statement that targets an element with an id of "resetMessage" and sets the visibility style value to visible for that element.
6. Create single-line comments before the two functions and the last modified statement explaining what each one does.

***
**This would be a great time to Save, Sync, and apply a Commit!**
***

## Update the Schedule Page
1. If necessary, open the `schedule.html` file.
2. Update the comment within the header element with the correct information.
3. Update the metadata for the page to appropriately reflect the information that the page will contain.
4. Add the appropriate element so the external JavaScript file is loaded as the last element of the body.
5. On the reset button, add the onclick attribute so that the **formReset** function runs when the button is clicked. 
6. On the submit button, add the onclick attribute so that the **formSubmit** function runs when the button is clicked.
7. After the closing form tag, add a paragraph with a statement letting the user know the form has been reset.
   - Apply an id to the paragraph. The ID should match the JavaScript statement: `resetMessage`.
   - Style the id selector (on your external stylesheet). 
      - The visibility should be set to "hidden". ***You want the statement to be hidden until the Reset button is clicked.*** 
      - Set the font to be bold and red.
8. Within the footer element, within the same paragraph as the copyright information, utilize the appropriate elements and attributes to achieve the following:
   - After the small element, add the text and dash: `Last Modified -`
   - Create an inline element with an id of `lastModified`. This is where the last modified information will be placed.

## Example Project
The following image shows the results of clicking the Submit button, clicking the Reset button, and displaying the Last Modified information.
![Screenshot of completed project](https://raw.githubusercontent.com/rsc-cis133DA-in-v12/CourseResources/main/L11-example1.png)


## Submit the Project
Once you have completed your project, you need to let your instructor know that it is ready to be graded. This is done by submitting the Repo URL to the assignment in RioLearn.

   > **TIP:** If you need a refresher on how to submit your work, view: [Submitting Assignments & Viewing Feedback](https://riosalado.coursearc.com/content/cis-public/git-github-and-vs-code/submitting-assignments-and-viewing-feedback).
1. Review your work and make any necessary updates. Save the file. You can either select **FILE>SAVE** or use the keyboard shortcut **CTRL+S**.
2. **Sync** the changes and apply a final **Commit** that says: `Completed final review and updates before submission.`
3. Verify that all files appear on GitHub.

   > **TIP:** You can view any of your repos by going to the GitHub organization for the course - [RSC-CIS133DA-IN-V12 Organization](https://github.com/rsc-cis133DA-in-v12). Once you are viewing the class organization, you should see all of the Repos that you have accepted assignment invitations for. It is recommended that you bookmark this page for future reference. Push (i.e., sync) the files on your computer with GitHub to ensure all files are uploaded to GitHub for your instructor to view.
4. Right-click the link to your repository and select **Copy Link Address**.
5. Go to the Assessing Your Learning page in your RioLearn lesson, and click the link to submit the assignment. Paste the link to your repo in the assignment submission box.
