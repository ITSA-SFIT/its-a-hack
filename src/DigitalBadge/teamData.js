const data = [
  {
    team_number: 0,
    teamName: "Select your team",
    members: ["Member 1", "Member 2", "Member 3", "Member 4"],
  },
  {
    team_number: 1,
    teamName: "4_Abortion",
    members: [
      "Saumya Desai",
      "Suyash Konduskar",
      "Ravirajsingh Sodha",
      "Vivek Nair",
    ],
  },
  {
    team_number: 69,
    teamName: "Tripod",
    members: ["Ajaykumar Nadar", "Kevin Nadar", "Vishal Mahajan"],
  },
  {
    team_number: 2,
    teamName: "A²RC",
    members: [
      "Ralph Carvalho",
      "Anish Kalbhor",
      "Alister Fernandes",
      "Charis Fernandes",
    ],
  },
  {
    team_number: 3,
    teamName: "Access Denied",
    members: ["Mihika Kaprani", "Ishita Hardasmalani", "Varun Jajoo"],
  },
  {
    team_number: 4,
    teamName: "avocado",
    members: [
      "Kennice Gonsalves",
      "Swain Dbritto",
      "Albina Chettiar",
      "Keith Fernandes",
    ],
  },
  {
    team_number: 5,
    teamName: "BigSteppers",
    members: [
      "Shourya Bhosale",
      "Siddhant Bokil",
      "Sanket Bhosle",
      "Gaurav Bomble",
    ],
  },
  {
    team_number: 6,
    teamName: "Bit-Busters",
    members: ["Harshit Shah", "Melwin Das", "Larson Sequeira"],
  },
  {
    team_number: 7,
    teamName: "BitBuilders",
    members: [
      "Jason Dsouza",
      "Craig Michael Dsouza",
      "Elvis D'souza",
      "Shriya Saxena",
    ],
  },
  {
    team_number: 8,
    teamName: "BitWizards",
    members: [
      "Omkar Patil",
      "Devarsh Chandiwade",
      "Rohit Mangale",
      "Pratham Matkar",
    ],
  },
  {
    team_number: 9,
    teamName: "Bug_biter",
    members: ["Palak Kumari"],
  },
  {
    team_number: 10,
    teamName: "Byte_Benders",
    members: ["Priti Singh", "Sudheesh Shetty", "Yash Ganar", "Lee Henriques"],
  },
  {
    team_number: 11,
    teamName: "Code Crafters",
    members: [
      "Joshua Joseph",
      "Varun Pednekar",
      "Shravani Lad",
      "Swayam Kandarkar",
    ],
  },
  {
    team_number: 12,
    teamName: "Code hunters",
    members: ["Tanisha Gurav", "Shon Fernandes", "Joshua Dcosta"],
  },
  {
    team_number: 13,
    teamName: "Code-Bytes",
    members: ["Suyash Labde", "Vaibhav Sutar", "Jomin Johnson"],
  },
  {
    team_number: 14,
    teamName: "CodeCrafters",
    members: [
      "Kathleen Monis",
      "Leon Mendonca",
      "Siona Dalmet",
      "Kiara Mathias",
    ],
  },
  {
    team_number: 15,
    teamName: "CodeQuest",
    members: [
      "Dhruvi Purohit",
      "Abhishekh Yadav",
      "Saniya Parmar",
      "Taksh Gandhi",
    ],
  },
  {
    team_number: 16,
    teamName: "Coders Crew",
    members: [
      "Nisha Sherigar",
      "GIRIDHAR J",
      "Farheen Sheikh",
      "Shreya Shirsat",
    ],
  },
  {
    team_number: 17,
    teamName: "Codexx",
    members: [
      "Zoya Fathima",
      "Rida Noorain",
      "MOHAMMADI SHIFA",
      "Mohammed Musharraf",
    ],
  },
  {
    team_number: 18,
    teamName: "Dean Fanboys",
    members: ["Abigail Lopes", "Shaun Dmello", "Sean Andrades", "Eugene Dabre"],
  },
  {
    team_number: 19,
    teamName: "Dev_pioneer",
    members: ["Aries Dmello"],
  },
  {
    team_number: 20,
    teamName: "DigitalDonuts",
    members: [
      "Krishang Bose",
      "Shrey Kothari",
      "Muskaan Aggarwal",
      "Stuti Tiwari",
    ],
  },
  {
    team_number: 21,
    teamName: "Error 404",
    members: ["Stash Lopes", "Anushka Kotal", "Trisha Deshmukh", "Annie Dande"],
  },
  {
    team_number: 22,
    teamName: "Error_404",
    members: [
      "Viraj Patil",
      "Aarti Parulkar",
      "Sakshi Patil",
      "Valeska Rosario",
    ],
  },
  {
    team_number: 23,
    teamName: "EvolveTech",
    members: [
      "SAYANTIKA ROY",
      "Anna George",
      "Marcia Rodrigues",
      "Esha Tuscano",
    ],
  },
  {
    team_number: 24,
    teamName: "Focus AI",
    members: ["Avinash Kumar", "Hrishikesh Yadav"],
  },
  {
    team_number: 25,
    teamName: "Function Charge",
    members: ["Yash Kotian", "Aaditya Kamath", "Riya Indap", "Tanmay Gupta"],
  },
  {
    team_number: 26,
    teamName: "HackHeroes",
    members: [
      "Aditya Yadav",
      "Parthesh Purohit",
      "Arjun Naik",
      "Viraj Walavalkar",
    ],
  },
  {
    team_number: 27,
    teamName: "Hackstreet",
    members: [
      "Alton Fernandes",
      "Ansley Rebello",
      "Bronil Koli",
      "Glaxson Rebello",
    ],
  },
  {
    team_number: 28,
    teamName: "HASTAR",
    members: [
      "Rahul Dewangan",
      "DEEPAK SHRIVAS",
      "Varun Shukla",
      "Nikhil Sahu",
    ],
  },
  {
    team_number: 29,
    teamName: "Hera Pheri",
    members: ["Shaan Agarwal"],
  },
  {
    team_number: 30,
    teamName: "Individual",
    members: ["Zaineb Patel"],
  },
  {
    team_number: 31,
    teamName: "INNOV8RS",
    members: ["Riya Solanki", "Pranav Salian", "Shreeya Vora", "Soham Patil"],
  },
  {
    team_number: 32,
    teamName: "Kuronami",
    members: ["Ved Raut", "Kartikeya Mudliyar"],
  },
  {
    team_number: 33,
    teamName: "kyu nahi horahi coding",
    members: [
      "Shreya Rathod",
      "Nirmitee Sarode",
      "Riva Rodrigues",
      "Tabish Shaikh",
    ],
  },
  {
    team_number: 34,
    teamName: "Little Umbrella",
    members: ["Mayur Kalwar", "Sudhir Maurya", "Saurabh Mane", "Arpit Pandey"],
  },
  {
    team_number: 35,
    teamName: "Metaverse Mavens",
    members: ["Suman Bhandari", "Akshat Agrawal"],
  },
  {
    team_number: 36,
    teamName: "NOps",
    members: [
      "Prathmesh Raut",
      "Paritosh Shukla",
      "Shobit Gupta",
      "Atharva Wakhare",
    ],
  },
  {
    team_number: 37,
    teamName: "Nova",
    members: [
      "Shravani Joshi",
      "Sanika Mane",
      "Bliss Gonsalves",
      "Bhoomi Koli",
    ],
  },
  {
    team_number: 38,
    teamName: "Prometheus",
    members: ["Manas Singh", "Ayush Mati", "Prayas Yadav", "Prathmesh Shukla"],
  },
  {
    team_number: 39,
    teamName: "Ravens",
    members: ["Atul Singh"],
  },
  {
    team_number: 40,
    teamName: "RSS F",
    members: [
      "Felista Pereira",
      "Rishabh Tripathi",
      "Smeet Patil",
      "Sumeet Prajapati",
    ],
  },
  {
    team_number: 41,
    teamName: "S.D.A.C.",
    members: [
      "Renuka Munde",
      "Brijraaj Yadav",
      "Karankumar Mailaram",
      "Vinay Gurav",
    ],
  },
  {
    team_number: 42,
    teamName: "SendNodes",
    members: [
      "Sherwin Furtado",
      "Praneel Rane",
      "Noel Kachapilly",
      "Tejas Patel",
    ],
  },
  {
    team_number: 43,
    teamName: "SoloPer",
    members: ["Somenath Choudhury"],
  },
  {
    team_number: 44,
    teamName: "space orbiters",
    members: [
      "Sachidanand Pathak",
      "Omm Rout",
      "Saswat Kumar Das",
      "ansh johri",
    ],
  },
  {
    team_number: 45,
    teamName: "Status200",
    members: ["Shravan More", "Jatin Gorana", "Manas Patil", "Vedant Modhave"],
  },
  {
    team_number: 46,
    teamName: "SyncUp",
    members: ["Nikson Nadar", "Rushabh Patel", "Omkar Parab", "Yash Patel"],
  },
  {
    team_number: 47,
    teamName: "Team git clone",
    members: ["Adarsh Mishra", "anushka joshi"],
  },
  {
    team_number: 48,
    teamName: "TeamMirage",
    members: [
      "Kunaal Wakchaure",
      "Shravan Acharya",
      "Dhaval Suthar",
      "Om Kate",
    ],
  },
  {
    team_number: 49,
    teamName: "Tech coders",
    members: ["Siddhant Bhuyar", "Ninad Jadhav", "Yash Dave", "Rohit Prasad"],
  },
  {
    team_number: 50,
    teamName: "Tech Titans",
    members: ["Rion Tuscano", "Junaid Shaikh", "Swarnim Bane", "Harsh Tandel"],
  },
  {
    team_number: 51,
    teamName: "techne",
    members: ["Abhishek Tripathi", "Subrat Sahil Gupta", "Shailendra Singh"],
  },
  {
    team_number: 52,
    teamName: "Techno Hack",
    members: ["Sanika Ambrale", "Sherly Shindal", "Khushi Dhonde"],
  },
  {
    team_number: 53,
    teamName: "TechnoSapiens",
    members: ["Shreyas Munde", "Jheel Shah", "Om Kamerkar", "Jennessa Dsouza"],
  },
  {
    team_number: 54,
    teamName: "The Code Warriors",
    members: ["SARAN N", "Disha Daniel", "Harsha Kumar A"],
  },
  {
    team_number: 55,
    teamName: "The Reducers",
    members: ["Shailesh Jadav", "Kuldeep Rathod", "Kuldeep Chudasama"],
  },
  {
    team_number: 56,
    teamName: "XYZ",
    members: ["Sreekar BKrishna", "MUHAMMED YASEEN", "Sreerag P"],
  },
];

export default data;
