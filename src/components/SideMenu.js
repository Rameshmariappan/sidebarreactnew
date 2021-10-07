import React, { useEffect, useState } from "react";
import logo from "../assets/logo/webscript.png";
import MenuItem from "./MenuItem";
export const menuItems = [
  {
    name: "Roadmap",
    exact: true,
    to: "/Roadmap",
    iconClassName: "bi bi-text-paragraph",
  },
  {
    name: "Backlog",
    exact: true,
    to: `/Backlog`,
    iconClassName: "bi bi-bricks",
  },
  {
    name: "Board",
    exact: true,
    to: `/Board`,
    iconClassName: "bi bi-layout-three-columns",
  },
  {
    name: "Code",
    exact: true,
    to: `/Code`,
    iconClassName: "bi bi-code-slash",
  },
  {
    name: "ProjectPages",
    exact: true,
    to: `ProjectPages`,
    iconClassName: "bi bi-file-text",
  },
  {
    name: "AddShortcut",
    exact: true,
    to: `AddShortcut`,
    iconClassName: "bi bi-journal-plus",
  },
  {
    name: "ProjectSettings",
    exact: true,
    to: `ProjectSettings`,
    iconClassName: "bi bi-gear-fill",
  },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <>
      <div className="headertop">
        <h3 className="letter">
          <i class="bi bi-grid-3x3-gap-fill"></i>
          <div className="letterspace">Jira Software</div>
        </h3>
      </div>
      <div className={`side-menu ${inactive ? "inactive" : ""}`}>
        <div className="top-section">
          <div className="topletter">NewProject</div>
          <div className="logo">
            <img src={logo} alt="webscript" />
          </div>
          <div
            onClick={() => setInactive(!inactive)}
            className="toggle-menu-btn"
          >
            {inactive ? (
              <i class="bi bi-chevron-right"></i>
            ) : (
              <i class="bi bi-chevron-left"></i>
            )}
          </div>
        </div>
        <div className="divider"></div>

        <div className="main-menu">
          <ul>
            {menuItems.map((menuItem, index) => (
              <MenuItem
                key={index}
                name={menuItem.name}
                exact={menuItem.exact}
                to={menuItem.to}
                subMenus={menuItem.subMenus || []}
                iconClassName={menuItem.iconClassName}
                onClick={(e) => {
                  if (inactive) {
                    setInactive(false);
                  }
                }}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
