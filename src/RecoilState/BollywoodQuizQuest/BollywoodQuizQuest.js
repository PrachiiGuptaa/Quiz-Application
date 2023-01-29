import {atom} from 'recoil'

export const BollywoodQuestion = atom({
  key : "Bollywood",
  default : [
    {
      id : 1 ,
      Qusetion :"Which was India's First Sound movie?",
      Option : [
        { Option : "Alam Ara" , isCorrect : true},
        { Option : "Sholey" , isCorrect : false},
        { Option : "Raja Harishchandra" , isCorrect : false},
        { Option : "Dosti" , isCorrect : false}
      ]
    },
    {
      id : 2 ,
      Qusetion :"Who was the first Indian to win an Oscar?",
      Option : [
        { Option : "Rajkummar Rao" , isCorrect : false},
        { Option : "Manoj Bajpayee" , isCorrect : false},
        { Option : "Bhanu Athaiya", isCorrect : true},
        { Option : "Nawazuddin Siddiqui", isCorrect : false}
      ]
    },
    {
      id : 3 ,
      Qusetion :"Which Following Actress debuted opposite Shahrukh Khan in movie “Om Shanti Om”?",
      Option : [
        { Option : "Sonam Kapoor" , isCorrect : false},
        { Option : "Deepika Padukone" , isCorrect : true},
        { Option : "Priyanka Chopra", isCorrect : false},
        { Option : "Anushka Sharma", isCorrect : false}
      ]
    },
    {
      id : 4 ,
      Qusetion :"What is the Role of SRK in Chak De! India",
      Option : [
        { Option : "Refree" , isCorrect : false},
        { Option : "Player" , isCorrect : false},
        { Option : "Coach", isCorrect : true},
        { Option : "Captain", isCorrect : false}
      ]
    },
    {
      id : 5 ,
      Qusetion :"Rahul & Anjali is famous friendship jodi belong to which movie?",
      Option : [
        { Option : "Kuch Kuch Hota Hai" , isCorrect : true},
        { Option : "Hum Aapke Hai Kaun" , isCorrect : false},
        { Option : "Baazigar", isCorrect : false},
        { Option : "Deewana", isCorrect : false}
      ]
    }
  ]

})