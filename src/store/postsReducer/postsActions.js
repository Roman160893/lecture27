import { ADD_POST, COMMENTS_POST, LIKE_POST, REPOST_POST } from "./postsTypes"


export const addPosts = (imgPublication, textPublication, author, avatar, nickName, datePublication, like, commentars, repost) => {
   return {
      type: ADD_POST,
      payload: {
         imgPublication,
         textPublication,
         author,
         avatar,
         nickName,
         datePublication,
         like,
         commentars,
         repost
      }
   }
}

export const likesPosts = () => {
   return {
      type: LIKE_POST,
   }
}

export const repostPost = () => {
   return {
      type: REPOST_POST,
   }
}

export const commentPost = () => {
   return {
      type: COMMENTS_POST,
   }
}