// bd = bass drum, sd = snare, hh = hi-hats
// stack to layer:
const drums = s("bd sd bd sd").bank("RolandTR909").gain(.3)
const hats =  s("hh*8").gain(.2).bank("RolandTR909")

const bass = note("d1 ~ d1 ~ d2 ~ d1 ~")  
  .sound("sawtooth")
  .lpf(500)
  .lpq(3)
  .delay(slider(0.75, 0,1))
  .delaytime("0.7 0.5")
  ._punchcard()

const chords = note ("f3 ~ f3 ~ f3 ~ a3 ~")

stack(drums, hats, bass, chords)
