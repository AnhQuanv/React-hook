import React, { useState } from 'react'
import Select from 'react-select';
import './Questions.scss'
import { FaPlus, FaMinus } from "react-icons/fa";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
const Questions = (props) => {

    const options = [
        { value: 'EASY', label: 'EASY' },
        { value: 'MEDIUM', label: 'MEDIUM' },
        { value: 'HARD', label: 'HARD' },
    ];

    const [selectedQuiz, setSelectedQuiz] = useState({});

    return (
        <div className='questions-container'>
            <div className='title'>
                Manage Questions
            </div>
            <div className='add-new-question'>
                <div className='col-6 form-group'>
                    <label>Select Quiz:</label>
                    <Select
                        defaultValue={selectedQuiz}
                        onChange={setSelectedQuiz}
                        options={options}
                        placeholder={"Quiz type..."}
                    />
                </div>
                <div className='mt-3'>
                    Add questions:

                </div>
                <div>
                    <div className='questions-content'>
                        <div class="form-floating description">
                            <input type="text" class="form-control" placeholder="name@example.com" />
                            <label >Description</label>
                        </div>
                        <div className='group-upload'>
                            <label className='label-up'>Upload Image</label>
                            <input type='file' hidden />
                            <span>0 file is uploaded</span>
                        </div>
                        <div className='btn-add'>
                            <span>
                                <FaPlus className='icon-add' />
                            </span>
                            <span>
                                <FaMinus className='icon-remove' />
                            </span>
                        </div>
                    </div>
                    <div className='answers-content'>
                        <input
                            className="form-check-input iscorrect"
                            type="checkbox"
                        />
                        <div class="form-floating answer-name">
                            <input type="text" class="form-control" placeholder="name@example.com" />
                            <label >answer 1</label>
                        </div>
                        <div className='btn-group'>
                            <span>
                                <FiPlusCircle className='icon-add' />
                            </span>
                            <span>
                                <FiMinusCircle className='icon-remove' />
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Questions