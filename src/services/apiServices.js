import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {

    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    return axios.post('api/v1/participant', data);
}

const getAllUsers = () => {

    return axios.get('api/v1/participant/all');
}

const putUpdateUser = (id, username, role, image) => {

    const data = new FormData();
    data.append('id', id);

    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    return axios.put('api/v1/participant', data);
}

const deleteUsers = (id) => {
    return axios.delete('api/v1/participant', { data: { id: id } });
}

const getUserWithPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
}

const postLogin = (userEmail, userPassword) => {
    return axios.post(`/api/v1/login`, { email: userEmail, password: userPassword, delay: 5000 });
}

const postRegister = (email, userName, password) => {
    return axios.post(`/api/v1/register`, { email, userName, password });
}


export { postCreateNewUser, getAllUsers, putUpdateUser, deleteUsers, getUserWithPaginate, postLogin, postRegister }