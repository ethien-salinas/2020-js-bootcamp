package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {

	port := ":3000"

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, r.Method+" Hello World!")
	})
	http.HandleFunc("/hello", hNameHandler)

	err := http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatal(err)
	}

}

func hNameHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, r.Method+" Hello Ethien!")
}
