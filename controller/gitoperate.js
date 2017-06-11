var shell =require('shelljs');
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}
exports.createBranch=function(req,res){
shell.exec("git branch "+req.query.id)
res.json("添加成功")
}