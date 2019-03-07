package admin

import (
	"net/http"

	"github.com/labstack/echo"
)

/*HomePageEndPoint render index front page */
func HomePageEndPoint(c echo.Context) error {
	d := homePage{Title: "un titre"}
	return c.Render(http.StatusOK, "home", d)
}