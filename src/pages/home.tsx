import React, { useEffect, useState } from "react";
import {
  SportImage,
  SportName,
  ButtonsContainer,
  Button,
  SportImageContainer,
} from "../components/styledComponents/homeStyles";
import Layout from "@/layouts/Layout";
import ThemeToggleButton from "@/components/common/ThemeToggleButton";
import XIcon from "../../public/icons/xIcon";
import HeartIcon from "../../public/icons/heartIcon";
import { handleLikeDislike } from "@/services/likeDislikeService";
import sportService from "@/services/sportService";

interface Sport {
  idSport: string;
  strSport: string;
  strSportThumb: string;
  liked: boolean;
}

const SportsPage: React.FC = () => {
  const [sports, setSports] = useState<Sport[]>([]);
  const [index, setIndex] = useState(0);
  const [likedState, setLikedState] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const sportsData = await sportService.fetchSports();
        setSports(sportsData);
      } catch (error) {
        console.error("Failed to fetch sports:", error);
      }
    };

    fetchSports();
  }, []);

  const handleLike = async (liked: boolean) => {
    const currentSport = sports[index];
    const nextIndex = (index + 1) % sports.length;
    setIndex(nextIndex);
    setLikedState(liked);

    try {
      await handleLikeDislike(liked, currentSport.idSport);
    } catch (error) {
      console.error("Failed to update likes/dislikes:", error);
    }
  };

  return (
    <Layout>
      <ThemeToggleButton />
      {sports.length > 0 && index < sports.length ? (
        <div key={sports[index].idSport}>
          <SportImageContainer>
            <SportImage
              src={sports[index].strSportThumb}
              alt={sports[index].strSport}
            />
            <SportName>{sports[index].strSport}</SportName>
          </SportImageContainer>
          <ButtonsContainer>
            <Button
              onClick={() => handleLike(false)}
              style={{ backgroundColor: likedState === false ? "red" : "white", color: likedState === false ? "white" : "black" }}
            >
              <XIcon fill={"currentColor"} />
            </Button>
            <Button
              onClick={() => handleLike(true)}
              style={{ backgroundColor: likedState === true ? "red" : "white", color: likedState === true ? "white" : "black" }}
            >
              <HeartIcon fill={"currentColor"} />
            </Button>
          </ButtonsContainer>
        </div>
      ) : (
        <p>No sports data found.</p>
      )}
    </Layout>
  );
};

export default SportsPage;
