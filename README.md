# FriendFinder

## Take a look

## Technologies Used

### Front End

- HTML 5
- CSS 3
- JavaScript
- jQuery
- Bootstrap 4

### Back End

- Express
- Node

### Deployment

- Heroku

## Overview

The purpose of this project was to create a full-stack site that takes in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## Criteria

1. Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

```json
{
  "name": "Ahmed",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
}
```

6. Determine the user's most compatible friend using the following as a guide:

   - Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   - With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     - Example:
       - User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       - User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       - Total Difference: **2 + 1 + 2 =** **_5_**
   - Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
   - The closest match will be the user with the least amount of difference.

7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
   - The modal should display both the name and picture of the closest match.

## Status

In Progress.

## Notes

### Express

- app.get(path, callback [, callback …])

- res.sendFile(path [, options][, fn])

- app.use([path,] callback [, callback...])

### Node

- path.join([...paths])
  Added in: v0.1.16
  ...paths <string> A sequence of path segments
  Returns: <string>
  -- The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
  -- Zero-length path segments are ignored. If the joined path string is a zero-length string then '.' will be returned, representing the current working directory.

## Sources

This project may have code from class activities, office hours notes, or from seeking help from TAs and teachers.
