import React, { useState } from 'react';
import './App.css';
import Avatar from './components/Avatar';
import { Modal } from 'antd';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentImgSrc, setCurrentImgSrc] = useState('');

  const showModal = (imgSrc) => {
    setCurrentImgSrc(imgSrc);
    setIsModalOpen(true);
    setLoading(true);

    // Simulate loading time for the modal content
    setTimeout(() => {
      setLoading(false);
    }, 0);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setLoading(false);
  };

  return (
    <div>
      <h1 className='flex justify-center align-middle m-3 font-semibold text-black-500'>Image Gallery By  Raffay</h1>
      
      <div className='w-100 mb-12'>
        <p className='flex justify-center'>
        "Image Gallery by Raffay" is an interactive web application built using React. It showcases a collection of stunning images, each equipped with a sleek modal feature. Users can click on any image to view an enlarged version in a responsive modal, offering an enhanced visual experience. The gallery's smooth hover effects and intuitive design make it a visually appealing and user-friendly project, demonstrating Raffay's expertise in modern web development techniques.
        </p>
      </div>

      <div className="app flex justify-between flex-wrap">
        <div onClick={() => showModal('https://plus.unsplash.com/premium_photo-1724076827133-593437b8f16a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8')}>
          <Avatar imgSrc="https://plus.unsplash.com/premium_photo-1724076827133-593437b8f16a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" />
        </div>

        <div onClick={() => showModal('https://images.unsplash.com/photo-1723903818490-6cb447ad1f05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8')}>
          <Avatar imgSrc="https://images.unsplash.com/photo-1723903818490-6cb447ad1f05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" />
        </div>

        <div onClick={() => showModal('https://images.unsplash.com/photo-1724105266499-fceb8fbe7bb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D')}>
          <Avatar imgSrc="https://images.unsplash.com/photo-1724105266499-fceb8fbe7bb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D" />
        </div>

        <div onClick={() => showModal('https://images.unsplash.com/photo-1723965453180-cf8846378a55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D')}>
          <Avatar imgSrc="https://images.unsplash.com/photo-1723965453180-cf8846378a55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
      <div className="app flex justify-between mt-5 flex-wrap">
   <div onClick={() => showModal('https://images.unsplash.com/photo-1718808968541-7ec23c57ffc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D')}>
    <Avatar imgSrc="https://images.unsplash.com/photo-1718808968541-7ec23c57ffc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D" />
  </div>

  <div onClick={() => showModal('https://images.unsplash.com/photo-1724252189737-19256b08031a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D')}>
    <Avatar imgSrc="https://images.unsplash.com/photo-1724252189737-19256b08031a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D" />
  </div>
  
  <div onClick={() => showModal('https://plus.unsplash.com/premium_photo-1675747693497-0a1d0db0740c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D')}>
    <Avatar imgSrc="https://plus.unsplash.com/premium_photo-1675747693497-0a1d0db0740c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D" />
  </div>


  <div onClick={() => showModal('https://plus.unsplash.com/premium_photo-1724411829646-cc1105f94dfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D')}>
    <Avatar imgSrc="https://plus.unsplash.com/premium_photo-1724411829646-cc1105f94dfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D" />
  </div>
</div>

      

      <Modal
        title="Image Preview"
        open={isModalOpen}
        onCancel={handleCancel}

      >
        {loading ? <p>Loading...</p> : <img src={currentImgSrc} alt="Modal content" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />}
      </Modal>
    </div>
  );
}

export default App;
