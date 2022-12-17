export const HomePage = () => {
    const style1 = { color: "#4acfee" }
    const style2 = { 'fontStyle': "italic" }

    return (
        <section id="welcomePage">
            <div id="welcome-message">
                <h1 style={{ ...style1, ...style2 }}>Welcome to</h1>
                <h1 style={{ ...style1, ...style2 }}>Dance Academy</h1>
            </div>
            <div className="music-img">
                {/* <img src="./images/danceicons.jpg" /> */}
                <img src="https://i.pinimg.com/originals/3b/88/0e/3b880e9812b928fd3b3aa3af4b930970.gif" alt="loading..." />
            </div>
        </section>
    );
}