import React, { useState } from 'react';
import { FaEllipsisH, FaEdit, FaHeart, FaDownload, FaExclamation } from 'react-icons/fa';
import EditPostModal from '../Modals/EditPostModal';
import '../App.scss'

const Photos = (props) => {

    console.log('Photos.js: props:', props)
    const [editModal, setEditModal] = useState(false);
    const [dropdown, setDropDown] = useState(false);
    console.log('Edit Modal State:', editModal);
    const toggleEdit = () => {
        console.log('Toggling Modal On');
        if (!editModal) {
            let selectedModal = document.querySelector('.editPostModal > .modal');
            selectedModal.style.display = 'block';
            setEditModal(true);
        } else {
            let selectedModal = document.querySelector('.editPostModal > .modal');
            selectedModal.style.display = 'none';
            setEditModal(false);
        }
    }
    //toggle dropdown
    const toggleDropdown = () => {
        console.log('Toggling Dropdown On');
        if (!dropdown) {
            setDropDown(true);
            let selectedDropdown = document.querySelectorAll('.dropdown');
            selectedDropdown[props.index].classList.add('is-active');
            let Photo = document.querySelectorAll('.Photo');
            Photo[props.index].classList.add('opacity-75');
        } else {
            let selectedDropdown = document.querySelectorAll('.dropdown');
            selectedDropdown[props.index].classList.remove('is-active')
            setDropDown(false);
            let Photo = document.querySelectorAll('.Photo');
            Photo[props.index].classList.remove('opacity-75');
        }
    }//end toggleEdit

    return (
        <div className='PhotoCard'>
            <div className='PhotoInfo'>
                <div class="dropdown">
                    <div class="dropdown-trigger">
                        <button onClick={() => toggleDropdown()} class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <span><FaEllipsisH className='icon' /></span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                            <a onClick={() => setEditModal(!editModal)} class="dropdown-item">
                                <FaEdit /> Edit Moment
                            </a>
                            <a class="dropdown-item">
                                <FaHeart /> Favorite
                            </a>
                            <a href="#" class="dropdown-item">
                                <FaDownload /> Download
                            </a>
                            <a href="#" class="dropdown-item is-active">
                                <FaExclamation /> Report
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img className='Photo' alt={props.name} src={props.img} />
            {(editModal) ? <EditPostModal editModal={editModal} setEditModal={setEditModal} /> : <></>}
        </div>
    )
}

export default Photos;