//Package main ...
package main

import (
	"myrepo/PufferBlock/server/action"
	"myrepo/PufferBlock/server/websockets"
)

func main() {
	//network setup and install and instantiate chaincode
	action.Action()
	//connect and wait to response
	websockets.Websockets()

}
