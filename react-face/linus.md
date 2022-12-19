## 查看远程命令
1. ssh -p
2. lsb_release a 可以查看版本
3.  uname -a 查看电脑明明

## 文件命令
1. df 
2. df -Th
3. ls -la 查看所有文件以及文件的权限设置


## cpu、进程查看
1. top 可以查看到cpu的运行占用情况


## linux常见命令

### 文档形
1. mkdir 是创建文件夹
2. touch xxx.xx 使用touch命令是创建文件
3. vi 编辑文件
4. ：wq是对文件进行保存 :q!是对文件进行不保存退出
5. echo 是对文件进行添加内容
6. cat命令查看文件内容
7. rm 删除文件
8. rm -r 删除目录
9. rm -rf 强制删除



### 下载 解压 压缩命令
1. wget + 链接： 下载
2. tar zxvf + 文件名： 解压
3. tar zcvf + 文件名 + 需要压缩的文件名 ： 压缩
4. kill + 杀死进程的号


### 查看服务的命令
1. service + 服务名称 + status 查看服务状态 
2. service + 服务名称 + stop 关闭服务
3. service + 服务名称 + restart 重启服务
