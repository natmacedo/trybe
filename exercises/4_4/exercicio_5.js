let info1 = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente:"Sim"
  };

  let info2 = {
    personagem: "Tio Patinhas",
    origem: "Pato Christmas on Bear Mountain",
    nota: "Dell’s Four Color Comics #178 O último MacPatinhas",
    recorrente:"Sim"
  };

  for(let dados in info1,info2){
    if(dados != "recorrente"){
    console.log(info1[dados], info2[dados]); 
  }else{
    console.log("Ambos recorrentes");
  }
 }