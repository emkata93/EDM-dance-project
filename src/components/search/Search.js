export const Search = () => {
    return (
        <section id="searchPage">
            <h1>Search Lesson</h1>
            <div className="search">
                <input
                    id="search-input"
                    type="text"
                    name="search"
                    placeholder="Enter desired lesson name"
                />
                <button className="button-list">Search</button>
            </div>
            {/* <h2>Results:</h2>
            Show after click Search button
            <div className="search-result"> */}
            {/*If have matches*/}
            {/* <div className="card-box">
                    <img src="./images/BrandiCarlile.png" />
                    <div>
                        <div className="text-center">
                            <p className="name">Name: In These Silent Days</p>
                            <p className="artist">Artist: Brandi Carlile</p>
                            <p className="genre">Genre: Low Country Sound Music</p>
                            <p className="price">Price: $12.80</p>
                            <p className="date">Release Date: October 1, 2021</p>
                        </div>
                        <div className="btn-group">
                            <a href="#" id="details">
                                Details
                            </a>
                        </div>
                    </div>
                </div> */}
            {/*If there are no matches*/}
            {/* <p className="no-result">No result.</p>
            </div> */}
        </section>
    )
}