var chat_log = {
    "Group": [
        ["Adi", "Ehhhh @Bryan @Patrick how did your H2 math go?"],
        ["Hilman", "Huh their paper ended alr ah? Morning paper?"],
        ["Player", "Wahhh sian"],
        ["Player", "Couldn't seem to do all the questions"],
        ["Player", "@Hilman Ya, morning paper,1h paper only. It started at 8am"],
        ["Hilman", "F"],
        ["Hilman", "Bruh I thought yall could use GDC"],
        ["Adi", "Ya bro this paper all the qns can use GDC right?"],
        ["Player", "I mean yea we could but they put in weird variables"],
        ["Player", "@Patrick could you do the question on the ducks?"],
        ["Adi", "what ducks"],
        ["Player", "Some stupid question on size of ducks in diff seasons"],
        ["Player", "They made us find SD by hand cos they put in some weird algebra"],
        ["Hilman", "Wah thank God I took H1 math"],
        ["Adi", "Wait SD by hand? wth"],
        ["Hilman", "No lah got some formula for that, very easy one"],
        ["Player", "Okay FLEX"],
        ["Player", "I forgot which SD formula to use so hopefully I got it right"],
        ["Adi", "Aiya, that’s just 1 question right?"],
        ["Player", "UHM WELLLL the entire stats paper was pretty much a mess so..."],
        ["Adi", "LOL NEVERMIND THEN, FORGET ABT IT"],
        ["Adi", "Finish alr lah"],
        ["Hilman", "HAHAHAHAHA YA nevermind, cannot do anything alr"],
        ["Player", "Tsk, yeah, what to do?"],
        ["Player", "Just hope for the best"],
        ["Adi", "Eh nevermind la we go celebrate first, we study for too long alr"],
        ["Player", "LOL WHY I ALWAYS GO OUT W YALL?"],
        ["Player", "Why I no gf to go out with ah T.T"],
        ["Hilman", "Too bad :P why ur face so ugly LMAO"],
        ["Adi", "wah Hil why so toxic?"],
        ["Adi", "Not like your face any better"],
        ["Adi", "As Bryan put it, ur face is rather bland"],
        ["Player", "HAHAHA Steal my line ah"],
        ["Hilman", "Tsk better than having 10000 pimples like Patrick"],
        ["Adi", "Don’t so toxic lah bro"],
        ["Hilman", "EHHH Anyway so I wanted to ask if yall free later this afternoon, since exams ended"],
        ["Player", "LOL I was just gonna game so ya I guess"],
        ["Adi", "bruh I busy w chess tournament leh"],
        ["Hilman", "Aiya you win so many competitions alr can miss one"],
        ["Player", "Adi, you no need practice anyway, you’re too good"],
        ["Adi", "ye la ye la"],
        ["Adi", "So, what do you have in mind?"],
        ["Hilman", "We've studied so long alr, there's so many new movies that came out"],
        ["Adi", "EH YAA"],
        ["Adi", "THE INFINITY WAR MOVIE JUST CAME OUT"],
        ["Player", "Infinity War?"],
        ["Player", "OH the Avengers one"],
        ["Adi", "Ya"],
        ["Hilman", "LOL I only watch for the action"],
        ["Player", "Same, I just like the graphics and effects"],
        ["Adi", "How dare youuu"],
        ["Hilman", "Eh there’s a movie at 7pm"],
        ["Hilman", "Just nice we eat dinner first, watch alr, then go get drinks"],
        ["Adi", "Adi: Woi we underage you know"],
    ],
    "Patrick" : [

    ],
    "Hilman": [

    ],
    "Adi": [

    ],
    "Marianne": [

    ]
};

var chat_elements = {
    "Group": loadChat("Group"),
    "Patrick": loadChat("Patrick"),
    "Hilman": loadChat("Hilman"),
    "Adi": loadChat("Adi"),
    "Marianne": loadChat("Marianne")
};

var diary_entries = [
    [
        "New Year's Day?!", "1 January 2021",
        `Dear Diary, (haha, what a funny thing to say) 
        <br /><br />
        How should I start this? Hilman has been telling me that I should start keeping diary entries to help me “reflect” on myself and things 
        around me. He says it helps him note down key events and moments to which he can look back on. I guess I’ll keep a record of important 
        events just in case I forget. New year, new me?
        <br /><br />
        This new year feels kind of surreal. Time has passed in a flash...Seems about the right time to start thinking about adulthood as well - 
        what is independance, what is the significance of friendships going forward...
        <br /><br />
        Too many thoughts to fit in one entry
        <br /><br />
        Best regards? Bryan.`
    ],
    [
        "First Day of JC :P", "04 February 2021",
        `Dear Diary,
        <br /><br />
        It’s official. I’ve stepped into my new JC. Dang this feels weird but… I’m finally a JC student and honestly - the sight of those three 
        idiots in uniform really makes my heart feel fuzzy. Urgh I hate it when I feel like that but - The. Gang. Is. Back. For that, I am always 
        grateful.  Hopefully we’ll be in the same class too. 
        <br /><br />
        Fun nugget! Patrick was so certain about making it here, that he bought the school uniform before the year even started. Spoil market… 
        But I mean, of course he was going to get in, his O’s were straight As. This man’s always after excellence and perfection.
        <br /><br />
        On a side note, I gave Hilman a peek at my diary and he commented that it was very “bland”, and said that my entries should be more flavourful and exciting. Why do diaries have to be exciting anyway? I say his face is the one that looks bland. I kinda like that insult… I’ll use it next time I see him. Anyway, Adi did suggest I should add pictures. Feeling lazy...
        <br /><br />
        Best Regards? 
        <br /><br />
        P.S. I still don’t know how to end a diary entry haha`
    ]
];

decision_log = [

];

var current_chat = "";

//helper sleep function from https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function changeDiaryEntry(entry_num) {
    var diary_entry = document.getElementById('diary-entry');
    if (entry_num > diary_entries.length - 1) {
        diary_entry.children[0].innerHTML = "Diary entry does not exist";
        diary_entry.children[1].innerHTML = "";
        diary_entry.children[2].innerHTML = "";
    } else {
        diary_entry.children[0].innerHTML = diary_entries[entry_num][0];
        diary_entry.children[1].innerHTML = diary_entries[entry_num][1];
        diary_entry.children[2].innerHTML = diary_entries[entry_num][2];
    }

    diary_entry.children[2].scrollTop = 0;
}

function newMessage(person, chat_contents) {
    var message_container = document.createElement('div');
    var person_name = document.createElement('p');
    var message_content = document.createElement('p');
    
    if (person == "Player") {
        message_container.setAttribute("class", "user");
        person_name.innerHTML = "You";
    } else {
        message_container.setAttribute("class", "other-user");
        person_name.innerHTML = person;
    }

    person_name.setAttribute("class", person);
    message_content.innerHTML = chat_contents;

    message_container.appendChild(person_name);
    message_container.appendChild(message_content);

    return message_container;
}

function loadChat(chat_name) {
    var new_chat_window = document.createElement('div');
    new_chat_window.setAttribute('id', 'chat-window');

    var new_chat_log = chat_log[chat_name];
    
    for (var i = 0; i < new_chat_log.length; i++) {
        var message_container = newMessage(new_chat_log[i][0], new_chat_log[i][1]);
        new_chat_window.appendChild(message_container);
    }

    return new_chat_window;
}

function swapToNewChat(person) {
    document.getElementById('chat-window').remove();
    document.getElementById('messenger-main').appendChild(chat_elements[person]);

    // auto scrolls down
    chat_elements[person].scrollTop = chat_elements[person].scrollHeight;
}

async function startGame() {
    var group = chat_elements['Group'];
    await sleep(1000);
    group.appendChild(newMessage("Hilman", "Ey bros anyone up for some picnic?"));
    group.scrollTop = group.scrollHeight;
    await sleep(3000);
    group.appendChild(newMessage("Adi", "Eh I onz"));
    group.scrollTop = group.scrollHeight;
    await sleep(3000);
    group.appendChild(newMessage("Patrick", "I not free sorry."));
    group.scrollTop = group.scrollHeight;
}

window.onload = function() {
    var chat = document.getElementById('chat-window');
    chat.scrollTop = chat.scrollHeight;

    swapToNewChat("Group");
    startGame();
}
