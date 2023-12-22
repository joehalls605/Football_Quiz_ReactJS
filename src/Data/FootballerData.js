const footballersData = [
  // Players from Premier League
  { _id: '1', name: 'Kevin De Bruyne', nationality: 'Belgium', position: 'Midfielder', league: 'Premier League', club: 'Manchester City' },
  { _id: '2', name: 'Antony', nationality: 'Brazil', position: 'Forward', league: 'Premier League', club: 'Manchester United' },
  { _id: '3', name: 'Mohamed Salah', nationality: 'Egypt', position: 'Forward', league: 'Premier League', club: 'Liverpool' },
  { _id: '4', name: 'Bruno Fernandes', nationality: 'Portugal', position: 'Midfielder', league: 'Premier League', club: 'Manchester United' },
  { _id: '5', name: 'Jack Grealish', nationality: 'England', position: 'Midfielder', league: 'Premier League', club: 'Manchester City' },
  { _id: '6', name: 'Jota', nationality: 'Portugal', position: 'Forward', league: 'Premier League', club: 'Liverpool' },
  { _id: '7', name: 'Nunez', nationality: 'Uruguay', position: 'Forward', league: 'Premier League', club: 'Liverpool' },
  { _id: '8', name: 'Bissouma', nationality: 'Mali', position: 'Midfield', league: 'Premier League', club: 'Tottenham' },
  { _id: '9', name: 'Jesus', nationality: 'Brazil', position: 'Forward', league: 'Premier League', club: 'Arsenal'},
  { _id: '10', name: 'Haaland', nationality: 'Norway', position: 'Forward', league: 'Premier League', club: 'Manchester City'},
  { _id: '11', name: 'Havertz', nationality: 'Germany', position: 'Forward', league: 'Premier League', club: 'Arsenal'},
  { _id: '12', name: 'Hojbjerg', nationality: 'Denmark', position: 'Midfielder', league: 'Premier League', club: 'Tottenham'},
  { _id: '13', name: 'Isak', nationality: 'Sweden', position: 'Forward', league: 'Premier League', club: 'Newcastle'},
  { _id: '14', name: 'Tonali', nationality: 'Italy', position: 'Midfielder', league: 'Premier League', club: 'Newcastle'},
  { _id: '15', name: 'Partey', nationality: 'Ghana', position: 'Midfielder', league: 'Premier League', club: 'Arsenal'},
  { _id: '16', name: 'Rashford', nationality: 'England', position: 'Forward', league: 'Premier League', club: 'Manchester United'},
  { _id: '17', name: 'Romero', nationality: 'Argentina', position: 'Defender', league: 'Premier League', club: 'Tottenham'},
  { _id: '18', name: 'Saka', nationality: 'England', position: 'Forward', league: 'Premier League', club: 'Arsenal'},
  { _id: '19', name: 'Bernardo', nationality: 'Portugal', position: 'Forward', league: 'Premier League', club: 'Manchester City'},
  { _id: '20', name: 'Mount', nationality: 'England', position: 'Midfielder', league: 'Premier League', club: 'Manchester United'},
  { _id: '21', name: 'Sterling', nationality: 'England', position: 'Forward', league: 'Premier League', club: 'Chelsea'},
  { _id: '22', name: 'Kulusevski', nationality: 'Sweden', position: 'Forward', league: 'Premier League', club: 'Tottenham'},
  { _id: '23', name: 'Rodri', nationality: 'Spain', position: 'Midfielder', league: 'Premier League', club: 'Manchester City'},
  { _id: '24', name: 'Guimarães', nationality: 'Brazil', position: 'Midfielder', league: 'Premier League', club: 'Newcastle'},
  { _id: '25', name: 'Rice', nationality: 'England', position: 'Midfielder', league: 'Premier League', club: 'Arsenal'},
  { _id: '26', name: 'Van Dijk', nationality: 'Netherlands', position: 'Defender', league: 'Premier League', club: 'Liverpool'},
  { _id: '27', name: 'Mac Allister', nationality: 'Argentina', position: 'Midfielder', league: 'Premier League', club: 'Liverpool'},
  { _id: '28', name: 'Eriksen', nationality: 'Denmark', position: 'Midfielder', league: 'Premier League', club: 'Manchester United'},
  
  { _id: '29', name: 'Baggott', nationality: 'England', club: 'Ipswich',  position: 'Defender', league: 'Championship' },
  { _id: '30', name: 'Chaplin', nationality: 'England', club: 'Ipswich',  position: 'Midfielder', league: 'Championship' },
  { _id: '31', name: 'Morsy', nationality: 'England', club: 'Ipswich',  position: 'Midfielder', league: 'Championship' },
  { _id: '32', name: 'Broadhead', nationality: 'England', club: 'Ipswich',  position: 'Forward', league: 'Championship' },
  { _id: '33', name: 'Burns', nationality: 'England', club: 'Ipswich',  position: 'Forward', league: 'Championship' },
  { _id: '34', name: 'Clarke', nationality: 'England', club: 'Ipswich',  position: 'Defender', league: 'Championship' },
  { _id: '35', name: 'Davis', nationality: 'England', club: 'Ipswich',  position: 'Defender', league: 'Championship' },
  { _id: '36', name: 'Walton', nationality: 'England', club: 'Ipswich',  position: 'Goalkeeper', league: 'Championship' },
  { _id: '37', name: 'Aluko', nationality: 'England', club: 'Ipswich',  position: 'Forward', league: 'Championship' },
  { _id: '38', name: 'Harness', nationality: 'England', club: 'Ipswich',  position: 'Midfielder', league: 'Championship' },
  { _id: '39', name: 'Edwards', nationality: 'England', club: 'Ipswich',  position: 'Defender', league: 'Championship' },
  { _id: '40', name: 'Strujik', nationality: 'Netherlands', club: 'Leeds',  position: 'Defender', league: 'Championship' },
  { _id: '41', name: 'Meslier', nationality: 'France', club: 'Leeds',  position: 'Goalkeeper', league: 'Championship' },
  { _id: '42', name: 'Armstrong', nationality: 'England', club: 'Southampton',  position: 'Striker', league: 'Championship' },
  { _id: '43', name: 'Gnoto', nationality: 'Italy', club: 'Leeds',  position: 'Forward', league: 'Championship' },
  { _id: '44', name: 'Justin', nationality: 'England', club: 'Leicester',  position: 'Forward', league: 'Championship' },
  { _id: '45', name: 'Adams', nationality: 'England', club: 'Southampton',  position: 'Forward', league: 'Championship' },
  { _id: '46', name: 'Adams', nationality: 'England', club: 'Southampton',  position: 'Forward', league: 'Championship' },
  { _id: '47', name: 'Patterson', nationality: 'England', club: 'Sunderland',  position: 'Goalkeeper', league: 'Championship' },
  { _id: '48', name: 'Wharton', nationality: 'England', club: 'Blackburn',  position: 'Midfielder', league: 'Championship' },
  { _id: '49', name: 'Grimes', nationality: 'England', club: 'Swansea',  position: 'Midfielder', league: 'Championship' },
  { _id: '50', name: 'Nunez', nationality: 'Chile', club: 'Norwich',  position: 'Midfielder', league: 'Championship' },
  { _id: '51', name: 'Dolan', nationality: 'England', club: 'Blackburn',  position: 'Defender', league: 'Championship' },
  { _id: '52', name: 'McNair', nationality: 'Northern Ireland', club: 'Middlesborough',  position: 'Defender', league: 'Championship' },
  { _id: '53', name: 'Greaves', nationality: 'England', club: 'Hull',  position: 'Defender', league: 'Championship' },
  { _id: '54', name: 'Doyle', nationality: 'England', club: 'Leicester',  position: 'Defender', league: 'Championship' },
  { _id: '55', name: 'Stewart', nationality: 'Scotland', club: 'Leicester',  position: 'Forward', league: 'Championship' },
  { _id: '56', name: 'Mitchell', nationality: 'England', club: 'Millwall',  position: 'Midfielder', league: 'Championship' },
  { _id: '57', name: 'Burger', nationality: 'Netherlands', club: 'Stoke',  position: 'Midfielder', league: 'Championship' },
  { _id: '57', name: 'Rodon', nationality: 'Wales', club: 'Leeds',  position: 'Defender', league: 'Championship' },
  { _id: '57', name: 'Ward', nationality: 'Wales', club: 'Leicester',  position: 'Goalkeeper', league: 'Championship' },
  { _id: '57', name: 'Rushworth', nationality: 'England', club: 'Swansea',  position: 'Goalkeeper', league: 'Championship' },



















  
];

export default footballersData;
