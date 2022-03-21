import React from "react";

const NavigationSidebar = ({active = 'explore'}) => {
    return(
        <div>
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="fab fa-twitter fa-inverse"></i>
                </a>
                <a href="../home.html" className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                    <i className="fas fa-home"></i> <span
                    className="d-xl-inline d-lg-none d-md-none d-sm-none">Home</span>
                </a>
                <a href="../explore.html" className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`} aria-current="true">
                    <i className="fas fa-hashtag"></i> <span
                    className="d-xl-inline d-lg-none d-md-none d-sm-none">Explore</span>
                </a>
                <a href="#" className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}`}>
                    <i className="fas fa-bell"></i> <span
                    className="d-xl-inline d-lg-none d-md-none d-sm-none">Notifications</span>
                </a>
                <a href="#" className={`list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}`}>
                    <i className="fas fa-envelope"></i> <span
                    className="d-xl-inline d-lg-none d-md-none d-sm-none">Messages</span>
                </a>
                <a href="../bookmarks.html" className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}`}>
                    <i className="fas fa-bookmark"></i> <span
                    className="d-xl-inline d-lg-none d-md-none d-sm-none">Bookmarks</span>
                </a>
                <a href="#" className={`list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}`}>
                    <i className="fas fa-list-ul"></i> <span
                    className="d-xl-inline d-lg-none d-md-none d-sm-none">Lists</span>
                </a>
                <a href="../profile.html" className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
                    <i className="fas fa-user"></i> <span
                    className="d-xl-inline d-lg-none d-md-none d-sm-none">Profile</span>
                </a>
                <a href="#" className={`list-group-item list-group-item-action d-flex flex-row ${active === 'more' ? 'active' : ''}`}>
                        <span className="d-flex flex-row align-items-center">
                            <i className="fas fa-circle wd-stack-bottom"></i>
                            <i className="fas fa-ellipsis-h wd-stack-top"></i>
                        </span>
                    <span className="d-xl-inline d-lg-none d-md-none d-sm-none ms-2">More</span>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="../tuit.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
        </div>
    );
}
export default NavigationSidebar;
