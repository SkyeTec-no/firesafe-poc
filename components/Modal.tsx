"use client";
export default function Modal() {
  return (
    <div className="inline-block w-full text-center py-2 px-4 border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 m-2">
      <button onClick={() => (document?.getElementById("my_modal_1") as HTMLDialogElement)?.showModal()}>
        Go to Product
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-full h-screen overflow-hidden">
          <iframe
            src="https://montordok.firesafe.no/files/FIRESAFE%20FT%20Board%20Montasjeavisning%202017%20NO.pdf"
            width="100%"
            height="91%"
            loading="lazy"
            title="PDF-file"
            style={{ border: "3px solid white" }}
          ></iframe>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

/**
 * <button
        className="btn"
        onClick={() => (document?.getElementById("my_modal_1") as HTMLDialogElement)?.showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
       
      </div>
          <div className="modal-action">
            <form method="dialog">
              
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
 */
