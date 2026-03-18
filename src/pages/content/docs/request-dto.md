---
sidebar_position: 1
---

# Request Dto

On calling the operation in device you need to call the `nialabs POST api` with `stgid` as query param.

```
https://robot.nialabs.in/api/v1/app?stgid={stgid}
```
where stgid is the serial number of the device you want to send operation command

## Request DTO 

```js
export class CreateDeviceCommandDto{
    // stgid?:string;
    Add?: {
        User?:{
            UserID:string;
            FirstName?:string;
            LastName?:string;
            UserType?:string;

        },
        Template?: [
            {
                Type: "Password" | "Card" | "Face" | "FingerPrint" | "Palm";
                UserID:string;
                Data: string;
                Index?: number;
                Size?: number;
            }
        ],
        Photo?:{
            Type:"Base64";
            UserID:string;
            Size?:number;
            Data: string;

        }
    };
    Delete?:{
        User?: { UserID:string;} | "All";
        Log?: "All"
        PunchPhoto?:"All",

    };
    // Load?:{
    //     PunchLog?:{
    //         Filter:{
    //             StartTime:string;
    //             EndTime:string;
    //         }
    //     },
    //     DeviceInformation?: "All"
    // };
    // Resend?:{
    //     PunchLog?:{
    //         Filter:{
    //             StartTime:string;
    //             EndTime:string;
    //         }
    //     },
    //     User?: "All"
    // }
    OperationID: string;
    AuthToken?: string;
    Time: string;

}

```

