/*
As noriu pamatyti visas galimas laiko/laikrodzio kombinacijas
valandos tikslumu
Intervalas nuo 1 iki 12
Pateikimo formatas: 1:00, ...
                    1:00, 1:15, 1:30, 1:45, ..., 4:45
*/

//Ciklas       nes 'nuo..iki'


for (let i=1; i<=12; i++) {
    console.log(i + ':00');
}




for (let val = 1; val <= 4; val++) {
    console.log('-------');
    let min = 0;

    for (let i=0; i <4; i++) {
        if (min < 10){
            console.log(val + ':0' + min);      // jeigu minutes - vienzenklis skaicius, pries jas prideti 0
        } else {
            console.log(val + ':' + min);
        }
        
        min +=15;
    }
}


for (let val = 15; val <= 17; val++) {
    console.log('--------');
    let min = 0;

    for (let i=0; i<4; i++) {
        let sek =0;

        for (let j=0; j<3; j++) {
            console.log(val + ':' + min + ':' + sek);
            sek +=20;
        }
        min +=15;
    }
}


    for (let val=0; val<24; val++){
        for (let min=0; min < 60; min++){
            for (let sek = 0; sek<60; sek++){
                console.log(val + ':' + min + ':' + sek);
      }
    }
}