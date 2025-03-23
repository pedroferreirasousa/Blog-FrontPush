import Post from "../Post";

const Article = () => {
    return (
        <section className="container">
            <h1>Article</h1>
            <div className="mt-5 container-posts">
                <Post />
                <Post />
                <Post />
            </div>
        </section>
    );
}

export default Article;