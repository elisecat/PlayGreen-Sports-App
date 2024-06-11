import React, { useEffect, useState } from "react";
import { getUserLikesDislikes } from "@/services/likeDislikeService";
import Layout from "@/layouts/Layout";
import {
  HistoryContainer,
  Title,
  Subtitle,
  Date,
  SportItem,
  SportImage,
  SportName,
  SportButton,
  SportOverlay,
  PaginationButton,
  PaginationContainer,
  InformationContainer,
  SportNameContainer,
} from "../components/styledComponents/historyStyles";
import XIcon from "../../public/icons/xIcon";
import HeartIcon from "../../public/icons/heartIcon";
import sportService from "@/services/sportService";

interface Sport {
  idSport: string;
  strSport: string;
  strSportThumb: string;
  liked: boolean;
}

const HistoryPage: React.FC = () => {
  const [sports, setSports] = useState<{ idSport: string; liked: boolean }[]>(
    []
  );
  const [allSports, setAllSports] = useState<Sport[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchUserLikesDislikes = async () => {
      try {
        const sportsData = await getUserLikesDislikes();
        setSports(sportsData);
      } catch (error) {
        console.error("Failed to fetch user likes/dislikes:", error);
      }
    };

    const fetchAllSports = async () => {
      try {
        const sportsData = await sportService.fetchSports();
        setAllSports(sportsData);
      } catch (error) {
        console.error("Failed to fetch all sports:", error);
      }
    };

    fetchUserLikesDislikes();
    fetchAllSports();
  }, []);

  const getSportDetails = (idSport: string) => {
    return allSports.find((sport) => sport.idSport === idSport);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSports = sports.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(sports.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Layout>
      <InformationContainer>
        <Title>History</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Subtitle>
        <Date>17 December</Date>
      </InformationContainer>
      <HistoryContainer>
        {currentSports.map(({ idSport, liked }) => {
          const sportDetails = getSportDetails(idSport);
          return sportDetails ? (
            <SportItem key={idSport}>
              <SportImage
                src={sportDetails.strSportThumb}
                alt={sportDetails.strSport}
              />
              <SportOverlay />
              <SportNameContainer>
                <SportName>{sportDetails.strSport}</SportName>
              </SportNameContainer>
              <SportButton liked={liked}>
                {liked ? (
                  <HeartIcon fill={"currentColor"} />
                ) : (
                  <XIcon fill={"#EA596F"} />
                )}
              </SportButton>
            </SportItem>
          ) : null;
        })}
        <PaginationContainer>
          <PaginationButton
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            {" "}
            « Previous
          </PaginationButton>
          <PaginationButton
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(sports.length / itemsPerPage)}
          >
            Next »
          </PaginationButton>
        </PaginationContainer>
      </HistoryContainer>
    </Layout>
  );
};

export default HistoryPage;
