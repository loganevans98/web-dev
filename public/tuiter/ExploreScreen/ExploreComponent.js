import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
          <div class="d-flex align-items-center mb-2">
            <div class="input-group">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
                <input type="text" class="form-control" placeholder="Search Tuiter">
            </div>
            <a href="../explore-settings.html"><i class="fas fa-cog fa-2x text-primary ms-4"></i></a>
          </div>
          <ul class="nav mb-2 nav-tabs mb-2 text-wrap">
                <li class="nav-item">
                    <a class="nav-link active" href="../for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block d-lg-block d-xl-block">
                    <a class="nav-link" href="../entertainment.html">Entertainment</a>
                </li>
          </ul>
          <div class="card rounded-0 border-bottom-0">
            <img src="../starship.jpeg" class="card-img-top rounded-0">
            <div class="card-img-overlay">
                <h3 class="card-title">SpaceX's Starship</h3>
            </div>
          </div>
          ${PostSummaryList()}
    `);
}
export default ExploreComponent;
