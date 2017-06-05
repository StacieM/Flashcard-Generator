//constructor to create the basic cards 
function ClozeCard(text, cloze) {
    if (this instanceof ClozeCard) {
        this.text = text;
        this.cloze = cloze;
    } else {
        return new ClozeCard(text, cloze)
    }
    //replace the cloze card text with ... representing the cloze
    this.replacement = function() {
        var partial = text.replace(cloze, '_____');
        console.log(partial);
    }
}

module.exports = ClozeCard;