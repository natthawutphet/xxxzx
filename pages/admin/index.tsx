import React, { useState } from 'react';

function Index() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [name, setName] = useState("");
    const [ppp, setPpp] = useState("");
    const [images, setImages] = useState(null); // สำหรับไฟล์ภาพ
    const [vdos, setVdos] = useState(null); // สำหรับไฟล์วิดีโอ
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // สร้างอินสแตนซ์ของ FormData
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('name', name);
        formData.append('ppp', ppp);
        if (images) {
            formData.append('images', images);
        }
        if (vdos) {
            formData.append('vdos', vdos);
        }

        try {
            let response = await fetch("http://localhost:3000/api/addPost", {
                method: "POST",
                body: formData, // ส่ง FormData
            });

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            response = await response.json();

            // Reset form fields
            setTitle("");
            setContent("");
            setName("");
            setPpp("");
            setImages(null);
            setVdos(null);
            setError("");
            setMessage("Post added successfully!");
        } catch (errorMessage) {
            setError(errorMessage.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>
                {error && <div className='alert-error'>{error}</div>}
                {message && <div className='alert-message'>{message}</div>}
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input 
                        name='title'
                        type="text" 
                        placeholder='Title of the post'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title} 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="content">Content</label>
                    <textarea 
                        name="content" 
                        placeholder='Content of the post'
                        cols={20}
                        rows={8}
                        onChange={(e) => setContent(e.target.value)}
                        value={content} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        name="name"
                        type="text"
                        placeholder="Your name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ppp">PPP</label>
                    <input 
                        name="ppp"
                        type="text"
                        placeholder="PPP Value"
                        onChange={(e) => setPpp(e.target.value)}
                        value={ppp}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="images">Images</label>
                    <input 
                        type="file" 
                        name="images" 
                        onChange={(e) => setImages(e.target.files[0])}
                    />
                </div>
              
              
                <div className="form-group">
                    <button type='submit' className='submit_btn'>
                        Add Post
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Index;
