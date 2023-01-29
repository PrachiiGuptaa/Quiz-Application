import {atom} from 'recoil'

export const CrcicketQuestion = atom({
  key : " Crcicket",
  default : [
    {
      id : 1 ,
      Qusetion :" How many players are in a cricket team?",
      Option : [
        { Option : 10 , isCorrect : false , isSelect : false},
        { Option : 11 , isCorrect : true, isSelect : false},
        { Option : 8 , isCorrect : false ,isSelect : false},
        { Option : 12 , isCorrect : false , isSelect : false}
      ]
    },
    {
      id : 2 ,
      Qusetion :"An over in which no runs are scored called?",
      Option : [
        { Option : "No Ball" , isCorrect : false},
        { Option : "No run Over" , isCorrect : false},
        { Option : "Maiden Over", isCorrect : true},
        { Option : "Super Over", isCorrect : false}
      ]
    },
    {
      id : 3 ,
      Qusetion :"Traditionally, which colour are cricket balls?",
      Option : [
        { Option : "White" , isCorrect : false},
        { Option : "Red" , isCorrect : true},
        { Option : "Green", isCorrect : false},
        { Option : "Blue", isCorrect : false}
      ]
    },
    {
      id : 4 ,
      Qusetion :"In which country did cricket originate?",
      Option : [
        { Option : "South England" , isCorrect : false},
        { Option : "West England" , isCorrect : false},
        { Option : "East England", isCorrect : true},
        { Option : "North England", isCorrect : false}
      ]
    },
    {
      id : 5 ,
      Qusetion :"Who was the first Indian player to have scored a century in each innings of a Test?",
      Option : [
        { Option : "SM Gavaskar" , isCorrect : true},
        { Option : "R Dravid" , isCorrect : false},
        { Option : "VS Hazare", isCorrect : false},
        { Option : "MS Dhoni", isCorrect : false}
      ]
    }
  ]

})