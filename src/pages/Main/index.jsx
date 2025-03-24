import api from "../../service/api";
import Post from "../../components/Post";
import { useEffect, useState } from "react";

const Main = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        api.get("/posts")
        .then((response) => {
            setPosts(response.data);
        })
    }, [])

    // const handleAxios = () => {
    //     // try {
    //         const response = await api.get("/posts");
    //         setPosts(response.data);
    //     // } catch (error) {
        //     console.log(error);
    //     // }
    // };

    // useEffect(() => { }, [posts]);

    return (
        <section className="container">
            <h2 className="mt-3">Artigos</h2>
            <div className="mt-5 container-posts">
                {
                    posts.map((post, index) => {
                        return (
                            <div key={index}>
                                <Post
                                    title={post.title}
                                    subtitle={post.category}
                                    author={post.author}
                                    date={post.date}
                                >
                                    {post.resume}
                                </Post>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main;