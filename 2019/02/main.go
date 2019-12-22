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
	input := strings.Split(string(content), ",")
	for _, element := range input {
		temp, _ := strconv.Atoi(element)
		result = append(result, temp)
	}
	return result
}

func part1(input []int) {
	input[1], input[2] = 12, 2
	index := 0
	for {
		action := input[index]
		if action == 99 {
			break
		}
		a := input[index+1]
		b := input[index+2]
		c := input[index+3]
		switch action {
		case 1:
			input[c] = input[a] + input[b]
		case 2:
			input[c] = input[a] * input[b]
		}
		index = index + 4
	}
	fmt.Printf("Result Part1: %v\n", input[0])
}

func part2(input []int) {
	fmt.Printf("Result Part2: %v\n", input[0])
}
