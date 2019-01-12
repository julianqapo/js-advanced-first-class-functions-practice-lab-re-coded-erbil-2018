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

