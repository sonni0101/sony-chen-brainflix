# Worklog
The current process completed sprint one of Brainflix. It was a nice exercise to get hands-on experience with React. I will add a more in-depth introduction to this project once it’s completed. For now, I’ll treat this as a work log.

# Diving deeper reference
I used these resources as learning materials and references to solve the “Diving Deeper” part:

https://date-fns.org/
https://stackoverflow.com/questions/69733368/date-fns-format-distance-is-not-in-correct-words
https://www.npmjs.com/package/date-fns/v/3.0.1

**Save comment to json - sprint 3:**
I was stuck for a while when trying to add a comment. It wouldn’t persist or upload into the JSON file, so I did some research to figure out how to properly push a new comment into the JSON file, below are the reference I found to help me to achieve this function. 

https://stackoverflow.com/questions/42179037/writing-json-object-to-a-json-file-with-fs-writefilesync
https://stackoverflow.com/questions/36856232/write-add-data-in-json-file-using-node-js
https://httpstatusdogs.com/
https://www.geeksforgeeks.org/node-js-fs-readfilesync-method/ (Read json file)

**Delete comment from json - sprint 3:**
I utilize the commenting post function and use the logic of finding the comment index and splice to remove it. The DELETE /videos/:videoId/comments/:commentId route starts by extracting videoId and commentId from the request parameters. It then searches for the video with the given videoId in the videoData array using the find method. If the video is not found, it responds with a 404 error. If the video exists, the code looks for the specific comment within the video’s comments array by finding the index of the comment with the given commentId using the findIndex method. If the comment is found, the splice method is used to remove it from the array at the located index.

https://expressjs.com/en/starter/basic-routing.html
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
