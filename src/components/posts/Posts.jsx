import Profile from "../../pages/profile/Profile";
import "./posts.scss"
import Post from "../post/Post";

const Posts=() =>{

    const posts = [
        {
            id: 1,
            name: "John Doe",
            userId:1,
            profilePic :"https://www.maofacialplastics.com/wp-content/uploads/2021/06/img-1047-2.jpg",
            dec:"this is my first post",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
          },
          {
            id: 2,
            name: "Doeie rock",
            userId:2,
            profilePic :"https://www.maofacialplastics.com/wp-content/uploads/2021/06/img-1047-2.jpg",
            dec:"this is my first post",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
          },
          {
            id: 3,
            name: "Jeena silitan",
            userId:3,
            profilePic :"https://www.maofacialplastics.com/wp-content/uploads/2021/06/img-1047-2.jpg",
            dec:"this is my first post",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
          },
          {
            id: 4,
            name: "aera avio",
            userId:4,
            profilePic :"https://www.maofacialplastics.com/wp-content/uploads/2021/06/img-1047-2.jpg",
            dec:"this is my first post",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
          },
    ];

    return <div className="posts">
      {
        posts.map(post=>(
          <Post post ={post} key={post.id}/>
        ))
      }
    </div>
    
};

export default Posts  