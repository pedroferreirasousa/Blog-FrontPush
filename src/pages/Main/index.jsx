import api from "../../service/api";
import Post from "../../components/Post";
import { useEffect, useState } from "react";

const Main = () => {

    const [posts, setPosts] = useState([]);
    const handleAxios = async () => {
        try {
            const response = await api.get("/posts");
            setPosts(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => { }, [posts]);

    return (
        <section className="container">
            <h2>Main.jsx</h2>
            <button onClick={handleAxios}>Fazer requisição</button>
            <div className="mt-5 container-posts">
                {
                    posts.map((post, index) => {
                        return (
                            <>
                                <Post
                                    key={index}
                                    title={post.title}
                                    subtitle={post.category}
                                    author={post.author}
                                    date={post.date}
                                >
                                    {post.description}
                                </Post>
                            </>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main;