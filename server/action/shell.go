//Package action ...
package action

import (
	"fmt"
	"os/exec"
)

func shell() {
	cmdPath, _ := exec.LookPath("docker")
	out, _ := exec.Command("bash", "-c", "docker ps >./logs/log.txt").Output()
	fmt.Println(string(out))
	fmt.Println(string(cmdPath))
}
