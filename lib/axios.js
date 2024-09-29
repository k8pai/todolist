import axios from 'axios'

// Create Axios instance
const api = axios.create({
    // baseURL: 'https://your-api-url.com', // Replace with your base URL
    timeout: 10000, // Optional: set a timeout for requests
    headers: {
        'Content-Type': 'application/json', // Set default headers
    },
})

// Add a request interceptor (optional: to handle any pre-request config)
api.interceptors.request.use(
    (config) => {
        // You can modify the config before sending the request, if needed
        return config
    },
    (error) => {
        // Handle request error
        return Promise.reject(error)
    }
)

// Add a response interceptor
api.interceptors.response.use(
    (response) => {
        // Destructure the needed properties from response
        const { status, data, config } = response

        // You can customize the response here
        return data
    },
    (error) => {
        // Destructure error response
        const { response } = error
        if (response) {
            const { status, data, config } = response

            // Return error in a consistent structure
            return Promise.reject({
                status,
                data,
                request: config,
            })
        } else {
            // Handle network or other errors (e.g., timeout)
            return Promise.reject({
                status: 'Network Error',
                message: error.message,
            })
        }
    }
)

export default api
