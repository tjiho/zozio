function stringToInt(str)
{
    var total = 0;
    for(var lettre of str)
    {
        total = total + lettre.charCodeAt(0);
    }    
    return total;
}

function coloration()
{   
    //color = ["#27bfe7","#5227e7","#c927e7","#f16bcd","#e71e50","#e78027","#e7bd27","#27e763","#4baf6b"];
    color = ["#fef9d1","#79a50a","#fd966d","#1a8ffb","#6b59cd","#38d9da","#ff3299","#e7bd27","fb02fe"];
    for(var ele of Array.from(document.getElementsByClassName("dossier")))
    {
        var str = ele.getElementsByTagName("h3")[0].innerText;
        
        value = stringToInt(str) % 9;
        
        ele.style.borderColor = color[value];
    }
}

coloration();
