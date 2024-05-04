
const PostsPage = async () => {

    const res = await fetch("http://localhost:5000/posts",{
        cache: "force-cache",
    });
    const posts = await res.json();
    console.log(posts);

    return (


        <div className="w-full">
            <h1>Total posts: {posts.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-1/3 md:w-full mx-auto gap-2">
                {
                    posts.map(post =>
                        <div key={post.id} className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body bg-gray-200">
                                <h2 className="card-title">{post.title}</h2>
                                <p>{post.description}</p>
                                <p>Like: {post.likeCount}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PostsPage;