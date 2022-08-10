import { ADD_POST, COMMENTS_POST, LIKE_POST, REPOST_POST } from "./postsTypes";

const initialState = [
   {
      author: 'Oleg Kozak',
      avatar: 'https://clutch.net.ua/crops/7e367e/620x0/1/0/2019/07/20/G5huiJsSTmhg1gsXtrPiJmMUQqBJv1sl.jpg',
      nickName: '@kozak',
      datePublication: '06 серпня',
      textPublication: "WTF",
      imgPublication: 'https://scontent.flwo3-1.fna.fbcdn.net/v/t39.30808-6/297760630_114436081352969_8568743557921235827_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=mH71OQZF6wgAX_EvW3t&_nc_ht=scontent.flwo3-1.fna&oh=00_AT9MShv5NMRl96x7R2_5OAR0Ki3t_zciQ5wz1qocxzdSkA&oe=62F81B37',
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
      imgPublication: 'https://scontent.flwo3-1.fna.fbcdn.net/v/t45.1600-4/296148938_23851438734940447_6815106443087441589_n.jpg?stp=cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=102&ccb=1-7&_nc_sid=e84a38&_nc_ohc=UuG7YuojsYIAX8eo-ck&_nc_ht=scontent.flwo3-1.fna&oh=00_AT83xpbsby_JTgT6WivCEi75egJg4uGd41hKxngehfxuTA&oe=62F732C5',
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
      imgPublication: 'https://scontent.flwo3-1.fna.fbcdn.net/v/t45.1600-4/284627470_23850437044000138_8030446900201546197_n.jpg?stp=cp0_dst-jpg_fr_q75_spS444&_nc_cat=111&ccb=1-7&_nc_sid=67cdda&_nc_aid=0&_nc_ohc=0ueN89nvOjIAX_za5wR&_nc_ht=scontent.flwo3-1.fna&oh=00_AT9mZeTCX5WVL9Ed6Hqk16J4OaKMoNIpjs1HsHyVTfeZvQ&oe=62F71CDF',
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