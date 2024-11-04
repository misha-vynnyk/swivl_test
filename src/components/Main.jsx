import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Container } from "./styles/Container.styled";
import { ActionButton, StyledMain } from "./styles/Main.styled";
import {
  FollowersCount,
  EditLink,
  UserButton,
  UserCard,
  UserInfo,
  UserPhoto,
  Wrapper,
  ReportMenu,
} from "./styles/UserCard.styled";
import {
  Post,
  PostInfo,
  Posts,
  PublicPrivateSwitcher,
  SwitcherButton,
  UserPost,
} from "./styles/UserPost";

const UserFollowers = [
  { id: 1, name: "synths", number: "45" },
  { id: 2, name: "Followers", number: "110" },
  { id: 3, name: "Following", number: "322" },
];

const UserPosts = [
  {
    id: 1,
    post: "New air routes that promise cheap flights in",
    isPublic: true,
    whoPublished: "Gregory Watkins",
    sharedTo: "#discussionaboutanimgttdds…",
    likes: "12",
    plays: "12",
  },
  {
    id: 2,
    post: "New air routes that promise cheap flights in",
    isPublic: false,
    whoPublished: "Gregory Watkins",
    sharedTo: "#discussionaboutanimgttdds…",
    likes: "12",
    plays: "12",
  },
  {
    id: 3,
    post: "New air routes that promise cheap flights in",
    isPublic: true,
    whoPublished: "Gregory Watkins",
    // sharedTo: "#discussionaboutanimgttdds…",
    sharedWeblink: "via weblink",
    likes: "12",
    plays: "12",
  },
  {
    id: 4,
    post: "New air routes that promise cheap flights in",
    isPublic: false,
    whoPublished: "Gregory Watkins",
    sharedTo: "#discussionaboutanimgttdds…",
    likes: "12",
    plays: "12",
  },
  {
    id: 5,
    post: "New air routes that promise cheap flights in",
    isPublic: true,
    whoPublished: "Gregory Watkins",
    sharedTo: "#discussionaboutanimgttdds…",
    likes: "12",
    plays: "12",
  },
  {
    id: 6,
    post: "New air routes that promise cheap flights in",
    isPublic: false,
    whoPublished: "Gregory Watkins",
    sharedTo: "#discussionaboutanimgttdds…",
    likes: "12",
    plays: "12",
  },
  {
    id: 7,
    post: "New air routes that promise cheap flights in",
    isPublic: true,
    whoPublished: "Gregory Watkins",
    sharedTo: "#discussionaboutanimgttdds…",
    likes: "12",
    plays: "12",
  },
  {
    id: 8,
    post: "New air routes that promise cheap flights in",
    isPublic: false,
    whoPublished: "Gregory Watkins",
    sharedTo: "#discussionaboutanimgttdds…",
    likes: "12",
    plays: "12",
  },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// Animation variants for the container and individual items
const AnimatedUserCard = motion(UserCard);
const AnimatedActionButton = motion(ActionButton);
const AnimatedPublicPrivateSwitcher = motion(PublicPrivateSwitcher);
const AnimatedPost = motion(Post);
const AnimatedPosts = motion(Posts);

const Main = () => {
  const [isPublic, setIsPublic] = useState(true);// Save the state of the privacy setting
  const [isOpen, setIsOpen] = useState(false);// Save the state of the menu
  const menuRef = useRef(null);// Create a reference to the menu


  const toggleMenu = () => setIsOpen((prevState) => !prevState);// Toggle the menu state
  const togglePrivacy = () => setIsPublic((prevState) => !prevState);// Toggle the privacy setting


  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };//Close the menu when clicking outside

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);// Add an event listener to the document to close the menu when clicking outside

  return (
    <Container>
      <StyledMain>
        <AnimatedActionButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
          }}
        />

        <AnimatedUserCard
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <Wrapper>
            <UserPhoto src="images/avatar.png" />
            <UserInfo>
              <h2>Benjamin Clementine</h2>
              <p>@benclementine</p>
              <EditLink href="/">
                <img src="icons/edit_icon.svg" alt="Edit icon" />
                Edit Profile
              </EditLink>
            </UserInfo>
            <UserButton onClick={toggleMenu} $isOpen={isOpen}>
              <img
                src="icons/a_icon_3_dots_menu.svg"
                alt="Menu reports"
              />
            </UserButton>
            {isOpen && (
              <ReportMenu ref={menuRef}>
                <a href="#">
                  <img src="icons/a_icon_report.svg" alt="Report" />
                  Report User
                </a>
                <a href="#">
                  <img src="icons/a_icon_delete.svg" alt="Block" />
                  Block User
                </a>
              </ReportMenu>
            )}
          </Wrapper>

          <Wrapper>
            {UserFollowers.map((user) => (
              <FollowersCount key={user.id}>
                <h3>{user.number}</h3>
                <p>{user.name}</p>
              </FollowersCount>
            ))}
          </Wrapper>

          <p>
            Cryptocurrencies including Ethereum, Ripple, and Litecoin have all
            plunged between 20 to 30 percent each, according to CoinMarketCap.
            Here is the latest Ripple price news and live updates on XRP,
            bitcoin and Ethereum.
          </p>
        </AnimatedUserCard>

        <UserPost>
          <AnimatedPublicPrivateSwitcher
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
          >
            <span>Public</span>
            <SwitcherButton onClick={togglePrivacy} $isPublic={isPublic}>
              <div></div>
            </SwitcherButton>
            <span>Private</span>
          </AnimatedPublicPrivateSwitcher>
          <AnimatedPosts
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {UserPosts.filter((post) => post.isPublic === isPublic).map(
              (post) => (
                <AnimatedPost className="item" variants={item} key={post.id}>
                  <div>
                    {isPublic && (
                      <p>
                        {post.sharedTo ? (
                          <>
                            Shared to <span>{post.sharedTo}</span>
                          </>
                        ) : (
                          <>
                            <img
                              src="icons/a_icon_link_copy.svg"
                              alt="Link copy"
                            />
                            <a href="#">Shared {post.sharedWeblink}</a>
                          </>
                        )}
                      </p>
                    )}
                    <h3>{post.post}</h3>
                  </div>

                  <div>
                    <PostInfo>
                      <p>
                        <img src="icons/Oval.svg" alt="User Photo" />
                        {post.whoPublished}
                      </p>
                      {isPublic ? (
                        <div>
                          <p>
                            <img
                              src="icons/a_icon_view.svg"
                              alt="View"
                            />
                            {post.likes}
                          </p>
                          <p>
                            <img
                              src="icons/a_icon_like.svg"
                              alt="Like"
                            />
                            {post.plays}
                          </p>
                        </div>
                      ) : (
                        <a href="#">Share</a>
                      )}
                    </PostInfo>
                  </div>
                </AnimatedPost>
              )
            )}
          </AnimatedPosts>
        </UserPost>
      </StyledMain>
    </Container>
  );
};

export default Main;
