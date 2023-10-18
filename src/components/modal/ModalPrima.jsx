import React from 'react';

const ModalPrima = ({hasil}) => {
  return (
    <>
      {/* Button trigger modal */}
      <button type="button" className="btn btn-secondary mx-2" data-toggle="modal" data-target="#exampleModal">
        Generate Prime Number
      </button>
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Prime Number
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">X</span>
              </button>
            </div>
            <div className="modal-body">{hasil}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPrima;
