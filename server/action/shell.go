//Package action 定义了初始化网络和操作账本的方法
package action

import (
	"fmt"
	"os/exec"
)

//测试用
func shell() {
	cmdPath, _ := exec.LookPath("docker")
	out, _ := exec.Command("bash", "-c", "docker ps >./logs/log.txt").Output()
	fmt.Println(string(out))
	fmt.Println(string(cmdPath))
}
