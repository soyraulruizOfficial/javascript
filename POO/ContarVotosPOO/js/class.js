class Votaciones {
    AFavor= 0;
    EnContra= 0;
    Abstinencia = 0;
  
    ContarVotos(BotonPrecionado) {
      switch (BotonPrecionado) {
        case "A favor":
          this.AFavor++;
          break;
        case "En contra":
          this.EnContra++;
          break;
        case "Abstinencia":
          this.Abstinencia++;
          break;
      }
      console.log(this.AFavor ,this.EnContra ,this.Abstinencia);
    }

    verificarGanador(){

        if(this.AFavor> this.EnContra){
            if(this.AFavor > this.Abstinencia){
                console.log(this.AFavor)
            }else{
                console.log(this.Abstinencia);
            }
        }else if(this.EnContra>this.Abstinencia){
            console.log(this.EnContra)
        }else{
            console.log(this.Abstinencia)
        }
    }
  }