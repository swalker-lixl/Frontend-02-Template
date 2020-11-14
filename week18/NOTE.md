学习笔记
学习笔记

安装nodejs

	sudo apt install nodejs

安装npm

	sudo apt install npm


Node.js 中有四种基本的流类型：

	Readable - 可读的流 (例如 fs.createReadStream())，用nodejs代码从流里面可以获取数据

	Writable - 可写的流 (例如 fs.createWriteStream()).

	Duplex - 可读写的流 (例如 net.Socket).

	Transform - 在读写过程中可以修改和变换数据的 Duplex 流 (例如 zlib.createDeflate()).


stream.Readable

	data - 当有数据可读时触发。

	end - 没有更多的数据可读时触发。

	error - 在接收和写入过程中发生错误时触发。

	finish - 所有数据已被写入到底层系统时触发。

	drain - 表示已经把调用write的数据全写完了

	pipe -  把可读的流导入到一个可写的流里面

scp
	
	本地文件上传到服务器
	scp -r 本地文件路径 name@服务器IP:服务器路径

	服务器文件下载到本地
	scp -r name@服务器IP:服务器路径 本地文件路径

OAuth

	1.打开 https://github.com/login/oauth/authorize

	2.auth路由：接收code，用code+client_id+client_secret换token

	3.创建server，接受token，然后点击发布

	4.publish路由：用token获取用户信息，检查权限，接受发布
