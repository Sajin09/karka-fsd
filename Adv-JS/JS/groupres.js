let group_resume = [
    
    resume1 = {
        name :'Sajin',
        date_of_birth : '09/04/1999',
        email : "sajin0904@gmail.com",
        phone_number : 9585123409,
        technical_skills :['HTML','CSS','javaScript','Python'],
    
        educational_details : [
            Tenth = {
                Institute : 'S.M.R.V Higher Secoundary school',
                Year_of_passing : 2014,
                Presentage : '88%',
            },
            Twelth = {
                Institute : 'S.M.R.V Higher Secoundary school',
                Year_of_passing : 2016,
                Presentage : '73%',
            },
            College = {
                Institute : 'St.Xaviers Catholic College of Engineering',
                Year_of_passing : 2020,
                Presentage : '71%',
            },
        ],
    
        hobbies : ['Dancing','Reading books'],
        Expertise : ['Team Worker'],
        place : 'Nagercoil'
    
    },
    
    resume2 = {
        name :'Raja',
        date_of_birth : '22/11/1999',
        email : "killerboy@gmail.com",
        phone_number : 7878123409,
        technical_skills :['HTML','CSS','Python'],
    
        educational_details : [
            Tenth = {
                Institute : 'S.M.R.V Higher Secoundary school',
                Year_of_passing : 2015,
                Presentage : '75%',
            },
            Twelth = {
                Institute : 'S.M.R.V Higher Secoundary school',
                Year_of_passing : 2017,
                Presentage : '60%',
            },
            College = {
                Institute : 'Ponjesley College of Engineering',
                Year_of_passing : 2020,
                Presentage : '70%',
            },
        ],
    
        hobbies : ['Reading books','singing'],
        Expertise : ['Team Worker','Hatrd Worker'],
        place : 'vadasery'

    
    },
    resume3 = {
        name :'Sajun',
        date_of_birth : '13/03/1999',
        email : "sajunmohmmed@gmail.com",
        phone_number : 9565433409,
        technical_skills :['CSS','Python'],
    
        educational_details : [
            Tenth = {
                Institute : 'CORMAL Higher Secoundary school',
                Year_of_passing : 2014,
                Presentage : '80%',
            },
            Twelth = {
                Institute : 'CORMAL Higher Secoundary school',
                Year_of_passing : 2016,
                Presentage : '71%',
            },
            College = {
                Institute : 'St.Xaviers Catholic College of Engineering',
                Year_of_passing : 2020,
                Presentage : '75%',
            },
        ],
    
        hobbies : ['Dancing','Reading books','Playing games'],
        Expertise : ['Team Worker','Motivator'],
        place : 'Nagercoil'

    
    },
    
    resume4 = {
        name :'Steffi',
        date_of_birth : '05/11/1998',
        email : "steffi123@gmail.com",
        phone_number : 8995123409,
        technical_skills :['HTML','Python'],
    
        educational_details : [
            Tenth = {
                Institute : 'S.M.R.V Higher Secoundary school',
                Year_of_passing : 2014,
                Presentage : '98%',
            },
            Twelth = {
                Institute : 'S.M.R.V Higher Secoundary school',
                Year_of_passing : 2016,
                Presentage : '88%',
            },
            College = {
                Institute : 'St.Xaviers Catholic College of Engineering',
                Year_of_passing : 2021,
                Presentage : '79%',
            },
        ],
    
        hobbies : ['Dancing','Reading books','coading'],
        Expertise : ['Team Worker','motivator','analyst'],
        place : 'valliyoor'

    
    }
    
]


        // for(let k=0;k<group_resume[i].educational_details)
        // if(group_resume[i].technical_skills[j] == 'HTML'){
        //     console.log(group_resume[i].name)
            
        // }
        
    
//     for(let k=0; k<group_resume[i].educational_details[j].length; k++){
//             console.log(group_resume[i].educational_details.Institute[k])
// // console.log(group_resume[i].educational_details.College.Year_of_passing)

//     // console.log(group_resume[i])
//     // console.log(group_resume[i].name)
//     // if(group_resume.educational_details){

    
//     // console.log(group_resume[i].name)
//     // }
//     }







//for(let i=0 ; i<group_resume.length ; i++){
//     for(let j=0 ; j<group_resume[i].technical_skills.length ; j++){
//         if(group_resume[i].technical_skills[j] == 'HTML'){
//             console.log(group_resume[i].name)
//             for(let k=0;k<group_resume[i].educational_details.length;k++){
//                 console.log(group_resume[i].educational_details[2].Institute)
//                 break
//             }
//         }
      
//     } 
// }


for(let i=0 ; i<group_resume.length ; i++){
    for(let j=0 ; j<group_resume[i].technical_skills.length ; j++){
        if(group_resume[i].technical_skills[j] == 'HTML'){
            if(group_resume[i].place == 'Nagercoil'){
                if(group_resume[i].educational_details[2].Presentage >= '70%')
                    console.log(group_resume[i].name)
                }
            }
        }
    }