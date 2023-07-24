import axios from "axios";

const postAPI = {
    submitPost: function(query) {
        return axios.put("/api/submit-post/", {params: {q: query, a: 'new post'}});
    },
    deletePost: function(query) {
        return axios.put("/api/submit-post/", {params: {q: query, a: 'delete post'}});
    },
    getPosts: function(query) {
        return axios.get("/api/get-posts/", {params: {q: query}})
    }
}
export default postAPI;
