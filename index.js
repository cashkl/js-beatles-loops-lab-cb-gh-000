function theBeatlesPlay(musicians, instruments) {
var empty=[]
  for (var i = 0; i < musicians.length; i++) {
    var str=musicians[i] + " plays " + instruments[i]
    empty[i]=str
  }
return empty
}


function johnLennonFacts(facts) {
  var i = 0
  var realFacts=facts;
  while (i >= facts.length) {
    realFacts[i]+="!!!"
  }
}