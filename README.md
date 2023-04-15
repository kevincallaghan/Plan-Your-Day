# Plan Your Day - Day Planner by Kevin Callaghan

## Description

This planner can be used to save a description to each hour of the day so the user can organize and keep track of their day.  This can help you track what you need to get accomplished in a day and when you need to do it.  This planner also updates the current time and will reflect which time slots have already passed, what the current time slot is, and which time slots are in the future based on the background colors for each slot.  By creating this project using JQUERY, I learned a lot about traversing the DOM, particularly by using the parents and siblings method.  I also learned about using JQUERY to call items and add items, an example of which would be creating a click listener on the save-icons that looks for a sibling to add the description.


## Table of Contents

- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Usage

To use this site, simply click on a time-slot, type out whatever you need to remember in the text area, and click the save-icon to save your text.

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

1. I got a better understanding of the parents, children, and siblings methods of JQUERY from the website learn.jquery.com.  The article I referenced can be found here: https://learn.jquery.com/using-jquery-core/traversing/ 

2. I found how to get just the hour from dayJS using their docs.  Here is the link to the page I found it referenced: https://day.js.org/docs/en/get-set/hour 

3. I got help removing the number from the time-block ID field by reading the answers to a similar problem on Stack Overflow.  One answer from user 'calebds' suggested using split() to split the ID string into two parts, and another answer from user 'Corey Danielson' suggested using parseInt to isolate a number.  I found that combining these two suggestions would let me split my ID field and then isolate the number value.  Here is a link to the page I referenced: https://stackoverflow.com/questions/9282935/jquery-get-numbers-from-a-string 


## License

Please refer to the LICENSE document in the repository for License Information.

---
