---
sidebar_position: 2
---

# Add User

On adding a user in the device you need to call the `nialabs POST api` with `stgid` as query param.

```
https://robot.nialabs.in/api/v1/app?stgid={stgid}
```
where stgid is the serial number of the device you want to send operation command

## Request Data 
The format must be exact as specified.

```js
{
  "Add": {
        "User":{
            "UserID":"string",
            "FirstName":"string",
            "LastName":"string",
            "UserType":"string"
        },
    };
  "OperationID": "string"
  "AuthToken": "string"
  "Time": "string"
}
```

### Callback Response
on successful request the response will be
```js
{
     "Status": "done",
     "OperationID": "",
     "StatusCode": 0
}
```

### Sample Data
```js
{
     "Add": {
          "User": {
               "UserID": "1",
               "FirstName": "Manu",
               "LastName": "Mona",
               "UserType": "User"
          }
     },
     "OperationID": "1jxpjeoasu8wl",
     "AuthToken": "<some-auth-token>",
     "Time": "2020-09-17 11:09:09 GMT +0530"
}
```
