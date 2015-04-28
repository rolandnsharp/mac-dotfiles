

//custom prompt <database>@<hostname>$
EDITOR = "vim";

host = db.serverStatus().host;

prompt = function() {
  return db+"@"+host+"> ";
}
