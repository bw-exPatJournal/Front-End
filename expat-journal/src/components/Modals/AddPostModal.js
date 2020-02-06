import React from 'react'
import Loader from 'react-loader-spinner'

const AddPostModal = ({ toggleModal, modal }) => {

    return (
        <div className="modal">
            <div className="modal-background">
                <div className="modal-card">
                    <header className="modal-card-head has-background-info">
                        <p className="modal-card-title has-text-white">Add New Moment</p>
                        <button onClick={toggleModal} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <form>
                            <label>title</label>
                            <input class="input" type="text" placeholder="Rounded input" />
                            <label>photo</label>
                            <input class="input" type="text" placeholder="Rounded input" />
                            <label>story</label>
                            <input class="input" type="text" placeholder="Rounded input" />
                            <label>Details</label>
                            <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
                        </form>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button has-background-info has-text-white">Submit</button>
                        <button onClick={toggleModal} className="button">Cancel</button>
                    </footer>
                </div>
            </div>
        </div>
    )
}



export default AddPostModal;