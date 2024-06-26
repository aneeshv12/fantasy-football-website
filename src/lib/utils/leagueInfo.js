/*   STEP 1   */
export const leagueID = "1054962572027465728"; // your league ID
export const leagueName = "Absolute Units"; // your league name
export const dues = 50; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the realm of “Absolute Units,” where fantasy football isn’t just a game—it’s a full-blown spectacle. As you step into our league, brace yourself for a whirlwind of gridiron glory, heartbreak, and an endless stream of trash talk that could fuel a sitcom. </p>
  <p>Since our inception in 2018, a few heroes and several hopefuls have clashed on the virtual field, with fortunes oscillating faster than a Hail Mary pass in a hurricane. At the top of the food chain, we have the likes of Aneesh, whose team “Unleash the Beasts” lived up to its name for an impressive three-peat from 2018 to 2020. Not far behind, the cunning minds such as Mike, Daneel, Lance, and Temi have consistently sniffed at the championship, proving that persistence (and a bit of luck) pays off.</p>
  <p>Yet, for every tale of triumph, there’s a saga of struggle. Take, for example, the curious case of “All Barkley, No Bite”—a team that, despite its fierce name, whimpered into last place in 2023. Yes, that’s my squad, and yes, we’re living proof that even the mightiest can fall… spectacularly. But as we say around here, you’re only as good as your last draft pick, or in my case, perhaps as bad as your team name.</p>
  <p>The “Absolute Units” league is as unpredictable as it is entertaining. You might find yourself the underdog tale of the season or the punchline of the week’s meme. Here, legends can be made or mocked in equal measure, with each season writing its own unpredictable script. Our league’s roster ranges from certified fantasy experts who could host their own podcast (and some do, <a href="https://open.spotify.com/show/1RFSne2SKab2eWgiEpehmG?si=945db31206da4ac9" target="_blank">you can check out the podcast here!</a>) to those who grimace at the mere mention of the word “football”—yet, curiously, these very members somehow stumble into the playoffs year after year.</p>
  <p>So, whether you’re here to claim your spot among the fantasy elites or just to avoid becoming the next meme, remember: in “Absolute Units,” every week is a new episode, every matchup is a cliffhanger, and every season finale is worth the wait. Ready to draft your destiny?</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
  {
      // "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1054962387507314688",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Aneesh Venuturumilli",
      // "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Cambridge, MA", // (optional)
      "bio": "Hello everyone! I am a 3 time champion in our league, having won back-to-back-to-back championships our first 3 years. The past 3 years have largely been underwhelming for me, having finished second place once, and getting another ring... the toilet bowl ring unfortunately. I am largely a very consistent player, however I am coming off one of the worst seasons ever in the history of our league. Looking to bounce back strong this upcoming year. I am also the co-host and editor of The Fantasy Huddle Podcast, check the home page for a link to the podcast.",
      "photo": "/managers/Aneesh.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Daneel", // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Daneel.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 7611, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Looking to completely revamp my draft strategy and not focus so much targeting positions early in the drafts, and rather do best available. Also need a consistent QB. Looking to get a stud player in at least 3 of the 4 big positions (QB, RB, WR, and TE) in the early rounds. I'd prefer QB, RB, and WR to be stud level and then target upside for the other positions. TE i will wait on this year, not gonna get a stud one in the early rounds. Essentially, whatever I did in the 2023 season, don't do that at all and no one else should do that either.", // (optional)
      "tradingScale": 9, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "781429948794720256",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Daneel Ruppert",
      // "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Seattle, WA", // (optional)
      "bio": "I've played fantasy football for 4 seasons across 2 separate leagues with 1 championship.",
      "photo": "/managers/Daneel.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "kc", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Temi", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Temi.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4217, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Data-driven.", // (optional)
      "tradingScale": 9, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1002985276987232256",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Temidayo Kamson",
      // "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Seattle, WA", // (optional)
      "bio": "Numba1 never give up, never quit. Competitor",
      "photo": "/managers/Temi.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "MikeyRu", // Can be anything (usually your rival's name)
        link: 3, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Mike.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6786, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Next Man up. Look to waivers if players drafted are sub par. Trade for best players not mediocre place holders", // (optional)
      "tradingScale": 8, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1092221760201699328",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Michael Russo",
      // "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Charleston, SC", // (optional)
      "bio": "1 time champion, always in the hunt for the trophy, but sometimes that trophy is the toilet bowl. Biggest conspiracy theorist in the league, and is fully confident the league has been rigged even tho there is limited evidence outside of trade collusion and veto patterns. Takes fantasy football serious but may forget to set weekly lineup. Knew Josh Rosen was a bust before he was drafted but expected baker mayfield to be a HoF inductee.",
      "photo": "/managers/Mike.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2011, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Temi", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Temi.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6794, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Best Available in early rounds to solidify roster then high risk high reward after round 10.", // (optional)
      "tradingScale": 5, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1093295131647766528",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Max Ranaldi Liebhauser",
      // "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Portland, OR", // (optional)
      "bio": "From humble beginnings, I have established myself as a consistent player in this league, usually making playoffs… unlike some. What makes me unique is completely lack of football knowledge. Don’t get me wrong, I can toss the ol’ pigskin around, but I do not not know who any of these players are. My only knowledge is gleaned through pop culture and our group chat (muted). But I turn this to my advantage with a purely statistical approach, unclouded by knowing who is who, other peoples opinions, etc. It’s my year.",
      "photo": "/managers/MaxL.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "jax",
      // "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Temi", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Temi.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 787, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Statistician.", // (optional)
      "tradingScale": 2, // 1 - 10 (optional)
      "preferredContact": "Phone",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1093288097586049024",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "James Boffa",
      // "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Middletown, CT", // (optional)
      "bio": "The worlds okayest fantasy football player, similar to my favorite sports teams I often do well enough to build up hope and then suffer a soul crushing defeat.",
      "photo": "/managers/James.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2018,
      "favoriteTeam": "nyg", // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Aneesh", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Aneesh.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11292, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Hero RB, then fill in with good WRs. Find a scrub RB2 at some point. Maybe I’ll change it up as it hasn’t worked for awhile.", // (optional)
      "tradingScale": 8, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1096146373772189696",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Vinnie Dellechiaie",
      // "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New York (for now??)", // (optional)
      "bio": "Haven’t won the league yet. And to my recollection, haven’t lost it either…",
      "photo": "/managers/Vinnie.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "no",
      // "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Temi", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Temi.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 8150, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Pick ‘em. Start ‘em. Win ‘em. Skeet on competition 💦.", // (optional)
      "tradingScale": 8, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1096192923428814848",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Max Blanch",
      // "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New York (for now??)", // (optional)
      "bio": "I have primarily played with this group since we started the league. I had maybe played one year of fantasy beforehand, but this league is what got me paying attention. I enjoy the competition. I have been in this league since its conception and have made the playoffs each year. We’ll see if that’s to continue 🤷🏼‍♂️",
      "photo": "/managers/MaxB.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ne",
      // "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Daneel", // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Daneel.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6872, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "It’ll probably be similar to most other years: stress about what I’m going to do but don’t look anything up until the night before the draft.", // (optional)
      "tradingScale": 5, // 1 - 10 (optional)
      "preferredContact": "Phone",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "677352911902146560",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Sudarshan Thirumalai",
      // "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Westborough MA", // (optional)
      "bio": "In the annals of fantasy football lore, there exists a name that reverberates through the ages like a thunderous touchdown celebration: Sid. From the humble beginnings of drafting rookies based on their jersey colors to meticulously crafting trade deals worthy of NFL front offices, Sid has ascended to the pantheon of fantasy football greatness. \n Born with an innate sense of football strategy, Sid began his journey into the gridiron realm at a tender age. With a football in hand and a dream in his heart, he navigated the tumultuous landscape of fantasy football, mastering the art of waiver wire wizardry and defying odds like a modern-day football oracle. Today, Sid stands as a living testament to the power of passion, perseverance, and pigskin prowess. His journey through the ups and downs of fantasy football serves as an inspiration to all who dare to dream of gridiron glory. And as long as there are touchdowns to be scored and championships to be won, the legend of Sid will endure, a shining beacon of fantasy football excellence for generations to come.",
      "photo": "/managers/Sid.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ne",
      // "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Daneel", // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Daneel.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 9225, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "“Appear weak when you are strong, appear strong when you are weak.” - Sun Tzu, The Art of War", // (optional)
      "tradingScale": 2, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1098456400725962752",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Sawyer Thomas",
      // "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Wareham, MA", // (optional)
      "bio": "From playing youth football to being a perpetual loser of fantasy leagues, football is by far my favorite sport. I live and breathe football and of course am a diehard Patriots fan. While my passion for football has not translated to winning in the Absolute Units fantasy league, I’m confident I will be making a comeback and putting the league on notice.",
      "photo": "/managers/Sawyer.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ne",
      // "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Aneesh", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Aneesh.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6770, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Give me the best WRs I can find. RBs will come or they won’t. Do NOT draft Travis Kelce in the 1st round. Take a QB higher than I usually do.", // (optional)
      "tradingScale": 4, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "869054018712920064",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Lance Pier",
      // "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Wareham, MA", // (optional)
      "bio": "From playing youth football to being a perpetual loser of fantasy leagues, football is by far my favorite sport. I live and breathe football and of course am a diehard Patriots fan. While my passion for football has not translated to winning in the Absolute Units fantasy league, I’m confident I will be making a comeback and putting the league on notice.",
      "photo": "/managers/Sawyer.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ne",
      // "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Aneesh", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Aneesh.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6770, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Give me the best WRs I can find. RBs will come or they won’t. Do NOT draft Travis Kelce in the 1st round. Take a QB higher than I usually do.", // (optional)
      "tradingScale": 4, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1093360796396122112",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Orry Nihangame",
      // "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Boston, MA", // (optional)
      "bio": "The worst fantasy football manager with 0 appearance in the playoffs. The great news is it only goes up from here :) ",
      "photo": "/managers/Orry.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "",
      // "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Aneesh", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Aneesh.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 7547, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "This is the year baby.", // (optional)
      "tradingScale": 5, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "869054018712920064",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Lance",
      // "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "North Stonington, CT", // (optional)
      "bio": "6 year fantasy football expert. ",
      "photo": "/managers/Lance.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "buf",
      // "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Temi", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/Temi.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1945, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Pick players that will do well the first two weeks then eventually get hurt. Get two good TE to eventually trade for mediocre RB & WR combo", // (optional)
      "tradingScale": 9, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    }
    // {
    //   "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    // {
    //   "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    