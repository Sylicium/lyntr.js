/// <reference types="node" resolution-mode="require"/>
import * as Types from '../Types/index.js';
export declare class Lynt {
    private _rawdatas;
    private _datas;
    constructor(_datas: Types.API.Lynt);
    get id(): Types.API.Lynt_fixed["id"];
    get content(): Types.API.Lynt_fixed["content"];
    get userId(): Types.API.Lynt_fixed["userId"];
    get createdAt(): Types.API.Lynt_fixed["createdAt"];
    get views(): Types.API.Lynt_fixed["views"];
    get reposted(): Types.API.Lynt_fixed["reposted"];
    get parentId(): Types.API.Lynt_fixed["parentId"];
    get has_image(): Types.API.Lynt_fixed["has_image"];
    get likeCount(): Types.API.Lynt_fixed["likeCount"];
    get likedByFollowed(): Types.API.Lynt_fixed["likedByFollowed"];
    get repostCount(): Types.API.Lynt_fixed["repostCount"];
    get commentCount(): Types.API.Lynt_fixed["commentCount"];
    get likedByUser(): Types.API.Lynt_fixed["likedByUser"];
    get repostedByUser(): Types.API.Lynt_fixed["repostedByUser"];
    get handle(): Types.API.Lynt_fixed["handle"];
    get bio(): Types.API.Lynt_fixed["bio"];
    get userCreatedAt(): Types.API.Lynt_fixed["userCreatedAt"];
    get username(): Types.API.Lynt_fixed["username"];
    get iq(): Types.API.Lynt_fixed["iq"];
    get verified(): Types.API.Lynt_fixed["verified"];
    get parentContent(): Types.API.Lynt_fixed["parentContent"];
    get parentHasImage(): Types.API.Lynt_fixed["parentHasImage"];
    get parentUserHandle(): Types.API.Lynt_fixed["parentUserHandle"];
    get parentUserCreatedAt(): Types.API.Lynt_fixed["parentUserCreatedAt"];
    get parentUserBio(): Types.API.Lynt_fixed["parentUserBio"];
    get parentUserUsername(): Types.API.Lynt_fixed["parentUserUsername"];
    get parentUserVerified(): Types.API.Lynt_fixed["parentUserVerified"];
    get parentUserIq(): Types.API.Lynt_fixed["parentUserIq"];
    get parentUserId(): Types.API.Lynt_fixed["parentUserId"];
    get parentCreatedAt(): Types.API.Lynt_fixed["parentCreatedAt"];
    get raw(): Types.API.Lynt;
    /**
     * Comment the lynt
     * @param comment
     * @param image
     */
    comment(comment: string, image?: Buffer): void;
}
