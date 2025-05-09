import React, { useState} from "react";
import styled, { keyframes } from "styled-components";
import {
  FaRocket,
  FaTerminal,
} from "react-icons/fa";
import {
  SiTiktok,
  SiRootsbedrock,
} from "react-icons/si";

// Animations
const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: #0a0a12;
  min-height: 100vh;
  color: #e0e0ff;
  font-family: "Inter", sans-serif;
`;

const Header = styled.header`
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(-45deg, #0f0c29, #302b63, #24243e);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  border-radius: 20px;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-weight: 700;
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const PostList = styled.div`
  display: list;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const PostCard = styled.div`
  background: #161622;
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid #252538;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 255, 255, 0.1);
  }
`;

const ReactionBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #252538;
`;

const ReactionButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.color || "#e0e0ff"};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.hoverColor || "rgba(0, 255, 255, 0.2)"};
    transform: scale(1.05);
  }
`;

const LiveEditor = styled.div`
  background: #1a1a2e;
  border-radius: 10px;
  padding: 1.5rem;
  margin: 2rem 0;
  border: 1px solid #302b63;
`;

const TechBadge = styled.span`
  background: ${(props) => props.color};
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin: 0.5rem 0.5rem 0.5rem 0;
`;

// Initial posts
const initialPosts = [
  {
    id: 1,
    title: "TokTips: When AWS PartyRock Meets TikTok Comment Section",
    content:
      "Using genAI to generate tikTok-inspired comments as a healthier alternative to using tikTok",
    tags: ["AWS", "genAI", "partyRock", "tikTok"],
    reactions: { like: 12, mindblown: 5, question: 2 },
    tech: "AWSPartyRock",
    interactiveDemo: `// Simplified example of a TikTok comment generator \n function getAdvice() {\n  let userQuestion = prompt("Ask for advice"); \n  let styleOfResponse = prompt("in what style", "bestie, mom, or dad"); 
    const responseCondition = userQuestion?.toLowerCase().includes('why'); 
    let ans;
    if (styleOfResponse === 'bestie'){
     ans = responseCondition ? "Bestie, bc it was meant to be":"Bestie, I think you should go for it!";
    }
    else if (styleOfResponse === 'dad') {  
    ans = responseCondition ? "Son, bc it was meant to be": "Son, I think you should go for it!";
    }
    else if (styleOfResponse === 'mom') {  
    ans = responseCondition ? "Sweetie, bc it was meant to be":  "Sweetie, I think you should go for it!";
    }
    else {
      return "Send it chat";
   }
    return ans;} \n\ngetAdvice()`,
    href: "https://tiktokanonymous.wordpress.com/2025/04/03/toktips-when-aws-partyrock-meets-tiktok-comment-section-chaos-spoiler-the-cloud-has-opinions-%e2%98%81%ef%b8%8f%f0%9f%92%85/",
  },
  {
    id: 2,
    title:
      "[Coming soon] Using AI to create an autonomous live on social media platforms",
    content: "Collect followers and likes while you sleep!",
    tags: ["AI", "tikTok", "Instagram", "machinelearning"],
    reactions: { like: 0, mindblown: 0, question: 0 },
    tech: "AI",
    //interactiveDemo: `import tensorflow as tf\n\nmodel = tf.keras.Sequential([...])`
  },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);

  const [viewMode, setViewMode] = useState("grid");

  const handleReaction = (postId, reactionType) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              reactions: {
                ...post.reactions,
                [reactionType]: post.reactions[reactionType] + 1,
              },
            }
          : post
      )
    );
  };

  const runDemo = (code) => {
    try {
      // Simple code execution for demonstration
      const output = eval(code); // Note: eval is dangerous in real apps
      alert("Demo Output: " + output);
    } catch (error) {
      alert("Error in demo: " + error.message);
    }
  };

  return (
    <Container>
      <Header>
        <Title>
          <FaRocket /> AI Tech Blog
        </Title>
        <p>AI and its applications in modern social apps</p>
        <small>Anonymous@big tech</small>
      </Header>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <ReactionButton
          onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
          color="#00ffff"
          hoverColor="rgba(0, 255, 255, 0.3)"
        >
          {viewMode === "grid" ? "List View" : "Grid View"}
        </ReactionButton>
      </div>

      {viewMode === "list" ? (
        <PostList>
          {posts.map((post) => (
            <PostCard key={post.id}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                {post.tech === "AWSPartyRock" && (
                  <SiTiktok color="#61DAFB" size={24} />
                )}
                {post.tech === "AI" && (
                  <SiRootsbedrock color="#3776AB" size={24} />
                )}
                <h3 style={{ margin: 0 }}>
                  <a href={post.href} rel="noreferrer" target="_blank">
                    {post.title}
                  </a>
                </h3>
              </div>

              <p style={{ color: "#a0a0c0", margin: "1rem 0" }}>
                {post.content}
              </p>

              <div>
                {post.tags.map((tag) => (
                  <TechBadge key={tag} color="#302b63">
                    #{tag}
                  </TechBadge>
                ))}
              </div>

              {post.interactiveDemo && (
                <LiveEditor>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <FaTerminal size={20} />
                    <ReactionButton
                      onClick={() => runDemo(post.interactiveDemo)}
                      color="#00ff88"
                      hoverColor="rgba(0, 255, 136, 0.2)"
                    >
                      Run Code
                    </ReactionButton>
                  </div>
                  <pre
                    style={{
                      background: "#000",
                      padding: "1rem",
                      borderRadius: "8px",
                      overflowX: "auto",
                    }}
                  >
                    <code>{post.interactiveDemo}</code>
                  </pre>
                </LiveEditor>
              )}

              <ReactionBar>
                <ReactionButton onClick={() => handleReaction(post.id, "like")}>
                  👍 {post.reactions.like}
                </ReactionButton>
                <ReactionButton
                  onClick={() => handleReaction(post.id, "mindblown")}
                  color="#ff00ff"
                  hoverColor="hsla(300, 77.20%, 62.20%, 0.20)"
                >
                  🤯 {post.reactions.mindblown}
                </ReactionButton>
                <ReactionButton
                  onClick={() => handleReaction(post.id, "question")}
                  color="#00ffff"
                  hoverColor="rgba(0, 255, 255, 0.2)"
                >
                  ❓ {post.reactions.question}
                </ReactionButton>
              </ReactionBar>
            </PostCard>
          ))}
        </PostList>
      ) : (
        <PostGrid>
          {posts.map((post) => (
            <PostCard key={post.id}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                {post.tech === "AWSPartyRock" && (
                  <SiTiktok color="#61DAFB" size={24} />
                )}
                {post.tech === "AI" && (
                  <SiRootsbedrock color="#3776AB" size={24} />
                )}
                <h3 style={{ margin: 0 }}>
                  <a href={post.href} rel="noreferrer" target="_blank">
                    {post.title}
                  </a>
                </h3>
              </div>

              <p style={{ color: "#a0a0c0", margin: "1rem 0" }}>
                {post.content}
              </p>

              <div>
                {post.tags.map((tag) => (
                  <TechBadge key={tag} color="#302b63">
                    #{tag}
                  </TechBadge>
                ))}
              </div>

              {post.interactiveDemo && (
                <LiveEditor>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <FaTerminal size={20} />
                    <ReactionButton
                      onClick={() => runDemo(post.interactiveDemo)}
                      color="#00ff88"
                      hoverColor="rgba(0, 255, 136, 0.2)"
                    >
                      Run Code
                    </ReactionButton>
                  </div>
                  <pre
                    style={{
                      background: "#000",
                      padding: "1rem",
                      borderRadius: "8px",
                      overflowX: "auto",
                    }}
                  >
                    <code>{post.interactiveDemo}</code>
                  </pre>
                </LiveEditor>
              )}

              <ReactionBar>
                <ReactionButton onClick={() => handleReaction(post.id, "like")}>
                  👍 {post.reactions.like}
                </ReactionButton>
                <ReactionButton
                  onClick={() => handleReaction(post.id, "mindblown")}
                  color="#ff00ff"
                  hoverColor="rgba(255, 0, 255, 0.2)"
                >
                  🤯 {post.reactions.mindblown}
                </ReactionButton>
                <ReactionButton
                  onClick={() => handleReaction(post.id, "question")}
                  color="#00ffff"
                  hoverColor="rgba(0, 255, 255, 0.2)"
                >
                  ❓ {post.reactions.question}
                </ReactionButton>
              </ReactionBar>
            </PostCard>
          ))}
        </PostGrid>
      )}
    </Container>
  );
}

export default App;
