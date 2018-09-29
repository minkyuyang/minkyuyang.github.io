function type(/**/) { for (var i = 0; i < arguments.length; i++) $('#console_holder').append(arguments[i]); }

function clear() { $('#console_holder').empty(); }

var buffer = [];
var iter = 0;

function add_normal(x) {
    buffer.unshift(x + "<br />");
    console.log("added");
}

function add(x) {
    buffer.unshift("> ");
    y = x.split(" ");
    for (var i = 0; i < y.length; i++)
        buffer.unshift(y[i] + " ");
    buffer.unshift("<br />");
}

function reorder() {
    var temp = [];
    for (var i = buffer.length; i > 0; i--)
        temp.unshift(buffer[i - 1]);
    for (var i = 0; i < buffer.length; i++)
        buffer[i] = temp[i];
    return buffer;
}

$(document).ready(function () {
    console.log("Document is ready.");
    add("Welcome to Minkyu's resume!");
    add("I was inspired by bash and console/terminal environments.")
    add("From here, you can browse links to my portfolio.");
    add_normal("<a target='_blank' href='newspaper/'>Click here to follow the story of Q</a>");
    add_normal("");
    add("I'm also very involved in the robotics community. Robotics has become one of my passions in the last few years.");
    add_normal("<a target='_blank' href='robots/index.html'>Click here to view a list of my achievements in the field of robotics.</a>");
    add_normal("");
    add("And most of all, I'm a coder.")
    add("Trying to get in contact with me professionally?")
    add_normal("Check out my <a target='_blank' href='https://www.linkedin.com/in/minkyuyang'>LinkedIn</a>!")
    add_normal("")
    add("Loading kernel: | / - | \\ | 100%")
    add_normal("")
    add_normal("<script src=\"input_process.js\"></script>");
    $("#console_holder").ready(function () {
        type("<div class='coral'>Loading: Minkyu Yang...");
        type("<div>> Hello World!</div>");
//        type("<div>> Keep typing with your keyboard to view the page.</div>"); //UNCOMMENT to use keypress!


        buffer = reorder();
    });
    iter = buffer.length - 1;

    function typeItOut() {
        if (iter > -1) {
            type(buffer[iter]); iter--;
            setTimeout(typeItOut, 70);
        }
        else return;
    }

    setTimeout(typeItOut, 100); //comment this line out to use the keypress

});
