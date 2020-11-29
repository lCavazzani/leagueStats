const express = require("express");
const router = express.Router();
const TeemoJS = require("teemojs");

let api = TeemoJS("RGAPI-14d2cfd4-8cc8-4a12-9f80-35d118b34202");

router.get("/", function (req, res) {
  res.send("hello");
});

router.get("/:server/:name", function (req, res) {
  const { name, server } = req.params;
  let id = "";
  console.log(name);
  api.get(server, "summoner.getBySummonerName", name).then((summoner) => {
    api
      .get(server, "match.getMatchlist", summoner.accountId, { endIndex: 5 })
      .then((matchlist) => {
        api
          .get(server, "league.getLeagueEntriesForSummoner", summoner.id, { endIndex: 5 })
          .then((league) => {
            res.json({
              data: {
                summoner,
                league,
                matchlist,
              },
            });
          });
      });
  });
});

module.exports = router;
