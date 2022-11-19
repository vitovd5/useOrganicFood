var db = window.openDatabase("OrganicFood Banco", "2.0", "Mybase", 4048);
db.transaction(function(criar){
    criar.executeSql("CREATE TABLE users (ID PRIMARY KEY, nome TEXT, senha TEXT)");

});


function salvar() {
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;

    db.transaction(function(armazenar){
        armazenar.executeSql("INSERT INTO users (nome, senha) VALUES (?,?)", [nome,senha]);

    });
}