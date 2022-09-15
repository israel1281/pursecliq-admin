import axios from 'axios'

export const postAPI = async (url, post, token) => {
    const res = await axios.post(`https://api305.purscliq.com/api/${url}`, post, {
        headers: { Authorizaion: "Bearer " + token}
    })
    
    return res;
}

export const getAPI = async (url, token) => {
    const res = await axios.get(`https://api305.purscliq.com/api/${url}`, {
        headers: { Authorizaion: `Bearer ${token}`}
    })
    
    return res;
}

export const patchAPI = async (url, post, token) => {
    const res = await axios.patch(`https://api305.purscliq.com/api/${url}`, post, {
        headers: { Authorizaion: "Bearer " + token}
    })
    
    return res;
}

export const putAPI = async (url, post, token) => {
    const res = await axios.put(`https://api305.purscliq.com/api/${url}`, post, {
        headers: { Authorizaion: "Bearer " + token}
    })
    
    return res;
}

export const deleteAPI = async (url, post, token) => {
    const res = await axios.delete(`https://api305.purscliq.com/api/${url}`, post, {
        headers: { Authorizaion: "Bearer " + token}
    })
    
    return res;
}