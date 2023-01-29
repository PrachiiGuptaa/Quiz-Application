import {atom} from 'recoil'

export const ITQuestion = atom({
  key : "IT",
  default : [
    {
      id : 1 ,
      Qusetion :"What is the full form of IT?",
      Option : [
        { Option : "Important Technique" , isCorrect : false},
        { Option : "Information Technology" , isCorrect : true},
        { Option : "Important Technology" , isCorrect : false},
        { Option : "Information Technique" , isCorrect : false}
      ]
    },
    {
      id : 2 ,
      Qusetion :" First Web Browser invented in 1990?",
      Option : [
        { Option : "Internet Explorer" , isCorrect : false},
        { Option : "Mosaic" , isCorrect : false},
        { Option : "World Wide Web", isCorrect : true},
        { Option : "Nexus", isCorrect : false}
      ]
    },
    {
      id : 3 ,
      Qusetion :"Which technology is used to record Cryptocurrency Transactions?",
      Option : [
        { Option : "Mining Technology" , isCorrect : false},
        { Option : "Blockchain Technology" , isCorrect : true},
        { Option : "Digital Wallet Technology", isCorrect : false},
        { Option : "Token Technology", isCorrect : false}
      ]
    },
    {
      id : 4 ,
      Qusetion :"Advantage of Information Technology is?",
      Option : [
        { Option : "Increased Data Security" , isCorrect : false},
        { Option : "Improves Productivity" , isCorrect : false},
        { Option : "Both", isCorrect : true},
        { Option : "None", isCorrect : false}
      ]
    },
    {
      id : 5 ,
      Qusetion :"Which is the First Computer virus in India?",
      Option : [
        { Option : "Creeper Program" , isCorrect : true},
        { Option : "Rabbit Virus" , isCorrect : false},
        { Option : "Elk Cloner", isCorrect : false},
        { Option : "SCA Virus", isCorrect : false}
      ]
    }
  ]

})