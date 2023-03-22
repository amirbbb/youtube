//model
videos=[
    {
        title:'Talking Tech and AI with Google CEO Sundar Pichai!'
        ,thumbnail:"pictures/thumbnail-1.webp"
        ,channel:"pictures/channel-1.jpeg"
        ,author:'Marques Brownlee'
        ,datetime:'3.4M views \267 6 months ago'
        ,time:''
    }
]
let col = document.createElement('div')
col.className='column'
add('Try Not To Laugh Challenge #9',"pictures/thumbnail-2.webp","pictures/channel-2.jpeg",'Markiplier','19M views \267 4 years ago','')
add('Crazy Tik Toks Taken Moments Before DISASTER',"pictures/thumbnail-3.webp","pictures/channel-3.jpeg",'SSSniperWolf','12M views \267 1 years ago','')
add('The Simplest Math Problem No One Can Solve - Collatz Conjecture',"pictures/thumbnail-4.webp","pictures/channel-4.jpeg",'Veritasium','18M views \267 4 months ago','')
add("Anything You Can Fit In The Circle I'll Pay For","pictures/thumbnail-6.webp","pictures/channel-6.jpeg",'MrBeast','141M views \267 1 years ago','')
add("Kadane's Algorithm to Maximum Sum Subarray Problem","pictures/thumbnail-5.webp","pictures/channel-5.jpeg",'CS Dojo','519K views \267 5 years ago','')
add("Why Planes Don't Fly Over Tibet","pictures/thumbnail-7.webp","pictures/channel-7.jpeg",'RealLifeLore','6.6M views \267 1 years ago','')
add("Inside The World's Biggest Passenger Plane","pictures/thumbnail-8.webp","pictures/channel-8.jpeg",'Tech Vision','3.7M views \267 10 months ago','')
add('The SECRET to Super Human STRENGTH',"pictures/thumbnail-9.webp","pictures/channel-9.jpeg",'ThenX','20M views \267 3 years ago','')
add("How The World's Largest Cruise Ship Makes 30,000 Meals Every Day","pictures/thumbnail-10.webp","pictures/channel-10.jpeg",'Business Insider','14M views \267 1 years ago','')
add("Dubai's Crazy Underwater Train and Other Things #Only in Dubai","pictures/thumbnail-11.webp","pictures/channel-11.jpeg",'Destination Tips','3M views \267 1 years ago','')
add("What would happen if you didn't drink water? - Mia Nacamulli","pictures/thumbnail-12.webp","pictures/channel-12.jpeg",'TED-Ed','12M views \267 5 years ago','')

videos.forEach(function (ab){
    let vid= col.appendChild(document.createElement('div'))
    vid.className='video'
let im=vid.appendChild(document.createElement('img'))
im.src=ab.thumbnail
im.className='thumbnail'
let bg=vid.appendChild(document.createElement('div'))
bg.className='b-grid'
let imd=bg.appendChild(document.createElement('div'))
imd.className='img-div'
let cha=imd.appendChild(document.createElement('img'))
cha.src=ab.channel
cha.className='channel'
let det=bg.appendChild(document.createElement('div'))
det.className='details'
let titles=det.appendChild(document.createElement('p'))
titles.textContent=ab.title
titles.className='title'
let authors=det.appendChild(document.createElement('p'))
authors.textContent=ab.author
authors.className='author'
let dates=det.appendChild(document.createElement('p'))
dates.textContent=ab.datetime
dates.className='date'
    document.body.appendChild(col)
})


//add
function add(ti,th,c,a,d,t){
    videos.push({
        title:ti
        ,thumbnail:th
        ,channel:c
        ,author:a
        ,datetime:d
        ,time:t
    })
}
