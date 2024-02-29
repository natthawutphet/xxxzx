import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  h_line: string;
  img: string;
  youtube: string;
  ppp: string;
}

const AddPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [hLine, setHLine] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [youtube, setYoutube] = useState('');
  const [ppp, setPPP] = useState('');

  useEffect(() => {
    // ดึงข้อมูลโพสต์
    const fetchPosts = async () => {
      const { data } = await axios.get('https://api.service-ads.com/api');
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('https://api.service-ads.com/add', {
        title, h_line: hLine, img: imageUrl, youtube, ppp,
      });
      alert('Data added successfully');
      setPosts([...posts, data]); // อัพเดทรายการโพสต์หลังจากเพิ่มข้อมูลใหม่
      // รีเซ็ตสถานะหลังจากเพิ่มข้อมูล
      setTitle('');
      setHLine('');
      setImageUrl('');
      setYoutube('');
      setPPP('');
    } catch (error) {
      alert('Error adding data');
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`https://api.service-ads.com/delete/${id}`);
      alert('Post deleted successfully');
      setPosts(posts.filter(post => post.id !== id)); // อัพเดทรายการโพสต์หลังจากลบ
    } catch (error) {
      alert('Error deleting post');
      console.error(error);
    }
  };

  return (
    <>


    <div className="container text-center">  
    
      <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className='form-control mb-3' required />
      <input value={hLine} onChange={e => setHLine(e.target.value)} placeholder="Head Line" className='form-control mb-3' required />
      <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="Image URL" className='form-control mb-3' required />
      <input value={youtube} onChange={e => setYoutube(e.target.value)} placeholder="YouTube Link" className='form-control mb-3' required />
      <input value={ppp} onChange={e => setPPP(e.target.value)} placeholder="PPP" className='form-control mb-3' required />
      <button type="submit" className='btn btn-success' >Submit</button>
    
      </form>
      
      <div>
    
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.h_line}</p>
            <img src={post.img} alt={post.title} style={{ width: '100px', height: 'auto' }} />
            <p>YouTube: {post.youtube}</p>
            <p>PPP: {post.ppp}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </div> 
        ))}
      </div>

      </div>


    </>
  );
};

export default AddPage;
