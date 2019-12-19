package main

import (
	"fmt"
	"os"
	"bufio"
	"strconv"
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
	input := strings.Split(string(content), "\n")
	return input
}

func part1(input []int) {
	index := 0
	for index < len(input)-2 {
		action, value1, value2, storeIndex := input[index], input[input[index+1]], input[input[index+2]], input[index+3]

		fmt.Printf("action %v\nvalue1 %v\nvalue2 %v\nstoreIndex %v\n\n", action, value1, value2, storeIndex)
		index = index + 4
	}
	fmt.Printf("Result Part1: %v\n", input[0])
}

func part2(input []int) {
	fmt.Printf("Result Part2: %v\n", input[0])
}
