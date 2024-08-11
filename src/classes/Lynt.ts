import * as Types from '../Types/index.js';
import APIInterface from '../APIInterface.js';
import { Client } from '../Client.js';


export class Lynt {
    #rawdatas: Types.API.Lynt;
    #datas: Types.API.Lynt_fixed;
    _id: string;

    constructor(datas: Types.API.Lynt) {
        this.#rawdatas = datas;
        this._id = datas.id;
        this.#datas = {
            id:                     this.#rawdatas.id,
            content:                this.#rawdatas.content,
            userId:                 this.#rawdatas.userId,
            createdAt:              new Date(this.#rawdatas.createdAt),
            views:                  parseInt(this.#rawdatas.views),
            reposted:               this.#rawdatas.reposted,
            parentId:               this.#rawdatas.parentId,
            has_image:              this.#rawdatas.has_image,
            likeCount:              parseInt(this.#rawdatas.likeCount),
            likedByFollowed:        this.#rawdatas.likedByFollowed,
            repostCount:            parseInt(this.#rawdatas.repostCount),
            commentCount:           parseInt(this.#rawdatas.commentCount),
            likedByUser:            this.#rawdatas.likedByUser,
            repostedByUser:         this.#rawdatas.repostedByUser,
            handle:                 this.#rawdatas.handle,
            bio:                    this.#rawdatas.bio,
            userCreatedAt:          new Date(this.#rawdatas.userCreatedAt),
            username:               this.#rawdatas.username,
            iq:                     this.#rawdatas.iq,
            verified:               this.#rawdatas.verified,
            parentContent:          this.#rawdatas.parentContent,
            parentHasImage:         this.#rawdatas.parentHasImage,
            parentUserHandle:       this.#rawdatas.parentUserHandle,
            parentUserCreatedAt:    this.#rawdatas.parentUserCreatedAt ? new Date(this.#rawdatas.parentUserCreatedAt) : null,
            parentUserBio:          this.#rawdatas.parentUserBio,
            parentUserUsername:     this.#rawdatas.parentUserUsername,
            parentUserVerified:     this.#rawdatas.parentUserVerified,
            parentUserIq:           this.#rawdatas.parentUserIq,
            parentUserId:           this.#rawdatas.parentUserId,
            parentCreatedAt:        this.#rawdatas.parentCreatedAt ? new Date(this.#rawdatas.parentCreatedAt) : null,
        }

    }
    
    public get id():                   Types.API.Lynt_fixed["id"]                  { return this.#datas.id                 }
    public get content():              Types.API.Lynt_fixed["content"]             { return this.#datas.content            }
    public get userId():               Types.API.Lynt_fixed["userId"]              { return this.#datas.userId             }
    public get createdAt():            Types.API.Lynt_fixed["createdAt"]           { return this.#datas.createdAt          }
    public get views():                Types.API.Lynt_fixed["views"]               { return this.#datas.views              }
    public get reposted():             Types.API.Lynt_fixed["reposted"]            { return this.#datas.reposted           }
    public get parentId():             Types.API.Lynt_fixed["parentId"]            { return this.#datas.parentId           }
    public get has_image():            Types.API.Lynt_fixed["has_image"]           { return this.#datas.has_image          }
    public get likeCount():            Types.API.Lynt_fixed["likeCount"]           { return this.#datas.likeCount          }
    public get likedByFollowed():      Types.API.Lynt_fixed["likedByFollowed"]     { return this.#datas.likedByFollowed    }
    public get repostCount():          Types.API.Lynt_fixed["repostCount"]         { return this.#datas.repostCount        }
    public get commentCount():         Types.API.Lynt_fixed["commentCount"]        { return this.#datas.commentCount       }
    public get likedByUser():          Types.API.Lynt_fixed["likedByUser"]         { return this.#datas.likedByUser        }
    public get repostedByUser():       Types.API.Lynt_fixed["repostedByUser"]      { return this.#datas.repostedByUser     }
    public get handle():               Types.API.Lynt_fixed["handle"]              { return this.#datas.handle             }
    public get bio():                  Types.API.Lynt_fixed["bio"]                 { return this.#datas.bio                }
    public get userCreatedAt():        Types.API.Lynt_fixed["userCreatedAt"]       { return this.#datas.userCreatedAt      }
    public get username():             Types.API.Lynt_fixed["username"]            { return this.#datas.username           }
    public get iq():                   Types.API.Lynt_fixed["iq"]                  { return this.#datas.iq                 }
    public get verified():             Types.API.Lynt_fixed["verified"]            { return this.#datas.verified           }
    public get parentContent():        Types.API.Lynt_fixed["parentContent"]       { return this.#datas.parentContent      }
    public get parentHasImage():       Types.API.Lynt_fixed["parentHasImage"]      { return this.#datas.parentHasImage     }
    public get parentUserHandle():     Types.API.Lynt_fixed["parentUserHandle"]    { return this.#datas.parentUserHandle   }
    public get parentUserCreatedAt():  Types.API.Lynt_fixed["parentUserCreatedAt"] { return this.#datas.parentUserCreatedAt}
    public get parentUserBio():        Types.API.Lynt_fixed["parentUserBio"]       { return this.#datas.parentUserBio      }
    public get parentUserUsername():   Types.API.Lynt_fixed["parentUserUsername"]  { return this.#datas.parentUserUsername }
    public get parentUserVerified():   Types.API.Lynt_fixed["parentUserVerified"]  { return this.#datas.parentUserVerified }
    public get parentUserIq():         Types.API.Lynt_fixed["parentUserIq"]        { return this.#datas.parentUserIq       }
    public get parentUserId():         Types.API.Lynt_fixed["parentUserId"]        { return this.#datas.parentUserId       }
    public get parentCreatedAt():      Types.API.Lynt_fixed["parentCreatedAt"]     { return this.#datas.parentCreatedAt    }

    // Additionnal properties
    public get me(): boolean { return Client.Instance.user.handle === this.#datas.handle }

    
    get raw(): Types.API.Lynt {
        console.log(this.iq)
        return this.#rawdatas;
    }

    /**
     * Comment the lynt
     * @param comment 
     * @param image 
     */
    public comment(comment: string, image?: Buffer): void {
        if(image) throw new Error("Image is not supported yet");
        let payload: {[key:string]: any} = {
            id: this.#datas.id,
            content: comment,
        }
        if(image) {
            payload['image'] = image;
        }
        APIInterface.requestEndpoint('POST', `/api/comment`, payload, {
            'Referer': `https://lyntr.jnnj.xyz/?id=${this.#datas.id}`,
            'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary75Bv3AOwNH7vJFNe',
        })
    }

    /**
     * Relynt the lynt 
     */
    public relynt(comment: string, image?: Buffer): void {
        if(image) throw new Error("Image is not supported yet");
        let payload: {[key:string]: any} = {
            content: comment,
            reposted: this.#datas.id,
        }
        if(image) {
            payload['image'] = image;
        }
        APIInterface.requestEndpoint('POST', `/api/lynt`, payload, {
            'Referer': `https://lyntr.jnnj.xyz/?id=${this.#datas.id}`,
            'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary75Bv3AOwNH7vJFNe',
        })
    }


}