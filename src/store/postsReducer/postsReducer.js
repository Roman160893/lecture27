import { ADD_POST, COMMENTS_POST, LIKE_POST, REPOST_POST } from "./postsTypes";
import fryingPan from '../../img/fryingPan.jpg'
import linens from '../../img/linens.jpg'
import homeAlone from '../../img/homeAlone.png'

const initialState = [
   {
      author: 'Oleg Kozak',
      avatar: 'https://clutch.net.ua/crops/7e367e/620x0/1/0/2019/07/20/G5huiJsSTmhg1gsXtrPiJmMUQqBJv1sl.jpg',
      nickName: '@kozak',
      datePublication: '06 серпня',
      textPublication: "WTF",
      imgPublication: `${homeAlone}`,
      like: 13,
      liked: false,
      commentars: 2,
      commentarsBoolean: false,
      repost: 0,
      reposted: false,
   },
   {
      author: 'Yulia O.',
      avatar: 'https://i.pinimg.com/736x/ba/22/ce/ba22cecc49feaa20d515a3be5fe82ea7.jpg',
      nickName: '@Yulia',
      datePublication: '07 серпня',
      textPublication: "Пательня з підвіскою для вогню - це найкращий подарунок! Наша пательня нікого не залишить байдужими, адже Ви б лише спробували страви з неї... і захочете ще і ще 😜",
      imgPublication: `${fryingPan}`,
      like: 466,
      liked: false,
      commentars: 512,
      commentarsBoolean: false,
      repost: 3,
      reposted: false,
   },
   {
      author: 'Nadia',
      avatar: 'https://img.freepik.com/free-photo/fashion-photo-of-sexy-hot-beautiful-girl-model-with-dark-hair-in-black-swimwear-swimming-on-back-in-swimming-pool-with-red-lips_158538-13733.jpg',
      nickName: '@ND',
      datePublication: '08 серпня',
      textPublication: "Розпродаж Постільної Білизни Знижки до -60%",
      imgPublication: `${linens}`,
      like: 29,
      liked: false,
      commentars: 5,
      commentarsBoolean: false,
      repost: 7,
      reposted: false,
   },
]

export const postsReducer = (state = initialState, action) => {
   const { type, payload } = action

   switch (type) {
      case ADD_POST: {
         const posts = [...state, payload]
         return posts
      }
      case LIKE_POST: {
         const like = [...state]
         return like;
      }
      case REPOST_POST: {
         const repost = [...state]
         return repost
      }
      case COMMENTS_POST: {
         const comments = [...state]
         return comments
      }
      default: {
         return state;
      }
   }
}

export const postSelector = (state) => state.postsReducer