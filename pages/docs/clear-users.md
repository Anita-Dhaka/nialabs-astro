---
sidebar_position: 6
---

# Clear Users

On deleting all users in the device you need to call the `nialabs POST api` with `stgid` as query param.

```
https://robot.nialabs.in/api/v1/app?stgid={stgid}
```
where stgid is the serial number of the device you want to send operation command

## Request Data 
The format must be exact as specified.

```js
{
     "Delete": {
          "User": "All"
     },
     "OperationID": "j95xfejt3vr1",
     "AuthToken": "<some-auth-token>",
     "Time": "2020-09-17 12:01:33 GMT +0530"
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
     "Delete": {
          "User": "All"
     },
     "OperationID": "j95xfejt3vr1",
     "AuthToken": "<some-auth-token>",
     "Time": "2020-09-17 12:01:33 GMT +0530"
}
```
