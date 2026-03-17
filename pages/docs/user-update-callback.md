---
sidebar_position: 2
---

## User update callback

when the user is updated in the device manually, like face, fingerprint, password this callback is triggered. the device `stgid` will be passed in the callback url as `query` params


### Data Format 

```js
{
   "RealTime": {
        "UserUpdated": {
            "FirstName": "",
            "LastName": "",
            "UserType": "Admin" / "User",
            "UserID": "enrollid", // number
            "OperationTime": "time",
            Photo,
            Template
        },
        "AuthToken": "",
        "OperationID": "xxxxxxx",
        "Time": Date(), // time of the event
        "DownloadedAt": Date(),
}


```


### User Photo Updated

#### Sample Data

```js
{
    "RealTime": {
      "UserUpdated": {
        "FirstName": "ALOK SINGH",
        "LastName": "",
        "UserType": "User",
        "UserID": 3,
        "OperationTime": null, // string
        "Photo": {
          "Type": "Base64",
          "UserID": 3,
          "Size": 49964,
          "Data": "/9j/4AAQSkZJRgABAQAAAQABAAD/CgoKCgoKCj/wAARCAKAAeADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/...../sffagegeqef3F#RF3rF#V#Rv3r#RV#R"
        },
        "Template": []
      },
      "AuthToken": "<some-auth-token>",
      "OperationID": "c3e4c78f-530f-428e-9ff4-bed7f1037af6<unique>", //uniquely generated for each job
      "Time": null, // string
      "DownloadedAt":"2025-04-29T05:43:04.474Z" // Date      
    }
  }

```

<!-- 
{
     "RealTime": {
          "UserUpdated": {
               "OperationTime": "2020-09-17 19:04:55 GMT +0530",
               "Template": [
                    {
                         "Type": "Face",
                         "UserID": "2",
                         "Size": "28112",
                         "Index": "0",
                         "Data": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwU....avH9auAZSVIx2xX0H+3mBB+1t8YLWJQscfxW8RRIo7KNUuQB+Qr5v1aRi3X/ADzXQ2dsI3RSnujknd1FQNckAl2PTOM1FdMRGx69Kgk4GQenSkka8jbsWzcgDcGpVuiR949exqkGZhuJ5JqNmLtk8fSkn2GoO5//2Q=="
                    }
               ]
          },
          "OperationID": "5qwmu986vm7c",
          "AuthToken": "<some-auth-token>",
          "Time": "2020-09-17 13:15:31 GMT +0000"
     }
}
 -->


### User Updated with Fingerprint

#### Sample Data

```js

{
     "RealTime": {
          "UserUpdated": {
               "OperationTime": "2020-09-17 12:48:28 GMT +0530",
               "Template": [
                    {
                         "Type": "Fingerprint",
                         "UserID": "2",
                         "Size": "1176",
                         "Index": "6",
                         "Data": "SjNTUzIxAAADcHcECAUHCc7QAAAbcWkBAAAAg50dvXBiAJEPRwCsAO1/uQB0ACAPvQCacGgPTACfACMPH3CnAE4P3gBqAKp/dwCxAAcPYwCwcJgPLwC1ABcPh3C4AGYPYAAAAEx/tADPAJ8PQQDTcBsPhwDjAP4PXnDkAEkPkwAgAC1/LADyAFMPgQD1cEwPZAARAf0Pn3AQASkPgQDhAS1+WgAnAUUOWAArcSoNkgAqAekMp3A0AasNbAD9AaF9igA5Aa4MuABJcaAOPXEj6/......wdwRftPPAQQZRInNAQQmxQtwosDExEUQ8QFEGfQN49zEZYtK8ED1ZEtQcAXENMrtwZlwvHFxrHBwcFGcwBgXjkQ/QMQbTkojwUQWEEQP5dCA3tCAQAAC0WXAA=="
                    }
               ]
          },
          "OperationID": "vq01h140jswo",
          "AuthToken": "<some-auth-token>",
          "Time": "2020-09-17 13:15:31 GMT +0000",
          "DownloadedAt":"2025-04-29T05:43:04.474Z" // Date      
     }
}
```


### User Updated with Password

#### Sample Data

```js
{
     "RealTime": {
          "UserUpdated": {
               "UserID": "8",
               "FirstName": "",
               "LastName": "",
               "UserType": "User",
               "OperationTime": "2020-09-17 15:33:38 GMT +0530",
               "Template": [
                    {
                         "Type": "Password",
                         "UserID": "8",
                         "Data": "124445"
                    }
               ]
          },
          "OperationID": "oldcu1ekxdbz",
          "AuthToken": "<some-auth-token>",
          "Time": "2020-09-17 10:03:38 GMT +0000",
          "DownloadedAt":"2025-04-29T05:43:04.474Z" // Date      
     }
}
```



### User Updated with Card

#### Sample Data

```js
{
     "RealTime": {
          "UserUpdated": {
               "UserID": "8",
               "FirstName": "",
               "LastName": "",
               "UserType": "User",
               "OperationTime": "2020-09-17 15:33:38 GMT +0530",
               "Template": [
                    {
                         "Type": "Card",
                         "UserID": "8",
                         "Data": "1232522435"
                    }
               ]
          },
          "OperationID": "oldcu1ekxdbz",
          "AuthToken": "<some-auth-token>",
          "Time": "2020-09-17 10:03:38 GMT +0000",
          "DownloadedAt":"2025-04-29T05:43:04.474Z" // Date      
     }
}
```





### Callback Response
```js
{
    status:"done"
}

```
or you can send `status:ok`

```js
{
    status:"ok"
}

```



the status code must be either `200` or `201`

#### Note: If your webhook does not respond with a status code 200 or 201, the callback URL will stop receiving subsequent callbacks. The system will retry sending the data with increasing time intervals (exponential backoff).


# Congratulations!

You have just learned the **How to integrate callback hooks** and get the realtime callback data from **Niya Labs**.

Nialabs has **much more to offer**!

## What's next?

- Go to [Nialabs Portal](https://portal.nialabs.in/)

