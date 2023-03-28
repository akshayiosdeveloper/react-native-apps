import createDataContext from "./createDataContext";
const blogReducer = (state,action) => {
 switch(action.type) {
   case 'delete_blogpost':
    return state.filter((blogPost) => blogPost.id !== action.payload);

   case 'add_blogpost':
  return [...state, 
    {
      id:Math.floor(Math.random()*9999), 
      title:action.payload.title,
      content:action.payload.content
    }
  ];
  default :
  return state; 
 }
};
// add post functionality
const addBlogPost = dispatch => {
  return (title,content,callback) => {
    dispatch({type: 'add_blogpost', payload:{title,content}});
    callback();
  };
};

// delete post functionality
const deleteBlogPost = dispatch => {
  return (id) => {
    dispatch({type: 'delete_blogpost',payload:id});
  };
};

//third parameter is used to  pass the value  as parameter.
export const { Context , Provider} = createDataContext(
  blogReducer,
  {addBlogPost,deleteBlogPost},
  [{title:"Test",content:"content",id:45454}]
  );


