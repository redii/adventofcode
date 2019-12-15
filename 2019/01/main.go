package main

import (
	"fmt"
	"io/ioutil"
	"strings"
	"strconv"
)

func part1(input []string) {
	var result int = 0
	for _, element := range input {
		v,_ := strconv.Atoi(element)
		v = v/3
		if (v >= 2) {
			v = v-2
		}
		result = result+v
	}
	fmt.Printf("Result Part1: %v\n", result)
}

func part2(input []string) {
	var result int = 0
	// for _, element := range input {
	//
	// }
	fmt.Printf("Result Part2: %v\n", result)
}

func main() {
	content, err := ioutil.ReadFile("input")
	if err != nil {
    fmt.Printf("Error while reading File.\n")
	}
	lines := strings.Split(string(content), "\n")
	part1(lines)
	part2(lines)
}
