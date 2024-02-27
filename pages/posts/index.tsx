import React, { useState } from 'react';
import Layout from '../../components/Layout';

function Index() {
    // ตรวจสอบให้แน่ใจว่ามีการประกาศ state สำหรับ error
    const [title, setTitle] = useState("");
    const [h_line, setH_line] = useState("");
    const [img, setImg] = useState(null);
    const [ppp, setPpp] = useState("");
    const [youtube, setYoutube] = useState("");
    const [error, setError] = useState(""); // ตรวจสอบให้แน่ใจว่ามีการประกาศ state นี้
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ตรวจสอบค่าว่างและตั้งค่า error หากจำเป็น
        if (!title || !h_line || !img || !ppp || !youtube) {
            setError("All fields are required!");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("h_line", h_line);
        formData.append("img", img);
        formData.append("ppp", ppp);
        formData.append("youtube", youtube);

        // ตัวอย่างการจัดการ fetch และการตั้งค่า error
        fetch('https://api.service-ads.com/Add', {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setMessage("Post added successfully!");
            // เคลียร์ฟอร์มหลังจากสำเร็จ
        })
        .catch(error => {
            setError(error.message);
        });
    };


    return (
        <div className='AppNext container text-center'>
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
                    <label htmlFor="h_line">H_line</label>
                    <input
                        name="h_line"
                        type="text"
                        placeholder='Headline of the post'
                        onChange={(e) => setH_line(e.target.value)}
                        value={h_line}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="youtube">Youtube</label>
                    <input
                        name="youtube"
                        type="text"
                        placeholder='Youtube link'
                        onChange={(e) => setYoutube(e.target.value)}
                        value={youtube}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="ppp">ppp</label>
                    <input
                        name="ppp"
                        type="text"
                        placeholder='ppp link'
                        onChange={(e) => setPpp(e.target.value)}
                        value={ppp}
                    />
                </div>


                <div className='form-group'>
                    <label htmlFor="img">Image</label>
                    <input
                        type="file"
                        name="img"
                        onChange={(e) => setImg(e.target.files[0])}
                    />
                </div>
                <div className="form-group">
                <button onClick={handleSubmit}>Upload</button>
                </div>
            </form>
        </div>
    );
}

export default Index;
