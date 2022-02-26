const PostSummaryListItem = (post) => {
    return(`
        <li class="list-group-item d-flex flex-row justify-content-around align-items-center">
                            <div class="wd-tuit-text float-left text-wrap">
                                <div class="text-muted">${post.topic}</div>
                                <span class="d-inline"><b>${post.userName} <i class="fas fa-check-circle"></i></b> <span class="text-muted">- ${post.time}</span></span> <br>
                                <b>${post.title}</b>
                            </div>
                            <img class="wd-tuit-img rounded float-right" src="${post.image}">
                        </li>
    `);
};

export default PostSummaryListItem;