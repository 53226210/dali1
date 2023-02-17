function efface(){
    document.getElementById("T1").value=null
}
function effacee(){
    document.getElementById("T2").value=null
}
function efface1(){
    document.getElementById("T3").value=null
}
function efface2(){
    document.getElementById("T5").value=null
}
function efface3(){
    document.getElementById("T6").value=null
}
function efface4(){
    document.getElementById("T7").value=null
}
function efface5(){
    document.getElementById("T9").value=null
}
function efface6(){
    document.getElementById("T10").value=null
}
function efface7(){
    document.getElementById("T11").value=null
}
function efface8(){
    document.getElementById("T13").value=null
}
function efface9(){
    document.getElementById("T14").value=null
}
function efface10(){
    document.getElementById("T15").value=null
}
function efface11(){
    document.getElementById("T17").value=null
}
function efface12(){
    document.getElementById("T18").value=null
}
function efface13(){
    document.getElementById("T19").value=null
}
function efface14(){
    document.getElementById("T21").value=null
}
function efface15(){
    document.getElementById("T22").value=null
}
function efface16(){
    document.getElementById("T24").value=null
}
function efface17(){
    document.getElementById("T25").value=null
}
function efface18(){
    document.getElementById("T26").value=null
}
function efface19(){
    document.getElementById("T28").value=null
}
function efface20(){
    document.getElementById("T29").value=null
}
function efface21(){
    document.getElementById("T31").value=null
}
function efface22(){
    document.getElementById("T32").value=null
}
function efface23(){
    document.getElementById("T33").value=null
}
function efface24(){
    document.getElementById("T35").value=null
}
function efface25(){
    document.getElementById("T36").value=null
}
function efface26(){
    document.getElementById("T37").value=null
}
function efface27(){
    document.getElementById("T39").value=null
}
function efface28(){
    document.getElementById("T40").value=null
}
function efface29(){
    document.getElementById("T41").value=null
}
function efface30(){
    document.getElementById("T43").value=null
}
function efface31(){
    document.getElementById("T44").value=null
}


function calcul(){
    
    x=parseFloat(document.getElementById("T1").value)
    y=parseFloat(document.getElementById("T2").value)
    c=parseFloat(document.getElementById("T3").value)
    s=(((c*2)+y+x)/4)
    h=document.getElementById("T4").value=Math.floor(s*100)/100
    setTimeout("calcul()",h)
    
    


    x1=parseFloat(document.getElementById("T5").value)
    y1=parseFloat(document.getElementById("T6").value)
    c1=parseFloat(document.getElementById("T7").value)
    s1=(((c1*2)+y1+x1)/4)
    h1=document.getElementById("T8").value=Math.floor(s1*100)/100
    setTimeout("calcul()",h1)
   
    



    x2=parseFloat(document.getElementById("T9").value)
    y2=parseFloat(document.getElementById("T10").value)
    c2=parseFloat(document.getElementById("T11").value)
    s2=(((c2*2)+y2+x2)/4)
    Anglais=document.getElementById("T12").value=Math.floor(s2*100)/100
    setTimeout("calcul()",Anglais)


    x3=parseFloat(document.getElementById("T13").value)
    y3=parseFloat(document.getElementById("T14").value)
    c3=parseFloat(document.getElementById("T15").value)
    s3=(((c3*2)+y3+x3)/4)
    Histoire=document.getElementById("T16").value=Math.floor(s3*100)/100
    setTimeout("calcul()",Histoire)


    x4=parseFloat(document.getElementById("T17").value)
    y4=parseFloat(document.getElementById("T18").value)
    c4=parseFloat(document.getElementById("T19").value)
    s4=(((c4*2)+y4+x4)/4)
    Géographie=document.getElementById("T20").value=Math.floor(s4*100)/100
    setTimeout("calcul()",Géographie)


    x5=parseFloat(document.getElementById("T21").value)
    c5=parseFloat(document.getElementById("T22").value)
    s5=(((c5*2)+x5)/3)
    philosophie=document.getElementById("T23").value=Math.floor(s5*100)/100
    setTimeout("calcul()",philosophie)


    x6=parseFloat(document.getElementById("T24").value)
    y6=parseFloat(document.getElementById("T25").value)
    c6=parseFloat(document.getElementById("T26").value)
    s6=(((c6*2)+y6+x6)/4)
    option=document.getElementById("T27").value=Math.floor(s6*100)/100
    setTimeout("calcul()",option)


    y7=parseFloat(document.getElementById("T28").value)
    c7=parseFloat(document.getElementById("T29").value)
    s7=(((c7*2)+y7)/3)
    math=document.getElementById("T30").value=Math.floor(s7*100)/100
    setTimeout("calcul()",math)



    x8=parseFloat(document.getElementById("T31").value)
    y8=parseFloat(document.getElementById("T32").value)
    c8=parseFloat(document.getElementById("T33").value)
    s8=(((c8*2)+y8+x8)/4)
    Physique=document.getElementById("T34").value=Math.floor(s8*100)/100
    setTimeout("calcul()",Physique)



    x9=parseFloat(document.getElementById("T35").value)
    y9=parseFloat(document.getElementById("T36").value)
    c9=parseFloat(document.getElementById("T37").value)
    s9=(((c9*2)+y9+x9)/4)
    Programmation=document.getElementById("T38").value=Math.floor(s9*100)/100
    setTimeout("calcul()",Programmation)



    x10=parseFloat(document.getElementById("T39").value)
    y10=parseFloat(document.getElementById("T40").value)
    c10=parseFloat(document.getElementById("T41").value)
    s10=(((c10*2)+y10+x10)/4)
    STI=document.getElementById("T42").value=Math.floor(s10*100)/100
    setTimeout("calcul()",STI)


    y11=parseFloat(document.getElementById("T43").value)
    c11=parseFloat(document.getElementById("T44").value)
    s11=(((c11*2)+y11)/3)
    Sport=document.getElementById("T45").value=Math.floor(s11*100)/100
    
    setTimeout("calcul()",Sport)

    
    

    if (document.getElementById('C1').checked==false){

    cc1=((h+(h1*2)+(Anglais*2)+Histoire+Géographie+philosophie+option+(math*3)+(Physique*3)+(Programmation*3)+(STI*3)+Sport)/22)
    }
    if (document.getElementById('C1').checked==true){
        cc1=((h+(h1*2)+(Anglais*2)+Histoire+Géographie+philosophie+option+(math*3)+(Physique*3)+(Programmation*3)+(STI*3))/21)
    }
   
    nn=document.getElementById("T46").value=Math.floor(cc1*100)/100
    setTimeout("calcul()",nn)
    



    
    
    
    

    
}
function cal(){
    document.getElementById("T46").value=((h+(h1*2)+(Anglais*2)+Histoire+Géographie+philosophie+option+(math*3)+(Physique*3)+(Programmation*3)+(STI*3)+Sport)/22)
}

