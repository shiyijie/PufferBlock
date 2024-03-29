//Package main ...
package main

import (
	"myrepo/PufferBlock/server/action"
	"myrepo/PufferBlock/server/webserver"
	"myrepo/PufferBlock/server/websockets"
	"time"
)

//主程序入口
func main() {
	//初始化网络
	//action.Init()

	//建立连接，接受请求并回复
	websockets.Websockets()

	//测试
	//testAction
	//testWebserver()
}

//测试链码操作
func testAction() {

	action.InitUser(0, "a")
	action.InitUser(2, "b")
	time.Sleep(time.Second * 3)
	action.QueryAll(1)
	action.Invoke(3, "a", "b", 10)
	time.Sleep(time.Second * 3)
	action.QueryUser(0, "a")
	action.QueryUser(2, "b")
}

func testWebserver() {

	webserver.Webserver()
}
