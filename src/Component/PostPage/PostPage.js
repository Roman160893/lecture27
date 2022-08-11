import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { commentPost, likesPosts, repostPost } from '../../store/postsReducer/postsActions';
import { postSelector } from '../../store/postsReducer/postsReducer';
import './PostPage.scss'


const PostPage = () => {

   const auth = useSelector(postSelector)
   const dispath = useDispatch()

   function clickLike(e, pos) {
      auth[pos].liked = !auth[pos].liked

      dispath(likesPosts())

      if (auth[pos].liked) {
         auth[pos].like++
      } else {
         auth[pos].like--
      }
   }

   function clickRepost(e, pos) {
      auth[pos].reposted = !auth[pos].reposted

      dispath(repostPost())

      if (auth[pos].reposted) {
         auth[pos].repost++
      } else {
         auth[pos].repost--
      }
   }

   function clickComments(e, pos) {
      auth[pos].commentarsBoolean = !auth[pos].commentarsBoolean

      dispath(commentPost())

      if (auth[pos].commentarsBoolean) {
         auth[pos].commentars++
      } else {
         auth[pos].commentars--
      }
   }

   return (
      <section className='post'>
         {auth.map((el, index) =>
            <div key={index} className="post__container">
               <div className="post__avatar">
                  <img src={`${el.avatar}`} />
               </div>
               <div className='post__content'>
                  <div className='post__content-info'>
                     <div className='post__content-info-name'>{el.author}</div>
                     <div className='post__content-info-nick'>{el.nickName}</div>
                     <div className='post__content-info-date'>{el.datePublication}</div>
                  </div>
                  <div className='post__content-text'>
                     {el.textPublication}
                  </div>
                  <div className='post__content-img'>
                     <img src={`${el.imgPublication}`}></img>
                  </div>
                  <div className='post__content-like'>
                     <div className='wrapper__icon'>
                        <button onClick={e => clickComments(e, index)}>
                           <i className="fa-solid fa-comment"></i>
                        </button>
                        <span>{el.commentars}</span>
                     </div>
                     <div className='wrapper__icon'>
                        <button onClick={e => clickRepost(e, index)}>
                           <i className="fa-solid fa-share-nodes"></i>
                        </button>
                        <span>{el.repost}</span>
                     </div>
                     <div className='wrapper__icon'>
                        <button onClick={e => clickLike(e, index)} >
                           <i className='fa-solid fa-thumbs-up  '></i>
                        </button>
                        <span>{el.like}</span>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </section>
   );
};

export default PostPage;