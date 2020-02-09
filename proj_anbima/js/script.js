//alert("Ola pessoa!")
//var resposta = confirm("deseja excluir?")
/*console.log(resposta);
*/

function inss(renda) {
      let aliquota=0.00;
      let v_max=642.34;
      if(renda<=1751.81){
             aliquota=(renda*8)/100;
      }else if(renda>1751.81 && renda<=2919.72){
            aliquota=(renda*9)/100;
      }else if (renda>2919.72 && renda<=5839.45) {
            aliquota=(renda*11)/100;
      }else{
            aliquota= v_max;
      }
      let aliquota_arredondada=parseFloat(aliquota.toFixed(2));
      return aliquota_arredondada;
}
function irpf(renda) {
      let aliquota=0.00;
      if(renda<=1903.98){
             aliquota=(renda*0);
      }else if(renda>1903.98 && renda<=2826.65){
            aliquota=renda*0.075;
            aliquota=aliquota-142.80;

      }else if (renda>2826.65 && renda<=3751.06){
            aliquota=renda*0.15;
            aliquota=aliquota-354.80;
      }else if(renda>3751.06 && renda<=4664.68){
            aliquota= renda*0.225;
            aliquota=aliquota-639.13;
      }else{
            aliquota= renda*0.275;
            aliquota= aliquota-869.36;
      }
      let aliquota_arredondada=parseFloat(aliquota.toFixed(2));
      return(aliquota_arredondada);
}

document.querySelector("#cadastrar").addEventListener("click",function(){
      let renda =document.getElementById('salario').value;
      let dep =document.querySelector("#num_dep").value;
      if (renda.length>0 && dep.length>0){
              let imposto_inss=inss(renda);
              //System.out.println.(imposto_inss)
              let desconto_dep=189.59*dep;
              let desconto_dep_round=parseFloat(desconto_dep.toFixed(2));
              let aux1=renda-(desconto_dep_round+imposto_inss);
              let imposto_irpf=irpf(aux1);
              let desconto_total=(imposto_irpf+imposto_inss);
              let desconto_total_round=parseFloat(desconto_total.toFixed(2))
              let salario_final=(renda-(imposto_inss+imposto_irpf));
              let salario_final_round=parseFloat(salario_final.toFixed(2))
              window.document.writeln("renda bruta:R$ \t");
              window.document.writeln(renda+'<br>');
              window.document.writeln("dependentes: \t");
              window.document.writeln(dep+'<br>');
              window.document.writeln('<br>');
              window.document.writeln("imposto inss:R$ \t");
              window.document.writeln(imposto_inss+'<br>');
              window.document.writeln("imposto irpf:R$\t");
              window.document.writeln(imposto_irpf+'<br>');
              window.document.writeln("desconto_total:R$ \t");
              window.document.writeln(desconto_total_round+'<br>');
              window.document.writeln("salario final:R$ \t");
              window.document.writeln(salario_final_round);



        //alert(parseInt(renda)+parseInt(dep));
      }else{
        alert("digite os valores")
      }
  
});
/*
document.querySelector(#cadastrar).addEventListener("click",function(){   
    let renda=document.querySelector("#salario").value;
    let dep=document.querySelector("#num_dep").value;
    if(renda.length>0 && dep.length>0){
        var imposto_inss=inss(renda);
        var desconto_dep=(189.59*dep);
        var aux1=(renda-(imposto_inss+desconto_dep));
        var imposto_irpf=irpf(aux1);
        window.document.writeln("Imposto inss:R$\t");
        window.document.writeln(imposto_inss);
        window.document.writeln("Imposto irpf:R$\t");
        window.document.writeln(imposto_irpf);
        window.document.writeln("desconto total=R$\t");
        window.document.writeln(imposto_inss+imposto_irpf);
        window.document.writeln("salario final=R$\t");
        window.document.writeln(renda-imposto_inss-imposto_irpf);

    }else{
      	alert("digite os valores");
    }
	
});
*/
document.getElementById("cadastrar").onsubmit= function(e){
      e.preventDefault();
      alert("submeter!")
}
 


