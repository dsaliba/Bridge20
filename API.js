on("chat:message", function(msg) {
    switch (msg.type){
        case "rollresult":
            let check = JSON.parse(msg.content);
            var ret = msg.type + "§" + msg.who + "§" + msg.origRoll + "§";
            var perc = 0;
            var diceCount = 0;
            check.rolls.forEach(function(r){
                if (r.type === "R"){
                    ret += ("   ")
                    perc += (r.dice*r.sides) - r.dice
                    diceCount += r.dice;
                    r.results.forEach(function(i){
                        ret += (" " + i.v);

                    })
                }

            })
            perc = Math.floor(100* ((check.total-diceCount)/perc))
            log(ret + "§" + perc + "§" + check.total);
            break;
        case "whisper":
            log(msg.type + "§" + msg.who + "§"+ msg.target_name + "§" + processInlinerolls(msg));
            break;
        default:

            log(msg.type + "§" + msg.who + "§" + processInlinerolls(msg));


    }
});

function processInlinerolls(msg) {
    if (_.has(msg, 'inlinerolls')) {
        return _.chain(msg.inlinerolls)
            .reduce(function(previous, current, index) {
                previous['$[[' + index + ']]'] = current.results.total || 0;
                return previous;
            },{})
            .reduce(function(previous, current, index) {
                return previous.replace(index, current);
            }, msg.content)
            .value();
    } else {
        return msg.content;
    }
}
