import React, {useEffect, useState} from 'react'
import axios from 'axios'


const App = () => {



    const [posts, setPosts] = useState([]);

    const example3 = async () =>{
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
            setPosts(response.data);
            return response;
        } catch (error) {
            console.log(error);
            return null;
        }
    }


    useEffect(  ()=> {

        // 1번 방법
        // axios({
        //     method: 'GET',
        //     // url: "https://jsonplaceholder.typicode.com/posts"
        //     url: "https://jsonplaceholder.typicode.com/photos"
        // }).then(response => setPosts(response.data))

        // 2번 방법
        // axios.get("https://jsonplaceholder.typicode.com/photos")
        //     .then(response => setPosts(response.data))

        // 3번 방법
        async function example3() {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
                setPosts(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        example3();


        // try {
        //     const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
        //     setPosts(response.data);
        // } catch (error) {
        //     console.log(error);
        // }


    },[])

    // console.log(posts);

    return(
        <ul>
            {posts.map(post=>{
                return <li key={post.id}>
                    <div>{post.title}</div>
                    <div><img src={post.thumbnailUrl}/></div>
                </li>

            })}
        </ul>
    )


}

export default App;
