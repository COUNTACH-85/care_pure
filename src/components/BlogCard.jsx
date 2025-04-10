import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { useToast } from "../components/ui/use-toast";

export const BlogCard = ({ post, fullWidth = false }) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    toast({
      title: liked ? "Removed from favorites" : "Added to favorites",
      description: liked ? "Article removed from your favorites" : "Article added to your favorites",
    });
  };
  
  const handleShare = (e) => {
    e.stopPropagation();
    // In a real app, this would open a share dialog
    toast({
      title: "Share",
      description: "Sharing functionality would open here",
    });
  };
  
  const navigateToPost = () => {
    // In a real app, this would navigate to the post detail page
    navigate(`/blog/${post.id}`);
  };
  
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "fitness":
        return "bg-emerald-500 text-white";
      case "nutrition":
        return "bg-green-500 text-white";
      case "sleep":
        return "bg-teal-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };
  
  return (
    <div 
      className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer ${
        fullWidth ? "flex flex-col md:flex-row" : "flex flex-col"
      }`}
      onClick={navigateToPost}
    >
      <div className={`relative ${fullWidth ? "md:w-1/3" : "w-full"}`}>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(post.category)}`}>
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        
        <h3 className="text-lg font-bold mb-2 line-clamp-2 text-gray-900">{post.title}</h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-gray-700">{post.author.name}</span>
            </div>
            
            <div className="flex space-x-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 hover:bg-green-50"
                onClick={handleLike}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill={liked ? "currentColor" : "none"}
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className={liked ? "text-green-500" : "text-gray-500"}
                >
                  <path d="M20.4 12.9a9 9 0 0 0-13.31-13.1A9 9 0 0 0 1 15.5L12 20.24l8.4-4.74z"></path>
                </svg>
                <span className="sr-only">Like</span>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 hover:bg-green-50"
                onClick={handleShare}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-gray-500"
                >
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                  <polyline points="16 6 12 2 8 6"></polyline>
                  <line x1="12" y1="2" x2="12" y2="15"></line>
                </svg>
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;