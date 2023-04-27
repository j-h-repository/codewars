/*
challenge url : https://www.codewars.com/kata/5fee4559135609002c1a1841

The URL shortener is given a long URL, which is then converted into a shorter one. 
Both URLs are stored in a database. It is important that each long URL is assigned a unique short URL.

If a user then calls up the short URL, the database is checked to see which l
ong URL belongs to this short URL and you are redirected to the original/long URL.

Important Note: Some URLs such as www.google.com are used very often. 
It can happen that two users want to shorten the same URL, so you have to 
check if this URL has been shortened before to save memory in your database.



TASK: Write a class with two methods, shorten and redirect
*/

const fs = require("fs")

const dataBase = JSON.parse(fs.readFileSync('./database.txt', "utf8"))


//will hold the following key-value pairs 
//{
// "long_url":"string",
// "short_url" "string",
// "pattern" : [a,b,c,....]
//}


class URL  {
    constructor(url){
        this.url = url
    }
    

    redirect(){
        //takes a short url and find it's corresponding long url
        let foundAtIndex = ""
        const found = Object.values(dataBase).find((innerKey, index) =>{
            if(innerKey["short_url"] == this.url){
               foundAtIndex = index
               return innerKey
            }
            })
        if(found){
                //return the already shortened URL
            console.log(this.url, " redirects to: ",dataBase[foundAtIndex].long_url)
        } else{
            console.log("This shortened url does not exist in the database")
        }
        //what to do if the shortened URL does not exist??

    }

    shorten(){

        const baseUrl = "short.ly/" //max of 13 alphabet characters can be used after

        let foundAtIndex = ""
        const found = Object.values(dataBase).find((innerKey, index) =>{
             if(innerKey["long_url"] == this.url){
                foundAtIndex = index
                return innerKey
             }
             })
        
        if(found){
           //return the already shortened URL
            console.log(this.url, " already shortened to: ",dataBase[foundAtIndex].short_url, "; add a new URL")
        } else{
            //create the new url, add it to the DB as an object, then return the new URL
            const lastItemIndex = Object.keys(dataBase).length-1
            const latestPattern = dataBase[lastItemIndex].pattern
            const latestPatternLength = latestPattern.length
            let combo = [...latestPattern]
            
           
            if(latestPatternLength<=1){
                if(combo[0]<52){
                    combo[0]+=1
                } else{
                    for(let i = 0; i< latestPatternLength; i++){
                        combo[i]=1
                    }
                    combo.push(1)
                }
            } else{
               
                for(let i = latestPatternLength-1; i>-1; i--){
                    console.log("hey")
                    if(combo[i]<52){
                        combo[i] += 1
                        break;
                    } else if(combo[i] == 52){
                        if(i==0){
                            for(let j = 0; i< latestPatternLength; i++){
                                combo[j]=1
                            }
                            combo.push(1)
                            break;
                        } else{
                            combo[i]=1
                        }
                        
                    }
                }
            }
            

            //
            let url = []
            for(let i=0; i<combo.length; i++){
                if(combo[i]<=26){
                    let characterValue = 64 + combo[i]
                    url.push(String.fromCharCode(characterValue))
                }else{
                    let characterValue =  96+(combo[i]-26)
                    url.push(String.fromCharCode(characterValue))
                }
            }

            const newShortUrl = baseUrl + url.join("")
            console.log(newShortUrl)
            dataBase[lastItemIndex+1] = {
                "long_url":this.url,
                "short_url":newShortUrl,
                "pattern":combo
            }

            fs.writeFile("./database.txt", JSON.stringify(dataBase), function(err){
                if(err){
                    return console.log(err)
                }
            })
        }
    }
}





const url3 = new URL("http://www.schools.com/jsref/jref_fromcharcod.asp")
url3.shorten()
///use node's file system to house the urls in a txt file, to accurately store and read into a small scale database