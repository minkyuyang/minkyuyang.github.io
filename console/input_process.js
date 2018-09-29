var command = "";
var commands = {
    help: '<br />      |*|*|*|  Minkyu OS 1.0 |*|*|*|<br /><br />List of available commands:<br />help - displays help text' +
    '<br />hello - say hello!' +
    '<br />email - get my email!' +
    '<br />rick - hit him up for a good time' +
    '<br />football - Vanderbilt Football record :(' +
    '<br />secret - do you have the password?',

    hello: 'Good morning!',
    email: 'My email is <a href="mailto:minkyuyang99@gmail.com">minkyuyang99 dot gmail dot com</a> (avoiding bots since day 1)',
    rick: '<a target = "_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Give him a shot :)</a>',
    football: '<a target = "_blank" href = "http://www.espn.com/college-football/team/schedule/_/id/238/vanderbilt-commodores"> sad face </a>',
    secret: 'This is the secret cOde thAt has been hiDing from you thiS whole time.',
};

function type(/**/) { for (var i = 0; i < arguments.length; i++) $('#console_holder').append(arguments[i]); }

function assign() {
    $('.cmd').ready(function () {
        $('.cmd').focus();
        $('.cmd').keypress(function (event) {
            console.log("entered");
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode == '13') {
                command = $('.cmd').val().split(' ')[0];
                $('input').removeClass('cmd');
                $('input').prop("disabled", true);
                //now, the input is stopped so we can input the result of the command
                if (!(command in commands)) {
                    type("<div></div><br />");
                    type("Sorry, I wasn't able to find the keyword, file or script \"" + command + "\". Try again!");
                    type(commands.help);
                    type("<div></div><br /><br />");
                }
                else {
                    type("<div></div><br />");
                    type(commands[command]);
                    type("<div></div><br /><br />");
                }
                type("<div>> <input class=\"cmd\" name=\"command\" type=\"text\" placeholder=\"Type a command here...\"></input></div>");
                assign();
            }
        });
    });
}

$(document).ready(function () {
    type(commands.help);
    type("<div>> <input class=\"cmd\" name=\"command\" type=\"text\" placeholder=\"Type a command here...\"></input></div>");
    $('.cmd').ready(function () {
        $('.cmd').focus();
        $('.cmd').keypress(function (event) {
            console.log("entered");
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode == '13') {
                command = $('.cmd').val().split(' ')[0];
                $('input').removeClass('cmd');
                $('input').prop("disabled", true);
                //now, the input is stopped so we can input the result of the command
                if (!(command in commands)) {
                    type("<div></div><br />");
                    type("Sorry, I wasn't able to find the keyword, file or script \"" + command + "\". Try again!");
                    type(commands.help);
                    type("<div></div><br /><br />");
                }
                else {
                    type("<div></div><br />");
                    type(commands[command]);
                    type("<div></div><br /><br />");
                }
                type("<div>> <input class=\"cmd\" name=\"command\" type=\"text\" placeholder=\"Type a command here...\"></input></div>");
                assign();
            }
        });
    });
});