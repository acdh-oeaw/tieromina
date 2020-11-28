import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  introOmens:string[];
  examples:string[];
  constructor() {
    this.introOmens  = ["If ants bring something from a man's house to a hole – that house will impoverish.",
 'If a snake falls on top of a man who is litigating, but his lawsuit is already dragging on – his lawsuit will be settled.',
 "If a lizard climbs onto a man's bed and lies down – he won't see children.",
 "If a yellow gecko is seen in a man's house – the social status of owner of that house will not be stable.",
 'If a snake falls and thereby frightens a man, but he does not cry out – attainment of a wish.',
 "If ants in a man's house open their track at West – in that house, a dying man will die.",
 'If a goat eats the garment of a man – need: there will be a breach of the man in the house.',
 'If a snake crosses from a man’s right to the man’s left – he will have a good reputation.',
 'If a pig carrying a reed bundle plays on the street – rising of a storm.',
 'If a snake gives birth in the latrine of a man’s house – that house will be dispersed.',
 'If red ants are on a dais – that city will be abandoned.',
 'If a snake leaves a man’s house crying out loudly – abandonment of the house.',
 'If pigs are numerous in a street and stand in front of a man – that city will be dispersed.',
 "If a lizard climbs onto a man's table and lies down – sickness will affect one who is on a journey.",
 "If a large gecko is seen in a man's house – the owner of that house will experience good fortune in that month.",
 'If a snake falls onto female weavers and enters inside of the thread – those female weavers will die within three months.',
 'If ants bring something from the city gate outside – the property of the city will move out.',
 "If ants are seen in a man's house in – the possessions of the house will come to an end.",
 'If a sow gives birth to a monkey – uprising of Elam, the land will experience famine.',
 'If a lizard continually jumps about – this household will be well.',
 'If a snake goes wild and circles around a man – that man’s god will always lead him to good fortune.',
 "If a dead lizard is seen in a man's house – that house will diminish.",
 "If a lizard falls on top of a man's sleeping place – removal of the bed.",
 'If a snake has a paw like a lion and roars like a lion – there will be a catastrophe in the land.',
 "If a lizard climbs onto a man's bed – removal of the bed.",
 'If a mongoose kills a snake in a man’s house – loss of grain and silver.',
 'If a lizard is seen in water or in beer – that house: an attack will occur against it.',
 "If ants in a man's house bring in , that enter – that house will become rich.",
 'If ants are numerous in the lock of a temple – in that temple, there will be no flour offerings.',
 'If a lizard that doesn’t have a tail is seen – the man’s wife will bear so many children that there won’t be any bread lit: no bread will be placed in his mouth.',
 "If black ants kill red ants in a man's house – there will be good news in the man's house.",
 'If a sheep is slaughtered and its severed head stares at his bowl – a request of Bēlet-ilī.',
 'If a snake falls in a man’s house and slithers around – that man will die.',
 "If ants are seen which is in a man's house – that house will be dispersed and, break.",
 "If red ants set out in a man's house and stay there – the way will be cut.",
 'If a lizard that doesn’t have a tail is seen – the man’s wife will bear so many children that there won’t be any bread lit: no bread will be placed for his mouth.',
 "If a multicolored gecko is seen in a man's house – the wife of the owner of that house will die.",
 "If an ants' track is many times repeatedly opened in a man's house – a hand will reach the owner of that house.",
 "If ants in a man's house repeatedly bite the left side of a man – that man will be sick.",
 'If ants climb down from a wall – fall: message of an enemy.',
 "If a lizard is lying on top of a man's bed and then falls – that man will consume a share, removal of the bed will occur.",
 'If the rams skip persistently – peace in the heart of the city.',
 "If a lizard in a man's house the entire day keeps making noise – there will be misfortune.",
 'If a sow gives birth and turns around and eats its afterbirth – that city will be afflicted by famine.',
 'If a sow gives birth to 15 piglets – the herds of the king will gather inside the city.',
 "If a lizard gives birth in the path of a man's house – abandonment of the house.",
 "If ants gather together in a man's house and then draw apart – the owner of the ouse will die and the house will have no provider.",
 'If a lizard walks about on a pregnant woman – that woman will give birth to a male.',
 'If a lizard that has two tails falls in front of a man – that man will prevail over lit: stand on his opponent.',
 'If a lizard falls on a man – all of his possessions will disappear.'];

    this.examples =  this.introOmens.sort(() => Math.random() - Math.random()).slice(0,2);

  }

  ngOnInit(): void {

  }

}
