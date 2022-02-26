import PostSummaryListItem from "./PostSummaryListItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
    <ul class="list-group mb-2 rounded-0 rounded-bottom">
            ${
        posts.map(post => {
            return(PostSummaryListItem(post));
        }).join('')
    }
        </ul>

           
    `); }

export default PostSummaryList;