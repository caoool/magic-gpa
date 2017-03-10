



module.exports = [
  { "file": "./studentlife-data/grades.csv",
    "max": 4 },
  { "file": "./studentlife-data/LonelinessScale.csv",
    "max": 4,
    "choice": [ "Never", "Rarely", "Sometimes", "Often" ],
    "ignore": [ "type" ] },
  { "file": "./studentlife-data/PerceivedStressScale.csv",
    "max": 5,
    "choice": ["Never", "Almost never", "Sometime",
                 "Fairly often", "Very often"],
    "ignore": [ "type" ] },
  { "file": "./studentlife-data/piazza.csv",
    "max": 70,
    "ignore": [ "views", "contributions", "questions", "notes", "answers" ] }
];



