import { useContext } from "react";
import { ContextApplication } from "../../libs/config/contexts";
import { Outlet } from "react-router-dom";
import LibComponentNavbar from "../../libs/components/LibComponentNavbar.jsx";
import PageAuthSignIn from "../auth/PageSignIn.jsx";

const PageCommonOutlet = () => {
  const application = useContext(ContextApplication);

  return (
    <>
      {application.isAuthenticated ? (
        <>
          <LibComponentNavbar />
          <Outlet />
        </>
      ) : (
        <PageAuthSignIn />
      )}
    </>
  )

}

export default PageCommonOutlet;