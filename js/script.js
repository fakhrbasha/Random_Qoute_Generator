
var qouts = [
    {quote: 'The only way to do great work is to love what you do.', author: '--Steve Jobs'},
    {quote: 'The best way to predict the future is to invent it.', author: '--Alan Kay'},
    {quote: 'The only limit to our realization of tomorrow will be our doubts of today.', author: '--Franklin D. Roosevelt'},
    {quote: 'The only thing we have to fear is fear itself.', author: '--Franklin D. Roosevelt'},
    {quote: 'In the middle of difficulty lies opportunity.', author: '--Albert Einstein'},
    {quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.', author: '--Winston Churchill'},
    {quote: 'Believe you can and you’re halfway there.', author: '--Theodore Roosevelt'},
    {quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.', author: '--Ralph Waldo Emerson'},
    {quote: 'I have not failed. I’ve just found 10,000 ways that won’t work.', author: '--Thomas Edison'},
    {quote: 'You miss 100% of the shots you don’t take.', author: '--Wayne Gretzky'},
    {quote: 'Whether you think you can or you think you can’t, you’re right.', author: '--Henry Ford'},
    {quote: 'It does not matter how slowly you go as long as you do not stop.', author: '--Confucius'},
    {quote: 'Everything you’ve ever wanted is on the other side of fear.', author: '--George Addair'},
    {quote: 'Opportunities don’t happen. You create them.', author: '--Chris Grosser'},
    {quote: 'Success usually comes to those who are too busy to be looking for it.', author: '--Henry David Thoreau'},
    {quote: 'Don’t be afraid to give up the good to go for the great.', author: '--John D. Rockefeller'},
    {quote: 'If you really look closely, most overnight successes took a long time.', author: '--Steve Jobs'},
    {quote: 'Hardships often prepare ordinary people for an extraordinary destiny.', author: '--C.S. Lewis'},
    {quote: 'I find that the harder I work, the more luck I seem to have.', author: '--Thomas Jefferson'},
    {quote: 'Your time is limited, so don’t waste it living someone else’s life.', author: '--Steve Jobs'},
    {quote: 'Kolo Fel Hagayes Sadany', author: '--Fakhr Basha'}
];

function getQuote() {
    var rend = Math.floor(Math.random() * qouts.length); 
    document.getElementById('qoute').innerHTML = qouts[rend].quote;
    document.getElementById('author').innerHTML = qouts[rend].author;
}