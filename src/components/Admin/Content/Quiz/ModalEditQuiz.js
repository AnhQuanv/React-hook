import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';
import { toast } from 'react-toastify';
import _ from 'lodash'
import { putUpdateQuiz } from '../../../../services/apiServices';

const ModalEditQuiz = (props) => {
    const { show, setShow, dataEdit } = props;

    const handleClose = () => {
        setShow(false)
        setName("");
        setDescription("");
        setType("");
        setImage("");
        setPreviewImage("");
        props.resetEditData();
    };


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('EASY');
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        if (!_.isEmpty(dataEdit)) {
            console.log(">>>>>>> chek dataModalEdit", dataEdit)
            setName(dataEdit.name);
            setDescription(dataEdit.description);
            setType(dataEdit.difficulty);
            setImage("");
            if (dataEdit.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataEdit.image}`);
            }
        }
    }, [dataEdit]);


    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage((event.target.files[0]));
        }
    }



    const handleSubmitEditUser = async () => {

        //validate

        let data = await putUpdateQuiz(dataEdit.id, name, description, type, image);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            await props.fetchQuiz();

        }

        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }

    }
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow} >
                Launch demo modal
            </Button> */}
            <Modal className='modal-add-user' backdrop='static' show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Edit a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" value={name} onChange={(event) => { setName(event.target.value) }} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Description</label>
                            <input type="text" className="form-control" value={description} onChange={(event) => { setDescription(event.target.value) }} />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label">Difficulty</label>
                            <select className="form-select" value={type} onChange={(event) => { setType(event.target.value) }}>
                                <option value="EASY">EASY</option>
                                <option value='MEDIUM'>MEDIUM</option>
                                <option value='HARD'>HARD</option>

                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className="form-label label-upload" htmlFor='labelUpload'> <FcPlus /> Upload File Image</label>
                            <input type='file' id='labelUpload' hidden onChange={(event) => handleUploadImage(event)} />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} alt="Preview" />
                                :
                                <span>Preview Image</span>
                            }

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitEditUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEditQuiz;
