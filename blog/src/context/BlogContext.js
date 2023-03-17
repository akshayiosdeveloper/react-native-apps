import React from "react";

const BlogContext = React.createContext();
// use context for passing value to the nested children.
export const BlogProvider = ({children}) => {
 return <BlogContext.Provider value={888}>
 {children}
 </BlogContext.Provider>
};

export default BlogContext;
