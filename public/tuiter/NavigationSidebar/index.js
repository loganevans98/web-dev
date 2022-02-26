const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter fa-inverse"></i>
                    </a>
                    <a href="../home.html" class="list-group-item list-group-item-action">
                        <i class="fas fa-home"></i> <span class="d-xl-inline d-lg-none d-md-none d-sm-none">Home</span>
                    </a>
                    <a href="../explore.html" class="list-group-item list-group-item-action active" aria-current="true">
                        <i class="fas fa-hashtag"></i> <span class="d-xl-inline d-lg-none d-md-none d-sm-none">Explore</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <i class="fas fa-bell"></i> <span class="d-xl-inline d-lg-none d-md-none d-sm-none">Notifications</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <i class="fas fa-envelope"></i> <span class="d-xl-inline d-lg-none d-md-none d-sm-none">Messages</span>
                    </a>
                    <a href="../bookmarks.html" class="list-group-item list-group-item-action" >
                        <i class="fas fa-bookmark"></i> <span class="d-xl-inline d-lg-none d-md-none d-sm-none">Bookmarks</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action" >
                        <i class="fas fa-list-ul"></i> <span class="d-xl-inline d-lg-none d-md-none d-sm-none">Lists</span>
                    </a>
                    <a href="../profile.html" class="list-group-item list-group-item-action" >
                        <i class="fas fa-user"></i> <span class="d-xl-inline d-lg-none d-md-none d-sm-none">Profile</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action d-flex flex-row">
                        <span class="d-flex flex-row align-items-center">
                            <i class="fas fa-circle wd-stack-bottom"></i>
                            <i class="fas fa-ellipsis-h wd-stack-top"></i>
                        </span>
                        <span class="d-xl-inline d-lg-none d-md-none d-sm-none ms-2">More</span>
                    </a>
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
    `);
}
export default NavigationSidebar;
