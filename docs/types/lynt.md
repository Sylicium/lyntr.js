---
description: Type for lynts retrieved from API as they are without parsing any variable.
---

# Lynt

```typescript
export type Lynt = {
    "id": Types.global.numberAsString;
    "content": string;
    "userId": Types.global.numberAsString;
    "createdAt": Types.global.dateAsString;
    "views": Types.global.numberAsString;
    "reposted": boolean;
    "parentId": Types.global.numberAsString | null;
    "has_image": boolean;
    "likeCount": Types.global.numberAsString;
    "likedByFollowed": boolean;
    "repostCount": Types.global.numberAsString;
    "commentCount": Types.global.numberAsString;
    "likedByUser": boolean;
    "repostedByUser": boolean;
    "handle": string;
    "bio": string;
    "userCreatedAt": Types.global.dateAsString;
    "username": string;
    "iq": number;
    "verified": boolean;
    "parentContent": string | null;
    "parentHasImage": boolean | null;
    "parentUserHandle": string | null;
    "parentUserCreatedAt": Types.global.dateAsString | null;
    "parentUserBio": string | null;
    "parentUserUsername": string | null;
    "parentUserVerified": boolean | null;
    "parentUserIq": number | null;
    "parentUserId": Types.global.numberAsString | null;
    "parentCreatedAt": Types.global.dateAsString | null;
};
```

#### Other used Types

[Type.global.numberAsString](global.md#numberasstring)\
[Types.global.dateAsString](global.md#dateasstring)

After being parsed by lyntr.js, a [Lynt](../classes/lynt.md) raw datas will have [this type](lynt\_fixed.md).
