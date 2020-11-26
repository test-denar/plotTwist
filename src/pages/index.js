import React, { useRef, useState } from "react"
import { Link } from "gatsby"
import "../styles.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import first from "../images/1.png"
import second from "../images/2.png"
import third from "../images/3.png"
import fourth from "../images/4.png"
import fifth from "../images/5.png"
import sixth from "../images/6.png"
import seventh from "../images/7.png"
import eighth from "../images/8.png"
import nineth from "../images/9.png"
import tenth from "../images/10.png"

const imgArray = [
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  nineth,
  tenth,
]

const IndexPage = () => {
  // const postRef = imgArray.map(x => useRef(null))
  // const handler = idx => () => {
  //   const next = postRef[idx + 1]
  //   if (next) {
  //     next.current.focus()
  //   }
  // }
  const [imagesState, setImagesState] = useState([
    {
      url: first,
      selected: false,
      id: 0,
      text:
        "From: Georgie Sinclair <a href='mailto:gecsinclair@gmail.com'>gecsinclair@gmail.com</a>" +
        "\n" +
        "Sent: 05 November 2020 22:41" +
        "\n" +
        "To: Jo Kali <a href='mailto:jo-anna.kalinowska@hotmail.com'>jo-anna.kalinowska@hotmail.com</a>" +
        "\n" +
        "Subject: email exchange" +
        "\n" +
        "\n" +
        "dear jo" +
        "\n" +
        "\n" +
        "it feels very fitting and momentous to be beginning this email exchange with you on none other than YOUR 31th BIRTHDAY. double scorpio queen. i am very sad that we aren’t in the same city on this day, not even connected by the same land. though i guess it hardly matters where anyone is situated right now; i’ve already been in one zoom meeting with you today, we have another later, and you’ve just messaged with a picture of yourself and the flowers elisa and sophia and i sent you. what can i say!! i spend more time with you than i do anyone else." +
        "\n" +
        "\n" +
        "that’s perhaps a good entry point into what we've been mulling over these past few months: what does it mean to spend time – good, meaningful time – with others, when you aren’t physically in the same space? what does it do to our relations, our patterns of communication, capacity for expression, mannerisms, and affective ties, when we are disembodied and reincarnated as 2-dimensional selves, enabled by tech infrastructures that care nothing for our own health and safety? what new languages, codes and practices must be invented and implemented, and how do we go about creating them? " +
        "\n" +
        "\n" +
        " something that has struck me most over the past few months is the extremity with which all of this information is flooding my screen without respite – news articles, Zoom meetings, whatsapp conversations, lecture notes, and twitter rants are shoved together in strange and jarring ways, spilling into the next to the point that they are one and the same… contrasted with me: sitting completely still behind my laptop, whilst i bite my nails and whinge and eat crisps. i come home from the studio in the evening and i am completely wiped out. the physicality of all this stuff is very much there. it floors me. " +
        "\n" +
        "\n" +
        " we’ve been very inspired by the writing and practice of cyber doula Olivia McKayla Ross, and Neema Githere who coined the termed data healing (among others), which is a remedy for the trauma caused by the internet, the effects of moving about in cyberspace. i’m wondering whether you have managed to implement any of their healing techniques into your daily life? what other ways do you remedy the trauma of living online? " +
        "\n" +
        "\n" +
        " GgXXX " +
        "\n" +
        "\n" +
        " ps. it’s somewhat... disconcerting to write this email with the knowledge that i might be reading it aloud to an audience soon, but i tried to banish that image from my head, and imagine writing it to our future selves instead. it made me i feel more at ease. a lil tip for you when you respond. ",
    },
    {
      url: second,
      selected: false,
      id: 1,
      text:
        "From: Jo Kali  <a href='mailto:jo-anna.kalinowska@hotmail.comm'>jo-anna.kalinowska@hotmail.com</a>" +
        "\n" +
        "Sent: 12 November 2020 17:16" +
        "\n" +
        "To: Georgie Sinclair <a href='mailto:gecsinclair@gmail.com'>gecsinclair@gmail.com</a>" +
        "\n" +
        "Subject: Re: emailllll exchange" +
        "\n" +
        "\n" +
        "gggggg 🙂  " +
        "\n" +
        "\n" +
        " I am sitting cross legged at my desk with my fle0ece on, it's so cold. I lit an aromatherapy candle for ~a sense of calm~ (today's been a little hectic and jittery) but, so far, I can't smell anything. I tried to warm my hands near the flame and ended up burning myself --> this sums up the sort of hectic messy day I am having." +
        "<img src='/candle1.png'/>" +
        " I've been thinking a lot about what Alice (Stewart) mentioned yesterday in her talk (p.s we need to plan a call with her this weekend! I will message her now). Asking what we miss in the pandemic/lockdown and what we would have wanted from technology in order to have made the experience better - I don't know if a robot hugging me would feel comforting? I think some sort of thin material coating we could have worn to filter out the virus and still actually have felt each other through. Although... as much as I miss the pressure/heat of touch, I think there's a certain romanticisation of human interactions. I know that most people touching me as they walk past, leaning over me, squishing me over so they can fit on a bench, a lot of it feels invasive and unwanted -- I guess this idea loops us back to consent which we are constantly looping back to discussing. It also loops back into the realisation that 'what we miss' is all very different. Remember at the start of lockdown - I was having a great time! Lovely home, more time with Roguey, cooking, being cooked for, the sunniest balcony, a case of natural wine, minimal work, tozo money, new audiobook subscription! I guess it did feel a lot more temporary, but still, my immediate reaction was very different from all the Aries who had their birthday parties cancelled that month! Last week, on my birthday, I was loving sitting on my bed opening presents and being able to enjoy them slowly in my own time, not having to think about people watching me and looking for signs and gestures of my thoughts about their gift. " +
        "\n" +
        "\n" +
        " The question 'how could technology help us in the pandemic' screams GOOGLE to me. In fact, let me google the question. Answers; allows for remote working (lol), contact tracing, temperature monitoring, research for a vaccine, contactless deliveries, huh - not my initial line of thinking which was 'how can technology hug me?' which I just googled and wow look https://cutecircuit.com/the-hug-shirt/!!! but yes, I am finding that I am constantly coming online, to my screen, to endless possible answers, in order to find salvation from those exact things... my google history (is obviously not limited to, but does include:) self-massage for aching jaw, natural migraine remedies, essential oils for anxiety, breathing exercises for anxiety. The digital realm is wired up as my saviour it seems. I'm online for ways to feel better while I am offline, and offline I am trying to find ways to heal so I can get back online. So, coming back to what you asked: have I managed to implement any data healing techniques? I'd say, in brief, no. I'm in an endless circling motion/feedback loop. The image of a snake eating its own tail or the Nokia snake eating, growing, winding around and then inevitably crashing into itself and having to start again. (I miss that game). " +
        "\n" +
        "\n" +
        " Similar to your email... in the time it's taken for me to write this one, we've messaged on 3 different Whatsapp groups and both joined the Silvia Federici Zoom lecture. I want to rewatch this talk as my brain hasn't fully taken it in (which is fair seeing as I have been emailing you, texting you and calling with my mum at the same time). But I know they've been touching upon (or skirting around?) the topic of sexual abuse and the recent allegations, it's making me realise how important the topic of consent is and how much harder it's getting under capitalism/under any system where there's a doctrine/imposer of expectations and standards... how can you be a subject with your own agency and boundaries and feelings and space and time, while being forced into being a product or object of a system you have no control over? I'm thinking again of the snake but this time it's shedding its skin, this is an image someone shared with me about Scorpios, but I also think it's very relevant to you, too! This idea that we change and grow and shed our old selves, or part of that self -- not that we are different people but that we've evolved somehow? and I think that really ties in with plot twist - maybe plot twist can be a snake, too - we're all learning and taking in new information, disorientating and reorientating ourselves into something slightly, but not completely, different. " +
        "\n" +
        "\n" +
        " haha I just realised my new snake phone stand is watching me by the candle, it's in the photo, no wonder snakes are on my mind. THIS is the result of not going out for days... I am restricted to my immediate surroundings for imagination and inspiration -- despite (apparently) having 'the world at my fingertips'.anyway, here is a photo of the candle slowly burning down and, of course, the snake." +
        "<img src='/candle2.png'/>",
    },
    {
      url: third,
      selected: false,
      id: 2,
      text:
        "From: Georgie Sinclair <a href='mailto:gecsinclair@gmail.com'>gecsinclair@gmail.com</a>" +
        "\n" +
        "Sent: 16 November 2020 17:29" +
        "\n" +
        "To: Jo Kali <a href='mailto:jo-anna.kalinowska@hotmail.com'>jo-anna.kalinowska@hotmail.com</a>" +
        "\n" +
        "Subject: email exchange" +
        "\n" +
        "\n" +
        "jojo <3 " +
        "\n" +
        "\n" +
        " i’ve been trying to open and respond to this email for the last two hours but the mail app kept crashing and locking me out. " +
        "\n" +
        "\n" +
        " i agree with you on your point about the robot hug, i don’t think a piece of technology simulated to squeeze me would ever quench that lack. i’m sure that there is tonnes research on the chemical reactions that go off in your body when you make contact with something warm, but from my astutely unscientific and naive perspective, the warmth (metaphorical + physical) of a hug is always bound to the giver of the hug, squeezing someone i love tightly. maybe i’m missing out on something big here by keeping this a social problem and denying my bodily needs, but i would prefer to hug my childhood teddy bear over a warm mechanical robot any day. " +
        "\n" +
        "\n" +
        " today, jurgis, who shares my studio with me, was telling me about touch screen technologies, and how they use our fingers as electrical conductors to charge the interaction, so we are effectively charging our phones and tablets with our own bodies. i’m thinking back to an app i had on my first smartphone, which i used to communicate with a long distance ex. it had a blank display, but when we were both ‘in’ it, we could see where each were touching the screen with our finger tips. it felt very corny at the time, and i know i would find it even more corny now. seeing my partners’ fingers move across a screen 1) wasn’t very comforting at all and 2) brings me back to the same question: what is with this incessant drive to replicate the sensation of touch using technology? i don’t think that should be the goal. it’s not surprising that capitalism exploits our weaknesses, and longing is certainly one of them, but trying to simulate hugs and direct touch is not the way to treat loneliness or solitude. can’t we find other more exciting ways of spending time together apart that doesn’t involve trying to replicate physical interactions? " +
        "\n" +
        "\n" +
        " on that note… i’m logging off the evening to knit my scarf and watch KUWTK",
    },
    {
      url: fourth,
      selected: false,
      id: 3,
      text:
        "From: Jo Kali  <a href='mailto:jo-anna.kalinowska@hotmail.comm'>jo-anna.kalinowska@hotmail.com</a>" +
        "\n" +
        "18 November 2020 15:08" +
        "\n" +
        "To: Georgie Sinclair <a href='mailto:gecsinclair@gmail.com'>gecsinclair@gmail.com</a>" +
        "\n" +
        "Subject: Re: emailllll exchange" +
        "\n" +
        "\n" +
        "hmmm, I had a nice call with Andreea this week, both of us were tired and unable to speak but wanted to spend time together so she propped me up against the knife rack while she cooked and talked me through the 'spicy pasta'she was making. I know that is another example that replicates a physical way of being together, but the screen mediation definitely made me feel more comfortable taking a back seat and just observing - I was actually under my duvet the entire call. I have been trying to think through ideas of technology, pedagogy and boundaries this week. I re-read Matteo Pasquinelli's piece, 'Three Thousand Years of Algorithmic Rituals'where he says; `Machine Learning emerges from grids that continue ancient abstractions and rituals concerned with marking territories & bodies, counting people and goods.` This idea that algorithmic bias online emerges from historical bias afk isn't new, but I like the way he also demystifies algorithms as recent or as a product of 'The West'. Do you think by understanding the history of these processes we can better influence them in the present/future? I like how Flavia Dzodan describes 'the algorithm as an epistemic and pedagogical interface'. I wonder how outsourcing and crystallising our behaviour and our desires leaves space for change or - maybe more importantly - for unreadability. " +
        "<img src='/twitter.png'/>" +
        " Did you manage to read any of Glitch Feminism yet? I have only dipped in but from what I understand, the idea of a Glitch is an error or failure that can be used as a means of making/taking up more space (specifically queer and Black space). Or perhaps a way of pushing against boundaries, readability and algorithms. I think using a VPN or firewalls are an example of Glitch Feminism. I'm trying to connect it back to what you've taught me about failure, especially Jack Halberstam's work, and Sara Ahmed's Orientation's. Like, encouraging slips and slides in new directions as a means of creating space for new possibilities? There's a very visual metaphor about 'space' and the position taken in it or the need for it--- now I am thinking about boundaries and 'being boxed in' vs 'needing to create own boundaries' - I think setting boundaries is actually a really beautiful way to reconnect. This is very '9 of Wands' energy actually - Jessica Dore relates this card to communicating boundaries and informed consent, she says; `let others know the rules of engagement so they can make educated choices`. I think this is interesting because while we are creating our own boundaries, we are also having them constantly imposed on us and people are often blind to these until they or someone else stumbles into them. For me the 9 of Wands really asks us to think what defences, walls and boundaries reveal about ourselves, what are we - collective or individual - are yearning for? Right now I think my defence mechanism reveals I am yearning for safety - not only health and physical safety but also emotional. I know I am currently much more open to speaking with strangers online about my emotions and mood than I am with my housemates, I think the distance and the ability to delete, block, remove etc really helps me feel more in control. How about you? Does the 9 of Wands relate to anything you're experiencing?" +
        "<img src='/card.png'/>" +
        " lots of love, jo XXXXXXX : ) ps!! did u hear that dolphins might be going extinct : ( here is a stream of smiling dolphs for u, I've only seen them online and on tv and in books - I guess we are lucky we have all these ways to 'capture' and archive them and 'know them' without being physically close. " +
        "<img src='/dolphins1.png'/>" +
        "<img src='/dolphins2.png'/>",
    },
    {
      url: fifth,
      selected: false,
      id: 4,
      text:
        "From: Georgie Sinclair <a href='mailto:gecsinclair@gmail.com'>gecsinclair@gmail.com</a>" +
        "\n" +
        "19 November 2020 17:30" +
        "\n" +
        "To: Jo Kali <a href='mailto:jo-anna.kalinowska@hotmail.com'>jo-anna.kalinowska@hotmail.com</a>" +
        "\n" +
        "Subject: email exchange" +
        "\n" +
        "\n" +
        "but your time with Andreea sounds wonderful! – i don’t think you were replicating a physical way of being together, she really was cooking her dinner and you really were tucked up in bed, the exchange was simply mediated by a screen. i struggle with technology programmed to hug, or apps designed to mimic a sensorial experience of touching each other, that tries to dissolve the distances between the two users. it lacks the totalising sensory experience of actually being with another, the smells, feel of the fabrics, the noises and the environment you are in, that you see and hear together. technology – until now at least – has always fallen short in this regard. by this, i don’t mean to privilege face-to-face contact, i just don’t think it makes sense to use communication technologies to pretend the distance isn’t there. technology has so much potential to create other kinds of worlds, why not run with that? " +
        "\n" +
        "\n" +
        " on a slightly different note, i’ve just finished reading an interesting essay called Magic and the Machine, by David Abram, who is an ecologist and philosopher. he writes very compellingly about animism: the belief that all objects, places, and creatures all possess a distinct spiritual essence, are aware, have agency, and the capacity to act, albeit some – rocks, mountains, trees – are much slower than others. whilst i am not sure i am fully on board with some of his conclusions, he makes a fascinating point about the way digital technologies are being designed to co-opt and mimic our senses and how we participate with our surroundings. take siri and alexa, fridges that talk to you, the constellation of technologies that form 'the internet of things’ which integrate seamlessly into our lives. all these digital tools are outfitted with sensors programmed to speak our language, to recreate a sense of living in a world where everything is animated in some form. digital technologies speak the language of humans. our devices are anthropomorphised. and yet, simply by virtue of their creation, it will always disappoint. animism is predicated on the notion of a radical, more-than-human otherness and mystery, the mystery of a spiderweb, a forest, a creature and its ancestral roots and histories. technology, rather, has been humanly engineered and programmed. instead, all that surrounds us is an ‘extension of the human nervous system’. Abram says: “As we enter more deeply into the world of ubiquitous computing, we increasingly seal ourselves into an exclusively human zone of interaction.’ " +
        "\n" +
        "\n" +
        " anyway, i mention this because, like algorithmic bias, it illustrates how deeply flawed digital technologies are, how lacking in neutrality, how human-centered, how contrived, how artificial. even at their most convincing they are still violent, and we always have to be suspicious of what’s under the surface, who's engineering it and who's coding it. " +
        "\n" +
        "\n" +
        " and speaking of boundaries, i really recommend reading 'Boundaries As Invitation Rather Than Limitation’ (it’s on our are.na page if that link doesn’t work), it’s a conversation between Lucas LaRochelle and rudi aker, which i think really chimes with what you are saying. the title kinda speaks for its self. but here’s a small passage from the intro:‘  " +
        "\n" +
        "\n" +
        " ... if we are able to reformulate our boundaries as needs, which is rooted in the possibility of them being met, rather than as limitations, we might be more equipped to meet each other more fully and openly at our self-perceived borders. it is at that boundary space where we can begin to acknowledge one another as self sovereign, but also understand that self sovereignty is only one component of what it means to be a person in the world who is always in relation to other human and non-humans.’ " +
        "\n" +
        "\n" +
        " GGGGG",
    },
    {
      url: sixth,
      selected: false,
      id: 5,
      text:
        "From: Jo Kali  <a href='mailto:jo-anna.kalinowska@hotmail.comm'>jo-anna.kalinowska@hotmail.com</a>" +
        "\n" +
        "19 November 2020 19:39" +
        "\n" +
        "To: Georgie Sinclair <a href='mailto:gecsinclair@gmail.com'>gecsinclair@gmail.com</a>" +
        "\n" +
        "Subject: Re: email exchange" +
        "\n" +
        "\n" +
        "I had a weird sensation reading that just now -- it is the first email from you that I can't read in your usual tone of voice in. What did you do/read/listen to while writing?🤔 am intentionally going to write this instantly and in one go because i want you to read it in my voice (we haven't heard each others voices all week!!!!) " +
        "\n" +
        "\n" +
        " that really reminds me of my undergrad in anth. the suggestion of 'otherness' or trying to decipher something in terms 'other' than our own -- I don't know if that's possible for me, I know I can only think/learn in connection to things I already have some grasp/intimacy/understanding of, and I learn by getting familiar with things. was also speaking with claude (sarra's housemate) yesterday about ways we can programme ourselves to use our vagus nerves or how to get rid of intrusive thoughts. feel like I am always returning to my thesis on oliveros and 'software for people' - what tools do we have at our disposal to make things better for oursleves (everyones 'better' is different of course)-what instructions or recipes or 'meditations' can we write/formulate/code blah blah blah - also thinking back to ursula le guins idea of technology as ways for us to engage with the material world, or 'solutions'. i am always circling back to the same texts and people - same references and ideas - because that is how i am learning or trying to position things in my personal database, library, brain, network. " +
        "\n" +
        "\n" +
        " mmm dinner is ready so i am off 🙂 love you and hope you are healthy and in a good mood and have had a nice big dinner this eve xxxx jo " +
        "<img src='/stones.png'/>",
    },
    {
      url: seventh,
      selected: false,
      id: 6,
      text:
        "From: Georgie Sinclair <a href='mailto:gecsinclair@gmail.com'>gecsinclair@gmail.com</a>" +
        "\n" +
        "Sent:  20 November 2020 17:59" +
        "\n" +
        "To: Jo Kali <a href='mailto:jo-anna.kalinowska@hotmail.com'>jo-anna.kalinowska@hotmail.com</a>" +
        "\n" +
        "Subject: email exchange" +
        "\n" +
        "\n" +
        "yeah well i was concentrating very hard on trying to explain something that i hadn’t tried to explain before, so my tone must have changed. plus i’d been at my screen without a break for too many hours so i don’t think i was feeling much like the version of myself that you usually talk to. i was becoming a hybrid of the texts i was reading. " +
        "\n" +
        "\n" +
        " i wanna segue to another conversation cause i feel like we need to cover some more ground… let’s see, maybe we should address this imaginary toolkit, the project we applied with to the AEP? at the moment the contents of the toolkit exists in loads of tiny fragments in my head, and yours too i think, but the fragments don’t yet have a form, they need more time to develop… (i’m now picturing a tiny cyborg-alien foetus lodged in my brain and feeling disturbed). " +
        "\n" +
        "\n" +
        " i think the biggest trouble we’ve had in bringing the toolkit into the material world is that it feels difficult to create a toolkit (for anything!) without sounding formulaic and ordered. and we want our toolkit to be a container of reflections, questions, and pointers for others to be able to have access to. and yet i’m still processing so much that i’m not able to make sense of anything anyway, let alone make it articulate or useful for anyone else. i’m a slow thinker, and a slow do-er.. so it might take some time for anything to come of this toolkit. and i think that’s fine!? social media has def had a very unhealthy effect on us in that regard: the expectation that we have to have fully formed thoughts the moment anything happens." +
        "\n" +
        "\n" +
        " but maybe it will help to give the voyeurs of this conversation an idea of what the contents of the toolkit might be. or the goal? could you paint me a lil picture? " +
        "\n" +
        "\n" +
        "  i’m going home to cook fish and potatoes !!!!" +
        "\n" +
        " G ",
    },
    {
      url: eighth,
      selected: false,
      id: 7,
      text:
        "From: Jo Kali  <a href='mailto:jo-anna.kalinowska@hotmail.comm'>jo-anna.kalinowska@hotmail.com</a>" +
        "\n" +
        "23 November 2020 12:16" +
        "\n" +
        "To: Georgie Sinclair <a href='mailto:gecsinclair@gmail.com'>gecsinclair@gmail.com</a>" +
        "\n" +
        "Subject: Re: emailllll exchange" +
        "\n" +
        "\n" +
        "ok, here is my drawing of a toolkit as very sadly don't have paints 🙂 (incl. a face roller!)" +
        "\n" +
        "\n" +
        "<img src='/toolkit.png'/>" +
        " i am going to try and think through my thoughts and this drawing while writing this (keep being reminded about the AEP presentation title - things we are thinking with -- and 'things', to me, suggests a toolkit!) I think I am thinking about the importance of A toolkit rather than THE toolkit, the implication that there's multiple readings, visions, drawings etc possible not only in the sense of different objects, but also the subjectivity of each object (I think we must be positioned in/within/inside/underneath/around 'a toolkit'). This makes me feel less scared of being articulate and gives more room for us being playful and situated very much in our own bodies/avatars/lives) - maybe we scared ourselves by saying we wanted it to be useful outside of plot twist? but i think we can make something useful and relevant to plot twist that can also be adaptable and flexible and guiding outside of it? " +
        "\n" +
        "\n" +
        " When I was drawing, I was thinking about being non-linear, (traditionally) rational or containable, but the image of us trying to grasp at things (maybe we are holding a container of 'a toolkit' - at times i'm sure we are containers ourselves but still thinking about how it can exist without/outside us?) and I am spending so much time with my lime green netted bag so ~Ursula Le Guin'scarrier bag of fiction~ is my immediate thought. 'This influential essay opens a portal to terra ignota: unknown lands where the possibilities of human experience and knowledge can be discovered anew.' I think if a carrier bag or toolkit is some form of a vessel to bring energy home (whatever 'home' is to be understood as) then the purpose/role must be connected to sharing, redistribution and education as well as collecting/containing-- it's for bringing things together and learning from them or making them not only useful and used but also known to be useful and used?? (this also sounds like consciousness raising!) One thing I was thinking about after your email was Caroline Sinders' ~'Feminist Data Set'~and questioning 'what could a feminist (but also queer) internet/data set be?' -- I think even through this email exchange we are learning that conversation is a very important 'tool' for us --- so perhaps in our toolkit (can we also think of it as a data set?) we could have these emails, questions/prompts, perhaps also conversations or interviews. shall we interview our AEP (class)mates and Taut and tutors? Or ask for feedback? that feedback (along with the feedback Taut asked us to write on our experience with various platforms/interfaces/websites) can go in 'a toolkit' " +
        "\n" +
        "\n" +
        " This is a really nice addiction we can add ~john cage's indeterminacy~for cage indeterminacy meant 'the ability of a piece to be performed in substantially different ways' - kind of like, programming or composing something to be uncertain or unfixed?" +
        "\n" +
        "\n" +
        " I guess if we can think about it in that way then one task for us is to think about how best to present or make accessible (recordings of things being read/talked about vs images vs videos vs texts vs... all the other formats and forms my head can't imagine right now) and maybe we should think about ways to allow 'tools' to adapt and evolve (if we include these emails can people respond or edit them?) but also... i think the unfixed-ness is also written into the idea that as soon as someone else reads or sees or uses any tool, they have their interpretation of it, so we need to remember that other people are necessary in order for this to be readable in ways other than our own (but also we will also read it in different ways over time/over various moods etc) does this help? does it relate to how you've been picturing (or maybe thinking about) a toolkit? (maybe the visualisation process has been creating a blockage for us?) what have been useful tools for you over this process? and what is the best way (for you/us) to engage with it/for it to be presented? I feel like are.na has been a nice container for your ideas!" +
        "\n" +
        "\n" +
        "❤️ ❤️ ❤️ " +
        "\n" +
        "\n" +
        "ps. i have (over)used the term(s) think/thinking/thoughts 18 times " +
        "\n" +
        "pps. I write this email while listening to bbc 1xtra which I would recommend! " +
        "\n" +
        "ppps. sorry for the (perhaps unreadable) colours but dense black text looked (equally) uninviting to readxxxx",
    },
    {
      url: nineth,
      selected: false,
      id: 8,
      text:
        "From: Georgie Sinclair <a href='mailto:gecsinclair@gmail.com'>gecsinclair@gmail.com</a>" +
        "\n" +
        "Sent: 23 November 2020 19:48" +
        "\n" +
        "To: Jo Kali <a href='mailto:jo-anna.kalinowska@hotmail.com'>jo-anna.kalinowska@hotmail.com</a>" +
        "\n" +
        "Subject: email exchange" +
        "\n" +
        "\n" +
        "yes, Ursula K. Le Guin!!... ‘before the tool that forces energy outward, we made the tool that brings energy home.’ she says." +
        "\n" +
        "\n" +
        " i also like the idea of taking up a little bit of space online with our toolkit, to deposit and redirect to potentially counter-active, counter-productive tools, resources, and energies for ourselves, and that isn’t part of the Mark Zuckerberg empire. not to say that the toolkit won’t be circulated via Fbook's platforms (that seems unavoidable.. or maybe not?), but at least its postcode will be independent, and perhaps, at the very least, it will become a space for US (i.e you and me and other pals from our plot twist galaxy) to commune sometimes. " +
        "\n" +
        "\n" +
        " given my incapacity to weave together anything coherent at the moment/ever i too would like it to be able to house many different formats – sometimes an essay rant; sometimes a sound piece (aka a link to enya, caribbean blue or some ASMR); sometimes a gentle and affirming conversation with someone else; maybe a prompt to go for a walk or call a friend; tips and reminders for protecting ourselves and others online, ETC. i can think of lots of /deposits/ that will give me (and others) something to hold onto for however long this period lasts / or until it’s obsolete. " +
        "\n" +
        "\n" +
        " in fact… the toolkit isn’t ABOUT/ON practicing care it IS a practice of care. " +
        "\n" +
        "\n" +
        " there was something that Tautvydas said once that, in times of uncertainty (aka now), structure can be a form of care and – thinking to Jo Freeman’s essay The Tyranny of Structurelessness, which i’ve found very useful for hosting our reading groups – i agree. although i can’t say we will have made him proud with these emails! but i guess structure doesn’t have to be linear, so long as we hold our readers' hands and signpost everything well. this is important, especially since it is so easy to get lost in hyperlink swamp. whilst i do love the platform are.na – precisely because it has housed so many runaway thoughts these past months, i have found that i don’t take care of it enough, don’t pick out the weeds. something for us to keep in mind. " +
        "\n" +
        "\n" +
        " one of the main things that we do (perhaps everyone does) is learn from each other through citing others (see: this whole email thread, but also: are.na, also: the very architecture of a reading group) which, thankfully, is, practically the internet’s raison d’être (thanks hyperlink!!), so i think the web is a good place for it. " +
        "\n" +
        "\n" +
        " i really like this article written by Laurel Schwulst called My website is a shifting house next to a river of knowledge. what could yours be? where she invites us to metaphorisise websites as physical spaces to help us build them; as plant, as garden, as flock of birds. she says that we should all have and build websites to take the internet out of the hands of nasty commercial corps, and breathe life back into it, a vast network of interconnected individual nodes. so maybe ours is a bag? or maybe it’s a natural pond, where rainwater has collected over a long period of time and eventually becomes a small but lively ecosystem. " +
        "\n" +
        "\n" +
        " phew! sorry if that is scatterbrain email. i’m so tired ::(((( i might have to edit this one a lil bit before i read it aloud " +
        "\n" +
        "\n" +
        " here is a pic of me wearing my scarf on my head, it looks like i have long brown braids!" +
        "\n" +
        "\n" +
        " XO" +
        "<img src='/braids.png'/>" +
        "",
    },
    {
      url: tenth,
      selected: false,
      id: 9,
      text:
        "From: Jo Kali  <a href='mailto:jo-anna.kalinowska@hotmail.comm'>jo-anna.kalinowska@hotmail.com</a>" +
        "\n" +
        "24 November 2020 12:03" +
        "\n" +
        "To: Georgie Sinclair <a href='mailto:gecsinclair@gmail.com'>gecsinclair@gmail.com</a>" +
        "\n" +
        "Subject: Re: emailllll exchange" +
        "\n" +
        "\n" +
        "another full circle! when we first started to write our application and come up with proposals we talked about gardens! gardening - growing - pruning - facilitating - blooming - roses in gardens --- actually connected with December's plot twist readings there is an article titled 'a toolbox for his work' which talks about derek jarman's cottage and garden - the title doesn't get discussed in the piece so not bothering to link (plus it's the guardian bleugh) but I am interpreting it not only as a toolkit for his work as in a means for him to work and practice (as well as build a practice and build work) but also (now) for people to be inspired and learn from him, too. now I am thinking about tool libraries. there's two here in glasgow! places for borrowing and lending and sharing and donating and discovering not only tools but... things that can be done! it pushes against so many barriers." +
        "\n" +
        "\n" +
        " I like the poetic ways in which Laurel('s article) understands websites -- is it too greedy of me to want ours to be a plot - a plot which has a garden, with plants, and trees, and mushrooms, with puddles, maybe even larger pools of water, rocks to throw in the water but also rocks that are already sitting in the water bed, has a house, with shelves, and rooms. I'd add a kitchen - because yes, I realise I am being greedy here but because a dining table - whether it's used for dining or not - still feels symbolic to me for plot twist - a table for gathering. " +
        "\n" +
        "\n" +
        " and yes a practice of care and not only for us and other members but also for the works and words we are endlessly citing and reading and working with/from." +
        "\n" +
        "\n" +
        " scatterbrain emails are nice! our brains are scattered, i think that's why your image of a spider web from femke's tutorial is so sticky in my mind - you are imprinted as scuttling across an endless number of threads between an endless number of things. i think a web-site, for now, seems like a good form for a toolkit. these emails have been really nice to write, they have given me space/purpose and time to 'think with' and I hope we continue beyond AEP alongside a toolkit/web-site, and plot twist." +
        "\n" +
        "\n" +
        " merci beaucoup for everything you are and you do 🙂 pls read this email as a gestural squeeze of appreciation as well as care " +
        "\n" +
        "\n" +
        " xxx",
    },
  ])
  const toggleImage = image => {
    let copyState = []

    imagesState.forEach(img => {
      if (image.id == img.id) {
        copyState.push({
          selected: !img.selected,
          url: img.url,
          id: img.id,
          text: img.text,
        })
      } else {
        copyState.push(img)
      }
    })

    console.log(copyState)

    setImagesState(copyState)
  }

  return (
    <Layout>
      <SEO title="A Plot Twist" />
      <div className="container">
        {imagesState.map((image, i) => {
          return (
            <div
              className={`post post-${i}`}
              key={image.id}
              onClick={() => toggleImage(image)}
            >
              <img
                src={image.url}
                alt=""
                style={{
                  width: "450px",
                  filter: "drop-shadow(5px 5px 5px #222)",
                }}
              />
              {image.selected && (
                <div
                  className="textBox"
                  style={{
                    width: "120%",
                    color: "white",
                    border: "1px solid red",
                    fontSize: "16px",
                    zIndex: 10,
                    border: "4px solid #e3fd02",
                    padding: "20px",
                    backgroundColor: "#3110B8",
                    position: "absolute",
                    maxWidth: "600px",
                    top: "-130px",
                    left: "230px",
                    whiteSpace: "pre-wrap",
                  }}
                  dangerouslySetInnerHTML={{ __html: image.text }}
                />
              )}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
