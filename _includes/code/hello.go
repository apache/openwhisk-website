package main

import "fmt"

// Main function for the action
func Main(obj map[string]interface{}) map[string]interface{} {
	name, ok := obj["name"].(string)
	if !ok {
		name = "stranger"
	}
	fmt.Printf("name=%s\n", name)
	msg := make(map[string]interface{})
	msg["msg"] = "Hello, " + name + "!"
	return msg
}
