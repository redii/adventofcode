package main

import (
	"fmt"
	"io/ioutil"
	"strings"
	// "strconv"
)

func main() {
	input := getInput()
	part1(input)
	part2(input)
}

func getInput() ([]string) {
	content, err := ioutil.ReadFile("input")
	if err != nil {
    fmt.Printf("Error while reading File.\n")
	}
	input := strings.Split(string(content), ",")
	return input
}

func part1(input []string) {
	fmt.Printf("Result Part1: %v\n", input[0])
}

func part2(input []string) {
	fmt.Printf("Result Part2: none\n")
}























