package handlers

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

// SaveUser -> POST/Create
func SaveUser(c echo.Context) error {
	return c.String(http.StatusOK, "User saved")
}

// GetUser -> GET/Read
func GetUser(c echo.Context) error {
	id := c.Param("id")
	if id == "" {
		return c.String(http.StatusOK, "GetUser")
	}
	return c.String(http.StatusOK, "GetUser "+id)
}

// UpdateUser -> PUT/Update
func UpdateUser(c echo.Context) error {
	id := c.Param("id")
	return c.String(http.StatusCreated, "user "+id+" has been updated")
}

// DeleteUser -> DELETE/Delete
func DeleteUser(c echo.Context) error {
	id := c.Param("id")
	return c.String(http.StatusOK, "user "+id+" has been deleted")
}
