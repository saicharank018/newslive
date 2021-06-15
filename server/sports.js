const express=require("express")
const app=express()
const mongoose=require("mongoose")
const Parser=require("rss-parser")
const Sports=mongoose.model("SPORTS")

setInterval(()=>{
  (async () => {
    console.log("sai")
    mongoose.connection.db.dropCollection('sports', function(err, result) {
      console.log(err);
    });

    let parser3 = new Parser({
        customFields: {
          item: ['enclosure',
          ['content:encoded','description'],
        ['media:content','img'],]
        }
      });
      try{
      let feed3 = await parser3.parseURL('https://wwos.nine.com.au/rss');
      feed3.items.forEach((item)=> {
        
        const sport=new Sports({
          title:item.title,
          link:item.link,     
          img:item.img.$.url,
          description:item.contentSnippet,
          pubdate:item.pubDate
        })
        sport.save()
        .catch((err)=>{
          console.log(err);
        })
        // datas.push({
        //   "title":item.title,
        //   "link":item.link,     
        //   "img":item.img.$.url,
        //   "description":item.description,
        //   "pubdate":item.pubDate
        //   })
      });
    }
  catch(err){
    console.log(err);
  }
    
    let parser4 = new Parser(
        {
        customFields: {
          item: [['media:content','img']]
        }
      }
      );
      try{
      let feed4 = await parser4.parseURL('https://www.hindustantimes.com/feeds/rss/sports/rssfeed.xml');
      feed4.items.forEach((item)=> {
        const sport=new Sports({
          title:item.title,
          link:item.link,     
          img:item.img.$.url,
          description:item.content,
          pubdate:item.pubDate
        })
        sport.save()
        .catch((err)=>{
          console.log(err);
        })
        // datas.push({
        //   "title":item.title,
        //   "link":item.link,     
        //   "img":item.img.$.url,
        //   "description":item.content,"pubdate":item.pubDate
        //   })
      });
    }
    catch(err){
      console.log(err);
    }
      let parser = new Parser({
        customFields: {
          item: ['enclosure']
        }
      });
    try{
    let feed = await parser.parseURL('https://www.sportskeeda.com/feed');
    feed.items.forEach((item)=> {
      const sport=new Sports({
        title:item.title,
        link:item.link,     
        img:item.enclosure.url,
        description:item.description || item.title,
        pubdate:item.pubDate
      })
      sport.save()
      .catch((err)=>{
        console.log(err);
      })
      // datas.push({
      //   "title":item.title,
      //   "link":item.link,     
      //   "img":item.enclosure.url,
      //   "description":item.title,"pubdate":item.pubDate
      //   })
    });
  }
  catch(err){
  console.log(err)
  }
  try{
    let feed2 = await parser.parseURL('http://www.sportingnews.com/us/rss');
    feed2.items.forEach((item)=> {
      const sport=new Sports({
        title:item.title,
        link:item.link,     
        img:item.enclosure.url,
        description:item.contentSnippet,
        pubdate:item.pubDate
      })
      sport.save()
      .catch((err)=>{
        console.log(err);
      })
      // datas.push({
      //   "title":item.title,
      //   "link":item.link,     
      //   "img":item.enclosure.url,
      //   "description":item.content,"pubdate":item.pubDate
      //   })
    });
  }
  catch(err){
    console.log(err)
  }
  })();
  
},100000)
 
