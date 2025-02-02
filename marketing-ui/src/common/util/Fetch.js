import axios from 'axios';
import {BASE_URL} from "./constants.js";

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
});


export const getRequest = async (url) => {
    try {
        const response = await instance.get(`${url}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
};

export const deleteRequest = async (id, url) => {
    try {
        await instance.delete(`${url}/${id}`)
    } catch (error) {
        console.error('Error deleting data: ', error);
        throw error;
    }
}

export const postRequest = async (url, data) => {
    try {
        await instance.post(`${url}`, data)
    } catch (error) {
        console.error('Error creating data: ', error);
        throw error;
    }
}

export const updateRequest = async (url, id, data) => {
    try {
        await instance.put(`${url}/${id}`, data)
    } catch (error) {
        console.error('Error updating data: ', error);
        throw error;
    }
}