var group_chat = [
    ["Adi", "Ehhhh @Bryan @Patrick how did your H2 math go?"],
    ["Player", "Wahhh sian"],
    ["Player", "Couldn't seem to do all the stats questions"],
    ["Hilman", "F"],
    ["Hilman", "Bruh I thought yall could use GDC"],
    ["Adi", "Ya bro this paper all the qns can use GDC right?"],
    ["Player", "I mean yea we could but they put in weird variables"],
    ["Player", "@Patrick could you do the question on the ducks?"],
    ["Adi", "what ducks"],
    ["Player", "Some stupid question on size of ducks in diff seasons"],
    ["Adi", "They made us find SD by hand cos they put in some weird algebra"]
];

var patrick_chat = [
    
]

var haliman_chat = [
    
];

var adi_chat = [
    
];

var marianne_chat = [
    
];

var current_chat = "";

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