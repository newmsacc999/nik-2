import React, { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() { 
    const [showAllMatches, setShowAllMatches] = useState(false);
    // Match data array with all matches

    const matches = [
      {
        "id": "match23",
        "date": "9-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Gujarat Titans",
          "logo": "https://upload.wikimedia.org/wikipedia/en/0/09/Gujarat_Titans_Logo.svg"
        },
        "team2": {
          "name": "Rajasthan Royals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg"
        },
        "venue": "Narendra Modi Stadium, Ahmedabad"
      },
      {
        "id": "match24",
        "date": "10-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Royal Challengers Bengaluru",
          "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Royal_Challengers_Bengaluru_Logo.svg"
        },
        "team2": {
          "name": "Delhi Capitals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg"
        },
        "venue": "M. Chinnaswamy Stadium, Bangalore"
      },
      {
        "id": "match25",
        "date": "11-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Chennai Super Kings",
          "logo": "https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg"
        },
        "team2": {
          "name": "Kolkata Knight Riders",
          "logo": "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg"
        },
        "venue": "MA Chidambaram Stadium, Chennai"
      },
      {
        "id": "match26",
        "date": "12-Apr-25",
        "time": "3:30 PM",
        "team1": {
          "name": "Lucknow Super Giants",
          "logo": "https://upload.wikimedia.org/wikipedia/en/a/a9/Lucknow_Super_Giants_IPL_Logo.svg"
        },
        "team2": {
          "name": "Gujarat Titans",
          "logo": "https://upload.wikimedia.org/wikipedia/en/0/09/Gujarat_Titans_Logo.svg"
        },
        "venue": "BRSABV Ekana Cricket Stadium, Lucknow"
      },
      {
        "id": "match27",
        "date": "12-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Sunrisers Hyderabad",
          "logo": "https://upload.wikimedia.org/wikipedia/en/5/51/Sunrisers_Hyderabad_Logo.svg"
        },
        "team2": {
          "name": "Punjab Kings",
          "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg"
        },
        "venue": "Rajiv Gandhi International Cricket Stadium, Hyderabad"
      },
      {
        "id": "match28",
        "date": "13-Apr-25",
        "time": "3:30 PM",
        "team1": {
          "name": "Rajasthan Royals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg"
        },
        "team2": {
          "name": "Royal Challengers Bengaluru",
          "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Royal_Challengers_Bengaluru_Logo.svg"
        },
        "venue": "Sawai Mansingh Stadium, Jaipur"
      },
      {
        "id": "match29",
        "date": "13-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Delhi Capitals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg"
        },
        "team2": {
          "name": "Mumbai Indians",
          "logo": "https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg"
        },
        "venue": "Arun Jaitley Stadium, Delhi"
      },
      {
        "id": "match30",
        "date": "14-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Lucknow Super Giants",
          "logo": "https://upload.wikimedia.org/wikipedia/en/a/a9/Lucknow_Super_Giants_IPL_Logo.svg"
        },
        "team2": {
          "name": "Chennai Super Kings",
          "logo": "https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg"
        },
        "venue": "BRSABV Ekana Cricket Stadium, Lucknow"
      },
      {
        "id": "match31",
        "date": "15-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Punjab Kings",
          "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg"
        },
        "team2": {
          "name": "Kolkata Knight Riders",
          "logo": "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg"
        },
        "venue": "Mullanpur Stadium, New Chandigarh, Punjab"
      },
      {
        "id": "match32",
        "date": "16-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Delhi Capitals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg"
        },
        "team2": {
          "name": "Rajasthan Royals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg"
        },
        "venue": "Arun Jaitley Stadium, Delhi"
      },
      {
        "id": "match33",
        "date": "17-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Mumbai Indians",
          "logo": "https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg"
        },
        "team2": {
          "name": "Sunrisers Hyderabad",
          "logo": "https://upload.wikimedia.org/wikipedia/en/5/51/Sunrisers_Hyderabad_Logo.svg"
        },
        "venue": "Wankhede Stadium, Mumbai"
      },
      {
        "id": "match34",
        "date": "18-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Royal Challengers Bengaluru",
          "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Royal_Challengers_Bengaluru_Logo.svg"
        },
        "team2": {
          "name": "Punjab Kings",
          "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg"
        },
        "venue": "M. Chinnaswamy Stadium, Bangalore"
      },
      {
        "id": "match35",
        "date": "19-Apr-25",
        "time": "3:30 PM",
        "team1": {
          "name": "Gujarat Titans",
          "logo": "https://upload.wikimedia.org/wikipedia/en/0/09/Gujarat_Titans_Logo.svg"
        },
        "team2": {
          "name": "Delhi Capitals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg"
        },
        "venue": "Narendra Modi Stadium, Ahmedabad"
      },
      {
        "id": "match36",
        "date": "19-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Rajasthan Royals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg"
        },
        "team2": {
          "name": "Lucknow Super Giants",
          "logo": "https://upload.wikimedia.org/wikipedia/en/a/a9/Lucknow_Super_Giants_IPL_Logo.svg"
        },
        "venue": "Sawai Mansingh Stadium, Jaipur"
      },
      {
        "id": "match37",
        "date": "20-Apr-25",
        "time": "3:30 PM",
        "team1": {
          "name": "Punjab Kings",
          "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg"
        },
        "team2": {
          "name": "Royal Challengers Bengaluru",
          "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Royal_Challengers_Bengaluru_Logo.svg"
        },
        "venue": "Mullanpur Stadium, New Chandigarh, Punjab"
      },
      {
        "id": "match38",
        "date": "20-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Mumbai Indians",
          "logo": "https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg"
        },
        "team2": {
          "name": "Chennai Super Kings",
          "logo": "https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg"
        },
        "venue": "Wankhede Stadium, Mumbai"
      },
      {
        "id": "match39",
        "date": "21-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Kolkata Knight Riders",
          "logo": "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg"
        },
        "team2": {
          "name": "Gujarat Titans",
          "logo": "https://upload.wikimedia.org/wikipedia/en/0/09/Gujarat_Titans_Logo.svg"
        },
        "venue": "Eden Gardens, Kolkata"
      },
      {
        "id": "match40",
        "date": "22-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Lucknow Super Giants",
          "logo": "https://upload.wikimedia.org/wikipedia/en/a/a9/Lucknow_Super_Giants_IPL_Logo.svg"
        },
        "team2": {
          "name": "Delhi Capitals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg"
        },
        "venue": "BRSABV Ekana Cricket Stadium, Lucknow"
      },
      {
        "id": "match41",
        "date": "23-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Sunrisers Hyderabad",
          "logo": "https://upload.wikimedia.org/wikipedia/en/5/51/Sunrisers_Hyderabad_Logo.svg"
        },
        "team2": {
          "name": "Mumbai Indians",
          "logo": "https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg"
        },
        "venue": "Rajiv Gandhi International Cricket Stadium, Hyderabad"
      },
      {
        "id": "match42",
        "date": "24-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Royal Challengers Bengaluru",
          "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Royal_Challengers_Bengaluru_Logo.svg"
        },
        "team2": {
          "name": "Rajasthan Royals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg"
        },
        "venue": "M. Chinnaswamy Stadium, Bangalore"
      },
      {
        "id": "match43",
        "date": "25-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Chennai Super Kings",
          "logo": "https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg"
        },
        "team2": {
          "name": "Sunrisers Hyderabad",
          "logo": "https://upload.wikimedia.org/wikipedia/en/5/51/Sunrisers_Hyderabad_Logo.svg"
        },
        "venue": "MA Chidambaram Stadium, Chennai"
      },
      {
        "id": "match44",
        "date": "26-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Kolkata Knight Riders",
          "logo": "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg"
        },
        "team2": {
          "name": "Punjab Kings",
          "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg"
        },
        "venue": "Eden Gardens, Kolkata"
      },
      {
        "id": "match45",
        "date": "27-Apr-25",
        "time": "3:30 PM",
        "team1": {
          "name": "Mumbai Indians",
          "logo": "https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg"
        },
        "team2": {
          "name": "Lucknow Super Giants",
          "logo": "https://upload.wikimedia.org/wikipedia/en/a/a9/Lucknow_Super_Giants_IPL_Logo.svg"
        },
        "venue": "Wankhede Stadium, Mumbai"
      },
      {
        "id": "match46",
        "date": "27-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Delhi Capitals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg"
        },
        "team2": {
          "name": "Royal Challengers Bengaluru",
          "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Royal_Challengers_Bengaluru_Logo.svg"
        },
        "venue": "Arun Jaitley Stadium, Delhi"
      },
      {
        "id": "match47",
        "date": "28-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Rajasthan Royals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg"
        },
        "team2": {
          "name": "Gujarat Titans",
          "logo": "https://upload.wikimedia.org/wikipedia/en/0/09/Gujarat_Titans_Logo.svg"
        },
        "venue": "Sawai Mansingh Stadium, Jaipur"
      },
      {
        "id": "match48",
        "date": "29-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Delhi Capitals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg"
        },
        "team2": {
          "name": "Kolkata Knight Riders",
          "logo": "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg"
        },
        "venue": "Arun Jaitley Stadium, Delhi"
      },
      {
        "id": "match49",
        "date": "30-Apr-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Chennai Super Kings",
          "logo": "https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg"
        },
        "team2": {
          "name": "Punjab Kings",
          "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg"
        },
        "venue": "MA Chidambaram Stadium, Chennai"
      },
      {
        "id": "match50",
        "date": "01-May-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Rajasthan Royals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg"
        },
        "team2": {
          "name": "Mumbai Indians",
          "logo": "https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg"
        },
        "venue": "Sawai Mansingh Stadium, Jaipur"
      },
      {
        "id": "match51",
        "date": "02-May-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Gujarat Titans",
          "logo": "https://upload.wikimedia.org/wikipedia/en/0/09/Gujarat_Titans_Logo.svg"
        },
        "team2": {
          "name": "Sunrisers Hyderabad",
          "logo": "https://upload.wikimedia.org/wikipedia/en/5/51/Sunrisers_Hyderabad_Logo.svg"
        },
        "venue": "Narendra Modi Stadium, Ahmedabad"
      },
      {
        "id": "match52",
        "date": "03-May-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Royal Challengers Bengaluru",
          "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Royal_Challengers_Bengaluru_Logo.svg"
        },
        "team2": {
          "name": "Chennai Super Kings",
          "logo": "https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg"
        },
        "venue": "M. Chinnaswamy Stadium, Bangalore"
      },
      {
        "id": "match53",
        "date": "04-May-25",
        "time": "3:30 PM",
        "team1": {
          "name": "Kolkata Knight Riders",
          "logo": "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg"
        },
        "team2": {
          "name": "Rajasthan Royals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg"
        },
        "venue": "Eden Gardens, Kolkata"
      },
      {
        "id": "match54",
        "date": "04-May-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Punjab Kings",
          "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg"
        },
        "team2": {
          "name": "Lucknow Super Giants",
          "logo": "https://upload.wikimedia.org/wikipedia/en/a/a9/Lucknow_Super_Giants_IPL_Logo.svg"
        },
        "venue": "Mullanpur Stadium, New Chandigarh, Punjab"
      },
      {
        "id": "match55",
        "date": "05-May-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Sunrisers Hyderabad",
          "logo": "https://upload.wikimedia.org/wikipedia/en/5/51/Sunrisers_Hyderabad_Logo.svg"
        },
        "team2": {
          "name": "Delhi Capitals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg"
        },
        "venue": "Rajiv Gandhi International Cricket Stadium, Hyderabad"
      },
      {
        "id": "match56",
        "date": "06-May-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Mumbai Indians",
          "logo": "https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg"
        },
        "team2": {
          "name": "Gujarat Titans",
          "logo": "https://upload.wikimedia.org/wikipedia/en/0/09/Gujarat_Titans_Logo.svg"
        },
        "venue": "Wankhede Stadium, Mumbai"
      },
      {
        "id": "match57",
        "date": "07-May-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Kolkata Knight Riders",
          "logo": "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg"
        },
        "team2": {
          "name": "Chennai Super Kings",
          "logo": "https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg"
        },
        "venue": "Eden Gardens, Kolkata"
      },
      {
        "id": "match58",
        "date": "08-May-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Punjab Kings",
          "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg"
        },
        "team2": {
          "name": "Delhi Capitals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg"
        },
        "venue": "Mullanpur Stadium, New Chandigarh, Punjab"
      },
      {
        "id": "match59",
        "date": "09-May-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Lucknow Super Giants",
          "logo": "https://upload.wikimedia.org/wikipedia/en/a/a9/Lucknow_Super_Giants_IPL_Logo.svg"
        },
        "team2": {
          "name": "Royal Challengers Bengaluru",
          "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Royal_Challengers_Bengaluru_Logo.svg"
        },
        "venue": "BRSABV Ekana Cricket Stadium, Lucknow"
      },
      {
        "id": "match60",
        "date": "10-May-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Sunrisers Hyderabad",
          "logo": "https://upload.wikimedia.org/wikipedia/en/5/51/Sunrisers_Hyderabad_Logo.svg"
        },
        "team2": {
          "name": "Kolkata Knight Riders",
          "logo": "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg"
        },
        "venue": "Rajiv Gandhi International Cricket Stadium, Hyderabad"
      },
      {
        "id": "match61",
        "date": "11-May-25",
        "time": "3:30 PM",
        "team1": {
          "name": "Punjab Kings",
          "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg"
        },
        "team2": {
          "name": "Mumbai Indians",
          "logo": "https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg"
        },
        "venue": "Mullanpur Stadium, New Chandigarh, Punjab"
      },
      {
        "id": "match62",
        "date": "11-May-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Delhi Capitals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg"
        },
        "team2": {
          "name": "Gujarat Titans",
          "logo": "https://upload.wikimedia.org/wikipedia/en/0/09/Gujarat_Titans_Logo.svg"
        },
        "venue": "Arun Jaitley Stadium, Delhi"
      },
      {
        "id": "match63",
        "date": "12-May-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Chennai Super Kings",
          "logo": "https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg"
        },
        "team2": {
          "name": "Rajasthan Royals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg"
        },
        "venue": "MA Chidambaram Stadium, Chennai"
      },
      {
        "id": "match64",
        "date": "13-May-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Royal Challengers Bengaluru",
          "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Royal_Challengers_Bengaluru_Logo.svg"
        },
        "team2": {
          "name": "Sunrisers Hyderabad",
          "logo": "https://upload.wikimedia.org/wikipedia/en/5/51/Sunrisers_Hyderabad_Logo.svg"
        },
        "venue": "M. Chinnaswamy Stadium, Bangalore"
      },
      {
        "id": "match65",
        "date": "14-May-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Gujarat Titans",
          "logo": "https://upload.wikimedia.org/wikipedia/en/0/09/Gujarat_Titans_Logo.svg"
        },
        "team2": {
          "name": "Lucknow Super Giants",
          "logo": "https://upload.wikimedia.org/wikipedia/en/a/a9/Lucknow_Super_Giants_IPL_Logo.svg"
        },
        "venue": "Narendra Modi Stadium, Ahmedabad"
      },
      {
        "id": "match66",
        "date": "15-May-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Mumbai Indians",
          "logo": "https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg"
        },
        "team2": {
          "name": "Delhi Capitals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg"
        },
        "venue": "Wankhede Stadium, Mumbai"
      },
      {
        "id": "match67",
        "date": "16-May-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Rajasthan Royals",
          "logo": "https://upload.wikimedia.org/wikipedia/en/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg"
        },
        "team2": {
          "name": "Punjab Kings",
          "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg"
        },
        "venue": "Sawai Mansingh Stadium, Jaipur"
      },
      {
        "id": "match68",
        "date": "17-May-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Royal Challengers Bengaluru",
          "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Royal_Challengers_Bengaluru_Logo.svg"
        },
        "team2": {
          "name": "Kolkata Knight Riders",
          "logo": "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg"
        },
        "venue": "M. Chinnaswamy Stadium, Bangalore"
      },
      {
        "id": "match69",
        "date": "18-May-25",
        "time": "3:30 PM",
        "team1": {
          "name": "Gujarat Titans",
          "logo": "https://upload.wikimedia.org/wikipedia/en/0/09/Gujarat_Titans_Logo.svg"
        },
        "team2": {
          "name": "Chennai Super Kings",
          "logo": "https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg"
        },
        "venue": "Narendra Modi Stadium, Ahmedabad"
      },
      {
        "id": "match70",
        "date": "18-May-25",
        "time": "7:30 PM",
        "team1": {
          "name": "Lucknow Super Giants",
          "logo": "https://upload.wikimedia.org/wikipedia/en/a/a9/Lucknow_Super_Giants_IPL_Logo.svg"
        },
        "team2": {
          "name": "Sunrisers Hyderabad",
          "logo": "https://upload.wikimedia.org/wikipedia/en/5/51/Sunrisers_Hyderabad_Logo.svg"
        },
        "venue": "BRSABV Ekana Cricket Stadium, Lucknow"
      },
    ];
    // Filter out past matches
    // Filter out past matches but include today's matches
const currentDate = new Date();

// Set current date to the beginning of the day (midnight)
const todayStart = new Date(currentDate);
todayStart.setHours(0, 0, 0, 0);

// Convert date strings to Date objects for comparison
const upcomingMatches = matches.filter(match => {
  const matchDate = new Date(match.date + ", 2025");
  return matchDate >= todayStart;
});

// Get visible matches based on showAllMatches state
const visibleMatches = showAllMatches ? upcomingMatches : upcomingMatches.slice(0, 3);

    return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-screen-xl mx-auto">
        {/* Header */}
        <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
          <div className="px-4 py-3">
            <img 
              src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png"
              alt="BookMyShow"
              className="h-8"
            />
          </div>
        </header>
  
        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Image */}
          <div className="w-full">
            <img 
              src="https://www.tribuneindia.com/ipl_assets/banner-mobile.png"
              alt="IPL 2025"
              className="w-full"
            />
          </div>
  
          {/* Event Details */}
          <div className="px-4 py-6">
            <h1 className="text-2xl font-bold text-[#333333] mb-4">
              INDIA - Indian Premier League 2025
            </h1>
            
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="text-[#eb4e62] w-5 h-5" />
              <span className="text-[#666666]">Sat 22 March 2025 Onwards</span>
            </div>
            
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="text-[#eb4e62] w-5 h-5" />
              <span className="text-[#666666]">Multiple Venues</span>
            </div>
  
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              Upcoming Matches
            </h2>
  
            <p className="text-[#666666] mb-4">
              Book tickets for upcoming matches through the match list below
            </p>
  
            {/* Render all matches */}
            {visibleMatches.map((match) => (
                <div key={match.id} className="rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                    {/* Date and Time Header */}
                    <div className="bg-[#eb4e62] text-white px-4 py-3 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span className="font-medium">{match.date}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-medium">{match.time}</span>
                        </div>
                    </div>
  
                    <div className="p-4">
                        {/* Teams Section */}
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-center flex-1">
                                <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-full border-2 border-gray-100 p-2">
                                    <img 
                                        src={match.team1.logo}
                                        alt={match.team1.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h3 className="text-sm font-medium text-[#333333]">{match.team1.name}</h3>
                            </div>
  
                            <div className="text-xl font-bold px-4">VS</div>
  
                            <div className="text-center flex-1">
                                <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-full border-2 border-gray-100 p-2">
                                    <img 
                                        src={match.team2.logo}
                                        alt={match.team2.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h3 className="text-sm font-medium text-[#333333]">{match.team2.name}</h3>
                            </div>
                        </div>
  
                        {/* Venue */}
                        <div className="flex items-center gap-2 mb-4 text-[#666666]">
                            <MapPin className="text-[#eb4e62] w-5 h-5" />
                            <span className="text-sm">{match.venue}</span>
                        </div>
  
                        {/* Status Messages */}
                        <div className="flex justify-between mb-4">
                            <div className="text-[#4CAF50] text-sm flex items-center gap-1">
                                <span>Hurry! Seats Selling Out</span>
                                <span>🚀</span>
                            </div>
                            <div className="text-[#eb4e62] text-sm flex items-center gap-1">
                                <span>Only a Few Left!</span>
                                <span>🔥</span>
                            </div>
                        </div>
  
                        {/* Book Tickets Button */}
                        <Link 
                            to={`/select-seats/${match.id}`}
                            state={{ match }}
                            className="block w-full bg-[#eb4e62] text-white py-3 rounded-md font-medium hover:bg-[#d64558] transition-colors text-center"
                        >
                            Book Tickets
                        </Link>
                    </div>
                </div>
            ))}
  
            {/* Toggle Button */}
            <button 
                onClick={() => setShowAllMatches(!showAllMatches)}
                className="w-full border-2 border-[#eb4e62] text-[#eb4e62] py-3 rounded-lg font-medium mb-8"
            >
                {showAllMatches ? 'View Less Matches' : 'View All Matches'}
            </button>
  
            {/* Sponsors Section */}
            <div className="bg-[#0a1427] text-white px-4 py-8 -mx-4">
              {/* Official Broadcaster */}
              <div className="mb-8">
                <h3 className="text-center text-sm mb-4 text-[#8795a9] uppercase tracking-wider">
                  Official Broadcaster
                </h3>
                <div className="flex justify-center">
                  <img 
                    src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-start-sports-logo.webp"
                    alt="Star Sports"
                    className="h-12"
                  />
                </div>
              </div>
  
              {/* Title Sponsor */}
              <div className="mb-8">
                <h3 className="text-center text-sm mb-4 text-[#8795a9] uppercase tracking-wider">
                  Title Sponsor
                </h3>
                <div className="flex justify-center">
                  <img 
                    src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-tata-logo.webp"
                    alt="TATA"
                    className="h-12"
                  />
                </div>
              </div>
  
              {/* Digital Streaming Partner */}
              <div className="mb-8">
                <h3 className="text-center text-sm mb-4 text-[#8795a9] uppercase tracking-wider">
                  Official Digital Streaming Partner
                </h3>
                <div className="flex justify-center">
                  <img 
                    src="https://documents.iplt20.com//ipl/assets/images/JioHotstar.webp"
                    alt="JioHotstar"
                    className="h-12"
                  />
                </div>
              </div>
  
              {/* Associate Partners */}
              <div className="mb-8">
                <h3 className="text-center text-sm mb-4 text-[#8795a9] uppercase tracking-wider">
                  Associate Partner
                </h3>
                <div className="flex justify-center items-center gap-8">
                  <img 
                    src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-my11circle-logo.webp"
                    alt="My11Circle"
                    className="h-8"
                  />
                  <img 
                    src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-angelone-logo.webp"
                    alt="AngelOne"
                    className="h-8"
                  />
                  <img 
                    src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-rupay-logo.webp"
                    alt="RuPay"
                    className="h-8"
                  />
                </div>
              </div>
  
              {/* Official Partners */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-center text-sm mb-4 text-[#8795a9] uppercase tracking-wider">
                    Official Umpire Partner
                  </h3>
                  <div className="flex justify-center">
                    <img 
                      src="https://documents.iplt20.com//ipl/assets/images/new-partner-wonder-cement.webp"
                      alt="Wonder Cement"
                      className="h-10"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-center text-sm mb-4 text-[#8795a9] uppercase tracking-wider">
                    Official Strategic Timeout Partner
                  </h3>
                  <div className="flex justify-center">
                    <img 
                      src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-ceat-logo.webp"
                      alt="CEAT"
                      className="h-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
  
        {/* Chat Button */}
        <button 
          className="fixed bottom-6 right-6 bg-[#eb4e62] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        >
          <span className="text-2xl">💬</span>
        </button>
        </div>
      );
}
export default Home;
