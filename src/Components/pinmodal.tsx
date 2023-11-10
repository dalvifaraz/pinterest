import React from 'react';
import Modal from 'react-modal';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface PinModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Function;
}

const PinModal: React.FC<PinModalProps> = ({ isModalOpen, setIsModalOpen }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function afterOpenModal() {
    //TODO: remove if no code needs to run on modal open
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Example Modal'
    >
      <div className='modal-header'>
        <AiOutlineCloseCircle
          size={20}
          style={{ display: 'flex', alignSelf: 'flex-end' }}
        />
      </div>
      <div style={{border: '1px solid green', margin: '1rem', padding:'1rem'}}>
        <input style={{border: '1px solid black'}}/> 
      </div>
    </Modal>
  );
};

export default PinModal;
