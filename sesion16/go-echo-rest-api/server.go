package main

import (
	"go-echo-rest-api/handlers"
	"net/http"
	"os"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	// Echo instance
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Routes
	e.GET("/", hello)
	e.POST("/login", handlers.Login)

	// Route group
	r := e.Group("/users")
	r.Use(middleware.JWT([]byte(os.Getenv("JWT_SECRET"))))
	r.POST("/", handlers.SaveUser)
	r.GET("/", handlers.GetUser)
	r.GET("/:id", handlers.GetUser)
	r.PUT("/:id", handlers.UpdateUser)
	r.DELETE("/:id", handlers.DeleteUser)

	// Ejercicio: Leer path parameter "id" para GET y DELETE
	// en GET debe responder cuando lleve o no usuario

	// Start server
	e.Logger.Fatal(e.Start(":1323"))
}

// Handler
func hello(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}
