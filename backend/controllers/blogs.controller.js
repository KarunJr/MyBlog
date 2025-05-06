import Blog from "../models/blog.model.js";
import cloudinary from "../lib/cloudinary.js"
import slugify from "slugify";

export const addPost = async (req, res) => {
  const { title, summary, category, image, content } = req.body;
  try {
    const slug = slugify(title, { lower: true })
    let cloudinaryResponse = null;
    if(image){
      cloudinaryResponse = await cloudinary.uploader.upload(image, {folder: "thumbnail"})
    }

    const blog = Blog.create({
      title,
      slug,
      summary,
      category,
      image: cloudinaryResponse ?.secure_url ? cloudinaryResponse.secure_url : "",
      content
     });
    res
      .status(200)
      .json({ success: true, blog, message: "Blog created successfully" });
  } catch (error) {
    console.log("Error in addPost function", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
}

export const getPost = async(req, res)=>{
  const {slug} = req.params;
  try {
    console.log("The slug is", slug);
    
    const blog = await Blog.find({slug})

    res.status(200).json({success: true, blog})
  } catch (error) {
    console.log("Error in getPost function", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
}

export const getAllPost = async (req, res) => {
  try {
    const blog = await Blog.find({});
    res.status(200).json({ success: true, blog });
  } catch (error) {
    console.log("Error in getPost function", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addComment = async(req, res) =>{
  const { comment, blogId } = req.body
  const user = req.user;
  try {
    if(!user){
      return res.status(403).json({success: false, message: "Please login to comment"})
    }
    const blog = await Blog.findById(blogId)
    blog.comments.push({
      user: user._id,
      text: comment,
      createdAt: new Date()
    })
    await blog.save();

    // Here we populate the user’s name and email, as we have referenced the user in the comment
    const updatedBlog = await Blog.findById(blogId).populate("comments.user", "name email")
    res.status(200).json({success: true, comments: updatedBlog.comments})
  } catch (error) {
    console.log("Error in addComment function", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getComment = async(req, res)=>{
  const {slug} = req.params;
  try {
    const blog = await Blog.findOne({slug}).populate("comments.user", "name email")
    if(!blog){
      return res.status(404).json({success: false, message: "Blog not found"})
    }
    res.status(200).json({success: true, comments: blog.comments})
  } catch (error) {
    console.log("Error in getComment function", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
}
