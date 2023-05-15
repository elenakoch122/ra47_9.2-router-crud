import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import NewPost from './components/NewPost';
import { PostContext } from './PostContext';
import { useState } from 'react';
import ViewPost from './components/ViewPost';

export default function App() {
  const [newPostText, setNewPostText] = useState('');

  return (
    <PostContext.Provider value={{ newPostText, setNewPostText }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/posts/new" element={<NewPost />}/>
          <Route path="/posts/:id" element={<ViewPost />}/>
        </Routes>
      </div>
    </PostContext.Provider>
  );
}
