var group_chat = [
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
];

var patrick_chat = [
    
]

var haliman_chat = [
    
];

var adi_chat = [
    
];

var marianne_chat = [
    
];

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
]

var current_chat = "";

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
}

window.onload = function() {
    var chat = document.getElementById('chat-window');
    chat.scrollTop = chat.scrollHeight;
}

function changeToGroup() {
    swapToNewChat(group_chat);
}

function changeToPatrick() {
    swapToNewChat(patrick_chat);
}

function changeToHaliman() {
    swapToNewChat(haliman_chat);
}

function changeToAdi() {
    swapToNewChat(adi_chat);
}

function changeToMarianne() {
    swapToNewChat(marianne_chat);
}

function swapToNewChat(chat_log) {
    
    // Chat element for HAPB-M chat group
    var new_chat_window = document.createElement('div');
    new_chat_window.setAttribute('id', 'chat-window');
    
    for (var i = 0; i < chat_log.length; i++) {
        var message = document.createElement('p');
        if(chat_log[i][0] == "Player") {
            message.setAttribute("class", "user");
        } else {
            message.setAttribute("class", "other-user");
        }
        message.innerHTML = chat_log[i][1];
        new_chat_window.appendChild(message);
    }

    document.getElementById('chat-window').remove();
    document.getElementById('messenger-main').appendChild(new_chat_window);

    // auto scrolls down
    new_chat_window.scrollTop = new_chat_window.scrollHeight;
}
