var list1=[];
var list2=[];
var list3=[];
var list4=[];
var list5=[];
var list6=[];
var list7=[];
var list8=[];
var list9=[];
var n=1;
var x=0;
function addRow(){
    var addRow=document.getElementById('show');
    var newRow=addRow.insertRow(n);
    list1[x]=document.getElementById('fname').value;
    list2[x]=document.getElementById('lname').value;
    list3[x]=document.getElementById('add1').value;
    list4[x]=document.getElementById('pin').value;
    list5[x]=document.getElementById('gen').value;
    list6[x]=document.getElementById('food').value;
    list7[x]=document.getElementById('state').value;
    list8[x]=document.getElementById('country').value;
    var c1=newRow.insertCell(0);
    var c2=newRow.insertCell(1);
    var c3=newRow.insertCell(2);
    var c4=newRow.insertCell(3);
    var c5=newRow.insertCell(4);
    var c6=newRow.insertCell(5);
    var c7=newRow.insertCell(6);
    var c8=newRow.insertCell(7);
    

    c1.innerHTML=list1[x];
    c2.innerHTML=list2[x];
    c3.innerHTML=list3[x];
    c4.innerHTML=list4[x];
    c5.innerHTML=list5[x];
    c6.innerHTML=list6[x];
    c7.innerHTML=list7[x];
    c8.innerHTML=list8[x];
    
    n++;
    x++;
}