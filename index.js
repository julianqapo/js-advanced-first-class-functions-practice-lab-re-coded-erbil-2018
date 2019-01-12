// Code your solution in this file!
function logDriverNames(x){
  x.map(function(e){
    console.log(e.name)
  })
}


function logDriversByHometown(x,y){
  x.filter(function(v){
    if (v.hometown== y){
      console.log(v.name)
    }
  })
}


function driversByRevenue(drivers){
  drivers.sort(function(a, b){
      return a.revenue-b.revenue
  })
return drivers
}


function driversByName(y){
y.sort(function(a,b) {
if (a.name < b.name)
return -1;
if (a.name > b.name)
return 1;
return 0;
})
return y
}



function totalRevenue(d){
let total = 0
for (i in d){
total += d[i].revenue
}
return total
}

function averageRevenue(d){
  let av = 0
  for (i in d){
    av += d[i].revenue / d.length
  }
  return av
}
