package routes

import (
	"os"
	"portfolio/routes/actions"
	"portfolio/routes/api"
	"portfolio/utils"

	//"strings"

	"github.com/labstack/echo/middleware"

	"github.com/labstack/echo"
)

/*A is a pointer to the App instance */
var (
	A    *echo.Echo
	apiG *echo.Group
)

/*SetRoutes bind routes to the application */
func SetRoutes() {
	/* create api router group and securise it with jwt */
	apiG = A.Group("/api")
	apiG.Use(middleware.JWTWithConfig(middleware.JWTConfig{
		SigningKey: []byte(os.Getenv("SECRET")),
	}))

	/* Handle server actions on router */
	api.HandleAdminAPI(apiG)
	api.HandlePortfolioAPI(apiG)
	api.HandleBlogAPI(apiG)
	api.HandleExperienceAPI(apiG)
	api.HandleEducationAPI(apiG)
	api.HandleSocialAPI(apiG)
	api.HandleSubsAPI(apiG)

	api.HandleSkillAPI(apiG)
	api.HandleServiceAPI(apiG)
	api.HandleImageAPI(apiG)

	actions.SearchEngine(A)
	actions.SyncOpenAPI(A)
	actions.HandleConnection(A)

	A.Static("/", "./client/build")

	A.Static("/upload", "./uploads")

	/*Set redirection to application on 404  */
	A.HTTPErrorHandler = func(err error, c echo.Context) {
		utils.RedirectToClientHandler(err, c)
	}
}
