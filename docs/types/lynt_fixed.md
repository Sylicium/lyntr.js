---
description: Type for lynts after they've been retrieved from API and variable parsed
---

# Lynt\_fixed

```typescript
export type Lynt_fixed = {
    "id": Types.global.numberAsString;
    "content": string;
    "userId": Types.global.numberAsString;
    "createdAt": Date;
    "views": number;
    "reposted": boolean;
    "parentId": Types.global.numberAsString | null;
    "has_image": boolean;
    "likeCount": number;
    "likedByFollowed": boolean;
    "repostCount": number;
    "commentCount": number;
    "likedByUser": boolean;
    "repostedByUser": boolean;
    "handle": string;
    "bio": string;
    "userCreatedAt": Date;
    "username": string;
    "iq": number;
    "verified": boolean;
    "parentContent": string | null;
    "parentHasImage": boolean | null;
    "parentUserHandle": string | null;
    "parentUserCreatedAt": Date | null;
    "parentUserBio": string | null;
    "parentUserUsername": string | null;
    "parentUserVerified": boolean | null;
    "parentUserIq": number | null;
    "parentUserId": Types.global.numberAsString | null;
    "parentCreatedAt": Date | null;
};
```

#### Other used types

[Type.global.numberAsString](global.md#numberasstring)\
[Types.global.dateAsString](global.md#dateasstring)
