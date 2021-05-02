import axios from "axios";

const baseUrl = "http://localhost:3000/";
// const baseUrl = "https://land-records-api.herokuapp.com";

const getConfig = (url, method, contentType, data, token) => {
    return {
        url: url,
        method: method,
        headers: {
            "Content-Type": contentType,
            Authorization: `Bearer ${token}`,
        },
        data: data,
    };
};

export const login = async (payload) => {
    const response = await axios(
        getConfig(
            baseUrl + "api/login",
            "post",
            "application/json",
            JSON.stringify(payload)
        )
    );

    return response;
};

export const getLands = async (payload, token) => {
    const response = await axios(
        getConfig(baseUrl + "api/lands", "get", "application/json", {}, token)
    );

    return response;
};

export const editLand = async (payload, token) => {
    const response = await axios(
        getConfig(
            baseUrl + "api/lands",
            "patch",
            "application/json",
            JSON.stringify(payload),
            token
        )
    );

    return response;
};
