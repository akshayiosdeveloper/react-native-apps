import React,{useState} from "react";

const BlogContext = React.createContext();

// use context for passing value to the nested children.
export const BlogProvider = ({children}) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
   setBlogPosts([...blogPosts, {title:`Blog post #${blogPosts.length + 1}`}]);
  };
    // pass the dummy objects to check functionality
    // const blogPosts = [
    //     {title: 'Blog Post #1'},
    //     {title: 'Blog Post #2'}
    // ];
 return <BlogContext.Provider value={{data:blogPosts,addBlogPost:addBlogPost}}>
 {children}
 </BlogContext.Provider>
};

export default BlogContext;
