import React from "react";

const BlogContext = React.createContext();

// use context for passing value to the nested children.
export const BlogProvider = ({children}) => {
    const blogPosts = [
        {title: 'Blog Post #1'},
        {title: 'Blog Post #2'}
    ];
 return <BlogContext.Provider value={blogPosts}>
 {children}
 </BlogContext.Provider>
};

export default BlogContext;
