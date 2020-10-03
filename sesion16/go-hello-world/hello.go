package main

import (
	"fmt"
	"strings"

	"rsc.io/quote"
)

func main() {
	fmt.Println("Hello World!")

	// declarando variable antes de usarla
	var result string
	result = getQuote("glass")
	fmt.Println(result)

	// usando duck typing
	goCallResult := getQuote("go")
	fmt.Println(goCallResult)

	fmt.Println(getQuote("hello"))
	fmt.Println(getQuote("opt"))
}

func getQuote(kindOfQuote string) string {
	var result string
	switch strings.ToLower(kindOfQuote) {
	case "glass":
		result = quote.Glass()
	case "go":
		result = quote.Go()
	case "hello":
		result = quote.Hello()
	case "opt":
		result = quote.Opt()
	}
	return result
}
