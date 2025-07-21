const quotes = [
  {
    character: "Michael Scott",
    quote: "I. Declare. Bankruptcy!",
    pic: "<img src='./img/Michael_Scott.jpg'>"
  },
  {
    character: "Michael Scott",
    quote:
      "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
    pic: "<img src='./img/Michael_Scott.jpg'>"
  },
  {
    character: "Andy Bernard",
    quote: "Sorry I annoyed you with my friendship.",
    pic: "<img src='./img/Andy_Bernard.jpg'>"
  },
  {
    character: "Pam Beesley",
    quote: "I feel God in this Chilis tonight.",
    pic: "<img src='./img/Pam_Beesley.jpg'>"
  },
  {
    character: "Michael Scott",
    quote:
      "I'm an early bird and I'm a night owl. So I am wise and I have worms.",
    pic: "<img src='./img/Michael_Scott.jpg'>"
  },
  {
    character: "Pam Beesley",
    quote:
      "There's a lot of beauty in ordinary things. Isn't that kind of the point?",
    pic: "<img src='./img/Pam_Beesley.jpg'>"
  },
  {
    character: "Angela Martin",
    quote: "I find the mystery genre disgusting. I hate being titillated.",
    pic: "<img src='./img/Angela_Martin.jpg'>"
  },
  {
    character: "Angela Martin",
    quote: "I think green is kind of whorish.",
    pic: "<img src='./img/Angela_Martin.jpg'>"
  },
  {
    character: "Angela Martin",
    quote:
      "I know that patience and loyalty are good, and virtuous traits. But sometimes I just think you need to grow a pair.",
    pic: "<img src='./img/Angela_Martin.jpg'>"
  },
  {
    character: "Michael Scott",
    quote: "Everybody stay calm! Stay f*&#!#% calm!",
    pic: "<img src='./img/Michael_Scott.jpg'>"
  },
  {
    character: "Dwight Schrute",
    quote: "What's the scuttlebutt?",
    pic: "<img src='./img/Dwight_.jpg'>"
  },
  {
    character: "Dwight Schrute",
    quote: "Michael!",
    pic: "<img src='./img/Dwight_.jpg'>"
  },
  {
    character: "Andy Bernard",
    quote:
      "I wish there was a way to know you’re in the good old days, before you’ve actually left them.",
    pic: "<img src='./img/Andy_Bernard.jpg'>"
  },
  {
    character: "Michael Scott",
    quote:
      "I feel like all my kids grew up, and then they married each other. It's every parents dream.",
    pic: "<img src='./img/Michael_Scott.jpg'>"
  },
  {
    character: "Andy Bernard",
    quote: "Sorry I annoyed you with my friendship.",
    pic: "<img src='./img/Andy_Bernard.jpg'>"
  },
  {
    character: "Jim Halpert",
    quote: "Bears, Beets, Battlestar Galactica.",
    pic: "<img src='./img/Jim.jpg'>"
  },
  {
    character: "Jim Halpert",
    quote:
      "I'm going to do something I've never done at this job before - try.",
    pic: "<img src='./img/Jim.jpg'>"
  },
  {
    character: "Jim Halpert",
    quote: "I miss Dwight. Congratulations Universe, you win.",
    pic: "<img src='./img/Jim.jpg'>"
  },
  {
    character: "Jim Halpert",
    quote:
      "I bought those boat tickets the day I saw that You Tube video. I knew we'd need a back-up plan. The boat was actually Plan C. The church was Plan B and Plan A was marrying her a long, long time ago. Pretty much the day I met her.",
    pic: "<img src='./img/Jim.jpg'>"
  },
  {
    character: "Dwight Schrute",
    quote: "You couldn't handle my undivided attention",
    pic: "<img src='./img/Dwight_.jpg'>"
  },
  {
    character: "Dwight Schrute",
    quote: "False.",
    pic: "<img src='./img/Dwight_.jpg'>"
  },
  {
    character: "Jim Halpert",
    quote: "Not enough for me? You are everything.",
    pic: "<img src='./img/Jim.jpg'>"
  },
  {
    character: "Jim Halpert",
    quote: "Michael will be related to this baby through... delusion.",
    pic: "<img src='./img/Jim.jpg'>"
  },
  {
    character: "Jim Halpert",
    quote: "Hey, what has two thumbs and hates Todd Packer? This guy.",
    pic: "<img src='./img/Jim.jpg'>"
  },
  {
    character: "Andy Bernard",
    quote:
      "I'm always thinking one step ahead, like a carpenter who makes stairs.",
    pic: "<img src='./img/Andy_Bernard.jpg'>"
  },
  {
    character: "Dwight Schrute",
    quote:
      "I am ready to face any challenge that might be foolish enough to face me.",
    pic: "<img src='./img/Dwight_.jpg'>"
  },
  {
    character: "Michael Scott",
    quote:
      "You know what they say. 'Fool me once, strike one, but fool me twice... strike three'.",
    pic: "<img src='./img/Michael_Scott.jpg'>"
  },
  {
    character: "Michael Scott",
    quote: "My mind is going a mile an hour.",
    pic: "<img src='./img/Michael_Scott.jpg'>"
  },
  {
    character: "Michael Scott",
    quote:
      "This is an environment of welcoming and you should just get the hell out of here.",
    pic: "<img src='./img/Michael_Scott.jpg'>"
  },
  {
    character: "Michael Scott",
    quote:
      "New York, New York, the city so nice, they named it twice. Manhattan is the other name.",
    pic: "<img src='./img/Michael_Scott.jpg'>"
  },
  {
    character: "Michael Scott",
    quote:
      "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    pic: "<img src='./img/Michael_Scott.jpg'>"
  },
  {
    character: "Michael Scott",
    quote:
      "Toby works in HR, which technically means he works for corporate, so he's not a part of our family. Also, he's divorced so he's really not a part of HIS family.",
    pic: "<img src='./img/Michael_Scott.jpg'>"
  },
  {
    character: "Dwight Schrute",
    quote:
      "Any time I'm about to do something, I think to myself 'Would an idiot do that?' and if the answer is yes, I do not do that thing.",
    pic: "<img src='./img/Dwight_.jpg'>"
  },
  {
    character: "Dwight Schrute",
    quote: "There's too many people on this earth. We need a new plague.",
    pic: "<img src='./img/Dwight_.jpg'>"
  },
  {
    character: "Kevin Malone",
    quote: "When I President, they see. They see.",
    pic: "<img src='./img/Kevin_Malone.jpg'>"
  },
  {
    character: "Kelly Kapoor",
    quote:
      "I don't talk trash; I talk smack. They're totally different. Trash talk is all hypothetical, like, 'Your Mama's so fat she could eat the internet', but smack talk is happening like right now, like, 'You're ugly and I know it for a fact 'cause I got the evidence right there.'",
    pic: "<img src='./img/Kelly_Kapoor.jpg'>"
  },
  {
    character: "Kelly Kapoor",
    quote: "I talk a lot, so I've learned to tune myself out.",
    pic: "<img src='./img/Kelly_Kapoor.jpg'>"
  },
  {
    character: "Kelly Kapoor",
    quote: "I am one of the few people who looks hot eating a cupcake.",
    pic: "<img src='./img/Kelly_Kapoor.jpg'>"
  },
  {
    character: "Kelly Kapoor",
    quote: "This day is BANANAS! B-A-N-A-N-A-S!",
    pic: "<img src='./img/Kelly_Kapoor.jpg'>"
  },
  {
    character: "Dwight Schrute",
    quote:
      "Identity theft is not a joke, Jim! Millions of families suffer every year!",
    pic: "<img src='./img/Dwight_.jpg'>"
  },
  {
    character: "Stanley Hudson",
    quote: "Did I stutter?",
    pic: "<img src='./img/Stanley_Hudson.jpg'>"
  },
  {
    character: "Stanley Hudson",
    quote:
      "I wake up every morning in a bed that’s too small, drive my daughter to a school that’s too expensive, and then I go to work to a job for which I get paid too little, but on pretzel day? Well, I like pretzel day..",
    pic: "<img src='./img/Stanley_Hudson.jpg'>"
  },
  {
    character: "Stanley Hudson",
    quote:
      "It's like I used to tell my wife: I do not apologize unless I think I'm wrong, and if you don't like it, you can leave. I say the same thing to my current wife, and I'll say it to my next one too.",
    pic: "<img src='./img/Stanley_Hudson.jpg'>"
  },
  {
    character: "Stanley Hudson",
    quote: "Boy, have you lost your mind, 'cause I will help you find it!",
    pic: "<img src='./img/Stanley_Hudson.jpg'>"
  },
  {
    character: "Michael Scott",
    quote: "I am Beyonce. Always.",
    pic: "<img src='./img/Michael_Scott.jpg'>"
  },
  {
    character: "Michael Scott",
    quote: "That's what she said.",
    pic: "<img src='./img/Michael_Scott.jpg'>"
  },
  {
    character: "Michael Scott",
    quote: "I'm not superstitious but... I'm a little stitious.",
    pic: "<img src='./img/Michael_Scott.jpg'>"
  },
  {
    character: "Michael Scott",
    quote:
      "If I had a gun with two bullets and I was in a room with Hitler, Bin Laden and Toby, I would shoot Toby twice.",
    pic: "<img src='./img/Michael_Scott.jpg'>"
  },
  {
    character: "Michael Scott",
    quote: "The worst thing about prison was the Dementors.",
    pic: "<img src='./img/Michael_Scott.jpg'>"
  },
  {
    character: "Michael Scott",
    quote:
      "I have flaws. What are they? I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I'll hit somebody with my car.",
    pic: "<img src='./img/Michael_Scott.jpg'>"
  },
{
  character: "Michael Scott",
  quote: "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "I never thought I’d say this, but I think I ate too much bone marrow.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "Whenever I’m about to do something, I think, ‘Would an idiot do that?’ and if they would, I do not do that thing.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Kelly Kapoor",
  quote: "I talk a lot, so I’ve learned to just tune myself out…",
  pic: "<img src='./img/Kelly_Kapoor.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I think that pretty much sums it up…I found it at Spencer Gifts.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I’m not superstitious, but I am a little stitious.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked, but it’s not like this compulsive need to be liked, like my need to be praised.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Kelly Kapoor",
  quote: "I am one of the few people who looks hot eating a cupcake.",
  pic: "<img src='./img/Kelly_Kapoor.jpg'>"
},

{
  character: "Stanley Hudson",
  quote: "If I don’t have some cake soon, I might die.",
  pic: "<img src='./img/Stanley_Hudson.jpg'>"
},

{
  character: "Jim Halpert",
  quote: "Everything I have I owe to this job… this stupid, wonderful, boring, amazing job.",
  pic: "<img src='./img/Jim_Halpert.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I am Beyonce always.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Uh…nope. Nope. This isn’t the surprise. It’s surprising because you didn’t expect it, but you will…you’ll know it when you see it.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Andy Bernard",
  quote: "I wish there was a way to know you’re in the good old days, before you’ve actually left them.",
  pic: "<img src='./img/Andy_Bernard.jpg'>"
},

{
  character: "Oscar Martinez",
  quote: "Look, it doesn’t take a genius to know that every organization thrives when it has two leaders. Go ahead, name a country that doesn’t have two presidents. A boat that sets sail without two captains. Where would Catholicism be without the popes?",
  pic: "<img src='./img/Oscar_Martinez.jpg'>"
},

{
  character: "Meredith Palmer",
  quote: "For my new year’s resolution, I gave up drinking… during the week.",
  pic: "<img src='./img/Meredith_Palmer.jpg'>"
},

{
  character: "Michael Scott",
  quote: "The worst thing about prison was the dementors.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Pam Beesley",
  quote: "And I feel God in this Chili’s tonight.",
  pic: "<img src='./img/Pam_Beesley.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "Identity theft is not a joke, Jim! Millions of families suffer every year.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Andy Bernard",
  quote: "Oh, it is on, like a prawn who yawns at dawn.",
  pic: "<img src='./img/Andy_Bernard.jpg'>"
},

{
  character: "Pam Beesley",
  quote: "No, no… ’cause then the ice melts and it’s, like, ‘second drink’.",
  pic: "<img src='./img/Pam_Beesley.jpg'>"
},

{
  character: "Michael Scott",
  quote: "It just seems awfully mean. But sometimes, the ends justify the mean.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Michael Scott",
  quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Angela Martin",
  quote: "I normally don’t enjoy making people laugh.",
  pic: "<img src='./img/Angela_Martin.jpg'>"
},

{
  character: "Jim Halpert",
  quote: "One day Michael came in and complained about a speed bump on the highway. I wonder who he ran over then.",
  pic: "<img src='./img/Jim_Halpert.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I am running away from my responsibilities and it feels good.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Ryan Howard",
  quote: "If I had to, I could clean out my desk in five seconds, and nobody would ever know that I’d ever been here. And I’d forget, too.",
  pic: "<img src='./img/Ryan_Howard.jpg'>"
},

{
  character: "Angela Martin",
  quote: "If you pray enough, you can change yourself into a cat person.",
  pic: "<img src='./img/Angela_Martin.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I live by one rule: No office romances, no way. Very messy, inappropriate…no. But, I live by another rule: Just do it…Nike.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Jim Halpert",
  quote: "I am about to do something very bold in this job that I’ve never done before: try.",
  pic: "<img src='./img/Jim_Halpert.jpg'>"
},

{
  character: "Pam Beesley",
  quote: "You know what they say about a car wreck, where it’s so awful you can’t look away? The Dundies are like a car wreck that you want to look away from but you have to stare at it because your boss is making you.",
  pic: "<img src='./img/Pam_Beesley.jpg'>"
},

{
  character: "Stanley Hudson",
  quote: "I have been trying to get on jury duty every year since I was 18 years old. To get to go sit it in an air-conditioned room, downtown, judging people, while my lunch is paid for… that is the life.",
  pic: "<img src='./img/Stanley_Hudson.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "Today, smoking is going to save lives.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Oscar Martinez",
  quote: "The Dunder Mifflin stock symbol is D.M.I. Do you know what that stands for? Dummies, Morons, and Idiots. Because that’s what you’d have to be to own it. And as one of those idiots, I believe the board owes me answers.",
  pic: "<img src='./img/Oscar_Martinez.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I understand nothing.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Should have burned this place down when I had the chance.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Stanley Hudson",
  quote: "Boy have you done lost your mind, ’cause I’ll help you find it!",
  pic: "<img src='./img/Stanley_Hudson.jpg'>"
},

{
  character: "Kevin Malone",
  quote: "I just want to lie on the beach and eat hot dogs. That’s all I’ve ever wanted.",
  pic: "<img src='./img/Kevin_Malone.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "In the Schrute family, the youngest child raises the others. I’ve been raising children since I was a baby.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Andy Bernard",
  quote: "I’ll be the number-two guy here in Scranton in six weeks. How? Name repetition, personality mirroring and never breaking off a handshake. I’m always thinking one step ahead. Like a carpenter… that makes stairs.",
  pic: "<img src='./img/Andy_Bernard.jpg'>"
},

{
  character: "Kevin Malone",
  quote: "Me think, why waste time say lot word, when few word do trick.",
  pic: "<img src='./img/Kevin_Malone.jpg'>"
},

{
  character: "Pam Beesley",
  quote: "How is it possible that in five years, I’ve had two engagements and only one chair?",
  pic: "<img src='./img/Pam_Beesley.jpg'>"
},

{
  character: "Angela Martin",
  quote: "Sometimes the clothes at Gap Kids are too flashy, so I’m forced to go to the American Girl store and order clothes for large colonial dolls.",
  pic: "<img src='./img/Angela_Martin.jpg'>"
},

{
  character: "Phyllis Lapin-Vance",
  quote: "I’m glad Michael’s getting help. He has a lot of issues, and he’s stupid.",
  pic: "<img src='./img/Phyllis_Lapin-Vance.jpg'>"
},

{
  character: "Andy Bernard",
  quote: "Sorry I annoyed you with my friendship.",
  pic: "<img src='./img/Andy_Bernard.jpg'>"
},

{
  character: "Kevin Malone",
  quote: "Mini cupcakes? As in the mini version of regular cupcakes? Which is already a mini version of cake? Honestly, where does it end with you people?",
  pic: "<img src='./img/Kevin_Malone.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I want you to rub butter on my foot… Pam, please? I have Country Crock.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "If I were buying my coffin, I would get one with thicker walls so you couldn’t hear the other dead people.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Stanley Hudson",
  quote: "It’s true. Around this office, in the past, I have been a little abrupt with people. But the doctor said, if I can’t find a new way to relate more positively to my surroundings, I’m going to die.",
  pic: "<img src='./img/Stanley_Hudson.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "I am faster than 80 percent of all snakes.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Pam Beesley",
  quote: "I don’t care what they say about me. I just want to eat.",
  pic: "<img src='./img/Pam_Beesley.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I love inside jokes. I’d love to be a part of one someday.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Jim Halpert",
  quote: "Right now, this is just a job. If I advance any higher in this company, this would be my career. And, uh, if this were my career, I’d have to throw myself in front of a train.",
  pic: "<img src='./img/Jim_Halpert.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject. So you know you are getting the best possible information.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Kelly Kapoor",
  quote: "I mean, who says exactly what they’re thinking? What kind of game is that?",
  pic: "<img src='./img/Kelly_Kapoor.jpg'>"
},

{
  character: "Jim Halpert",
  quote: "My roommate wants to meet everybody. Because I’m pretty sure he thinks I’m making Dwight up. He is very real.",
  pic: "<img src='./img/Jim_Halpert.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "’R’ is among the most menacing of sounds. That’s why they call it ‘murder’ and not ‘mukduk.’",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Pam Beesley",
  quote: "There’s a lot of beauty in ordinary things. Isn’t that kind of the point?",
  pic: "<img src='./img/Pam_Beesley.jpg'>"
},

{
  character: "Creed Bratton",
  quote: "I wanna do a cartwheel. But real casual-like. Not enough to make a big deal out of it, but I know everyone saw it. One stunning, gorgeous cartwheel.",
  pic: "<img src='./img/Creed_Bratton.jpg'>"
},

{
  character: "Pam Beesley",
  quote: "I hate the idea that someone out there hates me. I even hate thinking that al-Qaeda hates me. I think if they got to know me, they wouldn’t hate me.",
  pic: "<img src='./img/Pam_Beesley.jpg'>"
},

{
  character: "Creed Bratton",
  quote: "I stopped caring a long time ago.",
  pic: "<img src='./img/Creed_Bratton.jpg'>"
},

{
  character: "Jim Halpert",
  quote: "Pam and I would sometimes hum the same high-pitched note and try to get Dwight to make an appointment with an ear doctor. And, uh, Pam called it… pretendinitis.",
  pic: "<img src='./img/Jim_Halpert.jpg'>"
},

{
  character: "Ryan Howard",
  quote: "I’m such a perfectionist that I’d kinda rather not do it at all than do a crappy version.",
  pic: "<img src='./img/Ryan_Howard.jpg'>"
},

{
  character: "Erin Hannon",
  quote: "Disposable cameras are fun although it does seem wasteful and you don’t ever get to see your pictures.",
  pic: "<img src='./img/Erin_Hannon.jpg'>"
},

{
  character: "Stanley Hudson",
  quote: "It’s like I used to tell my wife: I do not apologize unless I think I’m wrong. And if you don’t like it, you can leave. And I say the same thing to my current wife and I’ll say it to my next one, too.",
  pic: "<img src='./img/Stanley_Hudson.jpg'>"
},

{
  character: "Ryan Howard",
  quote: "Yeah, I’m not a temp anymore. I got Jim’s old job. Which means at my ten year high school reunion, it will not say “Ryan Howard is a temp”. It will say “Ryan Howard is a junior sales associate at a mid-range paper supply firm”… That’ll show ’em.",
  pic: "<img src='./img/Ryan_Howard.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I’m not a millionaire. I thought I would be by the time I was 30, but I wasn’t even close. Then I thought maybe by 40, but by 40 I had less money than I did when I was 30.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Ryan Howard",
  quote: "A few years ago, my family was on a safari in Africa and my cousin, Mufasa, was um, he was trampled to death by a pack of wildebeests and um, we all took it really hard.",
  pic: "<img src='./img/Ryan_Howard.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I’m an early bird and I’m a night owl so I’m wise and I have worms.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Michael Scott",
  quote: "It takes an advanced sense of humor. I don’t expect everybody to understand.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Stanley Hudson",
  quote: "I wake up every morning in a bed that’s too small, drive my daughter to a school that’s too expensive, and then I go to work to a job for which I get paid too little. But on pretzel day? Well, I like pretzel day.",
  pic: "<img src='./img/Stanley_Hudson.jpg'>"
},

{
  character: "Phyllis Lapin-Vance",
  quote: "I wonder what people like about me. Probably my jugs.",
  pic: "<img src='./img/Phyllis_Lapin-Vance.jpg'>"
},

{
  character: "Michael Scott",
  quote: "No, I’m not going to tell them about the downsizing. If a patient has cancer, you don’t tell them.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Jim Halpert",
  quote: "Bears, beets, Battlestar Galactica.",
  pic: "<img src='./img/Jim_Halpert.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "You only live once? False. You live every day. You only die once.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Creed Bratton",
  quote: "I’ve been involved in a number of cults, both a leader and a follower. You have more fun as a follower, but you make more money as a leader.",
  pic: "<img src='./img/Creed_Bratton.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Dwight, you ignorant slut!",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I declare bankruptcy!",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Creed Bratton",
  quote: "The only difference between me and a homeless man is this job. I will do whatever it takes to survive like I did when I was a homeless man.",
  pic: "<img src='./img/Creed_Bratton.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "Powerpoints are the peacocks of the business world; all show, no meat.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "There’s too many people on this earth. We need a new plague.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Pam Beesley",
  quote: "Dwight mercy-killed Angela’s cat.",
  pic: "<img src='./img/Pam_Beesley.jpg'>"
},

{
  character: "Oscar Martinez",
  quote: "I consider myself a good person, but I’m gonna try to make him cry.",
  pic: "<img src='./img/Oscar_Martinez.jpg'>"
},

{
  character: "Kevin Malone",
  quote: "I got six numbers. One more would have been a complete telephone number.",
  pic: "<img src='./img/Kevin_Malone.jpg'>"
},

{
  character: "Stanley Hudson",
  quote: "Life is short. Drive fast and leave a sexy corpse. That’s one of my mottos.",
  pic: "<img src='./img/Stanley_Hudson.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Guess what, I have flaws. What are they? Oh, I don’t know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I’ll hit somebody with my car. So sue me.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Michael Scott",
  quote: "That’s what she said.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "Would I ever leave this company? Look, I’m all about loyalty. In fact, I feel like part of what I’m being paid for here is my loyalty. But if there were somewhere else that valued loyalty more highly… I’m going wherever they value loyalty the most.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Creed Bratton",
  quote: "Oh you’re paying way too much for worms. Who’s your worm guy?",
  pic: "<img src='./img/Creed_Bratton.jpg'>"
},

{
  character: "Jim Halpert",
  quote: "So this is my life– until I win the lottery. Or Pam finally writes that series of young adult books.",
  pic: "<img src='./img/Jim_Halpert.jpg'>"
},

{
  character: "Angela Martin",
  quote: "I don’t want to be married in a tent like a hobo.",
  pic: "<img src='./img/Angela_Martin.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I love my employees even though I hit one of you with my car.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Kelly Kapoor",
  quote: "I don’t talk trash, I talk smack. They’re totally different. Trash talk is hypothetical, like: ‘Your mom is so fat she can eat the internet.’ But smack talk is happening like right now. Like: ‘You’re ugly and I know it for a fact ’cause I got the evidence right there.’",
  pic: "<img src='./img/Kelly_Kapoor.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "Who is justice beaver?",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Abraham Lincoln once said that ‘If you’re a racist, I will attack you with the North,’ and these are the principles I carry with me in the workplace.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Erin Hannon",
  quote: "Planking is one of those things where, eh, you either get it or you don’t. And I don’t. But I am so excited to be a part of it.",
  pic: "<img src='./img/Erin_Hannon.jpg'>"
},

{
  character: "Pam Beesley",
  quote: "I’m guessing Angela is the one in the neighborhood that gives the trick-or-treaters toothbrushes. Pennies. Walnuts.",
  pic: "<img src='./img/Pam_Beesley.jpg'>"
},

{
  character: "Oscar Martinez",
  quote: "Well, this is what happened. Uh, Ryan’s big project was the website, which wasn’t doing so well. So Ryan, to give the impression of sales, recorded them twice. Once as offices and once in the website sales, which is what we refer to in the business as misleading the shareholders. Another good term is fraud. The real crime, I think, was the beard.",
  pic: "<img src='./img/Oscar_Martinez.jpg'>"
},

{
  character: "Phyllis Lapin-Vance",
  quote: "Oh, I don’t think it’s blackmail. Angela just does what I ask her to do, so I won’t tell everyone that she’s cheating on Andy with Dwight. I think for it to be blackmail, it would have to be a formal letter.",
  pic: "<img src='./img/Phyllis_Lapin-Vance.jpg'>"
},

{
  character: "Creed Bratton",
  quote: "If I can’t scuba, then what’s this all been about? What am I working toward?",
  pic: "<img src='./img/Creed_Bratton.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "You couldn’t handle my undivided attention.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I finally broke down and bought myself a plasma TV. Check it out. I actually hung this on the wall myself. I want to show you something: a lot of people in the room, you need more space, viola, right into the wall.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Phyllis Lapin-Vance",
  quote: "We have a gym at home. It’s called the bedroom.",
  pic: "<img src='./img/Phyllis_Lapin-Vance.jpg'>"
},

{
  character: "Michael Scott",
  quote: "As it turns out, you can’t just check someone into rehab against their will. They have to do it voluntarily. They have to hit rock bottom. So I think I know what I need to do at this point. I need to find ways to push Meredith to the bottom. Um. I think I can do it.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Society teaches us that having feelings and crying is bad and wrong. Well, that’s baloney, because grief isn’t wrong. There’s such a thing as good grief. Just ask Charlie Brown.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Kevin Malone",
  quote: "I wanted to eat a pig in a blanket, in a blanket.",
  pic: "<img src='./img/Kevin_Malone.jpg'>"
},

{
  character: "Angela Martin",
  quote: "I am proud to announce that there is a new addition to the Martin family. She’s hypoallergenic. She doesn’t struggle when you try to dress her. She’s a third-generation show cat. Her father was in Meet the Parents. Needless to say, she was very, very expensive.",
  pic: "<img src='./img/Angela_Martin.jpg'>"
},

{
  character: "Kelly Kapoor",
  quote: "I mean, I’m not a slut, but who knows.",
  pic: "<img src='./img/Kelly_Kapoor.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "I love catching people in the act. That’s why I always whip open doors.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Angela Martin",
  quote: "I have a warm blanket and several cozy pillows. I read a chapter of a book and then it’s lights out by 8:30.That’s how I sleep at night.",
  pic: "<img src='./img/Angela_Martin.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Fool me once, strike one. Fool me twice, strike three.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Deangelo Vickers",
  quote: "I used to be obese. Once you’ve conquered obesity, everything else is easy. Life literally moves in slow motion. I’m not saying I’m Superman, but let me just put it this way. If I were shot in the head, I’m pretty sure everything would be fine. I’d almost welcome it.",
  pic: "<img src='./img/Deangelo_Vickers.jpg'>"
},

{
  character: "Oscar Martinez",
  quote: "I just wanted you to know that you can’t just say the word ‘bankruptcy’ and expect anything to happen.",
  pic: "<img src='./img/Oscar_Martinez.jpg'>"
},

{
  character: "Creed Bratton",
  quote: "Nobody steals from Creed Bratton and gets away with it. The last person to do this disappeared. His name? Creed Bratton.",
  pic: "<img src='./img/Creed_Bratton.jpg'>"
},

{
  character: "Michael Scott",
  quote: "They just don’t get a lot of work done when I’m not here. That’s not true. I know how to delegate. And they do more work when I’m not here. The same amount of work is done whether I am here or not.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Michael Scott",
  quote: "An office is for not dying. An office is a place to live life to the fullest, to the max, to… an office is a place where dreams come true.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Ryan Howard",
  quote: "I miss the days when there was only one party I didn’t want to go to.",
  pic: "<img src='./img/Ryan_Howard.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I feel like all my kids grew up, and then they married each other. It’s every parent’s dream.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Kelly Kapoor",
  quote: "Sometimes I get so bored I just want to scream, then sometimes I actually do scream. I just sort of feel out what the situation calls for.",
  pic: "<img src='./img/Kelly_Kapoor.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I don’t hate it. I just don’t like it at all and it’s terrible.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Kelly Kapoor",
  quote: "Yeah, I have a lot of questions. Number one– how dare you?",
  pic: "<img src='./img/Kelly_Kapoor.jpg'>"
},

{
  character: "Pam Beesley",
  quote: "I am not great with kids. But I want to get better because I’m getting married. So, I put out a bunch of extra candy on my desk so the kids would come talk to me… like the witch in Hansel and Gretel.",
  pic: "<img src='./img/Pam_Beesley.jpg'>"
},

{
  character: "Creed Bratton",
  quote: "I run a small fake ID company from my car with a laminating machine that I swiped from the Sheriff’s station.",
  pic: "<img src='./img/Creed_Bratton.jpg'>"
},

{
  character: "Kelly Kapoor",
  quote: "You guys I’m, like, really smart now. You don’t even know. You could ask me, ‘Kelly, what’s the biggest company in the world?’ And I’d be like, ‘blah blah blah, blah blah blah blah blah blah.’ Giving you the exact right answer.",
  pic: "<img src='./img/Kelly_Kapoor.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Come on guys. Early worm gets the worm.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Jim Halpert",
  quote: "I think you’re under-thinking it.",
  pic: "<img src='./img/Jim_Halpert.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "I wish I could menstruate… I‘d be more in tune with the moon and the tides.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Michael Scarn",
  quote: "Joke’s on you Goldenface, that man was a wanted animal rapist.",
  pic: "<img src='./img/Michael_Scarn.jpg'>"
},

{
  character: "Jim Halpert",
  quote: "Having a baby is exhausting. Having two babies? Now that’s just mean.",
  pic: "<img src='./img/Jim_Halpert.jpg'>"
},

{
  character: "Stanley Hudson",
  quote: "Yes, I have a dream, and it’s not some MLK dream for equality. I want to own a decommissioned lighthouse. And I want to live at the top. And nobody knows I live there. And there’s a button that I can press and launch that lighthouse into space.",
  pic: "<img src='./img/Stanley_Hudson.jpg'>"
},

{
  character: "Angela Martin",
  quote: "The man is wearing sandals. I don’t need to see Oscar’s toes at work. Gross! I mean, he looks like he just got off the boat.",
  pic: "<img src='./img/Angela_Martin.jpg'>"
},

{
  character: "Pam Beesley",
  quote: "When you’re a kid, you assume your parents are soulmates. My kids are going to be right about that.",
  pic: "<img src='./img/Pam_Beesley.jpg'>"
},

{
  character: "Michael Scott",
  quote: "St. Patrick’s Day is the closest thing the Irish have to Christmas.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Pam Beesley",
  quote: "Man, Angela really had a hold on him.",
  pic: "<img src='./img/Pam_Beesley.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "I am fast. To give you a reference point I am somewhere between a snake and a mongoose… and a panther.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "Jim is my enemy. But it turns out that Jim is also his own worst enemy. And the enemy of my enemy is my friend. So Jim, is actually my friend. But, because he is his own worst enemy, the enemy of my friend is my enemy so actually Jim is my enemy.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Kevin Malone",
  quote: "I do deserve a vacation. Sometimes Batman’s gotta take off his cape.",
  pic: "<img src='./img/Kevin_Malone.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I guess I’ve been working so hard, I forgot what it’s like to be hardly working.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Kelly Kapoor",
  quote: "Look, I know the reason that you guys became accountants is because you’re not good at interacting with people. But guess what! From now on you guys are no longer losers! So give yourselves a round of applause.",
  pic: "<img src='./img/Kelly_Kapoor.jpg'>"
},

{
  character: "Phyllis Lapin-Vance",
  quote: "Close your mouth, sweetie. You look like a trout.",
  pic: "<img src='./img/Phyllis_Lapin-Vance.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "Bread is the paper of the food industry. You write your sandwich on it.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Andy Bernard",
  quote: "Andy Bernard does not lose contests. He wins them…or he quits because they are unfair.",
  pic: "<img src='./img/Andy_Bernard.jpg'>"
},

{
  character: "Andy Bernard",
  quote: "Break me off a piece of that… fancy feast.",
  pic: "<img src='./img/Andy_Bernard.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I’m not usually the butt of the joke. I’m usually the face of the joke.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Toby Flenderson",
  quote: "I am so sick of February. It’s the shortest month but it sure doesn’t feel that way.",
  pic: "<img src='./img/Toby_Flenderson.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I say dance, they say ‘How high?’",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Jim Halpert",
  quote: "It is not a good time for me to lose my job since I have some pretty big long-term plans in my personal life with Pam that I’d like her parents to be psyched about.",
  pic: "<img src='./img/Jim_Halpert.jpg'>"
},

{
  character: "Kevin Malone",
  quote: "The only problem is whenever I try to make a taco, I get too excited and crush it.",
  pic: "<img src='./img/Kevin_Malone.jpg'>"
},

{
  character: "Meredith Palmer",
  quote: "Tell ya one thing, I’m not gonna be a good mom tonight.",
  pic: "<img src='./img/Meredith_Palmer.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "I wish I could menstruate. If I could menstruate, I wouldn’t have to deal with idiotic calendars anymore. I’d just be able to count down from my previous cycle.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Michael Scott",
  quote: "My philosophy is basically this, and this is something I live by, and always have, and always will. Don’t ever, for any reason, do anything to anyone, for any reason, no matter what, no matter where, or who, or who you’re with or…or where you are going, or where you have been, ever, for any reason whatsoever.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Michael Scott",
  quote: "That is sort of an oaky afterbirth.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Jim Halpert",
  quote: "From time to time I send Dwight faxes. From himself. From the future.",
  pic: "<img src='./img/Jim_Halpert.jpg'>"
},

{
  character: "Darryl Philbin",
  quote: "So, the guy shows me the deck he’s built. And I’m like, ‘I’ll call this a deck if it’ll make you happy… but this is just a porch without a roof.’",
  pic: "<img src='./img/Darryl_Philbin.jpg'>"
},

{
  character: "Pam Beesley",
  quote: "How is it possible that in five years, I’ve had two engagements and only one chair?",
  pic: "<img src='./img/Pam_Beesley.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "When my mother was pregnant with me, they did an ultrasound and found she was having twins. When they did another ultrasound a few weeks later, they discovered that I had adsorbed the other fetus. Do I regret this? No, I believe his tissue has made me stronger. I now have the strength of a grown man and a little baby.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Phyllis Lapin-Vance",
  quote: "As a person who buys a lot of erotic cakes, it just feels good to be represented on one.",
  pic: "<img src='./img/Phyllis_Lapin-Vance.jpg'>"
},

{
  character: "Pam Beesley",
  quote: "Every so often, Jim dies of boredom.",
  pic: "<img src='./img/Pam_Beesley.jpg'>"
},

{
  character: "Andy Bernard",
  quote: "I’m always thinking one step ahead, like a carpenter that makes stairs.",
  pic: "<img src='./img/Andy_Bernard.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "Do you know who the real heroes are? The guys who wake up every morning and go into their normal jobs and get a distress call from the Commissioner and take off their glasses and change into capes and fly around fighting crime. Those are the real heroes.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Angela Martin",
  quote: "I once reported Oscar to the INS. Turns out he’s clean, but I’m glad I did it.",
  pic: "<img src='./img/Angela_Martin.jpg'>"
},

{
  character: "Jim Halpert",
  quote: "Oh so Dwight gave me this wooden mallard as a gift. I found a recording device in it. Yes. So. I think if I play it just right, I can get Dwight to live out the plot of National Treasure.",
  pic: "<img src='./img/Jim_Halpert.jpg'>"
},

{
  character: "Michael Scott",
  quote: "The rules of shotgun are very simple and very clear. The first person to shout ‘shotgun’ when you’re within sight of the car gets the front seat. That’s how the game’s played. There are no exceptions for someone with a concussion.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Andy Bernard",
  quote: "Women cannot resist a man singing show tunes. It’s so powerful, even a lot of men can’t resist a man singing show tunes.",
  pic: "<img src='./img/Andy_Bernard.jpg'>"
},

{
  character: "Oscar Martinez",
  quote: "Besides having sex with men, I would say the Finer Things Club is the gayest thing about me.",
  pic: "<img src='./img/Oscar_Martinez.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I stole. … And I robbed. And I kidnapped… the… president’s son. And held him for ransom.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Saw Inception. Or at least I dreamt I did…",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Jim Halpert",
  quote: "I think it’s great that the company’s making a commercial, because not very many people have heard of us. I mean, when I tell people I work at Dunder Mifflin, they think that we sell mufflers or muffins or mittens or…and frankly, all of those sound better than paper, so I let it slide.",
  pic: "<img src='./img/Jim_Halpert.jpg'>"
},

{
  character: "Jim Halpert",
  quote: "I am a black belt in gift wrapping.",
  pic: "<img src='./img/Jim_Halpert.jpg'>"
},

{
  character: "Robert California",
  quote: "There’s something about an underdog that really inspires the unexceptional.",
  pic: "<img src='./img/Robert_California.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "In the end, the greatest snowball isn’t a snowball at all. It’s fear. Merry Christmas.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Ryan Howard",
  quote: "I’m not saying I had a meteoric rise, but I did.",
  pic: "<img src='./img/Ryan_Howard.jpg'>"
},

{
  character: "Kevin Malone",
  quote: "The people here are amazing debaters. I guess you can say they are master-baters.",
  pic: "<img src='./img/Kevin_Malone.jpg'>"
},

{
  character: "Robert California",
  quote: "Do I look like someone who would waste my own time?",
  pic: "<img src='./img/Robert_California.jpg'>"
},

{
  character: "Ryan Howard",
  quote: "Last year, Creed asked me how to set up a blog. Wanting to protect the world from being exposed to Creed’s brain, I opened up a Word document on his computer and put an address at the top. I’ve read some of it. Even for the Internet, it’s… pretty shocking.",
  pic: "<img src='./img/Ryan_Howard.jpg'>"
},

{
  character: "Michael Scott",
  quote: "You are as creepy as a real serial killer. For real.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Stanley Hudson",
  quote: "News flash: You are not special.",
  pic: "<img src='./img/Stanley_Hudson.jpg'>"
},

{
  character: "Robert California",
  quote: "I am so tired of the Black Eyed Peas. It’s rock n roll for people who don’t like rock n roll. It’s rap for people who don’t like rap. It’s pop for people who don’t like pop.",
  pic: "<img src='./img/Robert_California.jpg'>"
},

{
  character: "Clark Greene",
  quote: "You know, I thought this was an office, not the thunderdome.",
  pic: "<img src='./img/Clark_Greene.jpg'>"
},

{
  character: "Michael Scott",
  quote: "They always say that it’s a mistake to hire your friends. And they are right. So, I hired my best friends. And this is what I get!?",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Angela Martin",
  quote: "I find the mystery genre disgusting. I hate being titillated.",
  pic: "<img src='./img/Angela_Martin.jpg'>"
},

{
  character: "Robert California",
  quote: "You can’t have a favorite Iron Chef. It depends entirely on the secret ingredient.",
  pic: "<img src='./img/Robert_California.jpg'>"
},

{
  character: "Andy Bernard",
  quote: "In high school, I organized a walkout over standardized testing. Got over 500 students to just skip the SATs. At the last second I chickened out, took it anyway got a twelve twenty. Always regretted it… I feel lachrymose.",
  pic: "<img src='./img/Andy_Bernard.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "The eyes are the groin of the face.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "Jim told me you could buy gaydar online.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Andy Bernard",
  quote: "I know a few things about love. Horrible, terrible, awful, awful things.",
  pic: "<img src='./img/Andy_Bernard.jpg'>"
},

{
  character: "Erin Hannon",
  quote: "My last job was at a Taco Bell Express. But then it became a full Taco Bell and, I don’t know, I couldn’t keep up.",
  pic: "<img src='./img/Erin_Hannon.jpg'>"
},

{
  character: "Stanley Hudson",
  quote: "Did I stutter?",
  pic: "<img src='./img/Stanley_Hudson.jpg'>"
},

{
  character: "Stanley Hudson",
  quote: "I do not like pregnant women in my workspace. They’re always complaining. I have varicose veins, too. I have swollen ankles. I’m constantly hungry. Do you think my nipples don’t get sore too? Do you think I don’t need to know the fastest way to the hospital?",
  pic: "<img src='./img/Stanley_Hudson.jpg'>"
},

{
  character: "Andy Bernard",
  quote: "You can’t let a girl feel good about herself. It will backfire on you. Every compliment has to be backhanded. ‘Oh I like your dress, but I’d like it more if you had prettier hair.’",
  pic: "<img src='./img/Andy_Bernard.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "Most people don’t even know that a candy cane represents a shepherd’s crook. Which I assure you does not taste like peppermint. It tastes like sheep feces.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Michael Scott",
  quote: "You all took a life here today. You did. The life of the party.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Tell him to call me ASAP as possible.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Andy Bernard",
  quote: "Put your heart out there like that, it’s liable to just turn into this blackened carbon brick where it has barbecue sauce of shame and rage and two hot people with a perfect relationship would not understand that!",
  pic: "<img src='./img/Andy_Bernard.jpg'>"
},

{
  character: "Nellie Bertram",
  quote: "I have one simple philosophy in business: if the seat is open, the job is open. It’s how I came to briefly race a Formula One car. The three slowest laps ever recorded.",
  pic: "<img src='./img/Nellie_Bertram.jpg'>"
},

{
  character: "Michael Scarn",
  quote: "Hey Goldenface! Go puck yourself!",
  pic: "<img src='./img/Michael_Scarn.jpg'>"
},

{
  character: "Jim Halpert",
  quote: "Stanley just drank OJ out of my mug and didn’t seem to realize that it wasn’t his hot coffee. So, the question has to be asked, is there no limit to what he won’t notice?",
  pic: "<img src='./img/Jim_Halpert.jpg'>"
},

{
  character: "Kelly Kapoor",
  quote: "Ultimatums are key. Basically, nobody does anything for me anymore unless I threaten to kill myself.",
  pic: "<img src='./img/Kelly_Kapoor.jpg'>"
},

{
  character: "Pam Beesley",
  quote: "I have decided that I’m going to be more honest. I’m gonna start telling people what I want, directly. So, look out world, ‘cuz ‘ol Pammy is gettin’ what she wants. And, don’t call me Pammy.",
  pic: "<img src='./img/Pam_Beesley.jpg'>"
},

{
  character: "Kevin Malone",
  quote: "I work hard all day. I like knowing that there’s going to be a break. Most days I just sit and wait for the break.",
  pic: "<img src='./img/Kevin_Malone.jpg'>"
},

{
  character: "Kevin Malone",
  quote: "I kinda know what it’s like to be in commercials. My nickname in high school used to be Kool-Aid Man.",
  pic: "<img src='./img/Kevin_Malone.jpg'>"
},

{
  character: "Kevin Malone",
  quote: "I want to be wine and dined and sixty-nined.",
  pic: "<img src='./img/Kevin_Malone.jpg'>"
},

{
  character: "Darryl Philbin",
  quote: "You need to access your uncrazy side, otherwise maybe this thing has run its course.",
  pic: "<img src='./img/Darryl_Philbin.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Whether you’re scared of dying, or dying alone, or dying drunk in a ditch, don’t be. It’s going to be OK.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Pete Miller",
  quote: "It just occurred to me that Andy has been calling me Plop for so long, he forgot my real name. Which is Pete.",
  pic: "<img src='./img/Pete_Miller.jpg'>"
},

{
  character: "Creed Bratton",
  quote: "I already won the lottery. I was born in the US of A, baby. And as backup, I have a Swiss passport.",
  pic: "<img src='./img/Creed_Bratton.jpg'>"
},

{
  character: "Deangelo Vickers",
  quote: "Everyone I know who skis is dead.",
  pic: "<img src='./img/Deangelo_Vickers.jpg'>"
},

{
  character: "Jim Halpert",
  quote: "Jan is about to have a baby with a sperm donor. And, Michael is preparing for the birth of a watermelon with Dwight. Now, this baby will be related to Michael through… Delusion",
  pic: "<img src='./img/Jim_Halpert.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "In the wild, there is no healthcare. In the wild healthcare is, ‘Ow, I hurt my leg. I can’t run. A lion eats me, and I’m dead.’ Well, I’m not dead. I’m the lion. You’re dead.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Angela Martin",
  quote: "Your body is a temple. You have to respect it. You can’t just whore it out.",
  pic: "<img src='./img/Angela_Martin.jpg'>"
},

{
  character: "Erin Hannon",
  quote: "Talk to me that way again and I’ll cut your face.",
  pic: "<img src='./img/Erin_Hannon.jpg'>"
},

{
  character: "Jim Halpert",
  quote: "Four years ago, I was just a guy who had a crush on a girl who had a boyfriend. And I had to do the hardest thing I’ve ever had to do, which was just to wait. For a really long time that’s all I had. I just had little moments with a girl who saw me as a friend. And a lot of people told me I was crazy to wait this long for a date with a girl who I worked with, but I think even then I knew that I was waiting for my wife.",
  pic: "<img src='./img/Jim_Halpert.jpg'>"
},

{
  character: "Michael Scott",
  quote: "This is a dream that I’ve had…since lunch…and I’m not giving it up now.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I would say I kind of have an unfair advantage, because I watch reality dating shows like a hawk, and I learn. I absorb information from the strategies of the winners and the losers. Actually, I probably learn more from the losers.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Gabe Lewis",
  quote: "You don’t want to get on my bad side, I have seen some horrible things, I own over 200 horror movies.",
  pic: "<img src='./img/Gabe_Lewis.jpg'>"
},

{
  character: "Michael Scott",
  quote: "I fell in love with these kids. And I didn’t want to see them fall victim to the system. So I made ’em a promise. I told them if they graduated from high school, I would pay for their college education. I have made some empty promises in my life but, hands down that was the most generous.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Oscar Martinez",
  quote: "Michael is leaving. And apparently, they’ve already hired a new manager. And we’re meeting him today. It’s a lot to process. Paperwork-wise.",
  pic: "<img src='./img/Oscar_Martinez.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Any man who says he totally understands women is a fool. Because they are un-understandable.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Holly Fax",
  quote: "He answers to Michael. Michael G. Scott. Michael J. Fox. Mr. Fox. The Incredible Mr. Fox.",
  pic: "<img src='./img/Holly_Fax.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Oh my God it’s happening! Everybody stay calm. Stay calm!",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Stanley Hudson",
  quote: "I’ve got a golden-ticket idea. Why don’t you skip on up to the roof and jump off?",
  pic: "<img src='./img/Stanley_Hudson.jpg'>"
},

{
  character: "Jan Levinson",
  quote: "There are always a million reasons not to do something.",
  pic: "<img src='./img/Jan_Levinson.jpg'>"
},

{
  character: "Jan Levinson",
  quote: "My psychiatrist thinks that I have some self-destructive tendencies, and that for once, I should indulge them.",
  pic: "<img src='./img/Jan_Levinson.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Bros before hoes. Why? Because your bros are always there for you. They have got your back after your hoe rips out your heart for no good reason. And you are nothing but great to your hoe, and you told her that she was the only hoe for you, and that she was better than all the other hoes in the world. And then, suddenly, she’s not your hoe no mo.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Michael Scott",
  quote: "You are the silent killer. Go back to the annex.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Michael Scott",
  quote: "You are going to be sleeping by yourself for the rest of your life, so you should just get used to it.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Jo Bennet",
  quote: "I’m a breast cancer survivor, close, personal friends with Nancy Pelosi, and Truman Capote and I slept with three of the same guys.",
  pic: "<img src='./img/Jo_Bennet.jpg'>"
},

{
  character: "Dwight Schrute",
  quote: "People underestimate the power of nostalgia. Nostalgia is truly one of the greatest human weaknesses, second only to the neck.",
  pic: "<img src='./img/Dwight_Schrute.jpg'>"
},

{
  character: "Michael Scott",
  quote: "You know what, Toby? When the son of the deposed King of Nigeria e-mails you directly asking for help, you help. His father ran the freaking country, okay?",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Why are you the way that you are? Honestly, every time I try to do something fun, or exciting, you make it… not that way. I hate… so much about the things that you choose to be.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Toby Flenderson",
  quote: "Hazing is a fun way to show a new employee that she is not welcome or liked.",
  pic: "<img src='./img/Toby_Flenderson.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Meredith, you lit your hair on fire today. What about tomorrow? What is going to happen when you come into work and you’re dead?",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Meredith Palmer",
  quote: "Who’s the one who didn’t bring lice into the office? Meredith. Sure I gave everybody pink eye once, and my ex keyed a few of their cars, and yeah I BMed in the shredder on New Years. But I didn’t bring the lice in. That was all Pam.",
  pic: "<img src='./img/Meredith_Palmer.jpg'>"
},

{
  character: "Meredith Palmer",
  quote: "You’re the people’s princess! Diana was nothing!",
  pic: "<img src='./img/Meredith_Palmer.jpg'>"
},

{
  character: "Todd Packer",
  quote: "Alright. Truth is, I got a couple love bumps on my ding dong, so I was like oh, game over.",
  pic: "<img src='./img/Todd_Packer.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Nobody should have to go to work thinking, ‘Oh this is the place that I might die today.’ That’s what a hospital is for.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Meredith Palmer",
  quote: "Hey everybody, he’s not in the men’s room. Although the seat was warm, so we may have just missed him.",
  pic: "<img src='./img/Meredith_Palmer.jpg'>"
},

{
  character: "Andy Bernard",
  quote: "My heart belongs to music. But my ass, belongs to these people.",
  pic: "<img src='./img/Andy_Bernard.jpg'>"
},

{
  character: "Creed Bratton",
  quote: "Creed Bratton has never declared bankruptcy. When Creed Bratton gets in trouble, he transfers his debt to William Charles Scheider.",
  pic: "<img src='./img/Creed_Bratton.jpg'>"
},

{
  character: "Michael Scott",
  quote: "If I had a gun with two bullets and I was in a room with Hitler, Bin Laden and Toby, I would shoot Toby twice.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Creed Bratton",
  quote: "Let’s put a smile on that face.",
  pic: "<img src='./img/Creed_Bratton.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Last, and possibly least, you didn’t think we’d forget, ‘That’s what she said!’",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Creed Bratton",
  quote: "When Pam gets Michael’s old chair, I get Pam’s old chair. Then I’ll have two chairs. Only one to go.",
  pic: "<img src='./img/Creed_Bratton.jpg'>"
},

{
  character: "Creed Bratton",
  quote: "You know a human can go on living for several hours after being decapitated.",
  pic: "<img src='./img/Creed_Bratton.jpg'>"
},

{
  character: "Michael Scott",
  quote: "So you’ve come to the master for guidance? Is this what you’re saying, grasshopper?",
  pic: "<img src='./img/Michael_Scott.jpg'>"
},

{
  character: "Michael Scott",
  quote: "Get out. No, this is not a joke. It was offensive and lame, so double offensive. This is an environment of welcoming and you should just get the hell out of here.",
  pic: "<img src='./img/Michael_Scott.jpg'>"
}
];
