---
sidebar_position: 4
---

# Add user photo

On adding a user with data (photo , password, fingerprint, palm, face, card ) in the device you need to call the `nialabs POST api` with `stgid` as query param.

```
https://robot.nialabs.in/api/v1/app?stgid={stgid}
```

where stgid is the serial number of the device you want to send operation command

## Add user photo

### Request Data

The format must be exact as specified.

```js
{
     "Add": {
          "Photo": {
               "Type": "Base64",
               "UserID": "User123",
               "Size": "32312",
               "Data": "iVBORw0KGgoAAAANSUhEUgAAAMYAAADoCAYAAAC0PZsbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAP+lSURBVHhe7P11fBtJ9v0PD2TCju2YmZmZ7dixw8zMzMzMzMzMzMzMPOFkwjSZMNhOznNuyYoVjzI7O7uf3X2+v/njvlqWpVar+77rnlNVXfrO1MwSf8ff8Xd8HX...
          }
     },
     "OperationID": "<unique-operation-id>", // unique operation id
     "AuthToken": "<some-auth-token>",
     "Time": "2020-09-11 16:15:31 GMT +0530"
}
```

## Add user photo with other info

### Request Data

The format must be exact as specified.

```js
{
     "Add": {
          "Photo": {
               "Type": "Base64",
               "UserID": "User123",
               "Size": "32312",
               "Data": "iVBORw0KGgoAAAANSUhEUgAAAMYAAADoCAYAAAC0PZsbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAP+lSURBVHhe7P11fBtJ9v0PD2TCju2YmZmZ7dixw8zMzMzMzMzMzMzMPOFkwjSZMNhOznNuyYoVjzI7O7uf3X2+v/njvlqWpVar+77rnlNVXfrO1MwSf8ff8Xd8HX...
          },
           "User":{
            "UserID":"string",
            "FirstName":"string",
            "LastName":"string",
            "UserType":"string"
        },
         "Template": [
                {
                    "Type": "Fingerprint | Card | Password",
                    "UserID": "100",
                    "Data": "record data"
               },
                               {
                    "Type": "Fingerprint | Card | Password",
                    "UserID": "100",
                    "Data": "record data"
               }
        ]
     },
     "OperationID": "x2caxkknvhft", // unique operation id
     "AuthToken": "<some-auth-token>",
     "Time": "2020-09-11 16:15:31 GMT +0530"
}
```

<!-- end  -->

### Callback Response

on successful request the response will be

```js
{
     "Status": "done",
     "OperationID": "",
     "StatusCode": 0
}
```
