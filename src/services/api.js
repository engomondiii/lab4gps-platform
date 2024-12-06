import axios from 'axios';

// Set the base URL directly to the ngrok URL
const getBaseURL = () => {
    return 'https://5add-102-213-251-138.ngrok-free.app/lab4gps'; // Fixed ngrok URL
};

// Create an Axios instance with the base URL
const api = axios.create({
    baseURL: getBaseURL(),
    headers: {
        'Content-Type': 'application/json',
    },
});

// Redirect to login page helper function
const redirectToLogin = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    window.location.href = '/login';
};

// Request interceptor to include JWT tokens in headers
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => Promise.reject(error));

// Response interceptor to handle token expiration and refresh
api.interceptors.response.use((response) => response, async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken) {
            try {
                const { data } = await api.post('/auth/token/refresh/', { refresh: refreshToken });
                const { access } = data;
                localStorage.setItem('access_token', access);
                originalRequest.headers.Authorization = `Bearer ${access}`;
                return api(originalRequest);
            } catch (err) {
                console.error('Token refresh failed:', err);
                redirectToLogin();
            }
        } else {
            console.error('No refresh token found.');
            redirectToLogin();
        }
    }

    return Promise.reject(error);
});

export default api;
