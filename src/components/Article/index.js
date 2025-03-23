import Post from "../Post";


const Article = () => {
    return (
        <section className="container">
            <h1>Article</h1>
            <div className="mt-5 container-posts">
                <Post subtitle="tecnologia" title="O guia definitivo sobre o blog">
                    1Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit.
                    Providentquae maiores consectetur
                    quia animi?Nesciunt iure perferendis
                    reprehenderit quae,totam temporibus
                    incidunt quo nisi eius sit
                    necessitatibus, sunt sint qui.
                </Post>
                <Post subtitle="fotografia" title="Quais as melhores câmeras para 2025?">
                    2Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit.
                    Providentquae maiores consectetur
                    quia animi?Nesciunt iure perferendis
                    reprehenderit quae,totam temporibus
                    incidunt quo nisi eius sit
                    necessitatibus, sunt sint qui.
                </Post>
                <Post subtitle="Cinema" title="Os 10 filmes com maior bilheteria">
                    3Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit.
                    Providentquae maiores consectetur
                    quia animi?Nesciunt iure perferendis
                    reprehenderit quae,totam temporibus
                    incidunt quo nisi eius sit
                    necessitatibus, sunt sint qui.
                </Post>
            </div>
        </section>
    );
}

export default Article;