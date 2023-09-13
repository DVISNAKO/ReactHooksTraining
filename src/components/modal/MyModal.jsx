import React, { Children, useState, } from "react";
import "./MyModal.css";

const MyModal = ({children}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="salidzini">
      <button className="salidzini__content" onClick={() => setOpen(true)}>
        Open My Modal
      </button>
      {open && (
        <div className="modal">
          <div className="myModalContent"><span className="closeBtn" onClick={() => setOpen(false)}>
              X
            </span>
          {children} 
            
          </div>
        </div>
      )}
    </div>
  );
};

export default MyModal;
