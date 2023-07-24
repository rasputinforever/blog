import axios from "axios";

const postAPI = {
    submitPost: function(query) {
        return axios.put("/api/submit-post/", {params: {q: query}});
    },
}
export default postAPI;
