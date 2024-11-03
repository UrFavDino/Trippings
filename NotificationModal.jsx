// NotificationModal.jsx
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './NotificationModal.css';

const NotificationModal = ({ onClose }) => {
  useEffect(() => {
    const modalElement = document.getElementById('notificationModal');
    
    const handleClose = () => {
      onClose(); // Call the onClose function when modal is hidden
    };

    modalElement.addEventListener('hidden.bs.modal', handleClose); // Bootstrap event for modal hidden

    // Clean up the event listener on component unmount
    return () => {
      modalElement.removeEventListener('hidden.bs.modal', handleClose);
    };
  }, [onClose]);

  return (
    <>
      {/* Modal */}
      <div 
        className="modal fade" 
        id="notificationModal" 
        tabIndex="-1" 
        aria-labelledby="notificationModalLabel" 
        aria-hidden="true"
        data-bs-backdrop="true" 
        data-bs-keyboard="true"  
      >
        <div className="modal-dialog custom-modal-dialog" >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="notificationModalLabel">Notifications</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="notifications">
                {/* No Notifications Message */}
                <p>You don’t have any notifications.</p>
                <span className="text-center">or</span>

                {/* Notification Item */}
                <div className="notification-item">
                    <div className="avatar" style={{ backgroundColor: '#a366ff' }}>UN</div>
                        <div className="message">
                            <strong>Username</strong> edited the "Elyu Trip".
                        </div>
                </div>

                <div className="notification-item">
                    <div className="avatar" style={{ backgroundColor: '#ff8555' }}>UN</div>
                        <div className="message">
                            <strong>Username</strong> added contribution.
                        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationModal;
