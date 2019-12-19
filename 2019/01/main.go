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
	var result int = 0
	for _, value := range input {
		value = value/3
		if (value >= 2) {
			value = value-2
		}
		result = result+value
	}
	fmt.Printf("Result Part1: %v\n", result)
}

func part2(input []int) {
	result := 0
	for _, value := range input {
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
