---
sidebar_position: 2
---

# Punch Log Callback

When the realtime punch log is received our engine will call the callback url using `POST` method and `stgid` is appended in the queryParam of the callback url and the data is passed in the body.

## Request Data 

```js
{
      "RealTime": {
          "PunchLog": {
              "UserId": "User Id ",
              "LogTime": "2023-08-04 12:03:00", // string
              "Type": "Face",
              "InputType": "In|Out",
              "Temperature": "", // if available
          },
          "AuthToken": "xxxxxx",
          "OperationID": "randomid",
          "Time": "2023-08-04 12:03:00", // string
          "DownloadedAt": Date(), // Date
      }
  }

```


### Sample Data
```js


{
    "RealTime": {
      "PunchLog": {
        "UserId": 259623,
        "LogTime": "2025-04-16 10:45:22", // string
        "Type": 8,
        "InputType": 0,
        "Temperature": ""
      },
      "AuthToken": "<some-auth-token>",
      "OperationID": "63a71db2-b8e7-4b99-937f-15fcc054acc8",
      "Time": "2025-04-16 10:45:22", // String Format
      "DownloadedAt": "2025-04-16T05:15:25.615Z" // Date Format
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


Make sure you get all the necessary information from the sample data and we call http `POST` method to the provided URL

