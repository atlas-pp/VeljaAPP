bool: validacija;
  Date.daysBetween = function( date1, date2 ) {
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
    var difference_ms = date2_ms - date1_ms;
    return difference_ms;
  }
    function MojaFunkcija(n,niz,datum) {
        bool: provera=true;
        int: brojac;
        for(var i=0;i<n;i++){
          if(niz[i].pocetak<datum.pocetak && datum.pocetak<niz[i].kraj)
          { 
            provera=false;
            validacija=false;
          }       
        }
        if(provera==true){
          int: min=Date.daysBetween(niz[0].pocetak,datum.pocetak);
          for(var i=0;i<n;i++){
            if(Date.daysBetween(niz[i].pocetak,datum.pocetak)<min && Date.daysBetween(niz[i].pocetak,datum.pocetak)>0)
            {
              min=Date.daysBetween(niz[i].pocetak,datum.pocetak);
              brojac=i;
            }
          }
          if(datum.kraj<=niz[i].kraj){
            validacija=true;
          }
        }  
    }
  if(klinutaUcionica==1){
      MojaFunkcija(niz.lenght,niz,datum);
      if(validacija==true){
        //izvrsava kod za unos u mongoDB
        validacija=false;
      }
      else{
        //javlja gresku pri unosu
      }
  }