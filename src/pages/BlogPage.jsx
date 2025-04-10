import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { BlogCard } from "../components/BlogCard";
import { Skeleton } from "../components/ui/skeleton";

const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Regular Exercise for Mental Health",
    excerpt: "Discover how physical activity can improve your mental well-being and reduce stress levels.",
    content: "Regular exercise has been proven to have numerous benefits for mental health...",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "fitness",
    date: "March 31, 2025",
    readTime: "5 min read",
    author: {
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    }
  },
  {
    id: 2,
    title: "Essential Nutrients for a Balanced Diet",
    excerpt: "Learn about the key nutrients your body needs and how to incorporate them into your daily meals.",
    content: "A balanced diet is crucial for maintaining good health and preventing chronic diseases...",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "nutrition",
    date: "March 30, 2025",
    readTime: "7 min read",
    author: {
      name: "Michael Chen",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    }
  },
  {
    id: 3,
    title: "Improving Sleep Quality: A Comprehensive Guide",
    excerpt: "Tips and techniques to help you get better sleep and wake up feeling refreshed.",
    content: "Quality sleep is essential for physical and mental health, but many people struggle...",
    image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "sleep",
    date: "March 29, 2025",
    readTime: "6 min read",
    author: {
      name: "Emma Davis",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  }
];

const BlogPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  useEffect(() => {

    setTimeout(() => {
      setPosts(blogPosts);
      setIsLoading(false);
    }, 1000);
  }, [ navigate]);

  const categories = ["all", "fitness", "nutrition", "sleep", "mindfulness"];

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesCategory = activeCategory === "all" || post.category.toLowerCase() === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* <Navbar /> */}
      <div className="pt-24 pb-12 animate-slide-down">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow-sm mb-8 animate-slide-up">
            <h1 className="text-3xl font-bold mb-2 text-green-800 animate-slide-in-left">Health & Wellness Articles</h1>
            <p className="text-gray-600 mb-6 animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
              Stay informed with the latest research, tips, and insights on health, fitness, nutrition, and mindfulness
            </p>
            <div className="flex flex-col md:flex-row gap-4 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow bg-white border-gray-200 focus:border-green-500 focus:ring-green-500"
              />
              <div className="flex gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                {categories.map((category, index) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    className={`${
                      activeCategory === category 
                        ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white" 
                        : "border-gray-200 hover:bg-gray-100 text-gray-700"
                    } animate-slide-in-right`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          {isLoading ? (
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-64 rounded-xl animate-pulse-scale" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="space-y-6">
              {filteredPosts.map((post, index) => (
                <div key={post.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <BlogCard post={post} fullWidth />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 animate-zoom-in">
              <h3 className="text-xl font-medium mb-2 text-gray-800">No articles found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filter to find what you're looking for</p>
              <Button 
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white animate-bounce-slow"
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
