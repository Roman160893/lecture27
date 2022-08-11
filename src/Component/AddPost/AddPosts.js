import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addPosts } from '../../store/postsReducer/postsActions';
import { getNameValue } from '../../utils/function';
import './addPostStyle.scss'
import { store } from '../../store/store'
import { postSelector } from '../../store/postsReducer/postsReducer';


const AddPosts = () => {
   const [imgValue, setImgValue] = useState('https://content1.rozetka.com.ua/goods/images/big/264299208.jpg');
   const [postText, setPostText] = useState('Доброго вечора ми з України');
   const [nameValue, setNamaValue] = useState('');

   const [avatar, setAvatar] = useState('')
   const [nickName, setNickName] = useState('')
   const [date, setDate] = useState('')
   const [like, setLike] = useState(0)
   const [comments, setComments] = useState(0)
   const [repost, setRepost] = useState(0)

   function getImgValue(e) {
      setImgValue(e.target.value)
   }

   function getPostText(e) {
      setPostText(e.target.value)
   }

   const dispatch = useDispatch();

   function clickAdd(e) {
      if (imgValue == '' || postText == '' || nameValue === '' || nameValue === 'Виберіть автора') {
         alert('заповніть всі поля')
      } else {
         dispatch(addPosts(imgValue, postText, nameValue, avatar, nickName, date, like, comments, repost))
         setImgValue('https://content1.rozetka.com.ua/goods/images/big/264299208.jpg')
         setPostText('Доброго вечора ми з України')
         setNamaValue(e.target.value)
      }
   }

   return (
      <div className='wrapper__input'>
         <label> Введіть текст публікації: </label>
         <input className='text-publication' type='text' placeholder='Введіть текст публікації' value={postText} onChange={getPostText} />
         <label> Введіть посилання на зображення в публікації: </label>
         <input className='img-publication' type='text' placeholder='Введіть посилання на зображення в публікації (https://yourfoto.pnj)' value={imgValue} onChange={getImgValue} />
         <select value={nameValue} onChange={e => getNameValue(e, setNamaValue, setAvatar, setNickName, setDate, setLike, setComments, setRepost)}>
            <option >Виберіть автора</option>
            <option > Oleksandr </option>
            <option> Victoria </option>
            <option> Marusya </option>
         </select>
         <button onClick={clickAdd}>Опублікувати</button>
      </div>
   );
};

export default AddPosts;