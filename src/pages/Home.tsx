import { useEffect, useState, useRef } from "react";
import "./Home.less";
import ShowCase from "@/components/ShowCase";
import { getAllShowCases } from "@/api/modules";

interface ShowCaseType {
  url: string;
  commentCount: number;
  likeCount: number;
}

const Home: React.FC = () => {
  const [totalPost, setTotalPost] = useState("10, 690, 930");
  const [showCases, setShowCases] = useState<ShowCaseType[]>([]);
  const [skip, setSkip] = useState(0);
  const limit = 9; // 每次加载的数量
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    loadShowCases(skip, limit);
  }, [skip]);

  const loadShowCases = async (skip: number, limit: number) => {
    try {
      const response = await getAllShowCases(skip, limit);
      console.log(response);
      const showCases = response.data?.showCases ?? [];
      if (showCases.length > 0) {
        setShowCases((prev) => [...prev, ...showCases]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to fetch show cases", error);
    }
  };

  const lastShowCaseElementRef = (node: HTMLElement | null) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setSkip((prevSkip) => prevSkip + limit);
      }
    });
    if (node) observer.current.observe(node);
  };

  return (
    <div>
      <div className="top-section">#houseplants</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="HomePage">
          <div className="name-section">
            <div className="avatar-container">
              <img
                className="avatar"
                src="https://picsum.photos/300?random=100"
                alt="Avatar"
              ></img>
            </div>
            <div className="name-title">
              <div className="name">#houseplants</div>
              <div className="post-number">{totalPost} posts</div>
            </div>
          </div>
          <div className="middle-section">
            <div className="top-posts-text">Top posts</div>
            <div className="showcase-container">
              {showCases.map((showCase, index) => (
                <ShowCase
                  key={index}
                  url={showCase.url}
                  commentCount={showCase.commentCount}
                  likeCount={showCase.likeCount}
                  ref={
                    index === showCases.length - 1
                      ? lastShowCaseElementRef
                      : null
                  }
                />
              ))}
            </div>
          </div>
          <div className="footer">
            <a>Meta</a>
            <a>About</a>
            <a>Blog</a>
            <a>Jobs</a>
            <a>Help</a>
            <a>API</a>
            <a>Privacy</a>
            <a>Terms</a>
            <a>Locations</a>
            <a>Instagram Lite</a>
            <a>Threads</a>
            <a>Contact Uploading & Non-Users</a>
            <a>Meta Verified</a>
            <div className="language">
              English <span>▼</span>
              <span className="copyright">© 2024 Instagram from Meta</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
