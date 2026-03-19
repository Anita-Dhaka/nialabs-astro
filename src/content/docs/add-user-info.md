---
sidebar_position: 3
---

# Add user with info

On adding a user with data (photo , password, fingerprint, palm, face, card ) in the device you need to call the `nialabs POST api` with `stgid` as query param.

```
https://robot.nialabs.in/api/v1/app?stgid={stgid}
```
where stgid is the serial number of the device you want to send operation command

## Add User With Password
when adding user with password

### Request Data 
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
         "Template": [
               {
                    "Type": "Password",
                    "UserID": "100",
                    "Data": "3211"
               }
        ]
    };
  "OperationID": "string"
  "AuthToken": "string"
  "Time": "string"
}
```





## Add User With Card
when adding user with Card

### Request Data 
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
         "Template": [
               {
                    "Type": "Card",
                    "UserID": "100",
                    "Data": "3211"
               }
        ]
    };
  "OperationID": "string"
  "AuthToken": "string"
  "Time": "string"
}
```







## Add User With Card and Password
when adding user with Card and Password

### Request Data 
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
         "Template": [
               {
                    "Type": "Card",
                    "UserID": "100",
                    "Data": "3211"
               },
                {
                    "Type": "Password",
                    "UserID": "100",
                    "Data": "3211"
               }
        ]
    };
  "OperationID": "string"
  "AuthToken": "string"
  "Time": "string"
}
```



## Add User With Fingerprint
when adding user with Fingerprint

### Request Data 
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
         "Template": [
                {
                    "Type": "Fingerprint",
                    "UserID": "100",
                    "Data": "fingerprintdata"
               }
        ]
    };
  "OperationID": "string"
  "AuthToken": "string"
  "Time": "string"
}
```
