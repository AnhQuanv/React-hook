import React, { useEffect, useState } from 'react'
import { getAllQuizForAdmin } from '../../../../services/apiServices';
import ModalEditQuiz from './ModalEditQuiz';
import ModalDeleteQuiz from './ModalDeleteQuiz';

const TableQuiz = (props) => {

    const [listQuiz, setListQuiz] = useState([]);
    const [showModalEditQuiz, setShowModalEditQuiz] = useState(false);
    const [dataEdit, setDataEdit] = useState({});
    const [showModalDeleteQuiz, setShowModalDeleteQuiz] = useState(false);
    const [dataDelete, setDataDelete] = useState({});


    useEffect(() => {
        fetchQuiz();
    }, [])

    const fetchQuiz = async () => {
        let res = await getAllQuizForAdmin();
        if (res && res.EC === 0) {
            setListQuiz(res.DT);
        }
    }

    const handleCLickBtnEdit = (quiz) => {

        setShowModalEditQuiz(true);
        setDataEdit(quiz);
    }

    const resetEditData = () => {
        setDataEdit({});
    };

    const handkeClickBtnDelete = (quiz) => {
        setShowModalDeleteQuiz(true);
        setDataDelete(quiz);
    }

    return (
        <>
            <div>List Quizzes: </div>
            <table className="table table-hover table-bordered my-2">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listQuiz && listQuiz.map((item, index) => {
                            return (
                                <tr key={`table-quiz-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.difficulty}</td>
                                    <td style={{ display: 'flex', gap: '20px' }}>
                                        <button className='btn btn-warning' onClick={() => handleCLickBtnEdit(item)}>Edit</button>
                                        <button className='btn btn-danger' onClick={() => handkeClickBtnDelete(item)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <ModalEditQuiz show={showModalEditQuiz} setShow={setShowModalEditQuiz} dataEdit={dataEdit} resetEditData={resetEditData} fetchQuiz={fetchQuiz} />
            <ModalDeleteQuiz show={showModalDeleteQuiz} setShow={setShowModalDeleteQuiz} dataDelete={dataDelete} fetchQuiz={fetchQuiz} />
        </>
    )
}

export default TableQuiz