const ourVision = ["B$u$i$ld", "$t$$h$e", "N$e$x$t", "E$$ra", "$$o$f$", "S$$of$t$wa$r$e", "De$$ve$l$op$me$n$t"]

const result = ourVision.map(v => {return v.replace(/[^a-zA-Z]+/g, '')}).join(' ').toUpperCase()

console.log(result)