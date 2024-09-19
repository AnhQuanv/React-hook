import ModalCreteUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers, getUserWithPaginate } from "../../../services/apiServices";
import ModalUpdateUser from "./MoodalUpdateUser.js";
import ModalViewUser from "./ModalViewUser.js";
import ModalDeleteUser from "./ModalDeleteUser.js";
import TabelUserPaginate from "./TableUserPaginate.js";

const ManageUser = (props) => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const LIMIT_USER = 3;
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const [dataUpdate, setDataUpdate] = useState({});
    const [dataView, setDataView] = useState({});
    const [dataDelete, setDataDelete] = useState({});

    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        // fetchListUsers();
        fetchListUsersWithPaginate(1);
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers()
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    const fetchListUsersWithPaginate = async (page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER)
        if (res.EC === 0) {
            setListUsers(res.DT.users);
            setPageCount(res.DT.totalPages);
        }
    }



    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }

    const resetUpdateData = () => {
        setDataUpdate({});
    };

    const handleClickBtnView = (user) => {
        setShowModalViewUser(true);
        setDataView(user);
    }

    const resetViewData = () => {
        setDataView({});
    };

    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true);
        setDataDelete(user);
    }


    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}><FcPlus /> Add new users</button>
                </div>
                <div className="table-users-container">
                    {/* <TableUser listUsers={listUsers} handleClickBtnUpdate={handleClickBtnUpdate} handleClickBtnView={handleClickBtnView} handleClickBtnDelete={handleClickBtnDelete} /> */}
                    const [pageCount, setPageCount] = useState(0);
                    <TabelUserPaginate listUsers={listUsers} handleClickBtnUpdate={handleClickBtnUpdate} handleClickBtnView={handleClickBtnView} handleClickBtnDelete={handleClickBtnDelete} fetchListUsersWithPaginate={fetchListUsersWithPaginate} pageCount={pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>
                <ModalViewUser show={showModalViewUser} setShow={setShowModalViewUser} fetchListUsers={fetchListUsers} dataView={dataView} resetViewData={resetViewData} />
                <ModalCreteUser show={showModalCreateUser} setShow={setShowModalCreateUser} fetchListUsers={fetchListUsers} fetchListUsersWithPaginate={fetchListUsersWithPaginate} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <ModalUpdateUser show={showModalUpdateUser} setShow={setShowModalUpdateUser} fetchListUsers={fetchListUsers} dataUpdate={dataUpdate} resetUpdateData={resetUpdateData} fetchListUsersWithPaginate={fetchListUsersWithPaginate} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <ModalDeleteUser show={showModalDeleteUser} setShow={setShowModalDeleteUser} dataDelete={dataDelete} fetchListUsers={fetchListUsers} fetchListUsersWithPaginate={fetchListUsersWithPaginate} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </div>
    )
}

export default ManageUser;