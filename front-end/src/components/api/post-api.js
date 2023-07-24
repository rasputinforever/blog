import axios from "axios";

const postAPI = {
    submitPost: function(query) {
        return axios.put("/api/submit-post/", {params: {q: query}});
    },
    getPosts: function(query) {
        return axios.get("/api/get-posts/", {params: {q: query}})
    }
}
export default postAPI;
