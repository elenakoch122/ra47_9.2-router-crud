import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import NewPost from './components/NewPost';
import ViewPost from './components/ViewPost';
import Page404 from './components/Page404';
import { PostContext } from './PostContext';

export default function App() {
  const [newPostText, setNewPostText] = useState('');

  return (
    <PostContext.Provider value={{ newPostText, setNewPostText }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/posts/new" element={<NewPost />}/>
          <Route path="/posts/:id" element={<ViewPost />}/>
          <Route path="*" element={<Page404 />}/>
        </Routes>
      </div>
    </PostContext.Provider>
  );
}
