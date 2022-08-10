import { authorMarusya, authorOleksandr, authorVictoria } from "../Component/AddPost/authorPost"

export function getNameValue(e, setNamaValue, setAvatar, setNickName, setDate, setLike, setComments, setRepost) {
   setNamaValue(e.target.value)
   switch (e.target.value) {
      case (authorOleksandr.name):
         setAvatar(`${authorOleksandr.avatar}`)
         setNickName(`${authorOleksandr.nickName}`)
         setDate(`${authorOleksandr.date}`)
         setLike(`${authorOleksandr.like}`)
         setComments(`${authorOleksandr.comment}`)
         setRepost(`${authorOleksandr.repost}`)
         break;
      case (authorVictoria.name):
         setAvatar(`${authorVictoria.avatar}`)
         setNickName(`${authorVictoria.nickName}`)
         setDate(`${authorVictoria.date}`)
         setLike(`${authorVictoria.like}`)
         setComments(`${authorVictoria.comment}`)
         setRepost(`${authorVictoria.repost}`)
         break;
      case (authorMarusya.name):
         setAvatar(`${authorMarusya.avatar}`)
         setNickName(`${authorMarusya.nickName}`)
         setDate(`${authorMarusya.date}`)
         setLike(`${authorMarusya.like}`)
         setComments(`${authorMarusya.comment}`)
         setRepost(`${authorMarusya.repost}`)
         break;
   }
}

