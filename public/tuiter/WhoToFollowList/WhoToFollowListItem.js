const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
                            <div class="d-flex">
                                <img class="rounded-circle wd-avatar-img me-2" src="${who.avatarIcon}">
                                <div>
                                    <div class="fw-bold text-nowrap w-75">${who.userName} <i class="fas fa-check-circle"></i></div>
                                    ${who.handle}
                                </div>
                            </div>
                            <button class="btn btn-primary wd-follow-button">Follow</button>
                        </li>
    `);
};

export default WhoToFollowListItem;