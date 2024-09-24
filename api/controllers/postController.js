import Post from '../models/postModel.js'

export const createPost = async (req,res) => {
    const { title, thumbnail, summary, content, author, authorPfp } = req.body;
    try {
        const post = await Post.create({
            title,
            thumbnail,
            summary,
            content,
            author,
            authorPfp
        });
        res.status(201).json({message:'Post creation successfull'})
    } catch (error) {
        res.status(400).json({message:error.message});
    }
    
}

export const getAllPost = async (req,res) => {
    res.json(await Post.find());
}

export const getPost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      
      if (!post) {
        return res.status(404).json({ message: 'Post not found in backend' }); // Return JSON instead of HTML
      }
      
      res.json(post);
      
    } catch (error) {
      console.error('Error fetching post:', error);
      res.status(500).json({ message: 'Server error', error }); // Return JSON error
    }
  };

export const getLatestPost = async (req,res) => {
  const latestRecord = await Post.find();
  
  const index = latestRecord.length-1;
  const data = latestRecord[index]
  res.json(data)
}

export const getPostByAuthor = async(req,res)=>{
  
  try {
    const post = await Post.find({author:req.params.author});
    
    if (!post) {
      return res.status(404).json({ message: '' }); // Return JSON instead of HTML
    }
    
    res.json(post);
    
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ message: 'Server error', error }); // Return JSON error
  }
  
}
  