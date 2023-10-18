import React from 'react';

const ModalSegitiga = ({hasil}) => {
  return (
    <>
      {/* Button trigger modal */}
      <button type="button" className="btn btn-secondary mx-2" data-toggle="modal" data-target="#exampleModal">
        Generate Segitiga
      </button>
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Segitiga
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

export default ModalSegitiga;
