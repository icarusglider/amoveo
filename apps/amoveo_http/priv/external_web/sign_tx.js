(function() {
    var div = document.createElement("div");
    document.body.appendChild(div);
    div.appendChild(document.createElement("br"));

    var tx = document.createElement("INPUT");
    tx.setAttribute("type", "text");
    var info = document.createElement("h8");
    info.innerHTML = "sign transaction";
    div.appendChild(info);
    div.appendChild(tx);
    var button = button_maker("sign_tx", sign_tx);
    div.appendChild(button);
    div.appendChild(document.createElement("br"));
    //var signed_tx = document.createElement("h8");
    //div.appendChild(signed_tx);
    //div.appendChild(document.createElement("br"));
    function sign_tx() {
	var t = JSON.parse(tx.value);
	console.log(tx.value);
	console.log(t);
	var t2 = keys.sign(t);
	variable_public_get(["txs", [-6, t2]], function(x) {});
	//console.log(t2);
	//var s = JSON.stringify(t2);
	//signed_tx.innerHTML = s;
    }
})();
