/////////////////////////////////////////      DECLARATION DES FONCTIONS    //////////////////////////////////////////////

function ObjHtml(baliseHtml,id,classCss,idparent,texte,title,value,type,insert){
	this.baliseHtml=baliseHtml;
	this.id=id;
	this.classCss=classCss;
	this.idparent=idparent;
	this.texte=texte;
	this.title=title;
	this.value=value;
	this.type=type;
	this.insert=insert;
	    };
function CreateHtml(baliseHtml,id,classCss,idparent,texte,title,value,type,insert)
{
	var x =id;
	var y = document.createElement(baliseHtml);
	y.id = x;

		if (classCss != ''){y.className = classCss};
		if (texte != ''){y.innerHTML = texte};
		if (title != ''){y.title = title};
		if (value != ''){y.value = value};
		if (type != ''){y.type = type};

		if (idparent === 'body') {
			document.body.appendChild(y);
		} else {
			document.getElementById(idparent).appendChild(y);};
};
function insertionElementHtml(a){
	for (var i=0 ; i< arrayHtml.length ; i++) {

		if (arrayHtml[i].insert === a){
			CreateHtml(arrayHtml[i].baliseHtml,arrayHtml[i].id,arrayHtml[i].classCss,arrayHtml[i].idparent,arrayHtml[i].texte,arrayHtml[i].title,arrayHtml[i].value,arrayHtml[i].type,arrayHtml[i].insert);
			};
		};
	};
