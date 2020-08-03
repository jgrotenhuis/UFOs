# UFOs

The goal of this page was for Dana to offer some great search/filter functionality to her page through offering 5 different filter categories to users.  Here is my recommended additional development opportunity to make this page even better:

- Integrate with Google's Maps API so that every filter change that is made by the user is reflected with pins in a Google maps section of the site.  This mapping visual would look pretty cool alongside the table data.

Here are some additional things worth mentioning specific to this challenge:

1) Although my filters work correctly, they are still showing up at the bottom of the web page instead of being "frozen" in the top of the page like they're supposed to be.  It obviously doesn't make sense for them to be at the bottom.  I'm assuming this is a bootstrap issue but couldn't figure out how to fix/move to the top of the page.

2) After filling out the pseudo code file with code to create the new filters, functions, and if statements, I realized after some trial/error and some input from classmates that a good amount of the code was somewhat redundant.   I noticed the following things that didn't appear to be necessary, so I made some changes that probably aren't what the challenge is looking for, but still make the code perform the same outcome:
	a) The request that we save the ID in "// Save the element, value, and id of the filter that was changed" doesn't seem to be necessary since we already get the classes, i.e. #datetime or #city.  Doesn't seem necessary to also save the ID in this case.
	b) In the challenge instructions, they ask us to clear the filters if no input data exists but this also doesn't seem necessary since we're just looking to see if a variable like "date" or "shape" were selected by a user, so I didn't add any code for this.  I also removed the "var filters = {};" code as well.
	c) I moved the "buildTable(filteredData)" function up into my "updateFilters()" function, since it didn't seem necessary to now have a 3rd function with a loop to keep data, since we did that in the "updateFilters()" function.

These changes make more sense than using three separate functions.  

Great challenge. Thanks!