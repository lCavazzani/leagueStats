import * as React from "react";
import styled from "styled-components";
// import Icon from '../img/game/profileicon/1.png'
const Wrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
`;

const Padding = styled.div`
  padding: 28px;
`;

const SummonerIcon = styled.img`
    border-radius: 50%;
    height: 100px;
    widht: 100px;
`

const SummonerCard = ({data}) => {
    const {summoner, league, matchlist } = data;
    return (
      <Wrapper>
          <Padding>
            <SummonerIcon src={window.location.origin + `/img/game/profileicon/${summoner.profileIconId}.png`} />
            <div> name: {summoner.name}</div>
            <div>level: {summoner.summonerLevel}</div>
            <div>
              elo: {league[0].tier}
              {league[0].rank}
            </div>
            <div>points: {league[0].leaguePoints}</div>
            <div>
              Wins: {league[0].wins} Losses: {league[0].losses}
            </div>
            <div>Total Matches: {matchlist.totalGames}</div>
          </Padding>
      </Wrapper>
    );
}

export default SummonerCard;
