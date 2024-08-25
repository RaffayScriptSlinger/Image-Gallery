import React, { useState } from 'react';
import './App.css';
import Avatar from './components/Avatar';
import { Modal } from 'antd';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImgSrc, setCurrentImgSrc] = useState('');

  const showModal = (imgSrc) => {
    setCurrentImgSrc(imgSrc);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
   <div>
    <h1 className='flex justify-center align-middle m-3 font-bold text-red-500'>Click On the Image To preview</h1>
    <div className="app flex justify-between w-auto">
      
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

      <Modal title="Image Preview" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <img src={currentImgSrc} alt='Modal content' style={{ width: '100%' }} />
      </Modal>
    </div>
    </div>
  );
}

export default App;
