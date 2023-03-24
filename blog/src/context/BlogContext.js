import createDataContext from "./createDataContext";
const blogReducer = (state,action) => {
 switch(action.type) {
   case 'delete_blogpost':
    return state.filter((blogPost) => blogPost.id !== action.payload);

   case 'add_blogpost':
  return [...state, 
    {
      id:Math.floor(Math.random()*9999), 
      title:`BlogPost #${state.length + 1}`
    }
  ];
  default :
  return state; 
 }
};
// add post functionality
const addBlogPost = dispatch => {
  return () => {
    dispatch({type: 'add_blogpost'});
  };
};

// delete post functionality
const deleteBlogPost = dispatch => {
  return (id) => {
    dispatch({type: 'delete_blogpost',payload:id});
  };
};

export const { Context , Provider} = createDataContext(
  blogReducer,
  {addBlogPost,deleteBlogPost},
  []
  );


