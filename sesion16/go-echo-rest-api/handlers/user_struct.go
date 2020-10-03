package handlers

// User represent the person who is making the request
type User struct {
	Name     string `json:"name,omitempty"`
	Email    string `json:"email"`
	Password string `json:"password"`
}
