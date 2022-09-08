import express from 'express';

import longestWord from './longestWord.js'
import shortestWord from './shortestWord.js'
import wordLengths from './wordLengths.js'
import EnoughAirtime from'./Enoughairtime.js'
import totalPhoneBill from'./public/totalphonebill.js'

const app = express();
app.use(express.json())
app.use(express.static('public'));

app.get('/api/word_game', function(req, res) {
    const sentence = req.query.sentence;
    console.log("sentence", sentence);
    res.json({

        "longestWord": longestWord(sentence),
        "shortest": shortestWord(sentence),
        "wordLengths": wordLengths(sentence)
    });
});


app.post('/api/phonebill/total', async function(req, res) {
    
    const bill = req.body.bill;
    
    res.json({

        "Total": totalPhoneBill(bill)
    });
    
});


const PORT = process.env.PORT || 6007;
app.listen(PORT, function() {
    console.log("APİS ON PORT 6007", PORT);
})