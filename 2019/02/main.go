package main

import (
	"fmt"
	"io/ioutil"
	"strings"
	"strconv"
)

func main() {
	input := getInput()
	part1(input)
	part2(input)
}

func getInput() ([]int) {
	var result []int
	content, err := ioutil.ReadFile("input")
	if err != nil {
    fmt.Printf("Error while reading File.\n")
	}
	input := strings.Split(string(content), "\n")
	for _, element := range input {
		temp, _ := strconv.Atoi(element)
		result = append(result, temp)
	}
	return result
}

func part1(input []int) {
	index := 0
	for index < len(input)-2 {
		action := input[index]
		value1 := input[input[index+1]]
		value2 := input[input[index+2]]
		switch action {
		case 0:
			input[input[index+3]] = value1 + value2
		case 1:
			input[input[index+3]] = value1 * value2

		}

		fmt.Printf("action %v\nvalue1 %v\nvalue2 %v\n\n", action, value1, value2, )
		index = index + 4
	}
	fmt.Printf("Result Part1: %v\n", input[0])
}

func part2(input []int) {
	fmt.Printf("Result Part2: %v\n", input[0])
}
