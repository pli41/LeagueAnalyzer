1. 去github网站上注册一个账号
2. 使用Github

用GitHub 软件的方式
下载GitHub GUI

我没有具体用过，但是理论上都和后面写的东西差不多，只是把指令变成了按钮

用GIT GUI 或者指令的方式
下载GIT
https://git-scm.com/download/
相关中文教程
http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/

安装GIT到任意位置，所有选项选择默认即可

比如在 D:/GitHub 目录下，可以右键，会出现 git gui here 和 git bash here 两种选项。
第一种是有gui的连接github的方式，第二种是command
Gui的使用方式应该和Github GUI 差不多。

我这里只说指令的方式。
比如在 D:/GitHub 目录下，需要下载一个repository（就是我们的项目）
在D:/GitHub 里面右键调出 git bash
使用 git clone <Https 网址>， 这个网址可以在Github网站上找到。
这个指令的意思是把某一个repo最新的版本克隆到本地（local）

然后你把你的更新加入这个本地的文件夹，之后要做的当然就是上传(push)到云端(GitHub server)
因为我们的重点是要看见过往的版本，所以需要对于你每一个上传做一个标记，这个标记叫做commit
假如现在你已经更新好了，打算上传。
在D:/GitHub/<repo 名字> 里面右键调出 git bash
使用指令 git add --all ，这个指令会自动把所有改动加入标记。
之后再使用指令建立一个标记
git commit -m “<一些message，表示这个改动你做了什么（必须写）》” ，注意有引号。
这样你就在本地更新并标记好了你的改动，之后就是上传到云端。
使用指令
git push <Https 网址> 即可。
在此过程中如果要求你的用户名密码，就输入你之前建立的用户名密码，记住在做整个过程之前先要通知repo的管理者把你加入合作者，才能直接上传改动。

如果别人发布了改动，你需要更新你本地的版本
在D:/GitHub/<repo 名字> 里面右键调出 git bash
使用 git pull <Https 网址> 即可。
建议在做所有改动之前，都先用这个指令更新本地的版本。

遇到什么问题尽管问。因为我只用过指令所以只能提供者方面比较细节的讲解。但是不管用什么方式，整个process都没有不同，只是把指令变成了按钮而已。
还有就是如果遇到网站无法登陆，多半是因为需要VPN。