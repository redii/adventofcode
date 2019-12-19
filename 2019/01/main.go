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

func getInput() ([]string) {
	content, err := ioutil.ReadFile("input")
	if err != nil {
    fmt.Printf("Error while reading File.\n")
	}
	input := strings.Split(string(content), "\n")
	return input
}


func part1(input []string) {
	var result int = 0
	for _, element := range input {
		value, _ := strconv.Atoi(element)
		value = value/3
		if (value >= 2) {
			value = value-2
		}
		result = result+value
	}
	fmt.Printf("Result Part1: %v\n", result)
}

func part2(input []string) {
	result := 0
	for _, element := range input {
		value,_ := strconv.Atoi(element)
		fuel := recursiveCalc(value)
		result = result + fuel
	}
	fmt.Printf("Result Part2: %v\n", result)
}

func recursiveCalc(value int) (int) {
	fuelResult := calcFuel(value)
	recursiveFuelResult := 0
	if (fuelResult >= 9) {
		recursiveFuelResult = recursiveCalc(fuelResult)
	}
	fuelResult = fuelResult + recursiveFuelResult
	return fuelResult
}

func calcFuel(value int) (int) {
	value = value/3
	if (value >= 2) {
		value = value-2
	}
	return value
}
