// "OBLIVION" BY GRIMES 
// a remake attempt! 

setcps(160/60/4)

const baseline = n("<0 4 7 4>*8")
  .scale("<D2:major B1:minor>/2")
  .s("sawtooth")
  .lpf(700)
  ._punchcard()
const hats =  s("hh*8").gain(.2).bank("RolandTR909")
const bass = n("<[0,7] [9,11]>*4").scale("<D1:major B0:minor>/2").s("triangle")
const drums = s("bd sd bd sd").bank("RhythmAce").gain(slider(0.2,0,1))

stack(bass,baseline, drums)
