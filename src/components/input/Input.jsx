import React, { useState } from 'react';
import './Input.css';

const Input = () => {
    const [post, setPost] = useState({ title: '', id: null });
    const [posts, setPosts] = useState([]);
  
    const getValue = (e) => {
      e.preventDefault();
      
      if (post.title.trim() === '') {
        alert('Заголовок не может быть пустым');
        return;
      }
  
      setPosts([...posts, post]);
      setPost({ title: '', id: Date.now() });
    }

    const removePost = (remPost) => {
      // const updatedPost = posts.filter(p => p.id !== remPost.id)
      // setPosts(updatedPost)
      setPosts(posts.filter(p => p.id !== remPost.id))
    }
  
    return (
      <div>
        <form onSubmit={getValue}>
          <input
            type='text'
            placeholder='Описание'
            value={post.title}
            onChange={e => setPost({ title: e.target.value, id: post.id })}
          />
          <button type='submit'>Добавить</button>
        </form>
        
        {posts.length !==0 
        ? <ul className='wrapper'>
          {posts.map((p, index) => (
            <li className="task" key={index}>{p.title} 
            <button className='btn'
            onClick={() => removePost(p)}
            >Delete</button><hr/></li>
          ))}
        </ul>
        : <h1>Нет постов</h1>
      }
      </div>
    );
  };

export default Input;