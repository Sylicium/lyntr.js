var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Lynt_rawdatas, _Lynt_datas;
import APIInterface from '../APIInterface.js';
import { Client } from '../Client.js';
export class Lynt {
    constructor(datas) {
        _Lynt_rawdatas.set(this, void 0);
        _Lynt_datas.set(this, void 0);
        __classPrivateFieldSet(this, _Lynt_rawdatas, datas, "f");
        this._id = datas.id;
        __classPrivateFieldSet(this, _Lynt_datas, {
            id: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").id,
            content: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").content,
            userId: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").userId,
            createdAt: new Date(__classPrivateFieldGet(this, _Lynt_rawdatas, "f").createdAt),
            views: parseInt(__classPrivateFieldGet(this, _Lynt_rawdatas, "f").views),
            reposted: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").reposted,
            parentId: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").parentId,
            has_image: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").has_image,
            likeCount: parseInt(__classPrivateFieldGet(this, _Lynt_rawdatas, "f").likeCount),
            likedByFollowed: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").likedByFollowed,
            repostCount: parseInt(__classPrivateFieldGet(this, _Lynt_rawdatas, "f").repostCount),
            commentCount: parseInt(__classPrivateFieldGet(this, _Lynt_rawdatas, "f").commentCount),
            likedByUser: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").likedByUser,
            repostedByUser: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").repostedByUser,
            handle: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").handle,
            bio: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").bio,
            userCreatedAt: new Date(__classPrivateFieldGet(this, _Lynt_rawdatas, "f").userCreatedAt),
            username: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").username,
            iq: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").iq,
            verified: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").verified,
            parentContent: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").parentContent,
            parentHasImage: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").parentHasImage,
            parentUserHandle: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").parentUserHandle,
            parentUserCreatedAt: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").parentUserCreatedAt ? new Date(__classPrivateFieldGet(this, _Lynt_rawdatas, "f").parentUserCreatedAt) : null,
            parentUserBio: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").parentUserBio,
            parentUserUsername: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").parentUserUsername,
            parentUserVerified: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").parentUserVerified,
            parentUserIq: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").parentUserIq,
            parentUserId: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").parentUserId,
            parentCreatedAt: __classPrivateFieldGet(this, _Lynt_rawdatas, "f").parentCreatedAt ? new Date(__classPrivateFieldGet(this, _Lynt_rawdatas, "f").parentCreatedAt) : null,
        }, "f");
    }
    get id() { return __classPrivateFieldGet(this, _Lynt_datas, "f").id; }
    get content() { return __classPrivateFieldGet(this, _Lynt_datas, "f").content; }
    get userId() { return __classPrivateFieldGet(this, _Lynt_datas, "f").userId; }
    get createdAt() { return __classPrivateFieldGet(this, _Lynt_datas, "f").createdAt; }
    get views() { return __classPrivateFieldGet(this, _Lynt_datas, "f").views; }
    get reposted() { return __classPrivateFieldGet(this, _Lynt_datas, "f").reposted; }
    get parentId() { return __classPrivateFieldGet(this, _Lynt_datas, "f").parentId; }
    get has_image() { return __classPrivateFieldGet(this, _Lynt_datas, "f").has_image; }
    get likeCount() { return __classPrivateFieldGet(this, _Lynt_datas, "f").likeCount; }
    get likedByFollowed() { return __classPrivateFieldGet(this, _Lynt_datas, "f").likedByFollowed; }
    get repostCount() { return __classPrivateFieldGet(this, _Lynt_datas, "f").repostCount; }
    get commentCount() { return __classPrivateFieldGet(this, _Lynt_datas, "f").commentCount; }
    get likedByUser() { return __classPrivateFieldGet(this, _Lynt_datas, "f").likedByUser; }
    get repostedByUser() { return __classPrivateFieldGet(this, _Lynt_datas, "f").repostedByUser; }
    get handle() { return __classPrivateFieldGet(this, _Lynt_datas, "f").handle; }
    get bio() { return __classPrivateFieldGet(this, _Lynt_datas, "f").bio; }
    get userCreatedAt() { return __classPrivateFieldGet(this, _Lynt_datas, "f").userCreatedAt; }
    get username() { return __classPrivateFieldGet(this, _Lynt_datas, "f").username; }
    get iq() { return __classPrivateFieldGet(this, _Lynt_datas, "f").iq; }
    get verified() { return __classPrivateFieldGet(this, _Lynt_datas, "f").verified; }
    get parentContent() { return __classPrivateFieldGet(this, _Lynt_datas, "f").parentContent; }
    get parentHasImage() { return __classPrivateFieldGet(this, _Lynt_datas, "f").parentHasImage; }
    get parentUserHandle() { return __classPrivateFieldGet(this, _Lynt_datas, "f").parentUserHandle; }
    get parentUserCreatedAt() { return __classPrivateFieldGet(this, _Lynt_datas, "f").parentUserCreatedAt; }
    get parentUserBio() { return __classPrivateFieldGet(this, _Lynt_datas, "f").parentUserBio; }
    get parentUserUsername() { return __classPrivateFieldGet(this, _Lynt_datas, "f").parentUserUsername; }
    get parentUserVerified() { return __classPrivateFieldGet(this, _Lynt_datas, "f").parentUserVerified; }
    get parentUserIq() { return __classPrivateFieldGet(this, _Lynt_datas, "f").parentUserIq; }
    get parentUserId() { return __classPrivateFieldGet(this, _Lynt_datas, "f").parentUserId; }
    get parentCreatedAt() { return __classPrivateFieldGet(this, _Lynt_datas, "f").parentCreatedAt; }
    // Additionnal properties
    get me() { return Client.Instance.user.handle === __classPrivateFieldGet(this, _Lynt_datas, "f").handle; }
    get raw() {
        console.log(this.iq);
        return __classPrivateFieldGet(this, _Lynt_rawdatas, "f");
    }
    /**
     * Comment the lynt
     * @param comment
     * @param image
     */
    comment(comment, image) {
        if (image)
            throw new Error("Image is not supported yet");
        let payload = {
            id: __classPrivateFieldGet(this, _Lynt_datas, "f").id,
            content: comment,
        };
        if (image) {
            payload['image'] = image;
        }
        APIInterface.requestEndpoint('POST', `/api/comment`, payload, {
            'Referer': `https://lyntr.jnnj.xyz/?id=${__classPrivateFieldGet(this, _Lynt_datas, "f").id}`,
            'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary75Bv3AOwNH7vJFNe',
        });
    }
    /**
     * Relynt the lynt
     */
    relynt(comment, image) {
        if (image)
            throw new Error("Image is not supported yet");
        let payload = {
            content: comment,
            reposted: __classPrivateFieldGet(this, _Lynt_datas, "f").id,
        };
        if (image) {
            payload['image'] = image;
        }
        APIInterface.requestEndpoint('POST', `/api/lynt`, payload, {
            'Referer': `https://lyntr.jnnj.xyz/?id=${__classPrivateFieldGet(this, _Lynt_datas, "f").id}`,
            'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary75Bv3AOwNH7vJFNe',
        });
    }
}
_Lynt_rawdatas = new WeakMap(), _Lynt_datas = new WeakMap();
//# sourceMappingURL=Lynt.js.map